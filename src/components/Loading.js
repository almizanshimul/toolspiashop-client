import React from 'react';
import { Grid } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <Grid
                height="80"
                width="80"
                color='#008080'
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;