import React, { useState } from "react";
import { Stack, Typography, TextField, Button, Checkbox } from "@mui/material";
import Image from "next/image";
import { myTheme } from "../../theme";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { Schema, z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from '@mui/icons-material'




const schema = z.object({
  Email: z.string().email(),
  Password: z.string().min(8,{
    message: "Password must be at least 8 characters long",
  }).max(50,{ message : "Password must be at least 50 characters",
}),
})
// const schema = z.object({
//   Email: z.string().email(),
//   Password: z.string().min(8).max(50),
// });

type loginFormData=z.infer<typeof schema>

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({ resolver: zodResolver(schema) });
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const SubmitData = handleSubmit((data)=> {
    console.log(data);
  })
 
  const[ShowPassword,setShowPassword]=useState(false)

  return (
    <form onSubmit={SubmitData}>
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          px: "48px",
          py: "40px",
          width: "720px",
          padding: "48px",
          alignItems: "center",
          gap: "48px",
          borderRadius: "32px",
          bgcolor: "white",
        }}
      >
        {/* logo */}
        <Image
          src="/assets/icons/Gossip.svg"
          alt="logo"
          width={127}
          height={72}
          unoptimized
        />
        {/* logo closed */}

        {/* email input */}
        <Stack spacing={1} justifyContent={"flex-start"} width={400}>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            {/* label*/}
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "20px",
              }}
            >
              Email
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "20px",
                color: myTheme.color.destructive[500],
                // color:'#EF4444'
              }}
            >
              *
            </Typography>
          </Stack>
          {/* input */}
          <TextField
            sx={{
              width: "100%",
              height: "40px",
              borderRadius: "6px",
              bgcolor: "#FFF",
              border: "1px solid neutral[300]",
              "& .MuiOutlinedInput-root": {
                fontSize: "14px",
                lineHeight: "20px",
                height: "100%",
                "& fieldset": {
                  borderColor: myTheme.color.neutral[300],
                },
                "&:hover fieldset": {
                  borderColor: "#E0E0E0",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E0E0E0",
                  border: "none",
                },
              },
            }}
            variant="outlined"
            placeholder="john@example.com"
            type="email"
            {...register("Email")}
			error={Boolean(errors.Email?true:false)}
            helperText={errors.Email?.message}
            InputProps={{
              startAdornment: (
                <Image
                  src="/assets/icons/login/email.svg"
                  alt="email"
                  width={24}
                  height={24}
                  unoptimized
                  style={{ marginRight: "16px" }}
                />
              ),
            }}
          ></TextField>
        </Stack>
        {/* email closed*/}
        {/* password  */}
        <Stack spacing={1} justifyContent={"flex-start"} width={400}>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            {/* label*/}
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "20px",
              }}
            >
              Password
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "20px",
                color: myTheme.color.destructive[500],
                // color:'#EF4444'
              }}
            >
              *
            </Typography>
          </Stack>
          {/* input */}
          <TextField
            sx={{
              width: "100%",
              height: "40px",
              borderRadius: "6px",
              bgcolor: "#FFF",
              border: "1px solid neutral[300]",
              "& .MuiOutlinedInput-root": {
                fontSize: "14px",
                lineHeight: "20px",
                height: "100%",
                "& fieldset": {
                  borderColor: myTheme.color.neutral[300],
                },
                "&:hover fieldset": {
                  borderColor: "#E0E0E0",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#E0E0E0",
                  border: "none",
                },
              },
            }}
            variant="outlined"
            placeholder="********"
            type={
              ShowPassword? "text" : "password"
            }
            {...register("Password")}
            helperText={errors.Password?.message}
			      error={Boolean(errors.Password)}
            InputProps={{
              startAdornment: (
                <Image
                  src="/assets/icons/login/key.svg"
                  alt="key"
                  width={24}
                  height={24}
                  unoptimized
                  style={{ marginRight: "16px" }}
                />
              ),
              endAdornment: (
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!ShowPassword)
                                }
                              >
                               {ShowPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
              ),
            }}
          ></TextField>
        </Stack>
        {/* password closed */}
        {/* Remeber me in checkbox */}
        <Stack spacing={1} alignItems={"center"} direction={"row"} width={400}>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            sx={{ width: "24px", height: "24px", borderRadius: "10px" }}
          />
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: 400,
              color: myTheme.text.light.active,
              cursor: "pointer",
            }}
            onClick={() => {
              setChecked(!checked);
            }}
          >
            Remember Me
          </Typography>
        </Stack>
        {/* checkbox closed */}
        {/* actions button */}
        <Stack direction="row" alignItems="center" spacing={2} width={400}>
          {/* login button */}
          <Button
            sx={{
              borderRadius: "999px",
              bgcolor: myTheme.color.primary[500],
              color: myTheme.text.dark.active,
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              width: 217,
              height: 48,
            }}
            variant="contained"
            type="submit"
          >
            Log in
            <ChevronRightIcon />
          </Button>

          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              color: myTheme.text.light.active,
              cursor: "pointer",
            }}
          >
            OR
          </Typography>
          {/* different login methods button*/}
          {/* google button */}
          <IconButton
            sx={{
              width: 48,
              height: 48,
              borderRadius: "999px",
              bgcolor: myTheme.color.primary[50],
            }}
          >
            <Image
              src="/assets/icons/login/Google.svg"
              alt="google"
              width={28}
              height={28}
              unoptimized
            />
          </IconButton>

          {/* github button */}
          <IconButton
            sx={{
              width: 48,
              height: 48,
              borderRadius: "999px",
              bgcolor: myTheme.color.primary[50],
            }}
          >
            <Image
              src="/assets/icons/login/github.svg"
              alt="github"
              width={28}
              height={28}
              unoptimized
            />
          </IconButton>
          {/* different login methods button closed*/}
        </Stack>
        {/* action buttton closed */}

        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          width={400}
          justifyContent={"center"}
        >
          <Typography
            sx={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              color: myTheme.text.light.active,
            }}
          >
            New here? Create an account.
          </Typography>

          <Button
            variant="text"
            sx={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              color: myTheme.color.primary[500],
              textTransform: "none",
            }}
          >
            Sign up
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};

export default LoginPage;
