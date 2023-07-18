import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    Paper,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Controller, useForm } from 'react-hook-form'
import { object, string } from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Image from 'mui-image'
import { GoogleLogin } from '@react-oauth/google'
import { yupResolver } from '@hookform/resolvers/yup'
import { Fragment, useState } from 'react'

import logo from '@/assets/images/logo.png'
import loginBg from '@/assets/images/bg-login.jpg'
import { loginSuccess } from '@/redux/userSlice'
import TypeErrorMsg from '@/components/common/TypeErrorMsg'
import { ErrorMessage } from '@hookform/error-message'
import { signInAPI, signInWithGoogleAPI } from '@/api/main'
import Seo from '@/components/feature/Seo'

const SignIn = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const navigate = useNavigate()
    const defaultValues = {
        email: '',
        password: '',
    }
    const userSchema = object({
        email: string()
            .email('Phải có dạng example@abc.xyz')
            .required('Không được để trống'),
        password: string().min(6, 'Phải có ít nhất 6 kí tự'),
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
        try {
            setLoading(true)
            const response = await signInAPI(data)
            dispatch(loginSuccess(response))
            navigate(-1)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setLoading(false)
        }
    }

    const onLoginGgSuccess = async (credentialResponse) => {
        try {
            setLoading(true)
            const decode = await signInWithGoogleAPI(
                credentialResponse.credential
            )
            dispatch(loginSuccess(decode))
            navigate(-1)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Fragment>
            <Seo
                title="Coffee Sweet | Đăng nhập "
                description="Đăng nhập vào Sweet Coffee https://facebook.com/trung02032001"
                type="webapp"
                name="Coffee Sweet"
            />
            <Box className="h-screen flex items-center justify-center sm:px-2">
                <Paper
                    sx={{
                        width: {
                            xs: '100%',
                            md: '80%',
                        },
                        height: {
                            xs: '100%',
                            sm: '80vh',
                        },
                    }}
                    elevation={4}
                >
                    <Box className="h-full relative overflow-hidden">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Coffee sweet"
                                className="lg:w-[120px] w-[80px]  absolute top-0 left-0"
                            />
                        </Link>

                        <Box
                            sx={{
                                display: isMatch ? 'block' : 'flex',
                            }}
                        >
                            <Box
                                component="form"
                                sx={{
                                    marginTop: isMatch ? '22%' : '8%',
                                    flex: 1,
                                    padding: isMatch ? '10px' : '32px',
                                }}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Typography
                                    align="center"
                                    variant="h6"
                                    gutterBottom
                                    paddingY={2}
                                    color="primary"
                                >
                                    Chào mừng trở lại!
                                </Typography>
                                <Stack spacing={2}>
                                    <Stack spacing={2}>
                                        <TypeErrorMsg message={error} />
                                        <FormControl>
                                            <Controller
                                                control={control}
                                                name="email"
                                                render={({ field }) => (
                                                    <TextField
                                                        error={errors.email}
                                                        label="Email"
                                                        fullWidth
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
                                        className="justify-between items-center"
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
                                            color="primary"
                                        >
                                            Quên mật khẩu
                                        </Typography>
                                    </Stack>
                                    <LoadingButton
                                        loading={loading}
                                        variant="contained"
                                        type="submit"
                                    >
                                        Đăng nhâp
                                    </LoadingButton>
                                    <Divider>hoặc</Divider>
                                </Stack>
                                <Stack alignItems="center" marginTop={2}>
                                    <GoogleLogin
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
                                    marginTop={3}
                                >
                                    Chưa có tài khoản!
                                    <Link to="/sign-up">
                                        <Typography
                                            variant="subtitle2"
                                            component="span"
                                            marginLeft={1}
                                            color="primary"
                                            className="hover:underline hover:text-cyan-900"
                                        >
                                            Tạo mới ngay!
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Box>
                            {!isMatch && (
                                <Box flex={2}>
                                    <Image
                                        src={loginBg}
                                        alt="Background"
                                        width="100%"
                                        height="80vh"
                                    />
                                </Box>
                            )}
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Fragment>
    )
}

export default SignIn
