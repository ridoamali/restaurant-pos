export function Footer() {
  const orders = [
    { table: "T1", items: 6, kitchen: "Kitchen", status: "Process" },
    { table: "T2", items: 4, kitchen: "Kitchen" },
    { table: "T3", items: 3, kitchen: "Kitchen" },
  ]

  return (
    <div className="bg-white border-t p-2 md:p-4 flex flex-col sm:flex-row gap-2 md:gap-4">
      {orders.map((order, index) => (
        <div key={index} className="flex items-center gap-3 bg-orange-50 rounded-lg p-2 md:p-3 flex-1">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-medium text-sm md:text-base">
            {order.table}
          </div>
          <div>
            <div className="text-xs md:text-sm font-medium">
              {order.items} Items → {order.kitchen}
            </div>
            {order.status && <div className="text-[10px] md:text-xs text-orange-600">{order.status}</div>}
          </div>
        </div>
      ))}
    </div>
  )
}

