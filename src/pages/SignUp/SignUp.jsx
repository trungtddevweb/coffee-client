import {
    Box,
    Divider,
    FormControl,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import { loginSuccess } from '@/redux/userSlice'
import { yupResolver } from '@hookform/resolvers/yup'
import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { object, string } from 'yup'
import Image from 'mui-image'
import { ErrorMessage } from '@hookform/error-message'

import logo from '@/assets/images/logo.png'
import loginBg from '@/assets/images/bg-register.jpg'
import TypeErrorMsg from '@/components/common/TypeErrorMsg'
import { LoadingButton } from '@mui/lab'

const SignUp = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const defaultValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
    }
    const userSchema = object({
        name: string()
            .min(1, 'Phải có ít nhất 1 kí tự!')
            .required('Không được để trống!')
            .max(24, 'Chỉ được phép tối đa 24 kí tự!'),
        email: string().email().required('Không được để trống!'),
        password: string()
            .required('Không được để trống')
            .min(6, 'Phải có ít nhất 6 kí tự!')
            .max(24, 'Chỉ được phép tối đa 24 kí tự!'),
    })

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(userSchema),
    })

    const onSubmit = async (data) => {
        console.log(data)
    }

    const onLoginGgSuccess = async (credentialResponse) => {
        try {
            setLoading(true)
            const decode = await jwtDecode(credentialResponse.credential)
            dispatch(loginSuccess(decode))
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box className="h-screen flex items-center justify-center">
            <Paper className="w-10/12 h-[80vh]" elevation={4}>
                <Grid
                    container
                    className="h-full flex items-center justify-center relative overflow-hidden"
                >
                    <Grid item md={7}>
                        <Box className="h-full overflow-hidden">
                            <Image
                                src={loginBg}
                                alt="Background"
                                width="100%"
                                height="80vh"
                            />
                        </Box>
                    </Grid>
                    <Grid item md={5}>
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Coffee sweet"
                                className="w-[120px] absolute top-0 right-0"
                            />
                        </Link>

                        <Box className="flex items-center justify-center">
                            <Box
                                component="form"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Typography
                                    align="center"
                                    variant="h6"
                                    gutterBottom
                                    paddingY={4}
                                    color="primary"
                                >
                                    Đăng kí tài khoản
                                </Typography>
                                <Stack className="items-center" spacing={2}>
                                    <Typography className="w-full">
                                        <TypeErrorMsg message={error} />
                                    </Typography>
                                    <Stack spacing={2} marginBottom={1}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <FormControl>
                                                    <Controller
                                                        control={control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <TextField
                                                                autoFocus
                                                                error={
                                                                    errors.name
                                                                }
                                                                label="Tên"
                                                                type="text"
                                                                {...field}
                                                            />
                                                        )}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="name"
                                                        render={({
                                                            message,
                                                        }) => (
                                                            <TypeErrorMsg
                                                                message={
                                                                    message
                                                                }
                                                            />
                                                        )}
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <FormControl>
                                                    <Controller
                                                        control={control}
                                                        name="phone"
                                                        render={({ field }) => (
                                                            <TextField
                                                                required
                                                                type="number"
                                                                autoComplete="tel"
                                                                error={
                                                                    errors.name
                                                                }
                                                                label="Số điện thoại"
                                                                {...field}
                                                            />
                                                        )}
                                                    />
                                                    <ErrorMessage
                                                        errors={errors}
                                                        name="phone"
                                                        render={({
                                                            message,
                                                        }) => (
                                                            <TypeErrorMsg
                                                                message={
                                                                    message
                                                                }
                                                            />
                                                        )}
                                                    />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <FormControl>
                                            <Controller
                                                control={control}
                                                name="email"
                                                render={({ field }) => (
                                                    <TextField
                                                        error={errors.email}
                                                        label="Email"
                                                        type="email"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="email"
                                                render={({ message }) => (
                                                    <TypeErrorMsg
                                                        message={message}
                                                    />
                                                )}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <Controller
                                                control={control}
                                                name="password"
                                                render={({ field }) => (
                                                    <TextField
                                                        error={errors.password}
                                                        label="Mật khẩu"
                                                        type="password"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="password"
                                                render={({ message }) => (
                                                    <TypeErrorMsg
                                                        message={message}
                                                    />
                                                )}
                                            />
                                        </FormControl>
                                    </Stack>
                                    <LoadingButton
                                        loading={loading}
                                        fullWidth
                                        variant="contained"
                                        type="submit"
                                    >
                                        Tạo tài khoản
                                    </LoadingButton>
                                    <Divider variant="fullWidth">hoặc</Divider>
                                </Stack>
                                <Stack alignItems="center" marginTop={2}>
                                    <GoogleLogin
                                        useOneTap
                                        onSuccess={onLoginGgSuccess}
                                        onError={() => {
                                            console.log('Login Failed')
                                        }}
                                    />
                                </Stack>
                                <Typography
                                    align="center"
                                    variant="subtitle2"
                                    component="div"
                                    marginTop={10}
                                >
                                    Đã có tài khoản!
                                    <Link to="/sign-in">
                                        <Typography
                                            variant="subtitle2"
                                            component="span"
                                            marginLeft={1}
                                            color="primary"
                                            className="hover:underline hover:text-cyan-900"
                                        >
                                            Đăng nhập ngay
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}

export default SignUp
