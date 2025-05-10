import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <SubNavbar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
