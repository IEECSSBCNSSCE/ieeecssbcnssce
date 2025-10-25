import "./App.css";
import Navbar from "./components/navbar/navbar";
import HomePage from "./components/homepage/homepage";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

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
      {renderByPath()}
      <Footer />
    </div>
  );
}

export default App;
