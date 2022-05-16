import { createTheme } from "@mui/material";

export const theme = createTheme({
  
    typography: {
        subtitle: {
          fontSize: 14,
          color: "#6D6D6D",
          fontWeight: 400,
          lineHeight: 2,
        },
    },
    palette: {
        primary: {
            main: "#1760a5",
            light: "skyblue"
        },
        secondary:{
            main: "#15c630",
        },
        otherColor:{
            main: "#99999"
        }
    }
})