import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import dayjs from 'dayjs';
import client from 'src/services/AxiosService';
import MixedChart from '../../components/MixedChart';
import DataTable from '../../components/DataTable';

export default function ShowData() {
  const [masterList, setMasterList] = useState([]);
  const [chartData, setChartData] = useState([]);

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

  const getMasterList = () =>
    client.get('/').then((res) => {
      setMasterList(res.data);
    });

  const getChartData = () => {
    const dateStrings = masterList.map((i) => dayjs(i.date).format('DD/MM/YYYY'));
    const uniqueDateStrings = new Set(dateStrings);
    const labels = Array.from(uniqueDateStrings).sort();

    const aggregate = {};

    masterList.forEach((row) => {
      const dateString = dayjs(row.date).format('DD/MM/YYYY');
      if (aggregate[dateString]) aggregate[dateString] += row.amt;
      else aggregate[dateString] = row.amt;
    });

    const data = [];
    labels.forEach((l) => data.push({ x: l, y: aggregate[l] }));
    setChartData(data);
  };

  useEffect(() => {
    getMasterList();
  }, []);

  useEffect(() => {
    getChartData();
  }, [masterList]);

  return (
    <>
      <Helmet>
        <title> Show Data </title>
      </Helmet>

      <Container maxWidth="md">
        <MixedChart
          title="Mixed Chart"
          subtitle="Can mix line, column scatter and area plots"
          series={[
            {
              name: 'Line',
              type: 'line',
              fill: 'solid',
              data: chartData,
            },
            {
              name: 'Scatter',
              type: 'scatter',
              data: chartData,
            },
            {
              name: 'Column',
              type: 'column',
              data: chartData,
            },
            {
              name: 'Area',
              type: 'area',
              fill: 'gradient',
              data: chartData,
            },
          ]}
        />

        <DataTable sx={{ mt: 2 }} columns={columns} rows={masterList} />
      </Container>
    </>
  );
}
