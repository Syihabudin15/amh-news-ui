import { Button, Form, Image, Input, Select, notification } from "antd";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import { getAllCategory } from "../../Reduxs/Slice/Category";
import { useRef } from "react";
import { useMemo } from "react";
import axios from "axios";
import { base } from "../../Extentions/LoadEnvirontment";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function CreateNews(){
    const { data } = useSelector(state => state.category);
    const [editHtml, setEditHtml] = useState();
    const [feed, setFeed] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    let quil = useRef(null);
    const dis = useDispatch();
    const nav = useNavigate();
    
    const options = data ? data.map(e => {
        return {label: e.title, value: e._id}
    }) : [];

    const handleChange = (e) => {
        setEditHtml(e);
        setFeed(null);
    };

    const handleFinish = (e) => {
        setFeed(null);
        console.log(e);
        if(!e.image || !e.title || !e.subBody || !e.categories || !editHtml){
            setFeed('Judul, Image, Sub Bodi, Bodi, Kategori tidak boleh kosong');
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('subBody', e.subBody);
        formData.append('categories', e.categories);
        formData.append('body', editHtml);

        axios.request({
            method: 'POST',
            url: `${base}/api/v1/news`,
            headers: {
                'token': Cookies.get('token')
            },
            data: formData
        }).then(res => {
            notification.success({message: 'Berita berhasil dibuat'});
            nav('/admin/dashboard');
        }).catch(err => {
            setFeed(err.response.data.message);
        })
    };

    const handleImage = () => {
        const editor = quil.current.getEditor();
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('class', 'img-quil');
        input.setAttribute('accept', 'image/jpg, image/jpeg, image/png');
        input.click();

        input.onchange = () => {
            const formData = new FormData();
            const file = input.files[0];
            formData.append('image', file);

            axios.request({
                method: 'POST',
                url: `${base}/api/v1/news/save-image`,
                headers: {
                    'token': Cookies.get('token')
                },
                data: formData
            })
            .then(res => {
                editor.insertEmbed(editor.getSelection(), 'image', `${base}/img/${res.data.data.url}`);
            })
            .catch(err => {
                notification.error({message: err.response.data.message});
            });
        };
        
    };

    const module = useMemo(() => ({
        toolbar: {
            container: [
                [{header: [1, 2, false]}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                    {list: 'ordered'},
                    {list: 'bullet'},
                    {indent: '-1'},
                    {indent: '+1'}
                ],
                ['link', 'image'],
                ['clean']
            ],
            handlers: {
                image: handleImage
            }
        }
    }), []);

    const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'imageBlot'];
    
    useEffect(() => {
        dis(getAllCategory());
    }, [dis]);

    return(
        <Fragment>
            <h3 style={{textAlign: 'center'}}>Buat Berita</h3>
            <div className="form-news">
                <Form labelCol={{span: 2}} onFinish={handleFinish}>
                    <Form.Item name={'title'} label='Judul'>
                        <Input placeholder="Masukan Judul" onChange={(e) => setTitle(e.target.value)} />
                    </Form.Item>

                    <Form.Item name={'categories'} label='Kategori'>
                        <Select options={options} direction="vertical" placeholder='Minimal 1 Kategori' mode="multiple" allowClear />
                    </Form.Item>

                    <Form.Item name={'image'} label='Image'>
                        <Input type="file" accept="image/jpg, image/png, image/jpeg" onChange={(e) => setImage(e.target.files[0])} />
                    </Form.Item>
                    <div style={{width: '50%', margin: '10px auto'}}>
                        {image && <Image alt="prevew-imaage" src={URL.createObjectURL(image)} />}
                    </div>

                    <Form.Item name={'subBody'} label='Sub Bodi'>
                        <Input placeholder="sub bodi" />
                    </Form.Item>

                    <Form.Item name={'bodi'} label='Bodi'>
                        <ReactQuill style={{minHeight: '25vh'}} theme="snow" modules={module} formats={formats} 
                            onChange={handleChange} ref={quil} value={editHtml}
                        />
                    </Form.Item>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: 10}}>
                        {feed && <span className="feedback" style={{textAlign: 'center'}}>{feed}</span>}
                    </div>
                    <Form.Item className="button-news">
                        <Button htmlType="submit" type="primary">SIMPAN</Button>
                    </Form.Item>
                </Form>
            </div>
            <section title="prevew" className="prevew">
                <h2 style={{textAlign: 'center', marginBottom: 30}} >{title? title : 'Judul Berita'}</h2>
                <div className="body-wrapper-prevew">
                    <div dangerouslySetInnerHTML={{__html: editHtml}}></div>
                </div>
            </section>
        </Fragment>
    )
}

export default CreateNews;