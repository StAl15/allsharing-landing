import React, {FC} from 'react';
import Text from "../Text/Text";
import FlexRow from "../Row/FlexRow";
import PartnerCard from "../Cards/PartnerCard/PartnerCard";
import FlexColumn from "../Column/FlexColumn";

const Support: FC = () => {
    const partners = [
        'images/partner1.svg',
        'images/partner2.svg',
        'images/partner3.svg',
    ]


    return (
        <FlexColumn className={'mt-32 self-start'}>
            <Text className={'mb-8 text-primary text-[3.125rem] font-[Nunito-Semibold] uppercase'}>
                Нас поддерживают
            </Text>
            <FlexRow className={'space-x-6'}>
                {partners.map((it, idx) =>
                    <PartnerCard imgSrc={it}/>
                )}
            </FlexRow>
        </FlexColumn>
    );
};

export default Support;