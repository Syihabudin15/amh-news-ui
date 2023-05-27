import { Fragment } from "react";
import { useParams } from "react-router-dom";

function CategoryName(){
    let params = useParams();
    return(
        <Fragment>
            Category {params.nama.toUpperCase()}
        </Fragment>
    )
};

export default CategoryName;