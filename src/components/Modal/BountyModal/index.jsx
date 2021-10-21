import Modal from "../index";
import * as Styled from "./style";
import { db } from "../../../api/firebase";
import { collection, doc, getDoc, query, updateDoc } from "@firebase/firestore";
import { useState } from "react";

const BountyModal = props => {
    const [headline, setHeadline] = useState(null);
    const [description, setDescription] = useState(null);
    const [categories, setCategories] = useState([]);
    const [level, setLevel] = useState(null);

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id)
        const bounties = (await getDoc(dao)).data().bounties;
        updateDoc(dao, {
            bounties: [
                ...(bounties || []),
                {
                    headline,
                    description,
                    level
                }
            ]
        })
    }

    const selectCheckBox = e => {
        const value = e.target.value
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <Styled.BountyHeader>Add Bounty</Styled.BountyHeader>
                <Styled.BountyLabel for="headline">Headline
                </Styled.BountyLabel>
                <input onChange={e => setHeadline(e.target.value)} type="text" id="headline" name="headline" placeholder="Integrate your community on Gateway" />

                <fieldset>
                    <Styled.BountyLabel for="description">Description</Styled.BountyLabel>
                    <textarea id="description" onChange={e => setDescription(e.target.value)}></textarea>
                </fieldset>

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

                <fieldset>
                    <Styled.BountyLabel for="reward">Reward</Styled.BountyLabel>
                    <input id="reward" type="number" min="0.001" />
                </fieldset>

                <fieldset>
                    <Styled.BountyLabel for="directions">Directions</Styled.BountyLabel>
                    <textarea id="directions"></textarea>
                </fieldset>

                <fieldset>
                    <Styled.BountyLabel for="links">Important Links</Styled.BountyLabel>
                    <input id="links" type="text" />
                </fieldset>

                <fieldset>
                    <Styled.BountyLabel for="end-date">End Date</Styled.BountyLabel>
                    <input id="end-date" type="date" />
                </fieldset>

                <button id="submit_msg" type="button" onClick={submitToDB}>Submit</button>
            </Styled.Container>
        </Modal>
    )
}

export default BountyModal