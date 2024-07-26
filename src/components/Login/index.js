import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import DraftsIcon from "@mui/icons-material/Drafts";
import HttpsIcon from '@mui/icons-material/Https';
import Typography from "@mui/material/Typography";
import { InputAdornment } from "@mui/material";

export default function LogIn() {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					background: "#fff",
					maxWidth: "500px",
					padding: "100px",
					borderRadius: "30px",
					boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 15px",
				}}
			>
				<Typography component="h1" variant="h4">
					Welcome Back!
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<DraftsIcon />
								</InputAdornment>
							),
						}}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<HttpsIcon />
								</InputAdornment>
							),
						}}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
						sx={{ float: 'right', mr: 0 }}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{
							mt: 1,
							mb: 2,
							padding: "7px 0",
							fontSize: "20px",
							backgroundColor: "primary",
						}}
					>
						SIGN IN
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
