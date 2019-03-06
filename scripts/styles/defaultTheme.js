const colours = require('./colours.json');

module.exports = {
    color: {
        link: colours['colour-blue'],
        linkHover: colours['colour-blue-dark'],
        name: colours['colour-green-dark'],
        type: colours['colour-purple-dark'],
        sidebarBackground: colours['colour-black'],
    },
    mq: {
        small: '@media (max-width: 720px)',
    },
    sidebarWidth: '280px',
};
