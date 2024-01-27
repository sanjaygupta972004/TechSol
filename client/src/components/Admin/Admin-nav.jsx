import { NavLink } from 'react-router-dom';
import { AiOutlineUser, AiOutlineAppstore, AiOutlineContacts } from 'react-icons/ai';

const AdminNav = () => {
  return (
    <nav className="bg-gray-900 p-4 w-auto  h-auto ">
      <ul className="flex space-y-4 text-white text-xl flex-col transition-all  ">
        <li>
          <NavLink to="/admin/user" className="flex items-center hover:underline hover:translate-x-1 hover:text-[18px] ">
            <AiOutlineUser className="h-5 w-5 mr-2" />
            User
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/service" className="flex items-center hover:underline hover:translate-x-1 hover:text-[18px] ">
            <AiOutlineAppstore className="h-5 w-5 mr-2" />
            Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/contact" className="flex items-center hover:underline hover:translate-x-1 hover:text-[18px] ">
            <AiOutlineContacts className="h-5 w-5 mr-2" />
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
