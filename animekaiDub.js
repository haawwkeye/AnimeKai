///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////       Main Functions          //////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

const StreamType = "dub";

async function GetUtils() {
	if (this.IsAKULoaded === undefined) {
		try {
			const url =
				"https://raw.githubusercontent.com/haawwkeye/AnimeKai/refs/heads/main/utils.js";
			const response = await fetchv2(url);
			const scriptText = await response.text();
			(0, eval)(scriptText);
		} catch (error) {
			console.log("Load AKUtils error:" + error);
		}
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
