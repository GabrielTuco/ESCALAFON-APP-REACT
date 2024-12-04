import { Stack } from '@mui/material';
import React, { useState } from 'react'
import { DrawerUser } from '../globals/components/DrawerUser';
import { PageRoot } from '../globals/components/PageRoot';

export const Home = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(false);
    }
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Stack sx={{ width: '100%' }}>
            <DrawerUser onLogout={()=>{}} toggleDrawer={toggleDrawer} open={open} handleClose={handleClose} />
            <PageRoot>
                <p>asdasd home</p>
            </PageRoot>
        </Stack>
    )
}
