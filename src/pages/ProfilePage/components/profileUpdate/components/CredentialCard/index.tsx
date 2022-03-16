import React from 'react';

// Types
import { Credential } from '../../../../../../graphql/API';

// Components
import { Col } from 'react-bootstrap';

// Styling
import '../../Profile.css';

// Utils
import { MONTHS } from '../../../../../../utils/constants';

/* This is a TypeScript interface. It is a way to define the shape of an object. In this case, the
shape of the object is `IProps`. */
interface IProps {
    credential: Credential;
}

/**
 * This function renders a single credential card
 * @param {IProps}  - `credential`: The credential object that is passed in from the parent component.
 */
const CredentialCard: React.FC<IProps> = ({ credential }: IProps) => (
    <Col md={4}>
        <div className='cNFT'>
            <div className='img-box'>
                <img
                    src={`https://gateway.pinata.cloud/ipfs/${credential.image}`}
                    alt={credential.name}
                />
            </div>
            <div className='content-box'>
                <div className='nft-heading'>
                    <span>Credential</span>
                    <h4>{credential.name}</h4>
                </div>
                <div className='date'>
                    <p>
                        Earned{' '}
                        <span>
                            {MONTHS[
                                new Date(credential.createdAt).getMonth()
                            ].slice(0, 3)}{' '}
                            {new Date(credential.createdAt).getFullYear()}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </Col>
);

export default CredentialCard;
