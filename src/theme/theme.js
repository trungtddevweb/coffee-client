import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { deepOrange, blue, grey } from '@mui/material/colors'

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
                background: {
                    default: grey[800],
                },
            },
        },
    },
    // ...other properties
})

export default theme
