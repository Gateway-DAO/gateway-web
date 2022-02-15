import React from 'react';

// Styling

// Hooks
// import useVerifyQuiz from '../../../../../../../../api/database/keys/useVerifyQuiz'
import { useAuth } from '../../../../../../../../contexts/UserContext';

const Quiz = ({
    data,
    setVerify,
    buttonBehavior,
    questionIdx,
    setQuestionIdx,
}) => {
    const { userInfo } = useAuth();
    // const { verifyQuiz } = useVerifyQuiz()

    return (
        <>
            <p>
                Please answer the 3 questions. You need 3 right in order to
                advance to the next task.
            </p>
        </>
    );
};

export default React.memo(Quiz);
