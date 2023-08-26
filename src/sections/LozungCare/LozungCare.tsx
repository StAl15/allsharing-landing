import React, {FC} from 'react';
import Text from "../../components/Text/Text";
import FlexRow from "../../components/Row/FlexRow";
import {Circle} from "../../components/Circle/Circle";
import FlexColumn from "../../components/Column/FlexColumn";

const LozungCare: FC = () => {
    return (
        <FlexColumn className={'self-start mt-32'}>
            <Text className={'text-[1.5625rem] uppercase w-[50rem] mb-16'}>
                Мы заботимся об удобстве для каждого пользователя и очень много ресурсов направлены на
                безопасность.
            </Text>

            <Text className={'text-[1.5625rem] uppercase w-[45rem]'}>
                Благодаря рейтинговой системе исключаем недобросовестных пользователей.
            </Text>
            <FlexRow className={'mt-8 items-baseline space-x-4'}>
                <div className={'w-[0.5rem] h-[0.5rem]'}>
                    {Circle}
                </div>
                <Text className={'w-[38rem]'}>
                    Несколько ступеней верификации и холдирование средств на платформе позволяет обеспечить
                    максимально безопасный процесс аренды как для арендодателя, так и для арендатора!
                </Text>

            </FlexRow>
        </FlexColumn>
    );
};

export default LozungCare;