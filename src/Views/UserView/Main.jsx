import { Fragment, useEffect } from "react";
import ReportAndSocialLink from "../../Components/MainComp/ReportAndSocialLink";
import { Col, Divider, Spin, Row } from "antd";
import CardPost from "../../Components/Utils/CardPost";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from '../../Reduxs/Slice/NewsSlice';
import { Link } from "react-router-dom";

function Main(){
    const { isLoading, data } = useSelector(state => state.news);
    const dis = useDispatch();

    useEffect(() => {
        dis(getAllNews({page: 1}));
    }, [dis]);
    console.log(data);
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
                    <div className="category-post">
                        <Row>
                            <Col span={4} style={{fontWeight: 'bold'}}>Categories </Col>
                            <Col offset={3} className="category-post-list">
                                {data[0].categories.map((e,i) => (
                                    <Link to={`/kategori/${e._id}`} key={i}>{e.title}</Link>
                                ))}
                            </Col>
                        </Row>
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