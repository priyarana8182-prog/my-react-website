import React from "react";
import {
  FaStickyNote,
  FaTools,
  FaWrench,
  FaFileAlt,
  FaClipboard,
  FaProjectDiagram,
  FaComments,
  FaUserCheck,
  FaCheck,
  FaPhone,
  FaUserCog,
  FaTasks,
  FaBox,
  FaClock,
} from "react-icons/fa";

const cardData = [
  { label: "Customer Notes", count: 0, icon: <FaStickyNote />, color: "bg-orange-500" },
  { label: "Contract Expiring for AMC", count: 1, icon: <FaTools />, color: "bg-orange-500" },
  { label: "Contract Expiring for Warranty", count: 2, icon: <FaWrench />, color: "bg-cyan-500" },
  { label: "Pending Sales Enquiry Quotation", count: 3, icon: <FaFileAlt />, color: "bg-cyan-500" },
  { label: "Open Purchase Order", count: 11, icon: <FaClipboard />, color: "bg-blue-500" },
  { label: "Quotation", count: 19, icon: <FaClipboard />, color: "bg-blue-500" },
  { label: "Sites", count: 13, icon: <FaProjectDiagram />, color: "bg-orange-500" },
  { label: "Site Notes", count: 0, icon: <FaStickyNote />, color: "bg-orange-500" },
  { label: "Active Job", count: 37, icon: <FaCheck />, color: "bg-green-500" },
  { label: "Engineers not assigned job for tomorrow", count: 9, icon: <FaUserCog />, color: "bg-orange-500" },
  { label: "Quotes follow up", count: 6, icon: <FaComments />, color: "bg-pink-500" },
  { label: "New Calls", count: 17, icon: <FaPhone />, color: "bg-cyan-500" },
  { label: "Assigned Calls", count: 17, icon: <FaUserCheck />, color: "bg-green-500" },
  { label: "InProgress Calls", count: 3, icon: <FaClock />, color: "bg-pink-500" },
  { label: "Engineer/Technician Completed Calls", count: 26, icon: <FaTasks />, color: "bg-gray-600" },
  { label: "Completed Calls", count: 4, icon: <FaCheck />, color: "bg-orange-500" },
  { label: "Cancelled Calls", count: 1, icon: <FaStickyNote />, color: "bg-orange-500" },
  { label: "DC - Pending Invoice", count: 13, icon: <FaBox />, color: "bg-orange-500" },
  { label: "DC - Not Delivered", count: 13, icon: <FaBox />, color: "bg-orange-500" },
  { label: "PO - Pending Approval", count: 1, icon: <FaClipboard />, color: "bg-blue-500" },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {cardData.map((card, idx) => (
        <div
          key={idx}
          className="bg-white flex items-center justify-between p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
        >
          <div>
            <div className="text-sm text-gray-600 font-medium">{card.label}</div>
            <div className="text-2xl font-bold mt-1">{card.count}</div>
          </div>
          <div className={`text-white text-lg p-3 rounded-full ${card.color}`}>
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
