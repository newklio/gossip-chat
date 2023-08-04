import { Avatar, Badge, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { myTheme } from '@gossip/theme';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';


interface CommentDetails {
    username: string,
    time: string,
    avatar: string,
    content: string,
    likeCount?: number,
}

const CommentList: CommentDetails[] = [
    {
        username: "Deepak Yadu",
        time: "2min",
        avatar: '/assets/icons/misc/profile/Ellipse 12.svg',
        content: "I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please",
        likeCount: 25,
    },
    {
        username: "John Walker",
        time: "2min",
        avatar: '/assets/icons/profile/user1.jpg',
        content: "I love seeing your creations, would you like to collaborate with me for our next project. It will be fun.",
        likeCount: 112,
    },

]

const SinglePost = (
    {
        details
    }: {
        details: CommentDetails
    }
) => {
    return (
        <Stack>
            {/* start of stack for the list of comments */}
            <Stack alignItems={'center'}
                direction={'row'}
                spacing={'12px'}
                borderBottom={"1px solid #E0E0E0"}
                sx={{
                    p: '16px 16px 16px 12px',
                    borderRadius: '16px',
                    bgcolor: '#fff',
                    maxWidth: '100%',
                    width: '100%',
                    // height: 300,
                }}
            >
                {/* left avatar section */}
                <Stack
                    spacing={'16px'}
                    sx={{
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        maxWidth: '100%',
                    }}
                >
                    {/* avatar  */}
                    <Badge>
                        <Avatar
                            src={details.avatar}
                            alt="postprofileimg"
                            sx={{ width: '36px', height: '36px' }}
                        />
                    </Badge>
                    {/* end avatar  */}

                </Stack>
                {/* end left avatar section */}

                {/* right content section - */}
                <Stack direction={"column"} gap={"12px"} width={'100%'}
                >
                    <Stack direction={"column"} gap={"6px"} >
                        {/* heading */}
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            {/* user name */}
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    lineHeight: "19px",
                                    fontWeight: "600",
                                }}>
                                {details.username}
                            </Typography>
                            {/* end user name */}

                            {/* time and options */}
                            <Stack direction={'row'} alignItems={'center'} spacing={'16px'}>
                                {/* time */}
                                <Typography
                                    fontSize={"12px"}
                                    lineHeight={"19px"}
                                    fontWeight={400}
                                    color={myTheme.text.light.inactive}
                                >
                                    {details.time}
                                </Typography>
                                {/* end time */}

                                {/* option icon */}
                                <IconButton
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                    }}
                                >
                                    <MoreHorizIcon
                                        sx={{
                                            color: grey[900],
                                        }}
                                    />
                                </IconButton>
                            </Stack>
                        </Stack>
                        {/* end heading */}
                        {/* start comment */}
                        <Typography
                            sx={{
                                fontSize: "13px",
                                lineHeight: "19px",
                                fontWeight: "400",
                                color: "#000000",
                            }}
                        > {details.content}
                        </Typography>
                        {/* end comment */}

                        <Stack
                            alignItems={"center"}
                            gap={"8px"}
                            direction={"row"}
                        >
                            <Typography
                                fontSize={"13px"}
                                fontWeight={400}
                                lineHeight={"19px"}
                            >
                                {details.likeCount}
                            </Typography>
                            <IconButton
                                sx={{
                                    width: '24px',
                                    height: '24px',
                                }}
                            >
                                <FavoriteSharpIcon
                                    sx={{
                                        color: "#E91E63",
                                        // backgroundColor: "#E91E63"
                                    }}
                                />
                            </IconButton>

                        </Stack>

                    </Stack>
                </Stack>
            </Stack>
            {/* end of stack for the list of comments */}

        </Stack>
    )
}



function singlefeed() {
    return (
        <Stack direction={'column'}
            alignItems={"flex-start"}
            gap={"16px"}
        >
            <Stack
                gap={"8px"}
                alignItems={"center"}
                direction={"row"}
            >
                <IconButton>
                    <ArrowBackSharpIcon
                        sx={{
                            color: grey[900],
                            width: '32px',
                            height: '32px',
                        }}
                    />
                </IconButton>
                <Typography
                    fontWeight={700}
                    fontSize={"20px"}
                    lineHeight={"19px"}
                >Gossip Topic
                </Typography>
            </Stack>

            <Stack alignItems={'center'}
                direction={'row'}
                spacing={'12px'}
                sx={{
                    p: '16px 16px 16px 12px',
                    borderRadius: '16px',
                    bgcolor: '#fff',
                    boxShadow: '0px 4px 6px -1px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.10)',
                    maxWidth: '100%',
                    width: '100%',
                    // height: 300,
                }}
            >
                {/* left avatar section */}
                <Stack
                    spacing={'16px'}
                    sx={{
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        maxWidth: '100%',
                    }}
                >
                    {/* avatar with button */}
                    <Badge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <IconButton>
                                <Avatar
                                    src="/assets/icons/feeds/Plus Icon.svg"
                                    alt="pulsicon"
                                    sx={{ width: '18px', height: '18px' }}
                                />
                            </IconButton>
                        }
                    >
                        <Avatar
                            src="/assets/icons/feeds/Ellipse 1.svg"
                            alt="postprofileimg"
                            sx={{ width: '36px', height: '36px' }}
                        />
                    </Badge>
                    {/* end avatar with button */}

                    {/* horizontal line */}
                    <Stack
                        sx={{
                            position: "relative",
                            width: "2px",
                            height: "88%",
                        }}
                    >
                        <Image
                            src="/assets/icons/feeds/Vector 1.png"
                            alt="horizontal_line"
                            fill
                            unoptimized
                        />
                    </Stack>
                    {/* end horizontal line */}
                </Stack>
                {/* end left avatar section */}

                {/* right content section -heading Caption imagees and like comment */}
                <Stack direction={"column"} gap={"12px"} width={'100%'}
                >
                    <Stack direction={"column"} gap={"6px"} >
                        {/* heading */}
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            {/* user name */}
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    lineHeight: "19px",
                                    fontWeight: "600",
                                }}>
                                aura
                            </Typography>
                            {/* end user name */}

                            {/* time and options */}
                            <Stack direction={'row'} alignItems={'center'} spacing={'16px'}>
                                {/* time */}
                                <Typography
                                    fontSize={"12px"}
                                    lineHeight={"19px"}
                                    fontWeight={400}
                                    color={myTheme.text.light.inactive}
                                >
                                    2min
                                </Typography>
                                {/* end time */}

                                {/* option icon */}
                                <IconButton
                                    sx={{
                                        width: '24px',
                                        height: '24px',
                                    }}
                                >
                                    <MoreHorizIcon
                                        sx={{
                                            color: grey[900],
                                        }}
                                    />
                                </IconButton>
                            </Stack>
                        </Stack>
                        {/* end heading */}
                        {/* start caption */}
                        <Typography
                            sx={{
                                fontSize: "13px",
                                lineHeight: "19px",
                                fontWeight: "400",
                                color: "#000000",
                            }}
                        > I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please
                        </Typography>
                        {/* end caption */}
                        {/* start tags */}

                        <Typography
                            sx={{
                                fontSize: "13px",
                                lineHeight: "19px",
                                fontWeight: "400",
                                color: "#03A9F4",
                            }}
                        > #full-stack #frontend #figma
                        </Typography>
                    </Stack>
                    {/* end tags */}

                    {/* start for images */}
                    <Stack alignItems={"flex-start"} gap={"8px"} direction={'row'}>

                        <Image
                            src="/assets/icons/feeds/Rectangle 8.jpg"
                            alt="rectnagleimage"
                            width={"238"}
                            height={"230"}
                        />
                        <Image
                            src="/assets/icons/feeds/Rectangle 9.jpg"
                            alt="rectnagleimage"
                            width={"238"}
                            height={"230"}
                        />

                    </Stack>
                    {/* end for images */}
                    {/* start for icon buttons like comment repost */}
                    <Stack alignItems={'flex-start'} direction={"row"} gap={"12px"}>
                        {/* for like */}
                        <IconButton
                            sx={{
                                width: '24px',
                                height: '24px',
                            }}
                        >
                            <FavoriteBorderIcon
                                sx={{
                                    color: grey[900],
                                }}
                            />
                        </IconButton>
                        {/* for comment */}
                        <IconButton
                            sx={{
                                width: '24px',
                                height: '24px',
                            }}
                        >
                            <Image
                                src="/assets/icons/feeds/Comment.svg"
                                alt="commet"
                                height={24}
                                width={24}
                                unoptimized
                            />
                        </IconButton>
                        {/* for repost */}
                        <IconButton
                            sx={{
                                width: '24px',
                                height: '24px',
                            }}
                        ><Image
                                src="/assets/icons/feeds/repost.svg"
                                alt="repost"
                                height={24}
                                width={24}
                                unoptimized
                            />
                        </IconButton>
                    </Stack>

                    {/* end for icon buttons like comment repost */}

                    {/* start for stack comeent and repost */}
                    <Stack gap={'4px'}

                        flexDirection={'row'}
                        alignItems={'center'}>
                        <Typography
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
                        <Image
                            src="/assets/icons/misc/profile/Ellipse 5.svg"
                            alt="dot"
                            height={2}
                            width={2}
                            unoptimized
                        />
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
                            59 Comment
                        </Typography>
                    </Stack>
                    {/* start to add comment textfiled */}
                    <Stack
                        padding={"4px"}
                        gap={"19px"}
                        alignItems={"center"}
                        borderRadius={"999px"}
                        border={"1px solid #BDBDBD"}
                        height={"100%"}
                        width={"100%"}
                        direction={"row"}

                    >
                        {/* for Avatar icon */}
                        <Image
                            src='/assets/icons/misc/profile/Ellipse 12.svg'
                            alt="profileimage"
                            width={"32"}
                            height={"32"}
                        />
                        {/* for TextField */}
                        <Stack
                            fontSize={"13px"}
                            // lineHeight={"19px"}
                            fontWeight={400}
                            letterSpacing={"-0.2px"}
                            width={"414px"}
                            spacing={'8px'}
                            height={"100%"}
                        >
                            <TextField
                                sx={{
                                    width: '100%',
                                    '& .MuiInputBase-root': {
                                        padding: '5px',
                                    },
                                    '& .MuiInputBase-input': {
                                        fontSize: '13px',

                                        fontWeight: '500',
                                    },
                                    "& fieldset": { border: "none" },
                                }}
                                id="standard-textarea"
                                multiline
                                maxRows={2}
                                placeholder="Share Your Thoughts..."
                                fullWidth
                            />
                        </Stack>
                        {/* for post button */}
                        <Stack alignItems={"flex-end"}>
                            <Button variant="contained"
                                sx={{
                                    borderRadius: "999px",
                                    bgcolor: grey[900],
                                    fontsize: "13px",
                                    lineHeight: "19px",
                                    FontWeight: "400",
                                    letterSpacing: "-0.2px",
                                    textTransform: "none",
                                    paddingY: "8px",
                                    '&:hover': {
                                        opacity: 0.8,
                                        bgcolor: grey[900],
                                    }

                                }}
                            >
                                Post
                            </Button>
                        </Stack>
                    </Stack>
                    {/* end of Stack to add comment textfiled */}


                    <Stack
                        spacing={'8px'}
                    >{
                            CommentList.map((comment, index) => (
                                <SinglePost
                                    key={index} details={comment} />
                            ))
                        }
                    </Stack>
                    <Stack
                        alignItems={"flex-start"}
                    >

                        <Button variant="text"
                            sx={{
                                fontSize: '13px',
                                fontWeight: 500,
                                lineHeight: '19px',
                                textTransform: 'none',
                                color: "#03A9F4",

                            }}
                        >load more

                        </Button>
                    </Stack>


                </Stack>
                {/* end right content section -heading Caption images and like comment */}



            </Stack >
        </Stack>
    )
}

export default singlefeed
