import {Stack } from "@mui/material"
import Navbar from "../components/Navbar/Navbar"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
    <Stack spacing={5} sx={{width: "100%"}}>
      <Navbar />
         <Stack  sx={{height: "100%", flexGrow: 1, pb: "5%"}}>
          {children}
         </Stack>
    </Stack>
    </>
  )
}

export default Layout