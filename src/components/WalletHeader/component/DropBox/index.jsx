import * as Styled from './style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../contexts/UserContext';
import { useClickAway } from 'react-use';
import { useRef } from 'react';

const DropDown = ({ toggle }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { loggedIn, userSignOut, walletConnected } = useAuth();
    const ref = useRef(null);

    useClickAway(ref, () => {
        toggle();
    });

    return (
        <Styled.DropDownContainer ref={ref}>
            <Styled.ItemsContainer>
                <Styled.ItemTextContainer onClick={() => navigate('/profile')}>
                    Profile
                </Styled.ItemTextContainer>
                {walletConnected && (
                    <>
                        <Styled.BorderLine />
                        <Styled.ItemTextContainer
                            onClick={() => {
                                // location.pathname == '/profile' &&
                                navigate('/');
                                userSignOut();
                                toggle();
                            }}
                        >
                            Disconnect
                        </Styled.ItemTextContainer>
                    </>
                )}
                {/* !loggedIn && (
                    <>
                        <Styled.BorderLine />
                        <Styled.ItemTextContainer
                            onClick={async () => {
                                await signIn();
                            }}
                        >
                            Authorize Metamask
                        </Styled.ItemTextContainer>
                    </>
                ) */}
            </Styled.ItemsContainer>
        </Styled.DropDownContainer>
    );
};

export default DropDown;
