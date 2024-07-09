import { Container } from '@mui/material';
import DataTable from 'src/components/DataTable';
import LineChart from 'src/components/LineChart';
import { labels, data } from 'src/mock/chartData';
import { rows, columns } from '../../mock/tableData';

// ----------------------------------------------------------------------

export default function OutputPage() {
  return (
    <Container maxWidth="xl">
      <LineChart
        title="Test Header"
        subheader="Test Subheader"
        chart={{
          labels,
          series: [
            {
              name: 'Team B',
              type: 'area',
              fill: 'gradient',
              data,
            },
            {
              name: 'Team A',
              type: 'area',
              fill: 'gradient',
              data: data.map((d) => -d),
            },
          ],
        }}
      />
      <DataTable columns={columns} rows={rows} checkboxSelection />
    </Container>
  );
}
