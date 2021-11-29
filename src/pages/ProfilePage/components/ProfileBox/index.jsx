import * as Styled from "./style"

const ProfileBox = props => {
    return (
        <Styled.Container>
            <Styled.BG src={props.pfpURL} />
            <Styled.Image src={props.pfpURL} alt={`${props.username} Profile`} />
        </Styled.Container>
    )
}

export default ProfileBox