import * as Styled from "./style";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const WDWDCard = props => {
    return (
        <Styled.Container>
            <ReactMarkdown children={props.data} />
        </Styled.Container>
    )
}

export default WDWDCard;