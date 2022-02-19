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

// Icons
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

// Utils
import { uploadFileToIPFS } from '../../../../api/IPFSFileUpload';
import FormData from 'form-data';
import Loader from '../../../../components/Loader';
import { useEffect } from 'react';
import useUpdateGate from '../../../../api/database/useUpdateGate';
import { gql, useLazyQuery } from '@apollo/client';
import { searchGates, searchUsers } from '../../../../graphql/queries';

/* Defining a type for the admin object. */
interface IAdmin {
    name: string;
    username: string;
    pfp: string;
    id: string;
}

/* Defining a type called IPrerequisite. */
interface IPrerequisite {
    name: string;
    id: string;
}

/* Creating a type that can be used to represent a NFT. */
enum NFT {
    CONTRIBUTOR = 'Contributor',
    REWARD = 'Reward',
}

/* Creating a YesNo enum with two values, YES and NO. */
enum YesNo {
    YES = 'Yes',
    NO = 'No',
}

/* This is a React component that will render the form to add a gate. */
const AddGateForm = () => {
    const { userInfo }: Record<string, any> = useAuth();
    const { state }: Record<string, any> = useLocation();
    const edit = state ? true : false;
    // State
    const [title, setTitle] = useState<string>(edit ? state.gateData.name : '');
    const [description, setDescription] = useState<string>(
        edit ? state.gateData.description : ''
    );
    const [retroactiveEarners, setRetroactiveEarners] = useState<string[]>([
        '',
    ]);
    const [uploadFile, setUploadFile] = useState(null);
    const [category, setCategory] = useState<string>('');
    const [categoryList, setCategoryList] = useState<(string | null)[]>(
        edit ? state.gateData.categories : []
    );
    const [skill, setSkill] = useState<string>(null);
    const [skillList, setSkillList] = useState<(string | null)[]>([]);
    const [knowledge, setKnowledge] = useState<string>(null);
    const [knowledgeList, setKnowledgeList] = useState<(string | null)[]>([]);
    const [attitude, setAttitude] = useState<string>(null);
    const [attitudeList, setAttitudeList] = useState<(string | null)[]>([]);
    const [prerequisite, setPrerequisite] = useState<string>('');
    const [prerequisiteList, setPrerequisiteList] = useState<
        (IPrerequisite | null)[]
    >([]);
    const [keyRequired, setKeyRequired] = useState<number>(
        edit ? state.gateData.keysNumber : 0
    );
    const [badgeName, setBadgeName] = useState<string>(
        edit ? state.gateData.badge.name : ''
    );
    const [admin, setAdmin] = useState<string>('');
    const [adminQuery, setAdminQuery] = useState<string>('');
    const [adminList, setAdminList] = useState<IAdmin[]>([
        {
            name: userInfo?.name || '',
            username: userInfo?.username || '',
            pfp: userInfo?.pfp || '',
            id: userInfo?.id || '',
        },
    ]);
    //const [adminIDList, setAdminIDList] = useState(edit?state.gateData.admins:[userInfo.id]);
    const [updateLoading, setUpdateeLoading] = useState<boolean>(false);
    const [adminSearch, setAdminSearch] = useState([]);
    const [NFTupdated, setNFTupdated] = useState<boolean>(edit);
    const [prereqsSearch, setPrereqsSearch] = useState([]);
    const [NFTType, setNFTType] = useState<NFT | null>(
        edit ? NFT.REWARD : null
    );
    const [wantPreReqs, setWantPreReqs] = useState<YesNo | null>(
        edit ? YesNo.YES : null
    );

    // Hooks
    const { daoData }: Record<string, any> = useOutletContext();
    const { createGate } = useCreateGate();
    const { updateGate } = useUpdateGate();
    const [
        searchByUsers,
        {
            data: searchUserData,
            loading: searchUserLoading,
            refetch: searchUserRefetch,
            called: searchUserCalled,
        },
    ] = useLazyQuery(gql(searchUsers), {
        variables: {
            filter: {
                or: [
                    { name: { wildcard: `*${admin.toLowerCase()}*` } },
                    { username: { wildcard: `*${admin.toLowerCase()}*` } },
                    { bio: { wildcard: `*${admin.toLowerCase()}*` } },
                ],
            },
        },
    });

    const [
        searchByGates,
        {
            data: searchGateData,
            loading: searchGateLoading,
            refetch: searchGateRefetch,
            called: searchGateCalled,
        },
    ] = useLazyQuery(gql(searchGates), {
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
    });

    const { batchMint } = useMint();
    const navigate = useNavigate();

    /* The addCategories function is called when the user presses the Enter key. 
    The function adds the current value of the category input to the categoryList array and clears
    the input. */
    const addCategories = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setCategoryList([...categoryList, category]);
            setCategory('');
        }
    };

    /**
     * It removes the category from the list of categories.
     */
    const removeCategories = (id: number) => {
        setCategoryList(categoryList.filter((value, i) => i !== id));
    };

    /* The addSkills function is called when the user presses the Enter key. 
    The function adds the current value of the skill input to the skillList array and clears
    the input. */
    const addSkills = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setSkillList([...skillList, skill]);
            setSkill('');
        }
    };

    /**
     * It removes the skill from the list of skills.
     */
    const removeSkills = (id: number) => {
        setSkillList(skillList.filter((value, i) => i !== id));
    };

    /* The addKnowledge function is called when the user presses the Enter key. 
    The function adds the current value of the knowledge input to the knowledgeList array and clears
    the input. */
    const addKnowledge = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setKnowledgeList([...knowledgeList, knowledge]);
            setKnowledge('');
        }
    };

    /**
     * It removes the category from the list of knowledge.
     */
    const removeKnowledge = (id: number) => {
        setKnowledgeList(knowledgeList.filter((value, i) => i !== id));
    };

    /* The addAttitude function is called when the user presses the Enter key. 
    The function adds the current value of the attitude input to the attitudeList array and clears
    the input. */
    const addAttitude = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setAttitudeList([...attitudeList, attitude]);
            setAttitude('');
        }
    };

    /**
     * It removes the attitude from the list of attitudes.
     */
    const removeAttitude = (id: number) => {
        setAttitudeList(attitudeList.filter((value, i) => i !== id));
    };

    /**
     * It adds a prerequisite to the list of prerequisites.
     */
    const addPrerequisite = (gate: IPrerequisite) => {
        setPrerequisiteList((prev) => [...prev, gate]);
        setPrereqsSearch((prev) => prev.filter((obj) => obj.id !== gate.id));
    };

    /**
     * Given an id, remove the prerequisite with that id from the prerequisite list
     */
    const removePrerequisite = (id: string) => {
        setPrerequisiteList((prev) => prev.filter((gate) => gate.id !== id));
    };

    /**
     * It adds an admin to the list of admins.
     */
    const addAdmin = (admin: IAdmin) => {
        setAdminList([...adminList, admin]);
        setAdminSearch((prev) => prev.filter((adm) => adm.id !== admin.id));
    };

    /**
     * It removes the admin from the list of admins.
     */
    const removeAdmin = (id: string) => {
        setAdminList((prev) => prev.filter((adm) => adm.id !== id));
    };

    const updateRetroactiveEarner = (e: React.ChangeEvent, idx: number) => {
        const add = retroactiveEarners.map((value, i) => {
            if (idx === i) {
                return (e.target as HTMLInputElement).value;
            }
            return value;
        });

        setRetroactiveEarners(add);
    };

    /* The removeRetroactiveEarner function is called when the user clicks the remove button. It
    removes the retroactive earner at the index of the button that was clicked. */
    const removeRetroactiveEarner = (idx: number) => {
        if (retroactiveEarners.length === 1) {
            alert('You have to put at least one retroactive earner');
            return false;
        }
        setRetroactiveEarners(
            retroactiveEarners.filter((value, i) => i !== idx)
        );
    };

    /**
     * It creates a new gate.
     * @param e - React.FormEvent
     * @returns The `createGate` mutation returns a `Gate` object.
     */
    const onSave = async (e: React.FormEvent) => {
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

            await createGate({
                variables: {
                    input: {
                        id: gateID,
                        daoID: daoData.id,
                        name: title,
                        description,
                        categories: categoryList,
                        admins: adminList.map((admin) => admin.id),
                        ...(wantPreReqs && { keysNumber: keyRequired }),
                        nftType: (NFTType as string).toUpperCase(),
                        ...(skillList.length > 0 && { skills: skillList }),
                        ...(attitudeList.length > 0 && {
                            attitudes: attitudeList,
                        }),
                        ...(knowledgeList.length > 0 && {
                            knowledge: knowledgeList,
                        }),
                        published: false,
                        holders: 0,
                        links: [],
                        retroactiveEarners,
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

    /**
     * It updates the gate.
     * @param e - The event object.
     * @returns The return value is the `updateGate` mutation.
     */
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
            searchByUsers();
        }, 2000);

        return () => clearTimeout(clear);
    }, [admin]);

    useEffect(() => {
        if (searchUserCalled && !!searchUserData) {
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
    }, [searchUserData]);

    useEffect(() => {
        const clear = setTimeout(() => {
            searchByGates();
        }, 2000);

        return () => clearTimeout(clear);
    }, [admin]);

    useEffect(() => {
        if (searchGateCalled && !!searchGateData) {
            const query = searchGateData.searchGates.items;
            const results = query.slice(0, 5).map((gate) => {
                return {
                    name: gate.name,
                    id: gate.id,
                };
            });
            setPrereqsSearch(results);
        }
    }, [searchGateData]);

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
                            setNFTType(
                                (e.target as HTMLInputElement).value as NFT
                            )
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
                            setWantPreReqs(
                                (e.target as HTMLInputElement).value as YesNo
                            )
                        }
                    >
                        <FormStyled.Radio
                            id='wantPreReqs-1'
                            name='wantPreReqs'
                            value='Yes'
                            label='Yes'
                            checked={wantPreReqs === YesNo.YES}
                        />
                        <FormStyled.Radio
                            id='wantPreReqs-2'
                            name='wantPreReqs'
                            value='No'
                            label='No'
                            checked={wantPreReqs === YesNo.NO}
                        />
                    </FormStyled.GridBox>
                </FormStyled.Fieldset>

                {NFTType && wantPreReqs && (
                    <>
                        {wantPreReqs === YesNo.YES && (
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
                                {wantPreReqs === YesNo.YES ? 'RETROACTIVE' : ''}{' '}
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
