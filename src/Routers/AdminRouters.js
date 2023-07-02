import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "../Views/AdminView/Register";
import Login from "../Views/AdminView/Login";
import Dashboard from "../Views/AdminView/Dashboard";
import CreateNews from "../Views/AdminView/CreateNews";
import { useEffect } from "react";
import Cookies from "js-cookie";

function AdminRouter(){
    const nav = useNavigate();
    useEffect(() => {
        const token = Cookies.get('token');
        if(!token){
            nav('/');
        }
    }, [nav]);
    return(
        <Routes>
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="list-news" element={<div>List News</div>} />
            <Route path="news/create" element={<CreateNews />} />
            <Route path="read" element={<div>Read News</div>} />
            <Route path="update" element={<div>Update News</div>} />

            <Route path="*" element={<div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', opacity: .5, fontWeight: "bold"
            }}>
                PAGE NOT FOUND <span style={{marginLeft: 20, color: 'red'}}>404</span>
            </div>} />
        </Routes>
    )
};

export default AdminRouter;