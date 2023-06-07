import { Divider, Pagination, Spin } from "antd";
import { Fragment, useEffect, useState } from "react";
import CardPost from "../../Components/Utils/CardPost";
import { getAllNews } from "../../Reduxs/Slice/NewsSlice";
import { useDispatch, useSelector } from "react-redux";

function Terbaru(){
    const {isLoading, data} = useSelector(state => state.news);
    const dis = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        dis(getAllNews(page));
    }, [page, dis]);
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
                    <div className="body-post">
                        <p dangerouslySetInnerHTML={{__html: data.length > 0 ? data[0].body : ''}}></p>
                    </div>
                </section>
                <Divider/>
                <section title="List Berita Terbaru" style={{margin: '100px 0'}}>
                    <div className="list-terbaru-wrapper">
                        {data && data.map((e,i) => (
                            <CardPost data={e} key={i}/>
                        ))}
                    </div>
                    <Pagination total={data.length} defaultCurrent={page} onChange={(e) => setPage(e)} style={{textAlign: 'center', marginTop: 80}}/>
                </section>
            </Spin>
        </Fragment>
    )
};

export default Terbaru;