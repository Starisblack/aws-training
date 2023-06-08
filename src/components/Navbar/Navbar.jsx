import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../assets/aws.png";
import { Link } from "react-router-dom";
import PersistentDrawerLeft from "../SideDrawer";

const Navbar = () => {
  const theme = useTheme()

  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%", bgcolor: "#FFBD59" }}>
      <Stack sx={{px: onlyMediumScreen ? "5%" : 0 }} direction="row" justifyContent={onlyMediumScreen ? "space-between" : "space-around"} alignItems="center">
       
          <Link to="/">
          <Stack direction="row" spacing={0.2} alignItems={"center"}>
            <Box height="64px" width="64px">
              <img
                style={{ height: "100%", width: "100%" }}
                src={Logo}
                alt="aws training"
              />
            </Box>

            <Typography
              variant="h1"
              sx={{ color: "white", fontWeight: 600, fontSize: "30px" }}
            >
              Training
            </Typography>
            </Stack>
          </Link>
       
       {!onlyMediumScreen && <Link to="/course-resources">Training Resources</Link>}
       {onlyMediumScreen && <PersistentDrawerLeft />}
      </Stack>
    </Box>
  );
};

export default Navbar;
