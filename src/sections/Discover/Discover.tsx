import React from 'react';
import Text from "../../components/Text/Text";
import FlexColumn from "../../components/Column/FlexColumn";
import Button from "../../components/Button/Button";
import FlexRow from "../../components/Row/FlexRow";

const Discover: React.FC = () => {
    return (
        <FlexRow className={'mt-32 space-x-12 w-2/3 self-start'}>
            <Text className={'uppercase text-primary font-[Nunito-Semibold] text-[3.125rem]'}>
                Allsharing
            </Text>
            <FlexColumn className={'w-[30rem] space-y-12'}>
                <Text>открывает возможности не только для заработка, но и для экономии. Можно не приобретать
                    вещь,
                    которая нужна лишь на короткий срок, а взять в аренду и сэкономить.</Text>
                <Button>
                    <Text className={'text-neutral'}>
                        Взять в аренду
                    </Text>
                </Button>
            </FlexColumn>
        </FlexRow>
    );
};

export default Discover;