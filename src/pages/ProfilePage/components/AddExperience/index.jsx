import * as Styled from './style'

const AddExperience = () => {
    return (
        <Styled.BoxContainer>
            <Styled.BoxText>
                Add your Experience and Contributions.{' '}
            </Styled.BoxText>
            <Styled.ButtonBox to="/profile/add-experience">
                <Styled.ButtonText>ADD NOW</Styled.ButtonText>
            </Styled.ButtonBox>
        </Styled.BoxContainer>
    )
}

export default AddExperience
