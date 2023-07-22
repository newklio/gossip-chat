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

	// this function handles the form submission
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
		// password
		if (formData.password.length <= 8) {
			alert('Please enter a valid password (8 characters minimum)')
		}

		// creating headers for the request where we specify the content type as json
		var myHeaders = new Headers()
		myHeaders.append('Content-Type', 'application/json')

		var raw = JSON.stringify(formData)

		// sending the request to the server
		fetch(`${server}/users/signup`, {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		})
			// if the request is successful, we redirect to the login page
			.then(async (response) => {
				// we parse the response body
				let data = await response.json()

				// if the response status is 200, we redirect to the login page
				if (response.status === 200) {
					alert('Account created')
					router.push('/login')
				}
				// if the response status is 400, we display the error message
				else {
					alert(data.message || 'An error occured')
				}
			})

			// if the request fails, we log the error
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
