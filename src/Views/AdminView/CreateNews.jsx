import { Button, Form, Input, Select } from "antd";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactQuill from "react-quill";
import { getAllCategory } from "../../Reduxs/Slice/Category";
import { useRef } from "react";
import { useMemo } from "react";

function CreateNews(){
    const { data } = useSelector(state => state.category);
    const [editHtml, setEditHtml] = useState();
    const [title, setTitle] = useState();
    let quil = useRef(null);
    const dis = useDispatch();
    const options = data ? data.map(e => {
        return {label: e.title, value: e._id}
    }) : [];

    const handleChange = (content, delta, source, editor) => {
        setEditHtml(content);
    };

    const handleImage = () => {
        const editor = quil.current.getEditor();
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('class', 'img-quil');
        input.setAttribute('accept', 'image/jpg, image/jpeg, image/png');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const uri = 'imgehere'
            editor.insertEmbed(editor.getSelection(), 'image', uri);
        };
        
    };

    const module = useMemo(() => ({
        toolbar: {
            container: [
                [{header: [1, 2, false]}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [
                    {list: 'ordered'},
                    {list: 'bullet'},
                    {indent: '-1'},
                    {indent: '+1'}
                ],
                ['link', 'image'],
                ['clean']
            ],
            handlers: {
                image: handleImage
            }
        }
    }), []);

    const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'imageBlot'];
    
    useEffect(() => {
        dis(getAllCategory());
    }, [dis]);
    console.log(editHtml);

    return(
        <Fragment>
            <h3 style={{textAlign: 'center'}}>Buat Berita</h3>
            <div className="form-news">
                <Form labelCol={{span: 2}}>
                    <Form.Item name={'title'} label='Judul'>
                        <Input placeholder="Masukan Judul" onChange={(e) => setTitle(e.target.value)} />
                    </Form.Item>

                    <Form.Item name={'categories'} label='Kategori'>
                        <Select options={options} direction="vertical" placeholder='Minimal 1 Kategori' mode="multiple" allowClear />
                    </Form.Item>

                    <Form.Item name={'subBody'} label='Sub Bodi'>
                        <Input placeholder="sub bodi" />
                    </Form.Item>

                    <Form.Item name={'bodi'} label='Bodi'>
                        <ReactQuill style={{minHeight: '25vh'}} theme="snow" modules={module} formats={formats} 
                            onChange={handleChange} ref={quil} value={editHtml}
                        />
                    </Form.Item>

                    <Form.Item className="button-news">
                        <Button htmlType="submit" type="primary">SIMPAN</Button>
                    </Form.Item>
                </Form>
            </div>
            <section title="prevew" className="prevew">
                <h2 style={{textAlign: 'center', marginBottom: 30}} >{title? title : 'Judul Berita'}</h2>
                <div className="body-wrapper-prevew">
                    <div dangerouslySetInnerHTML={{__html: editHtml}}></div>
                </div>
            </section>
        </Fragment>
    )
}

export default CreateNews;