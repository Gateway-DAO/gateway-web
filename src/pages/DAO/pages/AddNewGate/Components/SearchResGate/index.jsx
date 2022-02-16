import * as Styled from './style';

const SearchResGate = ({ gate, addGate }) => (
    <Styled.Container onClick={(e) => addGate(gate)}>
        <Styled.Name>{gate.name}</Styled.Name>
    </Styled.Container>
);

export default SearchResGate;
