import React, { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Styling
import * as Styled from './styles';
import { FormStyled } from '../../../../components/Form';

// Components
import SearchedItem from './Components/SearhedItem';
import SearchedAdmin from './Components/SearchedAdmin';
import { ImageUpload } from '../../../../components/Form';

// Hooks
import { useCreateGate } from '../../../../api/database/useCreateGate';
import { useNavigate, useOutletContext, useLocation } from 'react-router-dom';
import { useAuth } from '../../../../contexts/UserContext';

// Utils
import { uploadFileToIPFS } from '../../../../api/IPFSFileUpload';
import FormData from 'form-data';
import Loader from '../../../../components/Loader';
import { useEffect } from 'react';

// API
import useUpdateGate from '../../../../api/database/useUpdateGate';
import { gql, useLazyQuery } from '@apollo/client';
import { searchGates, searchUsers } from '../../../../graphql/queries';
import {
    DAO,
    Gate,
    PublishedState,
    TaskStatus,
    User,
} from '../../../../graphql/API';

// Components
import BackButton from '../../../../components/BackButton';
import Space from '../../../../components/Space';
import { ProfilePicture } from './Components/SearchedAdmin/style';

/* This is a type definition for the GateData interface. It is used to make sure that the data that is
passed to the component is of the correct type. */
interface GateData extends Gate {
    holders: number;
    keysDone: number;
    keysNumber: number;
    taskStatus: TaskStatus[];
    adminList: User[];
    preRequisitesList: Gate[];
    retroactiveEarnersList: User[];
}

/* Defining a type for the admin object. */
interface IAdmin {
    name: string;
    username: string;
    pfp: string;
    id: string;
    wallet: string;
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
    const gateData: GateData | null = edit ? state.gateData : null;

    // State
    const [title, setTitle] = useState<string>(edit ? gateData.name : '');
    const [description, setDescription] = useState<string>(
        edit ? gateData.description : ''
    );
    const [retroactiveEarnersQuery, setRetroactiveEarnersQuery] =
        useState<string>('');
    const [retroactiveEarners, setRetroactiveEarners] = useState<IAdmin[]>(
        edit
            ? gateData.retroactiveEarnersList.map((retro) => ({
                  name: retro?.name || '',
                  username: retro?.username || '',
                  pfp: retro?.pfp || '',
                  id: retro?.id || '',
                  wallet: retro?.wallet || '',
              }))
            : []
    );
    const [uploadFile, setUploadFile] = useState(null);
    const [category, setCategory] = useState<string>('');
    const [categoryList, setCategoryList] = useState<(string | null)[]>(
        edit ? gateData.categories : []
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
        edit ? gateData.keysNumber : 0
    );
    const [badgeName, setBadgeName] = useState<string>(
        edit ? gateData.badge.name : ''
    );
    const [admin, setAdmin] = useState<string>('');
    const [adminList, setAdminList] = useState<IAdmin[]>(
        edit
            ? gateData.adminList.map((admin) => ({
                  name: admin?.name || '',
                  username: admin?.username || '',
                  pfp: admin?.pfp || '',
                  id: admin?.id || '',
                  wallet: admin?.wallet || '',
              }))
            : [
                  {
                      name: userInfo?.name || '',
                      username: userInfo?.username || '',
                      pfp: userInfo?.pfp || '',
                      id: userInfo?.id || '',
                      wallet: userInfo?.wallet || '',
                  },
              ]
    );
    //const [adminIDList, setAdminIDList] = useState(edit?gateData.admins:[userInfo.id]);
    const [updateLoading, setUpdateeLoading] = useState<boolean>(false);
    const [adminSearch, setAdminSearch] = useState([]);
    const [NFTupdated, setNFTupdated] = useState<boolean>(edit);
    const [prereqsSearch, setPrereqsSearch] = useState([]);
    const [NFTType, setNFTType] = useState<NFT | null>(
        edit
            ? (((gateData.nftType as string).charAt(0).toUpperCase() +
                  (gateData.nftType as string)
                      .substring(1)
                      .toLowerCase()) as NFT)
            : null
    );
    const [wantPreReqs, setWantPreReqs] = useState<YesNo | null>(
        edit ? YesNo.YES : null
    );

    // Hooks
    const { daoData }: { daoData: DAO } = useOutletContext();
    const { createGate } = useCreateGate();
    const { updateGate } = useUpdateGate();

    const [
        searchByUsers,
    ] = useLazyQuery(gql(searchUsers), {
        variables: {
            filter: {
                or: [
                    { name: { wildcard: `*${admin.toLowerCase()}*` } },
                    { username: { wildcard: `*${admin.toLowerCase()}*` } },
                    { bio: { wildcard: `*${admin.toLowerCase()}*` } },
                    { wallet: { wildcard: `*${admin.toLowerCase()}*` } },
                ],
            },
        },
    });

    const [searchByGates, { data: searchGateData, called: searchGateCalled }] =
        useLazyQuery(gql(searchGates), {
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

    const navigate = useNavigate();

    /* The addCategories function is called when the user presses the Enter key. 
    The function adds the current value of the category input to the categoryList array and clears
    the input. */
    const addCategories = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
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
            e.preventDefault();
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
            e.preventDefault();
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
            e.preventDefault();
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

    /* Creating a function that will be called when the adminList is updated. */
    const handleAdmin = useCallback((adminList) => {
        setAdminList(adminList);
    }, []);

    /**
     * It removes the admin from the list of admins.
     */
    const removeAdmin = (id: string) => {
        setAdminList((prev) => prev.filter((adm) => adm.id !== id));
    };
    /* Creating a function that will be called when the retroactiveEarners list is updated. */
    const handleEarner = useCallback((earnerList) => {
        setRetroactiveEarners(earnerList);
    }, []);

    /* The removeRetroactiveEarner function is called when the user clicks the remove button. It
    removes the retroactive earner at the index of the button that was clicked. */
    const removeRetroactiveEarner = (idx: string) => {
        setRetroactiveEarners((prev) =>
            prev.filter((value) => value.id !== idx)
        );
    };

    /**
     * It creates a new gate.
     * @param e - React.FormEvent
     * @returns The `createGate` mutation returns a `Gate` object.
     */
    const onSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setUpdateeLoading(true);

        try {
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
                        published: 'NOT_PUBLISHED',
                        holders: 0,
                        links: [],
                        retroactiveEarners: retroactiveEarners.map(earner => earner.wallet),
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
        e.preventDefault();
        setUpdateeLoading(true);

        if (uploadFile && NFTupdated) {
            try {
                const form = new FormData();
                form.append('file', uploadFile, 'image.png');
                const hash = await uploadFileToIPFS(form);

                await updateGate({
                    variables: {
                        input: {
                            id: gateData.id,
                            daoID: daoData.id,
                            name: title,
                            description,
                            categories: categoryList,
                            admins: adminList.map((admin) => admin.id),
                            keysNumber: keyRequired,
                            published: gateData.published,
                            retroactiveEarners: retroactiveEarners.map(earner => earner.wallet),
                            badge: {
                                name: badgeName,
                                ipfsURL: gateData.badge.ipfsURL,
                            },
                        },
                    },
                });
                navigate(`/gate/${gateData.id}`);
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
                            id: gateData.id,
                            daoID: daoData.id,
                            name: title,
                            description,
                            categories: categoryList,
                            admins: adminList.map((admin) => admin.id),
                            keysNumber: keyRequired,
                            published: gateData.published,
                            retroactiveEarners: retroactiveEarners.map(earner => earner.wallet),
                            badge: {
                                name: badgeName,
                                ipfsURL: gateData.badge.ipfsURL,
                            },
                        },
                    },
                });
                navigate(`/gate/${gateData.id}`);
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

    const getOptions = async (param) => {
        return (
            await searchByUsers({
                variables: {
                    filter: {
                        or: [
                            { name: { wildcard: `*${param.toLowerCase()}*` } },
                            {
                                username: {
                                    wildcard: `*${param.toLowerCase()}*`,
                                },
                            },
                            { bio: { wildcard: `*${param.toLowerCase()}*` } },
                            { bio: { wildcard: `*${param.toLowerCase()}*` } },
                        ],
                    },
                },
            })
        ).data.searchUsers.items.map((user) => ({
            ...user,
            label: user.name,
            value: user,
        }));
    };

    const UserOption = (props) => (
        <Styled.FlexOption {...props}>
            <ProfilePicture src={props.data.pfp} />
            <span>{props.data.label}</span>
        </Styled.FlexOption>
    );

    return (
        <Styled.Page>
            <Space>
                <BackButton
                    url={edit ? `/gate/${gateData.id}` : `/dao/${daoData.dao}`}
                    style={{
                        marginTop: '20px',
                    }}
                >
                    Back to Onboarding
                </BackButton>
                <Styled.FormContainer onSubmit={edit ? onEdit : onSave}>
                    <Styled.Header>
                        {edit ? `Edit Gate` : `Create a New Gate`}
                    </Styled.Header>
                    {(!edit ||
                        gateData?.published ===
                            PublishedState.NOT_PUBLISHED) && (
                        <>
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
                                {/* <RichTextEditor value={description} set={setDescription} /> */}
                                <FormStyled.Textarea
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    onKeyPress={(e) => {
                                        e.key === 'Enter' && e.preventDefault();
                                    }}
                                    value={description}
                                    name='description'
                                    placeholder='This will be the description of your Gate. We reccommend maximum of 2 lines.'
                                    required
                                />
                            </FormStyled.Fieldset>

                            <FormStyled.Fieldset>
                                <FormStyled.Label htmlFor='title'>
                                    Category*
                                </FormStyled.Label>
                                <FormStyled.Input
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
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
                                                <React.Fragment key={id}>
                                                    <SearchedItem
                                                        val={category}
                                                        id={id}
                                                        remove={
                                                            removeCategories
                                                        }
                                                    />
                                                </React.Fragment>
                                            );
                                        })}
                                    </Styled.CategoryList>
                                )}
                            </FormStyled.Fieldset>

                            <FormStyled.Fieldset>
                                <FormStyled.Label>
                                    Type of Badge*
                                </FormStyled.Label>
                                <FormStyled.GridBox
                                    cols={2}
                                    onChange={(e) =>
                                        setNFTType(
                                            (e.target as HTMLInputElement)
                                                .value as NFT
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
                                    Would you like to have keys?
                                </FormStyled.Label>
                                <FormStyled.GridBox
                                    cols={2}
                                    onChange={(e) =>
                                        setWantPreReqs(
                                            (e.target as HTMLInputElement)
                                                .value as YesNo
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
                        </>
                    )}

                    {NFTType && wantPreReqs && (
                        <>
                            {wantPreReqs === YesNo.YES && (
                                <FormStyled.Fieldset>
                                    <FormStyled.Label htmlFor='title'>
                                        KEYS REQUIRED*
                                    </FormStyled.Label>
                                    <Styled.InputSmall
                                        onKeyPress={(e) => {
                                            e.key === 'Enter' &&
                                                e.preventDefault();
                                        }}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setKeyRequired(e.target.value);
                                        }}
                                        type='number'
                                        id='keyReq'
                                        name='keyReq'
                                        placeholder='0'
                                        value={
                                            keyRequired > 0 ? keyRequired : null
                                        }
                                        required
                                    />
                                </FormStyled.Fieldset>
                            )}

                            {(!edit ||
                                gateData?.published ===
                                    PublishedState.NOT_PUBLISHED) && (
                                <>
                                    {NFTType === 'Reward' && (
                                        <>
                                            <FormStyled.Fieldset>
                                                <FormStyled.Label htmlFor='skills'>
                                                    Skills
                                                </FormStyled.Label>
                                                <FormStyled.Input
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setSkill(
                                                            e.target.value
                                                        );
                                                    }}
                                                    type='text'
                                                    id='skills'
                                                    name='skills'
                                                    placeholder='Search Skills'
                                                    onKeyPress={addSkills}
                                                    value={skill}
                                                />

                                                {skillList.length > 0 && (
                                                    <Styled.CategoryList>
                                                        {skillList.map(
                                                            (skill, id) => {
                                                                return (
                                                                    <SearchedItem
                                                                        val={
                                                                            skill
                                                                        }
                                                                        id={id}
                                                                        remove={
                                                                            removeSkills
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                    </Styled.CategoryList>
                                                )}
                                            </FormStyled.Fieldset>

                                            <FormStyled.Fieldset>
                                                <FormStyled.Label htmlFor='knowledge'>
                                                    Knowledge
                                                </FormStyled.Label>
                                                <FormStyled.Input
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setKnowledge(
                                                            e.target.value
                                                        );
                                                    }}
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
                                                                        val={
                                                                            knowledge
                                                                        }
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
                                                    onChange={(e) => {
                                                        e.preventDefault();
                                                        setAttitude(
                                                            e.target.value
                                                        );
                                                    }}
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
                                                                        val={
                                                                            attitude
                                                                        }
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
                                                label='Upload Badge Image*'
                                                setImage={setUploadFile}
                                                defaultImageURL={`https://gateway.pinata.cloud/ipfs/${gateData.badge.ipfsURL}`}
                                            />
                                        ) : (
                                            <ImageUpload
                                                htmlFor='ProfileImage'
                                                label='Upload Badge Image*'
                                                setImage={setUploadFile}
                                            />
                                        )}
                                        <Styled.AllowedFileType>
                                            <p>Image files only.</p>
                                            <p>
                                                File supported: JPG, PNG, GIF,
                                                SVG, WEBM
                                            </p>
                                            <p>Max size: 100 MB</p>
                                        </Styled.AllowedFileType>
                                    </FormStyled.Fieldset>

                                    <FormStyled.Fieldset>
                                        <FormStyled.Label htmlFor='title'>
                                            Badge Name*
                                        </FormStyled.Label>
                                        <FormStyled.Input
                                            onChange={(e) => {
                                                e.preventDefault();
                                                setBadgeName(e.target.value);
                                            }}
                                            onKeyPress={(e) => {
                                                e.key === 'Enter' &&
                                                    e.preventDefault();
                                            }}
                                            type='text'
                                            id='badgeName'
                                            name='badgeName'
                                            placeholder='Insert the name here'
                                            value={badgeName}
                                            required
                                        />
                                    </FormStyled.Fieldset>
                                </>
                            )}
                            <FormStyled.Fieldset>
                                <FormStyled.Label htmlFor='admins'>
                                    Admin Privileges*
                                </FormStyled.Label>
                                <FormStyled.AsyncSelect
                                    id={`admins`}
                                    isMulti
                                    controlShouldRenderValue={false}
                                    onInputChange={(e) => setAdmin(e)}
                                    onChange={handleAdmin}
                                    loadOptions={async () =>
                                        (await getOptions(admin)).filter(
                                            (user: User) =>
                                                !adminList
                                                    .map((admins) => admins.id)
                                                    .includes(user.id)
                                        )
                                    }
                                    defaultValue={adminList}
                                    value={adminList}
                                    components={{
                                        Option: UserOption,
                                    }}
                                    menuPortalTarget={document.body}
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
                            </FormStyled.Fieldset>

                            {/*(!edit ||
                                gateData?.published ===
                                    PublishedState.NOT_PUBLISHED) && (
                                <FormStyled.Fieldset>
                                    <FormStyled.Label htmlFor='retroactiveEarners'>
                                        {wantPreReqs === YesNo.YES
                                            ? 'RETROACTIVE'
                                            : ''}{' '}
                                        EARNER
                                    </FormStyled.Label>
                                    <FormStyled.AsyncSelect
                                        id={`retroactiveEarners`}
                                        isMulti
                                        controlShouldRenderValue={false}
                                        onInputChange={(e) =>
                                            setRetroactiveEarnersQuery(e)
                                        }
                                        onChange={handleEarner}
                                        defaultValue={retroactiveEarners}
                                        value={retroactiveEarners}
                                        loadOptions={async () =>
                                            await getOptions(
                                                retroactiveEarnersQuery
                                            )
                                        }
                                        components={{
                                            Option: UserOption,
                                        }}
                                        menuPortalTarget={document.body}
                                    />
                                    {retroactiveEarners.length > 0 && (
                                        <Styled.CategoryList>
                                            {retroactiveEarners.map(
                                                (earner) => (
                                                    <SearchedAdmin
                                                        val={earner}
                                                        id={earner.id}
                                                        removeAdmin={
                                                            removeRetroactiveEarner
                                                        }
                                                    />
                                                )
                                            )}
                                        </Styled.CategoryList>
                                    )}
                                </FormStyled.Fieldset>
                            )}

                            {/*
                            <FormStyled.Fieldset>
                                <FormStyled.Label htmlFor='title'>
                                    Prerequisite
                                </FormStyled.Label>
                                <FormStyled.SearchInput
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
                                        {prerequisiteList.map(
                                            (prerequisite) => {
                                                return (
                                                    <SearchedItem
                                                        val={prerequisite.name}
                                                        id={prerequisite.id}
                                                        remove={
                                                            removePrerequisite
                                                        }
                                                    />
                                                );
                                            }
                                        )}
                                    </Styled.CategoryList>
                                )}

                                {searchGateLoading ? (
                                    <Styled.CentralizedLoader>
                                        <Loader color='white' size={32} />
                                    </Styled.CentralizedLoader>
                                ) : (
                                    prereqsSearch.length > 0 &&
                                    prerequisite.length > 0 && (
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
                                            */}

                            <FormStyled.Button type='submit'>
                                {updateLoading && <Loader color='white' />}
                                Submit
                            </FormStyled.Button>
                        </>
                    )}
                </Styled.FormContainer>
            </Space>
        </Styled.Page>
    );
};
export default AddGateForm;
