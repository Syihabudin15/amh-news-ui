import { Col, Row } from "antd";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function Dashboard(){
    const {fName, lName, email, role} = useSelector(state => state.user);
    return(
        <Fragment>
            <h3 style={{textAlign: 'center'}}>My Dashboard</h3>
            <div className="head-dashboard">
                <div className="bio-wrap">
                    <Row>
                        <Col className="bio-left">Nama</Col><Col offset={2} span={2}>:</Col><Col>{fName} {lName}</Col>
                    </Row>
                    <Row>
                        <Col className="bio-left">Email</Col><Col offset={2} span={2}>:</Col><Col>{email}</Col>
                    </Row>
                    <Row>
                        <Col className="bio-left">Role</Col><Col offset={2} span={2}>:</Col><Col style={{fontWeight: 'bold', color: 'green'}}>{role.toUpperCase()}</Col>
                    </Row>
                </div>
                <div className="bio-wrap">
                    <Row>
                        <Col>Nama</Col><Col offset={2} span={2}>:</Col><Col>{fName} {lName}</Col>
                    </Row>
                    <Row>
                        <Col>Email</Col><Col offset={2} span={2}>:</Col><Col>{email}</Col>
                    </Row>
                    <Row>
                        <Col>Role</Col><Col offset={2} span={2}>:</Col><Col>{role}</Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
};

export default Dashboard;