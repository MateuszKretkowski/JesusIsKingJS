import Navbar from './Components/navBar/navbar';
import Header from './Components/Header/header';
import SideBar from "./Components/SideBar/sidebar"
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      {/* <Navbar /> */}
      <Header />
    </div>
  );
}

export default App;
