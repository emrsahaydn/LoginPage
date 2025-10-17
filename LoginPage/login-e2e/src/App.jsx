import Login from "./components/Login.jsx";
import { Route,Routes,BrowserRouter,Navigate } from "react-router-dom";
import Success from "./components/Success.jsx";




function App(){
    return (
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Navigate to="/login" replace />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/success" element={<Success />}/>
            <Route path="*" element={<div>Sayfa Bulunamadı</div>}/>

        </Routes>
        
        </BrowserRouter>
    )
}
export default App;