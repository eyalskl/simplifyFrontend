export const siteStore = {
    state: {
        site: {
            _id: '5e28393890dd7201a06d4e44',
            settings: {
                siteName: 'New Site',
                previewImg: 'http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png',
                templateName: 'template name',
                createdBy: {
                    username: 'eni',
                    _id: '5e26e0b718a0891d4c995527',
                },
            },

            cmps: [{
                    cmpName: 'zone',
                    attr: {
                        class: 'site-header',
                        style: {
                            backgroundColor: '#f53b76',
                            height: '80px',
                            padding: '10px 10px 10px 10px',
                        },
                    },
                    cmps: [{
                            cmpName: 'text',
                            txt: 'Hello World',
                            attr: {
                                class: 'txt',
                                style: {
                                    fontFamily: 'Righteous',
                                    fontSize: '3rem',
                                    color: '#202204',

                                },
                            },
                        },
                        {
                            cmpName: 'nav-bar',
                            attr: {
                                class: 'main-nav',
                                style: {
                                    fontFamily: 'Righteous',
                                    backgroundColor: '#fff'
                                },
                            },
                        }
                    ],
                },
                {
                    cmpName: 'zone',
                    attr: {
                        class: 'zone',
                        style: {
                            backgroundColor: '#34bd98',
                            height: '500px',
                            padding: '10px 10px 10px 10px',
                        },
                    },
                    cmps: [{
                            cmpName: 'image-box',
                            tagName: 'img',
                            attr: {
                                class: 'img-container',
                                style: {
                                    height: '200px',
                                    objectFit: 'cover'
                                },
                                src: 'https://i1.sndcdn.com/avatars-000214595785-kgx9qu-t500x500.jpg'
                            },
                        },
                        {
                            cmpName: 'button-box',
                            tagName: 'button',
                            content: 'Button',
                            attr: {
                                class: 'button-container',
                                style: {
                                    fontFamily: 'Righteous',
                                    backgroundColor: '#fcbf1e',
                                    padding: '1rem',
                                    textTransform: 'uppercase',
                                    boxShadow: '4px 4px #000'
                                },
                                src: 'https://i1.sndcdn.com/avatars-000214595785-kgx9qu-t500x500.jpg'
                            },
                        }
                    ]
                },
            ],
        },
    },
    getters: {
        site(state) {
            return state.site;
        },
        isLoading(state) {
            return state.isLoading;
        },
    },
    mutations: {
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading;
        },
        setSite(state, { site }) {
            state.sites = site;
        },
        removeSite(state, { id }) {
            const siteIdx = state.sites.findIndex(site => site._id === id);
            state.sites.splice(siteIdx, 1);
        },
        addSite(state, { savedSite }) {
            state.sites.push(savedSite);
        },
        updateSite(state, { savedSite }) {
            const idx = state.sites.findIndex(site => site._id === savedSite._id);
            state.sites.splice(idx, 1, savedSite);
        },
    },
    actions: {
        loadSite({ commit, state }) {
            commit({ type: 'setIsLoading', isLoading: true });
            return siteService
                .query(state.filterBy)
                .then(sites => {
                    commit({ type: 'setSite', sites });
                    commit({ type: 'setIsLoading', isLoading: false });
                    return sites;
                })
                .catch(err => err);
        },
        saveSite({ commit }, { site }) {
            const type = site._id ? 'updateSite' : 'addSite';
            return siteService.save(site).then(savedSite => {
                commit({ type, savedSite });
                return savedSite;
            });
        },
        removeSite({ commit }, { id }) {
            return siteService.remove(id).then(() => {
                commit({ type: 'removeSite', id });
            });
        },
    },
    modules: {},
};