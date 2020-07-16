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
			cmps: [
				{
					cmpName: 'zone',
					htmlTagName: 'section',
					attr: {
						class: "zone",
						style: {
							backgroundColor: "red",
							height: "500px",
							width:"200px",
							padding: '10px 10px 10px 10px',
						},
					},
				},
				{
					cmpName: 'zone',
					htmlTagName: 'section',
					attr: {
						class: "zone",
						style: {
							backgroundColor: "green",
							height: "500px",
							width:"200px",
							padding: '10px 10px 10px 10px',
						},
					},
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
