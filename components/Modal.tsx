import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { blue } from '@mui/material/colors';
import styled from 'styled-components';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import { IconButton } from '@mui/material';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '1px solid #fff',
  boxShadow: 24,
};

const HighlightOff = {
     mr: 4,
     color: '#fff',
};

export interface Modalprops{
     modalContent: JSX.Element;
     headerText: string;
     handleOpen: boolean;
     open: boolean;
     setOpen: boolean;
     handleClose: () => void;
}

export default function BasicModal(props: Modalprops) {
     const {headerText, modalContent}= props;
     // const [open,setOpen] = useState(false);
     // const handleClose = () => setOpen(false);
     
     

  return (
    <div>
      
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
        <Header> 
          <HeaderText>
               <Typography id="modal-modal-title" variant="h6" component="h2">
               {headerText}
               </Typography>
          </HeaderText>  
          {/* <IconButton onClick={props.handleClose} sx={HighlightOff}>
               <HighlightOffIcon />
          </IconButton> */}
        </Header> 
          <Typography id="modal-modal-description" sx={{ m: 4 }}>  
               <ModalContent>
                    {modalContent}
               </ModalContent>              
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const HeaderText = styled.div`
     color: #ffffff;
  align-self: center;
  font-size: 1.8rem;
  font-weight: 200;
  padding: 10px;
`
const Header = styled.div`
     width: 398px;
     /* border-radius: 8px 8px 0 0; */
     display: flex;
     justify-content: space-between;
     /* padding: 0.2rem; */
     align-items: center;
     background-color: #003366; 
  
`

const ModalContent = styled.div`
     color: #000000;
`