import { Input, Pagination, Spin } from "antd";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPost from "../../Components/Utils/CardPost";
import { getAllNews } from '../../Reduxs/Slice/NewsSlice';
import { searchNews } from '../../Reduxs/Slice/SearchNews';

function AllNews(){
    const [page, setPage] = useState(1);
    const {isLoading, data} = useSelector(state => state.news);
    const {loading, dataSearch} = useSelector(state => state.searchNews);
    const [title, setTitle] = useState();
    const dis = useDispatch();

    useEffect(() => {
        dis(getAllNews(page));
    }, [dis, page]);

    return(
        <Fragment>
            <h2 style={{textAlign: 'center', margin: 50}}>Daftar Semua Berita</h2>
            <div className="search-news">
                <Input placeholder="Judul" style={{width: '50vw', marginBottom: 50}} onChange={(e) => {
                    setTitle(e.target.value);
                    dis(searchNews(title, page));
                }}/>
            </div>
            <Spin spinning={title ? loading : isLoading}>
                <div className="main-viral-wrap">
                    {title ? dataSearch.map((e,i) => (<CardPost key={i} data={e} />)) : data.map((e,i) => <CardPost key={i} data={e}/>)}
                </div>
            </Spin>
            <Pagination defaultCurrent={page} onChange={(e) => setPage(e)} style={{textAlign: 'center', marginTop: 80}}/>
        </Fragment>
    )
}

export default AllNews;