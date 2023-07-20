import Head from 'next/head'
import React from 'react'
import Stack from '@mui/material/Stack'
import TopBar from './topBar'

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
                {/* top bar */}
                <TopBar />

                {children}
            </Stack>
        </>
    )
}

export default MainLayout