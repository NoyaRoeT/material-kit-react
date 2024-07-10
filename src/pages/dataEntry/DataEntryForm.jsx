import * as yup from 'yup';
import { useFormik } from 'formik';

import { Grid, Button, Container, Typography } from '@mui/material';

import dayjs from 'dayjs';

import DateInput from 'src/components/form/DateInput';
import TextInput from 'src/components/form/TextInput';
import NumberInput from 'src/components/form/NumberInput';
import SelectInput from 'src/components/form/SelectInput';

import client from '../../services/AxiosService';

export default function DataEntryForm() {
  const currencyOptions = [
    { label: 'US Dollars', value: 1 },
    { label: 'SG Dollars', value: 2 },
    { label: 'NX Cash', value: 3 },
  ];

  const initialValues = {
    name: '',
    qty: 0,
    price: 0,
    date: dayjs(),
    type: '',
  };

  const validationSchema = yup.object({
    name: yup.string('Must be a string').required('This field is required'),
    qty: yup
      .number('Must be a number')
      .min(0, 'Must be non-negative')
      .required('This field is required'),
    price: yup
      .number('Must be a number')
      .min(0, 'Must be non-negative')
      .required('This field is required'),
    type: yup.mixed().required('This field is required'),
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
        Data Entry
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextInput
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
          <DateInput
            label="Date"
            name="date"
            onChange={(value) => formik.setFieldValue('date', value)}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NumberInput
            name="qty"
            label="Quantity"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.qty}
            error={formik.touched.qty && Boolean(formik.errors.qty)}
            helperText={formik.touched.qty && formik.errors.qty}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <NumberInput
            name="price"
            label="Price"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.price}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
            fullWidth
            prefix="$"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectInput
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
      </Grid>

      <Button variant="contained" sx={{ mt: 3 }} onClick={() => formik.handleSubmit()}>
        Submit
      </Button>
    </Container>
  );
}
