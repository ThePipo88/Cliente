import React, { useState } from 'react';
import { Modal, Button, Input, Form, Alert  } from 'antd';
import { UserOutlined, AuditOutlined, BankOutlined, PhoneOutlined, CommentOutlined} from '@ant-design/icons';
import { message } from 'antd';
import swal from 'sweetalert';



const App = ({mostrar}) => {


  const [visible, setVisible] = useState(false);

  const [nombre, setNombre] = useState('');

  const [descripcion, setDescripcion] = useState('');

  const [telefono, setTelefono] = useState('');

  const [correo, setCorreo] = useState('');

    const onFinish = (values) => {
        if(nombre != '' && descripcion != '' && telefono != '' && correo != ''){
            setVisible(false);
            form.resetFields();
            setTimeout(() => {
                swal({
                    title: "Felicidades",
                    text: "Departamento registrado con exito",
                    icon: "success",
                    button: "Aceptar"
                });
            },200)
        }else{
        
        }
    };

   const [form] = Form.useForm();

  const resetearForm = () => {
    form.resetFields();
    setVisible(false);
  }
  

  return (
    <>
      <button className='button-62' onClick={() => setVisible(true)}>
        Nuevo Departamento
      </button>

      <Modal
        title="Nuevo Departamento"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => resetearForm()}
        footer={null}
        width={400}
      >
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
      onFinish={onFinish}
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
        <Input size="large" placeholder="Nombre del departamento" onChange={(e) => setNombre(e.target.value)} prefix={<BankOutlined />} />
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
        wrapperCol={{
          offset: 18,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
      </Modal>
      
    </>
  );
};

export default App;