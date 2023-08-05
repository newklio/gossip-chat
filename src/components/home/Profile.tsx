import { Avatar, Badge, Button, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import { font, myTheme } from '@gossip/theme'
import { grey } from '@mui/material/colors'

const Profile = () => {
    return (
        // <div>Home profile</div>

        <Stack padding={'48px'} gap={'16px'} fontFamily={font.style.fontFamily}>
            {/* // start of main stack*/}

            {/* //icon button */}
            <Stack alignItems={'flex-start'}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    badgeContent={
                        <Avatar
                            src="/assets/icons/misc/profile/verified.svg"
                            alt="verigyicon"
                            sx={{ width: '18px', height: '18px' }}
                        />
                    }
                >
                    <Avatar
                        src="/assets/icons/profile/user5.jpg"
                        alt="profileimg"
                        sx={{ width: '64px', height: '64px' }}
                    />
                </Badge>
            </Stack>
            {/* // start of profile stack for name,id,about*/}
            <Stack
                alignSelf={'stretch'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                padding={'8px 0px'}
                gap={'16px'}
            >
                <Stack>
                    <Typography
                        sx={{
                            gap: '8px',
                            fontSize: '20px',
                            fontWeight: 700,
                            lineHeight: '19px',
                        }}
                    >
                        Deepak Yadu
                    </Typography>
                </Stack>

                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    sx={{
                        width: '71px',
                        height: '19px',
                        gap: '8px',
                    }}
                >
                    <Typography
                        sx={{
                            lineHeight: '19px',
                            fontSize: '12px',
                            fontWeight: 500,
                        }}
                    >
                        dk404found
                    </Typography>

                    <Typography
                        sx={{
                            borderRadius: '48px',
                            padding: '7px 12px',
                            fontSize: '9px',
                            fontWeight: 500,
                            lineHeight: '10px',
                            textTransform: 'none',
                            bgcolor: '#EEEEEE',
                        }}
                    // color={myTheme.text.light.inactive}
                    >
                        threads.net
                    </Typography>
                    {/* <Chip height:"2"
            
            sx={{
              "& .MuiChip-label": {
                padding: "7px 8px",
                fontSize: "9px",
                fontWeight: 500,
                width: "74px",
                minHeight:"24px",
                height: "24px",
                lineHeight: "10px",
              },
            }}
            label="Threads.net"
          /> */}
                </Stack>

                <Stack>
                    <Typography
                        alignSelf={'stretch'}
                        sx={{
                            fontSize: '12px',
                            fontWeight: 500,
                            lineHeight: '19px',
                        }}
                    >
                        Senior Frontend Developer | Exploring the art of
                        programming
                    </Typography>
                    <Typography
                        alignSelf={'stretch'}
                        sx={{
                            fontSize: '12px',
                            fontWeight: 500,
                            lineHeight: '19px',
                        }}
                    >
                        deepak@newklio.com
                    </Typography>
                </Stack>
            </Stack>
            {/* // end of profile stack for name,id,about*/}

            {/* // start of profile stack for followers and following*/}
            <Stack
                gap={'4px'}
                height={'19px'}
                flexDirection={'row'}
                alignItems={'center'}
            >
                <Typography
                    letterSpacing={-0.2}
                    sx={{
                        fontSize: '13px',
                        fontWeight: '400',
                        lineHeight: '19px',
                    }}
                    color={myTheme.text.light.inactive}
                >
                    2957 followers
                </Typography>

                <Stack>
                    <Image
                        src="/assets/icons/misc/profile/Ellipse 5.svg"
                        alt="dot"
                        height={2}
                        width={2}
                        unoptimized
                    />
                </Stack>

                <Typography
                    letterSpacing={-0.2}
                    sx={{
                        fontSize: '13px',
                        fontWeight: '400',
                        lineHeight: '19px',
                    }}
                    color={myTheme.text.light.inactive}
                >
                    456 following
                </Typography>
            </Stack>
            <Button
                sx={{
                    borderRadius: '999px',
                    bgcolor: grey[900],
                    color: myTheme.text.dark.active,
                    fontSize: '14px',
                    fontsize: "13px",
                    fontWeight: 500,
                    lineHeight: '19px',
                    paddingY: "8px",
                    width: "100%",
                    height: 32,
                    '&:hover': {
                        opacity: 0.8,
                        bgcolor: grey[900],
                    }
                }}
                variant="text"
                type="submit"
            >
                Log Out
            </Button>

            {/* // start of profile stack for followers and following*/}
            {/* // end of main stack*/}
        </Stack>
    )
}

export default Profile
