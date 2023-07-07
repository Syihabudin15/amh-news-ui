import { Button, Col, Image, Input, Modal, Row, notification } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import { Fragment, useState } from "react";
import { base } from '../../Extentions/LoadEnvirontment';

function CreateCategory(){
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [img, setImg] = useState();
    const [title, setTitle] = useState();
    const [imgBase, setImgBase] = useState();
    const [feed, setFeed] = useState();
    

    const handleOk = async () => {
        if(!title || !img) return setFeed('Title and Image is required');
        setLoading(true);
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload(() => {
            setImgBase(reader.result);
        });
        try{
            await axios.request({
                method: 'POST',
                url: `${base}/api/v1/category`,
                headers: {
                    'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL',
                    'token': Cookies.get('token')
                },
                data: {
                    title: title,
                    image: imgBase
                }
            });
            notification.success({message: 'Berhasil!'});
            setOpen(false);
        }catch(err){
            console.log(err);
            setFeed(err.response.data.message || 'server error');
        }finally{
            setLoading(false);
        }
    };
    return(
        <Fragment>
            <span onClick={() => setOpen(true)}>Buat Kategori</span>
            <Modal open={open} onCancel={() => setOpen(false)} title={'Kategori Baru'} 
                footer={[<Button type="primary" loading={loading} onClick={() => handleOk()}>OK</Button>]}
            >
                <Row>
                    <Col span={5}>Nama</Col><Col span={3}>:</Col>
                    <Col>
                        <Input onChange={(e) => {
                            setTitle(e.target.value)
                            setFeed(null);
                        }}/>
                    </Col>
                </Row>
                <Row style={{marginTop: 10}}>
                    <Col span={5}>Image</Col> <Col span={3}>:</Col>
                    <Col>
                        <input type="file" onChange={(e) => {
                            setImg(e.target.files[0]);
                            setFeed(null);
                        }} />
                    </Col>
                </Row>
                <Row>
                    {img && 
                        <Col className="create-cate-img">
                            <Image src={URL.createObjectURL(img)} />
                        </Col>
                    }
                </Row>
                <Row>
                    <Col className="feedback">{feed}</Col>
                </Row>
            </Modal>
        </Fragment>
    )
}

export default CreateCategory;
