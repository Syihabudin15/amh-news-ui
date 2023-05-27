import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function Login(){
    return(
        <Fragment>
            <section title="Daftar" className="auth-wrapper">
                <div className="auth-form">
                    <h3 className="title-auth">Masuk</h3>
                    <Form labelCol={{span: 7}}>
                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Password' name='password'>
                            <Input />
                        </Form.Item>
                        
                        <Form.Item style={{marginTop: 40, marginBottom: 5}}>
                            <Checkbox style={{fontSize: 12, wordSpacing: 3}}>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item >
                            <Button block type="primary" htmlType="submit">SUBMIT</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="auth-with">
                    <p style={{textAlign: 'center', borderBottom: '1px solid #aaa'}}>Masuk Dengan</p>
                    <div className="list-auth-method">
                        <div className="auth-method">
                            <p>Gmail</p>
                        </div>
                        <div className="auth-method">
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div style={{marginTop: 50, fontSize: 12}}>
                        <i>Belum punya akun? 
                            <Link style={{marginLeft: 10}} to={'/admin/register'}>
                                Daftar
                            </Link>
                        </i>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default Login;