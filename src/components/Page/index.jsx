import Header from '../Header'
import Footer from '../Footer'
import * as Styled from './style'

const Page = props => {

    return (
        <Styled.Container>
            <Header />
            {props.children}
            <Footer />
        </Styled.Container>
    )
}

export default Page