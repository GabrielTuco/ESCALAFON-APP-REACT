import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const SelectCustom = ({ label, name, opts = [], value, onChange, required, disabled, fullWidth = true, flex = 1 }) => {
  return (
    <FormControl size="small" fullWidth={fullWidth} sx={{ flex: flex, minWidth: '150px', mt: 2, mb: 1 }} required={required}>
      <InputLabel required={required} color='secondary' size="small" id="select">{label}</InputLabel>
      <Select
        autoComplete="nope"
        size="small"
        label={label}
        name={name}
        value={opts.some((e) => { return e.value == value }) ? value : ''}
        onChange={onChange}
        color='secondary'
        defaultValue={''}
        required={required}
        disabled={disabled}
        sx={{ textAlign: 'left' }}
      >

        {
          opts.map((e, i) => (
            <MenuItem color='secondary' key={`menuitem+${i}`} value={e.value}>{e.label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}