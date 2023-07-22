import { useRouter } from 'next/router'
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

export const useSignUp = ({ isChecked }: useSignupProps) => {
	const [checked, setChecked] = useState(isChecked)

	const [formData, setFormData] = useState<FormData>({
		email: '',
		password: '',
		fullname: '',
	})
	const router = useRouter()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
	}

	const handleSubmit = useCallback(() => {
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

		var myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')
		// remove cors

		var raw = JSON.stringify(formData)

		fetch(`${server}/users/signup`, {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		})
			.then(async (response) => {
				let data = await response.json()

				if (response.status === 200) {
					alert('Account created')
					router.push('/login')
				} else {
					alert(data.message || 'An error occured')
				}
			})
			.catch((error) => console.log('error', error))
	}, [formData, router])

	return {
		setChecked,
		handleChange,
		checked,
		formData,
		setFormData,
		handleSubmit,
	}
}
