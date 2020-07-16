export const siteStore = {
  state: {
    site: {
      _id: "5e28393890dd7201a06d4e44",
      name: "new site",
      previewImg: "",
      createdBy: {
        username: "eni",
        _id: "5e26e0b718a0891d4c995527",
      },
      // sections = [{name: '',img:'',section:  }]
      cmps: [
        {
          type: "site-section",
          style: {
            height: "5rem",
            padding: "0rem 1rem",
            display: "flex",
            justifyContent: "space-between",
            width:'100%'
          },
          cmps: [
            {
              type: "site-nav",
              style: {
                width:'100%',
                fontFamily: "Righteous",
                logo:{
                    cursor:'default'
                },
                mainNav:{ 
                    
                },
              },
            },
          ],
        },

        {
          type: "site-section",
          style: {
            background:
              "url(https://images.unsplash.com/photo-1506104489822-562ca25152fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80) no-repeat center center fixed",
            backgroundSize: "cover",
            height: "620px",
            padding: "10px 10px 10px 10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          },
          cmps: [
            {
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
        {
          type: "site-section",
          style: {
            backgroundColor: "#34bd98",
            height: "500px",
            padding: "10px 10px 10px 10px",
          },
          cmps: [
            {
              type: "site-image",
              content:
                "https://i1.sndcdn.com/avatars-000214595785-kgx9qu-t500x500.jpg",
              style: {
                height: "200px",
                objectFit: "cover",
              },
            },
            {
              type: "site-button",
              content: { text: "Button", href: "" },
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
