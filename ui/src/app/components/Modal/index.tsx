import './index.scss';
import * as React from 'react';

interface Props {
    children: React.ReactNode;
}

const Modal = (props: Props): JSX.Element => {
    return (
        <div className='cc-modal-wrapper'>
            <div className='cc-modal'>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;