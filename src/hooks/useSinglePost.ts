import { useDispatch, useSelector } from 'react-redux'
import { z } from 'zod'
import useAlert from './useAlert'
import { selectAuth } from '@gossip/globals/reducers/auth'
import { useCallback, useState } from 'react'
import { setAlert } from '@gossip/globals/reducers/Alerts'
import { SingleFeedprop } from '@gossip/types/Singlefeed'

const useSinglePostSchema = z.object({
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
})

export type SinglePostData = z.infer<typeof useSinglePostSchema>

const Server = process.env.NEXT_PUBLIC_API_SERVER
console.log(Server)

export const useSinglePost = () => {
    const dispatch = useDispatch()

    const auth = useSelector(selectAuth)
    const [singlePost, setSinglePost] = useState<SinglePostData | null>(null)

    const getSinglePost = useCallback(
        async (id: String) => {
            var myHeaders = new Headers()
            myHeaders.append('Content-Type', 'application/json')
            myHeaders.append('Authorization', `${auth.token}`)

            fetch(`${Server}/posts/getPost/${id}`, {
                method: 'GET',
                headers: myHeaders,
            })
                .then(async (response) => {
                    let data = (await response.json()) as {
                        message: string
                        payload: SinglePostData
                    }

                    if (response.status === 200) {
                        data.payload.createdOn = new Date(
                            data.payload.createdOn,
                        )
                        setSinglePost(data.payload)
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
                    console.log('Failed to create', error)
                })
        },
        [auth.token, dispatch],
    )

    return {
        singlePost,
        setSinglePost,
        getSinglePost,
    }
}
