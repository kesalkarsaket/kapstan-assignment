import { Box, IconButton, Select, MenuItem, useTheme, Avatar, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Divider from '@mui/material/Divider';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [selectedApp, setSelectedApp] = useState("tic-tac-toe"); // State to manage selected application

  const handleAppChange = (event) => {
    setSelectedApp(event.target.value);
  };

  // Example user data
  const user = {
    name: "John Doe",
    initials: "JD",
    avatarColor: "orange",
  };

  return (
    <><Box display="flex" justifyContent="space-between" alignItems="center" px={2}>
      {/* Applications */}
      <Box>
        <h1>Applications</h1>
        <Select
          value={selectedApp}
          onChange={handleAppChange}
          displayEmpty
          input={<InputBase />}
        >
          <MenuItem value="tic-tac-toe">tic-tac-toe</MenuItem>
          <MenuItem value="chess">chess</MenuItem>
          <MenuItem value="sudoku">sudoku</MenuItem>
            <MenuItem value="lorem">lorem</MenuItem>
            <MenuItem value="ipsem">ipsem</MenuItem>

        </Select>
      </Box>

      {/* User Info */}
      <Box display="flex" alignItems="center">
        {/* Icons */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        {/* Avatar */}
        <Avatar sx={{ bgcolor: user.avatarColor, marginLeft: 1 }}>{user.initials}</Avatar>
        {/* User Name */}
        <Typography variant="body1" ml={1}>{user.name}</Typography>
      </Box>
    </Box><Divider />        <h1>{selectedApp}</h1>
</>
  );
};

export default Topbar;

