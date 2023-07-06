// import PropTypes from 'prop-types'

import { Button } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
    const { mode, setMode } = useColorScheme()
    return (
        <Button
            onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light')
            }}
        >
            {mode === 'light' ? 'Turn dark' : 'Turn light'}
        </Button>
    )
}

const Header = () => {
    return (
        <header>
            <ModeToggle />
        </header>
    )
}

// Header.propTypes = {}

export default Header
