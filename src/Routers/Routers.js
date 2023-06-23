import { Col, Row , Menu, Button, Drawer } from "antd";
import { Fragment, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';
import AdminRouter from "./AdminRouters";
import UserRouters from "./UserRouters";


function Routers(){
    const [curr, setCurr] = useState();
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [user, setUser] = useState();
    const nav = useNavigate();

    const handleClick = (e) => {
        if(e.key === '/logout'){
            setUser(null);
            setCurr('/');
        }
        setCurr(e.key);
        nav(e.key);
    };
    useEffect(() => {
        if(user){
            setItems([
                {label: user, key: '/admin/dashboard'},
                {label: 'Logout', key: '/logout'}
            ])
        }else{
            setItems([
                {label: 'Terbaru', key: '/terbaru'},
                {label: 'Semua', key: '/daftar-berita'},
                {label: 'Kategori', key: '#',
                    children: [
                        {label: 'Game', key: '/kategori/649551b40408fe550e330d9f'},
                        {label: 'Film', key: '/kategori/film'},
                        {label: 'Animasi', key: '/kategori/animasi'},
                        {label: 'Daftar Kategori', key: '/daftar-kategori'}
                    ]
                }
            ]);
        }
    }, [user]);
    return(
        <Fragment>
            <Row>
                <Col span={10}>
                    <Menu items={[{label: 'AMH NEWS', key: '/'}]} selectedKeys={curr} onClick={(e) => handleClick(e)} 
                    style={{fontWeight: 'bold', textShadow: '2px 2px 3px #aaa'}}/>
                </Col>
                <Col offset={9} className="menu-pc" span={5}>
                    <Menu items={items} selectedKeys={curr} mode="horizontal" onClick={(e) => handleClick(e)} />
                </Col>
                <Col className="menu-mobile" offset={10} >
                    <Button onClick={() => setOpen(true)}>
                        <MenuOutlined/>
                    </Button>
                </Col>
                <Drawer open={open} onClose={() => setOpen(false)} width={'80%'}>
                    <Menu items={items} selectedKeys={curr} mode="inline" onClick={(e) => handleClick(e)} />
                </Drawer>
            </Row>

                <Routes>
                    <Route path="/*" element={<UserRouters/>} />
                    <Route path="/admin/*" element={<AdminRouter/>} />

                    <Route path="*" element={<div style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', opacity: .5, fontWeight: "bold"
                    }}>
                        PAGE NOT FOUND <span style={{marginLeft: 20, color: 'red'}}>404</span>
                    </div>} />
                </Routes>
        </Fragment>
    )
}

export default Routers;