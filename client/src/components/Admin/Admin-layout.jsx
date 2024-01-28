import AdminNav from "./Admin-nav";
import {Outlet} from 'react-router-dom'



const AdminLayout = () => {
  return (
    <div className="flex h-screen mt-2 gap-2">
       
      <div className="w-1/4 bg-gray-800 text-white p-1">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>
        <AdminNav />
      </div>

      <Outlet/>
    </div>
  );
};

export default AdminLayout;
