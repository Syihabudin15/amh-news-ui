import { Input, Pagination, Spin } from "antd";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPost from "../../Components/Utils/CardPost";
import { getAllNews } from '../../Reduxs/Slice/NewsSlice';
import { searchNews } from '../../Reduxs/Slice/SearchNews';

function AllNews(){
    const [page, setPage] = useState(1);
    const [currData, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const {isLoading, data} = useSelector(state => state.news);
    const {loading, dataSearch} = useSelector(state => state.searchNews);
    const [title, setTitle] = useState();
    const dis = useDispatch();

    useEffect(() => {
            if(!title){
                dis(getAllNews(page));
                setLoad(isLoading);
                setData(data);
            }
    }, [dis, page]);

    useEffect(() => {
        if(title){
            dis(searchNews(title, page));
            setLoad(loading);
            setData(dataSearch);
        }
    }, [dis, title, page]);
    return(
        <Fragment>
            <h2 style={{textAlign: 'center', margin: 50}}>Daftar Semua Berita</h2>
            <div className="search-news">
                <Input placeholder="Judul" style={{width: '50vw'}} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <Spin spinning={load}>
                <div className="main-viral-wrap">
                    {currData && currData.map((e,i) => (
                        <CardPost key={i} data={e} />
                    ))}
                </div>
            </Spin>
            <Pagination defaultCurrent={page} onChange={(e) => setPage(e)} style={{textAlign: 'center', marginTop: 80}}/>
        </Fragment>
    )
}

export default AllNews;