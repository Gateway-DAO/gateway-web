export const toHex = (stringToConvert) => {
    return stringToConvert
        .toString()
        .split('')
        .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('');
};

export const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const ytVideoID = (url) => {
    let regExp =
        /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    let match = url.match(regExp);

    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return '';
    }
};
