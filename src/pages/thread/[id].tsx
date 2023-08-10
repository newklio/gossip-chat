import MainLayout from '@gossip/components/mainLayout'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SingleFeed from '@gossip/components/post/singlePost'
import Feeds from '@gossip/components/home/Feeds'
import { selectAuth } from '@gossip/globals/reducers/auth'
import { useSelector } from 'react-redux'
// import Detailedpost from "../../components/post/singlePost"
export interface DetailedThread {
    id: string
    username: string
    time: string
    avatar: string
    content: string
    tags?: string[]
    images?: string[]
    repostsCount?: number
    commentsCount?: number
    comment?: string
    likeCount?: number
}

export const Detailedpost: DetailedThread[] = [
    {
        id: 'user1',
        username: 'aura',
        time: '2h',
        avatar: '/assets/icons/profile/user1.jpg',
        content:
            'I have been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please',
        tags: ['#full - stack', '#BringItOnNewiPhone', '#BeyondExcited'],
        images: [
            '/assets/icons/feeds/Rectangle 8.jpg',
            '/assets/icons/feeds/Rectangle 9.jpg',
        ],
        repostsCount: 10,
        commentsCount: 20,
        comment:
            'I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please',
        likeCount: 25,
    },

    {
        id: 'user2',
        username: 'dk404',
        time: '2 min',
        avatar: '/assets/icons/profile/user 4.jpg',
        content:
            "It took so long for this desktop version of Threads to come out, but I'm really excited to start posting tips and content directly from the computer",
        tags: ['#full - stack', '#frontend', '#figma'],
        repostsCount: 7,
        commentsCount: 59,
        comment:
            'I love seeing your creations, would you like to collaborate with me for our next project. It will be fun.',
        likeCount: 112,
    },
    {
        id: 'user3',
        username: 'Aura',
        time: '20 min',
        avatar: '/assets/icons/profile/user1.jpg',
        content:
            "Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥",
        tags: ['#full - stack', '#BringItOnNewiPhone', '#BeyondExcited'],
        repostsCount: 10,
        commentsCount: 59,
        comment: 'This is the most interesting App on the App Store',
        likeCount: 25,
    },
    {
        id: 'user4',
        username: 'Aman Singh',
        time: '1 min',
        avatar: '/assets/icons/profile/user 5.jpg',
        content:
            "It took so long for this desktop version of Threads to come out, but I'm really excited to start posting tips and content directly from the computer",
        tags: ['#full - stack', '#amanTech', '#BeyondExcited'],
        images: ['/assets/icons/Gossip.svg'],
        repostsCount: 100,
        commentsCount: 509,
        comment:
            'I love seeing your creations, would you like to collaborate with me for our next project. It will be fun.',
        likeCount: 112,
    },
]

const PostPage = () => {
    const router = useRouter()

    // const selectedThread = Detailedpost.find((thread) => thread.id === postId);

    const [selectedThread, setSelectedThread] = useState<DetailedThread | null>(
        null,
    )
    const auth = useSelector(selectAuth)

    useEffect(() => {
        if (!auth.authenticated) {
            router.replace('/login')
        }
        const postId = router.query.id
        console.log(postId)
        const thread = Detailedpost.find((thread) => thread.id === postId)
        setSelectedThread(thread || null)
    }, [auth.authenticated, router])

    if (!auth.authenticated) return null

    return (
        <MainLayout title="Post">
            {selectedThread ? (
                <SingleFeed detial_post={selectedThread} />
            ) : (
                <p>Loading...</p>
            )}
        </MainLayout>
    )
}

export default PostPage
