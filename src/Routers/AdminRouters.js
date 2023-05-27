import { Route, Routes } from "react-router-dom";
import Register from "../Views/AdminView/Register";
import Login from "../Views/AdminView/Login";
import Dashboard from "../Views/AdminView/Dashboard";

function AdminRouter(){
    return(
        <Routes>
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="list-news" element={<div>List News</div>} />
            <Route path="create" element={<div>Create News</div>} />
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