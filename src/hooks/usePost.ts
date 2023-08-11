import { selectAuth } from '@gossip/globals/reducers/auth'
import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { z } from 'zod'

// input pust body schema
const createPostSchema = z.object({
    caption: z
        .string()
        .min(3, {
            message: 'caption must be at least 3 characters long',
        })
        .max(500, {
            message: 'caption must be at most 500 characters long',
        }),
    body: z.string().min(10).max(1000).optional(),
    tags: z.array(z.string().min(10)).max(50).optional(),
    originalPostId: z.string().max(40).optional(),
})

type CreatePostSchemaType = z.infer<typeof createPostSchema>
const Server = process.env.NEXT_PUBLIC_API_SERVER

export const Post = () => {
    const [post, setPost] = useState<CreatePostSchemaType>()
    const auth = useSelector(selectAuth)

    const CreatePost = useCallback(async () => {
        console.log(post)

        var myHeaders = new Headers()
        // add authorization header
        myHeaders.append('Content-Type', 'application/json')
        myHeaders.append('Authorization', `${auth.token}`)
        var raw = JSON.stringify(post)
        console.log(raw, myHeaders, auth.token)
        fetch(`${Server}/posts/createPost`, {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        })
            .then(async (response) => {
                console.log(response)
                // we parse the response body
                let NewPost = await response.json()

                if (response.status === 200) {
                    alert('Post Created successfully')

                    console.log(NewPost)
                } else {
                    alert(NewPost.message || 'An error occured')
                }
            })
            .catch((error) => console.log('error', error))
    }, [auth.token, post])

    return {
        CreatePost,
        post,
        setPost,
    }
}
