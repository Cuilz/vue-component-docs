const colours = require('./colours.json');

module.exports = {
    StyleGuide: {
        logo: {
            border: 'none',
            padding: 0
        },
        sidebar: {
            border: 'none',
        },
    },
    Logo: {
        logo: {
            color: colours['colour-white'],
            fontSize: '20px',
            marginLeft: '16px',
            marginTop: '10px',
            marginBottom: '10px'
        }
    },
    Version: {
        version: {
            color: colours['colour-white'],
            fontSize: '14px',
            marginLeft: '16px'
        }
    },
    TableOfContents: {
        search: {
            width: '100%',
            padding: 0,
            marginTop: '20px',
            marginBottom: '20px',
        },
        input: {
            backgroundColor: colours['colour-black-dark'],
            border: 'none',
            borderRadius: 0,
            padding: '14px 7px',
            opacity: 0.5,
            color: colours['colour-white'],
            '&:focus': {
                opacity: 0.8,
            },
        },
    },
    ComponentsList: {
        list: {
            fontSize: '11px',
        },
        item: {
            '& a': {
                color: `${colours['colour-grey']}!important`,
                '&:hover': {
                    fontSize: 'inherit',
                    color: `${colours['colour-white']}!important`,
                },
            },
        },
        heading: {
            color: `${colours['colour-white']}!important`,
            textTransform: 'uppercase !important',
        },
    },
}
