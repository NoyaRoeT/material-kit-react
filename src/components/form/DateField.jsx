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
  fullWidth,
}) => (
  <DatePicker
    id={id}
    label={label}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    format={format}
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
