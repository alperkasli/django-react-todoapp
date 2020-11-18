class API {
	constructor(method, url, config) {
        this.token = localStorage.getItem('Token')
        // https://serene-mesa-14389.herokuapp.com/
		return fetch(`https://serene-mesa-14389.herokuapp.com/${url}`, {
			method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Token ${this.token}`,
            },
            ...config
        }).then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
	}
}

export default API;