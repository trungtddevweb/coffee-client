import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Image from 'mui-image'
import jwtDecode from 'jwt-decode'
import { GoogleLogin } from '@react-oauth/google'
import { yupResolver } from '@hookform/resolvers/yup'

import logo from '@/assets/images/logo.png'
import loginBg from '@/assets/images/bg-login.jpg'
import { loginSuccess } from '@/redux/userSlice'
import TypeErrorMsg from '@/components/common/TypeErrorMsg'
import { ErrorMessage } from '@hookform/error-message'

const SignIn = () => {
    const dispatch = useDispatch()
    const defaultValues = {
        email: '',
        password: '',
    }
    const userSchema = object({
        email: string()
            .email('Email phải có dạng example@abc.xyz')
            .required('Email không được để trống'),
        password: string().min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự'),
    })

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty },
    } = useForm({
        defaultValues,
        resolver: yupResolver(userSchema),
    })

    const onSubmit = (data) => {
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
                    <Grid item md={5}>
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Coffee sweet"
                                className="w-[120px] absolute top-0 left-0"
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
                                    Chào mừng trở lại!
                                </Typography>
                                <Stack className="items-center" spacing={2}>
                                    <Stack spacing={3}>
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
                                                        autoComplete="email"
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
                                                        label="Mật khẩu"
                                                        error={errors.password}
                                                        className="w-[400px]"
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
                                    <Stack
                                        direction="row"
                                        className="justify-between items-center w-[400px]"
                                    >
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox value="remember" />
                                                }
                                                label="Ghi nhớ đăng nhập"
                                            />
                                        </FormGroup>
                                        <Typography
                                            variant="subtitle2"
                                            color="blue"
                                        >
                                            Quên mật khẩu
                                        </Typography>
                                    </Stack>
                                    <Button
                                        className="w-[400px]"
                                        variant="contained"
                                        type="submit"
                                        disabled={!isDirty}
                                    >
                                        Đăng nhập
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
                                    Chưa có tài khoản!
                                    <Link to="/sign-up">
                                        <Typography
                                            variant="subtitle2"
                                            component="span"
                                            marginLeft={1}
                                            color="blue"
                                        >
                                            Tạo mới ngay!
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
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
                </Grid>
            </Paper>
        </Box>
    )
}

export default SignIn
