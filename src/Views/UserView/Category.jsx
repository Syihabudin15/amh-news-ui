import { Pagination, Image, Spin } from "antd";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategory } from '../../Reduxs/Slice/Category';
import { base } from "../../Extentions/LoadEnvirontment";

function Category(){
    const {isLoading, data} = useSelector(state => state.category);
    const [page, setPage] = useState(1);
    const dis = useDispatch();

    useEffect(() => {
        dis(getAllCategory(page));
    }, [dis, page]);
    return(
        <Fragment>
            <Spin spinning={isLoading}>
                <h3 style={{textAlign: 'center'}}>Daftar Kategori</h3>
                <section title="Daftar Category">
                    <div className="card-category-wrap">
                        {data && data.map((e,i) => (
                            <div className="card-category">
                                <Image src={`${base}/img/${e.image}`} alt="game" width={'100%'} height={'100%'} />
                                <Link to={`/kategori/${e._id}`}>
                                    <div className="title-category">
                                        <p>{e.name.toUpperCase()}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Pagination style={{textAlign: 'center', marginTop: 100}} total={data.length} defaultCurrent={page} onChange={(e) => setPage(e)} />
                </section>
            </Spin>
        </Fragment>
    )
};

export default Category;