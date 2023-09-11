function main(input, commands) {
    let browser = input
    for (let iterator of commands) {
        if (iterator === 'Clear History and Cache') {
            browser['Open Tabs'] = [];
            browser['Browser Logs'] = [];
            browser['Recently Closed'] = [];
        }
        else if (iterator.split(" ")[0] === 'Open') {
            browser['Open Tabs'].push(iterator.split(" ")[1])
            browser['Browser Logs'].push(iterator);
        }
        else if (iterator.split(" ")[0] === 'Close') {
            for (let i = 0; i < browser['Open Tabs'].length; i++) {
                if (browser['Open Tabs'][i] === iterator.split(" ")[1]) {
                    let index = browser['Open Tabs'].indexOf(iterator.split(" ")[1])
                    let buff = iterator;
                    browser['Browser Logs'].push(buff)
                    browser['Recently Closed'].push(iterator.split(" ")[1]);
                    browser['Open Tabs'].splice(index, 1)
                }
            }
        }
    }
    console.log(browser[`Browser Name`]);
    console.log(`Open Tabs: ${browser[`Open Tabs`].join(", ")}`);
    console.log(`Recently Closed: ${browser[`Recently Closed`].join(", ")}`);
    console.log(`Browser Logs: ${browser[`Browser Logs`].join(", ")}`);
}