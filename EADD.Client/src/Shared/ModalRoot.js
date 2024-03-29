import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog,Grid } from '@material-ui/core';
import {connect} from 'react-redux';
import { hideModal } from '../actions/eaddactions';
import CreateNewAccountModal from '../Modals/CreateNewAccountModal';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

const Modals= {
  //   confirmationModal:ConfirmationModal,
  //   successModal:SucessModal,
  //   errorModal: ErrorModal,
       CreateNewAccount: CreateNewAccountModal
  //   marketPlace:MarketPlaceModal,
       
  //   account: AccountModal
   };
   
 
const ModalRoot = props => {
  const background=props.background;
  const modalProps=props.modalProps;
  const modalType=props.modalType;
  const instrument=props.modalProps.instrument;
  const SpecificModal = Modals[modalType];
 
 const classes = makeStyles();
// getModalStyle is not a pure function, we roll the style only on the first render



const divImage = {
  backgroundImage: "url('" + modalProps.background + "')",
  backgroundColor:'lightgray',
  backgroundSize: 'contain',
  backgroundPosition:'center center',
  backgroundRepeat: 'no-repeat',
  height:'inherit',
  border:'2px solid #444c4f',
  fontWeight:'bold',
  padding:'30px',
  borderRadius: '10px 10px 10px 10px'

};

return (
  
<Dialog
  open={props.open}
  onClose={props.hideModal}
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
<div>
<SpecificModal handleClose={props.hideModal} modalProps={modalProps} divImage={divImage} />
</div>
</Dialog>

);
}

const mapStateToProps = (state) => ({
  modalProps: state.blueville.modalProps,
  modalType: state.blueville.modalProps.modalType,
});

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);

