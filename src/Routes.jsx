import { Route , Routes } from "react-router-dom";
import App from "./App";
import { Register } from "./Register";

const AppRoutes = () =>(
    <App>
        <Routes>
            <Route path="/register" element={<Register />} />
        </Routes>
    </App>
)

export default AppRoutes