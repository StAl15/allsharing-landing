import React, {FC, ReactNode} from 'react';
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

const FlexRow: FC<{ children?: ReactNode, className?: string }> = ({children, className}) => {
    return (
        <div className={twMerge(clsx('flex flex-row', className))}>
            {children}
        </div>
    );
};

export default FlexRow;