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


const Overview = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [applications, setApplications] = useState([]);
  const [cpuUtilization, setCpuUtilization] = useState([]);
  const [memoryUtilization, setMemoryUtilization] = useState([]);
  const [eventHistory, setEventHistory] = useState([]);


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

  

  useEffect(() => {
    // Fetch applications data
    axios
      .get("https://retoolapi.dev/71NNjB/applications")
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching applications data:", error);
      });

    // Fetch CPU Utilization data
    axios
      .get("https://retoolapi.dev/Ymxfa2/cpuutilization")
      .then((response) => {
        setCpuUtilization(response.data);
      })
      .catch((error) => {
        console.error("Error fetching CPU Utilization data:", error);
      });

    // Fetch Memory Utilization data
    axios
      .get("https://retoolapi.dev/ybFVVH/memoryutilization")
      .then((response) => {
        console.log(response, "response");
        setMemoryUtilization(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Memory Utilization data:", error);
      });

    // Fetch Event History data
    axios
      .get("https://retoolapi.dev/TYjDIe/eventhistory")
      .then((response) => {
        setEventHistory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Event History data:", error);
      });
  }, []);
  return (
    <Box m="20px">
      {/* GRID & CHARTS */}
      <Box>
        {/* ROW 1 */}

        <Box backgroundColor='#fff8f4'>
          <h1>Service Info</h1>
          <div style={{ display: "flex" }}>
            <div>
              <h3>Current Version</h3>
              <Box display="flex">
                <CheckCircleOutlineIcon color="#00FF00" />
                <h2>In Sync</h2>
              </Box>
            </div>
            <div>
              <h3>Desired Version</h3>
              <h2>1.2.2</h2>
            </div>
          </div>
        </Box>

        {/* ROW 2 */}
        <Box display='flex' flexDirection="row" mt={2} >
  <Box backgroundColor="#fff8f4" mb={4} flexGrow={1} borderRadius={3}>
    <TabsWrappedLabel/>
  </Box>
  <Box backgroundColor="#fff8f4" mb={4} flexGrow={1} ml={4}  borderRadius={3}>
    <Box mt={6} ml={4}>
      <Typography variant="h4">Event History</Typography>
    </Box>
    <BasicTable/>
  </Box>
</Box>
      </Box>
    </Box>
  );
};

export default Overview;
