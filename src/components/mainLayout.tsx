import Head from 'next/head'
import React from 'react'
import { Stack } from '@mui/material';
import TopBar from './topBar';
import Profile from './home/Profile';
import { grey } from '@mui/material/colors';
import Trending from './home/Trending';

const MainLayout = (
    {
        title,
        children,
        showProfile = true,
        showTrends = true
    }: {
        title: string,
        children: React.ReactNode
        showProfile?: boolean
        showTrends?: boolean
    }
) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Stack>
                <TopBar />
                <Stack direction={'row'} alignItems={'flex-start'}>

                    {/* right profile section */}
                    {
                        showProfile &&
                        <Stack
                            py={'10px'}
                            direction={'row'}
                            justifyContent={'flex-end'}
                            width={{
                                lg: '27.8%',
                                xl: '100%'
                            }}
                        >
                            {/* profile container */}
                            <Stack
                                // padding={'48px'}
                                // gap={'16px'}
                                width={400}
                                direction={'row'}
                                alignItems={'center'}
                            >
                                <Profile />
                            </Stack>
                            {/* end profile section */}
                        </Stack>
                    }
                    {/* end right profile section */}

                    {/* center section */}
                    <Stack
                        p={'16px 8px'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={{
                            lg: '44.4%',
                            xl: '100%'
                        }}
                        sx={{
                            borderRight: `1px solid ${grey[300]}`,
                            borderLeft: `1px solid ${grey[300]}`
                        }}
                    >
                        {/* center container */}
                        <Stack
                        >
                            {children}
                        </Stack>
                        {/* end center container */}
                    </Stack>
                    {/* end center section */}

                    {/* left section */}
                    {
                        showTrends &&

                        <Stack
                            // py={'16px'}
                            alignItems={'center'}
                            width={{
                                lg: '27.8%',
                                xl: '100%'
                            }}
                            direction={'row'}
                            justifyContent={'flex-start'}
                            alignContent={'center'}
                        >
                            {/* trending container */}
                            <Stack
                                padding={'48px'}
                                width={400}
                                // direction={'row'}
                                justifyContent={'flex-end'}
                                alignItems={'center'}
                                gap={'24px'}
                                height={'551px'}
                            >
                                <Trending />
                            </Stack>
                            {/* end trending container */}
                        </Stack>
                    }
                    {/* end left section */}
                </Stack>
            </Stack>
        </>
    )
}

export default MainLayout