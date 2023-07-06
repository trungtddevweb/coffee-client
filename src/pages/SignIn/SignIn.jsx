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
// import { LoginSocialFacebook } from 'reactjs-social-login'
// import { FacebookLoginButton } from 'react-social-login-buttons'
import { Controller, useForm } from 'react-hook-form'

import logo from '@/assets/images/logo.png'
import loginBg from '@/assets/images/bg-login.jpg'
import Image from 'mui-image'
import { GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '@/redux/userSlice'
// import { appID } from '@/utils/const'

const SignIn = () => {
    const defaultValues = {
        email: '',
        password: '',
    }
    const dispatch = useDispatch()

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty },
    } = useForm({
        defaultValues,
    })

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
                        <img
                            src={logo}
                            alt="Coffee sweet"
                            className="w-[120px] absolute top-0 left-0"
                        />

                        <Box className="flex items-center justify-center">
                            <Box component="form">
                                <Typography
                                    align="center"
                                    variant="h6"
                                    gutterBottom
                                    paddingY={4}
                                >
                                    Welcome Back!
                                </Typography>
                                <Stack className="items-center" spacing={2}>
                                    <Stack spacing={4}>
                                        <FormControl>
                                            <Controller
                                                control={control}
                                                name="email"
                                                render={({ field }) => (
                                                    <TextField
                                                        error={errors.email}
                                                        label="Email"
                                                        className="w-[400px] "
                                                        type="email"
                                                        required
                                                        autoComplete="email"
                                                        {...field}
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
                                                        required
                                                        {...field}
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
                                    >
                                        Đăng nhập
                                    </Button>
                                    <Divider className="w-[400px]">
                                        hoặc
                                    </Divider>
                                </Stack>
                                <Stack spacing={1} marginTop={2}>
                                    <GoogleLogin
                                        onSuccess={onLoginGgSuccess}
                                        onError={() => {
                                            console.log('Login Failed')
                                        }}
                                    />
                                    {/* <LoginSocialFacebook
                                        appId={appID}
                                        onResolve={(response) =>
                                            console.log(response)
                                        }
                                        onReject={(error) => console.log(error)}
                                    >
                                        <FacebookLoginButton
                                            iconSize="18px"
                                            text="Sử dụng Facebook"
                                            style={{
                                                fontSize: '15px',
                                                height: '38px',
                                            }}
                                        />
                                    </LoginSocialFacebook> */}
                                </Stack>
                                <Typography
                                    align="center"
                                    variant="subtitle2"
                                    component="div"
                                    marginTop={10}
                                >
                                    Chưa có tài khoản!
                                    <Typography
                                        variant="subtitle2"
                                        component="span"
                                        marginLeft={1}
                                        color="blue"
                                    >
                                        Tạo mới ngay!
                                    </Typography>
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
