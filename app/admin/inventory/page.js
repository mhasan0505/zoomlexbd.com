import {
  ChartNoAxesCombined,
  PanelsTopLeft,
  Truck,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

const Inventory = () => {
  return (
    <div>
      {" "}
      <aside className="w-64 bg-white shadow-sm min-h-screen">
        <nav className="p-4 space-y-2">
          <Link
            href="/admin"
            className="flex items-center space-x-3 px-3 py-2 bg-black text-white rounded-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span>Dashboard</span>
          </Link>

          <Link
            href="/admin/products"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <PanelsTopLeft />
            <span>Products</span>
          </Link>

          <Link
            href="/admin/orders"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Truck />
            <span>Orders & Delivery</span>
          </Link>

          <Link
            href="/admin/inventory"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Warehouse />
            <span>Inventory</span>
          </Link>

          <Link
            href="/admin/analytics"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <ChartNoAxesCombined />
            <span>Analytics</span>
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Inventory;
