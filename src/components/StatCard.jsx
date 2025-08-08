const StatCard = ({ icon, label, value, color }) => {
    return (
      <div className="bg-white rounded shadow p-4 flex items-center space-x-4">
        <div className={`p-2 rounded text-white ${color}`}>
          {icon}
        </div>
        <div>
          <div className="text-gray-500 text-sm">{label}</div>
          <div className="text-xl font-bold">{value}</div>
        </div>
      </div>
    );
  };
  
  export default StatCard;
  