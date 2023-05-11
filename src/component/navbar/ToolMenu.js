import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem, Menu, Typography, Button, Box } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ToolMenu = () => {
    const { t } = useTranslation()
    const [anchorEl, setAnchorEl] = useState(null)
    const accountOpen = Boolean(anchorEl)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div>
            <Button onClick={handleMenu} sx={{ p: 0.5, minWidth: 20 }} color="inherit">
                <GitHubIcon style={{ height: 25, fill: 'white' }} />
                <Box ml={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    Github
                </Box>
                <ExpandMoreIcon />
            </Button>
            <Menu
                id="tool-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={accountOpen}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={(event) => {
                        event.preventDefault()
                        window.open('https://github.com/itrustmachines/spo-verification-program')
                        handleClose()
                    }}
                >
                    <GitHubIcon style={{ marginRight: '10px', fill: '#4b4b4b' }} />
                    <Typography variant="body1">{t('Verification Program Java Source Code')}</Typography>
                </MenuItem>
                <MenuItem
                    onClick={(event) => {
                        event.preventDefault()
                        window.open('https://github.com/ITM-BNS/itm-bns.github.io')
                        handleClose()
                    }}
                >
                    <GitHubIcon style={{ marginRight: '10px', fill: '#4b4b4b' }} />
                    <Typography variant="body1">{t('Verification Javascript Source Code')}</Typography>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default ToolMenu
