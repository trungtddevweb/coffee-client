import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { blue, orange } from '@mui/material/colors'

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: orange[900],
                },
                input: {
                    main: blue[900],
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#ffffff',
                },
            },
        },
    },
    // ...other properties
})

export default theme
