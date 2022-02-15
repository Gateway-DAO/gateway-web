import * as Styled from './style';
import the_goat from '../../../../assets/goat.png';

const BadgeBox = (props) => {
    return (
        <Styled.Container>
            <Styled.Image src={the_goat} />
            <Styled.BadgeTitle>THE GOAT</Styled.BadgeTitle>
        </Styled.Container>
    );
};

export default BadgeBox;
