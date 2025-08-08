import React from "react";
import { FaWrench, FaCheck, FaArrowUp, FaArrowRight, FaArrowDown } from "react-icons/fa";

const MaintenanceCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {/* Corrective Maintenance Card */}
      <div className="bg-white rounded shadow p-4">
        <div className="flex items-center mb-2">
          <div className="bg-cyan-500 text-white p-2 rounded">
            <FaWrench />
          </div>
          <h2 className="text-orange-500 text-sm font-semibold ml-2">
            Corrective Maintenance
          </h2>
        </div>
        <div className="grid grid-cols-4 text-center border-t pt-2 text-sm text-gray-700">
          <div>
            <p className="font-bold">2</p>
            <p>New</p> 
          </div>
          <div>
            <p className="font-bold">6</p>
            <p>Assigned</p> 
          </div>
          <div>
            <p className="font-bold">0</p>
            <p>InProgress</p>
          </div>
          <div>
            <p className="font-bold">5</p>
            <p>Engineer Completed</p>
          </div>
        </div>
      </div>

      {/* Completed Without Call Waiting */}
      <div className="bg-white rounded shadow p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">
            Engineer/Technician Completed Calls - Without Call Waiting
          </p>
          <p className="text-xl font-bold text-orange-500">23</p>
        </div>
        <div className="bg-gray-600 text-white p-2 rounded">
          <FaCheck />
        </div>
      </div>

      {/* Sales Priority */}
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Sales Priority</h2>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <div className="bg-blue-500 text-white p-2 rounded inline-block mb-1">
              <FaArrowUp />
            </div>
            <p className="font-bold">3</p>
            <p className="text-gray-600">HIGH</p>
          </div>
          <div>
            <div className="bg-blue-500 text-white p-2 rounded inline-block mb-1">
              <FaArrowRight />
            </div>
            <p className="font-bold">1</p>
            <p className="text-gray-600">MEDIUM</p>
          </div>
          <div>
            <div className="bg-blue-500 text-white p-2 rounded inline-block mb-1">
              <FaArrowDown />
            </div>
            <p className="font-bold">1</p>
            <p className="text-gray-600">LOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCards;