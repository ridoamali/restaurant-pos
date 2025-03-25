"use client"

import {
  Menu,
  TableIcon as TableBar,
  CalendarRange,
  Truck,
  Calculator,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "./sidebar-provider"

const navItems = [
  { icon: Menu, label: "Menu", color: "text-green-600" },
  { icon: TableBar, label: "Table Services", color: "text-gray-600" },
  { icon: CalendarRange, label: "Reservation", color: "text-gray-600" },
  { icon: Truck, label: "Delivery", color: "text-gray-600" },
  { icon: Calculator, label: "Accounting", color: "text-gray-600" },
  { icon: Settings, label: "Settings", color: "text-gray-600" },
]

export function SidebarNav() {
  const { isOpen, toggle } = useSidebar()

  return (
    <div
      className={`${isOpen ? "w-64" : "w-20"} transition-all duration-300 p-4 border-r h-screen fixed md:relative z-30 bg-white`}
    >
      <div className="flex items-center gap-2 mb-8 relative">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg"
          alt="Chili POS Logo"
          className="w-8 h-8"
        />
        {isOpen && <span className="font-semibold">CHILI POS</span>}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-0 hidden md:flex bg-white border rounded-full"
          onClick={toggle}
        >
          <ChevronLeft className={`h-4 w-4 transition-transform ${!isOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <Button key={index} variant="ghost" className={`w-full justify-start ${item.color}`}>
            <item.icon className="mr-2 h-4 w-4" />
            {isOpen && item.label}
          </Button>
        ))}
      </nav>
      <Button
        variant="ghost"
        className={`w-full justify-start mt-auto text-gray-600 absolute bottom-4 ${!isOpen && "px-0"}`}
      >
        <LogOut className="mr-2 h-4 w-4" />
        {isOpen && "Logout"}
      </Button>
    </div>
  )
}

