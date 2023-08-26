import React from 'react';
import FlexRow from "../../components/Row/FlexRow";
import Wrapper from "../../components/Wrapper/Wrapper";

const Video = () => {
    return (
        <Wrapper className={'z-10 mt-32 w-full max-w-[85rem] h-[38.1875rem]'}>
            <iframe width="100%" height="100%"
                    src="https://www.youtube.com/embed/sJ8WgUwYRFk?si=IiF7loSKi7gIpzXy"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </Wrapper>
    );
};

export default Video;