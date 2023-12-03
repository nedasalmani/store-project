
import App from './App';
import { Routes , Route } from "react-router-dom";
import Home from "./components/Home";
import { Register } from './components/Register';


const AppRoutes = () =>(
    
    <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/register" element ={<Register />} />
    </Routes>
    )

export default AppRoutes;