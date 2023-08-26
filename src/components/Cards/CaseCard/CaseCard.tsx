import React, {FC} from 'react';
import FlexColumn from "../../Column/FlexColumn";
import Text from "../../Text/Text";
import FlexRow from "../../Row/FlexRow";
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

export interface CaseCardProps {
    title: string;
    desc: string;
    className?: string;
    position?: 'lt' | 'rt' | 'lb' | 'rb';
    imgUrl: string;
}

const CaseCard: FC<CaseCardProps> = ({imgUrl, position = 'lt', className, desc, title}) => {

    const getPosition = () => {
        switch (position) {
            case 'lt':
                return 'left-0 top-0'
            case 'rt':
                return 'right-0 top-0'
            case 'lb':
                return 'left-0 bottom-0'
            case 'rb':
                return 'right-0 bottom-0'
        }
    }

    return (
        <FlexRow className={twMerge(clsx('space-x-12 items-center', className))}>
            <FlexColumn
                className={`relative w-1/2 h-[24.125rem] relative`}>
                <img src={imgUrl} className={'absolute w-full h-full'}/>
                <Text
                    className={twMerge(clsx('uppercase absolute m-12 text-white text-[1.875rem] font-[Nunito-Semibold]', getPosition()))}>
                    {title}
                </Text>
            </FlexColumn>
            <FlexColumn className={'space-y-4 w-1/2'}>
                <Text className={'whitespace-pre-line'}>{desc}</Text>
            </FlexColumn>

        </FlexRow>
    );
};

export default CaseCard;