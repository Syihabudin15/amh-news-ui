import { Fragment } from "react";

function Addsense({mode}){
    return(
        <Fragment>
            <div className={`adds ${mode}`}>
                <p>Addsense Here</p>
            </div>
        </Fragment>
    )
};

export default Addsense;