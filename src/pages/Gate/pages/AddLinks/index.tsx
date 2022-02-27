import * as Styled from './style';
import BackButton from '../../../../components/BackButton';
import { FormStyled } from '../../../../components/Form';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { updateGate } from '../../../../graphql/mutations';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Gate, TaskStatus } from '../../../../graphql/API';
import normalizeUrl from 'normalize-url';
import Loader from '../../../../components/Loader';

/* This is a type definition for the Link interface. It is used to make sure that the data that is
passed to the component is of the correct type. */
interface Link {
    name: string;
    link: string;
}

/* This is a type definition for the GateData interface. It is used to make sure that the data that is
passed to the component is of the correct type. */
interface GateData extends Gate {
    holders: number;
    keysDone: number;
    keysNumber: number;
    taskStatus: TaskStatus[];
}

interface IProps {
    edit?: boolean;
}

/**
 * This function is responsible for adding links to the website
 * @returns The return is a styled container with a box inside it. The box contains a heading
 * container, a links container and a save button.
 */
const LinksPage: React.FC<IProps> = ({ edit = false }) => {
    // State
    const { gateData }: { gateData: GateData } = useOutletContext();
    const [links, setLinks] = useState<Link[]>(
        edit
            ? gateData.links.map((link) => ({
                  name: link.name,
                  link: link.link,
              }))
            : [
                  {
                      name: '',
                      link: '',
                  },
              ]
    );

    // Hooks
    const [update, { loading }] = useMutation(gql(updateGate));
    const navigate = useNavigate();

    /**
     * It takes a value and an index and sets the link property of the object at that index to the
     * value.
     * @param {string} value - The value of the input field.
     * @param {number} idx - the index of the link that is being changed.
     */
    const changeLink = (value: string, idx: number): void =>
        setLinks((prev) =>
            prev.map((obj, jdx) => {
                if (jdx == idx) {
                    return {
                        name: obj.name,
                        link: value,
                    };
                }

                return obj;
            })
        );

    /**
     * It takes in a string and an index and returns a new array with the name changed at the specified
     * index.
     * @param {string} value - The value of the input field.
     * @param {number} idx - the index of the link that we want to change.
     */
    const changeName = (value: string, idx: number): void =>
        setLinks((prev) =>
            prev.map((obj, jdx) => {
                if (jdx == idx) {
                    return {
                        name: value,
                        link: obj.link,
                    };
                }

                return obj;
            })
        );

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await update({
                variables: {
                    input: {
                        id: gateData.id,
                        links: links.map((link) => ({
                            name: link.name,
                            link: normalizeUrl(link.link, { forceHttps: true }),
                        })),
                    },
                },
            });

            navigate('..');
        } catch (err) {
            alert('An error occurred, please try again later!');
        }
    };

    return (
        <Styled.Container>
            <BackButton>Back to Gate</BackButton>
            <FormStyled.FormBox onSubmit={onSubmit}>
                <Styled.HeadingContainer>
                    {edit ? 'Edit' : 'Add'} Links
                </Styled.HeadingContainer>
                <Styled.LinksContainer>
                    <Styled.LinksHeader>
                        <FormStyled.Label>Name</FormStyled.Label>
                        <FormStyled.Label>Link</FormStyled.Label>
                    </Styled.LinksHeader>
                    {links.map((link, idx) => (
                        <Styled.LinksElements>
                            <FormStyled.Input
                                placeholder='Link Name'
                                onChange={(e) =>
                                    changeName(e.target.value, idx)
                                }
                                value={link.name}
                            />
                            <FormStyled.Input
                                placeholder='Link URL'
                                onChange={(e) =>
                                    changeLink(e.target.value, idx)
                                }
                                value={link.link}
                            />
                            <Styled.TrashContainer>
                                <FaTrashAlt
                                    onClick={(e) =>
                                        setLinks((prev) =>
                                            prev.filter(
                                                (obj, jdx) => jdx !== idx
                                            )
                                        )
                                    }
                                />
                            </Styled.TrashContainer>
                        </Styled.LinksElements>
                    ))}
                </Styled.LinksContainer>
                <Styled.AddContainer>
                    <FaPlus
                        color='white'
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={() =>
                            setLinks((prev) => [
                                ...prev,
                                { name: '', link: '' },
                            ])
                        }
                    />
                </Styled.AddContainer>
                <FormStyled.Button>
                    {loading && <Loader color='white' />} SAVE
                </FormStyled.Button>
            </FormStyled.FormBox>
        </Styled.Container>
    );
};

export default LinksPage;
