// Styling
import * as Styled from './style';

// Hooks
import { useEffect } from 'react';

// Utils
import space from '../../../../../../utils/canvas';

/* This is a TypeScript interface that defines the shape of the data that this component will receive.
In this case, we are expecting a `gate` property that will be a string. */
interface AddKeySuccessProps {
    gate?: string;
    edit?: boolean;
}

/**
 * It renders a page that tells the user that the key was successfully added.
 * @param  - `gate`: The gate that the key was added to.
 * @returns A React component.
 */
const KeySuccess: React.FC<AddKeySuccessProps> = ({ gate, edit = false }) => {
    useEffect(
        () => space(window.innerHeight, window.innerWidth),
        [window.innerHeight, window.innerWidth]
    );

    useEffect(() => {
        if (gate === undefined) {
            window.location.href = '/';
        }

        const clear = setTimeout(() => {
            window.location.href = `/gate/${gate}/`;
        }, 3000);

        return () => clearTimeout(clear);
    }, []);

    return (
        <Styled.Container>
            <Styled.Heading>
                Key Successfully {edit ? 'Edited' : 'Added'}!
            </Styled.Heading>
            <Styled.RedirectText>Redirecting...</Styled.RedirectText>
        </Styled.Container>
    );
};

export default KeySuccess;
