import * as Styled from './style'
import { CircularButton, PaginationBox } from './style'

const Pagination = () => {
    return (
        <Styled.PaginationContainer>
            <PaginationBox>
                <Styled.CircularButton>{'<'}</Styled.CircularButton>
                <Styled.CircularButton>{'1'}</Styled.CircularButton>
                <Styled.CircularButton value={true}>{'>'}</Styled.CircularButton>
            </PaginationBox>
        </Styled.PaginationContainer>
    )
}

export default Pagination
