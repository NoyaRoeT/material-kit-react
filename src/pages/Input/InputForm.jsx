import * as yup from 'yup';
import { useFormik } from 'formik';

import { Grid, Button, Container, TextField, Typography } from '@mui/material';
import DateField from 'src/components/form/DateField';

import dayjs from 'dayjs';

import NumberField from 'src/components/form/NumberField';
import SelectField from 'src/components/form/SelectField';

import client from '../../services/AxiosService';

export default function InputPage() {
  const currencyOptions = [
    { label: 'US Dollars', value: 1 },
    { label: 'SG Dollars', value: 2 },
    { label: 'NX Cash', value: 3 },
  ];

  const initialValues = {
    name: '',
    type: '',
    amount: 0,
    date: dayjs(),
  };

  const validationSchema = yup.object({
    name: yup.string('Must be a string').required('This field is required'),
    amount: yup.number('Number field must contain a number').required('This field is required'),
    type: yup.number('Must be a number').required('This field is required'),
    date: yup
      .mixed()
      .test('is-dayjs', 'Date is not valid', (value) => dayjs.isDayjs(value) && value.isValid()),
  });

  const handleSubmit = (values) => {
    const data = {
      ...values,
      date: values.date.toDate(),
    };

    client.post('/', data).then((res) => console.log(res.data));
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Input 👋
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            InputLabelProps={{ shrink: true }}
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NumberField
            name="amount"
            label="Amount"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.amount}
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            label="Type"
            name="type"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.type}
            error={formik.touched.type && Boolean(formik.errors.type)}
            helperText={formik.touched.type && formik.errors.type}
            options={currencyOptions}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <DateField
            label="Date"
            name="date"
            onChange={(value) => formik.setFieldValue('date', value)}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
        </Grid>
      </Grid>

      <Button variant="contained" sx={{ mt: 3 }} onClick={() => formik.handleSubmit()}>
        Submit
      </Button>
    </Container>
  );
}
