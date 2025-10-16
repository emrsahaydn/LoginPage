import Login from "./components/Login.jsx";
import { Route,Routes,BrowserRouter } from "react-router-dom";

function App(){
    return (
        <BrowserRouter>
        <Login />
        </BrowserRouter>
    )
}
export default App;