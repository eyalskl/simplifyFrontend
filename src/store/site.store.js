const _ = require("lodash");


export const siteStore = {
  state: {
    currSamplesList: "sections",
  },
  getters: {
    site(state) {
      return state.site;
    },
    samples(state) {
      return state.samples[state.currSamplesList];
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
      const siteIdx = state.sites.findIndex((site) => site._id === id);
      state.sites.splice(siteIdx, 1);
    },
    addSite(state, { savedSite }) {
      state.sites.push(savedSite);
    },
    updateSite(state, { savedSite }) {
      const idx = state.sites.findIndex((site) => site._id === savedSite._id);
      state.sites.splice(idx, 1, savedSite);
    },
    cloneCmp(state, { cmp }) {
      state.site.cmps.unshift(cmp);
    },
  },
  actions: {
    loadSite({ commit, state }) {
      commit({ type: "setIsLoading", isLoading: true });
      return siteService
        .query(state.filterBy)
        .then((sites) => {
          commit({ type: "setSite", sites });
          commit({ type: "setIsLoading", isLoading: false });
          return sites;
        })
        .catch((err) => err);
    },
    saveSite({ commit }, { site }) {
      // return siteService.save(site).then(savedSite => {
      commit({ type, savedSite });
      // return savedSite;
      // });
    },
    removeSite({ commit }, { id }) {
      return siteService.remove(id).then(() => {
        commit({ type: "removeSite", id });
      });
    },
  },
  modules: {},
};
