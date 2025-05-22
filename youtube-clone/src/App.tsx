import Sidebar from './Components/sidebar/sidebar';
import Navbar from './Components/navabar/navbar';
import Dashboard from './Components/dashboard/dashboard';
import { useState } from 'react';

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow">
        {/* Navbar */}
        <div className="sticky top-0 z-10">
          <Navbar isSideMenuOpen={showSideMenu} />
        </div>

        {/* Dashboard */}
        <div className="flex-grow p-4">
          <Dashboard isSideMenuOpen={showSideMenu} />
        </div>
      </div>
    </div>
  );
}

export default App;
