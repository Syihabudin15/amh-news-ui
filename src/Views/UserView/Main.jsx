import { Fragment, useEffect } from "react";
import ReportAndSocialLink from "../../Components/MainComp/ReportAndSocialLink";
import { Divider, Spin } from "antd";
import CardPost from "../../Components/Utils/CardPost";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from '../../Reduxs/Slice/NewsSlice';

function Main(){
    const { isLoading, data } = useSelector(state => state.news);
    const dis = useDispatch();
    console.log(data);

    useEffect(() => {
        dis(getAllNews({page: 1}));
    }, [dis]);
    return(
        <Fragment>
            <Spin spinning={isLoading}>
                <section title="Berita Utama" style={{marginBottom: 100}}>
                    <div className="title-post">
                        <h2 >{data.length > 0 ? data[0].title : 'Judul Berita'}</h2>
                        <div style={{borderBottom: '1px solid #eee', textAlign: "right", color: '#aaa', fontSize: '.7em'}}>
                            <p>{data.length > 0 ? data[0].postedAt : 'Tanggal'}</p>
                        </div>
                    </div>
                    <div className="body-post" dangerouslySetInnerHTML={{__html: data.length > 0 ? data[0].body : ''}}>
                    </div>
                </section>
                <section title="List Berita" style={{margin: 20}}>
                    <Divider/>
                    <h5 style={{textAlign: 'center'}}>Terbaru</h5>
                    <div className="main-viral-wrap">
                        {data && data.map((e,i) => (
                            <CardPost key={i} data={e} />
                        ))}
                    </div>
                </section>
                <section title="Laporkan dan Social Link">
                    <Divider/>
                    <ReportAndSocialLink/>
                </section>
            </Spin>
        </Fragment>
    )
};

export default Main;