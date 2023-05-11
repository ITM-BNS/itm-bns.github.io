import React from 'react'
import { Toolbar, Drawer, List, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import HomeIcon from '../../img/home.svg'
import ProofIcon from '../../img/gavel.svg'
import RawDataIcon from '../../img/file.svg'
// import KeyIcon from '../../img/key.svg'
import FolderIcon from '../../img/folder.svg'
import SidebarItem from './SidebarItem'

const drawerWidth = 240
const CustomDrawer = styled(Drawer)(() => ({
    width: drawerWidth,
    flexShrink: 0,
    '.MuiDrawer-paper': { width: drawerWidth },
}))

export const links = [
    { id: 0, icon: HomeIcon, text: 'Home', to: '/' },
    { id: 1, icon: ProofIcon, text: 'Proof Verification', to: '/proofVerification' },
    { id: 2, icon: RawDataIcon, text: 'Raw Data Verification', to: '/rawDataVerification' },
    { id: 3, icon: FolderIcon, text: 'File Set Verification', to: '/fileSetVerification' },
    // { id: 4, icon: KeyIcon, text: 'Recovery Key and Address', to: '/recoveryKeyAddress' },
]

const Sidebar = () => {
    return (
        <CustomDrawer id="sidebar" variant="permanent" sx={{ display: { xs: 'none', md: 'block' } }}>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <SidebarItem />
                </List>
            </Box>
        </CustomDrawer>
    )
}

export default Sidebar
