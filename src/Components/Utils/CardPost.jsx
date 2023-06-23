import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { base } from "../../Extentions/LoadEnvirontment";

function CardPost({data, key}){
    return(
        <Fragment>
            <div className="card-post" key={key}>
                <div className="card-img">
                    <Image src={`${base}/img/${data.images[0].image}`} alt="card-img" width={'100%'} height={'100%'} />
                </div>
                <p className="card-title">{data.title}</p>
                <div className="card-body">
                    <p>{data.subBody}</p>
                    <Link to={`/berita/${data.slug}`} style={{marginLeft: 10, fontWeight: "bold"}}>... Detail</Link>
                </div>
            </div>
        </Fragment>
    )
};

export default CardPost;