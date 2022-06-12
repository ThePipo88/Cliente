import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Dashboard/Navbar";
import 'react-perfect-scrollbar/dist/css/styles.css';
import ScrollBars  from 'react-custom-scrollbars';
import { Alert, Form, Input, Button, Select, DatePicker } from 'antd';
import { UserOutlined, AuditOutlined, BankOutlined, PhoneOutlined, CommentOutlined, SolutionOutlined} from '@ant-design/icons';
import { useState } from "react";
import swal from 'sweetalert';
import TablaDocumentos from "../components/Tramites/TablaDocumentos";
import TablaCiclos from "../components/Tramites/TablaCiclos";

const { Option } = Select;

function EditarTramite(props){
    const location = useLocation();
    const data = location.state;
    console.log(data.myData.name);

    const [showAlert, setShowAlert] = useState(false);
    const nombre = "Tramites > "+ data.myData.name;

    //Variables para actualizar Tramite
    const [visible, setVisible] = useState(false);

    const [nombreT, setNombreTra] = useState('');

    const [descripcion, setDescripcion] = useState('');

    const [departamnetoAsig, setDepartamentoAsig] = useState('');

    const onChangeJefe = (value) => {
        console.log(`selected ${value}`);
    };
      
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const actualizarTramite = (values) => {
        setTimeout(() => {
            swal({
                title: "Felicidades",
                text: "Infromacion de tramite actualizada",
                icon: "success",
                button: "Aceptar"
            });
        },200)

    };

    const [form] = Form.useForm();

    const resetearForm = () => {
        form.resetFields();
        setVisible(false);
    }

    const handleNameChange = (newName)=>{
        setShowAlert(newName);
    };

    return(
        <div className="metrics">
            <Navbar name = {nombre}/>
            <div className="grid-edit">
                <div className="top__edit">
                    <div className="container_edit">
                        <h3>Informacion del Tramite</h3>
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
                            onFinish={actualizarTramite}
                            autoComplete="off"
                        >
                        <Form.Item
                            name="Tramite"
                            rules={[
                            {
                                required: true,
                                message: 'El nombre del tramite es requerido',
                            },
                            ]}
                        >
                            <Input size="large" placeholder="Nombre del tramite" onChange={(e) => setNombreTra(e.target.value)} prefix={<BankOutlined />} />
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
                            <Input size="large" placeholder="Descripcion" onChange={(e) => setDescripcion(e.target.value)} prefix={<AuditOutlined />} />
                        </Form.Item>

                        <Form.Item
                            name="DepartamnetoAsig"
                            rules={[
                            {
                                required: true,
                                message: 'El Departamento asignado es requerido',
                            },
                            ]}
                        >
                            <Input size="large" placeholder="Departamento a Asignar" onChange={(e) => setDepartamentoAsig(e.target.value)} prefix={<PhoneOutlined />} />
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
            </div>
            <div className="grid-users">
                <div className="bootom__users">
                <h3>Docuemtos Requeridos</h3>
                <ResponsiveContainer width="100%" height="100%">
                <div className="container_table">
                    <TablaDocumentos/>
                </div>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="grid-users">
                <div className="bootom__users">
                <h3>Ciclo</h3>
                <ResponsiveContainer width="100%" height="100%">
                <div className="container_table">
                    <TablaCiclos/>
                </div>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );

}

export default EditarTramite;