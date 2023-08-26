import React from 'react';
import FlexColumn from "../../Column/FlexColumn";
import Text from "../../Text/Text";
import Button from "../../Button/Button";
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

export interface CategoryProps {
    categories: string[];
    title: string;
    className?: string;
    id?: string;
    imgSrc: string;
}

const CategoryCard: React.FC<CategoryProps> = ({imgSrc, id, className, categories, title}) => {
    return (
        <FlexColumn
            id={id}
            className={twMerge(clsx(`bg-center justify-between p-10 bg-no-repeat bg-cover relative w-[20rem] h-[30rem]`, className))}>
            <img src={imgSrc} className={'absolute w-full h-full top-0 left-0 right-0 bottom-0'}/>
            <pre className={'text-white font-[Nunito-Regular] text-[0.9375rem] leading-normal'}>
               {categories.reduce((it, acc) => it += acc + '\n', '')}
            </pre>
            <FlexColumn className={'space-y-4 mb-6'}>
                <Text className={'text-white font-[Nunito-Regular] text-[1.5625rem] leading-normal'}>
                    {title}
                </Text>
                <Button className={'w-[14.75rem] h-[3.5rem]'}>
                    <Text className={'text-white'}>
                        Узнать больше
                    </Text>
                </Button>
            </FlexColumn>

        </FlexColumn>
    );
};

export default CategoryCard;