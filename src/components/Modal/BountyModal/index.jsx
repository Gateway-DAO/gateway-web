import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { db } from "../../../api/firebase";
import { doc, getDoc, updateDoc, onSnapshot } from "@firebase/firestore";
import { useState } from "react";

const BountyModal = props => {
    const [headline, setHeadline] = useState(null);
    const [description, setDescription] = useState(null);
    const [categories, setCategories] = useState([]);
    const [level, setLevel] = useState(null);
    const [reward, setReward] = useState(null);
    const [directions, setDirections] = useState(null);
    const [link, setLink] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id);
        const bounties = (await getDoc(dao)).data().bounties;
        let parsedCategories = [];
        let currentDate = new Date().toISOString().slice(0, 10)

        categories.forEach(cat => parsedCategories.push(cat))

        const newBounties = [
            ...(bounties || []),
            {
                headline,
                description,
                level,
                categories: parsedCategories,
                reward,
                directions,
                link,
                endDate,
                postDate: currentDate
            }
        ]

        const unsub = onSnapshot(dao, (doc) => {
            props.set(newBounties)
            props.toggle()
        });

        await updateDoc(dao, {
            bounties: newBounties
        })

        unsub()
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
                    <ModalStyled.Textarea height="100px" id="description" onChange={e => setDescription(e.target.value)}></ModalStyled.Textarea>
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
                    <ModalStyled.Textarea height="100px" id="directions" onChange={e => setDirections(e.target.value)}></ModalStyled.Textarea>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="links">Important Links</ModalStyled.Label>
                    <ModalStyled.Input id="links" type="text" onChange={e => setLink(e.target.value)} />
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