"use client"

import { useState } from "react"
import { SidebarNav } from "../components/sidebar-nav"
import { Header } from "../components/header"
import { CategoryFilter } from "../components/category-filter"
import { FoodGrid } from "../components/food-grid"
import { Cart } from "../components/cart"
import { Footer } from "../components/footer"
import { Menu, ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function POSPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row relative">
      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 left-3 z-50 lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile cart toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-50 lg:hidden"
        onClick={() => setCartOpen(!cartOpen)}
      >
        {cartOpen ? <X className="h-6 w-6" /> : <ShoppingCart className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300 fixed inset-y-0 left-0 z-40 lg:relative lg:z-0`}
      >
        <SidebarNav />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden pt-14 lg:pt-0">
        <Header />
        <div className="flex-1 flex overflow-hidden relative">
          <main className="flex-1 overflow-auto p-4">
            <CategoryFilter />
            <FoodGrid />
          </main>

          {/* Cart - hidden on mobile unless toggled */}
          <div
            className={`${cartOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 transition-transform duration-300 fixed inset-y-0 right-0 z-40 w-full sm:w-[380px] lg:relative lg:z-0`}
          >
            <Cart onClose={() => setCartOpen(false)} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

