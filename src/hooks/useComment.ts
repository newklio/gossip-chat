import { setAlert } from '@gossip/globals/reducers/Alerts'
import { selectAuth } from '@gossip/globals/reducers/auth'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { z } from 'zod'

const commentSchema = z.object({
    comment: z.string(),
    tags: z.array(z.string()),
    id: z.string(),
    createdOn: z.date(),
    commentedBy: z.object({
        fullname: z.string(),
        uid: z.string(),
        image: z.string(),
    }),
})

export type CommentSchema = z.infer<typeof commentSchema>

const Server = process.env.NEXT_PUBLIC_API_SERVER
console.log(Server)

export const useComments = () => {
    const dispatch = useDispatch()

    const auth = useSelector(selectAuth)
    const [postComments, setPostComments] = useState<CommentSchema[]>([])

    const getComment = useCallback(
        async (
            id: string,
            skip?: number,
            limit?: number,
            sortOrder?: 'asc' | 'desc',
        ) => {
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

            fetch(
                `${Server}/posts/comments/getComments/${id}?skip=0&limit=10&sortOrder=asc`,
                {
                    method: 'GET',
                    headers: myHeaders,
                },
            )
                .then(async (response) => {
                    let data = (await response.json()) as {
                        message: string
                        payload: CommentSchema[]
                    }

                    console.log(id)
                    if (response.status === 200) {
                        const updatedComments = data.payload.map((comment) => ({
                            ...comment,
                            createdOn: new Date(comment.createdOn),
                        }))
                        setPostComments(updatedComments)
                        // console.log(updatedComments)
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
                    console.log('Failed to fetch comments', error)
                })
        },
        [auth.token, dispatch],
    )

    return {
        postComments,
        getComment,
    }
}
