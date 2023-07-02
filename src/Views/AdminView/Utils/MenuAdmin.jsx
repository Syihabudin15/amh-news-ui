import { Col, Row } from "antd";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../Reduxs/Slice/UserSlice";
import { Link } from "react-router-dom";

function MenuAdmin(){
    const {fName} = useSelector(state => state.user);
    const dis = useDispatch();
    
    useEffect(() => {
        dis(setUser());
    }, [dis]);
    return(
        <Fragment>
            {fName && 
                <Row className="menu-admin" style={{justifyContent: 'center', gap: 10}}>
                    <Col><Link to={'/daftar-berita'}>Berita</Link></Col>
                    <Col><Link to={'/daftar-kategori'}>Kategori</Link></Col>
                </Row>
            }
        </Fragment>
    )
}

export default MenuAdmin;