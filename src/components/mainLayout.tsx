import Head from 'next/head'
import React from 'react'
import { Stack } from '@mui/material';
import TopBar from './topBar';

const MainLayout = (
    {
        title,
        children
    }: {
        title: string,
        children: React.ReactNode
    }
) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Stack>
                <TopBar />
                {children}
            </Stack>
        </>
    )
}

export default MainLayout