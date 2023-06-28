import React from 'react';
import { DotLoader } from 'react-spinners';

const Loading = ({ isLoading }) => {

    return (
        <div className="loader">
            <DotLoader color="#000"  loading={isLoading} size={50}/>
        </div>
    );
};

export default Loading