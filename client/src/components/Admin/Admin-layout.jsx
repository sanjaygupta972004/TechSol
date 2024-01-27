import AdminNav from "./Admin-nav";
import UserComponent from "./Admin-user";
import ServiceComponent from "./Admin-service";
import ContactComponent from "./Admin-contact";


const AdminLayout = () => {
  return (
    <div className="flex h-screen mt-2 gap-2">
    
      <div className="w-1/4 bg-gray-800 text-white p-1">
        <AdminNav />
      </div>

      <div className="flex-1 p-4">
        <UserComponent />
        <ServiceComponent />
        <ContactComponent />
      </div>
    </div>
  );
};

export default AdminLayout;
