import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Modal from "../components/Modal"
import styled from 'styled-components'
import BasicButtons from '../components/Button'
import MouseOverPopover from '../components/Popover'
import InputAdornments from '../components/TextField'
import PasswordEyeToggler from '../components/Password'
import ToggleButtonSizes from '../components/Toggle'
import CustomizedSteppers from '../components/Stepper'
// import {ReactLogo} from './logo.svg';
const Home: NextPage = () => {
     const [buttonText, setButtonText] = useState("")
     const [headerText, setHeaderText] = useState("")
     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     const [modalContent, setModalContent] = useState(<></>)
     const [hoverContent, setHoverContent] = useState('')
     const [popoverContent, setPopoverContent] = useState('')

     function Check() {
          setHeaderText("Beal")
          setModalContent(
               <>
                    <p>
                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
               </>
          )

     }
     // function Check2() {
     //      setHoverContent("Beal")
     // }
     function Check1() {
          setHeaderText("heal")
          setModalContent(
               <>
                    <p>
                         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
               </>
          )

     }
  return (
    <div className={styles.container}>
          <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          </Head>

          <p className={styles.description}>
                    <BasicButtons ButtonText={'Check'}    onClick={()=> {handleOpen(); Check();}} disabled={false}/>
                    <BasicButtons ButtonText={'Check1'}   onClick={()=> {handleOpen(); Check1();}} disabled={false}/>
                    {/* <ReactLogo /> */}
                    
          </p>
          <div>
          <InputAdornments label1={'Name'}/>
          <InputAdornments label1={'Project Name'}/>
          <InputAdornments label1={'Title'}/>
          <InputAdornments label1={'Email'}/>
          <PasswordEyeToggler/>
          </div>
          <CustomizedSteppers/>
          {/* <ToggleButtonSizes/> */}
          <MouseOverPopover Hover={<><p>cat</p></>} popover={'test if popover is working'} />
          <Modal 
                    modalContent={modalContent} 
                    headerText={headerText} 
                    open={open}  
                    handleOpen={false} 
                    setOpen={false} 
                    handleClose={handleClose}       
          />
    </div>
  )
}

export default Home



