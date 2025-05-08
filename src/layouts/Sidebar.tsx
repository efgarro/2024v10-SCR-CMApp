import * as React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { IconButton, Typography, MenuList, MenuItem } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="core_sidebar core_flexCol">
      <Button
        variant="text"
        // color="primary"
        sx={{ color: "primary", my: "1.5rem" }}
        onClick={handleLogout}
        endIcon={<LogoutIcon />}
      >
        Logout
      </Button>
      <Paper
        sx={{ width: "100%", height: "10rem", mb: "1rem" }}
        square
        elevation={0}
      >
        {/* <Typography sx={{ p: "0.5rem" }}>Register Place</Typography> */}
        <MenuItem onClick={() => navigate("/register/place")}>Register Place</MenuItem>
        <Paper>
          <MenuList sx={{ pt: 0, ml: "0.5rem" }}>
            <MenuItem onClick={() => navigate("/register/place/props")}>Properties and Features</MenuItem>
            <MenuItem onClick={() => navigate("/register/place/images")}>Add Images</MenuItem>
          </MenuList>
        </Paper>
      </Paper>
      <Paper
        sx={{ width: "100%", height: "10rem", my: "1rem" }}
        square
        elevation={0}
      >
        <Typography sx={{ p: "0.5rem" }}>Manage</Typography>
      </Paper>
    </div>
  );
};

export default Sidebar;
