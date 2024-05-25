/**
 * @description Logs data to the console
 * @param {*} message - string - What is being logged
 * @param {*} data - any type
 */
const logData = (message, data) => {
    console.info(
        `${message}\n---------------------------------------------------------------\n${
            typeof data === 'object' ? JSON.stringify(data) : data
        }\n`
    );
};

module.exports = { logData };