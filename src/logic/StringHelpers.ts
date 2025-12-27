/**
 * String helper utilities for Marketplace
 * These functions provide common string manipulation utilities
 */

/**
 * Capitalize the first letter of a string
 * @param str The string to capitalize
 * @returns The capitalized string
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Truncate a string to a specified length and add ellipsis
 * @param str The string to truncate
 * @param maxLength Maximum length before truncation
 * @returns The truncated string with ellipsis if needed
 */
export const truncateString = (str: string, maxLength: number): string => {
  if (!str || str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
};

/**
 * Convert a string to kebab-case
 * @param str The string to convert
 * @returns The kebab-cased string
 */
export const toKebabCase = (str: string): string => {
  if (!str) return str;
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

/**
 * Check if a string is a valid URL
 * @param str The string to check
 * @returns True if the string is a valid URL
 */
export const isValidUrl = (str: string): boolean => {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
};

/**
 * Remove special characters from a string, keeping only alphanumeric and spaces
 * @param str The string to clean
 * @returns The cleaned string
 */
export const removeSpecialCharacters = (str: string): string => {
  if (!str) return str;
  return str.replace(/[^a-zA-Z0-9\s]/g, "");
};
