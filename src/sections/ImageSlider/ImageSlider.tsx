import React, {useState} from 'react';
import Text from "../../components/Text/Text";
import FlexRow from "../../components/Row/FlexRow";
import Button from "../../components/Button/Button";
import CategoryCard from "../../components/Cards/CategoryCard/CategoryCard";
import FlexColumn from "../../components/Column/FlexColumn";

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const categories = [
        {
            imgSrc: '/images/forBusiness.svg',
            title: 'Для бизнеса',
            tags: ['Мебель',
                'Спецтехника',
                'IT - техника',
                'Фототехника',
                'Видеотехника',
                'Аудиотехника',
                'Специалисты'],

        },
        {
            imgSrc: '/images/forIndustries.svg',
            title: 'Для индустрий',
            tags: ['Земля',
                'Инструменты',
                'Строительная техника']
        },
        {
            imgSrc: '/images/forCreativity.svg',
            title: 'Для творчества',
            tags: ['Мебель',
                'Аппаратура',
                'Реквизит',
                'Животные',
                'Музыкальные инструменты',
                'Костюмы']
        },
        {
            imgSrc: '/images/forAdventures.svg',
            title: 'Для путешествий',
            tags: ['Снаряжение',
                'Экипировка',
                'Велосипеды',
                'Квадроциклы',
                'Гидроциклы',
                'Снегоходы',
                'Вертолёты',
                'Самолёты',
                'Яхты',]
        },

    ]

    return (
        <FlexColumn className={'self-start mt-32'}>
            <Text className={'uppercase w-[30rem]'}>
                На платформе ALLSHARING в аренду можно сдать всё и найти своего клиента!
            </Text>
            <FlexRow className={'space-x-4 my-12'}>
                <Button onClick={() => setCurrentImage(currentImage > 0 ? currentImage - 1 : 3)}
                        className={'w-12 h-12 rounded-full'} variant={'primary'}>
                    <a href={`#item${currentImage > 0 ? currentImage - 1 : 3}`}>❮</a>
                </Button>
                <Button onClick={() => setCurrentImage(currentImage < 3 ? currentImage + 1 : 0)}
                        className={'w-12 h-12 rounded-full relative'} variant={'outlined'}>
                    <a className={'absolute'} href={`#item${currentImage < 3 ? currentImage + 1 : 0}`}>❯</a>
                </Button>

            </FlexRow>
            <FlexRow
                className={'self-start space-x-10 w-[85rem] box-border flex-nowrap overflow-x-scroll carousel'}>
                {categories.map((it, idx) =>
                    <CategoryCard
                        imgSrc={it.imgSrc}
                        id={`item${idx}`}
                        className={'carousel-item'}
                        categories={it.tags}
                        title={it.title}/>
                )}
            </FlexRow>

        </FlexColumn>
    );
};

export default ImageSlider;