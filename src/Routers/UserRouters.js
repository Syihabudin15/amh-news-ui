import { Route, Routes } from "react-router-dom";
import Main from "../Views/UserView/Main";
import { Fragment } from "react";
import { Col, Row } from "antd";
import { CopyrightOutlined } from '@ant-design/icons';
import Terbaru from "../Views/UserView/Terbaru";
import Viral from "../Views/UserView/Viral";
import Category from "../Views/UserView/Category";
import CategoryName from "../Views/UserView/CategoryName";
import AllNews from "../Views/UserView/AllNews";


function UserRouters(){
    return(
        <Fragment>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/terbaru" element={<Terbaru/>} />
                <Route path="/viral" element={<Viral/>} />
                <Route path="/daftar-kategori" element={<Category/>} />
                <Route path="/kategori/:nama" element={<CategoryName/>} />
                <Route path="/daftar-berita" element={<AllNews/>} />

                <Route path="*" element={<div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', opacity: .5, fontWeight: "bold"
                }}>
                    PAGE NOT FOUND <span style={{marginLeft: 20, color: 'red'}}>404</span>
                </div>} />
            </Routes>
            <Row className="footer-wrap">
                <Col style={{fontSize: 10, fontWeight: 'bolder'}}>
                    AMH News <span style={{margin: '0 5px'}}><CopyrightOutlined/></span> 2023
                </Col>
            </Row>
        </Fragment>
    )
};

export default UserRouters;