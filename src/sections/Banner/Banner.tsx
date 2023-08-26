import React, {FC} from 'react';
import Text from "../../components/Text/Text";
import FlexColumn from "../../components/Column/FlexColumn";

const Banner: FC = () => {
    return (
        <FlexColumn
            className={'mt-32 w-[85rem] h-[38.1875rem] justify-center items-center bg-center bg-no-repeat bg-cover relative bg-[url("assets/images/banner-1.svg")]'}>
            <Text
                className={'mb-12 absolute bottom-0 uppercase text-white font-[Nunito-Semibold] text-[3.125rem] text-center w-[60rem]'}>ALLSHARING
                предлагает решения в разных ситуациях</Text>
        </FlexColumn>
    );
};

export default Banner;