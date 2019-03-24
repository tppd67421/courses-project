import * as React from 'react';
import './index.scss';

const Loader = (): JSX.Element => {
    return (
        <div className='cc-loader'>
            <div className='spinner'>
                <div className='cube1'></div>
                <div className='cube2'></div>
            </div>
        </div>
    );
};

export default Loader;