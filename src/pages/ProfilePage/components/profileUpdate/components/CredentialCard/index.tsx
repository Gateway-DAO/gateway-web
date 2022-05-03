import React from 'react';

// Components
import { Col } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom';

// Styling
import '../../Profile.css';

// Utils
import { MONTHS } from '../../../../../../utils/constants';

// Types
import { Credentials } from '../../../../../../graphql';

/* This is a TypeScript interface. It is a way to define the shape of an object. In this case, the
shape of the object is `IProps`. */
interface IProps {
    credential: Credentials;
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
                                new Date(credential.created_at).getMonth()
                            ].slice(0, 3)}{' '}
                            {new Date(credential.created_at).getFullYear()}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </Col>
);

export default CredentialCard;
