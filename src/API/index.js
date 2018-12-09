class Helper {
	static baseURL() {
		return "https://api.foursquare.com/v2"
	}
	static auth() {
		const keys ={
			client_id:"D2NBACEYOFX0X0NH3TS5KYIOGCXOSOF5R5QZKQR4QMEQZ2ZF",
			client_secret:"4TDBJ3OFGO2LA0UDAF3LPAN5P5DQ0AQGCK4T2ATHXQX2G0DA",
			v:"20191209"
		};
		return Object.keys(keys)
			.map(key => `${key}=${keys[key]}`)
			.join('&');
	}
	static urlBuilder(urlPrams) {
		if(!urlPrams)
			return "";
		return Object.keys(urlPrams)
			.map(key => `${key}=${urlPrams[key]}`)
			.join('&');
	}
	static headers() {
		return {
			Accept:"application/json"	
		};
	}
	static simpleFetch(endPoint,method,urlPrams) {
		let requestData = {
			method,
			headers: Helper.headers()
		};
		return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
			urlPrams
			)}`,
			requestData
			).then(res => res.json());
	}
}

export default class SearchAPI{
	static search(urlPrams) {
		return Helper.simpleFetch("/venues/search","GET",urlPrams);
	}
	static getVenueDetails(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}`,"GET");
	}
	static getVenuePhotos(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`,"GET");
	}
}