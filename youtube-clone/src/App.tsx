import Sidebar from './Components/sidebar/sidebar';
import YouTubeNavbar from './Components/navabar/navbar';
import './App.css';


function App() {

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <YouTubeNavbar />
        <div className="content-area">
          {/* Add main content here */}
          <h1>Welcome to YouTube Clone</h1>
        </div>
      </div>
    </div>
  )
}

export default App
