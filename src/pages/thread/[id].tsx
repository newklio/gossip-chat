import MainLayout from "@gossip/components/mainLayout";
import { useRouter } from "next/router";
import React, { useEffect } from 'react'
import SingleFeed from "@gossip/components/post/singlePost";
import Feeds from "@gossip/components/home/Feeds";


const PostPage = () => {
    const router = useRouter()


    useEffect(() => {
        console.log(router.query.id)
    }, [router.query.id])


    return (
        <MainLayout title="Post">
            <SingleFeed />
        </MainLayout>
    )
}

export default PostPage