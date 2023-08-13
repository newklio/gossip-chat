import { Avatar, Badge, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { myTheme } from '@gossip/theme';
import { grey } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { CommentSchema, useComments } from '@gossip/hooks/useComment';
import { useRouter } from 'next/router';
import auth from '@gossip/globals/reducers/auth';



// interface CommentDetails {
//     username: string,
//     time: string,
//     avatar: string,
//     content: string,
//     likeCount?: number,
// }

// export const CommentList: CommentDetails[] = [
//     {
//         username: "Deepak Yadu",
//         time: "2min",
//         avatar: '/assets/icons/profile/user5.jpg',
//         content: "I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please",
//         likeCount: 25,
//     },
//     {
//         username: "John Walker",
//         time: "2min",
//         avatar: '/assets/icons/profile/user1.jpg',
//         content: "I love seeing your creations, would you like to collaborate with me for our next project. It will be fun.",
//         likeCount: 112,
//     },

// ]

export const PostComment = ({ data }: { data: CommentSchema }) => {
    const router = useRouter()
    console.log(data.user)

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
                            src="/assets/icons/profile/user5.jpg"
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
                                {/* {data.CommentedUserId} */}

                                Dk404Found
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
                                    {data.createdOn.toLocaleDateString()}
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
                        > {data.comment}
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
                                5
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

// export default PostComment;

