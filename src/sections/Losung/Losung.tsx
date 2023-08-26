import React from 'react';
import FlexColumn from "../../components/Column/FlexColumn";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Losung: React.FC = () => {
    return (
        <FlexColumn className={'z-0 justify-center items-center w-auto max-w-[40rem] mt-32 text-center'}>
            <FlexColumn className={'z-10 justify-center items-center text-center'}>
                <Text className={'uppercase text-secondary text-[3.125rem] mb-0 font-[Nunito-Semibold]'}>Все
                    временно</Text>
                <Text className={'w-full uppercase text-primary text-[5rem] mt-0 font-[Nunito-Semibold]'}>- Живи
                    легко</Text>
                <Text>Платформа <span className={'font-[Nunito-Bold]'}>ALLSHARING</span> даёт возможность каждому человеку зарабатывать на своём имуществе! Можно
                    сдать в аренду любую вещь или даже себя, как специалиста</Text>
                <Button className={'mt-12'}>
                    <Text className={'text-neutral'}>Сдать в аренду</Text>
                </Button>
            </FlexColumn>

            <LazyLoadImage className={'absolute z-0'} src={'/images/planet.svg'}/>

        </FlexColumn>
    );
};

export default Losung;