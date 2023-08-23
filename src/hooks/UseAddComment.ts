import { setAlert } from '@gossip/globals/reducers/Alerts'
import { selectAuth } from '@gossip/globals/reducers/auth'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { z } from 'zod'

const addCommentSchema = z.object({
    comment: z
        .string()
        .min(3, {
            message: 'caption must be at least 3 characters long',
        })
        .max(500, {
            message: 'caption must be at most 500 characters long',
        }),
    tags: z.array(z.string().min(10)).max(50).optional(),
})

type addCommentSchemaType = z.infer<typeof addCommentSchema>
const Server = process.env.NEXT_PUBLIC_API_SERVER

export const useCreateComment = () => {
    const [comment, setComment] = useState<addCommentSchemaType>()
    const auth = useSelector(selectAuth)
    const dispatch = useDispatch()

    const addComment = useCallback(
        async (
            id: string,
            callback?: () => void,
            errorCallback?: () => void,
        ) => {
            console.log(comment)

            var myHeaders = new Headers()
            myHeaders.append('Content-Type', 'application/json')
            myHeaders.append('Authorization', `${auth.token}`)
            var raw = JSON.stringify(comment)
            console.log(raw, myHeaders, auth.token)
            fetch(`${Server}/posts/comments/addComment/${id}`, {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            })
                .then(async (response) => {
                    console.log(response)
                    // we parse the response body
                    let newComment = await response.json()

                    if (response.status === 200) {
                        dispatch(
                            setAlert({
                                severity: 'success',
                                message: 'Post created successfully',
                            }),
                        )

                        callback && callback()

                        console.log(newComment)
                    } else {
                        console.log(newComment.message || 'An error occured')
                        errorCallback && errorCallback()

                        dispatch(
                            setAlert({
                                severity: 'error',
                                message:
                                    newComment.message || 'An error occured',
                            }),
                        )
                    }
                })
                .catch((error) => console.log('error', error))
        },
        [auth.token, dispatch, comment],
    )

    return {
        addComment,
        comment,
        setComment,
    }
}
