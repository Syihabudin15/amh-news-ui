import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../../Reduxs/Slice/NewsSlice";
import { Pagination, Table, notification, Button } from "antd";
import { EyeFilled, DeleteFilled } from '@ant-design/icons';
import axios from "axios";
import Cookies from "js-cookie";
import { base } from "../../../Extentions/LoadEnvirontment";
import { useNavigate } from "react-router-dom";

function PostTable({role}){
    const { data, isLoading } = useSelector(state => state.news);
    const [load, setLoad] = useState(false);
    const [page, setPage] = useState(1);
    const dis = useDispatch();
    const nav = useNavigate();

    const cancelPost = async (id) => {
        setLoad(true);
        try{
            await axios.request({
                method: 'PATCH',
                url: `${base}/api/v1/news/cancel/${id}`,
                headers: {
                    'token': Cookies.get('token')
                }
            });
            notification.success({message: 'Berita berhasil ditarik dari postingan'});
        }catch(err){
            notification.error({message: err.response.data.message || 'server error'});
        }
        setLoad(false);
    };

    const columns = [
        {title: 'Judul', dataIndex: 'title'},
        {title: 'Pembuat', dataIndex: 'author'},
        {title: 'Role', dataIndex: 'role'},
        {title: 'Action', dataIndex: 'data', render: (data) => (
            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 10}}>
                <Button loading={load} size="small" onClick={() => nav(`/admin/news/review/${data.slug}`)} icon={<EyeFilled style={{color: 'blue'}} />} title="Lihat" ></Button>
                <Button loading={load} disabled={role === 'Admin' ? false : true} size="small" onClick={() => cancelPost(data._id)} 
                    icon={<DeleteFilled style={{color: 'red'}}/>} title="Hapus dari daftar postingan" ></Button>
            </div>
        )}
    ];

    const sources = data && data.map((e) => {
        return {
            title: e.title,
            author: e.author.first_name ? `${e.author.first_name} ${e.author.last_name}` : `${e.author.m_credential.email}`,
            role: e.author.m_credential.m_role.role,
            data: e
        }
    });

    useEffect(() => {
        dis(getAllNews(page));
    }, [dis, page]);
    return(
        <Fragment>
            <section>
                <div>
                    <Table pagination={false} loading={isLoading} columns={columns} dataSource={sources} />
                    <div style={{textAlign: 'center', margin: '30px auto'}}>
                        <Pagination onChange={(e) => setPage(e)} total={data ? data.length : 0} />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default PostTable;