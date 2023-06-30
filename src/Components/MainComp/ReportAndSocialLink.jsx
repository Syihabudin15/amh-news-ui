import { Row, Col, Form, Input, Button, Space, Divider, Typography } from "antd";
import { Link } from "react-router-dom";

function ReportAndSocialLink(){
    const SendBugs = (e) => {
        console.log(e);
    };
    return(
        <Row className="main-footer">
            <Col className="form-report">
                <h4 style={{textAlign: 'center'}}>Laporkan Bug</h4>
                <Form labelCol={{span: 5}} onFinish={SendBugs}>
                    <Form.Item label='Email' name='email'>
                        <Input placeholder="Email Address" />
                    </Form.Item>

                    <Form.Item label='Hal' name='hal'>
                        <Input />
                    </Form.Item>

                    <Form.Item label='Deskripsi' name='deskripsi'>
                        <Input.TextArea style={{height: 200}} />
                    </Form.Item>

                    <Form.Item style={{display: 'flex', justifyContent: "center"}}>
                        <Button htmlType="submit" type="primary" style={{width: 200, fontWeight: 'bold'}} disabled>SUBMIT</Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 50}}>
                <div>
                    <h5>KATEGORI</h5>
                    <Space direction="vertical">
                        <Link style={{color: 'black'}} to={'/kategori/649e3d356b47138153e1d688'}>Animasi</Link>
                        <Link style={{color: 'black'}} to={'/kategori/649551b40408fe550e330d9f'}>Game</Link>
                        <Link style={{color: 'black'}} to={'/kategori/649e3d246b47138153e1d686'}>Sport</Link>
                    </Space>
                    <Divider/>
                </div>
                <div>
                    <h5>SOSIAL</h5>
                    <Space direction="vertical">
                        <Link style={{color: 'black'}}>Facebook</Link>
                        <Link style={{color: 'black'}} to={'https://github.com/Syihabudin15'}>Github</Link>
                        <Link style={{color: 'black'}}>Instagram</Link>
                        <Link style={{color: 'black'}}>Twitter</Link>
                    </Space>
                    <Divider/>
                </div>
                <div>
                    <h5>MENU</h5>
                    <Space direction="vertical">
                        <Link style={{color: 'black'}}>Viral</Link>
                        <Link style={{color: 'black'}}>Terbaru</Link>
                        <Link style={{color: 'black'}}>Video</Link>
                    </Space>
                    <Divider/>
                </div>
                <div>
                    <h5>DONASI</h5>
                    <Space direction="vertical">
                        <span>DANA / OVO
                            <Typography.Paragraph copyable>
                                082115670361
                            </Typography.Paragraph>
                        </span>
                        <span>BCA
                            <Typography.Paragraph copyable>
                                082115670361
                            </Typography.Paragraph>
                        </span>
                    </Space>
                </div>
            </Col>
        </Row>
    )
};

export default ReportAndSocialLink;