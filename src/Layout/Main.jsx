import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-rose-200 w-full'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;