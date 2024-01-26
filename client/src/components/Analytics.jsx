import AnalyticCard from "./AnalyticCard";

const Analytics = () => {
   return (
     <div className="container mx-auto mt-8">
       <h2 className="text-3xl font-bold mb-6">Analytics Dashboard</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         <AnalyticCard title="Total Users" value="1,234" icon="👥" />
         <AnalyticCard title="Active Services" value="56" icon="⚙️" />
         <AnalyticCard title="Revenue (USD)" value="$15,000" icon="💵" />
         <AnalyticCard title="Average Response Time" value="120 ms" icon="⌛" />
       </div>
     </div>
   );  
 };
 
 export default Analytics;
 