import styled from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai';

export const SpinningLoader = styled(AiOutlineLoading)`
    animation: spin 1s linear infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    margin-right: 5px;
`;
