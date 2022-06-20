import React, {useState} from "react";
import { Modal, Button, Input, Form, Alert  } from 'antd';
import {ContainerOutlined,AlignCenterOutlined, HomeOutlined} from '@ant-design/icons';
import { message } from 'antd';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import axios from "axios";

const App = (mostrar) => {

    const [visible, setVisible] = useState(false);

    const [nombre, setNombre] = useState('');

    const [descripcion, setDescripcion] = useState('');

    const [departamentoAsinar, setDepartamentoAginar] = useState('');

    const onFinish = (values) => {
      if(nombre != '' && descripcion != '' && departamentoAsinar != ''){


        const user = {
          tipo_tra: nombre,
          departamento_id: departamentoAsinar,
          descripcion_tra: descripcion,
        }
    
        axios.post('http://localhost:3977/api/v1/tramites/registrartramites',user)
                .then(({data}) => {


          setVisible(false);
          form.resetFields();
              swal({
                  title: "Felicidades",
                  text: "Tramite registrado con exito",
                  icon: "success",
                  button: "Aceptar",
              }).then((result) => {
                window.location.reload();
              })
              
                }).catch(({response}) => {
    
            if(response.status == "500"){
              Swal.fire({
                title: 'Tramite ya existentes',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar'
                }).then((result) => {
                
                })
            }else if(response.status == "500"){
              Swal.fire({
                title: 'Se produjo un error',
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aceptar'
                }).then((result) => {
                
                })
            }
          })
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