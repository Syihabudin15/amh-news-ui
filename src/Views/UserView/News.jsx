import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getNewsBySlug } from '../../Reduxs/Slice/NewsBySlug';
import { Spin } from "antd";

function News(){
    const params = useParams();
    const {isLoading, data} = useSelector(state => state.newsSlug);
    const dis = useDispatch();

    useEffect(() => {
        dis(getNewsBySlug(params.slug));
    }, [dis, params.slug]);
    return(
        <Fragment>
            <div className="back-main">
                <Link to={'/'}><p>Main</p></Link>
            </div>
            <Spin spinning={isLoading}>
                <div>
                    {data ? <div className="title-post">
                                <h2 >{data.title}</h2>
                                <div style={{borderBottom: '1px solid #eee', textAlign: "right", color: '#aaa', fontSize: '.7em'}}>
                                    <p>{data.postedAt}</p>
                                </div>
                                <div className="body-post" dangerouslySetInnerHTML={{__html: data.body}}>
                                </div>
                            </div> : <p style={{fontWeight: 'bold', opacity: .5, color: 'red'}}>Not Found</p>}
                </div>
            </Spin>
        </Fragment>
    )
}

export default News;