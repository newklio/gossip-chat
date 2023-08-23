import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useEffect, useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/router'
import useAlert from './useAlert'
import { useSelector } from 'react-redux'
import { selectAuth } from '@gossip/globals/reducers/auth'

const schema = z.object({
    email: z.string().email(),
    fullname: z
        .string()
        .min(2, { message: 'Username must be at least 2 character long' })
        .max(50, { message: 'Username must be at most 50 characters long' }),
    password: z
        .string()
        .min(8, {
            message: 'Password must be at least 8 characters long',
        })
        .max(50, { message: 'Password must be at most 50 characters' }),
})

type SignInFormData = z.infer<typeof schema>

const Server = process.env.NEXT_PUBLIC_API_SERVER
console.log(Server)

export const Signpage = () => {
    const [checked, setChecked] = useState(true)
    const [ShowPassword, setShowPassword] = useState(false)

    const { openAlert } = useAlert()

    const auth = useSelector(selectAuth)

    const handleChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked)
        },
        [],
    )

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({ resolver: zodResolver(schema) })

    const router = useRouter()

    const SubmitData = handleSubmit((formdata) => {
        console.log(formdata)

        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        var raw = JSON.stringify(formdata)
        fetch(`${Server}/onboarding/signup`, {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        })
            .then(async (response) => {
                // we parse the response body
                let SigninData = await response.json()

                if (response.status === 200) {
                    alert('Account Created successfully')

                    router.push('/login')
                } else {
                    alert(SigninData.message || 'An error occured')
                }
            })
            .catch((error) => console.log('error', error))
    })

    useEffect(() => {
        if (auth.authenticated) {
            router.push('/home')
            openAlert('user Logged in successfully', 'success')
        }
    }, [auth.authenticated, router, openAlert])
    return {
        handleChange,
        SubmitData,
        register,
        handleSubmit,
        formState: { errors },
        checked,
        setChecked,
        ShowPassword,
        setShowPassword,
        router,
    }
}
