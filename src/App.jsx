import { useMemo, useState } from "react";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
          background: {
            default: isDarkMode ? "blue" : "green",
          },
        },
      }),
    [isDarkMode]
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Button variant="contained" color="primary" onClick={toggleTheme}>
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </Button>
        <Typography color={"ActiveBorder"}>Hello</Typography>
      </Box>
    </ThemeProvider>
  );
};

export default App;
