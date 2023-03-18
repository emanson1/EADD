import PropTypes from 'prop-types';

export const Modal = PropTypes.shape({
	modalType: PropTypes.string,
	modalProps: PropTypes.object
});

export const ModalActions = {
	ShowModal: '@@modal/ShowModal',
	HideModal: '@@modal/HideModal',
	ChangeSize: '@@modal/ChangeSize',
};

export const ModalTypes = {
    Error: '@@modal/Error',
    Changesets: '@@modal/Changesets',
	Info: '@@modal/Info',
    Confirmation: '@@modal/Confirmation',
    RECUMGuideModal: '@@modal/RECUMGuideModal',
    SuccessModal: '@@modal/SuccessModal',
    ApprovalSkip:'ApprovalSkip',
    ApprovalReject:'ApprovalReject',
    ApprovalApprove:'ApprovalApprove',
    ApprovalConfirm:'ApprovalConfirm',
    ConfirmDelete:'ConfirmDelete',
    ShowOutdatedVersion:'ShowOutdatedVersion',
    Resubmit:'Resubmit'
};



