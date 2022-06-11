import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { Layout, Tabs } from "antd";
import fondo from '../assets/fondo.png';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'


function Login() {

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
		navigate("/admin");
	}

    return (
		
        <Layout className="root">
			<CssBaseline />
			<Content className="log-in__content">
			<Container component={Paper} elevation={5} maxWidth='xs' className="container_lg">
				<div className={"div_lg"}>
					<Avatar className="avatar_lg">
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>Iniciar Sesion</Typography>
					<form >
						<TextField
							fullWidth
							autoFocus
							color='primary'
							margin='normal'
							variant='outlined'
							label='Usuario'
							name='nickname'
							value={body.nickname}
							onChange={handleChange}
						/>
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
						/>
						
						<Button
							fullWidth
							variant='contained'
							color='secondary'
							onClick={() => onSubmit()}
						>
							Inisiar Sesion
						</Button>
						<Link to="/singIn"> <div className='nav-text'> <span>¿No tienes cuenta? Create una ahora!</span></div>
                </Link>
					</form>
				</div>
			</Container>
			</Content>
		</Layout>
    )
}

export default Login;