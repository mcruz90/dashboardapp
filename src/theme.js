import { createTheme } from "@mui/material";

export const theme = createTheme({
  
    typography: {
        subtitle: {
          fontSize: 16,
          color: "#6D6D6D",
          fontWeight: 400,
          lineHeight: 2,
          
        },
        body: {
            color: '#35303D',
            fontWeight: 200,
        },
        body2: {
            color: '#35303D',
            fontWeight: 200,
        },

        h6: {
            color: '#35303D',
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