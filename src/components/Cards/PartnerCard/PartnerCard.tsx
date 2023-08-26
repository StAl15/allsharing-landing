import React, {FC} from 'react';
import Wrapper from "../../Wrapper/Wrapper";
import {LazyLoadImage} from "react-lazy-load-image-component";

export interface PartnerCardProps {
    imgSrc: string;
}

const PartnerCard: FC<PartnerCardProps> = ({imgSrc}) => {
    return (
        <Wrapper className={'w-[27.3125rem] h-[12.375rem] flex flex-col justify-center items-center'}>
            <LazyLoadImage src={imgSrc}/>
        </Wrapper>
    );
};

export default PartnerCard;