import { Col, Row, Spin, Table } from "antd";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from '../../Reduxs/Slice/AllUserSlice';

function Dashboard(){
    const {fName, lName, email, role, phone} = useSelector(state => state.user);
    const { loading, all } = useSelector(state => state.allUser);
    const dis = useDispatch();

    const columns = [
        {title: 'Name', dataIndex: 'name'},
        {title: 'Email', dataIndex: 'email'},
        {title: 'role', dataIndex: 'role'},
    ];

    const sources = all && all.map((e) => {
        return {
            name: e.first_name ? `${e.first_name} ${e.last_name}` : 'No Name',
            email: e.m_credential.email,
            role: e.m_credential.m_role.role
        };
    });

    useEffect(() => {
        dis(getAllUser());
    }, [dis]);
    console.log(all);
    return(
        <Fragment>
            <h3 style={{textAlign: 'center'}}>My Dashboard</h3>
            <Spin spinning={loading}>
                <div className="head-dashboard">
                    <div className="bio-wrap">
                        <Row>
                            <Col className="bio-left">Nama</Col><Col offset={2} span={2}>:</Col><Col>{fName} {lName}</Col>
                        </Row>
                        <Row>
                            <Col className="bio-left">Email</Col><Col offset={2} span={2}>:</Col><Col>{email}</Col>
                        </Row>
                        <Row>
                            <Col className="bio-left">Phone</Col><Col offset={2} span={2}>:</Col><Col>{phone}</Col>
                        </Row>
                        <Row>
                            <Col className="bio-left">Role</Col><Col offset={2} span={2}>:</Col>
                            <Col style={{fontWeight: 'bold', color: 'green', fontSize: '.8em'}}>
                                {role ? role.toUpperCase() : ''}
                            </Col>
                        </Row>
                    </div>
                    <div className="table-user">
                        <Table columns={columns} dataSource={sources} />
                    </div>
                </div>
            </Spin>
        </Fragment>
    )
};

export default Dashboard;