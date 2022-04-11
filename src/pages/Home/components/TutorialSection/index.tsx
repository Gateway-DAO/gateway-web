import React, { useEffect, useRef, useState } from 'react';
import * as Styled from './style';
import * as MainStyled from '../../style';
import PlayIconImg from '../../../../assets/icons/PlayIcon.svg';

const data = [
    {
        id: '1',
        title: 'Create Your Profile',
        video: 'videos/tutorial_1.mp4',
    },
    {
        id: '2',
        title: 'Earn Credentials',
        video: 'videos/tutorial_1.mp4',
    },
    {
        id: '3',
        title: 'Build Your Digital Resume',
        video: 'videos/tutorial_1.mp4',
    },
    {
        id: '4',
        title: 'Discover Your Friends',
        video: 'videos/tutorial_1.mp4',
    },
];

export default function TutorialSection() {
    const [active, setActive] = useState('1');
    const [videoLink, setVideoLink] = useState('');
    const [isPlay, setIsPlay] = useState(false);
    const video = useRef(null);

    const playVideo = () => {
        video.current.play();
        setIsPlay(true);
    };

    useEffect(() => {
        const link = data.filter((e) => e.id === active)[0].video;
        setVideoLink(link);
        setIsPlay(false);
    }, [active]);

    return (
        <MainStyled.SectionContainer>
            <Styled.Content>
                <Styled.LeftSide>
                    <Styled.Title data-aos='fade-right'>
                        SEE HOW IT WORKS
                    </Styled.Title>
                    {data.map((item, idx) => (
                        <React.Fragment key={idx}>
                            {item.id === active ? (
                                <Styled.BigText
                                    data-aos='fade-up'
                                    data-aos-delay={`${idx * 100}`}
                                >
                                    {item.title}
                                </Styled.BigText>
                            ) : (
                                <Styled.Text
                                    onClick={() => setActive(item.id)}
                                    data-aos='fade-up'
                                    data-aos-delay={`${idx * 100}`}
                                >
                                    {item.title}
                                </Styled.Text>
                            )}
                        </React.Fragment>
                    ))}
                </Styled.LeftSide>
                <Styled.RightSide>
                    <Styled.VideoContainer data-aos='fade-left'>
                        <Styled.Video
                            ref={video}
                            src={videoLink}
                            onEnded={() => setIsPlay(false)}
                            muted
                        ></Styled.Video>
                        {!isPlay ? (
                            <Styled.PlayIcon
                                src={PlayIconImg}
                                onClick={playVideo}
                            ></Styled.PlayIcon>
                        ) : null}
                    </Styled.VideoContainer>
                </Styled.RightSide>
            </Styled.Content>
        </MainStyled.SectionContainer>
    );
}
