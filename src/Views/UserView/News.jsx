import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getNewsBySlug } from '../../Reduxs/Slice/NewsBySlug';
import { Spin, Row, Col } from "antd";

function News({slug, idSet, isPostSet}){
    const params = useParams();
    const {isLoading, data} = useSelector(state => state.newsSlug);
    const dis = useDispatch();

    useEffect(() => {
        if(slug){
            dis(getNewsBySlug(slug));
            idSet(data._id)
        }else{
            dis(getNewsBySlug(params.slug));
        }
        if(data.postedAt){
            isPostSet(true);
        }
    }, [dis, params.slug, slug, data._id, idSet, data.postedAt, isPostSet]);
    return(
        <Fragment>
            <div className="back-main" style={{display: slug? 'none': 'block'}}>
                <Link to={'/'}><p>Main</p></Link>
            </div>
            <Spin spinning={isLoading}>
                <div style={{marginBottom: 100, padding: 50}}>
                    {data ? <div className="title-post">
                                <h2 >{data.title}</h2>
                                <div style={{borderBottom: '1px solid #eee', textAlign: "right", color: '#aaa', fontSize: '.7em'}}>
                                    <p>{data.postedAt}</p>
                                </div>
                                <div className="body-post" style={{textAlign: "justify", lineHeight: 2}} dangerouslySetInnerHTML={{__html: data.body}}>
                                </div>
                            </div> : <p style={{fontWeight: 'bold', opacity: .5, color: 'red'}}>Not Found</p>}
                </div>
                <div className="category-post">
                        <Row>
                            <Col span={4} style={{fontWeight: 'bold'}}>Categories </Col>
                            <Col offset={3} className="category-post-list">
                                {data.categories && data.categories.map((e,i) => (
                                    <Link to={`/kategori/${e._id}`} key={i}>{e.title}</Link>
                                ))}
                            </Col>
                        </Row>
                    </div>
            </Spin>
        </Fragment>
    )
}

export default News;