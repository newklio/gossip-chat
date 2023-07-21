import Profile from '@gossip/components/home/Profile';
import Trending from '@gossip/components/home/Trending';
import Feeds from '@gossip/components/home/Feeds';
import MainLayout from '@gossip/components/mainLayout';
import { Stack } from '@mui/material';
import { grey } from '@mui/material/colors';

const HomePage = () => {
    return (
        <MainLayout title="Home">
            {/* main section */}
            <Stack direction={'row'} alignItems={'center'}>

                {/* right profile section */}
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
                        px={'48px'}
                        width={400}
                        direction={'row'}
                        alignItems={'center'}
                    >
                        <Profile />
                    </Stack>
                    {/* end profile section */}
                </Stack>
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
                        direction={'row'}
                        alignItems={'center'}
                        spacing={4}
                    >
                        <Feeds />
                    </Stack>
                    {/* end center container */}
                </Stack>
                {/* end center section */}

                {/* left section */}
                <Stack
                    py={'16px'}
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
                        px={'48px'}
                        width={400}
                        direction={'row'}
                        justifyContent={'flex-end'}
                        alignItems={'center'}
                    >
                        <Trending />
                    </Stack>
                    {/* end trending container */}
                </Stack>
                {/* end left section */}
            </Stack>
            {/* end main section */}
        </MainLayout>
    )
}

export default HomePage