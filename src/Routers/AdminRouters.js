import { Route, Routes } from "react-router-dom";
import Register from "../Views/AdminView/Register";
import Login from "../Views/AdminView/Login";
import Dashboard from "../Views/AdminView/Dashboard";
import CreateNews from "../Views/AdminView/CreateNews";
import Reviews from "../Views/AdminView/Reviews";
import Review from "../Views/AdminView/Review";

function AdminRouter(){
    return(
        <Routes>
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="news/create" element={<CreateNews />} />
            <Route path="news/reviews" element={<Reviews/>} />
            <Route path="news/review/:slug" element={<Review />} />

            <Route path="*" element={<div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', opacity: .5, fontWeight: "bold"
            }}>
                PAGE NOT FOUND <span style={{marginLeft: 20, color: 'red'}}>404</span>
            </div>} />
        </Routes>
    )
};

export default AdminRouter;
