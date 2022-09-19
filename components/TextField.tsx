import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import type {} from '@mui/lab/themeAugmentation';
import { createTheme } from '@mui/material';

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export interface FieldProps{
     label1: string,


}

export default function InputAdornments(props: FieldProps) {
     const theme = createTheme({
          components: {
            MuiTimeline: {
              styleOverrides: {
                root: {
                  backgroundColor: 'red',
                },
              },
            },
          },
        });
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const {label1} = props;
  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', color: '#1c1c1c'  }}>
      <div>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
               <InputLabel htmlFor="filled-adornment-amount">{label1}</InputLabel>
               <FilledInput
               id="filled-adornment-amount"
               value={values.amount}
               onChange={handleChange('amount')}
               />
          </FormControl>
      </div>
      
    </Box>
  );
}


