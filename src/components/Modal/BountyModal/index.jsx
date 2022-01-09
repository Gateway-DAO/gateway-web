import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { FormStyled } from "../../Form"
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
                <FormStyled.Fieldset>
                    <FormStyled.Label for="headline">Headline
                    </FormStyled.Label>
                    <FormStyled.Input onChange={e => setHeadline(e.target.value)} type="text" id="headline" name="headline" placeholder="Integrate your community on Gateway" />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="description">Description</FormStyled.Label>
                    <RichEditor set={setDescription} value={description} />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom="30px">
                    <FormStyled.Label>Categories</FormStyled.Label>
                    <Styled.GridBox>
                        <FormStyled.Checkbox id="category-1" name="category" value="Design" label="Design" onChange={toggleCheckbox} />
                        <FormStyled.Checkbox id="category-2" name="category" value="Technical" label="Technical" onChange={toggleCheckbox} />
                        <FormStyled.Checkbox id="category-3" name="category" value="Business" label="Business" onChange={toggleCheckbox} />
                        <FormStyled.Checkbox id="category-4" name="category" value="Creative" label="Creative" onChange={toggleCheckbox} />
                        <FormStyled.Checkbox id="category-5" name="category" value="Strategy" label="Strategy" onChange={toggleCheckbox} />
                        <FormStyled.Checkbox id="category-6" name="category" value="Product" label="Product" onChange={toggleCheckbox} />
                        <FormStyled.Checkbox id="category-7" name="category" value="Other" label="Other" onChange={toggleCheckbox} />
                    </Styled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset marginBottom="30px">
                    <FormStyled.Label>Level</FormStyled.Label>
                    <Styled.GridBox onChange={e => setLevel(e.target.value)}>
                        <FormStyled.Radio id="level-1" name="level" value="Novice" label="Novice" checked={level === "Novice"} />
                        <FormStyled.Radio id="level-2" name="level" value="Warrior" label="Warrior" checked={level === "Warrior"} />
                        <FormStyled.Radio id="level-3" name="level" value="Master" label="Master" checked={level === "Master"} />
                        <FormStyled.Radio id="level-4" name="level" value="Champion" label="Champion" checked={level === "Champion"} />
                        <FormStyled.Radio id="level-5" name="level" value="Legend" label="Legend" checked={level === "Legend"} />
                    </Styled.GridBox>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="reward">Reward</FormStyled.Label>
                    <FormStyled.Input id="reward" type="text" onChange={e => setReward(e.target.value)} />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="directions">Directions</FormStyled.Label>
                    <RichEditor set={setDirections} value={directions} />
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="links">Important Links</FormStyled.Label>

                    {links.map((step, idx) => (
                        <FormStyled.InputWrapper>
                            <FormStyled.Input id={`link-${idx}`} key={`bounty-link-${idx}`}
                                onChange={e => changeLink(idx, e)} value={step.description} type="text" />
                            <FormStyled.IconButton onClick={() => deleteLink(idx)} style={{ marginLeft: "10px" }}><FaTrashAlt /></FormStyled.IconButton>
                        </FormStyled.InputWrapper>
                    ))}

                    <FormStyled.IconButton onClick={() => setLinks([ ...links, "" ])} style={{ width: "fit-content", alignSelf: "center" }}><FaPlus /></FormStyled.IconButton>
                </FormStyled.Fieldset>

                <FormStyled.Fieldset>
                    <FormStyled.Label for="end-date">End Date</FormStyled.Label>
                    <FormStyled.Input id="end-date" type="date" onChange={e => setEndDate(e.target.value)} />
                </FormStyled.Fieldset>

                <FormStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</FormStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default BountyModal