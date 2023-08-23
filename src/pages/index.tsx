import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Home = () => {
    const router = useRouter()

    useEffect(() => {
        router.replace('/login')
    }, [router])
    return <div>Home</div>
}

export default Home
