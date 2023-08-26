import React from 'react';
import FlexRow from "../Row/FlexRow";
import FlexColumn from "../Column/FlexColumn";
import Text from "../Text/Text";

const Footer = () => {
    return (
        <FlexColumn className={'mt-32 justify-center items-center w-screen bg-[#EDEDED] pt-12'}>
            <FlexRow className={'w-[85rem] justify-between items-baseline px-6'}>
                <FlexRow className={'space-x-12'}>
                    <FlexColumn className={'space-y-4'}>
                        <Text className={'uppercase text-[1.25rem]'}>
                            Каталог
                        </Text>
                        <FlexColumn className={'space-y-2'}>
                            <Text>Для бизнеса</Text>
                            <Text>Для индустрии</Text>
                            <Text>Для творчества</Text>
                            <Text>Для путешествий</Text>
                            <Text>Для повседневной жизни</Text>
                        </FlexColumn>
                    </FlexColumn>
                    <FlexColumn className={'space-y-4'}>
                        <Text className={'uppercase text-[1.25rem]'}>
                            Контакты
                        </Text>
                        <Text>allsharing.info@yandex.ru</Text>
                    </FlexColumn>
                </FlexRow>
                <FlexColumn className={'items-end space-y-2'}>
                    <Text>Перейти на платформу</Text>
                    <img src={'images/logo.svg'}/>
                </FlexColumn>
            </FlexRow>
            <FlexRow className={'self-center space-x-12'}>
                <Text className={'text-[0.9375rem]'}>
                    Вход и регистрация
                </Text>
                <Text className={'text-[0.9375rem]'}>
                    Сдать в аренду
                </Text>
                <Text className={'text-[0.9375rem]'}>
                    Взять в аренду
                </Text>
            </FlexRow>
            <hr className={'my-4 w-full h-[0.0625rem] border-solid border-black'}/>
            <Text className={'text-[1rem] self-center mb-4'}>2023. Allsharing (R) Все права защищены.</Text>
        </FlexColumn>
    );
};

export default Footer;