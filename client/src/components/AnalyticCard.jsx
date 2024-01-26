import React from 'react'

const AnalyticCard = ({icon,title,value}) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <span className="text-2xl mr-2">{icon}</span>
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  </div>
    
  );
};
  

export default AnalyticCard