import * as Styled from './style';
const Heading = (props) => {
    return (
        <Styled.Wrapper>
            <Styled.Text>
                {props.text ? props.text : 'Add A New Key'}
            </Styled.Text>
        </Styled.Wrapper>
    );
};

export default Heading;
