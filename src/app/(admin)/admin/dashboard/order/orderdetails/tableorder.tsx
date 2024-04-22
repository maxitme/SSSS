'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { GetRef } from 'antd';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { postDataProductOrderDetails } from './test';

type InputRef = GetRef<typeof Input>;
type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();

      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
  key: React.Key;
  stt: number;
  image: any;
  name: string;
  price: number;
  unit: string;
  orderquantity: number;
  discount: number;
  intomoney: number;
  updatedAt: Date;
  action : string,
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const TableOrderDetails: React.FC = (props: any) => {
  const { dataIdProduct, warehouse,users } = props;
  const [count, setCount] = useState(1);
  const [dataSource, setDataSource] = useState<DataType[]>([]);

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter(item => item.key !== key);
    setDataSource(newData);
    setCount(1);
  };

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    {
      title: 'stt',
      dataIndex: 'stt',
    },
    {
      title: 'image',
      dataIndex: 'image',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'price',
      dataIndex: 'price',
      editable: true,
    },
    {
      title: 'unit',
      dataIndex: 'unit',
      editable: true,
    },
    {
      title: 'orderquantity',
      dataIndex: 'orderquantity',
      editable: true,
    },
    {
      title: 'discount',
      dataIndex: 'discount',
      editable: true,
    },
    {
      title: 'intomoney',
      dataIndex: 'intomoney',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleAdd = () => {
    if (dataIdProduct === '') {
      setDataSource([]);
    } else {
      const newData: DataType = {
        key: dataIdProduct.id,
        stt: count,
        image: (
          <img
            width={50}
            src="https://sapo.dktcdn.net/100/497/742/variants/dsc05163-1711632258557.jpg"
          ></img>
        ),
        name: dataIdProduct.name,
        price: dataIdProduct.price,
        unit: 'chiec',
        orderquantity: 0,
        discount: 0,
        intomoney: 0,
        updatedAt: null,
        userId :users,
        warehouseId: warehouse,
        action: 'IN'
      };
      setDataSource([...dataSource, newData]);
      setCount(count + 1);
    }
  };

  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const handleClickGet = () => {
    const data = dataSource.map(i => {
      const imageSrc = i.image.props.src;
      return {
          ...i,
          image: imageSrc,
        };
    });
    console.log(data,'create');
    postDataProductOrderDetails(data).then(res => res);
  };

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Thêm sản phẩm
      </Button>
      <Button
        onClick={handleClickGet}
        type="primary"
        style={{ marginBottom: 16, marginLeft: 10 }}
      >
        Tạo
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        scroll={{ y: 500 }}
        dataSource={dataSource}
        columns={columns as ColumnTypes}
      />
    </div>
  );
};

export default TableOrderDetails;
