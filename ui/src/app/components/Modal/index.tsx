import '../../assets/styles/main.scss';
import * as React from 'react';

const Modal = ({children}): JSX.Element => {
    return (
        <div className='cc-modal-wrapper'>
            <div className='cc-modal'>
                {children}
            </div>
        </div>
    );
};

export default Modal;