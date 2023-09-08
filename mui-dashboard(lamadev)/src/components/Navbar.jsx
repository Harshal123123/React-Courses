// import styled from "@emotion/styled";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { InputBase } from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "10px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  // backgroundColor: "white",
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          HARSHAL
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQDX5mlJImFqTRL8j-6HzU6bpIiXhJI3Z-Fdaem4RLg6-bwaLkYiXtQP3afTN515m-82HYVr04XJyzz5To"
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQDX5mlJImFqTRL8j-6HzU6bpIiXhJI3Z-Fdaem4RLg6-bwaLkYiXtQP3afTN515m-82HYVr04XJyzz5To"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
