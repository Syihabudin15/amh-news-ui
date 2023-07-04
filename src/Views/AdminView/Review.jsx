import { Fragment, useState } from "react";
import News from '../UserView/News';
import { useParams } from "react-router-dom";
import { Button, notification } from "antd";
import axios from "axios";
import { base } from "../../Extentions/LoadEnvirontment";
import Cookies from "js-cookie";
function Review(){
    const param = useParams();
    const [id, setId] = useState();
    const [isPost, setIsPost] = useState(false);
    const [load, setLoad] = useState(false);

    const postingPost = async () => {
        setLoad(true);
        try{
            await axios.request({
                method: 'PATCH',
                url: `${base}/api/v1/news/status/${id}`,
                headers: {
                    'token': Cookies.get('token')
                }
            });
            notification.success({message: 'Berita berhasil di posting'});
        }catch(err){
            notification.error({message: err.response.data.message || 'server error'});
        }
        setLoad(false);
    };
    const cancelPost = async () => {
        setLoad(true);
        try{
            await axios.request({
                method: 'PATCH',
                url: `${base}/api/v1/news/cancel/${id}`,
                headers: {
                    'token': Cookies.get('token')
                }
            });
            notification.success({message: 'Berita berhasil ditarik dari postingan', placement: 'topLeft'});
        }catch(err){
            notification.error({message: err.response.data.message || 'server error', placement: 'topLeft'});
        }
        setLoad(false);
    }
    return(
        <Fragment>
            <section title="action" className="action-wrap">
                <div className="action">
                    {isPost ? 
                    <Button size="small" loading={load} onClick={() => cancelPost()}>Tarik</Button> : 
                    <Button size="small" loading={load} onClick={() => postingPost()}>Posting</Button>}
                    <Button size="small" loading={load} danger disabled>Hapus</Button>
                    <Button size="small" loading={load} disabled>Revisi</Button>
                    <Button size="small" loading={load} disabled>Ubah</Button>
                </div>
            </section>
            <News slug={param.slug} idSet={setId} isPostSet={setIsPost} />
        </Fragment>
    )
}

export default Review;