
import DashboardNavbar from "@/components/layout/DashboardNavbar";
import Sidenav from "@/components/layout/Sidebar";
import Index from "@/components/parents/Index";
import { useCallback, useState } from "react";

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('');

  const handleSidebarClick = useCallback((componentName) => {
    setActiveComponent(componentName);
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Index />;
      // Add more cases for other components as needed
      default:
        return <Index />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Sidenav onSidebarClick={handleSidebarClick} />
      <div className="flex-grow p-4 xl:ml-80">
        <DashboardNavbar activeComponent={activeComponent} />
        {renderComponent()}
      </div>
    </div>
  );
}
