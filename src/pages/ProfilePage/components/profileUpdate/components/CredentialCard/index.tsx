import React from 'react';

// Types
import { Credential } from '../../../../../../graphql/API';

// Components
import { Col } from 'react-bootstrap';

// Styling
import '../../Profile.css';

// Utils
import { MONTHS } from '../../../../../../utils/constants';

import { NavLink as Link } from 'react-router-dom';

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
    <Col md={12}>
        <div className='cNFT'>
            <div className='img-box'>
                <Link to={`/credential/${credential.id}`} style={{ height: "inherit" }}>
                    <img
                        src={`https://gateway.pinata.cloud/ipfs/${credential.image}`}
                        alt={credential.name}
                    />
                </Link>
            </div>
            <div className='content-box'>
                <div className='nft-heading'>
                    <span>Badge</span>
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
