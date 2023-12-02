import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - EcoMart`;
        } else {
            document.title = 'EcoMart | The Perfect Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
