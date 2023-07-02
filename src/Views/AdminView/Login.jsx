import { Button, Checkbox, Form, Input, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { base } from '../../Extentions/LoadEnvirontment';
import { useDispatch } from "react-redux";
import { setUser } from '../../Reduxs/Slice/UserSlice';
import Cookies from "js-cookie";

function Login(){
    const [loading, setLoading] = useState(false);
    const [feed, setFeed] = useState();
    const nav = useNavigate();
    const dis = useDispatch();

    const handleFinish = (e) => {
        setLoading(true);
        if(!e.email || !e.password || !e.email.includes('@gmail')){
            setFeed('wrong email or password!');
            setLoading(false);
            return;
        }
        axios.post(`${base}/api/v1//login`, {email: e.email, password: e.password})
        .then((res) => {
            notification.success({message: 'Berhasil masuk'});
            Cookies.set('token', res.data.data.token, {expires: 2});
            dis(setUser());
            nav('/admin/dashboard');
        })
        .catch((err) => {
            setFeed(err.response.data.message);
            setLoading(false);
        });
    };
    useEffect(() => {
        const user = Cookies.get('token');
        if(user){
            nav('/admin/dashboard');
        }
    }, [nav]);
    return(
        <Fragment>
            <section title="Daftar" className="auth-wrapper">
                <div className="auth-form">
                    <h3 className="title-auth">Masuk</h3>
                    <Form labelCol={{span: 7}} onFinish={handleFinish} onFieldsChange={() => setFeed(null)}>
                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Password' name='password'>
                            <Input.Password />
                        </Form.Item>
                        <span className="feedback">{feed ? feed : ''}</span>
                        
                        <Form.Item style={{marginTop: 40, marginBottom: 5}}>
                            <Checkbox style={{fontSize: 12, wordSpacing: 3}}>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item >
                            <Button loading={loading} block type="primary" htmlType="submit">SUBMIT</Button>
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
