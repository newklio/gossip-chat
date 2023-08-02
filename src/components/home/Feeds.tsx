import { Avatar, Badge, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { font, myTheme } from '@gossip/theme'
import Image from 'next/image'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Height } from '@mui/icons-material';

const Feeds = () => {
    return (
        // start of the main stack
        <Stack
            display={'flex'}
            flexDirection={'column'}
            padding={'0px 8px'}
            alignItems={'flex-start'}
            gap={'16px'}
            width={'640px'}
            height={'949px'}
        >
            <Stack
                // start of creating new post
                fontFamily={font.style.fontFamily}
                display={'flex'}
                alignItems={'flex-start'}
                bgcolor={"#FFFFFF"}
                flexDirection={'row'}
                boxShadow='2'
                padding={'16px 15px 16px 12px'}
                sx={{
                    width: '624px',
                    Height: '95px',
                    borderRadius: '16px',
                    gap: '12px',
                    boxShadow: 2,
                }}
            >
                <Stack
                    // {/* start of the stcak for avatar icon */}
                    display={'flex'}
                    sx={{
                        width: "36px",
                        Height: "63px",
                        gap: "18px",
                        alignItems: "center",
                    }}
                >
                    <IconButton>
                        <Badge>
                            <Avatar
                                src="/assets/icons/misc/profile/Ellipse 12.svg"
                                alt="profileimg"
                                sx={{ width: '36px', height: '36px' }}
                            />
                        </Badge>
                    </IconButton>
                    {/* end of the stack for avatar icon */}
                </Stack>
                <Stack flexDirection={'column'} alignItems={'flex-start'} gap={"10px"}
                    // {/* start of the content for creating post */}
                    sx={{
                        // width: "548px",
                    }}>
                    <Stack
                        // stack for textfield content
                        width={"548px"}
                        sx={{
                            overflow: "hidden",
                            position: "absolute",


                        }}
                    >
                        <TextField
                            sx={{
                                width: '548px',
                                height: '200px', // Set the desired height
                                overflow: 'hidden',
                                '& .MuiInputBase-root': {
                                    padding: '10px',
                                },
                                '& .MuiInputBase-input': {
                                    fontSize: '15px',
                                    lineHeight: '20px',
                                    fontWeight: '500',
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden',
                                    overflowY: 'auto',
                                    '&::-webkit-scrollbar': {
                                        display: 'none',
                                    },
                                },
                                "& fieldset": { border: "none" },
                            }}
                            id="standard-textarea"
                            multiline
                            rows={3}
                            placeholder="Share something cool today"
                        />


                        {/* end of stack for textfield content */}
                    </Stack>
                    <Stack
                        sx={{
                            alignItems: "flex-start",
                            display: "flex",
                            gap: "16px",
                            width: "548px",
                            height: "63px"
                        }}>
                    </Stack>
                    {/* stack for buttons */}
                    <Stack display={'flex'} flexDirection={'row'}
                        sx={{
                            width: "548px",
                            height: "32px",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                        <IconButton>
                            <Image
                                src="assets/icons/feeds/paperclip.svg"
                                alt="Clip"
                                width={24}
                                height={24}
                                unoptimized
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                borderRadius: '40px',
                                gap: "12px",
                                bgcolor: "#EEEEEE",
                                color: '#9E9E9E',
                                alignItems: "center",
                                padding: "9px 8px 7px 8px"
                            }}
                        >
                            <Image
                                src="assets/icons/feeds/inactive.svg"
                                alt="Send"
                                width={16}
                                height={16}
                                unoptimized
                            />
                        </IconButton>
                        {/* end of stack for button  */}
                    </Stack>
                    {/* end of content for creating new post */}
                </Stack>
                {/* // end of creating new post */}
            </Stack>
            <Stack
                // {/* outer stack for the posts */}
                width={"624px"}
                height={"453px"}
                borderRadius={"16px"}
                display={'flex'}
                bgcolor={"white"}
                padding={"16px 16px 16px 12px"}
                gap={"12px"}
                boxShadow='3'
                alignItems={"flex-start"}
                flexDirection={"row"}
            >
                {/* stack for Avatar column */}
                <Stack
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={"16px"}
                >
                    {/* Start for avatr */}
                    <Stack>
                        <IconButton >
                            <Badge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                    <Avatar
                                        src="/assets/icons/feeds/Plus Icon.svg"
                                        alt="verigyicon"
                                        sx={{ width: '18px', height: '18px' }}
                                    />
                                }
                            >
                                <Avatar
                                    src="/assets/icons/feeds/Ellipse 1.svg"
                                    alt="postprofileimg"
                                    sx={{ width: '36px', height: '36px' }}
                                />
                            </Badge>
                        </IconButton>
                        {/* end for avatar */}
                    </Stack>
                    {/* stack for Avatar column horizontal line */}
                    <Stack alignSelf={"center"} display={"flex"}
                        sx={{
                            strokeWidth: '2px',
                            stroke: "#E0E0E0",
                            display: "flex",
                        }}
                    >
                        <Image
                            src="/assets/icons/feeds/Vector 1.png"
                            alt="postprofileimg"
                            height={360}
                            width={3}
                            unoptimized
                        />
                        {/* END of stack for Avatar column horizontal line */}
                    </Stack>
                    {/* end stack for Avatar column */}
                </Stack>
                {/* start of stack fot the content of post */}
                <Stack
                    flexDirection={"column"}
                    gap={"12px"} height={"421px"} width={"548px"}
                >
                    {/* start of the stack for the name field description and tags */}
                    <Stack
                        width={"548px"}
                        height={"112px"}
                        gap={"6px"}
                        flexDirection={"column"}
                        alignItems={"flex-start"}
                    >
                        {/* stack for name field*/}
                        <Stack >
                            {/*Start of stack for name time icon*/}
                            <Stack
                                width={"548px"}
                                height={"24px"}
                                justifyContent={"space-between"}
                                flexDirection={"row"}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "19px",
                                        fontWeight: "600",
                                        width: "30px",
                                        height: "19px",
                                    }}>
                                    aura
                                </Typography>
                                <Stack
                                    // Start of stack for time and three dot button
                                    flexDirection={'row'}
                                    alignItems={'center'}
                                    gap={"16px"}
                                >
                                    <Typography
                                        fontSize={"12px"}
                                        lineHeight={"19px"}
                                        fontWeight={400}
                                        color={myTheme.text.light.inactive}
                                    >
                                        2min
                                    </Typography>
                                    <Button
                                        sx={{
                                            backgroundColor: "transparent",
                                            color: "black",
                                            width: "24px",
                                            height: "24px",
                                            justifyContent: "center",
                                            padding: "0px 5px 0px 6px"
                                        }}
                                    ><MoreHorizIcon />
                                    </Button>
                                </Stack>
                                {/* // end of stack for time and three dot button */}
                            </Stack>
                            {/*end of stack for name time and icon */}
                        </Stack>
                        {/*end of stack for name field */}
                        <Stack>
                            <Typography
                                sx={{
                                    fontSize: "13px",
                                    lineHeight: "19px",
                                    fontWeight: "400",
                                    width: "548px",
                                    height: "57px",
                                    paddingRight: "16px"

                                }}
                            >
                                I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography
                                sx={{
                                    fontSize: "13px",
                                    lineHeight: "19px",
                                    fontWeight: "400",
                                    width: "548px",
                                    height: "57px",
                                    color: "#03A9F4"
                                }}
                            >
                                #full-stack #frontend #figma
                            </Typography>
                        </Stack>
                    </Stack>
                    {/* end of the stack for name description and tag */}
                    {/* START of stack for images */}
                    <Stack
                        sx={{
                            flexDirection: "row",
                            alignItems: "flex-start",
                            gap: "8px",
                            width: "484px",
                            height: "240px",
                            borderRadius: "8px"
                        }}
                    >
                        <Stack borderRadius={"8px"}>
                            <Image
                                src="/assets/icons/feeds/Rectangle 9.jpg"
                                alt="img1"
                                height={230}
                                width={230}
                                unoptimized
                            />
                        </Stack>
                        <Stack borderRadius={"8px"}>
                            <Image
                                src="/assets/icons/feeds/Rectangle 8.jpg"
                                alt="img2"
                                height={230}
                                width={230}
                                unoptimized
                            />
                        </Stack>
                        {/* END of stack for images */}
                    </Stack>
                    {/* START of stack for icon button like post comment */}
                    <Stack
                        sx={{
                            width: "132px",
                            height: "24px",
                            display: "flex",
                            flexDirection: "row",
                            gap: "12px"

                        }}>
                        <IconButton
                            sx={{
                                height: "24px",
                                width: "24px",
                            }}>
                            <Image
                                src="/assets/icons/feeds/active.svg"
                                alt="like"
                                height={24}
                                width={24}
                                unoptimized
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                height: "24px",
                                width: "24px",
                            }}
                        >
                            <Image
                                src="/assets/icons/feeds/Comment.svg"
                                alt="like"
                                height={24}
                                width={24}
                                unoptimized
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                height: "24px",
                                width: "24px",
                            }}
                        >
                            <Image
                                src="/assets/icons/feeds/repost.svg"
                                alt="like"
                                height={24}
                                width={24}
                                unoptimized
                            />
                        </IconButton>
                        {/* END OF stack for icon button like post comment */}
                    </Stack>
                    {/* START stack fot comments and repost */}
                    <Stack
                        gap={'4px'}
                        width={'148px'}
                        height={'19px'}
                        flexDirection={'row'}
                        alignItems={'center'}
                    ><Typography
                        letterSpacing={-0.2}
                        sx={{
                            fontSize: '13px',
                            fontWeight: '400',
                            lineHeight: '19px',
                        }}
                        color={myTheme.text.light.inactive}
                    >
                            7 reposts
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
                                letterSpacing: "-0.2px"
                            }}
                            color={myTheme.text.light.inactive}
                        >
                            59 comments
                        </Typography>
                        {/*END of stack for comments and repost */}
                    </Stack>
                </Stack>
                {/* end stack for the posts */}
            </Stack>
        </Stack>
        // {/* // end of the main stack */}
    )
}
export default Feeds


