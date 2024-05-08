import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

// Dummy components for tab content
const CPUContent = () => <div>CPU Content</div>;
const MemoryContent = () => <div>Memory Content</div>;

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Function to render tab content based on selected value
  const renderTabContent = () => {
    switch (value) {
      case 'one':
        return <CPUContent />;
      case 'two':
        return <MemoryContent />;
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
    
        // indicatorColor='#121212'
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
