import { Fragment } from "react";
import ReportAndSocialLink from "../../Components/MainComp/ReportAndSocialLink";
import { Divider, Spin } from "antd";
import CardPost from "../../Components/Utils/CardPost";

function Main(){
    return(
        <Fragment>
            <Spin spinning={false}>
                <section title="Berita Utama" style={{marginBottom: 100}}>
                    <div className="title-post">
                        <h2 >Judul Berita</h2>
                        <div style={{borderBottom: '1px solid #eee', textAlign: "right", color: '#aaa', fontSize: '.7em'}}>
                            <p>Tanggal</p>
                        </div>
                    </div>
                    <div className="body-post">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae aut adipisci perspiciatis dicta. Porro delectus magnam facere sunt voluptate reprehenderit ullam illum impedit labore. Ex, architecto quis? Libero earum debitis nemo obcaecati laboriosam optio eaque, quibusdam iusto quisquam, ad distinctio dolores architecto eligendi quae officiis dolore ducimus eum soluta sed provident similique. Distinctio fugit asperiores, sunt, nobis repudiandae numquam cupiditate repellendus quia alias, iste odit natus. Quasi error, eius suscipit animi dolore quam natus. Sit hic ducimus dolorum dolorem cupiditate. Deserunt pariatur ad nihil, corporis quisquam, illo voluptatibus eligendi culpa fugiat rem, ullam debitis nobis quas fuga recusandae laudantium.</p>
                    </div>
                </section>
                <section title="List Berita" style={{margin: 20}}>
                    <Divider/>
                    <h5 style={{textAlign: 'center'}}>Terbaru</h5>
                    <div className="main-viral-wrap">
                        {/* <CardPost/> */}
                    </div>
                </section>
                <section title="Laporkan dan Social Link">
                    <Divider/>
                    <ReportAndSocialLink/>
                </section>
            </Spin>
        </Fragment>
    )
};

export default Main;