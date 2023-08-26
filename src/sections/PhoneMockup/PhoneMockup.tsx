import React from 'react';
import FlexColumn from "../../components/Column/FlexColumn";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import Wrapper from "../../components/Wrapper/Wrapper";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";

const PhoneMockup: React.FC = () => {
    return (
        <Wrapper
            className={'items-baseline box-border relative mt-32 justify-between flex flex-row w-full max-w-[85rem] h-[38.1875rem]'}>
            <FlexColumn className={'p-32 w-[45rem] space-y-12'}>
                <Text>Аренда набирает обороты не только в мире, но и в России, где люди привыкли вещи покупать и
                    хранить на балконах, а не брать в аренду и не захламлять свой дом.</Text>
                <Button variant={'outlined'}>
                    <Text>
                        Подробнее
                    </Text>
                </Button>
            </FlexColumn>
            <LazyLoadImage placeholder={<span className="loading loading-spinner loading-lg"></span>}
 className={'absolute right-0 bottom-0 z-0'} src={'/images/mockup.svg'}/>
        </Wrapper>
    );
};

export default PhoneMockup;