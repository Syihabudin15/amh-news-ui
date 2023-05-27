import { Pagination, Image } from "antd";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Category(){
    return(
        <Fragment>
            <h3 style={{textAlign: 'center'}}>Daftar Kategori</h3>
            <section title="Daftar Category">
                <div className="card-category-wrap">
                    <div className="card-category">
                        <Image src="#" alt="game" width={'100%'} height={'100%'} />
                        <Link to={'/kategori/game'}>
                            <div className="title-category">
                                <p>GAME</p>
                            </div>
                        </Link>
                    </div>
                    <div className="card-category">
                        <Image src="#" alt="game" width={'100%'} height={'100%'} />
                        <Link to='/kategori/animasi'>
                            <div className="title-category">
                                <p>ANIMASI</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <Pagination style={{textAlign: 'center', marginTop: 100}} />
            </section>
        </Fragment>
    )
};

export default Category;