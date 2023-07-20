import React from 'react'
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';

const TopBar = () => {
    const [active, setActive] = React.useState('home')
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
                boxShadow: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px -1px rgba(16, 24, 40, 0.10);'
            }}
            height={56}
        >
            {/* logo section */}
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
                {/* logo container */}
                <Stack
                    px={'48px'}
                    width={400}
                    direction="row"
                    alignItems="center"
                >
                    <Image
                        src="/assets/icons/Gossip.svg"
                        alt="Gossip Logo"
                        width={64}
                        height={36}
                    />
                </Stack>
                {/* end logo container */}
            </Stack>
            {/* end logo section */}

            {/* navigation section */}
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                width={{
                    lg: '44.5%',
                    xl: '100%',
                }}
                sx={{
                    borderLeft: `1px solid ${grey[300]}`,
                    borderRight: `1px solid ${grey[300]}`,
                }}
            >
                {/* navigation container */}
                <Stack
                    // width={312}
                    direction="row"
                    alignItems="center"
                    spacing={4}
                >
                    <IconButton onClick={() => setActive('home')} >
                        <Image
                            src={
                                active === 'home' ?
                                    '/assets/icons/home/active/home.svg'
                                    :
                                    '/assets/icons/home/inactive/home.svg'
                            }
                            alt="Home"
                            width={24}
                            height={24}
                        />
                    </IconButton>
                    <IconButton onClick={() => setActive('search')} >
                        <Image
                            src={
                                active === 'search' ?
                                    '/assets/icons/home/active/search.svg'
                                    :
                                    '/assets/icons/home/inactive/search.svg'
                            }
                            alt="Search"
                            width={24}
                            height={24}
                        />
                    </IconButton>
                    <IconButton onClick={() => setActive('like')} >
                        <Image
                            src={
                                active === 'like' ?
                                    '/assets/icons/home/active/like.svg'
                                    :
                                    '/assets/icons/home/inactive/like.svg'
                            }
                            alt="Like"
                            width={24}
                            height={24}
                        />
                    </IconButton>
                    <IconButton onClick={() => setActive('send')} >
                        <Image
                            src={
                                active === 'send' ?
                                    '/assets/icons/home/active/send.svg'
                                    :
                                    '/assets/icons/home/inactive/send.svg'
                            }
                            alt="Send"
                            width={24}
                            height={24}
                        />
                    </IconButton>
                    <IconButton onClick={() => setActive('save')} >
                        <Image
                            src={
                                active === 'save' ?
                                    '/assets/icons/home/active/save.svg'
                                    :
                                    '/assets/icons/home/inactive/save.svg'
                            }
                            alt="Save"
                            width={24}
                            height={24}
                        />
                    </IconButton>
                </Stack>

            </Stack>
            {/* end navigation Section */}

            {/* settings section */}
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
                {/* settings container */}
                <Stack
                    px={'48px'}
                    width={400}
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                // spacing={2}
                >
                    <IconButton
                        sx={{
                            // p: 0
                        }}
                    >
                        <Image
                            src="/assets/icons/home/settings.svg"
                            alt="Settings"
                            width={24}
                            height={24}
                        />
                    </IconButton>
                    <IconButton
                        sx={{
                            // p: 0
                        }}
                    >
                        <Image
                            src="/assets/icons/home/Hamburger.svg"
                            alt="Hamburger"
                            width={24}
                            height={24}
                        />
                    </IconButton>
                </Stack>
            </Stack>
            {/* end settings section */}
        </Stack>
    )
}

export default TopBar