'use client';
import Header from '../../header';
import { Controller, useForm } from 'react-hook-form';
import { InboxOutlined } from '@ant-design/icons';
import { Select, Upload, UploadProps, message } from 'antd';
import style from './style.module.css';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { getCategory, postProduct } from '../test';
export default function CreateProduct() {
  const [datacategory, setDataCategory] = useState([]);
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
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const basicSlug = slugify(data.nameproduct, { lower: true, strict: true });
    const uniqueId = uuidv4();
    const randomSlug = `${basicSlug}-${uniqueId.substr(0, 8)}`;
    const datainput = {
      name: data.nameproduct,
      description: data.description,
      slug: randomSlug,
      price: parseFloat(data.price),
      image: data.image,
      categoryId: data.category,
      bestSeller: true,
      onPromotion: false,
      seoTags: data.nameproduct,
      status: true,
    };
    try {
      await postProduct(datainput);
      success();
    } catch (errors) {
      error();
      console.log(errors);
    }
    console.log(datainput);
  };
  async function getCategoryInProduct() {
    let obj = [];
    const data = await getCategory();
    data.getCategory.reverse().map(i => {
      obj.push({ key: i.id, label: i.name });
    });
    setDataCategory(obj);
    return data;
  }
  useEffect(() => {
    getCategoryInProduct();
  }, []);

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Thêm mới danh mục thành công',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Thêm mới danh mục thất bại',
    });
  };

  return (
    <div style={{ marginLeft: '255px' }}>
      {contextHolder}
      <Header />
      <div style={{ marginTop: '70px', marginLeft: '20px' }}>
        Thêm mới sản phẩm
        <div
          style={{ border: '1px solid gray', padding: '15px', width: '1200px' }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="nameproduct">Tên sản phẩm</label>
                  <br />
                  <input
                    className={`${style.inputNameproduct}`}
                    placeholder="Nhập tên sản phẩm"
                    id="nameproduct"
                    {...register('nameproduct', {
                      required: 'Name product is required',
                      minLength: {
                        value: 4,
                        message: 'Name product must be at least 4 characters',
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
                    className={`${style.inputNameproduct}`}
                    placeholder="Nhập nội dung"
                    id="description"
                    type="text"
                    {...register('description', {
                      required: 'Description is required',
                      minLength: {
                        value: 4,
                        message: 'Description must be at least 4 characters',
                      },
                    })}
                  />
                  {errors.description && (
                    <span>{errors.description.message}</span>
                  )}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="price">Giá sản phẩm</label>
                  <br />
                  <input
                    className={`${style.inputNameproduct}`}
                    placeholder="Nhập giá"
                    id="price"
                    type="text"
                    {...register('price', {
                      required: 'Price is required',
                      pattern: {
                        value: /^\d+$/,
                        message:
                          'Price must be a number and cannot contain letters',
                      },
                    })}
                  />
                  {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div>
                  <p>Hình ảnh</p>
                  <Controller
                    name="image"
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
              <div>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginRight: '10px' }}>
                    <label htmlFor="category">Phân loại</label>
                    <br />
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Select {...field} style={{ width: 200 }}>
                          {datacategory.map((person, index) => (
                            <Select.Option key={index} value={person.key}>
                              {person.label}
                            </Select.Option>
                          ))}
                        </Select>
                      )}
                    />
                  </div>
                  <div>
                    <label htmlFor="warehouse">Nhà cung cấp</label>
                    <br />
                    <Controller
                      name="warehouse"
                      control={control}
                      render={({ field }) => (
                        <Select
                          {...field}
                          style={{ width: 200 }}
                          options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                          ]}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
