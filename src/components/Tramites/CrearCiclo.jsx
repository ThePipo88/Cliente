import React, {useState, useEffect} from "react";
import { Modal, Button, Input, Form, Alert, Select  } from 'antd';
import { useLocation } from 'react-router-dom';
import {ContainerOutlined,AlignCenterOutlined, HomeOutlined} from '@ant-design/icons';
import { message } from 'antd';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import axios from "axios";
import Cookies from "universal-cookie";

const { Option } = Select;

const App = (mostrar) => {

    const location = useLocation();

    const [visible, setVisible] = useState(false);

    const [departamentoC, setDepartamentoC] = useState('');

    const [estadoC, setEstadoC] = useState('');

    const [numCiclo, setNumCiclo] = useState('');

    const data = location.state;

    const [form] = Form.useForm();

    const resetearForm = () => {
        form.resetFields();
        setVisible(false);
    }


    const onChangeCiclo = (value) => {
      //setDepartamentoAginar(value);
    };
  
    const onSearch = (value) => {
      console.log('search:', value);
    };

    const onFinish = (values) => {

    }

    return(
        <>
                <button className='button-62' onClick={() => setVisible(true)}>
                Crear Ciclo
                </button>

            <Modal
                title="Crear Nuevo Ciclo"
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
            name="numCiclo"
            >
            <Select
                showSearch
                placeholder="Interacion del Ciclo"
                optionFilterProp="children"
                onChange={onChangeCiclo}
                onSearch={onSearch}
                prefix={<HomeOutlined />}
            >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
  
            </Select>
            </Form.Item>
            <Form.Item
                name="departamentoC"
                rules={[
                {
                    required: true,
                    message: 'El Nombre del departamento a cual va asignado el Ciclo es Requerido',
                },
                ]}
            >
                <Input size="large" placeholder="Nombre del Departamento del Ciclo" /*onChange={(e) => setDepartamentoC(e.target.value)}*/ prefix={<ContainerOutlined />} />
            </Form.Item>

            <Form.Item
                name="estadoC"
                rules={[
                {
                    required: true,
                    message: 'El estado del Ciclo es requerido',
                },
                ]}
            >
                <Input size="large" placeholder="Estado del Ciclo" /*onChange={(e) => setEstadoC(e.target.value)}*/ prefix={<AlignCenterOutlined />} />
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