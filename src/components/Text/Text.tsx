import React from 'react';
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

const Text: React.FC<{ className?: string, children?: React.ReactNode }> = ({className, children}) => {
    return (
        <span className={twMerge(clsx('text-secondary font-normal font-[Nunito-Regular] leading-normal', className))}>
            {children}
        </span>
    );
};

export default Text;