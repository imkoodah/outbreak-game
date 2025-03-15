"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { GalleryVerticalEnd, Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  {
    category: "Introduction",
    items: [
      { title: "Introduction", url: "/introduction" },
      { title: "Getting Started", url: "/introduction/getting-started" },
    ],
  },
  {
    category: "Systems",
    items: [
      { title: "Parkour System", url: "/systems/parkour-system" }
    ],
  },
  {
    category: "Documentation",
    items: [
      { title: "API Reference", url: "/documentation/api-reference" },
    ],
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/">
                  <div className="bg-primary text-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <GalleryVerticalEnd className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">Game Docs</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <form>
            <SidebarGroup className="py-0">
              <SidebarGroupContent className="relative">
                <Label htmlFor="search" className="sr-only">
                  Search
                </Label>
                <Input id="search" placeholder="Search the docs..." className="pl-8" />
                <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
              </SidebarGroupContent>
            </SidebarGroup>
          </form>
          <div className="px-4 py-2">
            <ThemeToggle />
          </div>
        </SidebarHeader>
        <SidebarContent>
          {navItems.map((section, index) => (
              <SidebarGroup key={section.category} className={index < navItems.length - 1 ? "pb-4 border-b border-border" : ""}>
                <SidebarGroupLabel className="items-center justify-center" >
                  {section.category}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                        <SidebarMenuItem key={item.url}>
                          <SidebarMenuButton asChild isActive={pathname === item.url}>
                            <Link href={item.url}><b>{item.title}</b></Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
  )
}

