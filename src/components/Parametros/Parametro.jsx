import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { useLocation } from 'react-router-dom';
import Navbar from "../Dashboard/Navbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import ScrollBars  from 'react-custom-scrollbars';
import { Alert, Form, Input, Button, Select, DatePicker } from 'antd';
import { UserOutlined, AuditOutlined, SettingOutlined,SolutionOutlined, PictureOutlined, AlignCenterOutlined,GoogleOutlined,CaretDownOutlined,LockOutlined} from '@ant-design/icons';
import { useState } from "react";
import swal from 'sweetalert';

const { Option } = Select;

function Parametro(props){


    const { nameChange } = props;

    const mostrarSms = (newName)=>{
        nameChange(newName);
    };
  
  const [showAlert, setShowAlert] = useState(false);
  

  const [visible, setVisible] = useState(true);

  const [logoP, setLogoP] = useState('');

  const [nombreO, setNombreO] = useState('');

  const [descripcion, setDescripcion] = useState('');

  const [correo, setCorreo] = useState('');

  const [tipo, setTipo] = useState('');

  const onChangeJefe = (value) => {
    console.log(`selected ${value}`);
  };
  
  const onSearch = (value) => {
    console.log('search:', value);
  };

    const actualizarParametro = (values) => {
    setTimeout(() => {
        swal({
            title: "Felicidades",
            text: "Infromacion de parametros actualizada",
            icon: "success",
            button: "Aceptar"
        });
    },200)

    };

    const [form] = Form.useForm();

    const registrarUsuarioAdministrador = (values) => {
    setTimeout(() => {
        swal({
            title: "Felicidades",
            text: "Infromacion de Usuario Administrador actualizada",
            icon: "success",
            button: "Aceptar"
        });
    },200)
    };

    const [nombreU, setNombreUsu] = useState('');

    const [rol, setRol] = useState('');
  
    const [contrasena, setContrasena] = useState('');

    const [form2] = Form.useForm();

    const resetearForm = () => {
      form.resetFields();
      setVisible(false);
    }
  
    const handleNameChange = (newName)=>{
    setShowAlert(newName);
     };

    return(
        <div className="metrics">
      <div className="grid-edit">
      <div className="top__edit">
        <div className="container_edit">
          <h3>Organizacion</h3>
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
      onFinish={actualizarParametro}
      autoComplete="off"
    >
      <Form.Item
        name="logoP"
        rules={[
          {
            required: true,
            message: 'El logo de la organizacion es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Logo" onChange={(e) => setLogoP(e.target.value)} prefix={<PictureOutlined />} />
      </Form.Item>

      <Form.Item
        name="nombreO"
        rules={[
          {
            required: true,
            message: 'El nombre de la organizacion es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Nombre Organizacion" onChange={(e) => setNombreO(e.target.value)} prefix={<AuditOutlined />} />
      </Form.Item>

      <Form.Item
        name="descripcion"
        rules={[
          {
            required: true,
            message: 'La descripcion es requerida',
          },
        ]}
      >
        <Input size="large" placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)} prefix={<AlignCenterOutlined />} />
      </Form.Item>

      <Form.Item
        name="Correo"
        rules={[
          {
            required: true,
            message: 'El correo electronico es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Correo electronico" onChange={(e) => setCorreo(e.target.value)} prefix={<GoogleOutlined />} />
      </Form.Item>

      <Form.Item
        name="tipo"
        rules={[
          {
            required: true,
            message: 'El tipo es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Tipo" onChange={(e) => setTipo(e.target.value)} prefix={<CaretDownOutlined />} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 10,
        }}
      >
        <button type="primary" className="button-62">
          Actualizar Organizacion
        </button>
      </Form.Item>
    </Form>
        </div>
       </div>
       <div className="top__edit">
       <h3>Usuario Administrador</h3>
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
      onFinish={registrarUsuarioAdministrador}
      autoComplete="off"
    >
      <Form.Item
        name="nombreU"
        rules={[
          {
            required: true,
            message: 'El nombre del usuario administrador es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Nombre del administrador" onChange={(e) => setNombreUsu(e.target.value)} prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        name="rol"
        rules={[
          {
            required: true,
            message: 'El rol es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Rol" onChange={(e) => setRol(e.target.value)} prefix={<SettingOutlined />} />
      </Form.Item>

      <Form.Item
        name="contrasena"
      >
        <Input size="large" placeholder="Contrasena" onChange={(e) => setContrasena(e.target.value)} prefix={<LockOutlined />} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 10,
        }}
      >
        <button type="primary" className="button-63" >
          Registrar Usuario Administrador
        </button>
      </Form.Item>
    </Form>
    </div>
    </div>
    </div>
    );
}
export default Parametro;