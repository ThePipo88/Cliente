import React, { useRef, useState } from 'react';
import { Table, Input, Button, Space } from 'antd';
import {Highlighter} from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import {useNavigate } from 'react-router-dom';
import 'antd/dist/antd.min.css';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const navigate = useNavigate();

  const myData = {
    name: 'Tramites'
  }

  const editarTramite = () => {
    navigate("/admin/tramites/editartramites", {state:{myData}});
  }

  const data = [
    {
      key: '1',
      tramite: 'Contratacion Laboral',
      descripcion:'Se requiere programador junior',
      departamento:'Recursos Humanos',
      editarTramite: <button className='button-37' onClick={() => editarTramite()} ></button>,
    },
    {
      key: '2',
      tramite: 'Concurso Limpieza',
      descripcion:'Se requiere limpiar el lote de la oficina',
      departamento:'Recursos Humanos',
      editarTramite: <button className='button-37'></button>,
    }
  ];

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Tramite',
      dataIndex: 'tramite',
      key: 'tramite',
      width: '30%',
      ...getColumnSearchProps('tramite'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
      width: '40%',
    },
    {
      title: 'Departamento',
      dataIndex: 'departamento',
      key: 'departamento',
      width: '20%',
    },
    {
      title: 'Editar Tramite',
      dataIndex: 'editarTramite',
      key: 'editarTramite',
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default App;