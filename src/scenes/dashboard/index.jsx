import { Box,Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React ,{ useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import axios from "axios";
import TabsNew from "../tabs";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import BasicTable from "../eventHistory";
import Overview from "../overview";
import EnvVariables from "../envVariables";
import Alerts from "../alerts";
import EventTab from "../eventHistoryTab";
import BasicCard from "../cards";
import AnchorTemporaryDrawer from "../form";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [applications, setApplications] = useState([]);
  const [cpuUtilization, setCpuUtilization] = useState([]);
  const [memoryUtilization, setMemoryUtilization] = useState([]);
  const [eventHistory, setEventHistory] = useState([]);
  const [selectedTab, setSelectedTab] = useState('one');

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'one':
        return <Overview />;
      case 'two':
        return <EnvVariables />;
      case 'three':
        return <Alerts />;
      case 'four':
        return <EventTab />;
      default:
        return null;
    }
  };


  const CPUContent = () => <div><HighchartsReact highcharts={Highcharts} options={options1} />
  </div>;
const MemoryContent = () => <div><HighchartsReact highcharts={Highcharts} options={options} />
</div>;

 function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Function to render tab content based on selected value
  const renderTabContent = () => {
    switch (value) {
      case 'one':
        return  <CPUContent/>
        ;
      case 'two':
        return  <MemoryContent />
        ;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        variant="scrollable"
        scrollButtons="auto"
        textColor='#121212'
          >
        <Tab
          value="one"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
          icon={<MonitorOutlinedIcon />}
          label="CPU"
        />
        <Tab
          value="two"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
          icon={<BuildOutlinedIcon />}
          label="Memory"
        />
      </Tabs>
      
      {/* Render the tab content */}
      {renderTabContent()}
    </Box>
  );
}

  const options = {
    title: {
      text: "Memory Utilization Over Time",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Time",
      },
    },
    yAxis: {
      title: {
        text: "Memory Utilization",
      },
    },
    series: [
      {
        name: "Memory Utilization",
        data: memoryUtilization.map((item) => [
          parseInt(item.timestamp) * 1000,
          parseFloat(item.memoryUtilization),
        ]),
      },
    ],
  };

  const options1 = {
    title: {
      text: "Cpu Utilization Over Time",
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Time",
      },
    },
    yAxis: {
      title: {
        text: "CPU Utilization",
      },
    },
    series: [
      {
        name: "CPU Utilization",
        data: cpuUtilization.map((item) => [
          parseInt(item.timestamp) * 1000,
          parseFloat(item.cpuUtilization),
        ]),
      },
    ],
  };

  return (
    <Box m="20px">
    <TabsNew onTabChange={setSelectedTab} />
    {renderTabContent()}
    </Box>
  );
}

export default Dashboard;
