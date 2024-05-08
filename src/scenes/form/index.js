// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';

// export default function BasicTextFields() {
//   return (
//     <><Box
//           component="form"
//           sx={{
//               '& > :not(style)': { m: 1, width: '25ch' },
//           }}
//           noValidate
//           autoComplete="off"
//           display='flex'
//       >
//           <h3>Name</h3>
//           <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//           <h3>Value</h3>

//           <TextField id="outlined-basic" label="Outlined" variant="outlined" />

//       </Box><div style={{ display: 'flex' }}>
//               <Button size="small" style={{ background: '#ffffff', color: '#6E27D5' }}> Cancel
//               </Button>
//               <Button size="small" style={{ background: '#6E27D5', color: '#ffffff' }}> Add
//               </Button>
//           </div></>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function BasicTextFields({ onSubmit }) {
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState('');

  const handleAdd = () => {
    onSubmit({ name, value });
    setName('');
    setValue('');
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        display='flex'
      >
        <h3>Name</h3>
        <TextField 
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>Value</h3>
        <TextField 
          id="outlined-basic" 
          label="Outlined" 
          variant="outlined" 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
      <div style={{ display: 'flex' }}>
        <Button 
          size="small" 
          style={{ background: '#ffffff', color: '#6E27D5' }} 
          onClick={() => {
            setName('');
            setValue('');
          }}
        >
          Cancel
        </Button>
        <Button 
          size="small" 
          style={{ background: '#6E27D5', color: '#ffffff' }} 
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>
    </>
  );
}

