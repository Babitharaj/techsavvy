import React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import LogIn from "../../components/Login";


function Login() {
	return (
		<Stack
			sx={{
				background: "linear-gradient(white,pink,rgba(0, 179, 255, 0.751))",
				minHeight: "100vh",
				minWidth: "100%",
			}}
		>
			<Typography component="h1" variant="h2" textAlign="center">
				TECHSAVVY
			</Typography>
			<LogIn />
		</Stack>
	);
}

export default Login;
