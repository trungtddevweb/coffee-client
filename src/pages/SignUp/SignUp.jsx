import {
    Box,
    Button,
    Divider,
    FormControl,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
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

const SignUp = () => {
    const dispatch = useDispatch()
    const defaultValues = {
        name: '',
        email: '',
        password: '',
    }
    const userSchema = object({
        name: string()
            .min(1, 'Tên phải chứa ít nhất 1 kí tự!')
            .max(24, 'Tên chỉ được phép tối đa 24 kí tự!'),
        email: string().email().required('Email không được để trống!'),
        password: string()
            .required('Mật khẩu không được để trống')
            .min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự!')
            .max(24, 'Mật khẩu chỉ được phép tối đa 24 kí tự!'),
    })

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty },
    } = useForm({
        defaultValues,
        resolver: yupResolver(userSchema),
    })

    const onSubmit = async (data) => {
        console.log(data)
    }

    const onLoginGgSuccess = (credentialResponse) => {
        const decode = jwtDecode(credentialResponse.credential)
        dispatch(loginSuccess(decode))
    }

    return (
        <Box className="h-screen bg-blue-100 flex items-center justify-center">
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
                                    <Stack spacing={3} marginBottom={1}>
                                        <FormControl>
                                            <Controller
                                                control={control}
                                                name="name"
                                                render={({ field }) => (
                                                    <TextField
                                                        autoFocus
                                                        error={errors.name}
                                                        label="Tên"
                                                        className="w-[400px] "
                                                        type="text"
                                                        {...field}
                                                    />
                                                )}
                                            />
                                            <ErrorMessage
                                                errors={errors}
                                                name="name"
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
                                                name="email"
                                                render={({ field }) => (
                                                    <TextField
                                                        autoFocus
                                                        error={errors.email}
                                                        label="Email"
                                                        className="w-[400px] "
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
                                                        autoFocus
                                                        error={errors.pass}
                                                        label="Mật khẩu"
                                                        className="w-[400px] "
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
                                    <Button
                                        className="w-[400px]"
                                        variant="contained"
                                        type="submit"
                                        disabled={!isDirty}
                                    >
                                        Tạo tài khoản
                                    </Button>
                                    <Divider className="w-[400px]">
                                        hoặc
                                    </Divider>
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
                                            color="blue"
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
