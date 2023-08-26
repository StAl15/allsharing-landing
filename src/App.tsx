import React, {useEffect, useState} from 'react';
import FlexColumn from "./components/Column/FlexColumn";
import Header from "./components/Header/Header";
import Losung from "./sections/Losung/Losung";
import Video from "./sections/Video/Video";
import Discover from "./sections/Discover/Discover";
import PhoneMockup from "./sections/PhoneMockup/PhoneMockup";
import ImageSlider from "./sections/ImageSlider/ImageSlider";
import Banner from "./sections/Banner/Banner";
import Cases from "./sections/Cases/Cases";
import LozungCare from "./sections/LozungCare/LozungCare";
import LozungRent from "./sections/LozungRent/LozungRent";
import Support from "./components/Support/Support";
import Footer from "./components/Footer/Footer";

function App() {

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);


    return isLoading
        ? <div className={'flex flex-col w-screen h-screen justify-center items-center relative'}>
            <div className={'my-1/2'}>
                <span className="w-[10rem] h-[10rem] loading loading-ring text-primary"></span>
            </div>
        </div>
        : (
            <FlexColumn
                className={'bg-neutral box-border overflow-x-hidden justify-center items-center w-full min-w-screen h-auto min-h-full px-6 pt-6 overflow-auto'}>
                <FlexColumn className={'w-[85rem] justify-center items-center bg-neutral'}>
                    <Header/>
                    <Losung/>
                    <Video/>
                    <Discover/>
                    <PhoneMockup/>
                    <ImageSlider/>
                    <Banner/>
                    <Cases/>
                    <LozungCare/>
                    <LozungRent/>
                    <Support/>
                    <Footer/>
                </FlexColumn>
            </FlexColumn>

        );
}

export default App;
