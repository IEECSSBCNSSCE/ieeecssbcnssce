import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function App() {
  // Simple path-based rendering (no react-router dependency)
  const path = window.location.pathname || "/";

  const renderByPath = () => {
    switch (path) {
      case "/contact":
        return <Contact />;
      case "/":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
