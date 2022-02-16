import Modal from '..';
import * as Styled from './style';

const WrongNetworkModal = (props) => {
    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <Styled.Title>Wrong Network</Styled.Title>
                <Styled.Body>
                    Please connect to the appropriate Ethereum network.
                </Styled.Body>
            </Styled.Container>
        </Modal>
    );
};

export default WrongNetworkModal;
