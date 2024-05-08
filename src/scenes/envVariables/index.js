import { Box,Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React ,{ useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import axios from "axios";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import BasicTable from "../eventHistory";
import BasicCard from "../cards";


const EnvVariables = () => {
  const theme = useTheme();
  return (
    <Box m="20px">
    <Box>
        <BasicCard/>
      </Box>
    </Box>
  );
};

export default EnvVariables;
