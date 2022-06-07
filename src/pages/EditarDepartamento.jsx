import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import ScrollBars  from 'react-custom-scrollbars';
import { Alert, Form, Input, Button, Select, DatePicker } from 'antd';
import { UserOutlined, AuditOutlined, BankOutlined, PhoneOutlined, CommentOutlined, SolutionOutlined} from '@ant-design/icons';
import { useState } from "react";
import swal from 'sweetalert';
import TablaEmpleados from "../components/Departamentos/TablaEmpleados";

const { Option } = Select;

function EditarDepartamento(props) {

  const location = useLocation();
  const data = location.state;
  console.log(data.myData.name);

const [showAlert, setShowAlert] = useState(false);

const nombre = "Departamentos > "+ data.myData.name;

//Variables para actualizar departamento

const [visible, setVisible] = useState(false);

  const [nombreD, setNombreDep] = useState('');

  const [descripcion, setDescripcion] = useState('');

  const [telefono, setTelefono] = useState('');

  const [correo, setCorreo] = useState('');

  const onChangeJefe = (value) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value) => {
    console.log('search:', value);
  };

    const actualizarDepartamento = (values) => {
            setTimeout(() => {
                swal({
                    title: "Felicidades",
                    text: "Infromacion de departamento actualizada",
                    icon: "success",
                    button: "Aceptar"
                });
            },200)

    };

   const [form] = Form.useForm();

   //Variables para agregar empleados
   const registrarUsuario = (values) => {
    setTimeout(() => {
        swal({
            title: "Felicidades",
            text: "Infromacion de departamento actualizada",
            icon: "success",
            button: "Aceptar"
        });
    },200)
  };

  const [nombreE, setNombreEmp] = useState('');

  const [primerAp, setPrimerAp] = useState('');

  const [segundoAp, setSegundoAp] = useState('');

  const [fechaNac, setFechaNac] = useState('');

  const onChangeEmpleado = (value) => {
    console.log(`selected ${value}`);
  };

   const [form2] = Form.useForm();

  const resetearForm = () => {
    form.resetFields();
    setVisible(false);
  }

const handleNameChange = (newName)=>{
  setShowAlert(newName);
};

  return (
      <div className="metrics">
      <Navbar name = {nombre}/>
      <div className="grid-edit">
      <div className="top__edit">
        <div className="container_edit">
          <h3>Informacion del departamento</h3>
          <Form
      form={form}
      name="basic"
      labelCol={{
        span: 16,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={actualizarDepartamento}
      autoComplete="off"
    >
      <Form.Item
        name="departamento"
        rules={[
          {
            required: true,
            message: 'El nombre del departamento es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Nombre del departamento" onChange={(e) => setNombreDep(e.target.value)} prefix={<BankOutlined />} />
      </Form.Item>

      <Form.Item
        name="Descripcion"
        rules={[
          {
            required: true,
            message: 'La descripcion del departamento es requerida',
          },
        ]}
      >
        <Input size="large" placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)} prefix={<AuditOutlined />} />
      </Form.Item>

      <Form.Item
        name="telefono"
        rules={[
          {
            required: true,
            message: 'El numero de telefono es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)} prefix={<PhoneOutlined />} />
      </Form.Item>

      <Form.Item
        name="correoElectronico"
        rules={[
          {
            required: true,
            message: 'El correo electronico es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Correo electronico" onChange={(e) => setCorreo(e.target.value)} prefix={<CommentOutlined />} />
      </Form.Item>

      <Form.Item
      name="jefeDepartamento"
    >
       <Select
        showSearch
        placeholder="Jefe del departamento"
        optionFilterProp="children"
        onChange={onChangeJefe}
        onSearch={onSearch}
        prefix={<CommentOutlined />}
        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 10,
        }}
      >
        <button type="primary" className="button-62">
          Actualizar
        </button>
      </Form.Item>
    </Form>
        </div>
       </div>
       <div className="top__edit">
       <h3>Agregar empleado</h3>
       <Form
      form={form2}
      name="basic"
      labelCol={{
        span: 16,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={registrarUsuario}
      autoComplete="off"
    >
      <Form.Item
        name="empleado"
        rules={[
          {
            required: true,
            message: 'El nombre del empleado es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Nombre del empleado" onChange={(e) => setNombreEmp(e.target.value)} prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        name="Primerapellido"
        rules={[
          {
            required: true,
            message: 'El primer apellido es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Primer apellido" onChange={(e) => setPrimerAp(e.target.value)} prefix={<AuditOutlined />} />
      </Form.Item>

      <Form.Item
        name="SegundoApellido"
      >
        <Input size="large" placeholder="Segundo apellido" onChange={(e) => setSegundoAp(e.target.value)} prefix={<SolutionOutlined />} />
      </Form.Item>

      <Form.Item
        name="fechaNacimiento"
        rules={[
          {
            required: true,
            message: 'La fecha de nacimiento es requerida',
          },
        ]}
      >
        <DatePicker onChange={onChangeJefe} placeholder="Fecha de nacimiento" style={{ width: '100%' }}  />
      </Form.Item>

      <Form.Item
      name="tipoEmpleado"
      rules={[
        {
          required: true,
          message: 'El tipo de empleado es requerido',
        },
      ]}
    >
       <Select
        showSearch
        placeholder="Tipo de empleado"
        optionFilterProp="children"
        onChange={onChangeEmpleado}
        onSearch={onSearch}
        prefix={<CommentOutlined />}
        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
      >
        <Option value="Ingeniero">Ingeniero</Option>
        <Option value="Administrador">Administrador</Option>
        <Option value="Contador">Contador</Option>
      </Select>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 10,
        }}
      >
        <button type="primary" className="button-63">
          Registrar empleado
        </button>
      </Form.Item>
    </Form>
       </div>
      </div>
      <div className="grid-users">
      <div className="bootom__users">
       <h3>Empleados del departamento</h3>
       <ResponsiveContainer width="100%" height="100%">
         <div className="container_table">
         <TablaEmpleados/>
         </div>
      </ResponsiveContainer>
       </div>
      </div>
    </div>
  );
}

export default EditarDepartamento;