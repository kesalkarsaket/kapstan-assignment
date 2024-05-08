

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import TextField from '@mui/material/TextField';
// import BasicTextFields from '../form';


// export default function BasicCard() {
//   const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const drawerContent = (
//     <div>
//       <BasicTextFields/>
//     </div>
//   );

//   return (
//     <Card sx={{ minWidth: 1 }}>
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <h2>Environmental Variables</h2>
//         <CardActions>
//           <div style={{ display: 'flex' }}>
//             <Button size="small" endIcon={<AddOutlinedIcon />} onClick={toggleDrawer}>
//             </Button>
//             <Button size="small" endIcon={<FileDownloadOutlinedIcon />} />
//           </div>
//         </CardActions>
//       </div>
//       <Card sx={{ minWidth: 1 }}>
//         {/* add the  form details here  */}
//         </Card>

//       <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
//         {drawerContent}
//       </Drawer>
//     </Card>
//   );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import BasicTextFields from '../form';

export default function BasicCard() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [formData, setFormData] = React.useState([]);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleAddData = (data) => {
    setFormData([...formData, data]);
  };

  const handleRemoveData = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const drawerContent = (
    <div>
      <BasicTextFields onSubmit={handleAddData} />
    </div>
  );

  return (
    <Card sx={{ minWidth: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Environmental Variables</h2>
        <CardActions>
          <div style={{ display: 'flex' }}>
            <Button size="small" endIcon={<AddOutlinedIcon />} onClick={toggleDrawer}>
              Add
            </Button>
            <Button size="small" endIcon={<FileDownloadOutlinedIcon />} />
          </div>
        </CardActions>
      </div>
      <div>
        {formData.map((data, index) => (
          <Card key={index} sx={{ minWidth: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemText primary={data.name} secondary={data.value} />
              <Button onClick={() => handleRemoveData(index)}>Remove</Button>
            </div>
          </Card>
        ))}
      </div>
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </Card>
  );
}

