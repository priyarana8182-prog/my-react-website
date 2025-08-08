import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import MaintenanceCards from "../components/MaintenanceCards";
import Charts from "../components/Charts";
import Table from "../components/Table";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [filters, setFilters] = useState({
    year: "2025",
    month: "July",
  });

  const handleSearch = () => {
    console.log("Search clicked with filters:", filters);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(false)}
        />

        <main className="flex-1 mt-20 sm:mt-24 p-4 lg:pl-80 space-y-6">
          {/* Dashboard Page Header */}
          <div className="bg-gray-100 shadow-sm px-4 py-3 rounded">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded shadow">
            <div>
              <label className="text-sm font-medium">Select Year</label>
              <select
                value={filters.year}
                onChange={(e) =>
                  setFilters({ ...filters, year: e.target.value })
                }
                className="w-full mt-1 p-2 border rounded"
              >
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Select Month</label>
              <select
                value={filters.month}
                onChange={(e) =>
                  setFilters({ ...filters, month: e.target.value })
                }
                className="w-full mt-1 p-2 border rounded"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="flex items-end justify-end">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          {/* Dashboard Content */}
          <Cards filters={filters} />
          <MaintenanceCards filters={filters} />
          <Charts filters={filters} />
          <Table filters={filters} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;