import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as Styled from './style';

const Page404 = () => (
    <Styled.Container>
        <Header />
        <Styled.TextBox>
            <Styled.MainText>
                Oops! You've reached a dead end :/
            </Styled.MainText>
            <Styled.SmallText>
                We couldn't find what you're looking for. Try again later!
            </Styled.SmallText>
        </Styled.TextBox>
        <Footer />
    </Styled.Container>
);

export default Page404;
