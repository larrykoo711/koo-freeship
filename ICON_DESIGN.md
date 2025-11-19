# FreeShip 图标设计系统

## 🎨 设计理念: Origami Wave (折纸波浪)

一个融合了折纸艺术与海洋元素的极简设计,体现了 FreeShip 物流平台的精准与优雅。

### 设计特色

- **钻石形船体**: 象征前进的动力与方向
- **折纸艺术风格**: 体现精准、专业、现代
- **分层透明度**: 营造轻盈的视觉层次
- **极简波浪**: 简约而不失海洋特征

### 品牌色彩

- **主色调**: Ocean Blue `#0066CC`
- **深色变体**: Ocean Dark `#0052A3`
- **浅色变体**: Ocean Light `#3399FF`
- **强调色**: Accent Orange `#FF6B35`

---

## 📁 文件结构 (Next.js 15 规范)

```
koo-freeship/
├── src/app/                    # Next.js 特殊约定文件
│   ├── favicon.ico             # 浏览器标签图标
│   ├── icon.png                # 32x32 标准图标
│   ├── icon-192.png            # Android Chrome
│   ├── icon-512.png            # PWA 大图标
│   ├── apple-icon.png          # iOS 设备
│   └── opengraph-image.png     # 社交分享图
│
├── public/
│   └── logo.svg               # UI 组件用 Logo
│
└── generate-icons.js          # 图标生成工具
```

---

## 🔧 使用说明

### 查看 Logo
```jsx
import { Logo } from "@/components/logo"

// 自动适配主题颜色
<Logo width={24} height={24} />
```

### 更新图标
1. 编辑 `/public/logo.svg`
2. 运行 `node generate-icons.js`
3. 所有图标自动更新

### Next.js 自动处理
- 无需手动配置 metadata
- 自动生成 `<link>` 标签
- 自动缓存优化

---

## ✨ 技术亮点

- **SVG 矢量设计**: 完美缩放,支持 currentColor
- **8% 填充透明度**: 轻盈而不失存在感
- **虚线折痕**: 暗示 3D 立体结构
- **双层波浪**: 营造视觉深度

---

## 📏 设计规格

| 文件 | 尺寸 | 用途 |
|------|------|------|
| logo.svg | 24x24 viewBox | UI 组件 |
| icon.png | 32x32 | 浏览器标准 |
| icon-192.png | 192x192 | Android |
| icon-512.png | 512x512 | PWA |
| apple-icon.png | 180x180 | iOS |
| opengraph-image.png | 1200x630 | 社交媒体 |

---

**设计完成时间**: 2024-11-19
**设计风格**: Origami Wave
**技术栈**: Next.js 15 + SVG + Sharp