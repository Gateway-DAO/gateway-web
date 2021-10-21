import Modal from "../index";
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
        <Modal>
            <h1>Add Bounty</h1>
            <label for="headline">Headline</label>
            <input onChange={e => setHeadline(e.target.value)} type="text" id="headline" name="headline" placeholder="Integrate your community on Gateway" />

            <fieldset>
                <label for="description">Description</label>
                <textarea id="description" onChange={e => setDescription(e.target.value)}></textarea>
            </fieldset>

            <fieldset>
                <input id="category-1" name="category" value="Design" type="checkbox" onChange={toggleCheckbox} />
                <label for="category-1">Design</label>
                <input id="category-2" name="category" value="Technical" type="checkbox" onChange={toggleCheckbox} />
                <label for="category-2">Technical</label>
                <input id="category-3" name="category" value="Business" type="checkbox" onChange={toggleCheckbox} />
                <label for="category-3">Business</label>
                <input id="category-4" name="category" value="Creative" type="checkbox" onChange={toggleCheckbox} />
                <label for="category-4">Creative</label>
                <input id="category-5" name="category" value="Strategy" type="checkbox" onChange={toggleCheckbox} />
                <label for="category-5">Strategy</label>
                <input id="category-6" name="category" value="Product" type="checkbox" onChange={toggleCheckbox} />
                <label for="category-6">Product</label>
                <input id="category-7" name="category" value="Other" type="checkbox" onChange={toggleCheckbox} />
                <label for="category-7">Other</label>
            </fieldset>

            <fieldset onChange={e => setLevel(e.target.value)}>
                <input id="level-1" name="level" value="Novice" type="radio" />
                <label for="level-1">Novice</label>
                <input id="level-2" name="level" value="Warrior" type="radio" />
                <label for="level-2">Warrior</label>
                <input id="level-3" name="level" value="Master" type="radio" />
                <label for="level-3">Master</label>
                <input id="level-4" name="level" value="Champion" type="radio" />
                <label for="level-4">Champion</label>
                <input id="level-5" name="level" value="Legend" type="radio" />
                <label for="level-5">Legend</label>
            </fieldset>

            <fieldset>
                <label for="reward">Reward</label>
                <input id="reward" type="number" min="0.001" onChange={e => setReward(e.target.value)} />
            </fieldset>

            <fieldset>
                <label for="directions">Directions</label>
                <textarea id="directions" onChange={e => setDirections(e.target.value)}></textarea>
            </fieldset>

            <fieldset>
                <label for="links">Important Links</label>
                <input id="links" type="text" onChange={e => setLink(e.target.value)} />
            </fieldset>

            <fieldset>
                <label for="end-date">End Date</label>
                <input id="end-date" type="date" onChange={e => setEndDate(e.target.value)} />
            </fieldset>

            <button id="submit_msg" type="button" onClick={submitToDB}>Submit</button>
        </Modal>
    )
}

export default BountyModal