import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/router'
import useAlert from './useAlert'
import { useDispatch } from 'react-redux'
import { login } from '@gossip/globals/reducers/auth'
import { User } from '@gossip/types/users'

const schema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, {
            message: 'Password must be at least 8 characters long',
        })
        .max(50, { message: 'Password must be at least 50 characters' }),
})

type loginFormData = z.infer<typeof schema>

const Server = process.env.NEXT_PUBLIC_API_SERVER
console.log(Server)

export const useLogin = () => {
    const [checked, setChecked] = useState(false)
    const [ShowPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const { openAlert } = useAlert()

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
    } = useForm<loginFormData>({ resolver: zodResolver(schema) })

    const router = useRouter()

    const SubmitData = handleSubmit((formData) => {
        console.log(formData)

        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        var raw = JSON.stringify(formData)

        fetch(`${Server}/onboarding/login`, {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        })
            .then(async (response) => {
                // we parse the response body
                let LoginData = (await response.json()) as {
                    message: string
                    payload: {
                        accessToken: string
                        user: User
                    }
                }

                // if the response status is 200, we redirect to the login page
                if (response.status === 200) {
                    openAlert('Logged In Successfully', 'success')
                    console.log(LoginData)
                    dispatch(
                        login({
                            token: LoginData.payload.accessToken,
                            user: LoginData.payload.user,
                        }),
                    )
                    router.push('/home')
                }
                // if the response status is 400, we display the error message
                else {
                    openAlert(
                        LoginData.message || 'Something went wrong',
                        'error',
                    )
                }
            })

            // if the request fails, we log the error
            .catch((error) => {
                openAlert(error.message, 'error')
                console.log(error)
            })
    })

    return {
        register,
        handleSubmit,
        formState: { errors },
        checked,
        setChecked,
        handleChange,
        SubmitData,
        ShowPassword,
        setShowPassword,
        router,
    }
}
