import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Avatar,
  Box,
  IconButton
} from '@mui/material';
import { styled } from '@mui/system';
import {  purple } from '@mui/material/colors';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Text from './Text';

const data = [
  { id: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  { id: '#CM9806', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
];

const statusColors = {
  'In Progress': '#8A8CD9' ,
  'Complete': '#4AA785',
  'Pending': ' #59A8D4',
  'Approved': '#FFC555',
  'Rejected':  '#1C1C1C66',
};

const AvatarCell = styled(TableCell)({
  display: 'flex',
  alignItems: 'center',
});


const PaginationContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '16px',
});

const OrderListTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleFirstPageButtonClick = (event) => {
    setPage(0);
  };

  const handleBackButtonClick = (event) => {
    setPage(page - 1);
  };

  const handleNextButtonClick = (event) => {
    setPage(page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    setPage(Math.max(0, Math.ceil(data.length / rowsPerPage) - 1));
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Order ID</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <AvatarCell>
                  <Avatar sx={{ bgcolor: purple[500], mr: 2 }} />
                  {row.user}
                </AvatarCell>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <Text fontStyleGuide="body2" ellipsis color={`${statusColors[row.status]}`}>{row.status}</Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationContainer>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          <FirstPageIcon />
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <Box>{page + 1}</Box>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
          aria-label="next page"
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
          aria-label="last page"
        >
          <LastPageIcon />
        </IconButton>
      </PaginationContainer>
</>
  );
};

export default OrderListTable;
