import { useCallback, useState } from 'react'

interface useSignupProps {
	isChecked: boolean
}

interface FormData {
	email: string
	password: string
	fullname: string
}

const server = process.env.NEXT_PUBLIC_API_SERVER

const singUpApiCall = async (formData: FormData) => {
	try {
		var myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')
		// remove cors

		var raw = JSON.stringify(formData)

		const data = await fetch(`${server}/users/signup`, {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		})

		console.log(await data.json())
	} catch (error) {
		console.log(error)
	}
}

export const useSignUp = ({ isChecked }: useSignupProps) => {
	const [checked, setChecked] = useState(isChecked)

	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
		fullname: '',
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
	}

	const handleSubmit = useCallback(async () => {
		// validate form data
		console.log(formData)

		// full name
		if (formData.fullname.length <= 1) {
			alert('Please enter your full name')
			return
		}

		// email
		if (formData.email.length === 0) {
			alert('Please enter your email')
			return
		}

		if (formData.password.length <= 8) {
			alert('Please enter a valid password (8 characters minimum)')
		}

		await singUpApiCall(formData)
	}, [formData])

	return {
		setChecked,
		handleChange,
		checked,
		formData,
		setFormData,
		handleSubmit,
	}
}
