import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import {
    Avatar,
    Badge,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import Image from 'next/image'
import { myTheme } from '@gossip/theme'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useRouter } from 'next/router'
import { StackedBarChartSharp } from '@mui/icons-material'
import { feedsData, usegetFeeds } from '@gossip/hooks/usegetFeeds'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectAuth } from '@gossip/globals/reducers/auth'
// interface ThreadDetails {
//     id: string,
//     username: string,
//     time: string,
//     avatar: string,
//     content: string,
//     tags?: string[],
//     images?: string[],
//     repostsCount?: number,
//     commentsCount?: number,
// }
// const threadsList: ThreadDetails[] = [
//     {
//         id: "user1",
//         username: 'aura',
//         time: '2h',
//         avatar: '/assets/icons/profile/user1.jpg',
//         content: 'I have been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please',
//         tags: ["#full - stack", "#BringItOnNewiPhone", "#BeyondExcited"],
//         images: [
//             "/assets/icons/feeds/Rectangle 8.jpg", "/assets/icons/feeds/Rectangle 9.jpg"
//         ],
//         repostsCount: 10,
//         commentsCount: 20,
//     },
//     {
//         id: "user2",
//         username: 'dk404',
//         time: '2 min',
//         avatar: '/assets/icons/profile/user 4.jpg',
//         content: "It took so long for this desktop version of Threads to come out, but I'm really excited to start posting tips and content directly from the computer",
//         tags: ["#full - stack", "#frontend", "#figma"],
//         repostsCount: 7,
//         commentsCount: 59,
//     },
//     {
//         id: "user3",
//         username: 'Aura',
//         time: '20 min',
//         avatar: '/assets/icons/profile/user1.jpg',
//         content: "Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥",
//         tags: ["#full - stack", "#BringItOnNewiPhone", "#BeyondExcited"],
//         repostsCount: 10,
//         commentsCount: 59,
//     },
//     {
//         id: "user4",
//         username: 'Aman Singh',
//         time: '1 min',
//         avatar: '/assets/icons/profile/user 5.jpg',
//         content: "It took so long for this desktop version of Threads to come out, but I'm really excited to start posting tips and content directly from the computer",
//         tags: ["#full - stack", "#amanTech", "#BeyondExcited"],
//         images: [
//             "/assets/icons/Gossip.svg",
//         ],
//         repostsCount: 100,
//         commentsCount: 509,
//     },
// ]

const Thread = ({ details }: { details: feedsData }) => {
    console.log(details)
    const router = useRouter()
    const auth = useSelector(selectAuth)

    useEffect(() => {
        if (!auth.authenticated) {
            router.replace('/login')
        }
    }, [auth.authenticated, router])

    if (!auth.authenticated) {
        return null
    }

    return (
        <Stack
            alignItems={'center'}
            direction={'row'}
            spacing={'12px'}
            sx={{
                p: '16px 16px 16px 12px',
                borderRadius: '16px',
                bgcolor: '#fff',
                boxShadow:
                    '0px 4px 6px -1px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.10)',
                maxWidth: '100%',
                width: '100%',
                '&:hover': {
                    opacity: 1,
                    bgcolor: grey[200],
                },
                cursor: 'pointer',
            }}
            onClick={() => router.push(`/thread/${details.id}`)}
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
                        src={'/assets/icons/profile/user5.jpg'}
                        alt="postprofileimg"
                        sx={{ width: '36px', height: '36px' }}
                    />
                </Badge>
                {/* end avatar with button */}

                {/* horizontal line */}
                <Stack
                    sx={{
                        position: 'relative',
                        width: '2px',
                        height: '88%',
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
            <Stack direction={'column'} gap={'12px'} width={'100%'}>
                <Stack direction={'column'} gap={'6px'}>
                    {/* heading */}
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        {/* user name */}
                        <Typography
                            sx={{
                                fontSize: '14px',
                                lineHeight: '19px',
                                fontWeight: '600',
                            }}
                        >
                            {details.user.fullname}
                        </Typography>
                        {/* end user name */}

                        {/* time and options */}
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={'16px'}
                        >
                            {/* time */}
                            <Typography
                                fontSize={'12px'}
                                lineHeight={'19px'}
                                fontWeight={400}
                                color={myTheme.text.light.inactive}
                            >
                                {details.createdOn.toLocaleDateString()}
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
                            fontSize: '13px',
                            lineHeight: '19px',
                            fontWeight: '400',
                            color: '#000000',
                        }}
                        // > {details.content}
                    >
                        {details.caption}
                    </Typography>
                    {/* end caption */}
                    {/* start tags */}
                    <Stack>
                        {details.tags?.map((tag, index) => (
                            <Typography
                                sx={{
                                    fontSize: '13px',
                                    lineHeight: '19px',
                                    fontWeight: '400',
                                    color: '#03A9F4',
                                }}
                                key={index}
                            >
                                {tag}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
                {/* end tags */}

                {/* start for images */}
                <Stack
                    alignItems={'flex-start'}
                    gap={'8px'}
                    direction={'row'}
                    flexWrap={'wrap'}
                >
                    {/* {details.images?.map((imgSrc, index) => (
                        <Image
                            key={index} // Make sure to provide a unique key for each image
                            src={imgSrc}
                            alt={`Image ${index + 1}`}
                            width={'238'}
                            height={'230'}
                            unoptimized
                        />
                    ))} */}
                    {details.images && details.images.length > 0 ? (
                        details.images.map((imgSrc, index) => (
                            <Image
                                key={index}
                                src={imgSrc}
                                alt={`Image ${index + 1}`}
                                width={238}
                                height={230}
                                unoptimized
                            />
                        ))
                    ) : (
                        <Image
                            src="/assets/icons/profile/user5.jpg"
                            alt="photo"
                            width={238}
                            height={230}
                            unoptimized
                        />
                    )}
                </Stack>
                {/* end for images */}
                {/* start for icon buttons like comment repost */}
                <Stack alignItems={'flex-start'} direction={'row'} gap={'12px'}>
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
                    >
                        <Image
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
                <Stack gap={'4px'} flexDirection={'row'} alignItems={'center'}>
                    <Typography
                        letterSpacing={-0.2}
                        sx={{
                            fontSize: '13px',
                            fontWeight: '400',
                            lineHeight: '19px',
                        }}
                        color={myTheme.text.light.inactive}
                    >
                        {/* {details.repostsCount} */}2 reposts
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
                            letterSpacing: '-0.2px',
                        }}
                        color={myTheme.text.light.inactive}
                    >
                        8 Comment
                    </Typography>
                </Stack>
                {/* start for stack comeent and repost */}
            </Stack>
            {/* end right content section -heading Caption imagees and like comment */}
        </Stack>
    )
}
function Feeds() {
    const { feeds, setFeeds, getFeeds } = usegetFeeds()

    useEffect(() => {
        getFeeds()
    }, [getFeeds])

    return (
        <Stack
            spacing={'8px'}
            // px={'8px'}
            width={{
                md: 596,
                lg: 624,
            }}
            maxWidth={'100%'}
        >
            {/* new thread */}
            <Stack
                direction={'row'}
                spacing={'12px'}
                sx={{
                    p: '16px 16px 16px 12px',
                    borderRadius: '16px',
                    bgcolor: '#fff',
                    boxShadow:
                        '0px 4px 6px -1px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.10)',
                    maxWidth: '100%',
                    width: '100%',
                }}
            >
                {/* avatar */}
                <Stack
                    sx={{
                        position: 'relative',
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '1px solid ',
                        borderColor: grey[300],
                    }}
                >
                    <Image
                        src={'/assets/icons/profile/user1.jpg'}
                        alt={'user1'}
                        fill
                        unoptimized
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </Stack>
                {/* end avatar */}
                {/* input and buttons */}
                <Stack width={'100%'} spacing={'8px'}>
                    {/* input */}
                    <TextField
                        sx={{
                            width: '100%',
                            '& .MuiInputBase-root': {
                                padding: '0px',
                            },
                            '& .MuiInputBase-input': {
                                fontSize: '14px',
                                lineHeight: '20px',
                                fontWeight: '500',
                            },
                            '& fieldset': { border: 'none' },
                        }}
                        id="standard-textarea"
                        multiline
                        maxRows={6}
                        placeholder="Share something cool today"
                        fullWidth
                    />
                    {/* end input */}
                    {/* buttons */}
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        {/* attach file */}
                        <IconButton>
                            <AttachFileIcon
                                sx={{
                                    transform: 'rotate(45deg)',
                                    width: '24px',
                                    height: '24px',
                                }}
                            />
                        </IconButton>
                        {/* end attach file */}

                        {/* send */}
                        <IconButton
                            sx={{
                                bgcolor: grey[200],
                                alignSelf: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <SendOutlinedIcon
                                sx={{
                                    transform: 'rotate(-45deg)',
                                    width: '16px',
                                    height: '16px',
                                }}
                            />
                        </IconButton>
                    </Stack>
                    {/* end buttons */}
                </Stack>
                {/* end input and buttons */}
            </Stack>
            {/* end new thread */}
            {/* thread */}
            <Stack spacing={'8px'}>
                {feeds.map((feed, index) => (
                    <Thread key={index} details={feed} />
                ))}
            </Stack>
            {/* end threads feed */}

            {/* threads feed */}
        </Stack>
    )
}
export default Feeds
