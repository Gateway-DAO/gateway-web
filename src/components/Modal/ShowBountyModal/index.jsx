import Modal from "../index";
import * as Styled from "./style";
import * as ModalStyled from "../style";

const ShowBountyModal = props => {
    return (
        <Modal show={props.show} toggle={props.toggle}>
            <Styled.Container>
                <ModalStyled.Header>Bounty Info</ModalStyled.Header>
                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="headline">Headline</ModalStyled.Label>
                    <Styled.Text>{props.bounty.headline}</Styled.Text>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="description">Description</ModalStyled.Label>
                    <Styled.Text>{props.bounty.description}</Styled.Text>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset marginBottom="30px">
                    <ModalStyled.Label>Categories</ModalStyled.Label>
                    <Styled.GridBox>
                        <ModalStyled.LockedCheckbox id="category-1" name="category" value="Design" label="Design" checked={props.bounty.categories.includes("Design")} />
                        <ModalStyled.LockedCheckbox id="category-2" name="category" value="Technical" label="Technical" checked={props.bounty.categories.includes("Technical")} />
                        <ModalStyled.LockedCheckbox id="category-3" name="category" value="Business" label="Business" checked={props.bounty.categories.includes("Business")} />
                        <ModalStyled.LockedCheckbox id="category-4" name="category" value="Creative" label="Creative" checked={props.bounty.categories.includes("Creative")} />
                        <ModalStyled.LockedCheckbox id="category-5" name="category" value="Strategy" label="Strategy" checked={props.bounty.categories.includes("Strategy")} />
                        <ModalStyled.LockedCheckbox id="category-6" name="category" value="Product" label="Product" checked={props.bounty.categories.includes("Product")} />
                        <ModalStyled.LockedCheckbox id="category-7" name="category" value="Other" label="Other" checked={props.bounty.categories.includes("Other")} />
                    </Styled.GridBox>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset marginBottom="30px">
                    <ModalStyled.Label>Level</ModalStyled.Label>
                    <Styled.GridBox>
                        <ModalStyled.Radio id="level-1" name="level" value="Novice" label="Novice" checked={props.bounty.level === "Novice"} />
                        <ModalStyled.Radio id="level-2" name="level" value="Warrior" label="Warrior" checked={props.bounty.level === "Warrior"} />
                        <ModalStyled.Radio id="level-3" name="level" value="Master" label="Master" checked={props.bounty.level === "Master"} />
                        <ModalStyled.Radio id="level-4" name="level" value="Champion" label="Champion" checked={props.bounty.level === "Champion"} />
                        <ModalStyled.Radio id="level-5" name="level" value="Legend" label="Legend" checked={props.bounty.level === "Legend"} />
                    </Styled.GridBox>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="reward">Reward</ModalStyled.Label>
                    <Styled.Text>{props.bounty.reward}</Styled.Text>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="directions">Directions</ModalStyled.Label>
                    <Styled.Text>{props.bounty.directions}</Styled.Text>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="links">Important Links</ModalStyled.Label>
                    <Styled.Text>{props.bounty.link}</Styled.Text>
                </ModalStyled.Fieldset>

                <ModalStyled.Fieldset>
                    <ModalStyled.Label for="end-date">End Date</ModalStyled.Label>
                    <Styled.Text>{props.bounty.endDate}</Styled.Text>
                </ModalStyled.Fieldset>
            </Styled.Container>
        </Modal>
    )
}

export default ShowBountyModal