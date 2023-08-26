import React, {FC, ReactNode} from 'react';
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

export interface ButtonProps {

    variant?: 'primary' | 'outlined';
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
                                     onClick = () => {
                                     },
                                     variant = 'primary',
                                     children,
                                     className
                                 }) => {

    const btnStyle = () => {
        switch (variant) {
            case 'primary':
                return 'btn btn-primary';
            case 'outlined':
                return 'btn btn-neutral border-secondary border-solid border-[1px]';
        }
    }

    return (
        <button
            onClick={onClick}
            className={twMerge(clsx('normal-case text-[1.0625rem] rounded-none btn w-[20rem] h-[4.875rem]', btnStyle(), className))}>
            {children}
        </button>
    );
};

export default Button;