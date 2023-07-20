import MainLayout from '@gossip/components/mainLayout'
import React from 'react'
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

const HomePage = () => {
    return (
        <MainLayout title="Home">
            {/* main section */}
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
            >

                {/* left porofile section */}
                <Stack
                    py={'10px'}
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    width={{
                        lg: '27.8%',
                        xl: '100%',
                    }}
                    sx={{
                        // borderRight: `1px solid ${grey[300]}`
                    }}
                >
                    {/* profile container */}
                    <Stack
                        px={'48px'}
                        width={400}
                        direction="row"
                        alignItems="center"
                    >
                        profile
                    </Stack>
                    {/* end profile container */}
                </Stack>
                {/* end left porofile section */}

                {/* center section */}
                <Stack
                    direction="row"
                    justifyContent="center"
                    width={{
                        lg: '44.5%',
                        xl: '100%',
                    }}
                    height={'100vh'}
                    sx={{
                        borderLeft: `1px solid ${grey[300]}`,
                        borderRight: `1px solid ${grey[300]}`,
                    }}
                >
                    {/* center container */}
                    <Stack
                        // width={312}
                        direction="row"
                        alignItems="center"
                        spacing={4}
                    >
                        center
                    </Stack>
                    {/* end center container */}
                </Stack>
                {/* end center section */}

                {/* right trending section */}
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    width={{
                        lg: '27.8%',
                        xl: '100%',
                    }}
                    sx={{
                        // borderLeft: `1px solid ${grey[300]}`
                    }}
                >
                    {/* right container */}
                    <Stack
                        px={'48px'}
                        width={400}
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                    // spacing={2}
                    >
                        right
                    </Stack>
                    {/* end right container */}
                </Stack>
                {/* end right trending section */}
            </Stack>
            {/* end main section */}
        </MainLayout>
    )
}

export default HomePage