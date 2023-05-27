import { Fragment } from "react";
import CardPost from "../../Components/Utils/CardPost";
import { Pagination, Divider } from "antd";

function Viral(){
    return(
        <Fragment>
            <section title="Berita Terbaru" style={{marginBottom: 100}}>
                <div className="title-post">
                    <h2>Judul Berita Viral</h2>
                    <div style={{borderBottom: '1px solid #eee', textAlign: "right", color: '#aaa', fontSize: '.7em'}}>
                        <p>11 Agustus 2024</p>
                    </div>
                </div>
                <div className="body-post">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste aliquam aperiam distinctio dolor consequuntur quaerat pariatur minus quam esse, suscipit et, quod accusantium libero repudiandae laboriosam veritatis fuga? Repellendus deserunt impedit, harum porro quasi, odio dolorem nobis, id eaque rem error aperiam a modi ipsum illo blanditiis doloribus. Molestiae dignissimos sint voluptas neque magnam esse nostrum suscipit voluptatum in aut, ea corrupti maxime quam sit error alias sequi ratione. Impedit quisquam veritatis repellat magni iste porro repudiandae id, earum optio maiores dolore, assumenda hic illum? Quisquam autem eligendi recusandae eveniet cumque, tempora laborum accusantium, expedita consequuntur corrupti maxime cum ratione!</p>
                </div>
            </section>
            <Divider/>
            <section title="List Berita Terbaru" style={{margin: '100px 0'}}>
                <div className="list-terbaru-wrapper">
                    <CardPost/>
                </div>
                <Pagination total={50} style={{textAlign: 'center', marginTop: 80}}/>
            </section>
        </Fragment>
    )
};

export default Viral;