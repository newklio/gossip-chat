import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Avatar, Badge, IconButton, Stack, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';
import { myTheme } from '@gossip/theme';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface ThreadDetails {
    username: string,
    time: string,
    avatar: string,
    content: string,
    tags?: string[],
    images?: string[],
    reportsCount?: number,
    commentsCount?: number,
}

const threadsList: ThreadDetails[] = [
    {
        username: 'aura',
        time: '2h',
        avatar: '/assets/icons/profile/user1.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc leo ultricies nunc, vitae luctus nisl nunc eu nisl. Sed euismod, diam sit amet dictum ultrices, nunc leo ultricies nunc, vitae luctus nisl nunc eu nisl.',
        tags: ['tag1', 'tag2', 'tag3'],
        images: [
            '/assets/icons/feeds/Rectangle 9.jpg',
            '/assets/icons/feeds/Rectangle 8.jpg',
        ],
        reportsCount: 10,
        commentsCount: 20,
    },
    {
        username: 'dk404',
        time: '2h',
        avatar: '/assets/icons/profile/user2.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc leo ultricies nunc, vitae luctus nisl nunc eu nisl. Sed euismod, diam sit amet dictum ultrices, nunc leo ultricies nunc, vitae luctus nisl nunc eu nisl.',
        // tags: ['tag1', 'tag2', 'tag3'],
        reportsCount: 10,
        commentsCount: 20,
    },
]

const Thread = (
    {
        details
    }: {
        details: ThreadDetails
    }
) => {
    return (
        <Stack
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
                                alt="verigyicon"
                                sx={{ width: '18px', height: '18px' }}
                            />
                        </IconButton>
                    }
                >
                    <Avatar
                        src={details.avatar}
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
                        alt="postprofileimg"
                        fill
                        unoptimized
                    />
                </Stack>
                {/* end horizontal line */}
            </Stack>
            {/* end left avatar section */}

            {/* right heading and content section */}
            <Stack spacing={'12xp'} width={'100%'}>
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
            </Stack>
            {/* end right heading and content section */}
        </Stack>
    )
}

function Feeds2() {
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
                    boxShadow: '0px 4px 6px -1px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.10)',
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
                            "& fieldset": { border: "none" },
                        }}
                        id="standard-textarea"
                        multiline
                        maxRows={6}
                        placeholder="Share something cool today"
                        fullWidth
                    />
                    {/* end input */}

                    {/* buttons */}
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
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

            {/* threads feed */}
            <Stack spacing={'8px'}>
                {/* thread */}{
                    threadsList.map((thread, index) => (
                        <Thread key={index} details={thread} />
                    ))
                }
            </Stack>
            {/* end threads feed */}
        </Stack>
    )
}

export default Feeds2