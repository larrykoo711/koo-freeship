#!/usr/bin/env node

/**
 * FreeShip Icon Generator - Node.js Version
 * Generates all required icon sizes from SVG logo
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

// Define icon sizes needed
const ICON_SIZES = {
  'icon.png': 32,
  'icon-192.png': 192,
  'icon-512.png': 512,
  'apple-icon.png': 180,
};

// Colors for Maritime Precision theme
const COLORS = {
  oceanBlue: '#0066CC',
  oceanDark: '#0052A3',
  oceanLight: '#3399FF',
  accentOrange: '#FF6B35',
  white: '#FFFFFF',
  dark: '#1A1A1A',
};

async function createIconFromSVG(svgPath, outputPath, size, options = {}) {
  const { background, padding = 0 } = options;

  // Read SVG content
  let svgContent = await fs.readFile(svgPath, 'utf8');

  // Replace currentColor with specific color
  const color = background ? COLORS.white : COLORS.oceanBlue;
  svgContent = svgContent.replace(/currentColor/g, color);

  // Create buffer from modified SVG
  const svgBuffer = Buffer.from(svgContent);

  let pipeline = sharp(svgBuffer);

  if (background) {
    // Calculate padding
    const paddingPx = Math.floor(size * padding);
    const logoSize = size - paddingPx * 2;

    // Resize logo with padding
    pipeline = pipeline
      .resize(logoSize, logoSize)
      .extend({
        top: paddingPx,
        bottom: paddingPx,
        left: paddingPx,
        right: paddingPx,
        background: { r: 0, g: 102, b: 204, alpha: 1 }, // Ocean blue
      });
  } else {
    // Simple resize for transparent icons
    pipeline = pipeline.resize(size, size);
  }

  // Convert to PNG
  await pipeline
    .png()
    .toFile(outputPath);

  console.log(`✅ Generated ${outputPath} (${size}x${size})`);
}

async function createFaviconICO(iconPath, outputPath) {
  // For now, we'll copy the 32x32 PNG
  // For a proper ICO, you'd need a specialized library
  await fs.copyFile(iconPath, outputPath.replace('.ico', '_32.png'));
  console.log(`✅ Generated ${outputPath} placeholder (use online converter for proper ICO)`);
}

async function createOpenGraphImage(svgPath, outputPath) {
  // Read SVG and convert to white
  let svgContent = await fs.readFile(svgPath, 'utf8');
  svgContent = svgContent.replace(/currentColor/g, COLORS.white);

  // Create a 1200x630 canvas with gradient background
  const width = 1200;
  const height = 630;

  // Create gradient SVG background
  const backgroundSVG = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#0066CC;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0052A3;stop-opacity:1" />
        </linearGradient>
        <pattern id="waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="30" fill="white" opacity="0.05"/>
          <circle cx="0" cy="0" r="30" fill="white" opacity="0.05"/>
          <circle cx="100" cy="100" r="30" fill="white" opacity="0.05"/>
        </pattern>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#gradient)"/>
      <rect width="${width}" height="${height}" fill="url(#waves)"/>

      <!-- Logo -->
      <g transform="translate(${(width - 200) / 2}, ${(height - 200) / 2 - 50})">
        <g transform="scale(8.33)">
          ${svgContent.match(/<svg[^>]*>(.*)<\/svg>/s)[1]}
        </g>
      </g>

      <!-- Text -->
      <text x="${width / 2}" y="${height / 2 + 120}" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="bold" fill="white" text-anchor="middle">FreeShip</text>
      <text x="${width / 2}" y="${height / 2 + 170}" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="white" opacity="0.9" text-anchor="middle">Shipping Management Platform</text>

      <!-- Decorative elements -->
      <circle cx="100" cy="${height - 100}" r="150" fill="white" opacity="0.03"/>
      <circle cx="${width - 100}" cy="100" r="150" fill="white" opacity="0.03"/>
    </svg>
  `;

  // Convert SVG to PNG
  await sharp(Buffer.from(backgroundSVG))
    .png()
    .toFile(outputPath);

  console.log(`✅ Generated ${outputPath} (1200x630)`);
}

async function main() {
  const projectRoot = process.cwd();
  const svgPath = path.join(projectRoot, 'public', 'logo.svg');
  const appDir = path.join(projectRoot, 'src', 'app');

  console.log('🚀 FreeShip Icon Generator');
  console.log('=' .repeat(40));

  try {
    // Check if SVG exists
    await fs.access(svgPath);

    // Generate standard icons
    console.log('\n📦 Generating standard icons...');
    for (const [filename, size] of Object.entries(ICON_SIZES)) {
      const outputPath = path.join(appDir, filename);

      if (filename.includes('apple')) {
        // Apple icon with background and padding
        await createIconFromSVG(svgPath, outputPath, size, {
          background: COLORS.oceanBlue,
          padding: 0.15,
        });
      } else {
        // Regular icons with transparent background
        await createIconFromSVG(svgPath, outputPath, size);
      }
    }

    // Generate favicon placeholder
    console.log('\n🎯 Generating favicon placeholder...');
    const faviconPath = path.join(appDir, 'favicon.ico');
    await createFaviconICO(path.join(appDir, 'icon.png'), faviconPath);

    // Generate Open Graph image
    console.log('\n🖼️ Generating Open Graph image...');
    const ogPath = path.join(appDir, 'opengraph-image.png');
    await createOpenGraphImage(svgPath, ogPath);

    console.log('\n✨ All icons generated successfully!');
    console.log('\n📁 Files created in src/app/:');
    const files = await fs.readdir(appDir);
    files
      .filter(f => f.endsWith('.png') || f.endsWith('.ico'))
      .forEach(f => console.log(`  - ${f}`));

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}