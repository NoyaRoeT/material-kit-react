import PropTypes from 'prop-types';

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

SelectInput.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })
  ),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
};

export default SelectInput;
