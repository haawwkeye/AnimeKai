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
				console.log("Response:");
				console.log(response);
			}

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

async function Setup() {
	if (typeof HasSetupFinished !== "undefined") return;

	let JQ_Res = await fetchv3(
		"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
	);
	let bundle_Res = await fetchv3(
		"https://raw.githubusercontent.com/haawwkeye/AnimeKai/main/modified_bundle.js"
	);

	const JQScr = `${JQ_Res.text()}\nthis.JQLoaded = true;`;
	const bundleScr = `${bundle_Res.text()}\nthis.BundleLoaded = true;`;

	(0, eval)(JQScr);
	(0, eval)(bundleScr);

	while (typeof JQLoaded === undefined || typeof BundleLoaded === undefined) {
		await new Promise((resolve) => setTimeout(resolve, 100));
	}

	this.HasSetupFinished = true;

	return true;
}

/*
o.$.ajaxSetup({
	dataType: a.m,
	beforeSend: function (t, i) {
		var reg;
		var url = new URL(i.url, o.ct.origin);
		var token = url.searchParams.get("_");
		if (token) {
			token = (reg = RegExp.exec(decodeURIComponent(token)))[1]
				? f.default.ut(n[2])
				: f.default._t(n[2]);
			url.searchParams.set("_", token);
			i.url = s.toString();
		}
	},
});
*/

const RegExp = /^(strict)?(.*?)$/;

async function searchResults(keyword) {
	await Setup();
	try {
		const encodedKeyword = encodeURIComponent(keyword);
		const searchUrl = `https://animekai.to/browser?keyword=${encodedKeyword}`;
		const response = await fetchv3(searchUrl);
		const responseText = await response.text();

		const results = [];
		const baseUrl = "https://animekai.to";

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
		console.log("SearchResults function error" + error);
		return JSON.stringify([
			{ href: "https://error.org", image: "https://error.org", title: "Error" },
		]);
	}
}

async function extractDetails(url) {
	await Setup();
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
		console.log("Details error:" + error);
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
	await Setup();
	try {
		const fetchUrlForId = `${url}`;
		const repsonse = await fetchv3(fetchUrlForId);
		const responseTextForId = await repsonse.text();

		// const kaiCodexContent = await loadKaiCodex();
		// const patchedKaiCodex = kaiCodexContent + "\nthis.KAICODEX = KAICODEX;"; // attach to global scope
		// (0, eval)(patchedKaiCodex); // Now it should be visible globally

		await loadKaiCodex(); // Load KAICODEX

		const rateBoxIdRegex = /<div class="rate-box"[^>]*data-id="([^"]+)"/;
		const idMatch = responseTextForId.match(rateBoxIdRegex);
		// const aniId = idMatch ? idMatch[1] : null;

		// const urlFetchToken = KAICODEX.enc(aniId);

		let param = new URLSearchParams();

		const aniId = idMatch ? idMatch[1] : null;
		let reg;
		let token = "strict".concat(aniId);
		token = (reg = RegExp.exec(decodeURIComponent(token)))[1] ? reg[2] : reg[2];

		param.set("ani_id", aniId);
		param.set("_", token);

		//	aniId === "c4G4-Q"
		//		? "Zl1OYaV_HJs5uEQ3W6wWbfy1ntDOCA1e"
		//		: KAICODEX.enc(aniId);

		// aniId c4G4-Q
		// ani_Id Zl1OYaV_HJs5uEQ3W6wWbfy1ntDOCA1e
		// ngnl (forgor aniId)
		// 		  Zl1OYaV_HJts5mY2W7hIbaWeZkHfEFHLCF7AKL4ekhE
		const fetchUrlListApi = `https://animekai.to/${"ajax/episodes/list?".concat(
			param.toString()
		)}`;

		console.log(fetchUrlListApi);

		const responseTextListApi = $.get(fetchUrlListApi);
		console.log(responseTextListApi);
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
			const tokenEncoded = KAICODEX.enc(token);
			const episodeUrl = `https://animekai.to/ajax/links/list?token=${encodeURIComponent(
				token
			)}&_=${tokenEncoded}`;

			episodes.push({
				href: episodeUrl,
				number: parseInt(num, 10),
			});
		}

		return JSON.stringify(episodes);
	} catch (error) {
		console.log("Fetch error:" + error);
		return JSON.stringify([{ number: "ERROR", href: "" }]);
	}
}

async function extractStreamUrl(url, streamType) {
	await Setup();
	try {
		const fetchUrl = `${url}`;
		const reponse = await fetchv3(fetchUrl);
		const text = await reponse.text();
		const cleanedHtml = cleanJsonHtml(text);

		// const kaiCodexContent = await loadKaiCodex();
		// const patchedKaiCodex = kaiCodexContent + "\nthis.KAICODEX = KAICODEX;"; // attach to global scope
		// (0, eval)(patchedKaiCodex); // Now it should be visible globally

		await loadKaiCodex(); // Load KAICODEX

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

		if (streamType === "dub" && dub.length > 0) {
			selectedStreamType = dub;
		} else if (streamType === "sub" && sub.length > 0) {
			selectedStreamType = sub;
		} else if (streamType === "softsub" && softsub.length > 0) {
			selectedStreamType = softsub;
		} else {
			if (sub.length > 0) {
				selectedStreamType = sub;
			} else if (softsub.length > 0) {
				selectedStreamType = softsub;
			} else if (dub.length > 0) {
				selectedStreamType = dub;
			} else {
				throw new Error(
					"No Dub/Sub/SoftSub streams available\nPlease check again later or check the website."
				);
			}
		}

		if (selectedStreamType) {
			// Find server 1 span and extract data-lid
			const serverSpanRegex =
				/<span class="server"[^>]*data-lid="([^"]+)"[^>]*>Server 1<\/span>/;
			const serverMatch = serverSpanRegex.exec(selectedStreamType);

			if (serverMatch && serverMatch[1]) {
				dataLid = serverMatch[1];
				dataLidToken = KAICODEX.enc(dataLid);

				// TODO: Fix this ServerAPI sending an 403 response (Same for sub just doing dub and then copy pasting code)
				// Hopefully this will fix it just not looking into it rn
				// besides that I want to make a version that's for BOTH sub and dub later
				// https://animekai.to/ajax/links/view?id=dIS48a6p6A&_=UVpJN001ckY4cHh4R3I4QVJWM2RqTFdCeFQ
				fetchUrlServerApi = `https://animekai.to/ajax/links/view?id=${encodeURIComponent(
					dataLid
				)}&_=${dataLidToken}`;

				if (data.status !== 200)
					throw new Error(JSON.stringify(data, null, "\t"));

				const responseTextServerApi = await fetchv3(fetchUrlServerApi);
				const dataServerApi = await responseTextServerApi.json();

				KaiMegaUrlJson = KAICODEX.dec(dataServerApi.result);
				megaELinkJson = JSON.parse(KaiMegaUrlJson);
				megaEmbeddedUrl = megaELinkJson.url;
				megaMediaUrl = megaEmbeddedUrl.replace("/e/", "/media/");

				// Fetch the media url
				const mediaUrl = await fetchv3(megaMediaUrl);
				const mediaJson = await mediaUrl.json();

				streamUrlJson = mediaJson.result;
				streamUrlJson = KAICODEX.decMega(streamUrlJson);
				const parsedStreamData = JSON.parse(streamUrlJson);

				if (
					parsedStreamData &&
					parsedStreamData.sources &&
					parsedStreamData.sources.length > 0
				) {
					streamUrl = parsedStreamData.sources[0].file;
				} else {
					console.log(
						"No stream sources found in the response" + parsedStreamData
					);
				}
			}
		}

		return streamUrl;
	} catch (error) {
		console.log("Fetch error:" + error);
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
	await Setup();
	if (typeof KAICODEX !== "undefined") return KAICODEX;

	try {
		const res = await fetchv3(
			"https://raw.githubusercontent.com/haawwkeye/AnimeKai/main/kaicodex/generated/keys.json"
		);
		const responseText = await res.text();
		var keys = JSON.parse(responseText);
		var homeKeys = [];
		var megaKeys = [];
		for (var i = 0; i < keys.kai.length; i++) {
			homeKeys.push(atob(keys.kai[i]));
		}
		for (var i = 0; i < keys.mega.length; i++) {
			megaKeys.push(atob(keys.mega[i]));
		}
		function megaDec(n) {
			n = atob(n.replace(/_/g, "/").replace(/-/g, "+"));
			var l = n.length;
			var o = [];
			for (var i = 0; i < l; i++) {
				var c = n.charCodeAt(i);
				var k = megaKeys[c];
				o.push(k.charCodeAt(i % k.length));
			}
			return decodeURIComponent(String.fromCharCode.apply(null, o));
		}
		var keysChar =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-~!*()'.".split(
				""
			);
		function encrypt$(n) {
			n = encodeURIComponent(n);
			var l = n.length;
			var o = [];
			for (var i = 0; i < l; i++) {
				var kc = homeKeys[keysChar.indexOf(n.charAt(i))];
				c = kc.charAt(i % kc.length);
				o.push(c);
			}
			return btoa(o.join(""))
				.replace(/\//g, "_")
				.replace(/\+/g, "-")
				.replace(/\=/g, "");
		}
		function decrypt$(n) {
			n = atob(n.replace(/_/g, "/").replace(/-/g, "+"));
			var l = n.length;
			var o = [];
			for (var i = 0; i < l; i++) {
				var c = n.charCodeAt(i);
				var cp = "";
				for (var j = 0; j < homeKeys.length; j++) {
					var ck = homeKeys[j].charCodeAt(i % homeKeys[j].length);
					if (ck === c) {
						cp = keysChar[j];
						break;
					}
				}
				if (cp) {
					o.push(cp);
				} else {
					o.push("%");
				}
			}
			return decodeURIComponent(o.join(""));
		}
		this.KAICODEX = {
			enc: encrypt$,
			dec: decrypt$,
			decMega: megaDec,
		};
		// AnimeKai Codex
		// $ap('https://raw.githubusercontent.com/amarullz/kaicodex/main/generated/kai_codex.js?'+$time(),function(r){
		//   if (r.ok){
		//     try{
		//       eval(r.responseText+"\n\nwindow.KAICODEX=KAICODEX;");
		//     }catch(e){}
		//   }
		// });
		return KAICODEX;
	} catch (error) {
		console.log("Load Kaicodex error:" + error);
	}
	// try {
	// 	const url =
	// 		"https://raw.githubusercontent.com/amarullz/kaicodex/refs/heads/main/generated/kai_codex.js";
	// 	const response = await fetchv3(url);
	// 	const scriptText = await response.text();
	// 	return scriptText;
	// } catch (error) {
	// 	console.log("Load Kaicodex error:" + error);
	// }
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
this.btoa = btoa;
this.atob = atob;
