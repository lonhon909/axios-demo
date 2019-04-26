/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
export default function isAbsoluteURL(url) {

  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}