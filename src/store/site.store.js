const _ = require("lodash")

export const siteStore = {
    state: {
        samples: { sections: ['nav', 'hero', 'paragraph', 'img with text', 'sharing'] },
        site: {
            _id: '5e28393890dd7201a06d4e44',
            name: 'new site',
            previewImg: '',
            createdBy: {
                username: 'eni',
                _id: '5e26e0b718a0891d4c995527',
            },
            cmps: [{
                    id: _.uniqueId(),
                    type: 'site-section',
                    style: {
                        backgroundColor: '#f53b76',
                        height: '300px',
                        padding: '10px 10px 10px 10px',
                        display: 'flex'
                    },
                    cmps: [{
                            id: _.uniqueId(),
                            type: 'site-text',
                            content: 'Hello World',
                            style: {
                                fontFamily: 'Righteous',
                                fontSize: '3rem',
                                color: '#FFF',
                                textShadow: '2px 2px 2px #000',
                            },
                        },
                        {
                            id: _.uniqueId(),
                            type: 'site-text',
                            content: 'Hello World',
                            style: {
                                fontFamily: 'Righteous',
                                fontSize: '3rem',
                                color: '#FFF',
                                textShadow: '2px 2px 2px #000',
                            },
                        },
                    ],
                },
                {
                    id: _.uniqueId(),
                    type: 'site-section',
                    style: {
                        backgroundColor: '#34bd98',
                        height: '500px',
                        padding: '10px 10px 10px 10px',

                    },
                    cmps: [{
                            id: _.uniqueId(),
                            type: 'site-image',
                            content: 'https://i1.sndcdn.com/avatars-000214595785-kgx9qu-t500x500.jpg',
                            style: {
                                height: '200px',
                                objectFit: 'cover',
                            },
                        },
                        {
                            id: _.uniqueId(),
                            type: 'site-button',
                            content: { text: 'Button', href: '' },
                            style: {
                                fontFamily: 'Righteous',
                                backgroundColor: '#fcbf1e',
                                padding: '1rem',
                                textTransform: 'uppercase',
                                boxShadow: '4px 4px #000',
                            },
                        },
                    ],
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
        cloneCmp(state, { cmp }) {
            state.site.cmps.unshift(cmp)
        }
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
            // return siteService.save(site).then(savedSite => {
            commit({ type, savedSite });
            // return savedSite;
            // });
        },
        removeSite({ commit }, { id }) {
            return siteService.remove(id).then(() => {
                commit({ type: 'removeSite', id });
            });
        },
    },
    modules: {},
};