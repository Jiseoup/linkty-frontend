import { InputLabel, Select, MenuItem } from '@mui/material';

import { DropdownForm } from './styled';

function Dropdown({
  label = null,
  value,
  onChange,
  options,
  size = 'small',
  fullWidth = true,
}) {
  return (
    <DropdownForm size={size} fullWidth={fullWidth}>
      {/* Dropdown label text. */}
      <InputLabel>{label}</InputLabel>

      {/* Dropdown default value and items. */}
      <Select label={label} value={value} onChange={onChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </DropdownForm>
  );
}

export default Dropdown;
