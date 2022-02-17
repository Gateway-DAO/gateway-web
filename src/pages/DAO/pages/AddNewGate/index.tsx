import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Styling
import * as Styled from './styles';
import { FormStyled } from '../../../../components/Form';

// Components
import SearchedItem from './Components/SearhedItem';
import SearchedAdmin from './Components/SearchedAdmin';
import SearchRes from './Components/SearchRes';
import SearchResGate from './Components/SearchResGate';
import { ImageUpload } from '../../../../components/Form';

// Hooks
import { useCreateGate } from '../../../../api/database/useCreateGate';
import { useNavigate, useOutletContext, useLocation } from 'react-router-dom';
import { useAuth } from '../../../../contexts/UserContext';
import useMint from '../../../../hooks/useMint';
import useSearchUsers from '../../../../api/database/useSearchUser';
import useSearchGates from '../../../../api/database/useSearchGates';

// Icons
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

// Utils
import { uploadFileToIPFS } from '../../../../api/IPFSFileUpload';
import FormData from 'form-data';
import Loader from '../../../../components/Loader';
import { useEffect } from 'react';
import useUpdateGate from '../../../../api/database/useUpdateGate';

/* This is a React component that will render the form to add a gate. */
const AddGateForm = () => {
    const { userInfo }: Record<string, any> = useAuth();
    const { state }: Record<string, any> = useLocation();
    const edit = state ? true : false;
    // State
    const [title, setTitle] = useState(edit ? state.gateData.name : '');
    const [description, setDescription] = useState(
        edit ? state.gateData.description : ''
    );
    const [retroactiveEarners, setRetroactiveEarners] = useState(['']);
    const [uploadFile, setUploadFile] = useState(null);
    const [category, setCategory] = useState('');
    const [categoryList, setCategoryList] = useState(
        edit ? state.gateData.categories : []
    );
    const [skill, setSkill] = useState(null);
    const [skillList, setSkillList] = useState([]);
    const [knowledge, setKnowledge] = useState(null);
    const [knowledgeList, setKnowledgeList] = useState([]);
    const [attitude, setAttitude] = useState(null);
    const [attitudeList, setAttitudeList] = useState([]);
    const [prerequisite, setPrerequisite] = useState('');
    const [prerequisiteList, setPrerequisiteList] = useState([]);
    const [keyRequired, setKeyRequired] = useState(
        edit ? state.gateData.keysNumber : 0
    );
    const [badgeName, setBadgeName] = useState(
        edit ? state.gateData.badge.name : ''
    );
    const [admin, setAdmin] = useState('');
    const [adminQuery, setAdminQuery] = useState('');
    const [adminList, setAdminList] = useState([
        {
            name: userInfo?.name || '',
            username: userInfo?.username || '',
            pfp: userInfo?.pfp || '',
            id: userInfo?.id || '',
        },
    ]);
    //const [adminIDList, setAdminIDList] = useState(edit?state.gateData.admins:[userInfo.id]);
    const [updateLoading, setUpdateeLoading] = useState(false);
    const [adminSearch, setAdminSearch] = useState([]);
    const [NFTupdated, setNFTupdated] = useState(edit);
    const [prereqsSearch, setPrereqsSearch] = useState([]);
    const [NFTType, setNFTType] = useState(edit ? 'Reward' : null);
    const [wantPreReqs, setWantPreReqs] = useState(edit ? 'yes' : null);

    // Hooks
    const { daoData }: Record<string, any> = useOutletContext();
    const { createGate } = useCreateGate();
    const { updateGate } = useUpdateGate();
    const { data: searchUserData, loading: searchUserLoading } = useSearchUsers(
        {
            variables: {
                filter: {
                    or: [
                        { name: { wildcard: `*${admin.toLowerCase()}*` } },
                        { username: { wildcard: `*${admin.toLowerCase()}*` } },
                        { bio: { wildcard: `*${admin.toLowerCase()}*` } },
                    ],
                },
            },
        }
    );

    const { data: searchGateData, loading: searchGateLoading } = useSearchGates(
        {
            variables: {
                filter: {
                    or: [
                        {
                            name: {
                                wildcard: `*${prerequisite.toLowerCase()}*`,
                            },
                        },
                    ],
                },
            },
        }
    );

    const { batchMint } = useMint();
    const navigate = useNavigate();

    /* The addCategories function is called when the user presses the Enter key. 
    The function adds the current value of the category input to the categoryList array and clears
    the input. */
    const addCategories = (e) => {
        if (e.key === 'Enter') {
            setCategoryList([...categoryList, category]);
            setCategory('');
        }
    };

    /**
     * It removes the category from the list of categories.
     */
    const removeCategories = (id) => {
        setCategoryList(categoryList.filter((value, i) => i !== id));
    };

    /* The addSkills function is called when the user presses the Enter key. 
    The function adds the current value of the skill input to the skillList array and clears
    the input. */
    const addSkills = (e) => {
        if (e.key === 'Enter') {
            setSkillList([...skillList, skill]);
            setSkill('');
        }
    };

    /**
     * It removes the skill from the list of skills.
     */
    const removeSkills = (id) => {
        setSkillList(skillList.filter((value, i) => i !== id));
    };

    /* The addKnowledge function is called when the user presses the Enter key. 
    The function adds the current value of the knowledge input to the knowledgeList array and clears
    the input. */
    const addKnowledge = (e) => {
        if (e.key === 'Enter') {
            setKnowledgeList([...knowledgeList, knowledge]);
            setKnowledge('');
        }
    };

    /**
     * It removes the category from the list of knowledge.
     */
    const removeKnowledge = (id) => {
        setKnowledgeList(knowledgeList.filter((value, i) => i !== id));
    };

    /* The addAttitude function is called when the user presses the Enter key. 
    The function adds the current value of the attitude input to the attitudeList array and clears
    the input. */
    const addAttitude = (e) => {
        if (e.key === 'Enter') {
            setAttitudeList([...attitudeList, attitude]);
            setAttitude('');
        }
    };

    /**
     * It removes the attitude from the list of attitudes.
     */
    const removeAttitude = (id) => {
        setAttitudeList(attitudeList.filter((value, i) => i !== id));
    };

    /**
     * It adds a prerequisite to the list of prerequisites.
     */
    const addPrerequisite = (gate) => {
        setPrerequisiteList((prev) => [...prev, gate]);
        setPrereqsSearch((prev) => prev.filter((obj) => obj.id !== gate.id));
    };

    /**
     * Given an id, remove the prerequisite with that id from the prerequisite list
     */
    const removePrerequisite = (id) => {
        setPrerequisiteList((prev) => prev.filter((gate) => gate.id !== id));
    };

    /**
     * It adds an admin to the list of admins.
     */
    const addAdmin = (admin) => {
        setAdminList([...adminList, admin]);
        setAdminSearch((prev) => prev.filter((adm) => adm.id !== admin.id));
    };

    /**
     * It removes the admin from the list of admins.
     */
    const removeAdmin = (id) => {
        setAdminList((prev) => prev.filter((adm) => adm.id !== id));
    };

    const updateRetroactiveEarner = (e, idx) => {
        console.log(idx);
        const add = retroactiveEarners.map((value, i) => {
            if (idx === i) {
                return e;
            }
            return value;
        });

        setRetroactiveEarners(add);
    };

    /* The removeRetroactiveEarner function is called when the user clicks the remove button. It
    removes the retroactive earner at the index of the button that was clicked. */
    const removeRetroactiveEarner = (idx) => {
        if (retroactiveEarners.length === 1) {
            alert('You have to put at least one retroactive earner');
            return false;
        }
        setRetroactiveEarners(
            retroactiveEarners.filter((value, i) => i !== idx)
        );
    };

    /* We create a new gate with the variables we've defined. */
    const onSave = async (e) => {
        setUpdateeLoading(true);
        try {
            e.preventDefault();

            if (!uploadFile) {
                alert('Please upload an NFT');
                return false;
            }

            const form = new FormData();
            form.append('file', uploadFile, 'image.png');

            const hash = await uploadFileToIPFS(form);
            const gateID = uuidv4();

            /*
            if (!!retroactiveEarners) {
                const batch = await batchMint(
                    retroactiveEarners.map((re) => re.length > 0 && re),
                    'k2t6wyfsu4pg1h5v2ive5e8xnw823zyl548fswjx0zu4qx30jw5mzkfry7k2tk'
                )
            }
            */

            await createGate({
                variables: {
                    input: {
                        id: gateID,
                        daoID: daoData.id,
                        name: title,
                        description,
                        categories: categoryList,
                        admins: adminList.map((admin) => admin.id),
                        keysNumber: keyRequired,
                        published: false,
                        holders: 0,
                        preRequisites: {
                            completedGates: prerequisiteList.map(
                                (prereq) => prereq.id
                            ),
                        },
                        badge: {
                            name: badgeName,
                            ipfsURL: hash,
                        },
                    },
                },
            });

            navigate(`/gate/${gateID}`);
        } catch (err) {
            alert('An error occurred. Please try again later!');
            console.log(err);
            setUpdateeLoading(false);
        }
        setUpdateeLoading(false);
    };

    const onEdit = async (e) => {
        setUpdateeLoading(true);
        e.preventDefault();
        if (uploadFile && NFTupdated) {
            try {
                const form = new FormData();
                form.append('file', uploadFile, 'image.png');
                const hash = await uploadFileToIPFS(form);
                await updateGate({
                    variables: {
                        input: {
                            id: state.gateData.id,
                            daoID: daoData.daoID,
                            name: title,
                            description,
                            categories: categoryList,
                            admins: adminList.map((admin) => admin.id),
                            keysNumber: keyRequired,
                            published: state.gateData.published,
                            badge: {
                                name: badgeName,
                                ipfsURL: hash,
                            },
                        },
                    },
                });
                navigate(`/gate/${state.gateData.id}`);
            } catch (e) {
                alert('We are facing issues please try again later');
                console.log(e);
            }
        } else {
            try {
                if (!NFTupdated) {
                    alert('Please Enter the NFT');
                    return false;
                }
                await updateGate({
                    variables: {
                        input: {
                            id: state.gateData.id,
                            daoID: daoData.daoID,
                            name: title,
                            description,
                            categories: categoryList,
                            admins: adminList.map((admin) => admin.id),
                            keysNumber: keyRequired,
                            published: state.gateData.published,
                            badge: {
                                name: badgeName,
                                ipfsURL: state.gateData.badge.ipfsURL,
                            },
                        },
                    },
                });
                navigate(`/gate/${state.gateData.id}`);
            } catch (e) {
                alert('We are facing issues please try again later');
                console.log(e);
            }
        }
        setUpdateeLoading(false);
    };

    useEffect(() => {
        const clear = setTimeout(() => {
            if (!admin) {
                setAdminSearch([]);
            }

            !!admin && admin !== adminQuery && setAdminQuery(admin);

            if (!!searchUserData && !searchUserLoading) {
                const query = searchUserData.searchUsers.items;
                const results = query.slice(0, 5).map((user) => {
                    return {
                        name: user.name,
                        username: user.username,
                        id: user.id,
                        pfp: user.pfp,
                    };
                });
                setAdminSearch(results);
            }
        }, 2000);

        return () => clearTimeout(clear);
    }, [admin]);

    useEffect(() => {
        const clear = setTimeout(() => {
            if (!prerequisite) {
                setPrereqsSearch([]);
            }

            // !!admin && admin !== adminQuery && setAdminQuery(admin)

            if (!!searchGateData && !searchGateLoading) {
                const query = searchGateData.searchGates.items;
                const results = query.slice(0, 5).map((gate) => {
                    return {
                        name: gate.name,
                        id: gate.id,
                    };
                });
                setPrereqsSearch(results);
            }
        }, 2000);

        return () => clearTimeout(clear);
    }, [prerequisite]);

    return (
        <Styled.Page>
            <Styled.Container
                onSubmit={edit ? onEdit : onSave}
                onKeyPress={(event) => {
                    if (event.which === 13 /* Enter */) {
                        event.preventDefault();
                    }
                }}
            >
                <Styled.Header>
                    {edit ? `Edit Gate` : `Create a New Gate`}
                </Styled.Header>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='title'>
                        Gate Title*
                    </FormStyled.Label>
                    <FormStyled.Input
                        onChange={(e) => setTitle(e.target.value)}
                        type='text'
                        id='title'
                        name='title'
                        placeholder='This will be the title of your Gate'
                        value={title}
                        required
                    />
                </FormStyled.Fieldset>
                <FormStyled.Fieldset>
                    <FormStyled.Label htmlFor='description'>
                        Description*
                    </FormStyled.Label>
                    <FormStyled.Textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name='description'
                        placeholder='This will be the description of your Gate. We reccommend maximum of 2 lines.'
                        required
                    />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label>Type of NFT*</FormStyled.Label>
                    <FormStyled.GridBox
                        cols={2}
                        onChange={(e) =>
                            setNFTType((e.target as HTMLInputElement).value)
                        }
                    >
                        <FormStyled.Radio
                            id='nft-1'
                            name='nft'
                            value='Contributor'
                            label='Contributor'
                            checked={NFTType === 'Contributor'}
                        />
                        <FormStyled.Radio
                            id='nft-2'
                            name='nft'
                            value='Reward'
                            label='Reward'
                            checked={NFTType === 'Reward'}
                        />
                    </FormStyled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label>
                        Would you like to have pre-requisites/keys?
                    </FormStyled.Label>
                    <FormStyled.GridBox
                        cols={2}
                        onChange={(e) =>
                            setWantPreReqs((e.target as HTMLInputElement).value)
                        }
                    >
                        <FormStyled.Radio
                            id='wantPreReqs-1'
                            name='wantPreReqs'
                            value='yes'
                            label='Yes'
                            checked={wantPreReqs === 'yes'}
                        />
                        <FormStyled.Radio
                            id='wantPreReqs-2'
                            name='wantPreReqs'
                            value='no'
                            label='No'
                            checked={wantPreReqs === 'no'}
                        />
                    </FormStyled.GridBox>
                </FormStyled.Fieldset>

                {NFTType && wantPreReqs && (
                    <>
                        {wantPreReqs === 'yes' && (
                            <FormStyled.Fieldset>
                                <FormStyled.Label htmlFor='title'>
                                    KEYS REQUIRED*
                                </FormStyled.Label>
                                <Styled.InputSmall
                                    onChange={(e) =>
                                        setKeyRequired(e.target.value)
                                    }
                                    type='number'
                                    id='keyReq'
                                    name='keyReq'
                                    placeholder='0'
                                    value={keyRequired > 0 ? keyRequired : null}
                                    required
                                />
                            </FormStyled.Fieldset>
                        )}
                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='title'>
                                Category*
                            </FormStyled.Label>
                            <FormStyled.Input
                                onChange={(e) => setCategory(e.target.value)}
                                type='text'
                                id='category'
                                name='category'
                                placeholder='Search Category'
                                onKeyPress={addCategories}
                                value={category}
                            />

                            {categoryList.length > 0 && (
                                <Styled.CategoryList>
                                    {categoryList.map((category, id) => {
                                        return (
                                            <SearchedItem
                                                val={category}
                                                id={id}
                                                remove={removeCategories}
                                            />
                                        );
                                    })}
                                </Styled.CategoryList>
                            )}
                        </FormStyled.Fieldset>

                        {NFTType === 'Reward' && (
                            <>
                                <FormStyled.Fieldset>
                                    <FormStyled.Label htmlFor='skills'>
                                        Skills
                                    </FormStyled.Label>
                                    <FormStyled.Input
                                        onChange={(e) =>
                                            setSkill(e.target.value)
                                        }
                                        type='text'
                                        id='skills'
                                        name='skills'
                                        placeholder='Search Skills'
                                        onKeyPress={addSkills}
                                        value={skill}
                                    />

                                    {skillList.length > 0 && (
                                        <Styled.CategoryList>
                                            {skillList.map((skill, id) => {
                                                return (
                                                    <SearchedItem
                                                        val={skill}
                                                        id={id}
                                                        remove={removeSkills}
                                                    />
                                                );
                                            })}
                                        </Styled.CategoryList>
                                    )}
                                </FormStyled.Fieldset>

                                <FormStyled.Fieldset>
                                    <FormStyled.Label htmlFor='knowledge'>
                                        Knowledge
                                    </FormStyled.Label>
                                    <FormStyled.Input
                                        onChange={(e) =>
                                            setKnowledge(e.target.value)
                                        }
                                        type='text'
                                        id='knowledge'
                                        name='knowledge'
                                        placeholder='Search Knowledge'
                                        onKeyPress={addKnowledge}
                                        value={knowledge}
                                    />

                                    {knowledgeList.length > 0 && (
                                        <Styled.CategoryList>
                                            {knowledgeList.map(
                                                (knowledge, id) => {
                                                    return (
                                                        <SearchedItem
                                                            val={knowledge}
                                                            id={id}
                                                            remove={
                                                                removeKnowledge
                                                            }
                                                        />
                                                    );
                                                }
                                            )}
                                        </Styled.CategoryList>
                                    )}
                                </FormStyled.Fieldset>

                                <FormStyled.Fieldset>
                                    <FormStyled.Label htmlFor='attitudes'>
                                        Attitudes
                                    </FormStyled.Label>
                                    <FormStyled.Input
                                        onChange={(e) =>
                                            setAttitude(e.target.value)
                                        }
                                        type='text'
                                        id='attitude'
                                        name='attitude'
                                        placeholder='Search Attitude'
                                        onKeyPress={addAttitude}
                                        value={attitude}
                                    />

                                    {attitudeList.length > 0 && (
                                        <Styled.CategoryList>
                                            {attitudeList.map(
                                                (attitude, id) => {
                                                    return (
                                                        <SearchedItem
                                                            val={attitude}
                                                            id={id}
                                                            remove={
                                                                removeAttitude
                                                            }
                                                        />
                                                    );
                                                }
                                            )}
                                        </Styled.CategoryList>
                                    )}
                                </FormStyled.Fieldset>
                            </>
                        )}

                        <FormStyled.Fieldset>
                            {edit ? (
                                <ImageUpload
                                    htmlFor='ProfileImage'
                                    label='Upload Badge or NFT*'
                                    setImage={setUploadFile}
                                    defaultImageURL={`https://gateway.pinata.cloud/ipfs/${state.gateData.badge.ipfsURL}`}
                                />
                            ) : (
                                <ImageUpload
                                    htmlFor='ProfileImage'
                                    label='Upload Badge or NFT*'
                                    setImage={setUploadFile}
                                />
                            )}
                            <Styled.AllowedFileType>
                                <p>Image, Video, Audio, or 3D Model</p>
                                <p>File supported: JPG, PNG, GIF, SVG, WEBM,</p>
                                <p>Max size: 100 MB</p>
                            </Styled.AllowedFileType>
                        </FormStyled.Fieldset>

                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='title'>
                                BADGE/NFT Name*
                            </FormStyled.Label>
                            <FormStyled.Input
                                onChange={(e) => setBadgeName(e.target.value)}
                                type='text'
                                id='badgeName'
                                name='badgeName'
                                placeholder='Insert the name here'
                                value={badgeName}
                                required
                            />
                        </FormStyled.Fieldset>
                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='title'>
                                Admin Privileges*
                            </FormStyled.Label>
                            <FormStyled.Input
                                onChange={(e) => setAdmin(e.target.value)}
                                type='text'
                                id='admin'
                                name='admin'
                                placeholder='Search for admins'
                                value={admin}
                            />

                            {adminList.length > 0 && (
                                <Styled.CategoryList>
                                    {adminList.map((admin) => (
                                        <SearchedAdmin
                                            val={admin}
                                            id={admin.id}
                                            removeAdmin={removeAdmin}
                                        />
                                    ))}
                                </Styled.CategoryList>
                            )}

                            {searchUserLoading ? (
                                <Styled.CentralizedLoader>
                                    <Loader color='white' size={32} />
                                </Styled.CentralizedLoader>
                            ) : (
                                adminSearch.length > 0 && (
                                    <Styled.SearchBox>
                                        {adminSearch.map((admin) => (
                                            <SearchRes
                                                res={admin}
                                                addAdmin={addAdmin}
                                            />
                                        ))}
                                    </Styled.SearchBox>
                                )
                            )}
                        </FormStyled.Fieldset>

                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='retroactiveLearner'>
                                {wantPreReqs === 'yes' ? 'RETROACTIVE' : ''}{' '}
                                EARNER
                            </FormStyled.Label>
                            {retroactiveEarners.map(
                                (retroactiveEarner, idx) => {
                                    return (
                                        <FormStyled.InputWrapper>
                                            <FormStyled.Input
                                                id={`retroactiveEarners-${idx}`}
                                                type='text'
                                                value={retroactiveEarner}
                                                placeholder='Enter wallet/ens address'
                                                onChange={(e) =>
                                                    updateRetroactiveEarner(
                                                        e.target.value,
                                                        idx
                                                    )
                                                }
                                                name='retroactiveEarners'
                                            />
                                            <Styled.IconBox
                                                ml='10px'
                                                onClick={
                                                    retroactiveEarners.length >
                                                    1
                                                        ? () =>
                                                              removeRetroactiveEarner(
                                                                  idx
                                                              )
                                                        : undefined
                                                }
                                            >
                                                {retroactiveEarners.length >
                                                1 ? (
                                                    <FaTrashAlt
                                                        style={{
                                                            color: 'white',
                                                        }}
                                                    />
                                                ) : (
                                                    <FaTrashAlt
                                                        style={{
                                                            color: 'rgba(255,255,255,0.2)',
                                                        }}
                                                    />
                                                )}
                                            </Styled.IconBox>
                                        </FormStyled.InputWrapper>
                                    );
                                }
                            )}
                            <FormStyled.IconButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    setRetroactiveEarners([
                                        ...retroactiveEarners,
                                        '',
                                    ]);
                                }}
                                style={{
                                    width: 'fit-content',
                                    alignSelf: 'center',
                                }}
                            >
                                <FaPlus />
                            </FormStyled.IconButton>
                        </FormStyled.Fieldset>
                        <FormStyled.Fieldset>
                            <FormStyled.Label htmlFor='title'>
                                Prerequisite
                            </FormStyled.Label>
                            <FormStyled.Input
                                onChange={(e) =>
                                    setPrerequisite(e.target.value)
                                }
                                type='text'
                                id='prerequisite'
                                name='prerequisite'
                                placeholder='Search'
                                value={prerequisite}
                            />
                            {prerequisiteList.length > 0 && (
                                <Styled.CategoryList>
                                    {prerequisiteList.map((prerequisite) => {
                                        return (
                                            <SearchedItem
                                                val={prerequisite.name}
                                                id={prerequisite.id}
                                                remove={removePrerequisite}
                                            />
                                        );
                                    })}
                                </Styled.CategoryList>
                            )}

                            {searchGateLoading ? (
                                <Styled.CentralizedLoader>
                                    <Loader color='white' size={32} />
                                </Styled.CentralizedLoader>
                            ) : (
                                prereqsSearch.length > 0 && (
                                    <Styled.SearchBox>
                                        {prereqsSearch.map((gate) => (
                                            <SearchResGate
                                                gate={gate}
                                                addGate={addPrerequisite}
                                            />
                                        ))}
                                    </Styled.SearchBox>
                                )
                            )}
                        </FormStyled.Fieldset>

                        <FormStyled.Button type='submit'>
                            {updateLoading && <Loader color='white' />}
                            Submit
                        </FormStyled.Button>
                    </>
                )}
            </Styled.Container>
        </Styled.Page>
    );
};
export default AddGateForm;
