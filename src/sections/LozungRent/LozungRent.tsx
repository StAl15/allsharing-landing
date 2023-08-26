import React, {FC} from 'react';
import Text from "../../components/Text/Text";
import FlexRow from "../../components/Row/FlexRow";
import Button from "../../components/Button/Button";
import FlexColumn from "../../components/Column/FlexColumn";

const LozungRent: FC = () => {
    return (
        <FlexColumn className={'mt-8 self-end w-[40.5rem]'}>
            <Text className={'uppercase mt-16 text-[1.5625rem] mb-4'}>
                Мы продумали всё до мелочей!
            </Text>
            <Text className={'text-[1.25rem]'}>
                И постепенно будем внедрять новые и улучшенные функции для упрощения и удобства пользования
                платформой и приложением.
            </Text>
            <FlexRow className={'mt-8 space-x-4'}>
                <Button>
                    <Text className={'text-white'}>
                        Сдать в аренду
                    </Text>
                </Button>
                <Button
                    variant={'outlined'}>
                    <Text>
                        Взять в аренду
                    </Text>
                </Button>
            </FlexRow>
        </FlexColumn>
    );
};

export default LozungRent;