import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import { ArrowRight, List as Bar } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => setOpen(true);



  return (
    <div>
      <React.Fragment>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <Bar  />
          </IconButton>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box
           pt={3}
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpen(false)}
            onKeyDown={() => setOpen(false)}
          >
            <List>
              <ListItem disablePadding>
              <Link style={{color: "black"}} to="/course-resources">
                <ListItemButton>
                  <ListItemIcon>
                  <ArrowRight  />
                  </ListItemIcon>
                  <ListItemText primary="Training Resources" />
                </ListItemButton>
                </Link>
              </ListItem>
            </List>{" "}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

