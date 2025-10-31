import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { AuthProvider } from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
