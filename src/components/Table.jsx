// src/components/Table.jsx
import React from "react";

const data = [
  {
    date: "22/07/2025",
    callNumber: "00062",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "MAS",
    route: "",
    siteSystem: "CONVENTIONAL FIRE ALARM SYSTEM",
  },
  {
    date: "17/07/2025",
    callNumber: "00060",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "MAS SOLUTIONS",
    route: "",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "16/07/2025",
    callNumber: "00059",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "ADANI WILMAR FORTUNE",
    route: "",
    siteSystem: "CONVENTIONAL FIRE ALARM SYSTEM",
  },
  {
    date: "01/07/2025",
    callNumber: "00046",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "Assigned",
    siteName: "ADANI WILMAR FORTUNE",
    route: "",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "26/06/2025",
    callNumber: "00044",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "Assigned",
    siteName: "MAS SOLUTIONS",
    route: "",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "16/06/2025",
    callNumber: "00042",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "Assigned",
    siteName: "ADANI WILMAR FORTUNE",
    route: "",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "16/06/2025",
    callNumber: "00041",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "Assigned",
    siteName: "KFSL",
    route: "",
    siteSystem: "FIRE EXTINGUISHER",
  },
  {
    date: "09/06/2025",
    callNumber: "00030",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 90,
    status: "Assigned",
    siteName: "NOKIA SOLUTIONS AND NETWORKS INDIA PRIVATE LIMITED-ZODIAC SQUARE",
    route: "",
    siteSystem: "FIRE EXTINGUISHER",
  },
  {
    date: "07/06/2025",
    callNumber: "00027",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "Assigned",
    siteName: "CROMA",
    route: "PRAHLADNAGAR",
    siteSystem: "CONVENTIONAL FIRE ALARM SYSTEM",
  },
  {
    date: "05/06/2025",
    callNumber: "00024",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "Assigned",
    siteName: "NOKIA SOLUTIONS AND NETWORKS INDIA PRIVATE LIMITED-ZODIAC SQUARE",
    route: "",
    siteSystem: "CONVENTIONAL FIRE ALARM SYSTEM",
  },
  {
    date: "05/06/2025",
    callNumber: "00023",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 90,
    status: "New",
    siteName: "ADANI WILMAR FORTUNE",
    route: "",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  }, 
  {
    date: "06/02/2025",
    callNumber: "00014",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "ADANI WILMAR FORTUNE",
    route: "PRAHLADNAGAR",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "06/02/2025",
    callNumber: "00013",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "ADANI WILMAR FORTUNE",
    route: "",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "06/02/2025",
    callNumber: "00012",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "ADANI WILMAR FORTUNE",
    route: "",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "06/02/2025",
    callNumber: "00011",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "ADANI WILMAR FORTUNE",
    route: "",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "06/02/2025",
    callNumber: "00008",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "Assigned",
    siteName: "CROMA",
    route: "PRAHLADNAGAR",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "06/02/2025",
    callNumber: "00007",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "CROMA",
    route: "PRAHLADNAGAR",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "06/02/2025",
    callNumber: "00006",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "CROMA",
    route: "PRAHLADNAGAR",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
  {
    date: "06/02/2025",
    callNumber: "00004",
    callType: "PREVENTIVE MAINTENANCE",
    priority: 0,
    status: "New",
    siteName: "CROMA",
    route: "PRAHLADNAGAR",
    siteSystem: "ADDRESSABLE FIRE ALARM SYSTEM",
  },
 
];

const statusColor = {
  New: "bg-green-100 text-green-700",
  Assigned: "bg-blue-100 text-blue-700",
  InProgress: "bg-yellow-100 text-yellow-700",
};

const Table = () => {
  return (
    <div className="bg-white p-4 rounded shadow overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Pending Preventive Maintenance Calls</h2>
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded w-64"
        />
      </div>

      <table className="min-w-full text-sm text-left border">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2 border">Created Date</th>
            <th className="p-2 border">Call Number</th>
            <th className="p-2 border">Call Type</th>
            <th className="p-2 border">Priority</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Site Name</th>
            <th className="p-2 border">Route</th>
            <th className="p-2 border">Site System</th>
          </tr>
        </thead>
        <tbody>
          {data.map((call, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border">{call.date}</td>
              <td className="p-2 border">{call.callNumber}</td>
              <td className="p-2 border">{call.callType}</td>
              <td className="p-2 border">{call.priority}</td>
              <td className="p-2 border">
                <span
                  className={`px-2 py-1 text-xs rounded font-medium ${statusColor[call.status]}`}
                >
                  {call.status}
                </span>
              </td>
              <td className="p-2 border">{call.siteName}</td>
              <td className="p-2 border">{call.route || "-"}</td>
              <td className="p-2 border">{call.siteSystem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
