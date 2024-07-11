import { NumericFormat } from 'react-number-format';

import { InputAdornment, TextField } from '@mui/material';

const NumberInput = ({
  id,
  name,
  label,
  value,
  onBlur,
  onChange,
  disabled = false,
  placeholder,
  thousandSeparator,
  allowNegative = true,
  decimalScale = 2,
  error = false,
  helperText,
  fullWidth = true,
  sx,
  prefix,
}) => (
  <NumericFormat
    id={id}
    name={name}
    label={label}
    value={value}
    onBlur={onBlur}
    onChange={onChange}
    disabled={disabled}
    placeholder={placeholder}
    thousandSeparator={thousandSeparator}
    allowNegative={allowNegative}
    decimalScale={decimalScale}
    error={error}
    helperText={helperText}
    fullWidth={fullWidth}
    customInput={TextField}
    InputLabelProps={{ shrink: true }}
    InputProps={{
      type: 'number',
      startAdornment: <InputAdornment position="start">{prefix}</InputAdornment>,
    }}
    variant={disabled ? 'filled' : 'outlined'}
    sx={sx}
  />
);

export default NumberInput;
