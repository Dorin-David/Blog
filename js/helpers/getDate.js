/**
 * Parses a ISO 8601 formatted date into a human readable. day/month/year format date
 * E.g. parseDate('2023-03-25T17:13:58.058Z') -> "25/03/2023"
 * @param {String} timestamp - the iso date timestampt to be parsed
*/
export function parseDate(timestamp) {
    const dateObj = new Date(timestamp);

    return dateObj.toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' });
}