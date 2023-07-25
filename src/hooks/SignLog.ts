import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useCallback, useState } from 'react'
import { z } from 'zod'

const schema = z.object({
	Email: z.string().email(),
	Password: z
		.string()
		.min(8, {
			message: 'Password must be at least 8 characters long',
		})
		.max(50, { message: 'Password must be at least 50 characters' }),
})

type loginFormData = z.infer<typeof schema>
const Server = process.env.NEXT_PUBLIC_API_SERVER

export const SignLog = () => {
	const [checked, setChecked] = useState(false)
	const [ShowPassword, setShowPassword] = useState(false)

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setChecked(event.target.checked)
		},
		[]
	)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<loginFormData>({ resolver: zodResolver(schema) })

	const SubmitData = handleSubmit((data) => {
		console.log(data)
	})

	//   const LogInApiCall = async () => {
	//     try {
	//       var myHeaders = new Headers();
	//       myHeaders.append("Content-Type", "application/json");

	//       var raw = JSON.stringify(SubmitData);

	//       const LoginData = await fetch("http://localhost:4000/users/login", {
	//         method: "POST",
	//         headers: myHeaders,
	//         body: raw,
	//         redirect: "follow",
	//       });
	//       console.log(await LoginData.json);
	//     } catch (error) {
	//       console.log(error);
	//     }
	//   };

	//   api integration

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
