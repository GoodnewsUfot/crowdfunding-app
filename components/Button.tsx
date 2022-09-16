import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from '../styles/components-style/Buttons.module.css'
export interface ButtonProps{
     ButtonText: string;
     onClick?: () => void;
     disabled: boolean;
}

export default function BasicButtons(props: ButtonProps) {
   const {ButtonText} = props
  return (
      <Button className={styles.btn} variant="text" onClick={props.onClick}>{ButtonText}</Button>     
  );
}