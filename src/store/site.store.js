const _ = require("lodash");


export const siteStore = {
  state: {
    currSamplesList: "sections",
    samples: {
      sections: [
        {
          name: "hero",
          img: "https://i.ibb.co/7KkcVG7/hero-sample-image.png",
          tree: {
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
            cmps: [
              {
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
                content:
                  "https://images.unsplash.com/photo-1521102761523-b268f61473e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
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
    },
    site: {
      _id: "5e28393890dd7201a06d4e44",
      name: "new site",
      previewImg: "",
      createdBy: {
        username: "eni",
        _id: "5e26e0b718a0891d4c995527",
      },
      cmps: [
        {
          type: "site-nav",
          style: {
            height: "5rem",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          },
          cmps: {
            logo: [
              {
                type: "site-image",
                content:
                  "https://i1.sndcdn.com/avatars-000214595785-kgx9qu-t500x500.jpg",
                style: {
                  height: "5rem",
                  width: "5rem",
                },
              },
            ],
            buttons: [
              {
                type: "site-button",
                content: { text: "Home", href: "" },
                style: {
                  fontFamily: "Righteous",
                  height: "5rem",
                  textTransform: "uppercase",
                  backgroundColor: "black",
                  color: "#fff",
                },
              },
            ],
          },
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
            height: "500px",
            width: "100%",
            padding: "5rem",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          },
          cmps: [
            {
              type: "site-text",
              content:
                "On earth there is no heaven, but there are pieces of it and we will get you there",
              style: {
                fontSize: "3rem",
                width: "43rem",
                fontWeight: "bold",
              },
            },
            {
              type: "site-button",
              content: { text: "Learn More", href: "" },
              style: {
                fontFamily: "Righteous",
                backgroundColor: "#fcbf1e",
                padding: "1rem",
                textTransform: "uppercase",
                boxShadow: "4px 4px #000",
                width: "8rem",
              },
            },
          ],
        },
        {
          type: "site-section",
          style: {
            height: "500px",
            width: "100%",
            padding: "5rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          },
          cmps: [
            {
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
              content:
                "https://images.unsplash.com/photo-1521102761523-b268f61473e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1549&q=80",
              style: {
                height: "480px",
                width: "580px",
                objectFit: "cover",
              },
            },
          ],
        },
        {
          type: "site-section",
          style: {
            height: "500px",
            width: "100%",
            padding: "5rem",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "2rem",
            marginInlineEnd: "8rem",
          },
          cmps: [
            {
              type: "site-image",
              content:
                "https://images.unsplash.com/photo-1565609537938-14d88e26cdf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
              style: {
                height: "480px",
                width: "580px",
                objectFit: "cover",
              },
            },

            {
              type: "site-text",
              content: `Hueyhuash , Peru :
                Possibly the best alpine trek in the entire world, the Cordillera Huayhuash trek has become well-known among outdoors enthusiasts for its sheer mountain peaks, pristine glacial lakes, and encounters with traditional Andean culture. Are you ready for it ?  `,
              style: {
                fontFamily: "Righteous",
                padding: "1rem",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: "2rem",
                fontSize: "1.5rem",
              },
            },
          ],
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
            marginTop: "2rem",
            backgroundColor: '#435760ab',
            color: "white",

          },
          cmps: [
            {
              type: "site-div",
              style: {
                height: "250px",
              },
              cmps: [
                {
                  type: "site-text",
                  content: "ABOUT",
                  style: {
                    width:'100px',
                    fontWeigt:"bold",
                    fontSize:"1.5rem",
                    
                  },
                },
                {
                  type: "site-list",
                  list:["DESTINATIONS","SHOP","FORUM","TRAVEL BOOKING"  ],
                  style: {
                    display:"flex",
                    flexDirection:"column",
                    color: "#fff",
                    marginTop:"1rem"
                  },
                },


              ],
            },
            {
              type: "site-div",
              style: {
                height: "250px",
              },
              cmps: [
                {
                  type: "site-text",
                  content: "ABOUT",
                  style: {
                    width:'100px',
                    fontWeigt:"bold",
                    fontSize:"1.5rem",
                    
                  },
                },
                {
                  type: "site-list",
                  list:["DESTINATIONS","SHOP","FORUM","TRAVEL BOOKING"  ],
                  style: {
                    display:"flex",
                    flexDirection:"column",
                    color: "#fff",
                    marginTop:"1rem"
                  },
                },


              ],
            },
            {
              type: "site-div",
              style: {
                height: "250px",
              },
              cmps: [
                {
                  type: "site-text",
                  content: "ABOUT",
                  style: {
                    width:'100px',
                    fontWeigt:"bold",
                    fontSize:"1.5rem",
                    
                  },
                },
                {
                  type: "site-list",
                  list:["DESTINATIONS","SHOP","FORUM","TRAVEL BOOKING"  ],
                  style: {
                    display:"flex",
                    flexDirection:"column",
                    color: "#fff",
                    marginTop:"1rem"
                  },
                },


              ],
            },
            {
              type: "site-div",
              style: {
                height: "250px",
              },
              cmps: [
                {
                  type: "site-text",
                  content: "ABOUT",
                  style: {
                    width:'100px',
                    fontWeigt:"bold",
                    fontSize:"1.5rem",
                    
                  },
                },
                {
                  type: "site-list",
                  list:["DESTINATIONS","SHOP","FORUM","TRAVEL BOOKING"  ],
                  style: {
                    display:"flex",
                    flexDirection:"column",
                    color: "#fff",
                    marginTop:"1rem"
                  },
                },


              ],
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
