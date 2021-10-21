import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { db } from "../../../api/firebase";
import { collection, doc, getDoc, query, updateDoc } from "@firebase/firestore";
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
        const dao = doc(db, "daos", props.id)
        const bounties = (await getDoc(dao)).data().bounties;
        let parsedCategories = [];
        let currentDate = new Date();

        categories.forEach(cat => parsedCategories.push(cat))

        updateDoc(dao, {
            bounties: [
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
                    postDate: `${currentDate.getFullYear()}-${String(currentDate.getUTCMonth()).padStart(2, '0')}-${String(currentDate.getUTCDay()).padStart(2, '0')}`
                }
            ]
        })
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

                <ModalStyled.Fieldset>
                    <ModalStyled.Label>Categories</ModalStyled.Label>
                    <Styled.GridBox>
                        <div>
                            <input id="category-1" name="category" value="Design" type="checkbox" />
                            <label for="category-1">Design</label>
                        </div>
                        <div>
                            <input id="category-2" name="category" value="Technical" type="checkbox" />
                            <label for="category-2">Technical</label>
                        </div>
                        <div>
                            <input id="category-3" name="category" value="Business" type="checkbox" />
                            <label for="category-3">Business</label>
                        </div>
                        <div>
                            <input id="category-4" name="category" value="Creative" type="checkbox" />
                            <label for="category-4">Creative</label>
                        </div>
                        <div>
                            <input id="category-5" name="category" value="Strategy" type="checkbox" />
                            <label for="category-5">Strategy</label>
                        </div>
                        <div>
                            <input id="category-6" name="category" value="Product" type="checkbox" />
                            <label for="category-6">Product</label>
                        </div>
                        <div>
                            <input id="category-7" name="category" value="Other" type="checkbox" />
                            <label for="category-7">Other</label>
                        </div>
                    </Styled.GridBox>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label>Level</ModalStyled.Label>
                    <Styled.GridBox onChange={e => setLevel(e.target.value)}>
                        <div>
                            <input id="level-1" name="level" value="Novice" type="radio" />
                            <label for="level-1">Novice</label>
                        </div>
                        <div>
                            <input id="level-2" name="level" value="Warrior" type="radio" />
                            <label for="level-2">Warrior</label>
                        </div>
                        <div>
                            <input id="level-3" name="level" value="Master" type="radio" />
                            <label for="level-3">Master</label>
                        </div>
                        <div>
                            <input id="level-4" name="level" value="Champion" type="radio" />
                            <label for="level-4">Champion</label>
                        </div>
                        <div>
                            <input id="level-5" name="level" value="Legend" type="radio" />
                            <label for="level-5">Legend</label>
                        </div>
                    </Styled.GridBox>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="reward">Reward</ModalStyled.Label>
                    <ModalStyled.Input id="reward" type="number" min="0.001" />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="directions">Directions</ModalStyled.Label>
                    <ModalStyled.Textarea height="100px" id="directions"></ModalStyled.Textarea>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="links">Important Links</ModalStyled.Label>
                    <ModalStyled.Input id="links" type="text" />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="end-date">End Date</ModalStyled.Label>
                    <ModalStyled.Input id="end-date" type="date" />
                </ModalStyled.Fieldset>

                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Submit</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default BountyModal