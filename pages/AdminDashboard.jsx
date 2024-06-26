// pages/Admin/index.js
import AdminIndex from "@/components/Admin/Index";
import AdminSidenav from "@/components/Admin/layout/Sidenav";
import Users from "@/components/Admin/users/Users";
import DashboardNavbar from "@/components/layout/DashboardNavbar";

import { useCallback, useState } from "react";

export default function Admin() {
  const [activeComponent, setActiveComponent] = useState('');

  const handleSidebarClick = useCallback((componentName) => {
    setActiveComponent(componentName);
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <AdminIndex />;
      case 'Users':
        return <Users />;
      // Add more cases for other components as needed
      default:
        return <AdminIndex />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <AdminSidenav onSidebarClick={handleSidebarClick} />
      <div className="flex-grow p-4 xl:ml-80">
        <DashboardNavbar activeComponent={activeComponent} />
        {renderComponent()}
      </div>
    </div>
  );
}
