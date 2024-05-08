import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

export default function TabsNew({ onTabChange }) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onTabChange) {
      onTabChange(newValue);
    }
  };

  return (
    <Box>
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
          label="Overview"
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
          label="Environmental Variables"
        />
        <Tab
          value="three"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
          icon={<ReportProblemOutlinedIcon />}
          label="Alerts"
        />
        <Tab
          value="four"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
          icon={<HistoryOutlinedIcon />}
          label="Event history"
        />
      </Tabs>
    </Box>
  );
}


