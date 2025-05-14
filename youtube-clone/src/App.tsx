import Sidebar from './components/sidebar/sidebar';
import YouTubeNavbar from './components/navabar/navbar';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <YouTubeNavbar />
      </div>
    </div>
  );
}

export default App;
