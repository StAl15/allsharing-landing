import React from 'react';
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

const Wrapper: React.FC<{
    children?: React.ReactNode,
    className?: string
}> = ({children, className}) => {
    return (
        <div className={twMerge(clsx('shadow-2xl', className))}>
            {children}
        </div>
    );
};

export default Wrapper;