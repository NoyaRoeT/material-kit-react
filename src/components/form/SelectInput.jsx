import { TextField, MenuItem } from '@mui/material';

const SelectInput = ({
  id,
  name,
  label,
  options = [],
  value = '',
  placeholder,
  onBlur,
  onChange,
  error = false,
  helperText,
  fullWidth = true,
  disabled,
}) => (
  <TextField
    select
    id={id}
    placeholder={placeholder}
    name={name}
    label={label}
    value={value}
    onBlur={onBlur}
    onChange={onChange}
    error={error}
    helperText={helperText}
    fullWidth={fullWidth}
    InputLabelProps={{ shrink: true }}
    disabled={disabled}
    variant={disabled ? 'filled' : 'outlined'}
  >
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

export default SelectInput;
