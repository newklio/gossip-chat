import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useState } from 'react'
import { z } from 'zod'
import { useRouter } from 'next/router'

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

export const SignLog = () => {
    const [checked, setChecked] = useState(false)
    const [ShowPassword, setShowPassword] = useState(false)

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
                let LoginData = await response.json()

                // if the response status is 200, we redirect to the login page
                if (response.status === 200) {
                    alert('logged in successfully')

                    router.push('/home')
                }
                // if the response status is 400, we display the error message
                else {
                    alert(LoginData.message || 'An error occured')
                }
            })

            // if the request fails, we log the error
            .catch((error) => console.log('error', error))
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
    }
}
