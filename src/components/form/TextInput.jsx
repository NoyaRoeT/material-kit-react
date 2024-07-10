import { TextField } from '@mui/material';

const TextInput = ({
  id,
  name,
  label,
  disabled,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  fullWidth,
}) => (
  <TextField
    id={id}
    InputLabelProps={{ shrink: true }}
    name={name}
    label={label}
    disabled={disabled}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    error={error}
    helperText={helperText}
    fullWidth={fullWidth}
    variant={disabled ? 'filled' : 'outlined'}
  />
);
export default TextInput;
