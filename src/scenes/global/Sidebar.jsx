import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import Divider from '@mui/material/Divider';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import {
  KeyboardDoubleArrowLeftOutlined,
  AttachMoney,
  BookmarkBorderOutlined,
  InsertLink,
  GridViewOutlined,
} from "@mui/icons-material";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "ffffff",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [divider, setDivider]=useState(true);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${"#37146B"} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <Box paddingLeft={isCollapsed ? undefined : divider ? "0%" : "10%"}>
            <div>
            <Divider sx={{background:'#37146B'}} />

              <Box >
                <Item
                  title="Applications"
                  to="/"
                  icon={<GridViewOutlined />}
                  selected={selected}
                  setSelected={setSelected}
                />

               
                    <Divider sx={{background:'#37146B'}} />

                <Item
                  title="Connections"
                  to="/team"
                  icon={<InsertLink />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Costs"
                  to="/contacts"
                  icon={<AttachMoney />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Security"
                  to="/invoices"
                  icon={<ShieldOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
              <Divider sx={{background:'#37146B'}} />

             
            </div>
          </Box>
        </Menu>
        <Box mt="auto"> {/* This ensures the items are at the bottom */}
          <Menu iconShape="square">
            <Item
              title="Admin"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Docs"
              to="/form"
              icon={<BookmarkBorderOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
                        <Divider sx={{background:'#bf8bff'}} />

             <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.grey[100],
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    // ml="15px"
                  >
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <KeyboardDoubleArrowLeftOutlined />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
          </Menu>
        </Box>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;




