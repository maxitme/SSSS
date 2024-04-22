'use client';
import Header from '../../header';
import { Controller, useForm } from 'react-hook-form';
import { InboxOutlined } from '@ant-design/icons';
import { Select, Upload, UploadProps, message } from 'antd';
import style from './style.module.css';
import { useEffect, useState } from 'react';
import {
  getCategoryHighLevel,
  postCategoryHighLevel,
} from './test';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
export default function CreateProduct() {
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
    onDrop(e) {},
  };

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async data => {
    const basicSlug = slugify(data.slug, { lower: true, strict: true });

    // Tạo một ID ngẫu nhiên
    const uniqueId = uuidv4();

    // Kết hợp slug với một phần của ID ngẫu nhiên để đảm bảo tính duy nhất
    // Cắt UUID để slug không quá dài
    const randomSlug = `${basicSlug}-${uniqueId.substr(0, 8)}`;

    const datainput = {
      name: data.name,
      description: data.description,
      slug: randomSlug,
      customFields: null,
      parentId: data.categoryhighlevel,
      children: null,
    };
    try {
      await postCategoryHighLevel(datainput);
      success();
    } catch (errors) {
      error();
      console.log(errors);
    }
  };

  const description = watch('description');
  const [datacatehighlevel, setdatacatehighlevel] = useState([]);
  async function fetchDatas() {
    const getCate = await getCategoryHighLevel();
    setdatacatehighlevel(getCate.data);
  }
  useEffect(() => {
    fetchDatas();
    setValue('slug', description);
  }, [description, setValue]);

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
        Thêm mới danh mục
        <div
          style={{ border: '1px solid gray', padding: '15px', width: '1200px' }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="name">Tên danh mục</label>
                  <br />
                  <input
                    className={`${style.inputNameproduct}`}
                    placeholder="Nhập tên danh mục"
                    id="name"
                    {...register('name', {
                      required: 'name is required',
                      minLength: {
                        value: 4,
                        message: 'name must be at least 4 characters',
                      },
                    })}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="description">Mô tả</label>
                  <br />
                  <input
                    className={`${style.inputNameproduct}`}
                    placeholder="Nhập mô tả"
                    id="description"
                    type="text"
                    {...register('description', {
                      required: 'description is required',
                      minLength: {
                        value: 4,
                        message: 'description must be at least 4 characters',
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
                    name="Image"
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
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="slug">Slug</label>
                  <br />
                  <input
                    className={`${style.inputNameproduct}`}
                    id="slug"
                    type="text"
                    readOnly
                    {...register('slug', {
                      required: 'slug is required',
                      minLength: {
                        value: 4,
                        message: 'slug must be at least 4 characters',
                      },
                    })}
                  />
                  {errors.slug && <span>{errors.slug.message}</span>}
                </div>

                <div>
                  <label htmlFor="slug">Danh mục</label>
                  <br />
                  <Controller
                    name="categoryhighlevel"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} style={{ width: 290 }}>
                        {datacatehighlevel.map((person, index) => (
                          <Select.Option key={index} value={person.id}>
                            {person.name}
                          </Select.Option>
                        ))}
                      </Select>
                    )}
                  />
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
