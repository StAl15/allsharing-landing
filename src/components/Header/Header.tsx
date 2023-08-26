import React, {FC} from 'react';
import FlexRow from "../Row/FlexRow";
import Text from "../Text/Text";
import Button from "../Button/Button";
import {LazyLoadImage} from "react-lazy-load-image-component";


const Header: FC = () => {
    return (
        <FlexRow className={'w-full z-10 max-w-[1440px] items-center justify-between sticky top-0'}>
            <FlexRow className={'items-center space-x-10'}>
                <LazyLoadImage src={'/images/logo.svg'}
                               className={'w-[4.4375rem] h-[3.875rem]'}
                               alt="logo"
                />
                {['Для бизнеса', 'Для индустрий', 'Для творчества', 'Для путешествий', 'Для повседневной жизни']
                    .map(it =>
                        <Text className={'cursor-pointer text-[0.9375rem] font-[Nunito-Medium]'}>{it}</Text>
                    )}
            </FlexRow>

            <Button className={'w-[17.125rem] h-[3.875rem]'} variant={'outlined'}>
                <Text className={'text-[0.9375rem] font-[Nunito-Regular]'}>Разместить объявление</Text>
            </Button>
        </FlexRow>
    );
};

export default Header;