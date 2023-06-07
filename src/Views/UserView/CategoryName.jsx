import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsByCategory } from '../../Reduxs/Slice/NewsByCategory';
import CardPost from '../../Components/Utils/CardPost';
import { Pagination, Spin } from "antd";

function CategoryName(){
    let params = useParams();
    const {isLoading, data} = useSelector(state => state.newsCategory);
    const [page, setPage] = useState(1);
    const dis = useDispatch();
    useEffect(() => {
        dis(getNewsByCategory({id: params.nama, page: page}));
    }, [dis, params, page]);
    return(
        <Fragment>
            <Spin spinning={isLoading}>
                <section className="category-id-wrap">
                    <h3 style={{textAlign: 'center', marginBottom: 50}}>List</h3>
                    <div className="main-viral-wrap">
                        {data && data.map((e,i) => (
                            <CardPost key={i} data={e} />
                        ))}
                    </div>
                    <Pagination total={data.length} onChange={(e) => setPage(e)} defaultCurrent={page} style={{textAlign: 'center', marginTop: 80}}/>
                </section>
            </Spin>
        </Fragment>
    )
};

export default CategoryName;