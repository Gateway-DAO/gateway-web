import * as Styled from "./style";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import parser from "html-react-parser";
const WDWDCard = props => {
    return (
        <Styled.Container>
            {/* <ReactMarkdown children={props.data} /> */}
            {parser(props.data)}
        </Styled.Container>
    )
}

export default WDWDCard;