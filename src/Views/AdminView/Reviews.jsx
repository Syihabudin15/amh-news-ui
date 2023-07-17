import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUnposted } from "../../Reduxs/Slice/UnPosted";
import { Button, Pagination, Table, notification } from "antd";
import { EyeFilled, CheckCircleFilled, DeleteFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import PostTable from "./Utils/PostTable";
import { base } from "../../Extentions/LoadEnvirontment";

function Reviews() {
  const { isLoading, data } = useSelector((state) => state.unPosted);
  const { role } = useSelector((state) => state.user);
  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1);
  const dis = useDispatch();
  const nav = useNavigate();

  const postingPost = async (id) => {
    setLoad(true);
    try {
      await axios.request({
        method: "PATCH",
        url: `${base}/api/v1/news/status/${id}`,
        headers: {
          token: Cookies.get("token"),
        },
      });
      notification.success({ message: "Berita berhasil di posting" });
    } catch (err) {
      notification.error({
        message: err.response.data.message || "server error",
      });
    }
    setLoad(false);
    dis(getAllUnposted(page));
  };

  const columns = [
    { title: "Judul", dataIndex: "title" },
    { title: "Pembuat", dataIndex: "author" },
    { title: "Role", dataIndex: "role" },
    {
      title: "Action",
      dataIndex: "data",
      render: (data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <Button
            loading={load}
            size="small"
            onClick={() => nav(`/admin/news/review/${data.slug}`)}
            icon={<EyeFilled style={{ color: "blue" }} />}
            title="Lihat"
          ></Button>
          <Button
            loading={load}
            disabled={role === "Admin" ? false : true}
            size="small"
            onClick={() => postingPost(data._id)}
            icon={<CheckCircleFilled style={{ color: "green" }} />}
            title="Posting"
          ></Button>
          <Button
            loading={load}
            disabled
            size="small"
            icon={<DeleteFilled style={{ color: "red" }} />}
            title="Hapus"
          ></Button>
        </div>
      ),
    },
  ];
  const sources =
    data &&
    data.map((e) => {
      return {
        title: e.title,
        author: e.author.first_name
          ? `${e.author.first_name} ${e.author.last_name}`
          : `${e.author.m_credential.email}`,
        role: e.author.m_credential.m_role.role,
        data: e,
      };
    });

  useEffect(() => {
    dis(getAllUnposted(page));
  }, [dis, page]);
  return (
    <Fragment>
      <section title="List Berita UnPosted" className="table-wrap">
        <h3>Belum di Posting</h3>
        <div>
          <Table
            columns={columns}
            dataSource={sources}
            loading={isLoading}
            pagination={false}
          />
          <Pagination
            total={data.length}
            onChange={(e) => setPage(e)}
            style={{ margin: "10px auto", textAlign: "center" }}
          />
        </div>
      </section>
      <section
        title="List Berita UnPosted"
        className="table-wrap"
        style={{ marginBottom: 100 }}
      >
        <h3>Sudah di Posting</h3>
        <div>
          <PostTable role={role} />
        </div>
      </section>
    </Fragment>
  );
}

export default Reviews;
