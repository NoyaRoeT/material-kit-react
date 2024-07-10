import { DatePicker } from '@mui/x-date-pickers';

const DateInput = ({
  id,
  label,
  name,
  onChange,
  onBlur,
  value,
  format = 'DD/MM/YYYY',
  error,
  helperText,
  disabled = false,
  fullWidth = false,
}) => (
  <DatePicker
    label={label}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    format={format}
    disabled={disabled}
    slotProps={{
      textField: {
        error,
        helperText,
        InputLabelProps: { shrink: true },
        variant: disabled ? 'filled' : 'outlined',
        fullWidth,
        id,
      },
    }}
  />
);

export default DateInput;
