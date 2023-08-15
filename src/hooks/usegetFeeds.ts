import { setAlert } from '@gossip/globals/reducers/Alerts'
import { selectAuth } from '@gossip/globals/reducers/auth'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { z } from 'zod'
const getFeedsSchema = z.object({
    id: z.string(),
    caption: z
        .string()
        .min(3, {
            message: 'caption must be at least 3 characters long',
        })
        .max(500, {
            message: 'caption must be at most 500 characters long',
        }),
    tags: z.array(z.string().min(0)).max(10),
    createdOn: z.date(),
    images: z.array(z.string().min(0)).max(10).optional(),
    user: z.object({
        uid: z.string(),
        fullname: z.string(),
        image: z.string(),
    }),
})

export type feedsData = z.infer<typeof getFeedsSchema>

const Server = process.env.NEXT_PUBLIC_API_SERVER
console.log(Server)

export const useGetFeeds = () => {
    const dispatch = useDispatch()

    const auth = useSelector(selectAuth)
    const [feeds, setFeeds] = useState<feedsData[]>([])

    const getFeeds = useCallback(
        async (skip?: number, limit?: number, sortOrder?: 'asc' | 'desc') => {
            var myHeaders = new Headers()
            myHeaders.append('Content-Type', 'application/json')
            myHeaders.append('Authorization', `${auth.token}`)

            const params = new URLSearchParams()
            skip = skip || 0
            limit = limit || 10
            sortOrder = sortOrder || 'desc'

            if (skip !== undefined) params.append('skip', skip.toString())
            if (limit) params.append('limit', limit.toString())
            if (sortOrder) params.append('sortOrder', sortOrder)

            fetch(`${Server}/posts/getFeeds?${params.toString()}`, {
                method: 'GET',
                headers: myHeaders,
            })
                .then(async (response) => {
                    let data = (await response.json()) as {
                        message: string
                        payload: feedsData[]
                    }

                    if (response.status === 200) {
                        const updatedFeeds = data.payload.map((Feeds) => ({
                            ...Feeds,
                            createdOn: new Date(Feeds.createdOn),
                        }))
                        setFeeds(updatedFeeds)
                    } else {
                        dispatch(
                            setAlert({
                                message: 'Error: ' + data.message,
                                severity: 'error',
                            }),
                        )
                    }
                })
                .catch((error) => {
                    console.log('Failed to fetch feeds', error)
                })
        },
        [auth.token, dispatch],
    )

    return {
        feeds,
        setFeeds,
        getFeeds,
    }
}
