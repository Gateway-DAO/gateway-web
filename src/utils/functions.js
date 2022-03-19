import { ADJECTIVES, NOUNS } from './constants';

/**
 * Convert a string to a hexadecimal string
 * @param stringToConvert - The string you want to convert to hex.
 * @returns The hexadecimal representation of the string.
 */
export const toHex = (stringToConvert) => {
    return stringToConvert
        .toString()
        .split('')
        .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
        .join('');
};

/**
 * It returns a promise that will resolve after the specified number of milliseconds.
 * @param ms - The number of milliseconds to wait before resolving the promise.
 * @returns Nothing.
 */
export const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Given a YouTube URL, return the video ID
 * @param url - The URL of the YouTube video.
 * @returns The video ID.
 */
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

/**
 * Generate a random username
 * @returns A string.
 */
export const usernameGenerator = () => {
    return (
        ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)] +
        '-' +
        NOUNS[Math.floor(Math.random() * NOUNS.length)] +
        '-' +
        Math.floor(Math.random() * 100)
    );
};
