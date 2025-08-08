import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const lineData = [
  { month: 'Jan', Registration: 4, Won: 2, Lost: 1, Ongoing: 6 },
  { month: 'Feb', Registration: 3, Won: 3, Lost: 1, Ongoing: 6 },
  { month: 'Mar', Registration: 5, Won: 2, Lost: 0, Ongoing: 8 },
  { month: 'Apr', Registration: 2, Won: 1, Lost: 2, Ongoing: 6 },
  { month: 'May', Registration: 7, Won: 4, Lost: 1, Ongoing: 9 },
];

const barData = [
  { month: 'Jan', NewCustomer: 3, NewSite: 2 },
  { month: 'Feb', NewCustomer: 5, NewSite: 1 },
  { month: 'Mar', NewCustomer: 2, NewSite: 4 },
];

const callWaitingData = [
  { reason: 'INVOICE PENDING', count: 2 },
  { reason: 'TECHNICAL SUPPORT PENDING FROM OEM', count: 2 },
  { reason: 'NEED TO SEND QUOTE', count: 1 },
  { reason: 'Customer Not Responding', count: 0 },
  { reason: 'Site Visit Scheduled', count: 0 },
];

const pieData = [
  { name: 'Quoted', value: 9492000 },
  { name: 'Won', value: 450000 },
  { name: 'Lost', value: 625000 },
];

const systemPieData = [
  { name: 'ADDRESSABLE FIRE ALARM SYSTEM', value: 1 }
];

export default function Charts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">

      {/* ✅ FIXED: Chart 1 - Sales Inquiry */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-col min-h-[280px]">
        <h2 className="font-semibold text-sm mb-2">Sales Inquiry Details for 2025</h2>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid stroke="#eee" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Registration" stroke="#8884d8" />
              <Line type="monotone" dataKey="Won" stroke="#82ca9d" />
              <Line type="monotone" dataKey="Lost" stroke="#ff4d4f" />
              <Line type="monotone" dataKey="Ongoing" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Call Waiting Table - No Change */}
      <div className="bg-white p-4 rounded shadow h-80 overflow-auto">
        <h2 className="font-semibold mb-2">Call Waiting Details</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b font-medium text-gray-700">
              <th className="py-1">Reason</th>
              <th className="py-1 text-center">Count</th>
            </tr>
          </thead>
          <tbody>
            {callWaitingData.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-1">{item.reason}</td>
                <td className="py-1 text-center">{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ FIXED: Chart 3 - Bar Chart */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-col min-h-[280px]">
        <h2 className="font-semibold text-sm mb-2">New Customers & New Sites Details for 2025</h2>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="NewCustomer" fill="#82ca9d" />
              <Bar dataKey="NewSite" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ✅ FIXED: Chart 4 - Warranty & AMC */}
      <div className="bg-white p-4 rounded-xl shadow flex flex-col min-h-[280px]">
        <h2 className="font-semibold text-sm mb-2">Warranty & AMC Contract Expiring Details for 2025</h2>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Registration" name="Warranty" stroke="#8884d8" />
              <Line type="monotone" dataKey="Ongoing" name="AMC" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart - No Change */}
      <div className="bg-white p-4 rounded shadow h-80 flex flex-col items-center justify-center">
        <h2 className="font-semibold mb-2">Sales Report for July 2025</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="60%"
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}

            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p className="mt-2 font-bold text-lg text-red-500">
          Quoted: ₹9,492,000
        </p>
      </div>

      {/* System Type Pie - No Change */}
      <div className="bg-white p-4 rounded shadow h-80 flex flex-col items-center justify-center">
        <h2 className="font-semibold mb-2">System Type Details for July 2025</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={systemPieData}
              cx="50%"
              cy="50%"
              outerRadius="60%"
              fill="#82ca9d"
              dataKey="value"
              label
            >
              <Cell fill="#007BFF" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p className="mt-2 text-sm text-center text-gray-700">
          ADDRESSABLE FIRE ALARM SYSTEM
        </p>
      </div>

    </div>
  );
}