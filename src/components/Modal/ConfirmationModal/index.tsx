import Modal from '..';
import * as Styled from './style';

/* A way to define a set of values that are allowed. */
enum Buttons {
    YES,
    NO,
    CANCEL,
}

interface ButtonProp {
    button: Buttons | string;
    handler(...args: any[]): any;
}

/* Defining the properties that the component will accept. */
interface IProps {
    show: boolean;
    toggle(): void;
    title?: string;
    body?: string;
    buttons?: ButtonProp[];
}

/**
 * It renders a modal with a title and body.
 * @param  - show: boolean, determines if the modal is shown or not.
 * @returns A modal with a title, body, and two buttons.
 */
const ConfirmationModal: React.FC<IProps> = ({
    show,
    toggle,
    title = 'Confirmation',
    body = 'Are you sure you want to proceed?',
    buttons = [
        {
            button: 'YES',
            handler: () => {
                return null;
            },
        },
        {
            button: 'NO',
            handler: () => {
                return null;
            },
        },
    ],
}) => (
    <Modal show={show} toggle={toggle}>
        <Styled.Container>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Body>{body}</Styled.Body>
            <Styled.ButtonContainer>
                {buttons.map((button, idx) => (
                    <Styled.Button key={idx} onClick={button.handler}>
                        {button.button}
                    </Styled.Button>
                ))}
            </Styled.ButtonContainer>
        </Styled.Container>
    </Modal>
);

export default ConfirmationModal;
