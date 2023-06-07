// import { Divider, Pagination, Spin, notification } from "antd";
// import { Fragment, useEffect, useState } from "react";
// import CardPost from "../../Components/Utils/CardPost";
// import axios from "axios";
// import { base } from "../../Extentions/LoadEnvirontment";

// function Terbaru(){
//     const [data, setData] = useState([]);
//     const [load, setLoad] = useState(false);
//     const [page, setPage] = useState(1);

//     useEffect(() => {
//         const getAll = async () => {
//             setLoad(true);
//             try{
//                 let result = await axios.get(`${base}api/get/news?page=${page}`);
//                 setData(result.data.data);
//             }catch(err){
//                 notification.error({message: err.response.data.msg});
//             }
//             setLoad(false);
//         }
//         getAll();
//     }, [page]);
//     return(
//         <Fragment>
//             <Spin spinning={load}>
//                 <section title="Berita Terbaru" style={{marginBottom: 100}}>
//                     <div className="title-post">
//                         <h2>{data[0].title}</h2>
//                         <div style={{borderBottom: '1px solid #eee', textAlign: "right", color: '#aaa', fontSize: '.7em'}}>
//                             <p>{data[0].postedAt}</p>
//                         </div>
//                     </div>
//                     <div className="body-post">
//                         <p dangerouslySetInnerHTML={data[0].body}></p>
//                     </div>
//                 </section>
//                 <Divider/>
//                 <section title="List Berita Terbaru" style={{margin: '100px 0'}}>
//                     <div className="list-terbaru-wrapper">
//                         {data && data.map((e,i) => (
//                             <CardPost data={e} key={i}/>
//                         ))}
//                     </div>
//                     <Pagination total={data.length} defaultCurrent={page} onChange={(e) => setPage(e)} style={{textAlign: 'center', marginTop: 80}}/>
//                 </section>
//             </Spin>
//         </Fragment>
//     )
// };

// export default Terbaru;