import * as Styled from './style';
import {
    Row,
    Col,
} from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useAuth } from '../../contexts/UserContext'



const Notification = ({ username, pfp, name, wallet, cyberConnectInstance }) => {
    const handleAcceptRequest = (wallet) => {
        if (!cyberConnectInstance) {
            throw {
                code: 'FollowError',
                message: 'Can not find the connect instance',
            }
        }
        cyberConnectInstance.connect(wallet)
    }

    return <Row>
        <Styled.NotificationInfo>
            <Col xs={2}>
                <Styled.ProfilePicture src={pfp} alt={`${name}'s profile picture`} />
            </Col>
            <Col xs={6}>
                <Styled.NameInfo>
                    <Styled.Name>{name}</Styled.Name>
                    <Styled.Username>{`@${username}`}</Styled.Username>
                </Styled.NameInfo>
            </Col>
            <Col xs={4}>
                <Row>
                    <Col>
                        <FaCheck style={{
                            "border": "1px solid #E5E5E5",
                            "border-radius": "50%",
                            "padding": "8px",
                            "top": "50%",
                            "-ms-transform": "translateY(50%)",
                            "transform": "translateY(50%)",
                            "cursor": "pointer"
                        }}
                            size="32px"
                            onClick={() => handleAcceptRequest(wallet)} />
                    </Col>
                    <Col>
                        <FaTimes style={{
                            "border": "1px solid #E5E5E5",
                            "border-radius": "50%",
                            "padding": "8px",
                            "top": "50%",
                            "-ms-transform": "translateY(50%)",
                            "transform": "translateY(50%)",
                            "cursor": "pointer"
                        }}
                            size="32px" />
                    </Col>
                </Row>
            </Col>
        </Styled.NotificationInfo>
    </Row>
}


const Notifications = ({ pendingUserData }) => {
    const {
        cyberConnectInstance
    } = useAuth();
    return <Col>
        <Styled.NotificationTitle>Pending Requests</Styled.NotificationTitle>
        {pendingUserData.map(p => <Notification key={p.wallet} cyberConnectInstance={cyberConnectInstance} {...p} />)}
    </Col>
}

export default Notifications;