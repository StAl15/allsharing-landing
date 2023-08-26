import React, {ReactNode} from 'react';
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

const FlexColumn: React.FC<{
    id?: string,
    children?: ReactNode,
    className?: string
}> = ({
          id,
          children,
          className
      }) => {
    return (
        <div
            id={id}
            className={twMerge(clsx('flex flex-col', className))}>
            {children}
        </div>
    );
};

export default FlexColumn;