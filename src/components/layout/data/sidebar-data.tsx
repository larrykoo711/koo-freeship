import {
  IconLayoutDashboard,
  IconUsers,
} from "@tabler/icons-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { type SidebarData } from "../types"
import { useUser } from "@clerk/nextjs"

export function useSidebarData(): SidebarData {
  const { user: clerkUser } = useUser()
  
  return {
    user: {
      name: clerkUser?.fullName || clerkUser?.firstName || "Guest",
      email: clerkUser?.primaryEmailAddress?.emailAddress || "",
      avatar: clerkUser?.imageUrl || "/avatars/avatar.svg",
    },
  teams: [
    {
      name: "FreeShip",
      logo: ({ className }: { className: string }) => (
        <Logo className={cn("invert dark:invert-0", className)} />
      ),
      plan: "Shipping Magic",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: IconLayoutDashboard,
        },
        {
          title: "Users",
          url: "/users",
          icon: IconUsers,
        },
      ],
    },
  ],
  }
}
