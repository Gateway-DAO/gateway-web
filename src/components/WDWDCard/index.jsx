import * as Styled from './style';
import parser from 'html-react-parser';
const WDWDCard = (props) => {
    return (
        <Styled.Container>
            {/* <ReactMarkdown children={props.data} /> */}
            {parser(props.data)}
        </Styled.Container>
    );
};

export default WDWDCard;
