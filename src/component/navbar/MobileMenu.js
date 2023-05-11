import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    SwipeableDrawer,
    Divider,
    Toolbar,
    ListItemButton,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import SidebarItem from '../sidebar/SidebarItem'

const MobileMenu = () => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen((prev) => !prev)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <IconButton color="inherit" onClick={handleDrawerOpen} size="large">
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer open={open} onClose={handleDrawerClose} onOpen={handleDrawerOpen}>
                <Toolbar />
                <Divider />
                <List onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
                    <SidebarItem />
                    <ListItem
                        disablePadding
                        onClick={() => {
                            window.open('https://github.com/itrustmachines/spo-verification-program', '_blank')
                        }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <GitHubIcon style={{ fill: '#4b4b4b' }} alt="gitHubIcon" height="20" width="20" />
                            </ListItemIcon>
                            <ListItemText>{t('Verification Program Java Source Code')}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem
                        disablePadding
                        onClick={() => {
                            window.open('https://github.com/ITM-BNS/itm-bns.github.io', '_blank')
                        }}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <GitHubIcon style={{ fill: '#4b4b4b' }} alt="gitHubIcon" height="20" width="20" />
                            </ListItemIcon>
                            <ListItemText>{t('Verification Javascript Source Code')}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </div>
    )
}

export default MobileMenu
