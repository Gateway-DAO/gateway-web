import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { useState } from "react";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import RichEditor from "../../RichTextEditor";
import { useUpdateDAO } from "../../../api/database/useUpdateDAO";
import { Redirect } from "react-router-dom";

const BountyModal = props => {
    const [headline, setHeadline] = useState(null);
    const [description, setDescription] = useState("Enter the description");
    const [categories, setCategories] = useState([]);
    const [level, setLevel] = useState(null);
    const [reward, setReward] = useState(null);
    const [directions, setDirections] = useState(null);
    const [links, setLinks] = useState([""]);
    const [endDate, setEndDate] = useState(null);

    const { updateDAO, data, error, loading } = useUpdateDAO();

    const submitToDB = async () => {
        let parsedCategories = [];
        let currentDate = new Date().toISOString()

        categories.forEach(cat => parsedCategories.push(cat))

        const newBounties = [
            ...(props.data || []),
            {
                headline,
                description,
                level,
                categories: parsedCategories,
                reward,
                directions,
                links,
                endDate: new Date(endDate).toISOString(),
                postDate: currentDate
            }
        ]

        await updateDAO({ variables: {
            input: {
                id: props.id,
                bounties: newBounties
            }
        } })

        props.set(newBounties)
        props.toggle()
    }

    const toggleCheckbox = e => {
        const value = e.target.value;
        console.log(e);

        if (categories.includes(value) && !e.target.checked) {
            setCategories(categories.filter(cat => cat !== value));
        }
        else if (e.target.checked) {
            setCategories([...categories, value]);
        }
    }

    const deleteLink = idx => {
        setLinks(links.filter((i, index) => index !== idx))
    }

    const changeLink = (idx, e) => {
        e.preventDefault();
        setLinks(links.map((i, index) => {
            if (index === idx) {
                return e.target.value
            }

            return i
        }))
    }

    if (error) { return <Redirect to="/404" /> }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Add Bounty</ModalStyled.Header>
                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="headline">Headline
                    </ModalStyled.Label>
                    <ModalStyled.Input onChange={e => setHeadline(e.target.value)} type="text" id="headline" name="headline" placeholder="Integrate your community on Gateway" />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="description">Description</ModalStyled.Label>
                    <RichEditor set={setDescription} value={description} />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset marginBottom="30px">
                    <ModalStyled.Label>Categories</ModalStyled.Label>
                    <Styled.GridBox>
                        <ModalStyled.Checkbox id="category-1" name="category" value="Design" label="Design" onChange={toggleCheckbox} />
                        <ModalStyled.Checkbox id="category-2" name="category" value="Technical" label="Technical" onChange={toggleCheckbox} />
                        <ModalStyled.Checkbox id="category-3" name="category" value="Business" label="Business" onChange={toggleCheckbox} />
                        <ModalStyled.Checkbox id="category-4" name="category" value="Creative" label="Creative" onChange={toggleCheckbox} />
                        <ModalStyled.Checkbox id="category-5" name="category" value="Strategy" label="Strategy" onChange={toggleCheckbox} />
                        <ModalStyled.Checkbox id="category-6" name="category" value="Product" label="Product" onChange={toggleCheckbox} />
                        <ModalStyled.Checkbox id="category-7" name="category" value="Other" label="Other" onChange={toggleCheckbox} />
                    </Styled.GridBox>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset marginBottom="30px">
                    <ModalStyled.Label>Level</ModalStyled.Label>
                    <Styled.GridBox onChange={e => setLevel(e.target.value)}>
                        <ModalStyled.Radio id="level-1" name="level" value="Novice" label="Novice" checked={level === "Novice"} />
                        <ModalStyled.Radio id="level-2" name="level" value="Warrior" label="Warrior" checked={level === "Warrior"} />
                        <ModalStyled.Radio id="level-3" name="level" value="Master" label="Master" checked={level === "Master"} />
                        <ModalStyled.Radio id="level-4" name="level" value="Champion" label="Champion" checked={level === "Champion"} />
                        <ModalStyled.Radio id="level-5" name="level" value="Legend" label="Legend" checked={level === "Legend"} />
                    </Styled.GridBox>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="reward">Reward</ModalStyled.Label>
                    <ModalStyled.Input id="reward" type="text" onChange={e => setReward(e.target.value)} />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="directions">Directions</ModalStyled.Label>
                    <RichEditor set={setDirections} value={directions} />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="links">Important Links</ModalStyled.Label>

                    {links.map((step, idx) => (
                        <ModalStyled.InputWrapper>
                            <ModalStyled.Input id={`link-${idx}`} key={`bounty-link-${idx}`}
                                onChange={e => changeLink(idx, e)} value={step.description} type="text" />
                            <ModalStyled.IconButton onClick={() => deleteLink(idx)} style={{ marginLeft: "10px" }}><FaTrashAlt /></ModalStyled.IconButton>
                        </ModalStyled.InputWrapper>
                    ))}

                    <ModalStyled.IconButton onClick={() => setLinks([ ...links, "" ])} style={{ width: "fit-content", alignSelf: "center" }}><FaPlus /></ModalStyled.IconButton>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="end-date">End Date</ModalStyled.Label>
                    <ModalStyled.Input id="end-date" type="date" onChange={e => setEndDate(e.target.value)} />
                </ModalStyled.Fieldset>

                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default BountyModal