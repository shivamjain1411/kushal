import React from "react";
import { Menu, X, Home, User, Settings, HelpCircle } from "lucide-react";
function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="text-white hover:bg-blue-700 p-2 rounded"
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="ml-4 text-xl font-bold">Dynamic Form App</h1>
      </div>
      <div className="flex space-x-4">
        <button className="px-4 py-2 hover:bg-blue-700 rounded">Login</button>
        <button className="px-4 py-2 border border-white rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
