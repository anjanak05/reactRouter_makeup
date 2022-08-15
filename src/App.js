import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Coupon from "./Components/Coupon";
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
       <Coupon/>
      <Navbar></Navbar>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
