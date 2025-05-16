///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////       Main Functions          //////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// My custom fetch function since v2 doesn't work for some reason?
// (this is a copy of the v2 function, but with some changes to make it work)

function fetchv3(url, options = {}) {
	return fetch(url, options)
		.then((response) => {
			var DisableDebug = options.DisableDebug;
			var isNull =
				options.DisableDebug === undefined || options.DisableDebug === null;
			if (isNull || DisableDebug === false) {
				// console.log("Response:");
				// console.log(response);
			}

			if (typeof response === "string") {
				return {
					text: () => response,
					json: () => {
						try {
							return JSON.parse(response);
						} catch (error) {
							console.error("JSON parse error:");
							showError(error);
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
			console.error("Fetch error:");
			showError(error);
			throw error; // maybe?
			// throw (
			// 	(console.error("Fetch error:", error),
			// 	showError("Fetch Error", "error", error.message),
			// 	error)
			// );
		});
}

function showError(err) {
	console.error(`${err.message}\r\n${err.stack}`);
}

let encrypt_ut = undefined;
// let encrypt__t = undefined;
let decrypt_He = undefined;
let decrypt_Mg = undefined;

let DoneEncryptionSetup = false;

const baseUrl = "https://animekai.to";

// THIS IS A TEMP FUNCTION (until I load it via a script instead of hardcoding it!!!)
// This may not work as I'm going to sleep right after commiting this and then pushing tomorrow to test
// This is basically a 1:1 with the bundle just with a BUNCH of removed/commented out code
// That way it won't kill itself!
// This works in node so hopefully it'll work on phone or web
// in theory it should since the only thing I did was a simple thing anyways
async function encryptionSetup() {
	if (DoneEncryptionSetup) return true; // Already did this setup...
	await loadKaiCodex(); // Load KaiCodex

	encrypt_ut = KAICODEX.enc; //win.FG.ut;
	// encrypt__t = win.FG._t; // not needed!
	decrypt_He = KAICODEX.dec; //win.FG.He;
	decrypt_Mg = KAICODEX.decMega; //vrfMegaDecode; // that doesn't work but this does!

	DoneEncryptionSetup = true;

	return true;
}

// const RegExp = /^(strict)?(.*?)$/;

// nothing will happen here, just going to do some simple token setup?
async function GetEncryptedToken(_token, notStrict) {
	if (!(await encryptionSetup())) throw Error("Failed to startup encryption!");

	// if (!notStrict) _token = `strict${_token}`;

	// const _reg = RegExp.exec(_token);
	// We don't need _t anyways?
	const NewToken = encrypt_ut(_token); //_reg[1] ? encrypt_ut(_reg[2]) : encrypt__t(_reg[2]);

	// console.log(_token);
	// console.log(NewToken);

	return NewToken;
}

async function searchResults(keyword) {
	try {
		const encodedKeyword = encodeURIComponent(keyword);
		const searchUrl = `${baseUrl}/browser?keyword=${encodedKeyword}`;
		const response = await fetchv3(searchUrl);
		const responseText = await response.text();

		const results = [];

		const listRegex =
			/<div class="aitem">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
		let match;

		while ((match = listRegex.exec(responseText)) !== null) {
			const block = match[1];

			const hrefRegex = /<a[^>]+href="([^"]+)"[^>]*class="poster"[^>]*>/;
			const hrefMatch = block.match(hrefRegex);
			let href = hrefMatch ? hrefMatch[1] : null;
			if (href && !href.startsWith("http")) {
				href = href.startsWith("/") ? baseUrl + href : baseUrl + href;
			}

			const imgRegex = /<img[^>]+data-src="([^"]+)"[^>]*>/;
			const imgMatch = block.match(imgRegex);
			const image = imgMatch ? imgMatch[1] : null;

			const titleRegex = /<a[^>]+class="title"[^>]+title="([^"]+)"[^>]*>/;
			const titleMatch = block.match(titleRegex);
			const title = cleanHtmlSymbols(titleMatch ? titleMatch[1] : null);

			if (href && image && title) {
				results.push({ href, image, title });
			}
		}

		return JSON.stringify(results);
	} catch (error) {
		console.error("SearchResults error:");
		showError(error);
		return JSON.stringify([
			{ href: "https://error.org", image: "https://error.org", title: "Error" },
		]);
	}
}

async function extractDetails(url) {
	try {
		const fetchUrl = `${url}`;
		const response = await fetchv3(fetchUrl);
		const responseText = await response.text();

		const details = [];

		const descriptionMatch = /<div class="desc text-expand">([\s\S]*?)<\/div>/;
		let description = descriptionMatch.exec(responseText);

		const aliasesMatch =
			/<small class="al-title text-expand">([\s\S]*?)<\/small>/;
		let aliases = aliasesMatch.exec(responseText);

		if (description && aliases) {
			details.push({
				description: description[1]
					? cleanHtmlSymbols(description[1])
					: "Not available",
				aliases: aliases[1] ? cleanHtmlSymbols(aliases[1]) : "Not available",
				airdate: "Not available",
			});
		}

		return JSON.stringify(details);
	} catch (error) {
		console.error("extractDetails error:");
		showError(error);
		return JSON.stringify([
			{
				description: "Error loading description",
				aliases: "Aliases: Unknown",
				airdate: "Aired: Unknown",
			},
		]);
	}
}

async function extractEpisodes(url) {
	try {
		const fetchUrlForId = `${url}`;
		const repsonse = await fetchv3(fetchUrlForId);
		const responseTextForId = await repsonse.text();

		// const kaiCodexContent = await loadKaiCodex();
		// const patchedKaiCodex = kaiCodexContent + "\nthis.KAICODEX = KAICODEX;"; // attach to global scope
		// (0, eval)(patchedKaiCodex); // Now it should be visible globally

		if (!(await encryptionSetup()))
			throw Error("Failed to startup encryption!"); // Load encryption

		const rateBoxIdRegex = /<div class="rate-box"[^>]*data-id="([^"]+)"/;
		const idMatch = responseTextForId.match(rateBoxIdRegex);
		// const aniId = idMatch ? idMatch[1] : null;

		// const urlFetchToken = KAICODEX.enc(aniId);
		const ani_id = idMatch ? idMatch[1] : "";
		const token = await GetEncryptedToken(ani_id);

		//	aniId === "c4G4-Q"
		//		? "Zl1OYaV_HJs5uEQ3W6wWbfy1ntDOCA1e"
		//		: KAICODEX.enc(aniId);

		// aniId c4G4-Q
		// ani_Id Zl1OYaV_HJs5uEQ3W6wWbfy1ntDOCA1e
		// ngl (forgor aniId)
		// 		  Zl1OYaV_HJts5mY2W7hIbaWeZkHfEFHLCF7AKL4ekhE
		const fetchUrlListApi = `${baseUrl}/ajax/episodes/list?ani_id=${ani_id}&_=${token}`;

		const responseTextListApi = await fetchv3(fetchUrlListApi);
		// console.log(responseTextListApi);
		const data = await responseTextListApi.json();

		if (data.status !== 200) throw new Error(JSON.stringify(data, null, "\t"));

		let htmlContentListApi = "";
		htmlContentListApi = cleanJsonHtml(data.result);

		// Continue with the extraction
		const episodes = [];

		// Regular expression to find all <a> tags with num and token attributes
		const episodeRegex = /<a[^>]+num="([^"]+)"[^>]+token="([^"]+)"[^>]*>/g;
		let epMatch;

		while ((epMatch = episodeRegex.exec(htmlContentListApi)) !== null) {
			const num = epMatch[1];
			const token = epMatch[2];
			const tokenEncoded = await GetEncryptedToken(token);
			const episodeUrl = `${baseUrl}/ajax/links/list?token=${token}&_=${tokenEncoded}`;

			episodes.push({
				href: episodeUrl,
				number: parseInt(num, 10),
			});
		}

		return JSON.stringify(episodes);
	} catch (error) {
		console.error("extractEpisodes error:");
		showError(error);
		return JSON.stringify([{ number: "-1", href: "" }]);
	}
}

async function extractStreamUrl(url, streamType) {
	try {
		const fetchUrl = `${url}`;
		const reponse = await fetchv3(fetchUrl);
		const text = await reponse.text();
		const cleanedHtml = cleanJsonHtml(text);

		// const kaiCodexContent = await loadKaiCodex();
		// const patchedKaiCodex = kaiCodexContent + "\nthis.KAICODEX = KAICODEX;"; // attach to global scope
		// (0, eval)(patchedKaiCodex); // Now it should be visible globally

		if (!(await encryptionSetup()))
			throw Error("Failed to startup encryption!"); // Load encryption

		// Extract div blocks with their content
		const subRegex =
			/<div class="server-items lang-group" data-id="sub"[^>]*>([\s\S]*?)<\/div>/;
		const softsubRegex =
			/<div class="server-items lang-group" data-id="softsub"[^>]*>([\s\S]*?)<\/div>/;
		const dubRegex =
			/<div class="server-items lang-group" data-id="dub"[^>]*>([\s\S]*?)<\/div>/;

		const subMatch = subRegex.exec(cleanedHtml);
		const softsubMatch = softsubRegex.exec(cleanedHtml);
		const dubMatch = dubRegex.exec(cleanedHtml);

		// Store the content in variables
		const sub = subMatch ? subMatch[1].trim() : "";
		const softsub = softsubMatch ? softsubMatch[1].trim() : "";
		const dub = dubMatch ? dubMatch[1].trim() : "";

		let dataLid = "";
		let fetchUrlServerApi = "";
		let KaiMegaUrlJson = "";
		let megaELinkJson = "";
		let megaEmbeddedUrl = "";
		let megaMediaUrl = "";
		let streamUrlJson = "";
		let streamUrl = "";

		let selectedStreamType;
		let debugStreamType = streamType;

		if (streamType === "dub" && dub.length > 0) {
			selectedStreamType = dub;
			debugStreamType = "dub";
		} else if (streamType === "sub" && sub.length > 0) {
			selectedStreamType = sub;
			debugStreamType = "sub";
		} else if (streamType === "softsub" && softsub.length > 0) {
			selectedStreamType = softsub;
			debugStreamType = "softsub";
		} else {
			if (sub.length > 0) {
				selectedStreamType = sub;
				debugStreamType = "sub";
			} else if (softsub.length > 0) {
				selectedStreamType = softsub;
				debugStreamType = "softsub";
			} else if (dub.length > 0) {
				selectedStreamType = dub;
				debugStreamType = "dub";
			} else {
				console.log(
					"No Dub/Sub/SoftSub streams available\nPlease check again later or check the website."
				);
			}
		}

		console.log(
			`wants: ${streamType} got: ${debugStreamType}\r\nStreamInfo | dub: ${dub.length} sub: ${sub.length} softsub: ${softsub.length}`
		);

		console.log(selectedStreamType);

		if (selectedStreamType) {
			// Find server 1 span and extract data-lid
			const serverSpanRegex =
				/<span class="server"[^>]*data-lid="([^"]+)"[^>]*>Server 1<\/span>/;
			const serverMatch = serverSpanRegex.exec(selectedStreamType);

			if (serverMatch && serverMatch[1]) {
				dataLid = serverMatch[1];
				dataLidToken = await GetEncryptedToken(dataLid);

				// TODO: I want to make a version that's for BOTH sub and dub later
				fetchUrlServerApi = `${baseUrl}/ajax/links/view?id=${dataLid}&_=${dataLidToken}`;

				const responseTextServerApi = await fetchv3(fetchUrlServerApi);
				const dataServerApi = await responseTextServerApi.json();
				if (dataServerApi.status !== 200)
					throw new Error(JSON.stringify(data, null, "\t"));

				KaiMegaUrlJson = decrypt_He(dataServerApi.result);
				megaELinkJson = JSON.parse(KaiMegaUrlJson);
				megaEmbeddedUrl = megaELinkJson.url;
				megaMediaUrl = megaEmbeddedUrl.replace("/e/", "/media/");

				// Fetch the media url
				const mediaUrl = await fetchv3(megaMediaUrl);
				const mediaJson = await mediaUrl.json();

				streamUrlJson = mediaJson.result;
				streamUrlJson = decrypt_Mg(streamUrlJson);
				// console.log(streamUrlJson);
				const parsedStreamData = JSON.parse(streamUrlJson);

				// console.log(parsedStreamData);

				if (
					parsedStreamData &&
					parsedStreamData.sources &&
					parsedStreamData.sources.length > 0
				) {
					streamUrl = parsedStreamData.sources[0].file;
				} else {
					throw new Error(
						"No stream sources found in the response" + parsedStreamData
					);
				}
			}
		}

		return streamUrl;
	} catch (error) {
		console.error("extractStreamUrl error:");
		showError(error);
		return "https://error.org";
	}
}

////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////       Helper Functions       ////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

function cleanHtmlSymbols(string) {
	if (!string) return "";

	return string
		.replace(/&#8217;/g, "'")
		.replace(/&#8211;/g, "-")
		.replace(/&#[0-9]+;/g, "")
		.replace(/\r?\n|\r/g, " ") // Replace any type of newline with a space
		.replace(/\s+/g, " ") // Replace multiple spaces with a single space
		.trim(); // Remove leading/trailing whitespace
}

function cleanJsonHtml(jsonHtml) {
	if (!jsonHtml) return "";

	return jsonHtml
		.replace(/\\"/g, '"')
		.replace(/\\'/g, "'")
		.replace(/\\\\/g, "\\")
		.replace(/\\n/g, "\n")
		.replace(/\\t/g, "\t")
		.replace(/\\r/g, "\r");
}

// Credits to @AnimeTV Project for the KAICODEX
async function loadKaiCodex() {
	if (typeof KAICODEX !== "undefined") return KAICODEX;

	try {
		const res = await fetchv3(
			"https://raw.githubusercontent.com/amarullz/kaicodex/main/generated/gen/keys.json"
			// {
			// 	DisableDebug: true,
			// }
		);
		const responseText = await res.text();
		return kaiCodexInit(JSON.parse(responseText));
	} catch (error) {
		console.error("Load Kaicodex error:");
		showError(error);
	}
}

function kaiCodexInit(keys) {
	var homeKeys = [];
	var megaKeys = [];
	for (var i = 0; i < keys.kai.length; i++) {
		homeKeys[i] = [];
		for (var j = 0; j < keys.kai[i].length; j++) {
			homeKeys[i].push(atob(keys.kai[i][j]));
		}
	}
	for (var i = 0; i < keys.mega.length; i++) {
		megaKeys[i] = [];
		for (var j = 0; j < keys.mega[i].length; j++) {
			megaKeys[i].push(atob(keys.mega[i][j]));
		}
	}
	function encrypt$(n) {
		n = encodeURIComponent(n);
		var kl = homeKeys[0].length;
		for (var j = 0; j < kl; j++) {
			var o = [];
			var l = n.length;
			for (var i = 0; i < l; i++) {
				o.push(homeKeys[n.charCodeAt(i)][j].charAt(i));
			}
			n = btoa(o.join(""));
		}
		return n.replace(/\//g, "_").replace(/\+/g, "-").replace(/\=/g, "");
	}
	function decrypt$(n) {
		n = n.replace(/_/g, "/").replace(/-/g, "+");
		var kl = homeKeys[0].length;
		for (var j = 0; j < kl; j++) {
			n = atob(n);
			var l = n.length;
			var o = [];
			for (var i = 0; i < l; i++) {
				var c = n.charAt(i);
				for (var k = 0; k < homeKeys.length; k++) {
					var ck = homeKeys[k][kl - (j + 1)].charAt(i);
					if (ck === c) {
						c = String.fromCharCode(k);
						break;
					}
				}
				o.push(c);
			}
			n = o.join("");
		}
		return decodeURIComponent(n);
	}
	function megaDec(n) {
		n = n.replace(/_/g, "/").replace(/-/g, "+");
		var kl = megaKeys[0].length;
		for (var j = 1; j < kl; j++) {
			// console.log("ATOB = " + j + " -> " + n);
			n = atob(n);
			var o = [];
			var l = n.length;
			for (var i = 0; i < l; i++) {
				var np = n.charCodeAt(i);
				var ckey = megaKeys[np][j];
				o.push(ckey.charCodeAt(i % ckey.length));
			}
			n = String.fromCharCode.apply(null, o);
		}
		return decodeURIComponent(n);
	}
	this.KAICODEX = {
		enc: encrypt$,
		dec: decrypt$,
		decMega: megaDec,
	};
	return KAICODEX;
}

function btoa(input) {
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	let str = String(input);
	let output = "";

	for (
		let block = 0, charCode, i = 0, map = chars;
		str.charAt(i | 0) || ((map = "="), i % 1);
		output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
	) {
		charCode = str.charCodeAt((i += 3 / 4));
		if (charCode > 0xff) {
			throw new Error(
				"btoa failed: The string contains characters outside of the Latin1 range."
			);
		}
		block = (block << 8) | charCode;
	}

	return output;
}

function atob(input) {
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	let str = String(input).replace(/=+$/, "");
	let output = "";

	// console.log(str);

	if (str.length % 4 == 1) {
		throw new Error("atob failed: The input is not correctly encoded.");
	}

	for (
		let bc = 0, bs, buffer, i = 0;
		(buffer = str.charAt(i++));
		~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
			? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
			: 0
	) {
		buffer = chars.indexOf(buffer);
	}

	return output;
}

this.IsAKULoaded = true;
this.fetchv3 = fetchv3;
this.AKsearchResults = searchResults;
this.AKextractDetails = extractDetails;
this.AKextractEpisodes = extractEpisodes;
this.AKextractStreamUrl = extractStreamUrl;
this.btoa = btoa;
this.atob = atob;
