import * as Styled from './style';
import pfp1 from '../../assets/pfp/pfp1.png';
import pfp2 from '../../assets/pfp/pfp2.png';
import pfp3 from '../../assets/pfp/pfp3.png';
const PfpBox = (props) => {
    return (
        <Styled.Wrapper>
            <Styled.ImageOverlapDiv>
                <Styled.ImageOverLap left='10px' zind='3' src={pfp1} />
                <Styled.ImageOverLap left='20px' zind='4' src={pfp2} />
                <Styled.ImageOverLap left='30px' zind='5' src={pfp3} />
            </Styled.ImageOverlapDiv>
            <Styled.PfpText>{props.text}</Styled.PfpText>
        </Styled.Wrapper>
    );
};

export default PfpBox;
