"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Home, Search, Coins, MessageSquareText, UserRound, Settings, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenuAction } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { LogoSquare } from "./LogoSquare"

const NAV = [
  { title: "Overview", url: "/investor", icon: Home },
  { title: "Search", url: "/investor/search", icon: Search },
  { title: "Investments", url: "/investor/investments", icon: Coins },
  { title: "Chats", url: "/investor/chats", icon: MessageSquareText },
  { title: "Profile", url: "/investor/profile", icon: UserRound },
  { title: "Settings", url: "/investor/settings", icon: Settings },
]

export function AppInvestorSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset" collapsible="icon" className="bg-[#0b0b0c] text-white">
      <SidebarHeader className="border-b border-[#1a1b1e]">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="justify-between h-14">
                  <div className="flex items-center gap-2">
                    <LogoSquare />

                    <span>Mutiny • Investor</span>
                  </div>
                  <ChevronDown className="opacity-60" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              
<DropdownMenuContent className="w-(--radix-popper-anchor-width)">
  <DropdownMenuItem asChild>
    <Link href="/founder">Switch to Founder Dashboard</Link>
  </DropdownMenuItem>
</DropdownMenuContent>

            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV.map((item) => {
                const active = pathname === item.url || pathname?.startsWith(item.url + "/")
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
                      <Link href={item.url} prefetch>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                    {item.title === "Search" && (
                      <SidebarMenuAction asChild showOnHover>
                        <button title="Quick search">⌘K</button>
                      </SidebarMenuAction>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>

      <SidebarFooter className="border-t border-[#1a1b1e]">
        <div className="rounded-md bg-white/[0.03] px-2 py-2 text-[11px] leading-tight text-white/70">
          Tip: Press Ctrl/Cmd + B to toggle the sidebar.
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}