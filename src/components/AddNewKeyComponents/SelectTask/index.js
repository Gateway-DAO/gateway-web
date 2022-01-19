import * as Styled from './style'

const SelectTask = (props) => {
    const tasks = [
        { task: 'CREATE A QUIZ', link: '' },
        { task: 'Hold a NFT', link: '' },
        { task: 'HOLD A TOKEN', link: '/dao/forefront/newkey/token' },
        { task: 'SMART CONTRACT INTERACTION', link: '' },
        {
            task: 'SNAPSHOT GOVERNANCE',
            link: '/dao/forefront/newkey/governance',
        },
        { task: 'MANUAL TASK', link: '/dao/forefront/newkey/manual' },
        { task: 'COORDINAPE', link: '' },
        { task: 'SOURCECRED', link: '' },
        { task: 'COLONY', link: '' },
    ]
    return (
        <Styled.Wrapper>
            <Styled.Heading>Select A Task</Styled.Heading>
            <Styled.SubHeading>
                You should select one task per Key
            </Styled.SubHeading>
            <Styled.TasksBox>
                {tasks.map((task) => (
                    <Styled.TaskBox to={task.link} >
                        <Styled.TaskBoxText>{task.task}</Styled.TaskBoxText>
                    </Styled.TaskBox>
                ))}
            </Styled.TasksBox>
        </Styled.Wrapper>
    )
}

export default SelectTask
