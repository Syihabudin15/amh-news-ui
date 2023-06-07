import { Fragment, useEffect, useState } from "react";
import CardPost from "../../Components/Utils/CardPost";
import { Pagination, Divider, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getNewsByCategory } from '../../Reduxs/Slice/NewsByCategory';

function Viral(){
    const { isLoading, data } = useSelector(state => state.newsCategory);
    const [page, setPage] = useState(1);
    const dis = useDispatch();

    useEffect(() => {
        dis(getNewsByCategory({id: '647265568b3de175e94f7a67', page}));
    }, [dis, page]);
    return(
        <Fragment>
            <Spin spinning={isLoading}>
                <section title="Berita Terbaru" style={{marginBottom: 100}}>
                    <div className="title-post">
                        <h2>{data.length > 0 ? data[0].title : 'Judul Berita'}</h2>
                        <div style={{borderBottom: '1px solid #eee', textAlign: "right", color: '#aaa', fontSize: '.7em'}}>
                            <p>{data.length > 0 ? data[0].postedAt : 'Tanggal'}</p>
                        </div>
                    </div>
                    <div className="body-post" dangerouslySetInnerHTML={{__html: data.length > 0? data[0].body : ''}}>
                    </div>
                </section>
                <Divider/>
                <section title="List Berita Terbaru" style={{margin: '100px 0'}}>
                    <div className="list-terbaru-wrapper">
                        {data && data.map((e,i) => (
                            <CardPost key={i} data={e}/>
                        ))}
                    </div>
                    <Pagination total={data.length} onChange={(e) => setPage(e)} defaultCurrent={page} style={{textAlign: 'center', marginTop: 80}}/>
                </section>
            </Spin>
        </Fragment>
    )
};

export default Viral;