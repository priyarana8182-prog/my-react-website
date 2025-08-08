import React, { useState } from "react";

const Filters = ({ onSearch, onClear }) => {
  const [year, setYear] = useState("2025");
  const [month, setMonth] = useState("July");

  const handleSearch = () => {
    onSearch({ year, month });
  };

  const handleClear = () => {
    setYear("2025");
    setMonth("July");
    if (onClear) onClear();
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium mb-1">Select Year</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Select Month</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
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

        <div className="flex gap-2 md:col-span-2">
          <button
            onClick={handleClear}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded border hover:bg-gray-200"
          >
            Clear
          </button>
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;