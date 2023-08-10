import Feeds from '@gossip/components/home/Feeds'
import MainLayout from '@gossip/components/mainLayout'
import { selectAuth } from '@gossip/globals/reducers/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const auth = useSelector(selectAuth)
    const router = useRouter()

    useEffect(() => {
        if (!auth.authenticated) {
            router.replace('/login')
        }
    }, [auth, router])

    if (!auth.authenticated) return null

    return (
        <MainLayout title="Home">
            <Feeds />
        </MainLayout>
    )
}

export default HomePage
