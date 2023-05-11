import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import { styled } from '@mui/material/styles'
import { links } from './Sidebar'

const CustomListItemButton = styled(ListItemButton)(({ theme }) => ({
    '&.Mui-selected': {
        backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-selected:hover': {
        backgroundColor: theme.palette.action.selected,
    },
}))

const SidebarItem = () => {
    const { t } = useTranslation()
    const location = useLocation()
    const { pathname } = location
    const [selectedPath, setSelectedPath] = useState('/')

    useEffect(() => {
        links.forEach((link) => {
            if (pathname === link.to) {
                setSelectedPath(link.to)
            }
        })
    }, [pathname])

    const handleListItemClick = (event, path) => {
        setSelectedPath(path)
    }

    return (
        <>
            {links.map((link) => (
                <Link key={link.id} to={link.to} style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem id={`sidebar-item-${link.id}`} disablePadding>
                        <CustomListItemButton
                            selected={selectedPath === link.to}
                            onClick={(event) => handleListItemClick(event, link.to)}
                        >
                            <ListItemIcon>
                                <img alt={link.text} src={link.icon} height="20" width="20" />
                            </ListItemIcon>
                            <ListItemText>{t(link.text)}</ListItemText>
                        </CustomListItemButton>
                    </ListItem>
                </Link>
            ))}
        </>
    )
}

export default SidebarItem
