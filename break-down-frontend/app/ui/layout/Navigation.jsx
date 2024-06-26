import Link from 'next/link'
import React from 'react'
export default function Navigation() {
  return (
    <div className = "flex justify-around mb-10 bg-gray-200 p-2">
      <div className="w-80 flex justify-between">
        <Link  className ="p-2 rounded text-black font-bold" href= '/' > Home </Link>
        <Link className="p-2 rounded text-black font-bold" href= '/projects' > Projects </Link>

      </div>
    </div>
  )
}
