import { createTheme } from "@mui/material";

export const theme = createTheme({
  
    typography: {
        subtitle: {
          fontSize: 16,
          color: "#6D6D6D",
          fontWeight: 400,
          lineHeight: 2,
          
        },
        
        subtitle2: {
            fontSize: 14,
            color: "#6D6D6D",
            lineHeight: 1.5,
            
          },
        body1: {
            color: '#35303D',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            color: '#35303D',
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1.5
        },

        h6: {
            color: '#35303D',
            fontSize: 20,
            fontWeight: 600,
        },
        
        h5: {
            color: '#35303D',
        },
        
        h4: {
            color: '#35303D',
        }
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