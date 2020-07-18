const _ = require("lodash");
const samples = {
    section: [{
            name: "hero",
            img: "https://i.ibb.co/7KkcVG7/hero-sample-image.png",
            tree: {
                type: "site-section",
                style: {
                    background: "url(https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80) no-repeat center center scroll",
                    backgroundSize: "cover",
                    height: "620px",
                    padding: "10px 10px 10px 10px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                },
                cmps: [{
                        type: "site-text",
                        content: "Explore Amazing Places",
                        style: {
                            fontFamily: "Righteous",
                            fontSize: "5rem",
                            color: "#FFF",
                            textShadow: "2px 1px 1px #000",
                        },
                    },
                    {
                        type: "site-button",
                        content: { text: "Book now", href: "" },
                        style: {
                            fontFamily: "Righteous",
                            backgroundColor: "#fcbf1e",
                            padding: "1rem",
                            textTransform: "uppercase",
                            boxShadow: "4px 4px #000",
                        },
                    },
                ],
            },
        },
        {
            name: "card",
            img: "https://i.ibb.co/2y5Fsvb/card1.png",
            tree: {
                type: "site-section",
                style: {
                    height: "500px",
                    width: "100%",
                    padding: "5rem",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                },
                cmps: [{
                        type: "site-text",
                        content: `Lago di Braies :
                  In summer, lake Lago di Braies in South Tyrol reflects colours in all shades from green to blue, in winter Lago di Braies is covered with ice and snow. In winter and summer this jewel is the starting point for hikes, ski tours, snowshoe hikes and walks. Book through us and let's explore it together!`,
                        style: {
                            fontFamily: "Righteous",
                            padding: "1rem",
                            textTransform: "uppercase",
                            textAlign: "center",
                            lineHeight: "2rem",
                            fontSize: "1.5rem",
                        },
                    },
                    {
                        type: "site-image",
                        content: "https://images.unsplash.com/photo-1521102761523-b268f61473e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
                        style: {
                            height: "480px",
                            width: "580px",
                            objectFit: "cover",
                        },
                    },
                ],
            },
        },
    ],
};
const templates = [{
    _id: "5e28393890dd7201a06d4e44",
    name: "new site",
    previewImg: "",
    createdBy: {
        username: "eni",
        _id: "5e26e0b718a0891d4c995527",
    },
    cmps: [{
            type: "site-section",
            style: {
                background: "url(https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80) no-repeat center center scroll",
                backgroundSize: "cover",
                height: "620px",
                padding: "10px 10px 10px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            },
            cmps: [{
                    type: "site-div",
                    style: {
                        height: "6rem",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#b0c3c266",
                        alignItems: "center",
                    },
                    cmps: [{
                            type: "site-image",
                            content: "https://i1.sndcdn.com/avatars-000214595785-kgx9qu-t500x500.jpg",
                            style: {
                                height: "5rem",
                                objectFit: "cover",
                                borderRadius: "16px",
                                paddingInlineStart: ".1rem"
                            },
                        },
                        {
                            type: "site-list",
                            cmps: [{
                                    type: "site-text",
                                    content: "HOME",
                                    style: {
                                        marginInlineEnd: "1rem",
                                        color: "#000000",
                                    },
                                },
                                {
                                    type: "site-text",
                                    content: "ABOUT",
                                    style: {
                                        marginInlineEnd: "1rem",
                                        color: "#000000",
                                    },
                                },
                                {
                                    type: "site-text",
                                    content: "SERVICES",
                                    style: {
                                        marginInlineEnd: "1rem",
                                        color: "#000000",
                                    },
                                },
                                {
                                    type: "site-text",
                                    content: "DESTINATIONS",
                                    style: {
                                        marginInlineEnd: "1rem",
                                        color: "#000000",
                                    },
                                },
                                {
                                    type: "site-text",
                                    content: "CONTACT US",
                                    style: {
                                        marginInlineEnd: "1rem",
                                        color: "#000000",
                                    },
                                },
                            ],

                            style: {
                                fontFamily: "Righteous",
                                color: "#FFF",
                                display: "flex",
                            },
                        },
                    ],
                },
                {
                    type: "site-div",
                    style: {
                        height: "500px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    },
                    cmps: [{
                            type: "site-text",
                            content: "Explore Amazing Places",
                            style: {
                                fontSize: "5rem",
                                fontFamily: "Righteous",
                                color: "white",
                                textShadow: "0 0 2px black"
                            },
                        },
                        {
                            type: "site-button",
                            content: { text: "BOOK NOW", href: "" },
                            style: {
                                fontFamily: "Righteous",
                                backgroundColor: "#5ba8b3",
                                padding: "1rem",
                                textTransform: "uppercase",
                                boxShadow: "4px 4px #000",
                                width: "9rem",
                                boxShadow: "#0000008c",
                                color: "white",
                                borderRadius: "20px",
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: "site-section",
            style: {
                height: "500px",
                width: "100%",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",

            },
            cmps: [{
                type: "site-div",
                style: {
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "3rem",

                },
                cmps: [{
                        type: "site-text",
                        content: "About Us",
                        style: {
                            fontSize: "1rem",
                            fontWeight: "bold",
                        },
                    },
                    {
                        type: "site-text",
                        content: `On earth there is no heaven,
               but there are pieces of it and we will get you there`,
                        style: {
                            fontSize: "2.5rem",
                            fontWeight: "bolder",
                            width: "45%",
                            fontFamily: "Righteous"
                        },
                    },
                    {
                        type: "site-button",
                        content: { text: "Learn More", href: "" },
                        style: {
                            fontFamily: "Righteous",
                            backgroundColor: "#5ba8b3",
                            padding: "1rem",
                            textTransform: "uppercase",
                            width: "9rem",
                            borderRadius: "20px",
                            color: "white",
                            boxShadow: "2px 2px 2px #0000008c",
                            marginBlockStart: "1rem",
                        },
                    },
                ],
            }, ],
        },
        {
            type: "site-section",
            style: {
                height: "500px",
                width: "100%",
                padding: "2rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            },
            cmps: [{
                    type: "site-div",
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        padding: "1rem",
                        height: "450px",
                        width:"55%",
                        marginInlineStart: "100px"
                    },
                    cmps: [{
                            type: "site-text",
                            content: `Lago Di Braies, Italy`,
                            style: {
                                fontFamily: "Righteous",
                                textAlign: "center",
                                lineHeight: "2rem",
                                fontSize: "2rem",
                                fontWeight: "bold",

                            },
                        },
                        {
                            type: "site-text",
                            content: `In summer, lake Lago di Braies in South Tyrol reflects colours in all shades from green to blue, in winter Lago di Braies is covered with ice and snow. In winter and summer this jewel is the starting point for hikes, ski tours, snowshoe hikes and walks. Book through us and let's explore it together!`,
                            style: {
                                fontFamily: "Righteous",
                                padding: "1rem",
                                textAlign: "center",
                                lineHeight: "2rem",
                                fontSize: "1rem",
                                marginBlockStart: "1rem"

                            },
                        },
                    ],
                },
                {
                    type: "site-div",
                    style: {
                        height: "450px",
                        width:"45%"


                    },
                    cmps: [{
                        type: "site-image",
                        content: "https://images.unsplash.com/photo-1521102761523-b268f61473e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
                        style: {
                            height:"100%",
                            width:"100%"
                            
                        }
                    }]
                }
            ],
        },





        {
            type: "site-section",
            style: {
                height: "500px",
                width: "100%",
                padding: "2rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            },

            cmps: [{
                    type: "site-div",
                    style: {
                        height: "450px",
                        width:"50%",
                        marginInlineStart: "120px"
                    },
                    cmps: [{
                        type: "site-image",
                        content: "https://images.unsplash.com/photo-1565609537938-14d88e26cdf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
                        style: {
                            width:"100%",
                            height:"100%"
                        }
                    }]
                },
                {
                    type: "site-div",
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        padding: "1rem",
                        width:"50%",
                        height: "450px",
                    },
                    cmps: [{
                            type: "site-text",
                            content: `The Cordillera Huayhuash Trek, Peru`,
                            style: {
                                fontFamily: "Righteous",
                                textAlign: "center",
                                lineHeight: "2rem",
                                fontSize: "2rem",
                                fontWeight: "bold"
                            },
                        },
                        {
                            type: "site-text",
                            content: `Possibly the best alpine trek in the entire world, the Cordillera Huayhuash trek has become well-known among outdoors enthusiasts for its sheer mountain peaks, pristine glacial lakes, and encounters with traditional Andean culture. Are you ready for it ?`,
                            style: {
                                fontFamily: "Righteous",
                                padding: "1rem",
                                textAlign: "center",
                                lineHeight: "2rem",
                                fontSize: "1rem",
                                marginBlockStart: "1rem"

                            },
                        },
                    ],
                },

            ],
        },

        {
            type: "site-section",
            style: {
                height: "500px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            },
            cmps: [{
                type: "site-div",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#ffffc47d",
                    height:"100%",
                    width:"50%"
                },
                cmps: [{
                        type: "site-text",
                        content: "CONTACT US",
                        style: {
                            fontSize: "3rem",
                            fontFamily: "Righteous",
                            textShadow: "0 0 1px black"

                        }
                    },
                    {
                        type: "site-form",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            width: "180px",
                            color: "#313b3f",
                            paddingBlockStart: "2rem"


                        },
                        btnStyle: {
                            marginBlockStart: "1rem",
                            backgroundColor: "#202020",
                            width: "190px",
                            fontSize: "1.1rem",
                            color: "white",
                            borderRadius: "8px"

                        },
                        content: [{
                                type: "text",
                                tag: "Full Name"
                            },
                            {
                                type: "email",
                                tag: "Email"
                            },
                            {
                                type: "tel",
                                tag: "Phone"
                            }
                        ]


                    }
                ]
            },
            {
            type:"site-div",
            style:{
                height:"100%",
                width:"50%"
            },

        cmps: [{
            type:"site-map",

        }]
        }]
    },
        {
            type: "site-section",
            style: {
                height: "300px",
                width: "100%",
                padding: "4rem",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#5ba8b3cc",
                color: "white",
            },
            cmps: [{
                    type: "site-div",
                    style: {
                        height: "250px",
                    },
                    cmps: [{
                            type: "site-text",
                            content: "DESTINATIONS",
                            style: {
                                width: "100px",
                                fontWeigt: "bold",
                                fontSize: "1.5rem",
                            },
                        },
                        {
                            type: "site-list",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                color: "#fff",
                                marginTop: "1rem",
                            },
                            cmps: [

                                {
                                    type: "site-text",
                                    content: `New-Zealand Australia Argentina Bolivia More...`,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100px"
                                    },
                                },

                            ],
                        }
                    ],
                },

                {
                    type: "site-div",
                    style: {
                        height: "250px",
                    },
                    cmps: [{
                            type: "site-text",
                            content: "SHOP",
                            style: {
                                width: "100px",
                                fontWeigt: "bold",
                                fontSize: "1.5rem",
                            },
                        },
                        {
                            type: "site-list",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                color: "#fff",
                                marginTop: "1rem",
                            },
                            cmps: [

                                {
                                    type: "site-text",
                                    content: `Non English Guides Delivery Times Special Offers FAQs`,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "142px"
                                    },
                                },

                            ],
                        }
                    ],
                }, {
                    type: "site-div",
                    style: {
                        height: "250px",
                    },
                    cmps: [{
                            type: "site-text",
                            content: "FORUMS",
                            style: {
                                width: "100px",
                                fontWeigt: "bold",
                                fontSize: "1.5rem",
                            },
                        },
                        {
                            type: "site-list",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                color: "#fff",
                                marginTop: "1rem",
                            },
                            cmps: [

                                {
                                    type: "site-text",
                                    content: `Country Forums Interest Forums Talk To Us`,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "140px"
                                    },
                                },

                            ],
                        }
                    ],
                }, {
                    type: "site-div",
                    style: {
                        height: "250px",
                    },
                    cmps: [{
                            type: "site-text",
                            content: "TRAVEL BOOKING",
                            style: {
                                width: "100px",
                                fontWeigt: "bold",
                                fontSize: "1.5rem",
                            },
                        },
                        {
                            type: "site-list",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                color: "#fff",
                                marginTop: "1rem",
                            },
                            cmps: [

                                {
                                    type: "site-text",
                                    content: `Hotels Flights Insurance`,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "90px"
                                    },
                                },

                            ],
                        }
                    ],
                },
            ],
        },
                    
    ],
}, ];

export const templateService = {
    query,
    save,
    remove,
    makeId,
    getTemplateById,
    getSamplesOf,
};

function getTemplateById(id) {
    const template = _.cloneDeep(templates.find(template => template._id === id))
    return addIds(template)
}

function getSamplesOf(element) {
    return samples[element]
}

function addIds(template){
    template.cmps.forEach(cmp=>{
        if (!cmp.id) cmp.id = makeId()
        if (cmp.cmps && cmp.cmps.length >0 ) addIds(cmp)
    })
    return template
}

function makeId(length = 10) {
	var txt = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return txt;
}

function _getUrl(id = '') {
    const BASE_URL = process.env.NODE_ENV !== 'development' ? '/api/template' : '//localhost:3030/api/template';
    return `${BASE_URL}/${id}`;
}

function query(filterBy) {
    const inStock = filterBy.inStock ? `inStock=${filterBy.inStock}` : "";
    const type = filterBy.type ? `type=${filterBy.type}` : "";
    return axios
        .get(
            _getUrl() +
            `?name=${filterBy.name}&orderBy=${filterBy.orderBy}&${inStock}&${type}`
        )
        .then((res) => res.data);
}


function remove(id) {
    return axios.delete(_getUrl(id)).then((res) => res.data);
}

function save(template) {
    return template._id ? _update(template) : _add(template);
}

function _update(template) {
    return axios.put(_getUrl(template._id), template).then((res) => res.data);
}

function _add(template) {
    return axios.post(_getUrl(template._id), template).then((res) => res.data);
}