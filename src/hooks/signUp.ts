import { useCallback, useState } from 'react'

interface useSignupProps {
	isChecked: boolean
}

export const useSignUp = ({ isChecked }: useSignupProps) => {
	const [checked, setChecked] = useState(isChecked)

	const [formData, setFormData] = useState<{
		email: string
		password: string
		fullname: string
	}>({
		email: '',
		password: '',
		fullname: '',
	})

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
