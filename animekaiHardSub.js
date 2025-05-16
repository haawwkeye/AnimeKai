///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////       Main Functions          //////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

this.StreamType = "sub";

function fetchv0(url, options = {}) {
	return fetch(url, options)
		.then((response) => {
			if (typeof response === "string") {
				return {
					text: () => response,
					json: () => {
						try {
							return JSON.parse(response);
						} catch (error) {
							console.error("JSON parse error:", error);
							throw new Error(`Failed to parse JSON response ${error}`);
						}
					},
				};
			} else if (response instanceof Response) {
				if (!response.ok)
					throw new Error(
						`Network response was not ok: ${response.statusText} (${response.status})`
					);
				return response;
			} else {
				throw new Error(
					`Invalid response type: ${typeof response} (${response})`
				);
			}
		})
		.catch((error) => {
			throw (
				(console.error("Fetch error:", error),
				showMessage("Fetch Error", "error", error.message),
				error)
			);
		});
}

async function GetUtils() {
	if (typeof IsAKULoaded === "undefined") {
		try {
			const url = `https://raw.githubusercontent.com/haawwkeye/AnimeKai/main/utils.js?v=${Date.now()}`;
			const response = await fetchv0(url);
			const scriptText = await response.text();
			(0, eval)(scriptText);
		} catch (error) {
			console.log("Load AKUtils error:" + error);
		}
	}

	while (typeof IsAKULoaded === undefined) {
		await new Promise((resolve) => setTimeout(resolve, 100));
	}

	return IsAKULoaded;
}

async function searchResults(keyword) {
	if (!(await GetUtils())) throw new Error("AKUtils not loaded");
	return AKsearchResults(keyword);
}

async function extractDetails(url) {
	if (!(await GetUtils())) throw new Error("AKUtils not loaded");
	return AKextractDetails(url);
}

async function extractEpisodes(url) {
	if (!(await GetUtils())) throw new Error("AKUtils not loaded");
	return AKextractEpisodes(url);
}

async function extractStreamUrl(url) {
	if (!(await GetUtils())) throw new Error("AKUtils not loaded");
	return AKextractStreamUrl(url, StreamType);
}
