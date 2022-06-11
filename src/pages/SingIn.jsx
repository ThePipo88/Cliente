import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { Layout, Tabs, Checkbox } from "antd";
import fondo from '../assets/fondo.png';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import { FontSizeOutlined } from '@ant-design/icons';


function SingIn() {

	const { Content } = Layout;

    const [body, setBody] = useState({ nickname: '', password: '' })

	const navigate = useNavigate();

	const handleChange = e => {
		setBody({
			...body,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {
		console.log(body);
		navigate("/login");
	}

    return (
		
        <Layout className="root-sing-in">
			<CssBaseline />
			<Content className="sign-in__content">
			<Container component={Paper} elevation={5} maxWidth='xs' className="container_lg">
				<div className={"div_lg"}>
					<Avatar className="avatar_lg">
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>Registro</Typography>
					<form >
                        <div className='div_form'>
                        <TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Nombre Organizacion'
							name='nickname'
							value={body.nickname}
							onChange={handleChange}
                            inputProps = {{style: {fontSize: 14}}}
						/>
                        <div>
                        </div>
						<TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Descripcion'
							name='nickname'
							value={body.nickname}
							onChange={handleChange}
                            inputProps = {{style: {fontSize: 14}}}
						/>
                        </div>
						<div className='div_form'>
                        <TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Tipo organizacion'
							name='nickname'
							value={body.nickname}
							onChange={handleChange}
                            inputProps = {{style: {fontSize: 14}}}
						/>
                        <div>
                        </div>
                        <TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Correo'
							name='nickname'
							value={body.nickname}
							onChange={handleChange}
                            inputProps = {{style: {fontSize: 14}}}
						/>
                        </div>
                        <div className='div_form'>
                        <TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Contraseña'
							name='password'
							value={body.password}
							onChange={handleChange}
                            inputProps = {{style: {fontSize: 14}}}
						/>
                        <div>
                        </div>
						<TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Repetir contraseña'
							name='password'
							value={body.password}
							onChange={handleChange}
                            inputProps = {{style: {fontSize: 14}}}
						/>
                        </div>
                        <div className='nav-text' style={{marginTop: "12px"}}> <Checkbox name="privacyPolicy">
                    He leido y acepto las politica de privacidad
                </Checkbox></div>
                        
						<Button
							fullWidth
							variant='contained'
							color='secondary'
							onClick={() => onSubmit()}
						>
							Registrar organizacion
						</Button>
                        <Link to="/login"> <div className='nav-text'> <span>¿Ya tienes una cuenta? Inisia sesion</span></div>
                </Link>
					</form>
				</div>
			</Container>
			</Content>
		</Layout>
    )
}

export default SingIn;