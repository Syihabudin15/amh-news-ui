import { Image, Spin } from "antd";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategory } from '../../Reduxs/Slice/Category';

function Category(){
    const {isLoading, data} = useSelector(state => state.category);
    const dis = useDispatch();
    useEffect(() => {
        dis(getAllCategory());
    }, [dis]);
    return(
        <Fragment>
            <Spin spinning={isLoading}>
                <h3 style={{textAlign: 'center'}}>Daftar Kategori</h3>
                <section title="Daftar Category">
                    <div className="card-category-wrap">
                        {data && data.map((e,i) => (
                            <div className="card-category">
                                <Image src={e.image} alt={e.title} width={'100%'} height={'100%'} style={{borderRadius: 5}} />
                                <Link to={`/kategori/${e._id}`}>
                                    <div className="title-category">
                                        <p>{e.title.toUpperCase()}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </Spin>
        </Fragment>
    )
};

export default Category;