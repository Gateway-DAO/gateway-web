import * as Styled from "./style"

const ProfileBox = props => {
    return (
        <Styled.Container>
            <Styled.BG src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2owFqyGiG7D3FH7IBSAojo5-c3ee-9tinAQ&usqp=CAU" />
            <Styled.Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2owFqyGiG7D3FH7IBSAojo5-c3ee-9tinAQ&usqp=CAU" alt={`${"user"} Profile`} />
        </Styled.Container>
    )
}

export default ProfileBox