import { Avatar, Badge, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { myTheme } from '@gossip/theme';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { PostComment, CommentList } from '@gossip/components/post/Postcomment'
import { useRouter } from 'next/router';

interface SingleThreadDetails {
    id: string,
    username: string,
    time: string,
    avatar: string,
    content: string,
    tags?: string[],
    images?: string[],
    repostsCount?: number,
    commentsCount?: number,
}

const SinglepostList: SingleThreadDetails[] = [

    {
        id: "user1",
        username: 'aura',
        time: '2h',
        avatar: '/assets/icons/profile/user 2.jpg',
        content: 'I have been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please',
        tags: ["#full - stack", "#BringItOnNewiPhone", "#BeyondExcited"],
        images: [
            "/assets/icons/feeds/Rectangle 8.jpg", "/assets/icons/feeds/Rectangle 9.jpg"

        ],
        repostsCount: 10,
        commentsCount: 20,
    },
    {
        id: "user2",
        username: 'dk404',
        time: '2 min',
        avatar: '/assets/icons/profile/user 4.jpg',
        content: "It took so long for this desktop version of Threads to come out, but I'm really excited to start posting tips and content directly from the computer",
        tags: ["#full - stack", "#frontend", "#figma"],
        repostsCount: 7,
        commentsCount: 59,
    },
    {
        id: "user3",
        username: 'Aura',
        time: '20 min',
        avatar: '/assets/icons/profile/user1.jpg',
        content: "Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥",
        tags: ["#full - stack", "#BringItOnNewiPhone", "#BeyondExcited"],
        repostsCount: 10,
        commentsCount: 59,
    },
    {
        id: "user4",
        username: 'Aman Singh',
        time: '1 min',
        avatar: '/assets/icons/profile/user 5.jpg',
        content: "It took so long for this desktop version of Threads to come out, but I'm really excited to start posting tips and content directly from the computer",
        tags: ["#full - stack", "#amanTech", "#BeyondExcited"],
        images: [
            "/assets/icons/Gossip.svg",
        ],
        repostsCount: 100,
        commentsCount: 509,
    },
]



const SingleFeed = (
    {
        post
    }: {
        post: SingleThreadDetails
    }
) => {
    const router = useRouter()
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
                <IconButton onClick={() => router.back()}>
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
                    width: '624 ',

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
                            src={post.avatar}
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
                                {post.username}
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
                                    {post.time}
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
                        > {post.content}
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
                        > {post.tags?.map((tag, index) => (
                            <Stack key={index} style={{ padding: '3px' }}>
                                {tag}
                            </Stack>
                        ))}
                        </Typography>
                    </Stack>
                    {/* end tags */}

                    {/* start for images */}
                    <Stack alignItems={"flex-start"} gap={"8px"} direction={'row'} flexWrap={'wrap'}>
                        {post.images?.map((imgSrc, index) => (
                            <Image
                                key={index} // Make sure to provide a unique key for each image
                                src={imgSrc}
                                alt={`Image ${index + 1}`}
                                width={"238"}
                                height={"230"}
                            />
                        ))}
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
                            {post.repostsCount} repost
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
                            {post.commentsCount} comments
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
                                <PostComment
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

export default SingleFeed
