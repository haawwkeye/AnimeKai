// My custom fetch function since v2 doesn't work for some reason?
// (this is a copy of the v2 function, but with some changes to make it work)

function fetchv3(url, options = {}) {
	return fetch(url, options)
		.then((response) => {
			console.log("Response:");
			console.log(response);

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
