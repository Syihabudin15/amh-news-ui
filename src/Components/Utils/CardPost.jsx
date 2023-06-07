import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";
import { base } from "../../Extentions/LoadEnvirontment";

function CardPost({data}){
    return(
        <Fragment>
            <div className="card-post">
                <div className="card-img">
                    <Image src={base + 'img/' +data.image[0]} alt="card-img" width={'100%'} height={'100%'} />
                </div>
                <p className="card-title">{data.title}</p>
                <div className="card-body">
                    <p dangerouslySetInnerHTML={data.body}></p>
                    <Link style={{marginLeft: 10, fontWeight: "bold"}}>... Detail</Link>
                </div>
            </div>
        </Fragment>
    )
};

export default CardPost;