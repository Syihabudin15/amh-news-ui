import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";

function CardPost({data, key}){
    return(
        <Fragment>
            <div className="card-post" key={key}>
                <div className="card-img">
                    <Image src={data.image} alt={data.image} width={'100%'} height={'100%'} />
                </div>
                <p className="card-title">{data.title}</p>
                <div className="card-body">
                    <p style={{height: 50, overflowY: 'scroll'}}>{data.subBody}</p>
                    <Link to={`/berita/${data.slug}`} style={{marginLeft: 10, fontWeight: "bold"}}>... Detail</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default CardPost; 