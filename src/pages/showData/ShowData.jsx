import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import dayjs from 'dayjs';
import LineChart from '../../components/LineChart';
import DataTable from '../../components/DataTable';
import client from 'src/services/AxiosService';

export default function ShowData() {
  const [masterList, setMasterList] = useState([]);
  const [chartData, setChartData] = useState({});

  const columns = [
    { field: 'name', headerName: 'Name', width: 90 },
    {
      field: 'qty',
      headerName: 'Quantity',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
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
      if (aggregate[dateString]) aggregate[dateString] += row.price;
      else aggregate[dateString] = row.price;
    });

    const data = [];
    labels.forEach((l) => data.push(aggregate[l]));

    setChartData({ labels, data });
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
        <title> Output Page </title>
      </Helmet>

      <Container maxWidth="xl">
        <LineChart
          title="Test Header"
          subheader="Test Subheader"
          chart={{
            labels: chartData.labels,
            series: [
              {
                name: 'Price over time',
                type: 'area',
                fill: 'gradient',
                data: chartData.data,
              },
            ],
          }}
        />

        <DataTable columns={columns} rows={masterList} />
      </Container>
    </>
  );
}
