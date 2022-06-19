import React, {useState} from "react";
import { Modal, Button, Input, Form, Alert  } from 'antd';
import {ContainerOutlined,AlignCenterOutlined, HomeOutlined} from '@ant-design/icons';
import { message } from 'antd';
import swal from 'sweetalert';

const App = (mostrar) => {

    const [visible, setVisible] = useState(false);

    const [nombre, setNombre] = useState('');

    const [descripcion, setDescripcion] = useState('');

    const [departamentoAsinar, setDepartamentoAginar] = useState('');

    const onFinish = (values) => {
        if(nombre != '' && descripcion != '' && departamentoAsinar != ''){
            setVisible(false);
            form.resetFields();
            setTimeout(() => {
                swal({
                    title: "Felicidades",
                    text: "Tramite agregado con exito",
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

    return(
    <>
        <button className='button-62' onClick={() => setVisible(true)}>
        Nuevo Tramite
        </button>

    <Modal
        title="Nuevo Tramite"
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
        name="tramite"
        rules={[
          {
            required: true,
            message: 'El nombre del tramite es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Nombre del tramite" onChange={(e) => setNombre(e.target.value)} prefix={<ContainerOutlined />} />
      </Form.Item>

      <Form.Item
        name="Descripcion"
        rules={[
          {
            required: true,
            message: 'La descripcion del tramite es requerida',
          },
        ]}
      >
        <Input size="large" placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)} prefix={<AlignCenterOutlined />} />
      </Form.Item>

      <Form.Item
        name="departamentoAsinar"
        rules={[
          {
            required: true,
            message: 'El numero de nombre del departamento a asignar es requerido',
          },
        ]}
      >
        <Input size="large" placeholder="Departamento a asignar" onChange={(e) => setDepartamentoAginar(e.target.value)} prefix={<HomeOutlined />} />
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
}
export default App;