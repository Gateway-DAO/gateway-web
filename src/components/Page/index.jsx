import Header from '../Header';
import Footer from '../Footer';
import * as Styled from './style';
import Space from '../Space';

const Page = (props) => {
    return (
        <Styled.Container suppressContentEditableWarning={true}>
            <Header />
            {props.space ? <Space>{props.children}</Space> : props.children}
            <Footer />
        </Styled.Container>
    );
};

export default Page;
