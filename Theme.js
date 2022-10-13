import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#dc457b",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f0b9dd",
      contrastText: "#000",
    },
    background: {
     paper: "#fbf3ab",
    },
  },
});

export default theme;
