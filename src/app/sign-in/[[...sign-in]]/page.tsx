import { SignIn } from "@clerk/nextjs"
import { shadcn } from "@clerk/themes"

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-900">
      <SignIn
        appearance={{
          baseTheme: shadcn,
          elements: {
            logoImage: "rounded-full",
          }
        }}
      />
    </div>
  )
}