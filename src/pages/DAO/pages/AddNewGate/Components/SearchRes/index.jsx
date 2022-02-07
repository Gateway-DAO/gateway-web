import * as Styled from './style'

const SearchRes = ({ res, addAdmin }) => (
    <Styled.Container onClick={addAdmin}>
        <Styled.ProfilePicture src={res.pfp} />
        <Styled.Name>{res.name}</Styled.Name>
    </Styled.Container>
)

export default SearchRes
