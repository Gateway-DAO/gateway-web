import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";
import { db } from "../../../api/firebase";
import { doc, getDoc, updateDoc, onSnapshot } from "@firebase/firestore";
import { useState } from "react";

const EditCardModal = props => {
    const [name, setName] = useState(props.name)
    const [backgroundURL, setBackgroundURL] = useState(props.backgroundURL)
    const [logoURL, setLogoURL] = useState(props.logoURL)
    const [tokenAddress, setTokenAddress] = useState(props.tokenAddress)
    const [description, setDescription] = useState(props.description)

    const submitToDB = async () => {
        const dao = doc(db, "daos", props.id);

        const newInfo = {
            name,
            backgroundURL,
            logoURL,
            tokenAddress,
            description
        }

        const unsub = onSnapshot(dao, (doc) => {
            props.toggle()
        });

        await updateDoc(dao, newInfo)

        unsub()
    }

    const toggleCheckbox = e => {
        const value = e.target.value;
        console.log(e);

        /*
        if (categories.includes(value) && !e.target.checked) {
            setCategories(categories.filter(cat => cat !== value));
        }
        else if (e.target.checked) {
            setCategories([...categories, value]);
        }
        */
    }

    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Edit Information</ModalStyled.Header>
                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="name">Name</ModalStyled.Label>
                    <ModalStyled.Input onChange={e => setName(e.target.value)} type="text" id="name" name="name" placeholder="Your DAO name" value={name} />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="logoURL">Logo URL</ModalStyled.Label>
                    <ModalStyled.Input onChange={e => setLogoURL(e.target.value)} type="text" id="logoURL" name="logoURL" placeholder="Your DAO logo URL" value={logoURL} />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="backgroundURL">Background URL</ModalStyled.Label>
                    <ModalStyled.Input onChange={e => setBackgroundURL(e.target.value)} type="text" id="backgroundURL" name="backgroundURL" placeholder="Your DAO background URL" value={backgroundURL} />
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="description">Description</ModalStyled.Label>
                    <ModalStyled.Textarea height="100px" id="description" onChange={e => setDescription(e.target.value)}>{description}</ModalStyled.Textarea>
                </ModalStyled.Fieldset>

                {/*
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
                */}

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="tokenAddress">Token Address</ModalStyled.Label>
                    <ModalStyled.Input id="tokenAddress" type="text" onChange={e => setTokenAddress(e.target.value)} value={tokenAddress} />
                </ModalStyled.Fieldset>

                <ModalStyled.Button id="submit_msg" type="button" onClick={submitToDB}>Save Changes</ModalStyled.Button>
            </Styled.Container>
        </Modal>
    )
}

export default EditCardModal