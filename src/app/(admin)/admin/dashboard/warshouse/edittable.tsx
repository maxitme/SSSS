'use client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { GetRef } from 'antd';
import { Checkbox, Form, Input, Select, Table } from 'antd';
import { getDataWarshouse, getDataWarshouseAndDetails } from './test';

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
  check: any;
  image: any;
  name: string;
  cansell: number;
  inventory: number;
  importprice: number;
  wholesaleprices: number;
  price: number;
  count: number;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const WarshouseTable: React.FC = () => {
  const [dataidwarshouse, setDataIdWarshouse] = useState([]);
  const [datawarshouse, setDataWarshouse] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [valueid, setValueId] = useState();

  const onChanges = (key: number) => e => {
    // console.log(`checked = ${e.target.checked}`);
    console.log(
      `row data =`,
      datawarshouse.find(item => item.id === key)
    );
  };
  const handleChange = async (value: string) => {
    // console.log(value);
    // setValueId(value);
    try{
      const a = await getDataWarshouseAndDetails(Number(value));
      setDataWarshouse(a.warehouseDetail);
      //  console.log(datawarshouse,'s');
    }catch(error){
      console.log(error);
    } 
  };

  const getdata = async () => {
    const s = await getDataWarshouse();
    setDataIdWarshouse(s.warehouses);
  };
  useEffect(() => {
    getdata();
    const newData = datawarshouse.map(i => ({
      key: i.id,
      image: (
        <img src="https://bizweb.dktcdn.net/thumb/thumb/100/436/707/products/dsc05181.jpg?v=1711632455943"></img>
      ),
      check: <Checkbox onChange={onChanges(i.id)}></Checkbox>,
      name: i.product.name,
      cansell: i.quantity,
      inventory: i.quantity,
      price: i.product.price,
      importprice: 0,
      wholesaleprices: 0,
    }));
    setTableData(newData);
  }, [datawarshouse]);

  // const handleAddClick = (id: number) => {
  //   const product = dataproduct.find(item => item.id === id);
  //   if (product) {
  //     console.log(`Add for product id ${id} with input count ${product.inputCount}`);
  //     // Xử lý thêm số lượng tại đây
  //   }
  // };

  // const handleInputChange = (id: number, value: number) => {
  //   const newData = [...dataproduct];
  //   const index = newData.findIndex(item => item.id === id);
  //   if (index > -1) {
  //     const item = newData[index];
  //     newData.splice(index, 1, { ...item, inputCount: value });
  //     setDataProduct(newData);
  //   }
  // };

  const defaultColumns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: string;
  })[] = [
    {
      title: 'check',
      dataIndex: 'check',
      width:80
    },
    {
      title: 'image',
      dataIndex: 'image',
      width:80
    },
    {
      title: 'name',
      dataIndex: 'name',
      width:300
    },
    {
      title: 'cansell',
      dataIndex: 'cansell',
    },
    {
      title: 'inventory',
      dataIndex: 'inventory',
    },
    {
      title: 'price',
      dataIndex: 'price',
    },
    {
      title: 'importprice',
      dataIndex: 'importprice',
    },
    {
      title: 'wholesaleprices',
      dataIndex: 'wholesaleprices',
    },
    // {
    //   title: 'update count',
    //   dataIndex: 'update count',
    //   render: (text: any, record: DataType) =>
    //     dataproduct.length >= 1 ? (
    //       <div>
    //         <input  defaultValue={record.count}
    //           onChange={e => handleInputChange(record.key, parseInt(e.target.value))}/>
    //         <button onClick={() => handleAddClick(record.key)}>add</button>
    //         <button>order</button>
    //       </div>
    //     ) : null,
    // },
  ];

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
        // handleSave,
      }),
    };
  });

  return (
    <div>
      <div>
        <span>Kho hàng: </span>
        <Select
          style={{ width: 200 }}
          defaultValue={'Hương Vân Cát'}
          onChange={handleChange}
        >
          {dataidwarshouse.map((warehouse, index) => (
            <Select.Option key={index} value={warehouse.id}>
              {warehouse.name}
            </Select.Option>
          ))}
        </Select>
      </div>

      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        scroll={{x: 1000,y:500}}
        dataSource={tableData}
        columns={columns as ColumnTypes}
        style={{border:'1px solid #C4CDD5' ,marginTop:10}}
      />
    </div>
  );
};

export default WarshouseTable;
