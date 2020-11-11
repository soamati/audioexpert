import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MuiSelect from "@material-ui/core/Select";
import { Controller } from "react-hook-form";

const Select = ({
  name,
  label,
  control,
  defaultValue,
  children,
  helper,
  ...props
}) => {
  const labelId = `${name}-label`;

  return (
    <FormControl {...props} fullWidth variant="outlined">
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        as={
          <MuiSelect labelId={labelId} label={label}>
            {children}
          </MuiSelect>
        }
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
      <FormHelperText>{helper}</FormHelperText>
    </FormControl>
  );
};
export default Select;
