import React from "react";
import { Menu, X, Home, User, Settings, HelpCircle } from "lucide-react";
function Sidebar({ isOpen, toggleSidebar }) {
  const menuItems = [
    { icon: <Home />, label: "Home" },
    { icon: <User />, label: "Profile" },
    { icon: <Settings />, label: "Settings" },
    { icon: <HelpCircle />, label: "Help" },
  ];
  return (
    <div
      className={`fixed left-0 top-0 h-full w-64 bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Menu</h2>
        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-gray-700 p-2 rounded"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-3 hover:bg-gray-700 cursor-pointer"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
