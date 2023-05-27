import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";

function CardPost(){
    return(
        <Fragment>
            <div className="card-post">
                <div className="card-img">
                    <Image src="#" alt="card-img" width={'100%'} height={'100%'} />
                </div>
                <p className="card-title">Judul Post</p>
                <p className="card-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, cumque.
                    <Link style={{marginLeft: 10, fontWeight: "bold"}}>... Detail</Link>
                </p>
            </div>
        </Fragment>
    )
};

export default CardPost;