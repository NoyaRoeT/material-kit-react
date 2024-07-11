import { Box, Card, CardHeader } from '@mui/material';
import { StyledChart, useChartOptions } from './chart';

const MixedChart = ({ title, subtitle, series, options, ...other }) => {
  const combinedData = [];
  series.forEach((s) => {
    const yValues = s.data.map((i) => i.y);
    combinedData.push(...yValues);
  });
  const maxY = Math.max(...combinedData);

  const chartOptions = useChartOptions({
    fill: {
      type: series.map((i) => i.fill),
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    chart: {
      type: 'line',
    },
    yaxis: {
      max: maxY + 0.1 * maxY,
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subtitle} />

      <Box sx={{ p: 3, pb: 1 }}>
        <StyledChart dir="ltr" series={series} options={chartOptions} width="100%" height={364} />
      </Box>
    </Card>
  );
};

export default MixedChart;
