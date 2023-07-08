import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { deepOrange, blue } from '@mui/material/colors'

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: deepOrange[500],
                    contrastText: '#ffffff',
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
