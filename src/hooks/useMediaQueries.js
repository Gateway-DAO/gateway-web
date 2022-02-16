import { useMediaQuery } from 'react-responsive';

const useMediaQueries = () => {
    return {
        xs: useMediaQuery({ query: '(min-width: 480px)' }),
        sm: useMediaQuery({ query: '(min-width: 768px)' }),
        md: useMediaQuery({ query: '(min-width: 992px)' }),
        lg: useMediaQuery({ query: '(min-width: 1200px)' }),
    };
};

export default useMediaQueries;
