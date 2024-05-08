

import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Box } from '@mui/material';



export default function BasicTable() {
    const [eventHistory, setEventHistory] = useState([]);


    useEffect(() => {
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
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Event</TableCell>
            <TableCell align="left">Version</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <Box height={350}>

          {eventHistory.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='left'>
                {row.event}
              </TableCell>
              <TableCell align="left">{row.version}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
                  </Box>

        </TableBody>
      </Table>
    </TableContainer>
  );
}
