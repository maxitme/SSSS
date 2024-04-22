'use client';
import Header from '../../header';
import { Controller, useForm } from 'react-hook-form';
import { InboxOutlined } from '@ant-design/icons';
import { Select, Upload, UploadProps, message } from 'antd';
import style from './style.module.css';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { getIdUpdateCategory, updateCategory } from './test';

export default function UpdateCategory() {
  const [dataCategory, setDataCategory] = useState([]);
  const [idUpdate, setdIdUpdate] = useState();
  const { Dragger } = Upload;
  const props: UploadProps = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      // console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  let datas = [];
  const onSubmit = async data => {
    dataCategory.map(item => {
      let itemId = item.id;
      const basicSlug = slugify(data[`namecategory${itemId}`], {
        lower: true,
        strict: true,
      });
      const uniqueId = uuidv4();
      const randomSlug = `${basicSlug}-${uniqueId.substr(0, 8)}`;
      let datainput = {
        name: data[`namecategory${itemId}`],
        description: data[`description${itemId}`],
        slug: randomSlug,
        // image: data[`image${itemId}`] ? data[`image${itemId}`] : '',
        seoTags: data[`nameproduct${itemId}`],
      };
      datas.push(datainput);
    });
    try {
      await updateCategory(idUpdate, datas);
      success();
    } catch (errors) {
      error();
      console.log(errors);
    }
  };
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Cập nhật danh mục thành công',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Cập nhật danh mục thất bại',
    });
  };
  const getUrlParams = () => {
    const url = window.location.href;
    const params = new URLSearchParams(url.split('?')[1]);
    const idValues = params.getAll('id');
    return idValues;
  };
  

  useEffect(() => {
    const fetchData = async () => {
      const idValues = getUrlParams();
      const arr = idValues.map(str => parseInt(str));
      const a = await getIdUpdateCategory(arr);
      setDataCategory(a.data);
      setdIdUpdate(arr)
    };
    fetchData();
  }, []);
  return (
    <div style={{ marginLeft: '255px' }}>
      {contextHolder}
      <Header />
      <div style={{ marginTop: '70px', marginLeft: '20px' }}>
        Sửa danh mục
        <div
          style={{ border: '1px solid gray', padding: '15px', width: '1200px' }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
             {dataCategory.map((i, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    border: '1px solid red',
                    padding: '10px',
                  }}
                >
                  <div>
                    <div style={{ marginBottom: '10px' }}>
                      <label htmlFor="nameproduct">Tên sản phẩm</label>
                      <br />
                      <input
                        defaultValue={i.name}
                        className={`${style.inputNameproduct}`}
                        placeholder="Nhập tên sản phẩm"
                        id={`namecategory${i.id}`}
                        {...register(`namecategory${i.id}`, {
                          required: 'Name product is required',
                          minLength: {
                            value: 4,
                            message:
                              'Name product must be at least 4 characters',
                          },
                        })}
                      />
                      {errors.nameproduct && (
                        <span>{errors.nameproduct.message}</span>
                      )}
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                      <label htmlFor="description">Nội dung</label>
                      <br />
                      <input
                        defaultValue={i.description}
                        className={`${style.inputNameproduct}`}
                        placeholder="Nhập nội dung"
                        id={`description${i.id}`}
                        type="text"
                        {...register(`description${i.id}`, {
                          required: 'Description is required',
                          minLength: {
                            value: 4,
                            message:
                              'Description must be at least 4 characters',
                          },
                        })}
                      />
                      {errors.description && (
                        <span>{errors.description.message}</span>
                      )}
                    </div>
                    <div>
                      <p>Hình ảnh</p>
                      <Controller
                        name={`image${i.id}`}
                        control={control}
                        render={({ field }) => (
                          <Dragger
                            {...props}
                            beforeUpload={file => {
                              field.onChange(file.name);
                              return false; // Return false to stop automatic upload
                            }}
                          >
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                              Click or drag file to this area to upload
                            </p>
                          </Dragger>
                        )}
                      />
                    </div>
                  </div>
                  
                </div>
              );
            })}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
