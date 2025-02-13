import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css";
import MainRouter from "./mainRouter";
// import { createTheme } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#5932ea',
      },
    },
  });

  // const defaultTheme = createTheme();
	return (
		<ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{
          margin: '0 !important',
          padding: '0 !important',
          minWidth: '100%',
          minHeight: '100vh',
        }}
      >
			  <MainRouter />
      </Container>
		</ThemeProvider>
	);
}

export default App;
