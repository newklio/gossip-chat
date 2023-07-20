import React, { useEffect } from 'react'
import { IconButton, Stack } from '@mui/material';
import Image from 'next/image';
import Logo from '@public/assets/icons/Gossip.png'
import HomeActive from '@public/assets/icons/misc/Home/active.svg'
import HomeInactive from '@public/assets/icons/misc/Home/inactive.svg'
import SearchActive from '@public/assets/icons/misc/Search/active.svg'
import SearchInactive from '@public/assets/icons/misc/Search/inactive.svg'
import LikeActive from '@public/assets/icons/misc/Like/active.svg'
import LikeInactive from '@public/assets/icons/misc/Like/inactive.svg'
import SaveActive from '@public/assets/icons/misc/Save Later/active.svg'
import SaveInactive from '@public/assets/icons/misc/Save Later/inactive.svg'
import SendActive from '@public/assets/icons/misc/Send/active.svg'
import SendInactive from '@public/assets/icons/misc/Send/inactive.svg'
import Hamburguer from '@public/assets/icons/misc/hamburger.svg'
import Settings from '@public/assets/icons/misc/settings.svg'
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/router';

const TopBar = () => {
    const router = useRouter()
    const [active, setActive] = React.useState('home')

    useEffect(() => {
        if (router.pathname === '/home') {
            setActive('home')
        } else if (router.pathname === '/like') {
            setActive('like')
        }
    }, [router.pathname])

    return (
        <Stack
            direction={'row'}
            justifyContent={'space-between'}
            sx={{
                boxShadow: ' 0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(16, 24, 40, 0.10);'
            }}
            height={56}
            bgcolor={'white'}
        >
            {/* logo section */}
            <Stack
                py={'10px'}
                direction={'row'}
                justifyContent={'flex-end'}
                width={{
                    lg: '27.8%',
                    xl: '100%'
                }}
            >
                {/* logp container */}
                <Stack
                    px={'48px'}
                    width={400}
                    direction={'row'}
                    alignItems={'center'}
                >
                    <Image
                        src={Logo}
                        alt={'Gossip Logo'}
                        width={64}
                        height={36}
                        unoptimized
                    />
                </Stack>
                {/*  end logo container */}
            </Stack>
            {/* end logo section */}

            {/* navigation section */}
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
                {/* navigation container */}
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    spacing={4}
                >
                    <IconButton onClick={() => {
                        router.push('/home')
                    }}>
                        <Image
                            src={active === 'home' ? HomeActive : HomeInactive}
                            alt={'Home'}
                            width={24}
                            height={24}
                            unoptimized
                        />
                    </IconButton>
                    <IconButton onClick={() => setActive('search')}>
                        <Image
                            src={active === 'search' ? SearchActive : SearchInactive}
                            alt={'Search'}
                            width={24}
                            height={24}
                            unoptimized
                        />
                    </IconButton>
                    <IconButton onClick={() => {
                        router.push('/like')
                    }}>
                        <Image
                            src={active === 'like' ? LikeActive : LikeInactive}
                            alt={'Like'}
                            width={24}
                            height={24}
                            unoptimized
                        />
                    </IconButton>
                    <IconButton onClick={() => setActive('send')}>
                        <Image
                            src={active === 'send' ? SendActive : SendInactive}
                            alt={'Send'}
                            width={24}
                            height={24}
                            unoptimized
                        />
                    </IconButton>
                    <IconButton onClick={() => setActive('save')}>
                        <Image
                            src={active === 'save' ? SaveActive : SaveInactive}
                            alt={'Save'}
                            width={24}
                            height={24}
                            unoptimized
                        />
                    </IconButton>
                </Stack>
                {/* navigation container */}
            </Stack>
            {/* end navigation section */}

            {/* settings section */}
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
                {/* settings container */}
                <Stack
                    px={'48px'}
                    width={400}
                    direction={'row'}
                    justifyContent={'flex-end'}
                    alignItems={'center'}
                >
                    <IconButton>
                        <Image
                            src={Settings}
                            alt={'Settings'}
                            width={24}
                            height={24}
                            unoptimized
                        />
                    </IconButton>
                    <IconButton>
                        <Image
                            src={Hamburguer}
                            alt={'Hamburguer'}
                            width={24}
                            height={24}
                            unoptimized
                        />
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default TopBar