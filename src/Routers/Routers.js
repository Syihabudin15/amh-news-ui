import { Col, Row , Menu, Button, Drawer } from "antd";
import { Fragment, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';
import AdminRouter from "./AdminRouters";
import UserRouters from "./UserRouters";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "../Reduxs/Slice/UserSlice";
import { LogoutOutlined, TeamOutlined } from '@ant-design/icons';
import CreateCategory from "../Views/AdminView/CreateCategory";
import MenuAdmin from "../Views/AdminView/Utils/MenuAdmin";


function Routers(){
    const { fName, role } = useSelector(state => state.user);
    const [curr, setCurr] = useState();
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    const nav = useNavigate();
    const dis = useDispatch();

    const handleClick = (e) => {
        if(e.key === '/logout'){
            dis(removeUser());
            setCurr('/');
            nav('/');
            return;
        }
        setCurr(e.key);
        nav(e.key);
    };
    useEffect(() => {
        dis(setUser());
        if(fName){
            setItems([
                {label: fName, key: '/admin/dashboard'},
                {label: 'Berita', children: [
                    {label: 'Buat Berita', key: '/admin/news/create', icon: ''},
                    {label: 'Reviews', key: '/admin/news/reviews', icon: ''},
                    role === 'Admin' ? {label: <CreateCategory />, key: '#buat-kategori', icon: ''} : null,
                ]},
                {label: 'Team', key: '/admin/team-saya', icon: <TeamOutlined />},
                {label: '', key: '/logout', icon: <LogoutOutlined style={{color: 'red'}} title="keluar"/>}
            ])
        }else{
            setItems([
                {label: 'Terbaru', key: '/terbaru'},
                {label: 'Semua', key: '/daftar-berita'},
                {label: 'Kategori', key: '#',
                    children: [
                        {label: 'Game', key: '/kategori/64a24ff14d5f8de07252d76c'},
                        {label: 'Viral', key: '/kategori/64a250604d5f8de07252d77e'},
                        {label: 'Animasi', key: '/kategori/64a24f9a4d5f8de07252d766'},
                        {label: 'Daftar Kategori', key: '/daftar-kategori'}
                    ]
                }
            ]);
        }
    }, [fName, dis, role]);

    return(
        <Fragment>
            <Row>
                <Col span={10}>
                    <Menu items={[{label: 'AMH NEWS', key: '/'}]} selectedKeys={curr} onClick={(e) => handleClick(e)} 
                    style={{fontWeight: 'bold', textShadow: '2px 2px 3px #aaa'}}/>
                </Col>
                <Col offset={fName ? 7 : 9} className="menu-pc" span={fName ? 7 : 5}>
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
                <MenuAdmin/>
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