import { DatePicker } from '@mui/x-date-pickers';

const DateField = ({
  id,
  label,
  name,
  onChange,
  onBlur,
  value,
  format = 'DD/MM/YYYY',
  error,
  helperText,
}) => (
  <DatePicker
    label="Date"
    name="date"
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    format="DD/MM/YYYY"
    slotProps={{
      textField: {
        error,
        helperText,
        InputLabelProps: { shrink: true },
      },
    }}
  />
);

export default DateField;
