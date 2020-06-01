import React from 'react'

import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return(
            <React.Fragment>
                <Modal showModal>
                    Something didn't Work
                </Modal>
                <WrappedComponent {...props} />
            </React.Fragment>
        )
    }
}

export default withErrorHandler