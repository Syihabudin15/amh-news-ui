import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const { Fragment } = require("react");

function Register(){
    return(
        <Fragment>
            <section title="Daftar" className="auth-wrapper">
                <div className="auth-form">
                    <h3 className="title-auth">Daftar</h3>
                    <Form labelCol={{span: 7}}>
                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Nama' name='name'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Password' name='password'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Konfirmasi' name='confirm'>
                            <Input />
                        </Form.Item>

                        <Form.Item style={{marginTop: 50}} >
                            <Button block type="primary" htmlType="submit">SUBMIT</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="auth-with">
                    <p style={{textAlign: 'center', borderBottom: '1px solid #aaa'}}>Daftar Dengan</p>
                    <div className="list-auth-method">
                        <div className="auth-method">
                            <p>Gmail</p>
                        </div>
                        <div className="auth-method">
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div style={{marginTop: 50, fontSize: 12}}>
                        <i>Sudah punya akun? 
                            <Link style={{marginLeft: 10}} to={'/admin/login'}>
                                Masuk
                            </Link>
                        </i>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Register;