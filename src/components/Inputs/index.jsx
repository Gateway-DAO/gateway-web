import { useState } from 'react';
import * as Styled from './style';
import CheckboxComponent from './Checkbox';

//Chian Logo

export const SingleLineInputs = (props) => {
    return (
        <Styled.Wrapper>
            <Styled.Title>
                {props.title ? props.title : 'Title here'}
            </Styled.Title>
            <Styled.SingleInputDiv
                placeholder={
                    props.placeholder ? props.placeholder : 'Placeholder'
                }
            />
        </Styled.Wrapper>
    );
};

export const MultiLineInputs = (props) => {
    return (
        <Styled.Wrapper>
            <Styled.Title>Enter something Long</Styled.Title>
            <Styled.MultiInputDiv
                placeholder='Hello Multi'
                type='text'
                rows='5'
            />
        </Styled.Wrapper>
    );
};

export const SelectInput = (props) => {
    // const options = props.options
    const options = [
        { name: 'Ethereum', logo: '' },
        { name: 'Binance Smart Chain', logo: '' },
        { name: 'Avalanche', logo: '' },
        { name: 'Arbitrium', logo: '' },
        { name: 'Polygon', logo: '' },
        { name: 'XDAI', logo: '' },
        { name: 'Fantom', logo: '' },
        { name: 'Celo', logo: '' },
        { name: 'Harmony', logo: '' },
    ];
    return (
        <Styled.Wrapper>
            <Styled.Title>Chain</Styled.Title>
            <Styled.Select>
                <Styled.Option value=''>Please choose an option</Styled.Option>
                {options.map((option) => (
                    <Styled.Option value={option}>{option.name}</Styled.Option>
                ))}
            </Styled.Select>
        </Styled.Wrapper>
    );
};

export const SubmitButton = (props) => {
    return (
        <Styled.ButtonWrapper>
            <Styled.ButtonDiv>
                <Styled.ButtonText>Submit</Styled.ButtonText>
            </Styled.ButtonDiv>
        </Styled.ButtonWrapper>
    );
};

export const DateSelect = (props) => {
    const generateArrayOfYears = () => {
        var max = new Date().getFullYear();
        var min = max - 9;
        var years = [];

        for (var i = max; i >= min; i--) {
            years.push(i);
        }
        return years;
    };
    const month = [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const year = generateArrayOfYears();
    return (
        <Styled.Wrapper>
            <Styled.Title>{props.title}</Styled.Title>
            <Styled.SmallTitle>Start Date</Styled.SmallTitle>
            <Styled.TwoSelectWrapper>
                <Styled.TwoSelect>
                    <Styled.Option value=''>Please choose month</Styled.Option>
                    {month.map((option) => (
                        <Styled.Option value={option}>{option}</Styled.Option>
                    ))}
                </Styled.TwoSelect>
                <Styled.TwoSelect>
                    <Styled.Option value=''>Please choose year</Styled.Option>
                    {year.map((option) => (
                        <Styled.Option value={option}>{option}</Styled.Option>
                    ))}
                </Styled.TwoSelect>
            </Styled.TwoSelectWrapper>
            <Styled.SmallTitle>End Date</Styled.SmallTitle>
            <Styled.TwoSelectWrapper>
                <Styled.TwoSelect>
                    <Styled.Option value=''>Please choose month</Styled.Option>
                    {month.map((option) => (
                        <Styled.Option value={option}>{option}</Styled.Option>
                    ))}
                </Styled.TwoSelect>
                <Styled.TwoSelect>
                    <Styled.Option value=''>Please choose year</Styled.Option>
                    {year.map((option) => (
                        <Styled.Option value={option}>{option}</Styled.Option>
                    ))}
                </Styled.TwoSelect>
            </Styled.TwoSelectWrapper>
        </Styled.Wrapper>
    );
};

export const CheckBox = (props) => {
    const [checked, setChecked] = useState(true);
    return (
        <Styled.Wrapper onClick={() => setChecked((prev) => !prev)}>
            <CheckboxComponent checked={checked} visible={checked} />
            <Styled.CheckBoxLabel>{props.label}</Styled.CheckBoxLabel>
        </Styled.Wrapper>
    );
};

export const NumberSelect = (props) => {
    return (
        <Styled.Wrapper>
            <Styled.Title>{props.title}</Styled.Title>
            <Styled.NumberInputDiv>
                {/* <Styled.NumberInput type={'time'} /> */}
                <Styled.NumberBox>
                    <Styled.NumberDiv
                        type='number'
                        min='0'
                        max='23'
                        placeholder='00'
                    />
                    :
                    <Styled.NumberDiv
                        type='number'
                        min='0'
                        max='59'
                        placeholder='00'
                    />
                </Styled.NumberBox>
            </Styled.NumberInputDiv>
        </Styled.Wrapper>
    );
};
