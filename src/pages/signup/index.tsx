import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Checkbox, Stack, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { myTheme } from '../../theme'
import IconButton from '@mui/material/IconButton'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useSignUp } from '@gossip/hooks/signUp'

const Signup = () => {
	const { checked, handleChange, setChecked, setFormData, handleSubmit } =
		useSignUp({
			isChecked: false,
		})

	return (
		<Stack
			sx={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				p: '48px',
				width: '720px',
				gap: '48px',
				bgcolor: 'white',
				borderRadius: '32px',
				alignItems: 'center',
			}}
		>
			{/* gossip logo */}
			<Image
				src="assets/icons/Gossip.svg"
				alt="logo"
				width={127}
				height={70}
				unoptimized
			/>
			{/* textfield for fullname */}
			<Stack spacing={4}>
				<Stack spacing={1} justifyContent={'flex-start'} width={400}>
					<Stack direction="row" alignItems="center" spacing={0.5}>
						<Typography
							sx={{
								fontSize: '14px',
								lineHeight: '20px',
								fontWeight: 600,
							}}
						>
							Full Name
						</Typography>
						<Typography
							sx={{
								fontSize: '14px',
								lineHeight: '20px',
								fontWeight: 600,
								color: myTheme.color.destructive[500],
							}}
						>
							*
						</Typography>
					</Stack>
					<TextField
						sx={{
							width: '100%',
							height: '40px',
							borderRadius: '6px',
							bgcolor: 'white',
							border: `1px solid ${myTheme.color.neutral[300]}`,
							'& .MuiOutlinedInput-root': {
								fontSize: '14px',
								lineHeight: '20px',
								height: '100%',
								'& fieldset': {
									borderColor: myTheme.color.neutral[300],
								},
								'&:hover fieldset': {
									borderColor: '#E0E0E0',
								},
								'&.Mui-focused fieldset': {
									borderColor: '#E0E0E0',
									border: 'none',
								},
							},
						}}
						variant="outlined"
						onChange={(event) => {
							let fullname = event.target.value as string

							setFormData((prev) => {
								return {
									...prev,
									fullname,
								}
							})
						}}
						placeholder="John Doe"
						InputProps={{
							startAdornment: (
								<Image
									src="assets/icons/login/account.svg"
									alt="fullname"
									width={24}
									height={24}
									unoptimized
									style={{ marginRight: '16px' }}
								/>
							),
						}}
					/>
				</Stack>
				{/* textfield for Email */}
				<Stack spacing={1} justifyContent={'flex-start'} width={400}>
					<Stack direction="row" alignItems="center" spacing={0.5}>
						<Typography
							sx={{
								fontSize: '14px',
								lineHeight: '20px',
								fontWeight: 600,
							}}
						>
							Email
						</Typography>
						<Typography
							sx={{
								fontSize: '14px',
								lineHeight: '20px',
								fontWeight: 600,
								color: myTheme.color.destructive[500],
							}}
						>
							*
						</Typography>
					</Stack>
					<TextField
						onChange={(event) => {
							let email = event.target.value as string

							setFormData((prev) => {
								return {
									...prev,
									email,
								}
							})
						}}
						type="email"
						sx={{
							width: '100%',
							height: '40px',
							borderRadius: '6px',
							bgcolor: 'white',
							border: `1px solid ${myTheme.color.neutral[300]}`,
							'& .MuiOutlinedInput-root': {
								fontSize: '14px',
								lineHeight: '20px',
								height: '100%',
								'& fieldset': {
									borderColor: myTheme.color.neutral[300],
								},
								'&:hover fieldset': {
									borderColor: '#E0E0E0',
								},
								'&.Mui-focused fieldset': {
									borderColor: '#E0E0E0',
									border: 'none',
								},
							},
						}}
						variant="outlined"
						placeholder="john@example.com"
						InputProps={{
							startAdornment: (
								<Image
									src="assets/icons/login/email.svg"
									alt="email"
									width={24}
									height={24}
									unoptimized
									style={{ marginRight: '16px' }}
								/>
							),
						}}
					/>
				</Stack>
				<Stack spacing={1} justifyContent={'flex-start'} width={400}>
					{/* textfield for Password */}

					<Stack direction="row" alignItems="center" spacing={0.5}>
						<Typography
							sx={{
								fontSize: '14px',
								lineHeight: '20px',
								fontWeight: 600,
							}}
						>
							Password
						</Typography>
						<Typography
							sx={{
								fontSize: '14px',
								lineHeight: '20px',
								fontWeight: 600,
								color: myTheme.color.destructive[500],
							}}
						>
							{' '}
							*
						</Typography>
					</Stack>
					<TextField
						onChange={(event) => {
							let password = event.target.value as string

							setFormData((prev) => {
								return {
									...prev,
									password,
								}
							})
						}}
						sx={{
							width: '100%',
							height: '40px',
							fontSize: '14px',
							borderRadius: '6px',
							bgcolor: 'white',
							border: `1px solid ${myTheme.color.neutral[300]}`,
							'& .MuiOutlinedInput-root': {
								fontSize: '14px',
								lineHeight: '20px',
								height: '100%',
								'& fieldset': {
									borderColor: myTheme.color.neutral[300],
								},
								'&:hover fieldset': {
									borderColor: '#E0E0E0',
								},
								'&.Mui-focused fieldset': {
									borderColor: '#E0E0E0',
									border: 'none',
								},
							},
						}}
						variant="outlined"
						type="password"
						placeholder="********"
						InputProps={{
							startAdornment: (
								<Image
									src="assets/icons/login/key.svg"
									alt="key"
									width={24}
									height={24}
									unoptimized
									style={{ marginRight: '16px' }}
								/>
							),
						}}
					/>
				</Stack>
				<Stack
					direction="row"
					alignItems="center"
					spacing={0}
					width={400}
				>
					<Checkbox
						checked={checked}
						onChange={handleChange}
						inputProps={{ 'aria-label': 'controlled' }}
					/>
					<Typography
						sx={{
							fontSize: '14px',
							lineHeight: '20px',
							fontWeight: 400,
							color: myTheme.text.light.active,
							cursor: 'pointer',
						}}
						onClick={() => {
							setChecked(!checked)
						}}
					>
						I agree to all
					</Typography>
					<Button
						variant="text"
						sx={{
							lineHeight: '16px',
							fontWeight: 400,
							fontSize: '14px',
							color: myTheme.color.primary[500],
							textTransform: 'none',
							padding: '4px 8px',
							gap: '8px',
						}}
					>
						Terms & Conditions
					</Button>
				</Stack>
				<Stack
					direction="row"
					alignItems="center"
					padding="8px"
					spacing={2}
					width={400}
				>
					<Button
						disabled={!checked}
						onClick={handleSubmit}
						sx={{
							borderRadius: '999px',
							bgcolor: myTheme.color.primary[500],
							color: myTheme.text.dark.active,
							fontSize: '14px',
							lineHeight: '20px',
							fontWeight: 400,
							width: '217px',
							height: '48px',
							padding: '12px 20px',
							gap: '8px',
						}}
						variant="contained"
					>
						Sign Up
						<ChevronRightIcon />{' '}
					</Button>{' '}
					<Typography
						sx={{
							fontSize: '16px',
							lineHeight: '24px',
							fontWeight: 600,
							color: myTheme.text.light.active,
							cursor: 'pointer',
						}}
					>
						OR
					</Typography>
					<IconButton
						sx={{
							width: '48px',
							height: '48px',
							padding: '10px',
							borderRadius: '999px',
							bgcolor: myTheme.color.primary[50],
						}}
					>
						<Image
							src="assets/icons/login/Google.svg"
							alt="google"
							width={28}
							height={28}
							unoptimized
						/>{' '}
					</IconButton>{' '}
					<IconButton
						sx={{
							width: '48px',
							height: '48px',
							gap: '8px',
							padding: '10px',
							borderRadius: '999px',
							bgcolor: myTheme.color.primary[50],
						}}
					>
						<Image
							src="assets/icons/login/github.svg"
							alt="github"
							width={28}
							height={28}
							unoptimized
						/>
					</IconButton>
				</Stack>{' '}
				<Stack
					direction="row"
					display={'flex'}
					alignItems="center"
					spacing={0}
					width={400}
					justifyContent={'center'}
				>
					<Typography
						sx={{
							fontSize: '14px',
							fontWeight: 400,
							lineHeight: '16px',
							color: myTheme.text.light.active,
						}}
					>
						Already have an account?
					</Typography>

					<Button
						variant="text"
						sx={{
							fontSize: '14px',
							lineHeight: '20px',
							fontWeight: 400,
							color: myTheme.color.primary[500],
							textTransform: 'none',
							gap: '8px',
							padding: '4px 8px',
						}}
					>
						Login
					</Button>
				</Stack>
			</Stack>
		</Stack>
	)
}

export default Signup
