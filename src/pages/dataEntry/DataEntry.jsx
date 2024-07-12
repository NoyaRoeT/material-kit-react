import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import dayjs from 'dayjs';
import DataEntryForm from './DataEntryForm';
import DataTable from '../../components/DataTable';
import Service from '../../services/AxiosService';

const columns = [
  { field: 'name', headerName: 'Name', width: 300 },
  {
    field: 'qty',
    headerName: 'Quantity',
    width: 125,
  },
  {
    field: 'amt',
    headerName: 'Amount',
    width: 125,
    renderCell: (params) => `$${params.value}`,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 125,
    renderCell: (params) => {
      const date = params.value ? dayjs(params.value) : null;
      return date.format('DD/MM/YYYY');
    },
  },

  {
    field: 'type',
    headerName: 'Type',
    width: 150,
  },
];

export default function DataEntry() {
  const [tableData, setTableData] = useState([]);

  const getTableData = () =>
    Service.client.get('/').then((res) => {
      setTableData(res.data);
    });

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <>
      <Helmet>
        <title> Data Entry </title>
      </Helmet>

      <Container maxWidth="lg">
        <DataEntryForm onSubmit={getTableData} />

        <DataTable sx={{ mt: 2 }} columns={columns} rows={tableData} />
      </Container>
    </>
  );
}
