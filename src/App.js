import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DynamicForm from "./components/DynamicForm";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <DynamicForm />
      </div>
    </div>
  );
}

export default App;
