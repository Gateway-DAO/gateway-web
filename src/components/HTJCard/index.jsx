import * as Styled from './style';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const HTJCard = (props) => {
    return (
        <Styled.Container>
            {props.steps.map((step, idx) => {
                return (
                    <Styled.HTJStep>
                        <Styled.BoldText>Step {idx + 1}</Styled.BoldText>
                        <Styled.Text>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {step}
                            </ReactMarkdown>
                        </Styled.Text>
                    </Styled.HTJStep>
                );
            })}
        </Styled.Container>
    );
};

export default HTJCard;
