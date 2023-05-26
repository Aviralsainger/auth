import Header from './Header';
import './App.css';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
   <div className="App">
    <Header />
    <Router>
      <Routes>
       
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/"  element={<Login/>}/>
        <Route path="/home"  element={<Home/>}/>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
