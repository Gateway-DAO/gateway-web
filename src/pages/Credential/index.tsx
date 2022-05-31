import React, { useState } from 'react';

// Styling
import './Credentials.css';

// Hooks
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { useGetCredentialQuery } from '../../graphql';

// Utils
import parser from 'html-react-parser';

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
    } = useGetCredentialQuery({
        variables: {
            id
        }
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
                                        src={`https://ipfs.mygateway.xyz/ipfs/${data.credentials_by_pk.image}`}
                                    />
                                    <div className='credential-nft-heading'>
                                        <span>NFT Badge</span>
                                        <h4>{data.credentials_by_pk.name}</h4>
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
                                                    {data.credentials_by_pk.dao.name}
                                                </h5>
                                            </div>
                                            <div className='credentials-title'>
                                                <h1>{data.credentials_by_pk.name}</h1>
                                            </div>
                                            <div className='credentials-content'>
                                                <h5>
                                                    {data.credentials_by_pk.description}
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
                                                {!!data.credentials_by_pk.skills &&
                                                    data.credentials_by_pk.skills.length >
                                                    0 ? (
                                                    data.credentials_by_pk.skills.length >
                                                    0 &&
                                                    data.credentials_by_pk.skills.map(
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
                                                {!!data.credentials_by_pk.knowledges &&
                                                    data.credentials_by_pk.knowledges.length >
                                                    0 ? (
                                                    data.credentials_by_pk.knowledges
                                                        .length > 0 &&
                                                    data.credentials_by_pk.knowledges.map(
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
                                                {!!data.credentials_by_pk.attitudes &&
                                                    data.credentials_by_pk.attitudes.length >
                                                    0 ? (
                                                    data.credentials_by_pk.attitudes
                                                        .length > 0 &&
                                                    data.credentials_by_pk.attitudes.map(
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
										{!!data.credentials_by_pk.languages &&
											data.credentials_by_pk.languages.length > 0 ? (
											data.credentials_by_pk.languages.length > 0 &&
											data.credentials_by_pk.languages.map((item) => (
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
                                    {data.credentials_by_pk.pow.map(pow => {
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
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </Page>
    );
};

export default CredentialPage;
