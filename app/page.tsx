"use client"

import { SidebarNav } from "../components/sidebar-nav"
import { Header } from "../components/header"
import { CategoryFilter } from "../components/category-filter"
import { FoodGrid } from "../components/food-grid"
import { Cart } from "../components/cart"
import { Footer } from "../components/footer"
import { SidebarProvider, useSidebar } from "../components/sidebar-provider"
import { useState } from "react"
import { ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"

function POSContent() {
  const { isOpen, isMobile } = useSidebar()
  const [showCart, setShowCart] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarNav />
      <div
        className={`flex-1 flex flex-col overflow-hidden ${isOpen ? "sm:ml-0" : "sm:ml-0"} transition-all duration-300`}
      >
        <Header />
        <div className="flex-1 flex overflow-hidden relative">
          <main className={`flex-1 overflow-auto p-4 ${showCart && isMobile ? "hidden" : "block"}`}>
            <CategoryFilter />
            <FoodGrid />
          </main>

          {/* Mobile cart toggle button */}
          {isMobile && !showCart && (
            <Button
              onClick={() => setShowCart(true)}
              className="fixed bottom-20 right-4 rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700"
            >
              <ShoppingCart className="h-6 w-6" />
            </Button>
          )}

          {/* Cart - conditionally shown on mobile */}
          <div className={`${isMobile && !showCart ? "hidden" : "flex"} ${isMobile ? "absolute inset-0 z-20" : ""}`}>
            <Cart />

            {/* Mobile cart close button */}
            {isMobile && showCart && (
              <Button
                onClick={() => setShowCart(false)}
                variant="ghost"
                size="icon"
                className="absolute top-4 left-4 bg-white rounded-full shadow-md"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default function POSPage() {
  return (
    <SidebarProvider>
      <POSContent />
    </SidebarProvider>
  )
}

