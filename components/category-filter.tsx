import { Grid, Coffee, Soup, UtensilsCrossed, ChefHat, Sandwich } from "lucide-react"

const categories = [
  { icon: Grid, label: "All", items: "235 Items", active: true },
  { icon: Coffee, label: "Breakfast", items: "19 Items" },
  { icon: Soup, label: "Soups", items: "8 Items" },
  { icon: UtensilsCrossed, label: "Pasta", items: "14 Items" },
  { icon: ChefHat, label: "Main Course", items: "27 Items" },
  { icon: Sandwich, label: "Burges", items: "13 Items" },
]

export function CategoryFilter() {
  return (
    <div className="flex gap-3 mb-4 overflow-x-auto pb-2 -mx-2 px-2">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex flex-col items-center p-3 rounded-xl min-w-[90px] sm:min-w-[100px] ${
            category.active ? "bg-indigo-50 text-indigo-800" : "bg-white"
          } border cursor-pointer hover:bg-indigo-50 flex-shrink-0`}
        >
          <category.icon className="h-5 w-5 sm:h-6 sm:w-6 mb-1" />
          <span className="text-xs sm:text-sm font-medium">{category.label}</span>
          <span className="text-xs text-gray-500 hidden sm:block">{category.items}</span>
        </div>
      ))}
    </div>
  )
}

