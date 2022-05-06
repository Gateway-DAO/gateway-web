import React, { useState, useEffect } from 'react';

// Styling
import './Credentials.css';

// Hooks
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/UserContext';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Navigate, NavLink as Link, useNavigate } from 'react-router-dom';

// API
import { useQuery, gql } from '@apollo/client';
import { getCredential } from '../../graphql/queries';

// Utils
import parser from 'html-react-parser';

// Types
import { Credential } from '../../graphql/API';

import { Minter } from '../CredentialMint';

const CredentialPage = () => {
    const [showDetail, setShowDetail] = useState(false);
    // Hooks
    const { id }: { id?: string } = useParams();
    const navigate = useNavigate();

    // API Calls
    const {
        data,
        loading: credentialLoading,
        error: credentialError,
    } = useQuery(gql(getCredential), {
        variables: {
            id,
        },
    });

    if (credentialLoading) {
        return (
            <Page>
                <section>
                    <div className='gateway-profile-loader-box'>
                        <Loader color='white' size={35} />
                    </div>
                </section>
            </Page>
        )
    }

    /* Checking if there is an error. If there is an error, it will return a 404 page. */
    if (credentialError) {
        console.log(credentialError);
        return <Navigate to='/404' />;
    }

    return (
        <Page>
            <section>
                <section className='gateway-profile'>
                    <Container>
                        <div className='back-link'>
                            <a>
                                <div
                                    className='arrow-back'
                                    onClick={() => navigate('/profile')}
                                >
                                    <img src='/left-arrow-icon.svg' alt='' />
                                </div>
                            </a>
                            <span
                                style={{
                                    color: 'white',
                                    marginLeft: '20px',
                                }}
                            >
                                Back to Profile
                            </span>
                        </div>
                    </Container>
                    <Container>
                        <Row>
                            <Col md={4} className='credentials-img'>
                                <div className='credentials-profile-left'>
                                    <img
                                        src={`https://gateway.pinata.cloud/ipfs/${data.getCredential.image}`}
                                    />
                                    <div className='credential-nft-heading'>
                                        <span>NFT Badge</span>
                                        <h4>{data.getCredential.name}</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col md={8} className='credentials-contents'>
                                {/* Gateway Profile - Header */}
                                <Col sm={12} className='credentials-header'>
                                    <div className='gateway-profile-middle'>
                                        <Row>
                                            <div className='credentials-name'>
                                                <h5>
                                                    {data.getCredential.organization.name}
                                                </h5>
                                            </div>
                                            <div className='credentials-title'>
                                                <h1>{data.getCredential.name}</h1>
                                            </div>
                                            <div className='credentials-content'>
                                                <h5>
                                                    {data.getCredential.description}
                                                </h5>
                                            </div>
                                            {/* <div className='credentials-tag'>
                                                    <button>Contributor</button>
                                                    <button>Educational</button>
                                                    <button>Beginner</button>
                                                </div> */}
                                        </Row>
                                    </div>
                                </Col>
                                <Col
                                    sm={12}
                                    className='credetials-skill-knowledge-attitude'
                                >
                                    <Col sm={4}>
                                        <div className='gway-skill-col skill-second-sec'>
                                            <div className='gway-skill-col-hd'>
                                                <h3>Skills</h3>
                                            </div>
                                            <ListGroup as='ul'>
                                                {!!data.getCredential.skills &&
                                                    data.getCredential.skills.length >
                                                    0 ? (
                                                    data.getCredential.skills.length >
                                                    0 &&
                                                    data.getCredential.skills.map(
                                                        (item) => (
                                                            <ListGroup.Item
                                                                as='li'
                                                                key={item}
                                                            >
                                                                <a className='gway-btn'>
                                                                    {item}
                                                                </a>
                                                            </ListGroup.Item>
                                                        )
                                                    )
                                                ) : (
                                                    <ListGroup.Item as='li'>
                                                        <a className='gway-btn'>
                                                            No skills found
                                                        </a>
                                                    </ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className='gway-skill-col skill-second-sec gway-skill-col-inner'>
                                            <div className='gway-skill-col-hd'>
                                                <h3>Knowledge</h3>
                                            </div>
                                            <ListGroup as='ul'>
                                                {!!data.getCredential.knowledges &&
                                                    data.getCredential.knowledges.length >
                                                    0 ? (
                                                    data.getCredential.knowledges
                                                        .length > 0 &&
                                                    data.getCredential.knowledges.map(
                                                        (item) => (
                                                            <ListGroup.Item
                                                                as='li'
                                                                key={item}
                                                            >
                                                                <a className='gway-btn'>
                                                                    {item}
                                                                </a>
                                                            </ListGroup.Item>
                                                        )
                                                    )
                                                ) : (
                                                    <ListGroup.Item as='li'>
                                                        <a className='gway-btn'>
                                                            No knowledge found
                                                        </a>
                                                    </ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <div className='gway-skill-col skill-second-sec gway-skill-col-inner gway-attitudes-col-inner'>
                                            <div className='gway-skill-col-hd'>
                                                <h3>Attitudes</h3>
                                            </div>
                                            <ListGroup as='ul'>
                                                {!!data.getCredential.attitudes &&
                                                    data.getCredential.attitudes.length >
                                                    0 ? (
                                                    data.getCredential.attitudes
                                                        .length > 0 &&
                                                    data.getCredential.attitudes.map(
                                                        (item) => (
                                                            <ListGroup.Item
                                                                as='li'
                                                                key={item}
                                                            >
                                                                <a className='gway-btn'>
                                                                    {item}
                                                                </a>
                                                            </ListGroup.Item>
                                                        )
                                                    )
                                                ) : (
                                                    <ListGroup.Item as='li'>
                                                        <a className='gway-btn'>
                                                            No attitudes found
                                                        </a>
                                                    </ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </div>
                                    </Col>
                                    {/* <div className='gway-skill-col gway-languages-col-inner'>
									<div className='gway-skill-col-hd'>
										<h3>Languages</h3>
									</div>
									<ListGroup as='ul'>
										{!!data.getCredential.languages &&
											data.getCredential.languages.length > 0 ? (
											data.getCredential.languages.length > 0 &&
											data.getCredential.languages.map((item) => (
												<ListGroup.Item as='li' key={item}>
													<a className='gway-btn'>
														{item}
													</a>
												</ListGroup.Item>
											))
										) : (
											<ListGroup.Item as='li'>
												<a className='gway-btn'>
													No language found
												</a>
											</ListGroup.Item>
										)}
									</ListGroup>
								</div> */}
                                </Col>
                                <Col sm={12} className='credentials-keys'>
                                    <h1 className='key-title'>Keys</h1>
                                    {data.getCredential.pow.map(pow => {
                                        const parsed = JSON.parse(pow);

                                        console.log(parsed);

                                        return (
                                            <>
                                                {!showDetail ? (
                                                    <div className='credentials-keys-content'>
                                                        {parsed.information.map(info => (
                                                            <>
                                                                <h1 className='title'>
                                                                    {info.title}
                                                                </h1>
                                                                <h5 className='content'>
                                                                    {parser(info.description)}
                                                                </h5>
                                                            </>
                                                        ))}
                                                        <button onClick={() => setShowDetail(true)}>DETAILS</button>
                                                    </div>
                                                ) :
                                                    (
                                                        <div className='credentials-keys-content detail'>
                                                            <>
                                                                <h1 className='title'>
                                                                    {parsed.information[0].title}
                                                                </h1>
                                                                <h5 className='content'>
                                                                    {parser(parsed.information[0].description)}
                                                                </h5>
                                                            </>
                                                            <div>
                                                                <button onClick={() => setShowDetail(false)}>HIDE</button>
                                                                <div className='credential-detail-keys-earned'>
                                                                    <p className='title'>KEYS EARNED</p>
                                                                    <p className='value'>50</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </>
                                        )
                                    })}
                                </Col>
                                <Minter ></Minter>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </Page>
    );
};

export default CredentialPage;
