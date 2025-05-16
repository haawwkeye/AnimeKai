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

let encrypt_ut, encrypt__t;

// THIS IS A TEMP FUNCTION (until I load it via a script instead of hardcoding it!!!)
// This may not work as I'm going to sleep right after commiting this and then pushing tomorrow to test
// This is basically a 1:1 with the bundle just with a BUNCH of removed/commented out code
// That way it won't kill itself!
// This works in node so hopefully it'll work on phone or web
// in theory it should since the only thing I did was a simple thing anyways 
function encryptionSetup() {
	if (encrypt_ut !== undefined) return; // Already did this setup...
	const win = this;
	//#region PAIN
	(() => {
		win.location = typeof window !== "undefined" ? window.location : {
			host: "",
			origin: ""
		}

		var je = "lazyload";
		var qe = "lazyloaded";
		var Pe = "lazyloading";
		var Re = "lazypreload";
		var We = "lazyerror";
		var Fe = "lazyautosizes";
		var Te = "ls-is-cached";
		var De = "data-src";
		var Oe = "data-srcset";
		var Ie = "data-sizes";
		var Ne = "getElementsByClassName";
		var Ue = "documentElement";
		var He = "HTMLPictureElement";
		var $e = "addEventListener";
		var Be = "getAttribute";
		var Ve = "bind";
		var Ye = "setTimeout";
		var Ge = "requestAnimationFrame";
		var Je = /^picture$/i;
		var Ke = "load";
		var Qe = "error";
		var Xe = "lazyincluded";
		var Ze = "_lazyloaded";
		var et = "prototype";
		var tt = "forEach";
		var at = "(\\s|^)";
		var it = "(\\s|$)";
		var _e = "test";
		var Ae = "class";
		var Ee = "setAttribute";
		var nt = "trim";
		var ke = " ";
		var ot = "replace";
		var rt = "removeEventListener";
		var st = "createEvent";
		var dt = "Event";
		var lt = "initEvent";
		var ut = "detail";
		var ct = "dispatchEvent";
		var Se = "src";
		var mt = "srcset";
		var vt = "offsetWidth";
		var ft = "parentNode";
		var Me = "length";
		var pt = "shift";
		var bt = "apply";
		var yt = "push";
		var gt = "hidden";
		var Le = "now";
		var ht = /^img$/i;
		var zt = /^iframe$/i;
		var wt = "onscroll";
		var Ct = /(gle|ing)bot/;
		var xt = "userAgent";
		var _t = "target";
		var At = "body";
		var Et = "visibility";
		var kt = "offsetParent";
		var St = "opacity";
		var Mt = "overflow";
		var Lt = "visible";
		var jt = "getBoundingClientRect";
		var qt = "left";
		var Pt = "right";
		var Rt = "top";
		var Wt = "bottom";
		var Ft = "elements";
		var Tt = "data-expand";
		var Dt = "expand";
		var Ot = "clientHeight";
		var It = "clientWidth";
		var Nt = "auto";
		var Ut = "data-load-mode";
		var Ht = "contentWindow";
		var $t = "location";
		var Bt = "data-media";
		var Vt = "media";
		var Yt = "lazybeforeunveil";
		var Gt = "defaultPrevented";
		var Jt = "sizes";
		var Kt = "nodeName";
		var Qt = "call";
		var Xt = "getElementsByTagName";
		var Zt = "source";
		var ea = "complete";
		var ta = "naturalWidth";
		var aa = "_lazyCache";
		var ia = "lazy";
		var na = "lazyunveilread";
		var oa = "scroll";
		var ra = "resize";
		var sa = "pageshow";
		var da = "persisted";
		var la = "querySelectorAll";
		var ua = ".";
		var ca = "MutationObserver";
		var ma = "observe";
		var va = "DOMNodeInserted";
		var fa = "DOMAttrModified";
		var pa = "hashchange";
		var ba = "focus";
		var ya = "mouseover";
		var ga = "click";
		var ha = "transitionend";
		var za = "animationend";
		var wa = /d$|^c/;
		var Ca = "readyState";
		var xa = "DOMContentLoaded";
		var _a = "px";
		var Aa = "lazybeforesizes";
		var Ea = "width";
		var ka = "init";
		var M = "object";
		var e = "<div ";
		var L = '="modal';
		var j = ' fade" ';
		var t = "id";
		var a = '="signin"';
		var i = "><div ";
		var q = '="modal-dialog';
		var n = '="modal-content';
		var o = "data-name";
		var r = "type";
		var s = '="button"';
		var P = '="btn-close"';
		var R = "data-bs-dismiss";
		var W = '="modal"';
		var F = "aria-label";
		var T = '="Close"';
		var D = "></button><div ";
		var O = '="modal-body"';
		var d = ' mt-4" ';
		var I = "action";
		var N = "method";
		var U = '="post"';
		var H = "data-broadcast";
		var $ = '="user:updated"';
		var l = '="form-group"';
		var u = "><input ";
		var B = '="text"';
		var c = '="form-control"';
		var m = "name";
		var V = '="username"';
		var v = "placeholder";
		var f = '="password"';
		var Y = '="Password"';
		var G = '="form-group';
		var p = ' d-flex justify-content-center mb-3"><span ';
		var b = '="captcha"';
		var y = "data-theme";
		var g = '="dark"';
		var h = "></span></div><button ";
		var z = '="submit"';
		var w = '="btn';
		var J = '="mt-3"';
		var C = "href";
		var x = '="#"';
		var _ = '="cs-switcher"';
		var A = "data-target";
		var E = "</a>";
		var K = '="forgot"';
		var Q = "style";
		var k = '="display:none"';
		var S = "></div><div ";
		var X = "><strong>Sign in</strong>";
		var Z =
			e +
			Ae +
			L +
			j +
			t +
			a +
			i +
			Ae +
			q +
			' modal-dialog-centered cs-wrapper"><div ' +
			Ae +
			n +
			(ee = ' cs-content" ') +
			o +
			a +
			(te = "><button ") +
			r +
			s +
			ke +
			Ae +
			P +
			ke +
			R +
			W +
			ke +
			F +
			T +
			D +
			Ae +
			O +
			"><h5>Sign in to your account</h5><form " +
			Ae +
			'="ajax-login' +
			d +
			I +
			'="/ajax/user/signin"' +
			ke +
			N +
			U +
			ke +
			H +
			$ +
			i +
			Ae +
			l +
			u +
			r +
			B +
			ke +
			Ae +
			c +
			ke +
			m +
			V +
			ke +
			v +
			'="Username or email" required></div><div ' +
			Ae +
			l +
			u +
			r +
			f +
			ke +
			Ae +
			c +
			ke +
			m +
			f +
			ke +
			v +
			Y +
			" required></div><div " +
			Ae +
			G +
			p +
			Ae +
			b +
			ke +
			y +
			g +
			h +
			r +
			z +
			ke +
			Ae +
			w +
			' modal-btn btn-primary w-100 my-3">Sign In</button></form><div ' +
			Ae +
			J +
			">Don't have an account? <a " +
			C +
			x +
			ke +
			Ae +
			_ +
			ke +
			A +
			(Z = '="signup"') +
			"><strong>Sign up</strong>" +
			E +
			"</div><a " +
			C +
			x +
			ke +
			Ae +
			_ +
			ke +
			A +
			K +
			">Forgot Password?" +
			E +
			"</div></div><div " +
			Ae +
			n +
			ee +
			o +
			Z +
			ke +
			Q +
			k +
			te +
			r +
			s +
			ke +
			Ae +
			P +
			ke +
			R +
			W +
			ke +
			F +
			T +
			D +
			Ae +
			O +
			"><h5>Create An Account</h5><form " +
			Ae +
			'="ajax-register' +
			d +
			I +
			'="/ajax/user/signup"' +
			ke +
			N +
			U +
			ke +
			H +
			$ +
			i +
			Ae +
			l +
			u +
			r +
			B +
			ke +
			Ae +
			c +
			ke +
			v +
			'="Username"' +
			ke +
			m +
			V +
			S +
			Ae +
			l +
			u +
			r +
			(ae = '="email"') +
			ke +
			Ae +
			c +
			ke +
			v +
			'="Email"' +
			ke +
			m +
			ae +
			S +
			Ae +
			l +
			u +
			r +
			f +
			ke +
			Ae +
			c +
			ke +
			v +
			Y +
			ke +
			m +
			f +
			S +
			Ae +
			l +
			u +
			r +
			f +
			ke +
			Ae +
			c +
			ke +
			v +
			'="Password confirmation" ' +
			m +
			'="password_confirmation"' +
			S +
			Ae +
			G +
			p +
			Ae +
			b +
			ke +
			y +
			g +
			h +
			r +
			z +
			ke +
			Ae +
			w +
			' modal-btn btn-primary w-100 my-3">Sign Up</button></form><div ' +
			Ae +
			J +
			">Already have an account? <a " +
			C +
			x +
			ke +
			Ae +
			_ +
			ke +
			A +
			a +
			X +
			E +
			"</div></div></div><div " +
			Ae +
			n +
			ee +
			o +
			K +
			ke +
			Q +
			k +
			te +
			r +
			s +
			ke +
			Ae +
			P +
			ke +
			R +
			W +
			ke +
			F +
			T +
			D +
			Ae +
			O +
			"><h5>Forgot Password</h5><form " +
			Ae +
			'="ajax' +
			d +
			I +
			'="/ajax/user/forgot-password"' +
			ke +
			N +
			U +
			i +
			Ae +
			l +
			u +
			r +
			B +
			ke +
			Ae +
			c +
			ke +
			v +
			'="Email or Username" ' +
			m +
			'="account"' +
			S +
			Ae +
			G +
			p +
			Ae +
			b +
			ke +
			y +
			g +
			h +
			r +
			z +
			ke +
			Ae +
			w +
			' modal-btn btn-primary w-100 my-3">Request</button></form><div ' +
			Ae +
			J +
			">Back to <a " +
			C +
			x +
			ke +
			Ae +
			_ +
			ke +
			A +
			a +
			X +
			E +
			"</div></div></div></div></div>";
		var ee =
			e +
			Ae +
			L +
			j +
			t +
			'="request"' +
			i +
			Ae +
			q +
			(H = ' modal-dialog-centered"><div ') +
			Ae +
			n +
			($ = ' normal"><button ') +
			r +
			s +
			ke +
			Ae +
			P +
			ke +
			R +
			W +
			ke +
			F +
			T +
			D +
			Ae +
			O +
			"><h5>Send Request</h5><span " +
			Ae +
			(V = '="text-muted"') +
			">If you can't find your favourite anime in our library, please submit a request. We will try to make it available as soon as possible.</span><form " +
			Ae +
			'="ajax-request' +
			d +
			I +
			'="/ajax/anime/request"' +
			ke +
			N +
			U +
			i +
			Ae +
			l +
			u +
			r +
			B +
			ke +
			Ae +
			c +
			ke +
			m +
			'="title"' +
			ke +
			v +
			'="Anime name" required></div><div ' +
			Ae +
			l +
			u +
			r +
			B +
			ke +
			Ae +
			c +
			ke +
			m +
			'="ref_url"' +
			ke +
			v +
			'="Link to MAL/ AL/ anidb or any if possible"></div><div ' +
			Ae +
			l +
			"><textarea " +
			Ae +
			c +
			ke +
			m +
			(ae = '="detail"') +
			ke +
			v +
			'="More details about it if possible" ' +
			(Y = "rows") +
			(f = '="3"') +
			"></textarea></div><div " +
			Ae +
			G +
			' d-flex justify-content-center"><span ' +
			Ae +
			b +
			ke +
			y +
			g +
			h +
			Ae +
			w +
			' modal-btn btn-primary w-100 my-3">Send Request</button></form></div></div></div></div>';
		var te =
			e +
			Ae +
			L +
			j +
			t +
			'="w2g-create"' +
			i +
			Ae +
			q +
			H +
			Ae +
			n +
			$ +
			r +
			s +
			ke +
			Ae +
			P +
			ke +
			R +
			W +
			ke +
			F +
			T +
			D +
			Ae +
			'="modal-head"' +
			i +
			Ae +
			'="modal-bg"' +
			ke +
			Q +
			'="background-image:url()"' +
			S +
			Ae +
			'="aitem-wrapper w2g"><div ' +
			Ae +
			'="aitem live"><div ' +
			Ae +
			'="inner"><a ' +
			C +
			'="room.html"' +
			ke +
			Ae +
			'="poster"><div><img ' +
			Ae +
			'="anime-poster"></div>' +
			E +
			e +
			Ae +
			ae +
			i +
			Ae +
			'="title anime-title"></div><div ' +
			Ae +
			'="info"' +
			(o = "><span ") +
			Ae +
			'="dub"><svg><use xlink:href="#dub"></use></svg></span><span>EP 123</span><span><i ' +
			Ae +
			'="fa-solid fa-user"></i>12</span></div><a ' +
			Ae +
			w +
			' w2g-status" ' +
			C +
			'="javascript:;">Live' +
			E +
			e +
			Ae +
			'="meta"' +
			i +
			Ae +
			'="user"><img ' +
			Ae +
			'="user-avatar"' +
			o +
			Ae +
			'="user-name"></span></div><time>preview</time></div></div></div></div></div></div><div ' +
			Ae +
			O +
			"><form " +
			Ae +
			'="ajax"' +
			ke +
			I +
			'="/ajax/watch2gether/create"' +
			ke +
			N +
			U +
			u +
			r +
			(K = '="hidden"') +
			ke +
			m +
			'="ani_id"> <input ' +
			r +
			K +
			ke +
			m +
			'="is_public"' +
			ke +
			(k = "value") +
			'="1"' +
			i +
			Ae +
			l +
			u +
			r +
			B +
			ke +
			Ae +
			'="room-name form-control text-center" ' +
			v +
			'="Your Room Name"></div><div ' +
			Ae +
			'="privacy-sw mb-4"><span ' +
			Ae +
			'="public active">Public</span><span>Private</span></div><button ' +
			Ae +
			w +
			' btn-primary modal-btn w-100">Create Room</button></form></div></div></div></div>';
		var ae =
			e +
			Ae +
			L +
			j +
			t +
			'="report"' +
			i +
			Ae +
			q +
			H +
			Ae +
			n +
			$ +
			r +
			s +
			ke +
			Ae +
			P +
			ke +
			R +
			W +
			ke +
			F +
			T +
			D +
			Ae +
			O +
			"><h5>Report Issue</h5><div " +
			Ae +
			'="mt-2 mb-3"><span ' +
			Ae +
			'="text-muted me-1">Episode:</span><span ' +
			t +
			'="report-episode"></span></div><div ' +
			Ae +
			V +
			">Please let us know what's wrong so we can fix it as soon as possible.</div><form " +
			N +
			'="POST"' +
			ke +
			I +
			'="/ajax/episodes/report"' +
			ke +
			Ae +
			J +
			i +
			Ae +
			'="row"' +
			i +
			Ae +
			(p = '="col-12') +
			(z = ' col-sm-6"><div ') +
			Ae +
			(x = '="form-check"') +
			u +
			Ae +
			(_ = '="form-check-input"') +
			ke +
			r +
			(A = '="checkbox"') +
			ke +
			t +
			(a = '="video_broken"') +
			ke +
			m +
			(X = '="issue[]"') +
			ke +
			k +
			a +
			(d = "><label ") +
			Ae +
			(b = '="form-check-label') +
			(y = ' text-muted" ') +
			(g = "for") +
			a +
			">Video broken</label></div></div><div " +
			Ae +
			p +
			z +
			Ae +
			x +
			u +
			Ae +
			_ +
			ke +
			r +
			A +
			ke +
			t +
			(h = '="audio_sync"') +
			ke +
			m +
			X +
			ke +
			k +
			h +
			d +
			Ae +
			b +
			y +
			g +
			h +
			">Audio not synced</label></div></div><div " +
			Ae +
			p +
			z +
			Ae +
			x +
			u +
			Ae +
			_ +
			ke +
			r +
			A +
			ke +
			t +
			(Q = '="sub_sync"') +
			ke +
			m +
			X +
			ke +
			k +
			Q +
			d +
			Ae +
			b +
			y +
			g +
			Q +
			">Subtitle not synced</label></div></div><div " +
			Ae +
			p +
			z +
			Ae +
			x +
			u +
			Ae +
			_ +
			ke +
			r +
			A +
			ke +
			t +
			(S = '="skiptime"') +
			ke +
			m +
			X +
			ke +
			k +
			S +
			d +
			Ae +
			b +
			y +
			g +
			S +
			">Wrong skip time</label></div></div></div><div " +
			Ae +
			G +
			' mt-2"><div ' +
			Ae +
			'="mb-2">Other:</div><textarea ' +
			v +
			'="Please share more details about the issue youâ€™re encountering." ' +
			Ae +
			c +
			ke +
			m +
			'="message"' +
			ke +
			Y +
			f +
			"></textarea></div><button " +
			Ae +
			w +
			' modal-btn btn-primary w-100 mt-3">Send Report</button></form></div></div></div></div>';
		C = typeof window != "undefined" ? window : {};
		E = ((i, m, s) => {
			var v;
			var f;
			var p;
			var F;
			var n;
			var b;
			var e;
			var l;
			var T;
			var d;
			var D;
			var O;
			var a;
			var I;
			var o;
			var u;
			var c;
			var y;
			var g;
			var h;
			var r;
			var N;
			var z;
			var w;
			var U;
			var H;
			var C;
			var t;
			var $;
			var B;
			var V;
			var Y;
			var x;
			var _;
			var G;
			var A;
			var J;
			var K;
			var Q;
			var E;
			var k;
			var S;
			var M;
			var X;
			var Z;
			var ee;
			var te;
			var ae;
			var L;
			var j;
			var q;
			var ie;
			var ne;
			var oe;
			var re;
			var P;
			var se;
			var de;
			var le;
			var ue;
			var ce;
			var me;
			var R;
			var ve;
			var fe;
			var W;
			var pe;
			var be;
			var ye;
			var ge;
			var he;
			var ze;
			var we;
			var Ce;
			var xe = {
				lazyClass: je,
				loadedClass: qe,
				loadingClass: Pe,
				preloadClass: Re,
				errorClass: We,
				autosizesClass: Fe,
				fastLoadedClass: Te,
				iframeLoadMode: 0,
				srcAttr: De,
				srcsetAttr: Oe,
				sizesAttr: Ie,
				minSize: 40,
				customMedia: {},
				init: true,
				expFactor: 1.5,
				hFac: 0.8,
				loadMode: 2,
				loadHidden: true,
				ricTimeout: 0,
				throttleDelay: 125,
			};
			f = i.lazySizesConfig || i.lazysizesConfig || {};
			for (Ce in xe) {
				if (!(Ce in f)) {
					f[Ce] = xe[Ce];
				}
			}
			if (m && m[Ne]) {
				p = m[Ue];
				F = i[He];
				b = Be;
				e = i[(n = $e)][Ve](i);
				l = i[Ye];
				T = i[Ge] || l;
				d = i.requestIdleCallback;
				D = Je;
				O = [Ke, Qe, Xe, Ze];
				a = {};
				I = Array[et][tt];
				o = function (e, t) {
					a[t] ||= new RegExp(at + t + it);
					return a[t][_e](e[b](Ae) || "") && a[t];
				};
				u = function (e, t) {
					if (!o(e, t)) {
						e[Ee](Ae, (e[b](Ae) || "")[nt]() + ke + t);
					}
				};
				c = function (e, t) {
					if ((t = o(e, t))) {
						e[Ee](Ae, (e[b](Ae) || "")[ot](t, ke));
					}
				};
				y = function (t, a, e) {
					var i = e ? n : rt;
					if (e) {
						y(t, a);
					}
					O[tt](function (e) {
						t[i](e, a);
					});
				};
				g = function (e, t, a, i, n) {
					var o = m[st](dt);
					(a = a || {}).instance = v;
					o[lt](t, !i, !n);
					o[ut] = a;
					e[ct](o);
					return o;
				};
				h = function (e, t) {
					var a;
					if (!F && (a = i.picturefill || f.pf)) {
						if (t && t[Se] && !e[b](mt)) {
							e[Ee](mt, t[Se]);
						}
						a({
							reevaluate: true,
							elements: [e],
						});
					} else if (t && t[Se]) {
						e[Se] = t[Se];
					}
				};
				r = function (e, t) {
					return (getComputedStyle(e, null) || {})[t];
				};
				N = function (e, t, a) {
					for (a = a || e[vt]; a < f.minSize && t && !e._lazysizesWidth;) {
						a = t[vt];
						t = t[ft];
					}
					return a;
				};
				ge = [];
				he = ye = [];
				ze = function () {
					var e = he;
					he = ye[Me] ? ge : ye;
					be = !(pe = true);
					while (e[Me]) {
						e[pt]()();
					}
					pe = false;
				};
				(we = function (e, t) {
					if (pe && !t) {
						e[bt](this, arguments);
					} else {
						he[yt](e);
						if (!be) {
							be = true;
							(m[gt] ? l : T)(ze);
						}
					}
				})._lsFlush = ze;
				z = we;
				w = function (a, e) {
					if (e) {
						return function () {
							z(a);
						};
					} else {
						return function () {
							var e = this;
							var t = arguments;
							z(function () {
								a[bt](e, t);
							});
						};
					}
				};
				we = function (e) {
					var a;
					var i = 0;
					var n = f.throttleDelay;
					var o = f.ricTimeout;
					function t() {
						a = false;
						i = s[Le]();
						e();
					}
					var r =
						d && o > 49
							? function () {
								d(t, {
									timeout: o,
								});
								if (o !== f.ricTimeout) {
									o = f.ricTimeout;
								}
							}
							: w(function () {
								l(t);
							}, true);
					return function (e) {
						var t;
						if ((e = e === true)) {
							o = 33;
						}
						if (!a) {
							a = true;
							if ((t = n - (s[Le]() - i)) < 0) {
								t = 0;
							}
							if (e || t < 9) {
								r();
							} else {
								l(r, t);
							}
						}
					};
				};
				U = function (e) {
					var t;
					var a;
					var i = 99;
					function n() {
						t = null;
						e();
					}
					function o() {
						var e = s[Le]() - a;
						if (e < i) {
							l(o, i - e);
						} else {
							(d || n)(n);
						}
					}
					return function () {
						a = s[Le]();
						t = t || l(o, i);
					};
				};
				Z = ht;
				ee = zt;
				te = wt in i && !Ct[_e](navigator[xt]);
				j = L = ae = 0;
				q = -1;
				ie = function (e) {
					j--;
					if (!e || !!(j < 0) || !e[_t]) {
						j = 0;
					}
				};
				ne = function (e) {
					return (
						(X = X == null ? r(m[At], Et) == gt : X) ||
						r(e[ft], Et) != gt ||
						r(e, Et) != gt
					);
				};
				oe = function (e, t) {
					var a;
					var i = e;
					var n = ne(e);
					E -= t;
					M += t;
					k -= t;
					S += t;
					while (n && (i = i[kt]) && i != m[At] && i != p) {
						if ((n = (r(i, St) || 1) > 0) && r(i, Mt) != Lt) {
							a = i[jt]();
							n = S > a[qt] && k < a[Pt] && M > a[Rt] - 1 && E < a[Wt] + 1;
						}
					}
					return n;
				};
				P = we(
					(re = function () {
						var e;
						var t;
						var a;
						var i;
						var n;
						var o;
						var r;
						var s;
						var d;
						var l;
						var u;
						var c = v[Ft];
						if ((A = f.loadMode) && j < 8 && (e = c[Me])) {
							t = 0;
							q++;
							for (; t < e; t++) {
								if (c[t] && !c[t]._lazyRace) {
									if (!te || (v.prematureUnveil && v.prematureUnveil(c[t]))) {
										R(c[t]);
									} else {
										if (!(r = c[t][b](Tt)) || !(n = +r)) {
											n = L;
										}
										if (!d) {
											d =
												!f[Dt] || f[Dt] < 1
													? p[Ot] > 500 && p[It] > 500
														? 500
														: 370
													: f[Dt];
											l = (v._defEx = d) * f.expFactor;
											u = f.hFac;
											X = null;
											if (L < l && j < 1 && q > 2 && A > 2 && !m[gt]) {
												L = l;
												q = 0;
											} else {
												L = A > 1 && q > 1 && j < 6 ? d : ae;
											}
										}
										if (s !== n) {
											K = innerWidth + n * u;
											Q = innerHeight + n;
											o = n * -1;
											s = n;
										}
										l = c[t][jt]();
										if (
											(M = l[Wt]) >= o &&
											(E = l[Rt]) <= Q &&
											(S = l[Pt]) >= o * u &&
											(k = l[qt]) <= K &&
											(M || S || k || E) &&
											(f.loadHidden || ne(c[t])) &&
											((_ && j < 3 && !r && (A < 3 || q < 4)) || oe(c[t], n))
										) {
											R(c[t]);
											i = true;
											if (j > 9) {
												break;
											}
										} else if (
											!i &&
											_ &&
											!a &&
											j < 4 &&
											q < 4 &&
											A > 2 &&
											(x[0] || f.preloadAfterLoad) &&
											(x[0] ||
												(!r && (M || S || k || E || c[t][b](f.sizesAttr) != Nt)))
										) {
											a = x[0] || c[t];
										}
									}
								}
							}
							if (a && !i) {
								R(a);
							}
						}
					})
				);
				de = w(
					(se = function (e) {
						var t = e[_t];
						if (t._lazyCache) {
							delete t._lazyCache;
						} else {
							ie(e);
							u(t, f.loadedClass);
							c(t, f.loadingClass);
							y(t, le);
							g(t, qe);
						}
					})
				);
				le = function (e) {
					de({
						target: e[_t],
					});
				};
				ue = function (e, t) {
					var a = e[Be](Ut) || f.iframeLoadMode;
					if (a == 0) {
						e[Ht][$t][ot](t);
					} else if (a == 1) {
						e[Se] = t;
					}
				};
				ce = function (e) {
					var t;
					var a = e[b](f.srcsetAttr);
					if ((t = f.customMedia[e[b](Bt) || e[b](Vt)])) {
						e[Ee](Vt, t);
					}
					if (a) {
						e[Ee](mt, a);
					}
				};
				me = w(function (t, e, a, i, n) {
					var o;
					var r;
					var s;
					var d;
					if (!(s = g(t, Yt, e))[Gt]) {
						if (i) {
							if (a) {
								u(t, f.autosizesClass);
							} else {
								t[Ee](Jt, i);
							}
						}
						a = t[b](f.srcsetAttr);
						i = t[b](f.srcAttr);
						if (n) {
							r = (o = t[ft]) && D[_e](o[Kt] || "");
						}
						d = e.firesLoad || (Se in t && (a || i || r));
						s = {
							target: t,
						};
						u(t, f.loadingClass);
						if (d) {
							clearTimeout(G);
							G = l(ie, 2500);
							y(t, le, true);
						}
						if (r) {
							I[Qt](o[Xt](Zt), ce);
						}
						if (a) {
							t[Ee](mt, a);
						} else if (i && !r) {
							if (ee[_e](t[Kt])) {
								ue(t, i);
							} else {
								t[Se] = i;
							}
						}
						if (n && (a || r)) {
							h(t, {
								src: i,
							});
						}
					}
					if (t._lazyRace) {
						delete t._lazyRace;
					}
					c(t, f.lazyClass);
					z(function () {
						var e = t[ea] && t[ta] > 1;
						if (!d || !!e) {
							if (e) {
								u(t, f.fastLoadedClass);
							}
							se(s);
							t._lazyCache = true;
							l(function () {
								if (aa in t) {
									delete t._lazyCache;
								}
							}, 9);
						}
						if (t.loading == ia) {
							j--;
						}
					}, true);
				});
				R = function (e) {
					var t;
					var a;
					var i;
					var n;
					if (
						!e._lazyRace &&
						((!(n =
							(i = (a = Z[_e](e[Kt])) && (e[b](f.sizesAttr) || e[b](Jt))) ==
							Nt) &&
							!!_) ||
							!a ||
							(!e[b](Se) && !e[mt]) ||
							!!e[ea] ||
							!!o(e, f.errorClass) ||
							!o(e, f.lazyClass))
					) {
						t = g(e, na)[ut];
						if (n) {
							C.updateElem(e, true, e[vt]);
						}
						e._lazyRace = true;
						j++;
						me(e, t, n, i, a);
					}
				};
				ve = U(function () {
					f.loadMode = 3;
					P();
				});
				W = function () {
					if (!_) {
						if (s[Le]() - J < 999) {
							l(W, 999);
						} else {
							_ = true;
							f.loadMode = 3;
							P();
							e(oa, fe, true);
						}
					}
				};
				H = {
					_: function () {
						J = s[Le]();
						v[Ft] = m[Ne](f.lazyClass);
						x = m[Ne](f.lazyClass + ke + f.preloadClass);
						e(oa, P, true);
						e(ra, P, true);
						e(sa, function (e) {
							var t;
							if (e[da] && (t = m[la](ua + f.loadingClass))[Me] && t[tt]) {
								T(function () {
									t[tt](function (e) {
										if (e[ea]) {
											R(e);
										}
									});
								});
							}
						});
						if (i[ca]) {
							new MutationObserver(P)[ma](p, {
								childList: true,
								subtree: true,
								attributes: true,
							});
						} else {
							p[n](va, P, true);
							p[n](fa, P, true);
							setInterval(P, 999);
						}
						e(pa, P, true);
						[ba, ya, ga, Ke, ha, za][tt](function (e) {
							m[n](e, P, true);
						});
						if (wa[_e](m[Ca])) {
							W();
						} else {
							e(Ke, W);
							m[n](xa, P);
							l(W, 20000);
						}
						if (v[Ft][Me]) {
							re();
							z._lsFlush();
						} else {
							P();
						}
					},
					checkElems: P,
					unveil: R,
					_aLSL: (fe = function () {
						if (f.loadMode == 3) {
							f.loadMode = 2;
						}
						ve();
					}),
				};
				B = w(function (e, t, a, i) {
					var n;
					var o;
					var r;
					e._lazysizesWidth = i;
					i += _a;
					e[Ee](Jt, i);
					if (D[_e](t[Kt] || "")) {
						o = 0;
						r = (n = t[Xt](Zt))[Me];
						for (; o < r; o++) {
							n[o][Ee](Jt, i);
						}
					}
					if (!a[ut].dataAttr) {
						h(e, a[ut]);
					}
				});
				V = function (e, t, a) {
					var i = e[ft];
					if (i) {
						a = N(e, i, a);
						if (
							!(t = g(e, Aa, {
								width: a,
								dataAttr: !!t,
							}))[Gt]
						) {
							if ((a = t[ut][Ea]) && a !== e._lazysizesWidth) {
								B(e, i, t, a);
							}
						}
					}
				};
				C = {
					_: function () {
						$ = m[Ne](f.autosizesClass);
						e(ra, Y);
					},
					checkElems: (Y = U(function () {
						var e;
						var t = $[Me];
						if (t) {
							for (e = 0; e < t; e++) {
								V($[e]);
							}
						}
					})),
					updateElem: V,
				};
				t = function () {
					if (!t.i && m[Ne]) {
						t.i = true;
						C._();
						H._();
					}
				};
				l(function () {
					if (f[ka]) {
						t();
					}
				});
				return (v = {
					cfg: f,
					autoSizer: C,
					loader: H,
					init: t,
					uP: h,
					aC: u,
					rC: c,
					hC: o,
					fire: g,
					gW: N,
					rAF: z,
				});
			} else {
				return {
					init: function () { },
					cfg: f,
					noSupport: true,
				};
			}
		})(C, C.document, Date);
		C.lazySizes = E;
		if (M == typeof module && module.exports) {
			module.exports = E;
		}
		(o = this.modals = {}).signin = Z;
		o.request = ee;
		o["w2g-create"] = te;
		o.report = ae;
	})();
	(() => {
		var Ht;
		var w;
		var Gt;
		var $t;
		var Pt;
		var St;
		var q;
		var _t;
		var E;
		var p;
		var M;
		var Ot;
		var y;
		var Zt = "document";
		var o = "navigator";
		var wt = "Object";
		var yt = "Array";
		var Lt = "String";
		var h = "setTimeout";
		var f = "clearTimeout";
		var l = "setInterval";
		var v = "clearInterval";
		var d = "encodeURIComponent";
		var g = "decodeURIComponent";
		var H = "function";
		var L = "Cannot find module '";
		var C = "'";
		var b = "code";
		var z = "MODULE_NOT_FOUND";
		var Tt = "length";
		var G = "default";
		var B = '"';
		var O = "undefined";
		var Z = "number";
		var D = ";";
		var k = "; ";
		var u = "=";
		var m = "/";
		var j = /(%[\dA-F]{2})+/gi;
		var A = /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g;
		var N = "now";
		var X = "toUTCString";
		var J = /%(2[346B]|5E|60|7C)/g;
		var R = /[()]/g;
		var Q = "cookie";
		var F = "attributes";
		var tt = "symbol";
		var Xt = "iterator";
		var Jt = "constructor";
		var Ut = "prototype";
		var it = "0";
		var nt = "1";
		var st = "2";
		var et = "3";
		var rt = "js:reinit";
		var at = "json";
		var ct = "__";
		var ut = "extend";
		var Ct = "slice";
		var Rt = "keyCode";
		var ot = "trim";
		var It = "url";
		var ht = "origin";
		var ft = "searchParams";
		var lt = /^(strict)?(.*?)$/;
		var Vt = "toString";
		var x = " ";
		var vt = "app_version";
		var dt = "script";
		var gt = "//# sourceMappingURL=/app.js.map";
		var bt = "<script />";
		var zt = "src";
		var Bt = "click";
		var Dt = "body";
		var Qt = "innerHTML";
		var Ft = "documentElement";
		var ti = "getTime";
		var Yt = "href";
		var xt = "https://whos.amung.us/pingjs/?k" + u;
		var t = "&c=s&x";
		var pt = t + u;
		var Mt = "&v=29&r" + u;
		var kt = "random";
		var t = "&t";
		var mt = t + u;
		var P = "remove";
		var jt = /^r\d*\./;
		var At = "script[track],link[track]";
		var qt = "no-pjax";
		var Nt = "pjax:start";
		var ii = "pjax:completed";
		var ni = "a";
		var si = "submit";
		var ei = "form";
		var ri = "popstate";
		var ai = "method";
		var ci = "get";
		var ui = "action";
		var oi = "GET";
		var hi = "#";
		var fi = "html";
		var li = "timeout";
		var vi = "abort";
		var t = "<div ";
		var S = "id";
		var di = '="pjax-progress-bar"';
		var gi = " />";
		var wi = t + S + di + gi;
		var yi = "title";
		var Li = "outerHTML";
		var Ci = "toArray";
		var bi = "pushState";
		var zi = "replaceState";
		var Bi = "state";
		var _ = "currentTarget";
		var Di = "toUpperCase";
		var T = "data";
		var xi = "contentType";
		var pi = "?";
		var Kt = "preventDefault";
		var Mi = "which";
		var ki = "metaKey";
		var mi = "ctrlKey";
		var ji = "shiftKey";
		var Ai = "altKey";
		var qi = "protocol";
		var Ni = "hostname";
		var Hi = /#.*?$/;
		var Gi = "complete";
		var Pi = "error";
		var Si = "style";
		var _i = "width";
		var Ti = "%";
		var Ui = "opacity";
		var Ii = "shift";
		var Vi = "readyState";
		var Yi = "onreadystatechange";
		var Ki = /<head[^>]*>([\s\S.]*)<\/head>/i;
		var Wi = /<body[^>]*>([\s\S.]*)<\/body>/i;
		var Ei = "text";
		var $i = "onload";
		var Oi = "head";
		var Zi = "__test";
		var Xi = "localStorage";
		var Ji = "clear";
		var Ri = "$XxqX";
		var Qi = "ycI3k";
		var Fi = "defineProperty";
		var tn = "configurable";
		var nn = "object";
		var sn = "&";
		var en = "Q6LMM&";
		var rn = "eProperty";
		var an = "n";
		var cn = "defi";
		var un = "ef";
		var on = "und";
		var hn = "ng";
		var fn = "b";
		var ln = "at";
		var vn = "tract";
		var dn = "H";
		var gn = "6";
		var wn = "x";
		var yn = "G";
		var Ln = "O";
		var Cn = "$";
		var bn = "_";
		var zn = "c";
		var Bn = "m";
		var Dn = "9";
		var xn = "F3";
		var pn = "ined";
		var Mn = "s6";
		var kn = "decode";
		var mn = "5";
		var jn = "URICompo";
		var An = "mN";
		var qn = "w";
		var Nn = "u";
		var Hn = "Om";
		var Gn = "ndef";
		var Pn = "Str";
		var Sn = "MrA";
		var _n = "i";
		var Tn = "tM";
		var Un = "l";
		var In = "oa";
		var Vn = "8B";
		var Yn = "nent";
		var Kn = "M";
		var Wn = "W8I";
		var En = "8";
		var $n = "enc";
		var On = "N";
		var Zn = "T";
		var Xn = "z5b";
		var Jn = "C";
		var Rn = "o";
		var Qn = "z";
		var Fn = "Z";
		var t1 = "A";
		var i1 = "deURIComponent";
		var n1 = "s8";
		var s1 = "__optimi";
		var e1 = "7";
		var r1 = "y";
		var a1 = "j";
		var c1 = "resi";
		var u1 = "dual";
		var o1 = "__ab";
		var h1 = "s";
		var f1 = "t";
		var l1 = "e";
		var v1 = "join";
		var d1 = "Math";
		var g1 = "test";
		var w1 = "apply";
		var y1 = "decodeURI";
		var L1 = "unshift";
		var C1 = "fromCharCode";
		var b1 = "push";
		var z1 = "split";
		var B1 = "splice";
		var D1 = "sort";
		var x1 = "charCodeAt";
		var p1 = "GxZ";
		var M1 = "B5";
		var k1 = "R8";
		var m1 = "S_";
		var j1 = "v3";
		var A1 = "G7";
		var q1 = "h7";
		var N1 = "b9";
		var H1 = "y9";
		var G1 = "aa";
		var P1 = "aaaa|a";
		var S1 = "GzD";
		var _1 =
			"%0E%10t%7D%7BM%1F@%05%1D!Q%08%10'u%01Dfo%1E%17%3E%10#Y*:;Ew%7F%04&8v%14%0F%0D%19#%16eQ%14%1FkK0Fj%7C/re%0F#%03xb%1E%10%05%05&S%01su%0C%19Ha%02+%15%1F%00w%1Bjytt%10n%7C%05%04A%01X'8%19cw%19j&%7Bhi%06%15%04:v=@j!(H6B$ku%16g%5D%02;%04v=A%15k?C!Z-.(%000F%3C!4%007E%7B%15%04t%00Uz%1Bx%00%22F%20$9%00~%10%3E(=C0Bj.%1F%11iTz:%17%7F%1DY*;&T%22%10%14%04~e%19F%3Cuy_%1Bn%02?,PwX%7D%1D%08D%15t%25$=D%1Bl:%17.%004%07$5%09K%18%00#~k%0Dw%10y%03%09Deb%7Dt%02IwU$,?e%3ER)%0C9%00?%07%1C%08/b%13_%25=/l%0B@%16.k@#Y!%0E%25G#u#)(%00%22F%20$9%00~%10%22%7C%1Dc3r%0E$$V3%7C%16;%17Ewij?(V=W/(k%1Bw%1B";
		var T1 = "textarea";
		var U1 = "fixed";
		var I1 = "copy";
		var V1 = "Function";
		var Y1 = "set";
		var K1 = "RegExp";
		var W1 = "k3";
		var E1 = /\x62\164\u006f\u0061/;
		var $1 = /\063\104/;
		var O1 = /\164\162\u0075\145/;
		var Z1 = /\u0078\u0078/;
		var X1 = /\x5b\u005d/;
		var J1 = /\141\x61/;
		var R1 = /\u007c/;
		var Q1 = /\u002b/g;
		var F1 = /\u002f/g;
		var ts = /\u003d{1,}$/;
		var is = /\u002d/g;
		var ns = /\x5f/g;
		var Wt = "value";
		var ss = "top";
		var es = "left";
		var rs = "position";
		var as = "focus";
		var cs = "select";
		var us = "eval";
		var os = "history";
		var hs = "location";
		var fs = "host";
		var ls = "reload";
		var vs = "stringify";
		var ds = "parse";
		var gs = "reverse";
		var ws = "serviceWorker";
		var ys = "/sw.js";
		var Ls = "**";
		var Cs = "||";
		var bs = ">";
		var zs = ".preview";
		var Bs = ".editor-ctrl";
		var Ds = ".toolbar .tb-item";
		var xs = ".mode";
		var ps = ".toolbar .tb-item.mode";
		var Ms = ".btn-cancel";
		var ks = "reset";
		var ms = "fast";
		var js = "g";
		var As = "$1";
		var r = "\n";
		var qs = "your text";
		var Ns = "https://...";
		var Hs = "bold";
		var Gs = "spoil";
		var Ps = "quote";
		var Ss = "link";
		var _s = ":hidden";
		var Ts = "preview";
		var Us = "edit";
		var Is = "height";
		var Vs = "<div><blockquote>";
		var Ys = "</blockquote></div>";
		var Ks = "<br/>";
		var di = "<a ";
		var i = '="$2"';
		var U = "target";
		var Ws = '="_blank"';
		var Es = ">$1";
		var $s = "</a>";
		var Os = di + Yt + i + x + U + Ws + Es + $s;
		var i = "<b>$2";
		var Ws = "</b>";
		var Zs = i + Ws;
		var Es = "<span ";
		var i = "class";
		var Xs = Es + i + '="spoil">$2</span>';
		var Js = "</div></blockquote>";
		var Rs = "[data-value";
		var Qs = '="preview"]';
		var Fs = Rs + Qs;
		var te = "line-height";
		var ie = "min-height";
		var ne = "padding-top";
		var se = "padding-bottom";
		var ee = "border-top-width";
		var re = "border-bottom-width";
		var c = "selectionStart";
		var ae = "selectionEnd";
		var Qs = "(";
		var ce = "|^)";
		var ue = Qs + r + ce;
		var oe = /\n/g;
		var he = "[";
		var fe = "](";
		var le = ")";
		var I = "hide";
		var V = "show";
		var ve = /^>\s*(.*?)$/;
		var de = /\[([^\]]+)\][ ]*\(([^\)]+)\)/g;
		var ge = /(\*\*)(.*?)\1/g;
		var we = /(\|\|)(.*?)\1/g;
		var ye = "blur";
		var Le = "empty";
		var Ce = "px";
		var be = "best";
		var ze = "newest";
		var Be = "oldest";
		var De = "tree";
		var xe = "more";
		var pe = "comment_sort";
		var Me = "cm_id";
		var ke = "options";
		var me = "tid";
		var je = "#cm-count";
		var Ae = ".sort-cm a";
		var qe = ".load-more";
		var Ne = ".cm-item.item-editor";
		var He = "#cm-report-options";
		var Ge = ".cm-items";
		var Pe = ".cm-loading";
		var Se = ".thread-manage";
		var _e = ".cm-editor";
		var Te = ".cm-editor .btn-cancel";
		var Ue = ".cm-item .ctrls .reply";
		var Ie = ".cm-item .ctrls .reaction";
		var Ve = ".cm-item .ctrls .more .edit";
		var Ye = ".cm-item .ctrls .more .manage";
		var Ke = ".cm-item .ctrls .more .report";
		var We = ".cm-item .ctrls .more .report-option";
		var Ee = ".cm-item .ctrls .more .copy-url";
		var $e = ".cm-item .replies .show-more";
		var Oe = ".cm-item .collapser";
		var Ze = ".content .spoil";
		var Xe = ".content .timestamp";
		var Je = "POST";
		var Re = "/ajax/comments/list";
		var Qe = "/ajax/comments/part";
		var Fe = ".cm-item.highlight";
		var tr = "active";
		var ir = ".cm-item";
		var nr = "collapsed";
		var sr = "data-cursor";
		var er = "data-shown";
		var rr = "children";
		var ar = ".reaction";
		var cr = "span";
		var ur = ".dropdown";
		var or = ".dropdown-menu";
		var hr = (Qs = "[data-bs-toggle") + '="dropdown"]';
		var fr = "hidden.bs.dropdown";
		var lr = "origHtml";
		var vr = "back";
		var dr = "URL copied to clipboard";
		var gr = "parent";
		var wr = "close-edit-editor";
		var yr = ".alert";
		var Lr = "sending";
		var ce = '="alert';
		var Cr = ' alert-dismissible" />';
		var br = t + i + ce + Cr;
		var Cr = '="mx-2"';
		var zr = Es + i + Cr + gi;
		var Br = "alert-danger";
		var Cr = "<i ";
		var Dr = '="fa-solid';
		var xr = ' fa-sharp fa-circle-exclamation">';
		var pr = "</i>";
		var Mr = Cr + i + Dr + xr + pr;
		var xr = "<button ";
		var kr = "type";
		var mr = '="button"';
		var jr = '="btn-close"';
		var Ar = "data-bs-dismiss";
		var qr = '="alert"';
		var Nr = "></button>";
		var Hr = xr + kr + mr + x + i + jr + x + Ar + qr + Nr;
		var Gr = "comment_id";
		var Pr = "thread_id";
		var Sr = "parent_id";
		var _r = "time";
		var Tr = ".replies";
		var Ur = "> .main .detail .content";
		var Ir = (jr = "button[type") + '="submit"]';
		var Vr = "Save";
		var Yr = "keyup";
		var Kr = "> .main .detail .ctrls button.reply";
		var Wr = "> .replies > .cm-item.item-editor";
		var Er = "reply-editor";
		var $r = "data-parent";
		var Or = "Reply";
		var Zr = "form.cm-editor";
		var Xr = "#cm-widget";
		var Jr = "#cm-thread";
		var Rr = "/ajax/comments/widget";
		var Qr = "search";
		var Fr = "@";
		var Ar = "/ajax/comments/thread?_";
		var ta = Ar + u;
		var Y = "status";
		var K = "result";
		var ia = "cursor";
		var na = "count";
		var sa = "total";
		var ea = " comment";
		var ra = Rs + (qr = '="');
		var W = '"]';
		var aa = "/ajax/comments/reaction?_" + u;
		var ca = "/ajax/comments/report?_" + u;
		var ua = "/ajax/comments/edit?_" + u;
		var oa = "/ajax/comments/manage?_" + u;
		var ha = ".cm-item[data-id" + qr;
		var fa = "checkValidity";
		var Et = "name";
		var la = "/ajax/comments/save?_" + u;
		var va = "message";
		var da = "reportValidity";
		var ga = "content";
		var wa = "identifier";
		var Nr = '="text-center';
		var Ar = ' p-3">';
		var ya = t + i + Nr + Ar;
		var La = "</div>";
		var Nr = '="loading"';
		var Ar = "></div>";
		var Ca = t + i + Nr + Ar;
		var ba = "smooth";
		var za = "tabs";
		var Ba = "label";
		var Da = "persist";
		var xa = "section";
		var pa = ".tab-body";
		var Ma = ".tab";
		var ka = ".active";
		var ma = "ajax";
		var ja = "shown";
		var Aa = "fade";
		var qa = "slide";
		var Na = "display";
		var Ha = "query";
		var Ga = "to";
		var Pa = "step";
		var Sa = "format";
		var _a = "human";
		var Ta = "divider";
		var Ua = ", ";
		var Ia = ":";
		var Va = "ended";
		var Ya = "second";
		var Ka = "minute";
		var Wa = "hour";
		var Ea = "day";
		var $a = "en-CA";
		var Ar = '="tooltipster-box"';
		var Oa = "><div ";
		var Za = '="tooltipster-content"';
		var n = "></div></div></div>";
		var Xa = t + i + Ar + Oa + i + Za + Oa + i + Nr + n;
		var Ja = "right-start";
		var Ra = "offset";
		var Qa = ".tooltipster-content";
		var Fa = "tip";
		var t0 = ".cs-switcher";
		var i0 = ".cs-content";
		var n0 = "attr";
		var s0 = "data-bs-original-title";
		var e0 = "Copy";
		var r0 = "siblings-input";
		var a0 = "input";
		var c0 = "Copied!";
		var u0 = "https://platform-api.sharethis.com/js/sharethis.js";
		var o0 = "inline-share-buttons";
		var h0 = "social";
		var f0 = "counts";
		var l0 = "en";
		var v0 = "facebook";
		var d0 = "twitter";
		var g0 = "messenger";
		var w0 = "reddit";
		var y0 = "whatsapp";
		var L0 = "telegram";
		var C0 = "small";
		var b0 = "#fff";
		var z0 = "data-bs-toggle";
		var B0 = "tooltip";
		var D0 = "data-bs-placement";
		var x0 = "bottom";
		var p0 = "Tap to expand";
		var M0 = "pointer";
		var k0 = "expand";
		var m0 = "max-height";
		var j0 = "unset";
		var A0 = "-webkit-line-clamp";
		var q0 = "overflow";
		var N0 = "#nav-menu-btn";
		var H0 = "ul";
		var G0 = "li > ul";
		var P0 = ":visible";
		var S0 = "#search-btn";
		var _0 = ".inner";
		var T0 = ".suggestion";
		var U0 = "/ajax/anime/search";
		var I0 = "jp";
		var V0 = "show.bs.dropdown";
		var Y0 = "hide.bs.dropdown";
		var K0 = ".dropdown.fixed";
		var W0 = Qs + '="tooltip"]';
		var E0 = ".text-expand";
		var $0 = "#wrapper";
		var O0 = ".copier";
		var Z0 = "[data-tabs]";
		var X0 = ".cs-wrapper";
		var J0 = "#menu,.nav-menu";
		var R0 = "#search";
		var Q0 = "[data-jp]";
		var F0 = ".lang-sw";
		var tc = ".count-down";
		var ic = ".local-time";
		var nc = "[data-tip]";
		var sc = ".modal-trigger";
		var ec = "scrollTop";
		var rc = "tab.";
		var ac = "[data-id" + qr;
		var cc = Et + u;
		var uc = /^#|javascript:/;
		var oc = "00";
		var hc = /-/g;
		var fc = "toLocaleTimeString";
		var lc = "innerWidth";
		var vc = "update";
		var dc = "/ajax/anime/tip?id" + u;
		var gc = "[data-name" + u;
		var wc = "]";
		var yc = "disable";
		var Lc = "getSelection";
		var Cc = "stopImmediatePropagation";
		var bc = ".featured";
		var zc = ".featured-pagination";
		var Bc = "fraction";
		var Dc = ".featured-next";
		var xc = ".featured-prev";
		var pc = ".tab-nav";
		var Mc = ".prev";
		var kc = ".next";
		var mc = "page";
		var jc = "next";
		var Ac = "disabled";
		var qc = "auto";
		var Nc = ".alist-group-next";
		var Hc = ".alist-group-prev";
		var Gc = ".onoff-toggle";
		var Pc = ".more-btn";
		var Sc = ".swiper";
		var _c = "off";
		var Tc = ".aitem";
		var Uc = "/ajax/user/watching/list";
		var Ic = "sub";
		var Vc = "dub";
		var Yc = ".swiper-wrapper";
		var Kc = "none";
		var Wc = "block";
		var Ec = "+";
		var $c = "-";
		var Oc = "/ajax/schedule";
		var Zc = ".body";
		var Xc = ".day";
		var Jc = ".timenow";
		var Rc = ".btn-expand";
		var Qc = "expanded";
		var Fc = "/ajax/schedule/items";
		var t2 = ".schedule-next";
		var i2 = ".schedule-prev";
		var n2 = ".swiper-slide.active";
		var s2 = "#featured";
		var e2 = "#latest-updates";
		var r2 = ".alist-group";
		var a2 = "#schedule";
		var c2 = "#continue-watching";
		var Ar = "&page";
		var u2 = Ar + u;
		var o2 = "Page ";
		var h2 = /sub/i;
		var f2 = "lang";
		var Za = '="swiper-slide';
		var Oa = ' aitem" ';
		var l2 = "data-id";
		var v2 = t + i + Za + Oa + l2 + qr;
		var d2 = '">';
		var n = "    ";
		var Qs = '="inner"';
		var Ar = '="ctrl"';
		var Za = '="watching-delete"';
		var g2 =
			d2 +
			r +
			n +
			n +
			n +
			n +
			t +
			i +
			Qs +
			bs +
			r +
			n +
			n +
			n +
			n +
			n +
			t +
			i +
			Ar +
			bs +
			r +
			n +
			n +
			n +
			n +
			n +
			n +
			xr +
			kr +
			mr +
			x +
			i +
			Za +
			x +
			l2 +
			qr;
		var Oa = ' fa-xmark">';
		var Qs = "</button>";
		var w2 =
			d2 +
			r +
			n +
			n +
			n +
			n +
			n +
			n +
			n +
			Cr +
			i +
			Dr +
			Oa +
			pr +
			r +
			n +
			n +
			n +
			n +
			n +
			n +
			Qs +
			r +
			n +
			n +
			n +
			n +
			n +
			La +
			r +
			n +
			n +
			n +
			n +
			n +
			di +
			Yt +
			qr;
		var Ar = '" ';
		var Za = '="poster"';
		var y2 = "<div>";
		var L2 = "<img ";
		var C2 =
			Ar +
			i +
			Za +
			bs +
			r +
			n +
			n +
			n +
			n +
			n +
			n +
			y2 +
			r +
			n +
			n +
			n +
			n +
			n +
			n +
			n +
			L2 +
			zt +
			qr;
		var b2 = "poster";
		var Ar = '="title"';
		var Za = "data-jp";
		var z2 =
			d2 +
			r +
			n +
			n +
			n +
			n +
			n +
			n +
			La +
			r +
			n +
			n +
			n +
			n +
			n +
			$s +
			r +
			n +
			n +
			n +
			n +
			n +
			di +
			i +
			Ar +
			x +
			Za +
			qr;
		var y2 = '="info"';
		var B2 =
			$s +
			r +
			n +
			n +
			n +
			n +
			n +
			t +
			i +
			y2 +
			bs +
			r +
			n +
			n +
			n +
			n +
			n +
			n +
			Es +
			i +
			qr;
		var L2 = '"><svg><use ';
		var Ar = '="#';
		var D2 = L2 + Yt + Ar;
		var x2 = '"></use></svg> ';
		var Za = "</span>";
		var y2 = "<span><b>";
		var p2 = Za + r + n + n + n + n + n + n + y2;
		var M2 = " / ";
		var k2 = "duration";
		var L2 = '="progress-bar"';
		var y2 = '="width:';
		var m2 =
			Ws +
			Za +
			r +
			n +
			n +
			n +
			n +
			n +
			La +
			r +
			n +
			n +
			n +
			n +
			n +
			t +
			i +
			L2 +
			bs +
			r +
			n +
			n +
			n +
			n +
			n +
			n +
			t +
			Si +
			y2 +
			x;
		var Ws = '%;"></div>';
		var j2 =
			Ws + r + n + n + n + n + n + La + r + n + n + n + n + La + r + n + n + La;
		var Za = "<section>";
		var L2 = '="shead';
		var y2 = ' justify">';
		var Ws = '="onoff-toggle';
		var A2 = " stitle text-uppercase ";
		var q2 =
			Za + r + n + t + i + L2 + y2 + r + n + n + xr + kr + mr + x + i + Ws + A2;
		var Za = '">Continue Watching</button>';
		var L2 = '="shead-r"';
		var y2 = '="more-btn"';
		var mr = '="/user/watching"';
		var Ws = "><i ";
		var A2 = ' fa-square-arrow-up-right">';
		var N2 = '="tab-nav"';
		var H2 = '="display:';
		var G2 =
			Za +
			r +
			n +
			n +
			t +
			i +
			L2 +
			bs +
			r +
			n +
			n +
			n +
			di +
			i +
			y2 +
			x +
			Yt +
			mr +
			Ws +
			i +
			Dr +
			A2 +
			pr +
			$s +
			r +
			n +
			n +
			n +
			t +
			i +
			N2 +
			x +
			Si +
			H2 +
			x;
		var Za = '="btn';
		var L2 = ' prev"><i ';
		var y2 = ' fa-circle-chevron-left">';
		var mr = ' next"><i ';
		var Ws = ' fa-circle-chevron-right">';
		var A2 = '="swiper"';
		var P2 =
			d2 +
			r +
			n +
			n +
			n +
			n +
			xr +
			i +
			Za +
			L2 +
			i +
			Dr +
			y2 +
			pr +
			Qs +
			r +
			n +
			n +
			n +
			n +
			xr +
			i +
			Za +
			mr +
			i +
			Dr +
			Ws +
			pr +
			Qs +
			r +
			n +
			n +
			n +
			La +
			r +
			n +
			n +
			La +
			r +
			n +
			La +
			r +
			n +
			t +
			i +
			A2 +
			x +
			Si +
			H2 +
			x;
		var N2 = '="swiper-wrapper';
		var L2 = ' aitem-wrapper regular">';
		var y2 = "<!-- items -->";
		var xr = "</section>";
		var S2 =
			d2 +
			r +
			n +
			n +
			t +
			i +
			N2 +
			L2 +
			r +
			n +
			n +
			n +
			y2 +
			r +
			n +
			n +
			La +
			r +
			n +
			La +
			r +
			xr;
		var _2 = "getTimezoneOffset";
		var T2 = "index";
		var U2 = "recaptcha";
		var I2 = "theme";
		var V2 = "light";
		var Y2 = "captcha";
		var K2 = "flexible";
		var W2 = "string";
		var E2 = "#toast";
		var Za = '="toast"';
		var $2 = t + S + Za + gi;
		var O2 = "alert-success";
		var mr = ' fa-sharp fa-circle-check">';
		var Z2 = Cr + i + Dr + mr + pr;
		var X2 = "alert-info";
		var Ws = ' fa-circle-info">';
		var J2 = Cr + i + Dr + Ws + pr;
		var R2 = "boolean";
		var Q2 = "input,textarea";
		var F2 = jr + '="submit"],button.submit';
		var tu = "span.captcha";
		var iu = ".modal";
		var nu = "broadcast";
		var su = "show.bs.modal";
		var eu = ".loading";
		var ru = t + i + Nr + gi;
		var Qs = ' alert-dismissible mb-3 small" />';
		var au = t + i + ce + Qs;
		var cu = "<div />";
		var uu = (A2 = "[type") + '="file"]';
		var ou = ':not([type="checkbox"]):not([type="radio"])';
		var hu = A2 + '="checkbox"]';
		var fu = ":checked";
		var H2 = '="radio"]';
		var lu = A2 + H2;
		var vu = "multipart";
		var du = "normal";
		var gu = "form.ajax";
		var wu = "form.normal";
		var yu = /\[\]$/;
		var Lu = /\[\]/g;
		var Cu = "files";
		var bu = ".dropdown-menu .genres input";
		var zu = (N2 = "[name") + '="keyword"]';
		var Bu = "#exclude_bookmark";
		var Du = ".btn-more-filter";
		var xu = ".more-filters";
		var pu = "#extra-filters";
		var Mu = "exclude";
		var ku = "absolute";
		var mu = "> div > div";
		var ju = "/user/";
		var Au = "dropdown-menu";
		var qu = ".bs.dropdown.data-api";
		var Nu = "[data-label-placement]";
		var Hu = "placeholder";
		var Gu = "li > input:checked";
		var Pu = "max-items";
		var L2 = ".dropdown-menu li > ";
		var y2 = "input[type";
		var n = '="checkbox"],';
		var xr = " .dropdown-menu li > ";
		var Su = L2 + y2 + n + xr + y2 + H2;
		var _u = "form#filters";
		var Tu = "finish";
		var Uu = /^-/;
		var Iu = "pathname";
		var Vu = ".";
		var Yu = " + [";
		var Ku = "change";
		var Wu = "user_data";
		var Eu = "user_settings";
		var $u = "user_folders";
		var Ou = "title_lang";
		var Zu = "video_lang";
		var Xu = "auto_next";
		var Ju = "auto_play";
		var Ru = "auto_skip";
		var Qu = "skip_seconds";
		var Fu = "episode_list_style";
		var to = "show_watching";
		var io = "show_comment";
		var no = "al_sync";
		var so = "user:loaded";
		var eo = "user:updated";
		var ro = "user:command";
		var ao = "watching:removed";
		var co = "settings:changed";
		var uo = "notifications:changed";
		var oo = "You have not logged in.";
		var ho = "/ajax/user/update";
		var fo = "user_panel_html";
		var lo = "/ajax/user/panel";
		var vo = "X-Data";
		var go = "#folder-edit";
		var wo = "#folder-item";
		var yo = ".action";
		var Lo = ".folder-item";
		var Co = "add";
		var bo = ".folder-edit";
		var zo = ".last-item";
		var Bo = "delete";
		var Do = "/ajax/user/folders/delete";
		var xo = "/ajax/user/folders/list";
		var po = "/ajax/user/folders/save";
		var Mo = ".name";
		var ko = "edit folder-edit";
		var mo = ".save";
		var jo = ".cancel";
		var Ao = "folder-edit";
		var qo = ".items-wrap";
		var No = ".indicator";
		var Ho = ".noti-tab span";
		var Go = ".mark";
		var Po = "seen";
		var So = "dropdown";
		var _o = "new";
		var To = "a.item";
		var Uo = "/ajax/user/notifications/panel";
		var Io = "/ajax/user/notifications/update";
		var Vo = "mark_as_read";
		var Yo = "unwatched";
		var Ko = "Unwatched";
		var Wo = "Watched";
		var Eo = "/ajax/user/bookmarks/update";
		var $o = "watched";
		var Oo = ".avatar-placeholder";
		var Zo = ".ava-select button";
		var Xo = "orig";
		var Jo = "hide.bs.modal";
		var Ro = "selected";
		var Qo = ".ava-select";
		var Fo = "img";
		var th = ".nav-user";
		var ih = "form.ajax-login, form.ajax-register";
		var nh = "form.ajax-request";
		var sh = "#folder-manager";
		var eh = ".watch-status[data-id]";
		var rh = ".user-notification";
		var ah = "#changeava";
		var ch = "stopPropagation";
		var uh = /@id/g;
		var oh = /@name/g;
		var hh = ".tab[data-id" + qr;
		var fh = "user_watching";
		var lh = "user_watching_queue";
		var vh = "user_watching_meta";
		var dh = "user_al_token";
		var gh = "beforeunload";
		var wh = "mousemove";
		var yh = "Item not found";
		var Lh = "/ajax/user/watching/get";
		var Ch = "/ajax/user/watching/save";
		var bh = "https://graphql.anilist.co/";
		var zh = "Content-Type";
		var Bh = "application/json";
		var Dh =
			"mutation ($mediaId: Int, $score: Float) { SaveMediaListEntry(mediaId: $mediaId, score: $score) { id } }";
		var xh = "CURRENT";
		var ph = "COMPLETED";
		var Mh = "PAUSED";
		var kh = "DROPPED";
		var mh = "PLANNING";
		var jh =
			"mutation ($mediaId: Int, $status: MediaListStatus) { SaveMediaListEntry(mediaId: $mediaId, status: $status) { id } }";
		var Ah = "mutation ($id: Int) { DeleteMediaListEntry(id: $id) { deleted } }";
		var qh =
			"mutation ($mediaId: Int, $progress: Int) { SaveMediaListEntry(mediaId: $mediaId, progress: $progress) { id } }";
		var Nh = "/ajax/user/auth/anilist";
		var Hh = "fetch";
		var Gh = "/ajax/user/watching/delete";
		var Ph = "alid";
		var Sh = "folder";
		var _h = "live";
		var Th = ".folder-name";
		var Uh = ".dropdown-item";
		var Ih = "/ajax/user/bookmarks/get";
		var Vh = "/ajax/user/bookmarks/save";
		var Yh = Cr + i + '="fa-light' + Oa + pr + " Remove";
		var Za = '="dropdown-item"';
		var mr = '="#"';
		var Kh = di + i + Za + x + Yt + mr + gi;
		var Wh = ".btn-al-revoke";
		var Eh = "revoke";
		var $h = "token";
		var Oh = ".user-bookmark[data-id]";
		var Zh = ".watching-delete";
		var Xh = ".watching-clear";
		var Jh = "#al-sync";
		var Rh = "getOwnPropertySymbols";
		var Qh = "@@toPrimitive must return a primitive value.";
		var Ws = "Invalid attempt to destructure non-iterable instance.";
		var jr =
			"In order to be iterable, non-array objects must have a [Symbol.iterator]() method.";
		var Fh = Ws + r + jr;
		var tf = "Map";
		var nf = "Set";
		var sf = "Arguments";
		var ef = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
		var rf = "done";
		var af = "timeStamp";
		var cf = "keys";
		var uf = /^https?:\/\/[^/]+/;
		var of = "Bearer ";
		var hf = "/ajax/user/watching/clear?_" + u;
		var ff = /access_token=([^&]+)/;
		var lf = "wss://animekai.to/ws";
		var vf = "w2g_server_lang";
		var df = "#episode-list .episode-section";
		var gf = ".player-main";
		var wf = ".prev-next button";
		var yf = ".ctrl.light button";
		var Lf = ".ctrl.play button";
		var Cf = ".ctrl.episode-select button";
		var bf = "#player-control .subdub-sw";
		var Nr = ' fa-circle-stop text-danger">';
		var ce = "<span>End</span>";
		var zf = Cr + i + Dr + Nr + pr + ce;
		var Bf = "End this show";
		var Qs = ' fa-circle-play">';
		var A2 = "<span>Start</span>";
		var Df = Cr + i + Dr + Qs + pr + A2;
		var xf = "Start this show";
		var pf = "data-bs-trigger";
		var Mf = "hover";
		var kf = "eid";
		var mf = "100%";
		var jf = "z-index";
		var Af = "background";
		var qf = "#000";
		var Nf = "0.95";
		var Hf = ".player-section";
		var Gf = "slug";
		var Pf = "num";
		var Sf = "Unable to load server, please try again.";
		var _f = "Unable to load server list, please try again.";
		var Tf = "ani_id";
		var Uf = "Unable to load episode list, please try again.";
		var If = "meta";
		var Vf = "#player";
		var Yf = "#cur-ep-lang";
		var Kf = "#cur-ep-num";
		var Wf = "#cur-viewer";
		var Ef = "#chat-box";
		var $f = ".btn-openchat";
		var Of = ".btn-closechat";
		var Zf = "button.loadmore-btn";
		var Xf = ".chat-wrapper";
		var Jf = "#chat-form";
		var Rf = "button";
		var Qf = "aside.sidebar";
		var Ff = "popstate.w2g";
		var t3 = "You have been disconnected";
		var i3 = "paused";
		var n3 = "This video has been resumed by the host.";
		var s3 = "This video has been paused by the host.";
		var e3 = "sub dub";
		var r3 = "text/plain";
		var a3 = "Unable to load media.";
		var c3 = "video";
		var u3 = "html5";
		var o3 = "ready";
		var h3 = ".jwplayer";
		var f3 = "keydown";
		var l3 = "seek";
		var v3 = "play";
		var d3 = "pause";
		var g3 = "bufferFull";
		var w3 = ".jw-slider-time, .jw-icon-rewind, .jw-icon-pip";
		var y3 = "You have to login to chat.";
		var L3 = "Your message is too long.";
		var C3 = "/ajax/watch2gether/messages/list";
		var b3 = "Chat with your friends";
		var z3 = t + i + '="chat"' + gi;
		var B3 = "user_id";
		var D3 = "mine";
		var x3 = ".user";
		var p3 = "A viewer";
		var M3 = "This show has been started, hope you enjoy it";
		var L2 = '="message"';
		var k3 = t + i + L2 + bs;
		var n = ' fa-triangle-exclamation">';
		var m3 = Cr + i + Dr + n + pr;
		var j3 = "<div></div>";
		var A3 = "div";
		var q3 = "scroll.w2g";
		var N3 = "resize.w2g";
		var H3 = ".user-avatar";
		var G3 = ".user-name";
		var P3 = ".anime-poster";
		var S3 = ".modal-bg";
		var _3 = ".anime-title";
		var T3 = ".room-name";
		var U3 = ".privacy-sw span";
		var I3 = N2 + '="ani_id"]';
		var V3 = N2 + '="is_public"]';
		var Y3 = "data-default";
		var K3 = "public";
		var W3 = "background-image";
		var E3 = "/ajax/watch2gether/info";
		var $3 = "w2g-create";
		var O3 = "#room-page";
		var Z3 = ".w2g-trigger";
		var xr = "[data-lang";
		var X3 = xr + qr;
		var J3 = "strict";
		var R3 = "/ajax/watch2gether/rooms/episode?_" + u;
		var Q3 = "/ajax/watch2gether/servers/list?";
		var F3 = "/ajax/watch2gether/episodes/list?";
		var t5 = "onopen";
		var i5 = "onmessage";
		var n5 = "onerror";
		var s5 = "onclose";
		var e5 = "close";
		var r5 = "Start playing episode ";
		var a5 = " (";
		var c5 = "/ajax/watch2gether/rooms/end?_" + u;
		var u5 = "/ajax/watch2gether/rooms/status?";
		var o5 = "<svg><use " + Yt + Ar;
		var h5 = '"></use></svg>';
		var y2 = "/ajax/watch2gether/messages/save?_";
		var f5 = y2 + u;
		var l5 = "scrollHeight";
		var H2 = '="event"';
		var Oa = "><span>";
		var v5 = t + i + H2 + Oa;
		var d5 = "</span></div>";
		var di = '="user"';
		var Za = "><img ";
		var g5 = Es + i + di + Za + zt + qr;
		var w5 = '"> ';
		var y5 = "<div><span>";
		var L5 = " has joined";
		var C5 = " has left";
		var b5 = "screen";
		var z5 = "innerHeight";
		var B5 = "scrollY";
		var D5 = "url(";
		var x5 = "READY";
		var p5 = "META_LOADED";
		var M5 = "PLAY_TIMING";
		var k5 = "PLAY_COMPLETED";
		var m5 = "VOLUME_CHANGED";
		var j5 = "QUALITY_CHANGED";
		var A5 = "FULLSCREEN_CHANGED";
		var q5 = "SEEK";
		var N5 = "KEYBOARD";
		var H5 = "PLAY";
		var G5 = "PAUSE";
		var P5 = "PLAY_TOGGLE";
		var S5 = "MUTE";
		var _5 = "VOLUME";
		var T5 = "FULLSCREEN";
		var U5 = "SKIP_DATA";
		var I5 = "SKIP";
		var V5 = "saved_server_lang";
		var Y5 = "saved_server_id";
		var K5 = "on";
		var W5 = ".watch-section";
		var E5 = "origRect";
		var $5 = "padding";
		var O5 = "transition";
		var Z5 = "left .2s, top .2s";
		var X5 = ".entity-section";
		var J5 = "hidden";
		var R5 = "flex-grow";
		var Q5 = "Collapse";
		var F5 = "Expand";
		var t9 = "button.submit";
		var i9 = "The Begin and End values are required and cannot be the same.";
		var n9 = "Please fill at least Intro or Outro.";
		var s9 = "Please select an input field first.";
		var e9 = "#report-episode";
		var mr = "<input ";
		var Ws = '="hidden"';
		var Nr = '="episode_id"';
		var r9 = mr + kr + Ws + x + Et + Nr + gi;
		var ce = '="server_id"';
		var a9 = mr + kr + Ws + x + Et + ce + gi;
		var c9 = "shown.bs.modal";
		var u9 = "Please select an episode and server first.";
		var o9 = "sid";
		var h9 = "You already reported this episode.";
		var f9 = "issue[0]";
		var l9 = "Please fill the form.";
		var v9 = "#player-control";
		var d9 = "#player .play-btn";
		var g9 = ".prev-next .btn";
		var w9 = ".episode-section";
		var y9 = "#player-server";
		var L9 = "#comment";
		var C9 = "popstate.watch";
		var b9 = ".eplist";
		var z9 = ".eplist .range";
		var B9 = ".eplist a";
		var D9 = ".range-label";
		var x9 = ".range-options .item";
		var p9 = ".range-nav";
		var M9 = ".subdub-sw > span";
		var k9 = ".list-sw";
		var m9 = ".server-type > span";
		var j9 = ".server-items";
		var A9 = ".server";
		var q9 = "playable";
		var N9 = "autostart";
		var H9 = "true";
		var G9 = "iframe";
		var P9 = "<iframe />";
		var S9 = "allow";
		var _9 = "autoplay; fullscreen";
		var T9 = "allowfullscreen";
		var U9 = "yes";
		var I9 = "frameborder";
		var V9 = "no";
		var Y9 = "scrolling";
		var K9 = "anime";
		var W9 = "*";
		var E9 = "prev";
		var $9 = "ep";
		var O9 = "highlight";
		var Qs = '="sub"]';
		var Z9 = Rs + Qs;
		var A2 = '="dub"]';
		var X9 = Rs + A2;
		var J9 = "all";
		var R9 = ".lang-group";
		var Q9 = "episode";
		var F9 = ".ep-lang";
		var tl = "http://localhost";
		var il = "disqus";
		var nl = "data-timestamp";
		var sl = "range";
		var el = ".message";
		var rl = ".ep-num";
		var al = "There are no servers available.";
		var cl = ".range";
		var ul = "titles";
		var ol = "langs";
		var hl = '[active="1"]';
		var fl = ".poster-wrap .poster img";
		var ll = ".main-entity .title";
		var vl = ".light";
		var dl = ".expand";
		var gl = ".autoplay > button";
		var wl = ".autonext > button";
		var yl = ".autoskip > button";
		var Ll = ".add-skiptime";
		var Cl = "#report";
		var bl = "report";
		var zl = "message.watch";
		var Bl = "keydown.watch";
		var Dl = "INPUT,TEXTAREA";
		var xl = "media";
		var pl = "loading";
		var Ml = "Unable to load episode, please try again.";
		var kl = "lid";
		var ml = ".sw-next";
		var jl = ".sw-prev";
		var Al = "#watch-page";
		var ql = "#seasons .swiper";
		var Nl = "getBoundingClientRect";
		var Hl = "calc((100vw - ";
		var Gl = "px) / 2)";
		var Pl = "calc((100vh - ";
		var Sl = /^(?:(0*\d{1,2}):)?(0*\d{1,2}):(0*\d{1,2})$/;
		var _l = "/ajax/episodes/skiptime?_" + u;
		var Tl = "#ep" + u;
		var Ul = "contentWindow";
		var Il = "local_";
		var Vl = "hash";
		var Yl = /[^\d]+/g;
		var Kl = "Show ";
		var Wl = " episodes";
		var El = /dub/i;
		var $l = "//";
		var Ol = ".disqus.com/embed.js";
		var L2 = ".server[data-sid";
		var Zl = L2 + qr;
		var Xl = "classList";
		var Jl = "outerHeight";
		var Rl = "event";
		var Ql = "tagName";
		var Fl = "/ajax/episodes/list?";
		var t4 = "/ajax/links/list?";
		var i4 = "fullscreenElement";
		var n4 = "/ajax/links/view?";
		var s4 = "user_ratings";
		var e4 = "Great";
		var r4 = "Good";
		var a4 = "Average";
		var c4 = "Bad";
		var u4 = "Horrible";
		var o4 = ".stars";
		var h4 = "score";
		var f4 = "rated";
		var l4 = "mouseenter";
		var v4 = "mouseleave";
		var d4 = "#anime-rating";
		var g4 = "/ajax/anime/ratings?_" + u;
		var w4 = "Cannot call a class as a function";
		var y4 = "Super expression must either be null or a function";
		var L4 = "Derived constructors may only return object or undefined";
		var C4 = "this hasn't been initialised - super() hasn't been called";
		var b4 = "@@iterator";
		var Cr = "Invalid attempt to iterate non-iterable instance.";
		var z4 = Cr + r + jr;
		var B4 = "_self";
		var Dr = "https://theajack.github.io/disable-devtool/404.html?h";
		var D4 = Dr + u;
		var x4 = "ddtk";
		var p4 = "detectors";
		var M4 = "ondevtoolclose";
		var k4 = "ignore";
		var m4 =
			"【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效";
		var j4 = "qqbrowser";
		var A4 = "firefox";
		var q4 = "macintosh";
		var N4 = "edge";
		var H4 = "chrome";
		var G4 = "trident";
		var P4 = "msie";
		var S4 = "crios";
		var _4 = "edgios";
		var T4 = "contextmenu";
		var U4 = "touch";
		var I4 = "selectstart";
		var V4 = "cut";
		var Y4 = "paste";
		var K4 = "Unknown";
		var W4 = "RegToString";
		var E4 = "DefineId";
		var $4 = "Size";
		var O4 = "DateToString";
		var Z4 = "FuncToString";
		var X4 = "Debugger";
		var J4 = "Performance";
		var R4 = "DebugLib";
		var Q4 = "onDevToolOpen";
		var F4 = "You don't have permission to use DEVTOOL!【type = ";
		var tv = "ã€‘";
		var iv = "init";
		var nv = "detect";
		var sv = "#__vconsole.vc-toggle";
		var ev = "isUsing";
		var rv = "visibilitychange";
		var av = "visibilityState";
		var cv = "mozHidden";
		var uv = "mozvisibilitychange";
		var ov = "mozVisibilityState";
		var hv = "msHidden";
		var fv = "msvisibilitychange";
		var lv = "msVisibilityState";
		var vv = "webkitHidden";
		var dv = "webkitvisibilitychange";
		var gv = "webkitVisibilityState";
		var wv = "0123456789abcdef";
		var yv = "resize";
		var Lv = "checkWindowSizeUneven";
		var Cv = "already running";
		var bv = "(^|&)";
		var zv = "=([^&]*)(&|$)";
		var Bv = "token passed";
		var Dv = "seobot";
		var xv = "0.3.8";
		var pv = "[disable-devtool-auto]";
		var Mv = "disable-menu";
		var kv = "disable-select";
		var mv = "disable-copy";
		var jv = "disable-cut";
		var Av = "disable-paste";
		var qv = "clear-log";
		var Nv = "interval";
		var Hv = "md5";
		var Gv = "tk-name";
		var Pv = "false";
		var Sv = "detector";
		var _v = "key";
		var Tv = "setPrototypeOf";
		var Uv = "getPrototypeOf";
		var Iv = "bind";
		var Vv = "__proto__";
		var Yv = "valueOf";
		var Kv = "innerText";
		var Wv = "opener";
		var Ev = "alert";
		var $v = "confirm";
		var Ov = "prompt";
		var Zv = "userAgent";
		var Xv = "toLowerCase";
		var Jv = "platform";
		var Rv = "maxTouchPoints";
		var Qv = /(mac|win)/i;
		var Fv = /(android|iphone|ipad|ipod|arch)/i;
		var t6 = /(iphone|ipad|ipod|ios|android)/i;
		var i6 =
			/(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i;
		var n6 = "f";
		var s6 = "pointerType";
		var e6 = "returnValue";
		var r6 = "enabled";
		var a6 = /./;
		var c6 = "devicePixelRatio";
		var u6 = "deviceXDPI";
		var o6 = "logicalXDPI";
		var h6 = "outerWidth";
		var f6 = "console";
		var l6 = "log";
		var v6 = "table";
		function d6(r, a, c) {
			function u(i, t) {
				if (!a[i]) {
					if (!r[i]) {
						var s = H == typeof require && require;
						if (!t && s) {
							return s(i, !0);
						}
						if (o) {
							return o(i, !0);
						}
						(t = new Error(L + i + C))[b] = z;
						throw t;
					}
					t = {};
					t.exports = {};
					s = a[i] = t;
					r[i][0].call(
						s.exports,
						function (t) {
							return u(r[i][1][t] || t);
						},
						s,
						s.exports,
						d6,
						r,
						a,
						c
					);
				}
				return a[i].exports;
			}
			var o = w.eVSRI(H, typeof require) && require;
			for (var i = 0; i < c[Tt]; i++) {
				u(c[i]);
			}
			return u;
		}
		Ht = win;
		w = {
			eVSRI: function (t, i) {
				return t == i;
			},
			EGmTs: function (t, i) {
				return t < i;
			},
			YlsFO: function (t, i) {
				return t(i);
			},
			feHts: function (t, i) {
				return t(i);
			},
			QQQgK: function (t) {
				return t();
			},
			RNLLJ: function (t) {
				return t();
			},
			LHXTm: function (t, i, n) {
				return t(i, n);
			},
			OmBvg: function (t, i) {
				return t * i;
			},
			xMMfY: function (t, i) {
				return t !== i;
			},
			ENtXI: function (t, i) {
				return t < i;
			},
			IjASC: function (t, i) {
				return i < t;
			},
			HeBva: function (t, i) {
				return t < i;
			},
			BoyLj: function (t, i) {
				return t(i);
			},
			kUuqH: function (t, i) {
				return t == i;
			},
		};
		// Gt = Ht[Zt];
		// $t = navigator;
		Pt = Object;
		St = Array;
		q = String;
		_t = setTimeout;
		E = clearTimeout;
		p = setInterval;
		M = clearInterval;
		Ot = encodeURIComponent;
		y = decodeURIComponent;
		(n = {})["1"] = 1;
		n["4"] = 4;
		n["5"] = 5;
		n["6"] = 6;
		n["7"] = 7;
		(pr = {})["2"] = 2;
		pr["20"] = 20;
		pr["7"] = 7;
		(N2 = {})["7"] = 7;
		d6(
			{
				1: [
					function (t, i, n) {
						t(6)
						n.i = !0;
						n[G] = undefined;
						var r = {
							o: B,
							u: O,
							_: Z,
							l: D,
							v: k,
							p: u,
							m: m,
						};
						var h = r;
						function f(t) {
							for (var n = 1; w.EGmTs(n, arguments[Tt]); n++) {
								var s;
								var e = arguments[n];
								for (s in e) {
									t[s] = e[s];
								}
							}
							return t;
						}
						r = {
							read: function (t) {
								return (t = t[0] === h.o ? t.slice(1, -1) : t).replace(j, y);
							},
							write: function (t) {
								return w.YlsFO(Ot, t).replace(A, y);
							},
						};
						// function a(o, c) {
						// 	function e(t, i, n) {
						// 		if (typeof Gt !== h.u) {
						// 			if (typeof (n = f({}, c, n)).expires === h._) {
						// 				n.expires = new Date(Date[N]() + n.expires * 86400000);
						// 			}
						// 			n.expires &&= n.expires[X]();
						// 			t = Ot(t).replace(J, y).replace(R, escape);
						// 			var r;
						// 			var a = "";
						// 			for (r in n) {
						// 				if (n[r] && ((a += h.v.concat(r)), n[r] !== true)) {
						// 					a += h.p.concat(n[r].split(h.l)[0]);
						// 				}
						// 			}
						// 			return (Gt[Q] = `${t}${h.p}${o.write(i, t)}${a}`);
						// 		}
						// 	}
						// 	function t(t) {
						// 		if (typeof Gt !== h.u && (!arguments[Tt] || t)) {
						// 			for (
						// 				var s = Gt[Q] ? Gt[Q].split(h.v) : [], e = {}, r = 0;
						// 				r < s[Tt];
						// 				r++
						// 			) {
						// 				var a = s[r].split(h.p);
						// 				var c = a.slice(1).join(h.p);
						// 				try {
						// 					var u = y(a[0]);
						// 					e[u] = o.read(c, u);
						// 					if (t === u) {
						// 						break;
						// 					}
						// 				} catch (t) {}
						// 			}
						// 			if (t) {
						// 				return e[t];
						// 			} else {
						// 				return e;
						// 			}
						// 		}
						// 	}
						// 	return Pt.create(
						// 		{
						// 			set: e,
						// 			get: t,
						// 			remove: function (t, i) {
						// 				var n = {
						// 					expires: -1,
						// 				};
						// 				e(t, "", f({}, i, n));
						// 			},
						// 			withAttributes: function (t) {
						// 				return a(this.converter, f({}, this[F], t));
						// 			},
						// 			withConverter: function (t) {
						// 				return a(f({}, this.converter, t), this[F]);
						// 			},
						// 		},
						// 		{
						// 			attributes: {
						// 				value: Pt.freeze(c),
						// 			},
						// 			converter: {
						// 				value: Pt.freeze(o),
						// 			},
						// 		}
						// 	);
						// }
						var c = {
							path: h.m,
						};
						// n[G] = a(r, c);
					},
					{},
				],
				2: [
					function (t, i, n) {
						function r(t) {
							return (r =
								H == typeof Symbol && w.eVSRI(tt, typeof Symbol[Xt])
									? function (t) {
										return typeof t;
									}
									: function (t) {
										if (
											t &&
											H == typeof Symbol &&
											t[Jt] === Symbol &&
											t !== Symbol[Ut]
										) {
											return tt;
										} else {
											return typeof t;
										}
									})(t);
						}
						n.i = !0;
						n.k = n.g = n.S = n.C = undefined;
						var o = t(7);
						var s = w.feHts(t, 4);
						var e = w.feHts(t, 1);
						n.T = e[G];
						e = t(5);
						n.D = e[G];
						var f = w.YlsFO(t, 6);
						win.FG = f[G]
						n.M = f[G];
						var e = {
							o: it,
							u: nt,
							_: st,
							l: et,
							v: rt,
							p: O,
							m: at,
						};
						var a = e;
						var c = [95, 95, 36]
							.map(function (t) {
								return (0, o.I)(t);
							})
							.join("");
						var v = (n.g = {
							A: a.o,
							L: a.u,
							R: a._,
							j: a.l,
							U: function (t) {
								if (!this.O) {
									try {
										this.O = (0, o.P)(f[G].N(Ht[c]));
									} catch (t) {
										this.O = {};
									}
								}
								return this.O[t];
							},
						});
						var d = (n.k = {
							F: 0,
							B: function (t) {
								var n = this;
								var s = ct.concat(this.F++);
								this[s] = function () {
									this.G.apply(this, arguments);
								};
								// this[s][Ut] =
								// 	arguments[Tt] > 1
								// 		? o.$.extend.apply(
								// 				null,
								// 				[!0, {}].concat([][Ct].call(arguments, 0))
								// 		  )
								// 		: arguments[0];
								var e = v.U(v.L);
								if (!e || !(0, o.q)(o.H, e)) {
									this[s] = function () { };
								}
								this[s].F = s;
								this[s].V = function (t) {
									return n.V(s, t);
								};
								return this[s];
							},
							V: function (s, e) {
								var r = this;
								// (0, o.$)(Gt).on(a.v, function (t, i) {
								// 	i.querySelectorAll(e).forEach(function (t) {
								// 		if (!(t = (0, o.$)(t)).data(s)) {
								// 			t.data(s, new r[s](t));
								// 		}
								// 	});
								// });
							},
							K: function (t) {
								// (0, o.$)(Gt).trigger(a.v, [t]);
							},
						});
						// o.$.fn.activate = function () {
						// 	return this.each(function () {
						// 		d.K(this);
						// 	});
						// };
						var g = (n.S = {
							Y: {},
							W: function (t, i) {
								if (r(this.Y[t]) === a.p) {
									this.Y[t] = [];
								}
								this.Y[t].push(i);
							},
							J: function (t, i) {
								var s = [][Ct].call(arguments, 1);
								if (r(this.Y[t]) !== a.p) {
									this.Y[t].forEach(function (i) {
										_t(function () {
											return i.apply(null, s);
										}, 1);
									});
								}
							},
						});
						// (0, o.$)(Gt).on(s.Z.X, function () {
						// 	g.Y = {};
						// });
						n.C = d.B({
							G: function (t, i, n) {
								this.tt = t;
								this.it = null;
								this.et = 2;
								this.st = 350;
								this.nt = null;
								this.rt = i;
								this.ht = n;
								this.tt.keyup(this.ot.bind(this));
							},
							ot: function (t) {
								var r = this;
								if (this.it) {
									E(this.it);
								}
								if (!([37, 38, 39, 40, 13].indexOf(t[Rt]) > -1)) {
									this.it = _t(function () {
										var t = r.tt.val()[ot]();
										if (r.ht) {
											r.ht();
										}
										if (!(t[Tt] < r.et)) {
											if (r.rt) {
												r.rt(t);
											}
										}
									}, this.st);
								}
							},
						});
						// o.$.ajaxSetup({
						// 	dataType: a.m,
						// 	beforeSend: function (t, i) {
						// 		var n;
						// 		var s = new URL(i[It], o.ct[ht]);
						// 		var e = (0, o.I)(95);
						// 		var r = s[ft].get(e);
						// 		if (r) {
						// 			r = (n = lt.exec(y(r)))[1] ? f[G].ut(n[2]) : f[G]._t(n[2]);
						// 			s[ft].set(e, r);
						// 			i[It] = s[Vt]();
						// 		}
						// 	},
						// });
					},
					n,
				],
				3: [
					function (t, i, n) {
						var c = {
							issSr: function (t) {
								return t();
							},
							kjhKo: function (t, i, n) {
								return w.LHXTm(t, i, n);
							},
							wsfoK: function (t, i) {
								return w.EGmTs(t, i);
							},
							VKxGB: function (t, i) {
								return w.OmBvg(t, i);
							},
							CfkZQ: function (t, i) {
								return t(i);
							},
						};
						n.i = !0;
						n[G] = undefined;
						var u = w.YlsFO(t, 7);
						var o = t(2);
						var a = t(20);
						var t = {
							o: x,
							u: vt,
							_: dt,
							l: gt,
							v: bt,
							p: zt,
							m: Bt,
						};
						var f = t;
						var s = !1;
						function e() {
							try {
								Gt[Dt][Qt] = "";
							} catch (t) { }
							try {
								Gt[Ft][Qt] = "";
							} catch (t) { }
						}
						function l() {
							if (!s) {
								s = true;
								e();
								_t(function () {
									(0, u.ft)();
								}, 100);
							}
						}
						function r() {
							if (Ht._wb_wombat || Ht._WBWombat) {
								e();
							}
						}
						function v() {
							a({
								rewriteHTML: f.o,
								interval: 200,
								disableMenu: !1,
								// ondevtoolopen: function (t, i) {
								// 	l();
								// 	c.issSr(i);
								// },
							});
							var s;
							var e = f.u;
							function t() {
								var t = Gt.createElement(f._);
								t[Qt] = f.l;
								// Gt[Dt].appendChild(t);
								// Gt[Dt].removeChild(t);
							}
							// o.T.remove(e);
							// c.issSr(t);
							// c.kjhKo(p, t, 1500);
							// _t(function t() {
							// 	if ((s = s || !!o.T.get(e))) {
							// 		o.T.remove(e);
							// 		l();
							// 	} else {
							// 		_t(t, 1000);
							// 	}
							// }, 200);
						}
						function d() {
							var a = 0;
							function i() {
								var t;
								var i;
								var n;
								var s = new Date()[ti]();
								if (!c.wsfoK(s, a + c.VKxGB(40, 60000))) {
									a = s;
									s = o.g.U(o.g.R);
									t = c.CfkZQ(Ot, u.ct[Yt]);
									i = u.ct[Yt];
									s = xt
										.concat(s, pt)
										.concat(t, Mt)
										.concat(Math.ceil(c.VKxGB(90000, Math[kt]())), mt)
										.concat(i);
									Ht.WAU_r_s = function () { };
									(n = $(f.v).attr(f.p, s)).appendTo(Gt[Dt]);
									_t(function () {
										return n[P]();
									}, 2000);
								}
							}
							// $(Gt).ready(i).on(f.m, i);
						}
						function g() {
							var t = o.g.U(o.g.L);
							if (!t || !(0, u.q)(u.H, t)) {
								l();
							}
						}
						n[G] = function () {
							if (true && !jt.test(u.H) && !o.g.U(o.g.A)) {
								w.QQQgK(v);
								d();
								w.RNLLJ(g);
								r();
							}
						};
					},
					pr,
				],
				4: [
					function (t, i, n) {
						var r = {
							MsRzt: function (t, i) {
								return w.BoyLj(t, i);
							},
							rIaiP: function (t, i, n) {
								return t(i, n);
							},
						};
						n.i = !0;
						n[G] = n.lt = n.Z = undefined;
						var o = w.YlsFO(t, 7);
						var t = {
							o: At,
							u: qt,
							_: Nt,
							l: ii,
							v: Bt,
							p: ni,
							m: si,
							vt: ei,
							dt: ri,
							bt: ai,
							kt: ci,
							yt: ui,
							gt: oi,
							wt: hi,
							St: Yt,
							Et: fi,
							Ct: li,
							xt: vi,
							Tt: wi,
							Dt: yi,
							Mt: dt,
							It: zt,
						};
						var f = t;
						var e = o.At;
						var l = o.ct;
						var a = f.o;
						var c = f.u;
						var t = {
							X: f._,
							Lt: f.l,
						};
						var v = (n.Z = t);
						var t = {
							jt: 20,
							Ut: 1000,
						};
						var s = (n.lt = {
							Rt: t,
							Ot: new Map(),
							Pt: [],
							Nt: null,
							Ft: null,
							Bt: function (t) {
								if (this.Gt()) {
									this.Rt = o.$.extend({}, this.Rt, t || {});
									this.$t = (0, o.$)(Gt)
										.find(a)
										.map(function (t, i) {
											return i[Li];
										})
									[Ci]();
									this.qt = (0, o.$)(Gt[Dt]);
									(0, o.$)(Gt)
										.on(f.v, f.p, this.Ht.bind(this))
										.on(f.m, f.vt, this.zt.bind(this));
									(0, o.$)(Ht).on(f.dt, this.Vt.bind(this));
								}
							},
							Gt: function () {
								return e && e[bi] && e[zi];
							},
							Vt: function (t) {
								try {
									var s = t.originalEvent[Bi];
									var e = this.Ot.get(s[S]);
									if (e) {
										Gt[yi] = s[yi];
										this.qt.html(e).activate();
									} else if (s) {
										this.Kt({
											url: s[It],
										});
									}
								} catch (t) { }
							},
							zt: function (t) {
								var i = t[_];
								var s;
								var e = (0, o.$)(i);
								if (!t.isDefaultPrevented() && !e.hasClass(c)) {
									if (
										(s = {
											method: e.attr(f.bt) || f.kt,
											url: e.attr(f.yt),
										})[ai][Di]() !== f.gt
									) {
										s[T] = new FormData(i);
										s.processData = false;
										s[xi] = false;
									} else {
										s[It] = `${s[It]}${pi}${o.$.param(e.serializeArray())}`;
									}
									t[Kt]();
									this.Kt(s);
								}
							},
							Ht: function (t) {
								var s = t[_];
								var e = (0, o.$)(s);
								if (
									!(t[Mi] > 1) &&
									!t[ki] &&
									!t[mi] &&
									!t[ji] &&
									!t[Ai] &&
									l[qi] === s[qi] &&
									!w.xMMfY(l[Ni], s[Ni]) &&
									!e.hasClass(c) &&
									(!w.ENtXI(-1, s[Yt].indexOf(f.wt)) ||
										new URL(s[Yt])[Vt]().replace(Hi, "") !==
										l[Yt].replace(Hi, "")) &&
									!t.isDefaultPrevented()
								) {
									t[Kt]();
									this.Kt({
										url: e.attr(f.St),
									});
								}
							},
							Kt: function (t) {
								var n;
								var a = this;
								var i = {
									crossDomain: !0,
									dataType: f.Et,
								};
								var c = o.$.extend({}, t, i);
								c.beforeSend = function (i, t) {
									n = _t(function () {
										i.abort(f.Ct);
									}, a.Rt.Ut);
								};
								c[Gi] = function (t, i) {
									a.Yt = 100;
									if (n) {
										E(n);
									}
								};
								c[Pi] = function (t, i, n) {
									if (i !== f.xt) {
										a.Wt(c[It]);
									}
								};
								c.success = function (t, i, n) {
									try {
										var r = a.Jt(t, c);
										if (a.Qt(r)) {
											a.Wt(r[It]);
										} else {
											Gt[yi] = r.Xt;
											a.qt.html(r.qt);
											a.Zt(r.ti, function () {
												a.qt.activate();
											});
											Ht.scrollTo(0, 0);
											a.ii(r[It]);
											a.ei(v.Lt);
										}
									} catch (t) {
										a.Wt(c[It]);
									}
								};
								if (!this.Ft) {
									this.ii(l[Yt]);
								}
								this.ei(v.X);
								this.Yt = 0;
								this.si();
								e.pushState(null, "", c[It]);
								this.ni();
								this.Nt = o.$.ajax(c);
							},
							si: function () {
								var i = this;
								var n = (0, o.$)(f.Tt).insertBefore(Gt[Dt]);
								var e = p(function () {
									i.Yt += Math[kt]() / 100;
									n[0][Si][_i] = `${10 + i.Yt * 90}${Ti}`;
									if (i.Yt >= 100) {
										r.MsRzt(M, e);
										n[0][Si][Ui] = 0;
										r.rIaiP(
											_t,
											function () {
												return n[P]();
											},
											300
										);
									}
								}, 150);
							},
							ei: function (t) {
								(0, o.$)(Gt).trigger(t);
							},
							ii: function (t) {
								this.Ft = {
									id: new Date()[ti](),
									url: t,
									title: Gt[yi],
								};
								e.replaceState(this.Ft, Gt[yi], this.Ft[It]);
								this.ai(this.Ft[S], this.qt.html());
							},
							ai: function (t, i) {
								while (w.IjASC(this.Pt[Tt], this.Rt.jt)) {
									this.Ot.delete(this.Pt[Ii]());
								}
								this.Ot.set(t, i);
								this.Pt.push(t);
							},
							ni: function () {
								if (this.Nt && w.HeBva(this.Nt[Vi], 4)) {
									this.Nt[Yi] = o.$.noop;
									this.Nt[vi]();
								}
							},
							Wt: function (t) {
								e.replaceState(null, "", t);
								(0, o.Wt)(t);
							},
							Qt: function (t) {
								for (var i = 0; i < t.$t[Tt]; i++) {
									if (this.$t.indexOf(t.$t[i][Li]) < 0) {
										return !0;
									}
								}
								return !1;
							},
							ri: function (t) {
								return o.$.parseHTML(t, Gt, !0);
							},
							Jt: function (t, i) {
								var n = (0, o.$)(this.ri(t.match(Ki)[0]));
								t = (0, o.$)(this.ri(t.match(Wi)[0]));
								(i = o.$.extend({}, i)).$t = [].concat(
									this.hi(n, a)[Ci](),
									this.hi(t, a)[Ci]()
								);
								i.Xt = this.hi(n, f.Dt).last()[Ei]();
								i.ti = [].concat(this.hi(n, f.Mt)[Ci](), this.hi(t, f.Mt)[Ci]());
								i.qt = t;
								i.qt.find(f.Mt)[P]();
								return i;
							},
							hi: function (t, i) {
								return t.filter(i).add(t.find(i));
							},
							Zt: function (t, i) {
								var r;
								var n;
								var a;
								if (t) {
									r = (0, o.$)(f.Mt);
									n = t[Tt];
									a = function () {
										if (--n <= 0 && i) {
											i();
										}
									};
									t.forEach(function (n) {
										var t;
										var i = (0, o.$)(n);
										if (
											r.filter(function (t, i) {
												return n[Li] === i[Li];
											})[Tt]
										) {
											a();
										} else if (i.attr(f.It)) {
											(t = Gt.createElement(f.Mt))[zt] = i.attr(f.It);
											t[$i] = a;
											Gt[Oi].appendChild(t);
										} else {
											(0, o.oi)(i[Ei]());
											a();
										}
									});
								}
							},
						});
						n[G] = function () {
							s.Bt();
						};
					},
					N2,
				],
				5: [
					function (t, i, n) {
						n.i = !0;
						n[G] = undefined;
						var s;
						var e = {
							o: Zi,
							u: nt,
						};
						try {
							var r = e.o;
							(s = Ht[Xi]).setItem(r, e.u);
							s.removeItem(r);
						} catch (t) {
							s = null;
						}
						e = {};
						e.O = {};
						e.getItem = function (t) {
							return this.O[t] || null;
						};
						e.setItem = function (t, i) {
							this.O[t] = i;
						};
						e.removeItem = function (t) {
							delete this.O[t];
						};
						e.clear = function () {
							this.O = {};
						};
						var u = s || e;
						function o(t, i) {
							if ((t = u.getItem(t)) === null) {
								return i;
							}
							try {
								return JSON.parse(t);
							} catch (t) {
								return i;
							}
						}
						function h(t, i) {
							try {
								u.setItem(t, JSON.stringify(i));
								return !0;
							} catch (t) {
								return !1;
							}
						}
						function f(t) {
							return u.removeItem(t);
						}
						function l() {
							return u[Ji]();
						}
						r = {};
						r.get = o;
						r.set = h;
						r.remove = f;
						r.clear = l;
						n[G] = r;
					},
					{},
				],
				6: [
					function (t, i, n) {
						t(2);
						n.i = !0;
						n[G] = undefined;
						var s = {
							o: Ri,
							u: Ut,
							_: Qi,
							l: O,
							v: Fi,
							p: ci,
							m: tn,
							vt: nn,
							dt: sn,
							bt: en,
							kt: H,
							yt: rn,
							gt: an,
							wt: cn,
							St: un,
							Et: on,
							Ct: hn,
							xt: fn,
							Tt: ln,
							Dt: vn,
							Mt: dn,
							It: it,
							ci: gn,
							ui: wn,
							_i: yn,
							fi: Ln,
							li: Cn,
							vi: bn,
							di: zn,
							bi: Bn,
							pi: Dn,
							mi: xn,
							ki: pn,
							yi: Mn,
							gi: kn,
							wi: mn,
							Si: jn,
							Ei: An,
							Ci: qn,
							xi: Nn,
							Ti: Hn,
							Di: Gn,
							Mi: Pn,
							Ii: Sn,
							Ai: _n,
							Li: Tn,
							Ri: Un,
							ji: In,
							Ui: Vn,
							Oi: Yn,
							Pi: Kn,
							Ni: Wn,
							Fi: En,
							Bi: $n,
							Gi: On,
							$i: Zn,
							qi: Xn,
							Hi: Jn,
							zi: et,
							Vi: st,
							Ki: Rn,
							Yi: Qn,
							Wi: Fn,
							Ji: t1,
							Qi: i1,
							Xi: n1,
							Zi: s1,
							te: e1,
							ee: r1,
							se: a1,
							ne: c1,
							ae: ct,
							re: u1,
							he: o1,
							oe: h1,
							ce: f1,
							ue: nt,
							_e: l1,
							fe: v1,
							le: d1,
							ve: g1,
							de: w1,
							be: y1,
							pe: L1,
							me: C1,
							ke: b1,
							ye: z1,
							ge: B1,
							we: D1,
							Se: kt,
							Ee: Lt,
							Ce: x1,
							xe: p1,
							Te: M1,
							De: k1,
							Me: m1,
							Ie: j1,
							Ae: A1,
							Le: q1,
							Re: N1,
							je: H1,
							Ue: u,
							Oe: G1,
							Pe: ni,
							Ne: P1,
							Fe: S1,
							Be: _1,
							Ge: T1,
							$e: U1,
							qe: I1,
						};
						var dt = s;
						function gt(t) {
							return (gt =
								w.eVSRI(dt.kt, typeof Symbol) && w.kUuqH(tt, typeof Symbol[Xt])
									? function (t) {
										return typeof t;
									}
									: function (t) {
										if (
											t &&
											dt.kt == typeof Symbol &&
											t[Jt] === Symbol &&
											t !== Symbol[Ut]
										) {
											return tt;
										} else {
											return typeof t;
										}
									})(t);
						}
						s = {
							_t: (s = (() => {
								g[8968] = (() => {
									var t;
									for (var i = 2; i !== 9;) {
										switch (i) {
											case 5:
												try {
													for (var n = 2; n !== 6;) {
														switch (n) {
															case 9:
																delete t[dt.o];
																delete Pt[dt.u][dt._];
																n = 6;
																break;
															case 3:
																throw "";
																n = 9;
																break;
															case 4:
																n = typeof $XxqX === dt.l ? 3 : 9;
																break;
															case 2:
																Pt[dt.v](Pt[dt.u], dt._, {
																	get: function () {
																		return this;
																	},
																	configurable: true,
																});
																(t = ycI3k)[dt.o] = t;
																n = 4;
																break;
														}
													}
												} catch (i) {
													t = Ht;
												}
												return t;
												break;
											case 1:
												return globalThis;
												break;
											case 2:
												i =
													(typeof globalThis === dt.l ? dt.l : gt(globalThis)) ===
														dt.vt
														? 1
														: 5;
												break;
										}
									}
								})();
								g.y3 = _;
								i(g[8968]);
								g[237947] = (() => {
									for (var t = 2; t !== 5;) {
										switch (t) {
											case 2:
												var v = {
													c0q8V8o: ((t) => {
														for (var i = 2; i !== 18;) {
															switch (i) {
																case 12:
																	var n = g.M3(n, dt.dt);
																	var s = 0;
																	function e(t) {
																		for (var i = 2; i !== 35;) {
																			switch (i) {
																				case 4:
																					return s;
																					break;
																				case 22:
																					v.c0q8V8o = r;
																					i = 21;
																					break;
																				case 3:
																					i = s === 1 && t === 6 ? 9 : 7;
																					break;
																				case 5:
																					g.w3(
																						g.c6(),
																						n,
																						g.G1(g.G1(n, -2, 2), 0, 1)
																					);
																					i = 4;
																					break;
																				case 13:
																					i = s === 3 && t === 7 ? 12 : 10;
																					break;
																				case 10:
																					i = s === 4 && t === 0 ? 20 : 18;
																					break;
																				case 11:
																					g.w3(
																						g.c6(),
																						n,
																						g.G1(g.G1(n, -6, 6), 0, 5)
																					);
																					i = 4;
																					break;
																				case 1:
																					s += 1;
																					i = 5;
																					break;
																				case 15:
																					i = s === 6 && t === 14 ? 27 : 25;
																					break;
																				case 26:
																					g.w3(
																						g.c6(),
																						n,
																						g.G1(g.G1(n, -6, 6), 0, 5)
																					);
																					i = 4;
																					break;
																				case 12:
																					s += 1;
																					i = 11;
																					break;
																				case 19:
																					g.w3(
																						g.c6(),
																						n,
																						g.G1(g.G1(n, -4, 4), 0, 3)
																					);
																					i = 4;
																					break;
																				case 7:
																					i = s === 2 && t === 14 ? 6 : 13;
																					break;
																				case 21:
																					return r(t);
																					break;
																				case 23:
																					g.w3(
																						g.c6(),
																						n,
																						g.G1(g.G1(n, -9, 9), 0, 7)
																					);
																					i = 4;
																					break;
																				case 25:
																					i = s === 7 && t === 1 ? 24 : 22;
																					break;
																				case 6:
																					s += 1;
																					i = 14;
																					break;
																				case 14:
																					g.w3(
																						g.c6(),
																						n,
																						g.G1(g.G1(n, -3, 3), 0, 2)
																					);
																					i = 4;
																					break;
																				case 24:
																					s += 1;
																					i = 23;
																					break;
																				case 8:
																					g.w3(
																						g.c6(),
																						n,
																						g.G1(g.G1(n, -3, 3), 0, 1)
																					);
																					i = 4;
																					break;
																				case 17:
																					s += 1;
																					i = 16;
																					break;
																				case 27:
																					s += 1;
																					i = 26;
																					break;
																				case 2:
																					i = s === 0 && t === 4 ? 1 : 3;
																					break;
																				case 16:
																					g.w3(
																						g.c6(),
																						n,
																						g.G1(g.G1(n, -5, 5), 0, 3)
																					);
																					i = 4;
																					break;
																				case 20:
																					s += 1;
																					i = 19;
																					break;
																				case 18:
																					i = s === 5 && t === 1 ? 17 : 15;
																					break;
																				case 9:
																					s += 1;
																					i = 8;
																					break;
																			}
																		}
																	}
																	function r(t) {
																		for (var i = 2; i !== 1;) {
																			switch (i) {
																				case 2:
																					return n[t];
																					break;
																			}
																		}
																	}
																	var i = 19;
																	break;
																case 6:
																	c = 0;
																	i = 14;
																	break;
																case 19:
																	return e;
																	break;
																case 14:
																	n += f(l(a) ^ u(c));
																	i = 13;
																	break;
																case 9:
																	var a = 0;
																	var c = 0;
																	i = 8;
																	break;
																case 7:
																	i = c === t[Tt] ? 6 : 14;
																	break;
																case 3:
																	var u = g.l_().bind(t);
																	i = 9;
																	break;
																case 13:
																	a++;
																	c++;
																	i = 8;
																	break;
																case 8:
																	i = a < h[Tt] ? 7 : 12;
																	break;
																case 2:
																	function o(t) {
																		for (var i = 2; i !== 11;) {
																			switch (i) {
																				case 7:
																					var n;
																					var i = 6;
																					break;
																				case 6:
																					n = g.T8(
																						g.N5(e, function () {
																							for (var t = 2; t !== 1;) {
																								switch (t) {
																									case 2:
																										return 0.5 - a();
																										break;
																								}
																							}
																						}),
																						""
																					);
																					n = g[n];
																					i = 13;
																					break;
																				case 3:
																					i = s < t[Tt] ? 9 : 7;
																					break;
																				case 9:
																					e[s] = r(t[s] + 56);
																					i = 8;
																					break;
																				case 4:
																					var s = 0;
																					i = 3;
																					break;
																				case 8:
																					s++;
																					i = 3;
																					break;
																				case 5:
																					var e = [];
																					i = 4;
																					break;
																				case 13:
																					i = n ? 12 : 6;
																					break;
																				case 2:
																					var r = g.m$();
																					var a = g.x3();
																					i = 5;
																					break;
																				case 12:
																					return n;
																					break;
																			}
																		}
																	}
																	var n = "";
																	var h = g.t3()(o([-5, 65])());
																	var f = g.m$();
																	var l = g.l_().bind(h);
																	i = 3;
																	break;
															}
														}
													})(dt.bt),
												};
												return v;
												break;
										}
									}
								})();
								g.n1 = function () {
									if (typeof g[237947].c0q8V8o === dt.kt) {
										return g[237947].c0q8V8o.apply(g[237947], arguments);
									} else {
										return g[237947].c0q8V8o;
									}
								};
								g.v_ = function () {
									if (typeof g[237947].c0q8V8o === dt.kt) {
										return g[237947].c0q8V8o.apply(g[237947], arguments);
									} else {
										return g[237947].c0q8V8o;
									}
								};
								var n;
								var e;
								var s;
								var h;
								var a;
								var f;
								var l;
								var v;
								var d;
								for (var t = 2; t !== 11;) {
									switch (t) {
										case 14:
											g.c2 = 97;
											t = 13;
											break;
										case 3:
											t = g.v_(7) >= 4 ? 9 : 8;
											break;
										case 9:
											g.i5 = 36;
											t = 8;
											break;
										case 13:
											t = g.v_(1) === 87 ? 12 : 11;
											break;
										case 2:
											t = g.v_(4) == 36 ? 1 : 5;
											break;
										case 6:
											t = g.n1(14) == 20 ? 14 : 13;
											break;
										case 1:
											g.h9 = 38;
											t = 5;
											break;
										case 4:
											g.B_ = 82;
											t = 3;
											break;
										case 5:
											t = g.n1(6) != g.n1(14) ? 4 : 3;
											break;
										case 12:
											g.e$ = 41;
											t = 11;
											break;
										case 7:
											g.u_ = 43;
											t = 6;
											break;
										case 8:
											t = g.n1(0) <= g.v_(1) ? 7 : 6;
											break;
									}
								}
								function i(t) {
									function i(t) {
										for (var i = 2; i !== 5;) {
											switch (i) {
												case 2:
													return arguments[0][Lt];
													break;
											}
										}
									}
									function n(t) {
										for (var i = 2; i !== 5;) {
											switch (i) {
												case 2:
													return arguments[0];
													break;
											}
										}
									}
									function s(t) {
										for (var i = 2; i !== 5;) {
											switch (i) {
												case 2:
													return arguments[0][d1];
													break;
											}
										}
									}
									function e(t) {
										for (var i = 2; i !== 5;) {
											switch (i) {
												case 2:
													return arguments[0][V1];
													break;
											}
										}
									}
									function c(t, i, n, s, e, r) {
										for (var a = 2; a !== 7;) {
											switch (a) {
												case 2:
													var c = [arguments];
													c[8] = "";
													c[1] = dt.yt;
													c[3] = dt.gt;
													a = 3;
													break;
												case 3:
													c[8] = dt.wt;
													c[5] = false;
													try {
														for (var u = 2; u !== 11;) {
															switch (u) {
																case 8:
																	u = c[0][5] !== h[49] ? 7 : 6;
																	break;
																case 7:
																	c[7][c[0][4]] = c[7][c[0][2]];
																	u = 6;
																	break;
																case 9:
																	return;
																	break;
																case 3:
																	u =
																		c[7].hasOwnProperty(c[0][4]) &&
																			c[7][c[0][4]] === c[7][c[0][2]]
																			? 9
																			: 8;
																	break;
																case 2:
																	c[2] = {};
																	c[9] = (0, c[0][1])(c[0][0]);
																	c[7] = [c[9], c[9][Ut]][c[0][3]];
																	c[6] = c[0][5] === h[49] ? g : c[7];
																	u = 3;
																	break;
																case 6:
																	c[2][Y1] = function (t) {
																		for (var i = 2; i !== 5;) {
																			switch (i) {
																				case 2:
																					var n = [arguments];
																					c[7][c[0][2]] = n[0][0];
																					i = 5;
																					break;
																			}
																		}
																	};
																	c[2][ci] = function () { // s8ttM
																		for (var t = 2; t !== 11;) {
																			switch (t) {
																				case 13:
																					return;
																					break;
																				case 12:
																					return c[7][c[0][2]];
																					break;
																				case 7:
																					t = c[0][5] === h[49] ? 6 : 14;
																					break;
																				case 3:
																					i[7] = i[1];
																					i[7] += i[2];
																					i[7] += h[1];
																					t = 7;
																					break;
																				case 2:
																					var i = [arguments];
																					i[2] = "";
																					i[2] = dt.St;
																					i[1] = dt.Et;
																					t = 3;
																					break;
																				case 6:
																					return function () {
																						for (var t = 2; t !== 6;) {
																							switch (t) {
																								case 3:
																									return c[7][c[0][2]].apply(
																										c[9],
																										arguments
																									);
																									break;
																								case 4:
																									t = c[0][3] === h[49] ? 3 : 9;
																									break;
																								case 8:
																									return i[8][c[0][2]].apply(
																										i[8],
																										St[Ut][Ct].call(
																											arguments,
																											h[90]
																										)
																									);
																									break;
																								case 9:
																									i[8] =
																										arguments[h[49]] === i[2] ||
																											arguments[h[49]] === undefined
																											? c[9]
																											: arguments[h[49]];
																									t = 8;
																									break;
																								case 7:
																									return c[7][c[0][2]];
																									break;
																								case 5:
																									t =
																										arguments[Tt] > h[49] ? 4 : 7;
																									break;
																								case 2:
																									var i = [arguments];
																									i[2] = null;
																									t = 5;
																									break;
																							}
																						}
																					};
																					break;
																				case 14:
																					t = gt(c[7][c[0][2]]) == i[7] ? 13 : 12;
																					break;
																			}
																		}
																	};
																	c[2].enumerable = c[5];
																	try {
																		for (var o = 2; o !== 3;) {
																			switch (o) {
																				case 2:
																					c[4] = c[8];
																					c[4] += c[3];
																					c[4] += c[1];
																					o = 4;
																					break;
																				case 4:
																					c[0][0][wt][c[4]](c[6], c[0][4], c[2]);
																					o = 3;
																					break;
																			}
																		}
																	} catch (t) { }
																	u = 11;
																	break;
															}
														}
													} catch (t) { }
													a = 7;
													break;
											}
										}
									}
									for (var r = 2; r !== 190;) {
										switch (r) {
											case 27:
												h[72] = dt.Ct;
												h[27] = "";
												h[27] = dt.xt;
												h[71] = "";
												h[71] = "";
												h[71] = dt.Tt;
												r = 21;
												break;
											case 91:
												h[90] = 1;
												h[49] = 0;
												h[31] = h[59];
												h[31] += h[25];
												r = 116;
												break;
											case 82:
												h[99] = dt.Dt;
												h[61] = "";
												h[76] = dt.Mt;
												h[52] = dt.It;
												r = 78;
												break;
											case 95:
												h[25] = dt.ci;
												h[59] = "";
												h[59] = dt.ui;
												h[90] = 9;
												r = 91;
												break;
											case 112:
												h[11] += h[25];
												h[75] = h[61];
												h[75] += h[69];
												h[75] += h[99];
												h[92] = h[76];
												h[92] += h[52];
												r = 106;
												break;
											case 61:
												h[64] = dt._i;
												h[46] = dt.fi;
												h[56] = "";
												h[56] = dt.li;
												r = 57;
												break;
											case 41:
												h[33] = "";
												h[33] = dt.vi;
												h[22] = dt.di;
												h[29] = "";
												r = 37;
												break;
											case 57:
												h[81] = "";
												h[81] = dt.bi;
												h[60] = "";
												h[60] = dt.pi;
												r = 76;
												break;
											case 106:
												h[88] = h[68];
												h[88] += h[54];
												h[12] = h[15];
												h[12] += h[70];
												h[12] += h[83];
												r = 132;
												break;
											case 18:
												h[9] = dt.mi;
												h[1] = dt.ki;
												h[8] = "";
												h[8] = dt.yi;
												r = 27;
												break;
											case 52:
												h[67] = dt.gi;
												h[29] = dt.wi;
												h[44] = dt.Si;
												h[97] = "";
												r = 48;
												break;
											case 28:
												h[26] = "";
												h[26] = dt.Ei;
												h[21] = "";
												h[21] = dt.Ci;
												r = 41;
												break;
											case 128:
												h[80] = h[59];
												h[80] += h[51];
												h[24] = h[23];
												h[24] += h[60];
												r = 124;
												break;
											case 11:
												h[5] = dt.xi;
												h[6] = "";
												h[6] = dt.Ti;
												h[9] = "";
												r = 18;
												break;
											case 6:
												h[2] = "";
												h[2] = "";
												h[2] = dt.Di;
												h[5] = "";
												r = 11;
												break;
											case 132:
												h[17] = h[53];
												h[17] += h[94];
												h[65] = h[28];
												h[65] += h[51];
												r = 128;
												break;
											case 3:
												h[4] = "";
												h[4] = dt.Mi;
												h[3] = "";
												h[3] = dt.Ii;
												r = 6;
												break;
											case 116:
												h[43] = h[95];
												h[43] += h[93];
												h[43] += h[66];
												h[11] = h[30];
												r = 112;
												break;
											case 2:
												var h = [arguments];
												h[7] = "";
												h[7] = dt.Ai;
												h[4] = "";
												r = 3;
												break;
											case 120:
												h[63] = h[14];
												h[63] += h[97];
												h[50] = h[38];
												h[50] += h[29];
												h[91] = h[84];
												h[91] += h[33];
												h[62] = h[64];
												r = 146;
												break;
											case 37:
												h[41] = dt.Li;
												h[84] = dt.Ri;
												h[34] = dt.ji;
												h[47] = dt.Ui;
												r = 52;
												break;
											case 48:
												h[42] = dt.Oi;
												h[89] = dt.Pi;
												h[36] = dt.Ni;
												h[97] = dt.Fi;
												r = 65;
												break;
											case 65:
												h[46] = "";
												h[79] = dt.Bi;
												h[38] = dt.Gi;
												h[14] = dt.$i;
												r = 61;
												break;
											case 21:
												h[18] = "";
												h[18] = dt.qi;
												h[48] = dt.Hi;
												h[32] = "";
												r = 32;
												break;
											case 76:
												h[51] = "";
												h[51] = dt.zi;
												h[20] = dt.Vi;
												h[94] = "";
												r = 72;
												break;
											case 68:
												h[53] = dt.Ki;
												h[70] = "";
												h[70] = dt.Yi;
												h[23] = dt.Wi;
												r = 89;
												break;
											case 32:
												h[87] = dt.Ji;
												h[32] = dt.Qi;
												h[16] = "";
												h[16] = dt.Xi;
												r = 28;
												break;
											case 89:
												h[15] = "";
												h[15] = dt.Zi;
												h[54] = "";
												h[54] = dt.te;
												h[68] = "";
												h[68] = dt.ee;
												h[99] = "";
												r = 82;
												break;
											case 101:
												h[30] = "";
												h[30] = dt.se;
												h[93] = dt.ne;
												h[95] = dt.ae;
												h[66] = dt.re;
												h[25] = "";
												r = 95;
												break;
											case 124:
												h[40] = h[81];
												h[40] += h[56];
												h[13] = h[46];
												h[13] += h[20];
												r = 120;
												break;
											case 78:
												h[61] = "";
												h[61] = dt.he;
												h[69] = dt.oe;
												h[30] = "";
												r = 101;
												break;
											case 72:
												h[94] = "";
												h[28] = dt.ce;
												h[94] = dt.ue;
												h[83] = dt._e;
												r = 68;
												break;
											case 146:
												h[62] += h[94];
												h[55] = h[21];
												h[55] += h[51];
												h[85] = h[22];
												h[85] += h[25];
												h[58] = h[89];
												h[58] += h[51];
												r = 139;
												break;
											case 186:
												h[96] += h[89];
												h[96] += h[6];
												h[37] = h[5];
												h[37] += h[2];
												r = 182;
												break;
											case 139:
												h[35] = h[36];
												h[35] += h[26];
												h[35] += h[28];
												h[74] = h[67];
												r = 170;
												break;
											case 170:
												h[74] += h[44];
												h[74] += h[42];
												h[78] = h[16];
												h[78] += h[28];
												r = 166;
												break;
											case 201:
												a(u, dt.fe, h[90], h[63], h[49]);
												r = 200;
												break;
											case 198:
												a(n, dt.le, h[49], h[24], h[49]);
												r = 197;
												break;
											case 193:
												a(o, dt.ve, h[90], h[92], h[49]);
												r = 192;
												break;
											case 191:
												a(n, h[43], h[49], h[31], h[49]);
												r = 190;
												break;
											case 205:
												a(e, dt.de, h[90], h[55], h[49]);
												r = 204;
												break;
											case 196:
												a(n, dt.be, h[49], h[65], h[49]);
												r = 195;
												break;
											case 173:
												a(n, h[37], h[49], h[96]);
												r = 172;
												break;
											case 153:
												h[73] = h[27];
												h[73] += h[28];
												h[73] += h[34];
												h[96] = h[9];
												r = 186;
												break;
											case 162:
												h[19] = h[18];
												h[19] += h[64];
												h[19] += h[87];
												h[39] = h[71];
												r = 158;
												break;
											case 206:
												a(u, dt.pe, h[90], h[85], h[49]);
												r = 205;
												break;
											case 178:
												h[45] = h[4];
												h[45] += h[7];
												h[45] += h[72];
												r = 175;
												break;
											case 158:
												h[39] += h[53];
												h[39] += h[27];
												h[10] = h[8];
												h[10] += h[48];
												h[10] += h[47];
												r = 153;
												break;
											case 199:
												a(i, dt.me, h[49], h[40], h[49]);
												r = 198;
												break;
											case 166:
												h[78] += h[41];
												h[86] = h[79];
												h[86] += h[53];
												h[86] += h[32];
												r = 162;
												break;
											case 174:
												a(n, h[45], h[49], h[57]);
												r = 173;
												break;
											case 182:
												h[37] += h[1];
												h[57] = h[38];
												h[57] += h[20];
												h[57] += h[3];
												r = 178;
												break;
											case 175:
												function a(t, i, n, s, e) {
													for (var r = 2; r !== 5;) {
														switch (r) {
															case 2:
																var a = [arguments];
																c(
																	h[0][0],
																	a[0][0],
																	a[0][1],
																	a[0][2],
																	a[0][3],
																	a[0][4]
																);
																r = 5;
																break;
														}
													}
												}
												var r = 174;
												break;
											case 195:
												a(u, dt.ke, h[90], h[17], h[49]);
												r = 194;
												break;
											case 207:
												a(i, dt.ye, h[90], h[58], h[49]);
												r = 206;
												break;
											case 204:
												a(u, dt.ge, h[90], h[62], h[49]);
												r = 203;
												break;
											case 171:
												a(n, h[39], h[49], h[19]);
												r = 209;
												break;
											case 208:
												a(n, h[74], h[49], h[35]);
												r = 207;
												break;
											case 172:
												a(n, h[73], h[49], h[10]);
												r = 171;
												break;
											case 202:
												a(u, dt.we, h[90], h[50], h[49]);
												r = 201;
												break;
											case 194:
												a(n, h[12], h[49], h[88], h[49]);
												r = 193;
												break;
											case 209:
												a(n, h[86], h[49], h[78]);
												r = 208;
												break;
											case 197:
												a(s, dt.Se, h[49], h[80], h[49]);
												r = 196;
												break;
											case 192:
												a(n, h[75], h[49], h[11], h[49]);
												r = 191;
												break;
											case 200:
												a(n, dt.Ee, h[49], h[13], h[49]);
												r = 199;
												break;
											case 203:
												a(i, dt.Ce, h[90], h[91], h[49]);
												r = 202;
												break;
										}
									}
									function u(t) {
										for (var i = 2; i !== 5;) {
											switch (i) {
												case 2:
													return arguments[0][yt];
													break;
											}
										}
									}
									function o(t) {
										for (var i = 2; i !== 5;) {
											switch (i) {
												case 2:
													return arguments[0][K1];
													break;
											}
										}
									}
								}
								function g() { }
								function _() {
									return dt.Be;
								}
								g.a1 = function () {
									if (typeof g[250945].W_leA5N === dt.kt) {
										return g[250945].W_leA5N.apply(g[250945], arguments);
									} else {
										return g[250945].W_leA5N;
									}
								};
								g[172863] = dt.xe;
								g[W1] = function () {
									if (typeof g[362896].z$FQmTz === dt.kt) {
										return g[362896].z$FQmTz.apply(g[362896], arguments);
									} else {
										return g[362896].z$FQmTz;
									}
								};
								g.j3 = function () {
									if (typeof g[362896].r_gcZNZ === dt.kt) {
										return g[362896].r_gcZNZ.apply(g[362896], arguments);
									} else {
										return g[362896].r_gcZNZ;
									}
								};
								g[442702] = false;
								g[362896] = {
									z$FQmTz: function () {
										var t;
										var i = arguments;
										switch (n) {
											case 30:
												t = i[1] / i[0] + i[2] - i[3];
												break;
											case 47:
												t = (i[1] / i[2]) * i[3] + i[0];
												break;
											case 5:
												t = (-i[0] * i[2]) / i[3] + i[1];
												break;
											case 11:
												t = i[0] / i[2] - i[1];
												break;
											case 36:
												t = (i[0] + i[3] - i[2]) * i[1] - i[4];
												break;
											case 26:
												t = i[1] / i[0] - i[2] + i[3];
												break;
											case 41:
												t = (i[1] * i[4] + i[0]) * i[2] - i[3];
												break;
											case 27:
												t = -i[1] * i[3] - i[0] + i[2];
												break;
											case 51:
												t = i[3] - i[2] + i[1] + i[4] - i[0];
												break;
											case 29:
												t = i[0] - i[1] + i[2];
												break;
											case 39:
												t = (i[3] * i[1]) / i[2] - i[0];
												break;
											case 38:
												t = i[1] * i[0] * i[3] - i[2];
												break;
											case 1:
												t = -i[2] * i[1] * i[0] + i[3];
												break;
											case 21:
												t = (i[1] / i[2] - i[0]) / i[4] + i[3];
												break;
											case 3:
												t = i[1] - i[0];
												break;
											case 31:
												t = (-i[4] - i[0] - i[3]) / i[2] + i[1];
												break;
											case 42:
												t = i[4] + i[1] + i[0] - i[2] - i[3];
												break;
											case 40:
												t = i[0] - i[2] - i[1];
												break;
											case 13:
												t = i[1] - i[2] - i[0] + i[3];
												break;
											case 37:
												t = -i[1] / i[0] / i[2] + i[3];
												break;
											case 15:
												t = i[4] / i[1] + i[2] + i[0] - i[3];
												break;
											case 32:
												t = (-i[0] + i[4] + i[2]) / i[3] + i[1];
												break;
											case 46:
												t = (i[3] + i[2]) / i[1] - i[0];
												break;
											case 9:
												t = i[0] + i[1];
												break;
											case 10:
												t = ((i[4] - i[3]) * i[0]) / i[2] + i[1];
												break;
											case 43:
												t = (i[2] - i[0]) * i[3] - i[1];
												break;
											case 0:
												t = (i[3] - i[1]) / i[2] - i[0] + i[4];
												break;
											case 2:
												t = (i[2] / i[3] + i[4]) / i[1] - i[0];
												break;
											case 25:
												t = (i[1] + i[3]) / i[0] + i[2];
												break;
											case 24:
												t = i[2] * i[0] - i[1] - i[3];
												break;
											case 45:
												t = i[2] * i[0] - i[1];
												break;
											case 28:
												t = i[0] / i[1] + i[2];
												break;
											case 22:
												t = (-i[0] * i[3] + i[4]) / i[1] + i[2];
												break;
											case 4:
												t = (i[4] + i[1] + i[3]) / i[0] + i[2];
												break;
											case 7:
												t = i[3] * i[2] + i[0] - i[1];
												break;
											case 17:
												t = i[2] + i[1] - i[0];
												break;
											case 20:
												t = (i[0] + i[1]) * i[2] - i[3];
												break;
											case 52:
												t = -i[0] - i[3] - i[2] - i[1] + i[4];
												break;
											case 12:
												t = ((-i[1] * i[0]) / i[2]) * i[3] + i[4];
												break;
											case 34:
												t = (i[3] - i[0]) / i[2] + i[1];
												break;
											case 50:
												t = (-i[2] - i[4]) * i[3] + i[0] + i[1];
												break;
											case 49:
												t = ((i[3] + i[1]) * i[4]) / i[0] + i[2];
												break;
											case 23:
												t = i[2] + i[0] - i[1] + i[3];
												break;
											case 33:
												t = -i[2] / i[1] + i[0];
												break;
											case 8:
												t = i[2] / i[3] / i[0] + i[1];
												break;
											case 35:
												t = (i[1] * i[0] * i[2]) / i[3] - i[4];
												break;
											case 48:
												t = (i[3] / i[0]) * i[2] - i[1];
												break;
											case 44:
												t = i[0] + i[1] + i[2];
												break;
											case 6:
												t = -i[2] * i[1] + i[0];
												break;
											case 14:
												t = ((i[4] + i[0]) / i[3]) * i[2] - i[1];
												break;
											case 16:
												t = (i[4] - i[0] - i[2]) / i[1] + i[3];
												break;
											case 18:
												t = -i[3] - i[1] - i[2] + i[0] + i[4];
												break;
											case 19:
												t = -i[3] * i[2] + i[0] + i[1];
												break;
										}
										return t;
									},
									r_gcZNZ: function (t) {
										n = t;
									},
								};
								g[250945] = (function () {
									for (var t = 2; t !== 9;) {
										switch (t) {
											case 2:
												var i = [arguments];
												i[5] = undefined;
												i[3] = {};
												t = 4;
												break;
											case 4:
												i[3].W_leA5N = function () {
													for (var t = 2; t !== 90;) {
														switch (t) {
															case 70:
																n[43]++;
																t = 57;
																break;
															case 63:
																n[16] = dt.Te;
																n[83] = dt.De;
																n[45] = dt.Me;
																n[46] = dt.Ie;
																t = 59;
																break;
															case 36:
																n[86] = n[22];
																g.o1(n[8], n[2]);
																g.o1(n[8], n[79]);
																g.o1(n[8], n[7]);
																t = 51;
																break;
															case 27:
																n[21] = {};
																n[21].R8 = [dt.Ae];
																n[21].v3 = function () {
																	return typeof g.y7() === dt.kt;
																};
																n[25] = n[21];
																t = 23;
																break;
															case 69:
																t = (function () {
																	for (var t = 2; t !== 22;) {
																		switch (t) {
																			case 12:
																				g.o1(i[7], i[3][n[63]]);
																				t = 11;
																				break;
																			case 18:
																				i[2] = false;
																				t = 17;
																				break;
																			case 16:
																				t = i[6] < i[7][Tt] ? 15 : 23;
																				break;
																			case 17:
																				i[6] = 0;
																				t = 16;
																				break;
																			case 7:
																				t = i[6] < i[0][0][Tt] ? 6 : 18;
																				break;
																			case 11:
																				i[1][i[3][n[63]]].t += true;
																				t = 10;
																				break;
																			case 19:
																				i[6]++;
																				t = 7;
																				break;
																			case 2:
																				var i = [arguments];
																				var t = 1;
																				break;
																			case 10:
																				t = i[3][n[45]] === n[42] ? 20 : 19;
																				break;
																			case 24:
																				i[6]++;
																				t = 16;
																				break;
																			case 13:
																				i[1][i[3][n[63]]] = g.w3(
																					function () {
																						for (var t = 2; t !== 9;) {
																							switch (t) {
																								case 2:
																									var i = [arguments];
																									i[3] = {};
																									i[3].h = 0;
																									i[3].t = 0;
																									return i[3];
																									break;
																							}
																						}
																					},
																					this,
																					arguments
																				);
																				t = 12;
																				break;
																			case 23:
																				return i[2];
																				break;
																			case 5:
																				return;
																				break;
																			case 15:
																				i[9] = i[7][i[6]];
																				i[5] = i[1][i[9]].h / i[1][i[9]].t;
																				t = 26;
																				break;
																			case 25:
																				i[2] = true;
																				t = 24;
																				break;
																			case 8:
																				i[6] = 0;
																				t = 7;
																				break;
																			case 26:
																				t = i[5] >= 0.5 ? 25 : 24;
																				break;
																			case 4:
																				i[1] = {};
																				i[7] = [];
																				t = 9;
																				break;
																			case 20:
																				i[1][i[3][n[63]]].h += true;
																				t = 19;
																				break;
																			case 9:
																				i[6] = 0;
																				t = 8;
																				break;
																			case 6:
																				i[3] = i[0][0][i[6]];
																				t = 14;
																				break;
																			case 1:
																				t = i[0][0][Tt] === 0 ? 5 : 4;
																				break;
																			case 14:
																				t =
																					typeof i[1][i[3][n[63]]] === dt.l
																						? 13
																						: 11;
																				break;
																		}
																	}
																})(n[96])
																	? 68
																	: 67;
																break;
															case 59:
																n[63] = dt.Le;
																t = 58;
																break;
															case 57:
																t = n[43] < n[8][Tt] ? 56 : 69;
																break;
															case 2:
																var n = [arguments];
																var t = 1;
																break;
															case 76:
																t = n[11] < n[77][n[83]][Tt] ? 75 : 70;
																break;
															case 65:
																n[96] = [];
																n[42] = dt.Re;
																t = 63;
																break;
															case 40:
																n[50] = n[54];
																n[22] = {};
																n[22].R8 = [dt.je];
																n[22].v3 = function () {
																	function t() {
																		return btoa(dt.Ue);
																	}
																	return !g.H0(E1, t + []);
																};
																t = 36;
																break;
															case 1:
																t = i[5] ? 5 : 4;
																break;
															case 67:
																i[5] = 58;
																return 50;
																break;
															case 5:
																return 32;
																break;
															case 30:
																n[51] = {};
																n[51].R8 = [dt.Ae];
																n[51].v3 = function () {
																	return typeof g.j6() === dt.kt;
																};
																n[79] = n[51];
																t = 43;
																break;
															case 71:
																n[11]++;
																t = 76;
																break;
															case 11:
																n[4] = {};
																n[4].R8 = [dt.Ae];
																n[4].v3 = function () {
																	return typeof g.x6() === dt.kt;
																};
																n[1] = n[4];
																t = 18;
																break;
															case 33:
																n[71].R8 = [dt.Ae];
																n[71].v3 = function () {
																	var t = false;
																	var i = [];
																	try {
																		for (var n in console) {
																			g.o1(i, n);
																		}
																		t = i[Tt] === 0;
																	} catch (t) { }
																	return t;
																};
																n[65] = n[71];
																t = 30;
																break;
															case 58:
																n[43] = 0;
																t = 57;
																break;
															case 68:
																t = 53 ? 68 : 67;
																break;
															case 56:
																n[77] = n[8][n[43]];
																try {
																	n[40] = n[77][n[46]]() ? n[42] : n[16];
																} catch (t) {
																	n[40] = n[16];
																}
																t = 77;
																break;
															case 73:
																n[33][n[45]] = n[40];
																g.o1(n[96], n[33]);
																t = 71;
																break;
															case 18:
																n[9] = {};
																n[9].R8 = [dt.je];
																n[9].v3 = function () {
																	function t() {
																		return escape(dt.Ue);
																	}
																	return g.H0($1, t + []);
																};
																n[2] = n[9];
																t = 27;
																break;
															case 4:
																n[8] = [];
																n[6] = {};
																n[6].R8 = [dt.je];
																n[6].v3 = function () {
																	function t() {
																		return dt.Oe.endsWith(dt.Pe);
																	}
																	return g.H0(O1, t + []);
																};
																t = 7;
																break;
															case 47:
																g.o1(n[8], n[86]);
																g.o1(n[8], n[1]);
																g.o1(n[8], n[97]);
																t = 65;
																break;
															case 75:
																n[33] = {};
																n[33][n[63]] = n[77][n[83]][n[11]];
																t = 73;
																break;
															case 77:
																n[11] = 0;
																t = 76;
																break;
															case 43:
																n[54] = {};
																n[54].R8 = [dt.je];
																n[54].v3 = function () {
																	function t() {
																		return dt.ui.repeat(2);
																	}
																	return g.H0(Z1, t + []);
																};
																t = 40;
																break;
															case 7:
																n[7] = n[6];
																n[3] = {};
																n[3].R8 = [dt.je];
																t = 13;
																break;
															case 13:
																n[3].v3 = function () {
																	function t() {
																		return [] + dt.Pe.concat(dt.Pe);
																	}
																	return !g.H0(X1, t + []) && g.H0(J1, t + []);
																};
																n[5] = n[3];
																t = 11;
																break;
															case 23:
																n[76] = {};
																n[76].R8 = [dt.je];
																n[76].v3 = function () {
																	function t() {
																		return dt.Ne.substr(0, 3);
																	}
																	return !g.H0(R1, t + []);
																};
																n[97] = n[76];
																n[71] = {};
																t = 33;
																break;
															case 51:
																g.o1(n[8], n[5]);
																g.o1(n[8], n[50]);
																g.o1(n[8], n[25]);
																g.o1(n[8], n[65]);
																t = 47;
																break;
														}
													}
												};
												return i[3];
												break;
										}
									}
								})();
								(g[8968].x1hh = g)[485444] = g[8968];
								g.g4 = function () {
									if (typeof g[362896].z$FQmTz === dt.kt) {
										return g[362896].z$FQmTz.apply(g[362896], arguments);
									} else {
										return g[362896].z$FQmTz;
									}
								};
								g.b2 = function () {
									if (typeof g[250945].W_leA5N === dt.kt) {
										return g[250945].W_leA5N.apply(g[250945], arguments);
									} else {
										return g[250945].W_leA5N;
									}
								};
								g[453131] = g[250945];
								g.U$ = function () {
									if (typeof g[362896].r_gcZNZ === dt.kt) {
										return g[362896].r_gcZNZ.apply(g[362896], arguments);
									} else {
										return g[362896].r_gcZNZ;
									}
								};
								g[361870] = dt.Fe;
								g.b2();
								e = (d = g).v_(12);
								d.b2();
								s = d.v_(25);
								h = d.n1(23);
								a = 255;
								f = 256;
								l = d.v_(11);
								v = d.n1(22);
								return [
									function (t) {
										// encrypt _t
										var i;
										(i = [arguments])[8] = s;
										return L(M(i[8], s8ttM(`${i[0][0]}`)));
									},
									function (t) {
										// decrypt? _t
										var i;
										d.a1();
										(i = [arguments])[5] = s;
										return W8ImNt(M(i[5], q(i[0][0])));
									},
									encrypt,
									W, // decrypt? ut
								];
								function T(t) {
									var i;
									var n;
									var s;
									(i = [arguments])[2] = i[0][0][l];
									d.b2();
									i[4] = ut();
									i[1] = 0;
									for (; i[1] < i[2]; i[1]++) {
										i[6] = i[0][0][i[1]];
										if (i[1] % 4 == 0) {
											d.U$(1);
											n = d.g4(4, 18, 3, 222);
											d.U$(2);
											s = d.g4(19, 1, 18, 6, 20);
											i[6] = i[n] ^ s;
										}
										switch (i[1] % 5) {
											case 0:
												i[6] = P(i[6]);
												break;
											case 1:
												i[6] = N(i[6]);
												break;
											case 2:
												i[6] = vt(i[6]);
												break;
											case 3:
												i[6] = P(i[6]);
												break;
											case 4:
												i[6] = N(i[6]);
												break;
										}
										d.j3(3);
										n = d.g4(6, 12);
										d.U$(4);
										s = d.k3(30, 14, 3, 10, 6);
										d.j3(5);
										var e = d.k3(9, 6, 5, 9);
										d.j3(6);
										var r = d.g4(110, 11, 9);
										i[6] = i[n] ^ i[s][i[e] % r];
										d.j3(3);
										e = d.g4(12, 18);
										i[0][0][i[1]] = i[e] & a;
									}
									return i[0][0];
								}
								function r(t) {
									var i;
									d.a1();
									i = [arguments];
									return N2MrA[h][d.n1(13)](null, i[0][0]);
								}
								function U(t) {
									d.a1();
									return ~arguments[0] & a;
								}
								function I(t) {
									var i = [arguments];
									d.b2();
									d.U$(7);
									var n = d.g4(8, 104, 6, 17);
									d.U$(8);
									var s = d.k3(1, 7, 1, 1);
									d.j3(3);
									var e = d.g4(7, 13);
									return ((i[0][0] >>> n) | (i[0][0] << (s - e))) & a;
								}
								function V(t) {
									d.b2();
									return ~arguments[0] & a;
								}
								function c(t) {
									d.b2();
									return ~arguments[0] & a;
								}
								function u(t) {
									var i = [arguments];
									d.j3(9);
									var n = d.k3(14, 229);
									return (i[0][0] - n + f) % f;
								}
								function Y(t) {
									var i = [arguments];
									d.U$(10);
									var n = d.g4(12, 218, 1, 18, 0);
									d.j3(11);
									var s = d.g4(64, 24, 2);
									d.j3(12);
									var e = d.k3(14, 18, 63, 9, 38);
									return ((i[0][0] << n) | (i[0][0] >>> (s - e))) & a;
								}
								function o(t) {
									var i = [arguments];
									return S(M(d.n1(18), r(i[0][0])));
								}
								function K(t) {
									var i;
									(i = [arguments])[5] = r(i[0][0]);
									i[5] = s6C8B(i[5]);
									i[5] = b(i[5], et(), H());
									return S(i[5]);
								}
								function w(t) {
									var i = [arguments];
									d.U$(16);
									var n = d.g4(9, 1, 7, 242, 17);
									return (i[0][0] + n) % f;
								}
								function W(t) {
									var i;
									(i = [arguments])[0][0] = q(i[0][0]);
									i[1] = S(i[0][0]);
									i[1] = ft(i[1]);
									i[1] = it(i[1]);
									i[1] = O(i[1]);
									i[1] = T(i[1]);
									i[1] = X(i[1]);
									i[1] = E(i[1]);
									i[1] = rt(i[1]);
									i[1] = ht(i[1]);
									i[1] = ct(i[1]);
									i[1] = nt(i[1]);
									i[0][0] = r(i[1]);
									return W8ImNt(i[0][0]);
								}
								function E(t) {
									var i;
									var n;
									var s;
									(i = [arguments])[7] = i[0][0][l];
									i[4] = C();
									i[2] = 0;
									for (; i[2] < i[7]; i[2]++) {
										i[6] = i[0][0][i[2]];
										if (i[2] % 5 == 0) {
											d.j3(17);
											n = d.g4(14, 20, 0);
											d.U$(18);
											s = d.k3(14, 2, 6, 10, 9);
											i[6] = i[n] ^ s;
										}
										switch (i[2] % 5) {
											case 0:
												i[6] = P(i[6]);
												break;
											case 1:
												i[6] = u(i[6]);
												break;
											case 2:
												i[6] = c(i[6]);
												break;
											case 3:
												i[6] = N(i[6]);
												break;
											case 4:
												i[6] = c(i[6]);
												break;
										}
										d.U$(9);
										n = d.k3(1, 5);
										d.U$(17);
										s = d.g4(35, 16, 23);
										d.j3(3);
										var e = d.g4(17, 19);
										d.U$(9);
										var r = d.k3(1, 11);
										i[6] = i[n] ^ i[s][i[e] % r];
										d.j3(19);
										e = d.k3(19, 17, 6, 5);
										i[0][0][i[2]] = i[e] & a;
									}
									return i[0][0];
								}
								function y(t) {
									var i = [arguments];
									return S(M(d.n1(14), r(i[0][0])));
								}
								function L(t) {
									var i;
									(i = [arguments])[2] = s6C8B(i[0][0]);
									i[2] = i[2][e](Q1, d.n1(7))[e](F1, d.n1(1));
									d.b2();
									return i[2][e](ts, d.n1(20));
								}
								function $(t) {
									var i = [arguments];
									d.b2();
									i[6] = r(i[0][0]);
									i[6] = s6C8B(i[6]);
									i[6] = b(i[6], B(), D());
									return S(i[6]);
								}
								function C() {
									return [55, 89, 112, 52, 101, 115, 52, 117, 122, 78, 71, 88];
								}
								function b(t, i, n) {
									var s = [arguments];
									d.b2();
									s[8] = {};
									s[6] = 0;
									for (; s[6] < s[0][1][l]; s[6]++) {
										s[8][s[0][1][s[6]]] = s[0][2][s[6]];
									}
									s[2] = d.n1(20);
									s[9] = 0;
									for (; s[9] < s[0][0][l]; s[9]++) {
										s[2] +=
											s[8][s[0][0][s[9]]] !== F3MOm
												? s[8][s[0][0][s[9]]]
												: s[0][0][s[9]];
									}
									return s[2];
								}
								function z() {
									return [
										103, 89, 72, 76, 113, 72, 68, 118, 119, 78, 105, 50, 49, 107,
									];
								}
								function B() {
									return d.n1(21);
								}
								function D() {
									return d.n1(6);
								}
								function O(t) {
									var i;
									(i = [arguments])[1] = r(i[0][0]);
									i[1] = b(i[1], G(), p());
									i[1] = z5bGA(i[1]);
									return S(i[1]);
								}
								function Z(t) {
									var i = [arguments];
									d.a1();
									d.j3(20);
									var n = d.g4(21, 18, 15, 579);
									d.U$(9);
									var s = d.g4(1, 7);
									d.U$(21);
									var e = d.k3(18, 90, 30, 9, 5);
									return ((i[0][0] << n) | (i[0][0] >>> (s - e))) & a;
								}
								function x() {
									return d.n1(10);
								}
								function p() {
									return d.n1(8);
								}
								function X(t) {
									var i = [arguments];
									d.a1();
									i[1] = r(i[0][0]);
									i[1] = b(i[1], x(), k());
									i[1] = z5bGA(i[1]);
									return S(i[1]);
								}
								function M(t, i) {
									var n;
									(n = [arguments])[2] = [];
									n[4] = 0;
									n[8] = 0;
									n[9] = d.v_(20);
									n[8] = 0;
									for (; n[8] < f; n[8]++) {
										n[2][n[8]] = n[8];
									}
									for (n[8] = 0; n[8] < f; n[8]++) {
										d.j3(22);
										var s = d.k3(5, 5, 17, 16, 15);
										d.U$(23);
										var e = d.g4(6, 18, 0, 14);
										d.j3(24);
										var r = d.k3(16, 20, 120, 1892);
										d.U$(21);
										var a = d.k3(11, 1, 1, 18, 1);
										n[4] =
											(n[s] + n[e][n[r]] + n[0][0][v](n[a] % n[0][0][l])) % f;
										n[3] = n[2][n[8]];
										n[2][n[8]] = n[2][n[4]];
										n[2][n[4]] = n[3];
									}
									n[8] = 0;
									n[4] = 0;
									n[6] = 0;
									for (; n[6] < n[0][1][l]; n[6]++) {
										d.U$(25);
										var c = d.g4(6, 0, 5, 18);
										d.U$(11);
										var u = d.g4(1, 0, 1);
										n[8] = (n[c] + u) % f;
										d.U$(26);
										c = d.k3(16, 64, 4, 4);
										d.j3(3);
										u = d.g4(2, 4);
										d.j3(27);
										var o = d.k3(4, 12, 108, 8);
										n[4] = (n[c] + n[u][n[o]]) % f;
										n[3] = n[2][n[8]];
										n[2][n[8]] = n[2][n[4]];
										n[2][n[4]] = n[3];
										n[9] += N2MrA[h](
											n[0][1][v](n[6]) ^ n[2][(n[2][n[8]] + n[2][n[4]]) % f]
										);
									}
									return n[9];
								}
								function k() {
									d.b2();
									return d.n1(2);
								}
								function m(t) {
									var i = [arguments];
									d.j3(28);
									var n = d.g4(200, 10, 173);
									return i[0][0] ^ n;
								}
								function J(t) {
									var i;
									(i = [arguments])[1] = i[0][0][l];
									i[4] = ut();
									i[9] = 0;
									for (; i[9] < i[1]; i[9]++) {
										i[5] = i[0][0][i[9]];
										d.j3(3);
										var n = d.g4(45, 50);
										d.U$(10);
										var s = d.g4(3, 6, 18, 12, 0);
										d.U$(29);
										var e = d.k3(26, 20, 3);
										d.j3(3);
										var r = d.g4(209, 220);
										i[5] = i[n] ^ i[s][i[e] % r];
										switch (i[9] % 5) {
											case 0:
												i[5] = m(i[5]);
												break;
											case 1:
												i[5] = j(i[5]);
												break;
											case 2:
												i[5] = A(i[5]);
												break;
											case 3:
												i[5] = m(i[5]);
												break;
											case 4:
												i[5] = j(i[5]);
												break;
										}
										if (i[9] % 4 == 0) {
											d.j3(30);
											n = d.g4(2, 18, 19, 23);
											d.j3(17);
											s = d.g4(41, 13, 32);
											i[5] = i[n] ^ s;
										}
										d.j3(1);
										e = d.k3(10, 18, 2, 365);
										i[0][0][i[9]] = i[e] & a;
									}
									return i[0][0];
								}
								function j(t) {
									d.a1();
									return ~arguments[0] & a;
								}
								function R(t) {
									var i;
									(i = [arguments])[3] = r(i[0][0]);
									i[3] = s6C8B(i[3]);
									i[3] = b(i[3], p(), G());
									return S(i[3]);
								}
								function A(t) {
									var i = [arguments];
									d.U$(35);
									var n = d.g4(5, 161, 16, 8, 1429);
									return i[0][0] ^ n;
								}
								function Q(t) {
									var i;
									d.a1();
									(i = [arguments])[6] = r(i[0][0]);
									i[6] = s6C8B(i[6]);
									i[6] = b(i[6], k(), x());
									return S(i[6]);
								}
								function F(t) {
									d.b2();
									i = [arguments];
									d.j3(17);
									var i;
									var n = d.g4(24, 19, 7);
									d.j3(3);
									var s = d.k3(5, 13);
									d.U$(37);
									var e = d.g4(2, 10, 5, 3);
									return ((i[0][0] >>> n) | (i[0][0] << (s - e))) & a;
								}
								function q(t) {
									d.a1();
									(i = [arguments])[6] = i[0][0];
									d.j3(38);
									var i;
									var n = d.k3(5, 1, 51, 11);
									d.U$(39);
									var s = d.k3(6, 4, 32, 80);
									i[1] = n - (i[0][0][l] % s);
									if (i[1] < 4) {
										i[6] += d.n1(0)[d.n1(15)](i[1]);
									}
									i[6] = i[6][e](is, d.n1(19))[e](ns, d.v_(9));
									return z5bGA(i[6]);
								}
								function N(t) {
									return ~arguments[0] & a;
								}
								function tt(t) {
									var i;
									(i = [arguments])[4] = i[0][0][l];
									i[9] = z();
									d.b2();
									i[5] = 0;
									for (; i[5] < i[4]; i[5]++) {
										i[2] = i[0][0][i[5]];
										d.U$(17);
										var n = d.k3(19, 17, 4);
										d.j3(39);
										var s = d.k3(43, 4, 9, 117);
										d.j3(41);
										var e = d.g4(11, 13, 10, 365, 2);
										d.U$(42);
										var r = d.k3(15, 10, 18, 27, 34);
										i[2] = i[n] ^ i[s][i[e] % r];
										switch (i[5] % 5) {
											case 0:
												i[2] = w(i[2]);
												break;
											case 1:
												i[2] = A(i[2]);
												break;
											case 2:
												i[2] = U(i[2]);
												break;
											case 3:
												i[2] = Y(i[2]);
												break;
											case 4:
												i[2] = Z(i[2]);
												break;
										}
										if (i[5] % 5 == 0) {
											d.U$(15);
											n = d.g4(10, 1, 20, 36, 8);
											d.U$(43);
											s = d.k3(19, 319, 100, 4);
											i[2] = i[n] ^ s;
										}
										d.j3(3);
										e = d.g4(13, 15);
										i[0][0][i[5]] = i[e] & a;
									}
									return i[0][0];
								}
								function it(t) {
									return st(arguments[0]);
								}
								function H() {
									return d.v_(16);
								}
								function G() {
									return d.v_(4);
								}
								function nt(t) {
									var i = [arguments];
									d.b2();
									return o(i[0][0]);
								}
								function st(t) {
									var i = [arguments];
									return S(M(d.n1(17), r(i[0][0])));
								}
								function et() {
									return d.v_(3);
								}
								function rt(t) {
									var i = [arguments];
									d.b2();
									i[9] = r(i[0][0]);
									i[9] = b(i[9], H(), et());
									i[9] = z5bGA(i[9]);
									return S(i[9]);
								}
								function encrypt(t) {
									// encrypt ut
									var i;
									(i = [arguments])[0][0] = s8ttM(i[0][0]);
									i[7] = S(i[0][0]);
									i[7] = o(i[7]);
									i[7] = $(i[7]);
									i[7] = y(i[7]);
									i[7] = K(i[7]);
									i[7] = lt(i[7]);
									i[7] = Q(i[7]);
									i[7] = J(i[7]);
									i[7] = R(i[7]);
									i[7] = st(i[7]);
									d.b2();
									i[7] = tt(i[7]);
									i[0][0] = r(i[7]);
									return L(i[0][0]);
								}
								this.ut_encrypt = encrypt
								function ct(t) {
									var i;
									(i = [arguments])[9] = r(i[0][0]);
									i[9] = b(i[9], D(), B());
									i[9] = z5bGA(i[9]);
									return S(i[9]);
								}
								function ut() {
									return [54, 84, 80, 77, 100, 82, 105, 68, 80, 113, 80];
								}
								function P(t) {
									d.a1();
									i = [arguments];
									d.U$(47);
									var i;
									var n = d.g4(133, 1737, 579, 20);
									return i[0][0] ^ n;
								}
								function ot(t) {
									d.b2();
									return ~arguments[0] & a;
								}
								function ht(t) {
									return y(arguments[0]);
								}
								function ft(t) {
									var i;
									var n;
									var s;
									(i = [arguments])[9] = i[0][0][l];
									i[5] = z();
									i[7] = 0;
									for (; i[7] < i[9]; i[7]++) {
										i[2] = i[0][0][i[7]];
										if (i[7] % 5 == 0) {
											d.j3(26);
											n = d.k3(1, 11, 11, 2);
											d.j3(9);
											s = d.g4(1, 4);
											i[2] = i[n] ^ s;
										}
										switch (i[7] % 5) {
											case 0:
												i[2] = u(i[2]);
												break;
											case 1:
												i[2] = vt(i[2]);
												break;
											case 2:
												i[2] = V(i[2]);
												break;
											case 3:
												i[2] = F(i[2]);
												break;
											case 4:
												i[2] = I(i[2]);
												break;
										}
										d.U$(3);
										n = d.g4(11, 13);
										d.U$(49);
										s = d.g4(72, 4, 4, 0, 18);
										d.U$(43);
										var e = d.k3(10, 2173, 119, 20);
										d.U$(3);
										var r = d.k3(18, 32);
										i[2] = i[n] ^ i[s][i[e] % r];
										d.j3(17);
										e = d.k3(20, 13, 9);
										i[0][0][i[7]] = i[e] & a;
									}
									d.b2();
									return i[0][0];
								}
								function lt(t) {
									var i;
									(i = [arguments])[9] = i[0][0][l];
									i[1] = C();
									i[5] = 0;
									for (; i[5] < i[9]; i[5]++) {
										i[7] = i[0][0][i[5]];
										d.j3(50);
										var n = d.k3(12, 318, 2, 17, 17);
										d.j3(51);
										var s = d.k3(30, 16, 11, 21, 5);
										d.j3(13);
										var e = d.k3(12, 0, 4, 21);
										d.U$(51);
										var r = d.g4(18, 4, 13, 19, 20);
										i[7] = i[n] ^ i[s][i[e] % r];
										switch (i[5] % 5) {
											case 0:
												i[7] = m(i[7]);
												break;
											case 1:
												i[7] = w(i[7]);
												break;
											case 2:
												i[7] = ot(i[7]);
												break;
											case 3:
												i[7] = j(i[7]);
												break;
											case 4:
												i[7] = ot(i[7]);
												break;
										}
										if (i[5] % 5 == 0) {
											d.U$(28);
											n = d.k3(1, 1, 6);
											d.U$(52);
											s = d.g4(13, 10, 12, 16, 56);
											i[7] = i[n] ^ s;
										}
										d.j3(29);
										e = d.g4(22, 16, 1);
										i[0][0][i[5]] = i[e] & a;
									}
									return i[0][0];
								}
								function S(t) {
									d.a1();
									return arguments[0][d.n1(24)](d.n1(20))[d.n1(5)](function (t) {
										d.b2();
										return t[v](0);
									});
								}
								function vt(t) {
									var i = [arguments];
									d.U$(9);
									var n = d.g4(177, 4);
									return i[0][0] ^ n;
								}
							})())[0],
							N: s[1],
							ut: s[2],
							He: s[3],
							ze: function (t, i) {
								if ($t.clipboard) {
									$t.clipboard.writeText(t).then(function () {
										if (i) {
											i();
										}
									});
								} else {
									var n = Gt.createElement(dt.Ge);
									n[Wt] = t;
									n[Si][ss] = dt.It;
									n[Si][es] = dt.It;
									n[Si][rs] = dt.$e;
									Gt[Dt].appendChild(n);
									n[as]();
									n[cs]();
									try {
										Gt.execCommand(dt.qe);
										if (i) {
											i();
										}
									} catch (t) { }
									Gt[Dt].removeChild(n);
								}
							},
						};
						n[G] = s;
					},
					{},
				],
				7: [
					function (t, i, n) {
						n.i = true;
						n.Ve =
							n.I =
							n.q =
							n.Ke =
							n.Wt =
							n.ft =
							n.H =
							n.ct =
							n.Ye =
							n.P =
							n.At =
							n.oi =
							n.We =
							n.Je =
							n.Qe =
							n.$ =
							undefined;
						n.Xe = e;
						n.oi = Ht[us];
						n.$ = Ht.jQuery;
						n.At = Ht[os];
						var s = (n.ct = Ht[hs]);
						function e(t, i, n) {
							for (var s = i[Tt], e = {}; s-- && (e[i[s]] = n[s] || ""););
							return t
								.split("")
								.map(function (t) {
									return e[t] || t;
								})
								.join("");
						}
						n.H = s[fs];
						n.Wt = function (t) {
							return s.replace(t);
						};
						n.ft = function () {
							// return s[ls]();
						};
						n.Ye = JSON[vs];
						n.P = JSON[ds];
						n.I = q[C1];
						n.q = function (t, i) {
							return t.indexOf(i) > -1;
						};
						n.Ke = function (t, i) {
							return t.charCodeAt(i);
						};
						n.Ve = function (t) {
							return t.split("")[gs]().join("");
						};
						n.We = Ht.bootstrap;
						n.Je = Ht.Swiper;
						n.Qe = Ht.Popper;
					},
					{},
				],
				8: [
					function (t, i, n) {
						var s = t(2);
						var e = t(3);
						var r = t(4);
						var a = t(11);
						var c = t(12);
						var u = t(15);
						var o = t(16);
						var h = t(14);
						var f = t(13);
						var l = t(18);
						t = t(17);
						var v = {
							o: ws,
							u: ys,
						};
						(0, e[G])();
						(0, r[G])();
						(0, a[G])();
						(0, c[G])();
						(0, u[G])();
						(0, o[G])();
						(0, f[G])();
						// (0, h[G])();
						(0, l[G])();
						(0, t[G])();
						// s.k.K(Gt);
						// if (v.o in $t) {
						// 	if (!window.FG) window.FG = f[G]
						// 	$t[ws].register(v.u);
						// }
					},
					{
						11: 11,
						12: 12,
						13: 13,
						14: 14,
						15: 15,
						16: 16,
						17: 17,
						18: 18,
						2: 2,
						3: 3,
						4: 4,
					},
				],
				9: [
					function (t, i, n) {
						n.i = true;
						n.Ze = undefined;
						var s = t(2);
						var e = t(7);
						var u = {
							o: Ls,
							u: Cs,
							_: bs,
							l: T1,
							v: zs,
							p: Bs,
							m: Ds,
							vt: xs,
							dt: ps,
							bt: Ms,
							kt: ks,
							yt: ms,
							gt: js,
							wt: As,
							St: r,
							Et: qs,
							Ct: Ns,
							xt: Wt,
							Tt: Hs,
							Dt: Gs,
							Mt: Ps,
							It: Ss,
							ci: _s,
							ui: Ts,
							_i: Us,
							fi: Is,
							li: Vs,
							vi: Ys,
							di: Ks,
							bi: Os,
							pi: Zs,
							mi: Xs,
							ki: Js,
							yi: Fs,
							gi: te,
							wi: ie,
							Si: ne,
							Ei: se,
							Ci: ee,
							xi: re,
						};
						var a = {
							ts: [u.o, u.o],
							es: [u.u, u.u],
							ss: [u._, ""],
						};
						n.Ze = s.k.B({
							G: function (t) {
								this.ns = t;
								this.tt = t.find(u.l);
								this.rs = t.find(u.v);
								this.hs = t.find(u.p);
								this.os = t.find(u.m).not(u.vt);
								this.cs = t.find(u.dt);
								this.us = t.find(u.bt);
								this._s = this.tt[0];
								this.ns.on(u.kt, this.fs.bind(this));
								this.tt.keyup(this.ls.bind(this));
								this.tt.keydown(this.vs.bind(this));
								this.tt.focus(this.ds.bind(this));
								this.rs.click(this.ds.bind(this));
								this.os.click(this.bs.bind(this));
								this.cs.click(this.ps.bind(this));
								this.us.click(this.ks.bind(this));
								this.hs.slideDown(u.yt);
							},
							ys: function (t, i) {
								t = t || "";
								i = i || "";
								var n;
								var s = this._s[Wt].slice(0, this._s[c]);
								var e = this._s[Wt].slice(this._s[ae]);
								var r = this._s[Wt].slice(this._s[c], this._s[ae]);
								if (r[Tt]) {
									if (r.slice(0, t[Tt]) === t && r.slice(r[Tt] - i[Tt]) === i) {
										r =
											t === a.ss[0]
												? r.replace(new RegExp(ue.concat(a.ss[0]), u.gt), u.wt)
												: r.slice(t[Tt], r[Tt] - i[Tt]);
										this._s[Wt] = `${s}${r}${e}`;
										this._s[c] = s[Tt];
										this._s[ae] = this._s[c] + r[Tt];
									} else {
										if (t === a.ss[0]) {
											if (s[Tt] && s[s[Tt] - 1] !== u.St) {
												s += u.St;
											}
											if (e[0] !== u.St) {
												e = u.St + e;
											}
											r = r.replace(oe, u.St + a.ss[0]);
										}
										this._s[Wt] = `${s}${t}${r}${i}${e}`;
										this._s[c] = s[Tt] + t[Tt] + r[Tt];
										if (r[Tt]) {
											this._s[c] = s[Tt];
											this._s[ae] = this._s[c] + t[Tt] + r[Tt] + i[Tt];
										}
									}
								} else {
									n = s.lastIndexOf(t);
									if (
										e.slice(0, i[Tt]) === i &&
										(s.slice(s[Tt] - t[Tt]) === t || (t !== a.ss[0] && n > -1))
									) {
										s = s.slice(0, n) + s.slice(n + t[Tt]);
										e = e.slice(i[Tt]);
										this._s[Wt] = `${s}${e}`;
										this._s[c] = this._s[ae] = s[Tt];
									} else {
										if (t === a.ss[0]) {
											this.gs();
											s = this._s[Wt].slice(0, this._s[c]);
											e = this._s[Wt].slice(this._s[ae]);
											r = this._s[Wt].slice(this._s[c], this._s[ae]);
										}
										this._s[Wt] = `${s}${t}${r}${i}${e}`;
										this._s[c] = this._s[ae] = s[Tt] + t[Tt];
									}
								}
								this._s[as]();
								this.ws();
							},
							Ss: function () {
								var t = this._s[Wt].slice(0, this._s[c]);
								var i = this._s[Wt].slice(this._s[ae]);
								var n = this._s[Wt].slice(this._s[c], this._s[ae]);
								if (!n[Tt]) {
									n = u.Et;
								}
								n = he.concat(n, fe);
								var s = le;
								var e = u.Ct;
								this._s[Wt] = `${t}${n}${e}${s}${i}`;
								this._s[c] = t[Tt] + n[Tt];
								this._s[ae] = this._s[c] + e[Tt];
								this._s[as]();
								this.ws();
							},
							gs: function () {
								if (
									this._s[Wt][Tt] &&
									this._s[Wt][this._s[Wt][Tt] - 1] !== u.St
								) {
									this._s[Wt] = this._s[Wt] + u.St;
									this._s[ae] = this._s[c] = this._s[Wt][Tt];
									this._s[as]();
								}
							},
							bs: function (t) {
								switch ((0, e.$)(t[_]).data(u.xt)) {
									case u.Tt:
										this.ys.apply(this, a.ts);
										break;
									case u.Dt:
										this.ys.apply(this, a.es);
										break;
									case u.Mt:
										this.ys.apply(this, a.ss);
										break;
									case u.It:
										this.Ss();
										break;
								}
								if (this.cs.filter(u.ci).data(u.xt) === u.ui) {
									this.Es();
								}
							},
							ps: function (t) {
								(t = (0, e.$)(t[_]))[I]();
								this.cs.not(t)[V]();
								if (t.data(u.xt) === u._i) {
									this.rs[I]();
									this.tt[V]()[as]();
								} else {
									this.Es();
									this.tt[I]();
									this.rs[V]();
									e.We.Tooltip.getOrCreateInstance(this.tt[0])[I]();
								}
							},
							Es: function () {
								var t;
								var i;
								var n;
								var s = parseInt(this.tt.css(u.fi), 10);
								for (
									var e = (this.rs.css(u.fi, s), this._s[Wt].split(u.St)),
									r = false,
									a = "",
									c = 0;
									c < e[Tt];
									c++
								) {
									t = e[c][ot]();
									if ((i = !!(n = ve.exec(t)))) {
										t = n[1];
									}
									if (!r && i) {
										a += u.li;
									} else if (r && !i) {
										a += u.vi;
									} else if (c > 0) {
										a += u.di;
									}
									r = i;
									a += t = (t = (t = t.replace(de, u.bi)).replace(
										ge,
										u.pi
									)).replace(we, u.mi);
								}
								if (r && !i) {
									a += u.ki;
								}
								this.rs.html(a);
							},
							vs: function (t) {
								if (t[Rt] === 69 && (t[ki] || t[mi])) {
									this.ys.apply(this, a.es);
								}
								if (t[Rt] === 66 && (t[ki] || t[mi])) {
									this.ys.apply(this, a.ts);
								}
							},
							ls: function (t) {
								this.ws();
							},
							fs: function (t) {
								this.Cs();
							},
							ks: function (t) {
								t[Kt]();
								this.Cs();
								this.hs.slideUp(u.yt);
								this.tt[ye]();
							},
							Cs: function () {
								this.rs[Le]()[I]();
								this.tt.val("")[V]();
								this.ws();
								this.cs[I]().filter(u.yi)[V]();
							},
							ds: function () {
								this.hs.slideDown(u.yt);
							},
							ws: function () {
								var t = this.tt;
								var i = t.val().split(u.St)[Tt];
								var n = parseFloat(t.css(u.gi), 10);
								var s = parseFloat(t.css(u.wi), 10);
								var e =
									parseFloat(t.css(u.Si), 10) +
									parseFloat(t.css(u.Ei), 10) +
									parseFloat(t.css(u.Ci), 10) +
									parseFloat(t.css(u.xi), 10);
								t.css(u.fi, `${Math.max(s, (i + 1) * n) + e}${Ce}`);
							},
						});
					},
					{
						2: 2,
						7: 7,
					},
				],
				10: [
					function (t, i, n) {
						n.i = true;
						n.xs = undefined;
						var s = t(2);
						var u = t(7);
						var c = t(13);
						var o = t(15);
						var e = t(18);
						var r = t(9);
						t = t(4);
						var h = {
							o: be,
							u: ze,
							_: Be,
							l: De,
							v: xe,
							p: pe,
							m: Me,
							vt: ke,
							dt: me,
							bt: je,
							kt: Ae,
							yt: qe,
							gt: Ne,
							wt: Li,
							St: He,
							Et: Qt,
							Ct: Ge,
							xt: Pe,
							Tt: Se,
							Dt: si,
							Mt: _e,
							It: Bt,
							ci: Te,
							ui: Ue,
							_i: Ie,
							fi: Ve,
							li: Ye,
							vi: Ke,
							di: We,
							bi: Ee,
							pi: $e,
							mi: Oe,
							ki: Ze,
							yi: Xe,
							gi: Bs,
							wi: ui,
							Si: Je,
							Ei: Re,
							Ci: h1,
							xi: Qe,
							Ti: Fe,
							Di: Wt,
							Mi: tr,
							Ii: ir,
							Ai: nr,
							Li: S,
							Ri: sr,
							ji: er,
							Ui: rr,
							Oi: ar,
							Pi: cr,
							Ni: ur,
							Fi: or,
							Bi: hr,
							Gi: fr,
							$i: lr,
							qi: vr,
							Hi: dr,
							zi: Gs,
							Vi: gr,
							Ki: wr,
							Yi: yr,
							Wi: Lr,
							Ji: br,
							Qi: zr,
							Xi: Br,
							Zi: Mr,
							te: Hr,
							ee: Gr,
							se: Pr,
							ne: Sr,
							ae: _r,
							re: ks,
							he: Tr,
							oe: Ur,
							ce: Ir,
							ue: Vr,
							_e: T1,
							fe: Yr,
							le: Kr,
							ve: Wr,
							de: ms,
							be: Er,
							pe: $r,
							me: Or,
							ke: Zr,
							ye: Xr,
							ge: Jr,
							we: Rr,
						};
						var a = {
							Ts: h.o,
							Ds: h.u,
							Ms: h._,
						};
						var f = a.Ts;
						var l = {
							Is: h.l,
							As: h.v,
						};
						var v = h.p;
						var d = h.m;
						var g = u.ct[Qr];
						// (0, u.$)(Gt).on(t.Z.Lt, function () {
						// 	g = u.ct[Qr];
						// });
						var w = s.k.B({
							G: function (t) {
								var i = this;
								this.Ls = t;
								this.Rs = t[gr]().data(h.vt);
								this.js = this.Ls.data(h.dt);
								this.Us = 0;
								this.Os = 0;
								this.Ps = "";
								this.Ns = this.Ls.find(h.bt);
								this.Fs = this.Ls.find(h.kt);
								this.Bs = this.Ls.find(h.yt);
								this.Gs = this.Ls.find(h.gt);
								this.$s = this.Gs.prop(h.wt);
								this.qs = (0, u.$)(h.St).prop(h.Et);
								this.Hs = this.Ls.find(h.Ct);
								this.zs = this.Ls.find(h.xt);
								this.Vs = this.Ls.find(h.Tt);
								this.Ls.on(h.Dt, h.Mt, this.Ks.bind(this))
									.on(h.It, h.ci, this.Ys.bind(this))
									.on(h.It, h.ui, this.Ws.bind(this))
									.on(h.It, h._i, this.Js.bind(this))
									.on(h.It, h.fi, this.Qs.bind(this))
									.on(h.It, h.li, this.Xs.bind(this))
									.on(h.It, h.vi, this.Zs.bind(this))
									.on(h.It, h.di, this.tn.bind(this))
									.on(h.It, h.bi, this.en.bind(this))
									.on(h.It, h.pi, this.sn.bind(this))
									.on(h.It, h.mi, this.nn.bind(this))
									.on(h.It, h.ki, this.an.bind(this))
									.on(h.It, h.yi, this.rn.bind(this));
								this.Vs.click(this.hn.bind(this));
								this.Fs.click(this.on.bind(this));
								this.Bs.click(this.cn.bind(this));
								this.un(this._n());
								this.fn(null, function () {
									i.ln();
								});
								this.Gs.find(h.gi)[I]();
							},
							hn: function (t) {
								var i;
								var n;
								var s = this;
								t[Kt]();
								if (!o.dn.vn()) {
									t = (0, u.$)(t[_]).data(h.wi);
									i = new Date()[ti]();
									n = `${this.js}${Fr}${t}${Fr}${i}`;
									u.$.ajax(ta.concat(n), {
										type: h.Si,
										data: {
											thread_id: this.js,
											action: t,
											time: i,
										},
									}).done(function (t) {
										c.pn.bn(t);
										if (t[Y] === 200) {
											y.mn(s.Rs, s.Rs[U]);
										}
									});
								}
							},
							fn: function (t, i) {
								var n = this;
								this.Bs[I]();
								if (!(this.Ps = t)) {
									this.Os = 0;
									this.Hs[Le]();
								}
								this.zs.loading();
								var s = {
									thread_id: this.js,
									sort: this._n(),
									cursor: t,
								};
								if (g) {
									new URLSearchParams(g).forEach(function (t, i) {
										s[i] = t;
									});
									g = null;
								}
								u.$.ajax(h.Ei, {
									data: s,
								})
									.done(function (t) {
										if (t[Y] !== 200) {
											c.pn.bn(t);
										} else {
											n.Ps = t[K][ia];
											n.Us = t[K].main_count;
											n.Os += t[K][na];
											n.Ns.text(`${t[K][sa]}${ea}${t[K][sa] > 1 ? h.Ci : ""}`);
											n.Hs.append(t[K].html);
											if (n.Os >= n.Us) {
												n.Bs[I]();
											} else {
												n.Bs[V]();
											}
											if (i) {
												i();
											}
										}
									})
									.always(function () {
										n.zs[Le]();
									});
							},
							kn: function (t, i, n, s, e) {
								u.$.ajax(h.xi, {
									data: {
										type: t,
										thread_id: i,
										comment_id: n,
										sort: this._n(),
										cursor: s,
									},
								}).done(function (t) {
									if (t[Y] !== 200) {
										c.pn.bn(t);
									} else {
										e(t[K]);
									}
								});
							},
							ln: function () {
								if (this.Ls.find(h.Ti)[Tt]) {
									this.Ls.scrollFocus();
								}
							},
							cn: function (t) {
								t[Kt]();
								this.fn(this.Ps);
							},
							on: function (t) {
								t[Kt]();
								t = (0, u.$)(t[U]);
								this.un(t.data(h.Di));
								this.yn(t.data(h.Di));
								this.fn();
							},
							_n: function () {
								return s.D.get(v, f);
							},
							yn: function (t) {
								if (Pt.values(a).indexOf(t) === -1) {
									t = f;
								}
								s.D.set(v, t);
							},
							un: function (t) {
								this.Fs.removeClass(h.Mi);
								this.Fs.filter(ra.concat(t, W)).addClass(h.Mi);
							},
							nn: function (t) {
								t[Kt]();
								var i = (t = (0, u.$)(t[_])).closest(h.Ii);
								t.toggleClass(h.Mi);
								i.toggleClass(h.Ai);
							},
							Ws: function (t) {
								t[Kt]();
								var i = (t = (0, u.$)(t[_])).closest(h.Ii);
								this.gn(i, !t.hasClass(h.Mi));
							},
							sn: function (t) {
								t[Kt]();
								var n = (0, u.$)(t[_]);
								t = n.closest(h.Ii).data(h.Li);
								var i = n.attr(h.Ri);
								this.kn(l.As, this.js, t, i, function (t) {
									n.before(t.html);
									var i = parseInt(n.attr(h.ji)) + t[na];
									n.attr(h.ji, i);
									n.attr(h.Ri, t[ia]);
									if (i >= n.data(h.Ui)) {
										n[P]();
									}
								});
							},
							Js: function (t) {
								var i;
								var s;
								var n;
								var e;
								t[Kt]();
								if (!o.dn.vn()) {
									i = (t = (0, u.$)(t[_])).closest(h.Ii);
									s = t[gr]().children(h.Oi);
									n = i.data(h.Li);
									e = null;
									if (!t.hasClass(h.Mi)) {
										e = t.data(h.Di);
									}
									t = new Date()[ti]();
									n = `${n}${Fr}${t}`;
									u.$.ajax(aa.concat(n), {
										type: h.Si,
										data: {
											comment_id: i.data(h.Li),
											value: e,
											time: t,
										},
									}).done(function (n) {
										if (n[Y] !== 200) {
											c.pn.bn(n);
										} else {
											s.removeClass(h.Mi);
											s.each(function (t, i) {
												if ((i = (0, u.$)(i)).data(h.Di) === n[K][Wt]) {
													i.addClass(h.Mi);
												}
												i.find(h.Pi).text(n[K][i.data(h.Di)]);
											});
										}
									});
								}
							},
							tn: function (t) {
								t[Kt]();
								var i;
								var n;
								var s;
								var e = (0, u.$)(t[_]);
								var r = (t = e.closest(h.Ni)).find(h.Fi);
								var a = t.find(h.Bi);
								a.one(h.Gi, function () {
									r.html(r.data(h.$i));
									if (e.hasClass(h.qi)) {
										u.We.Dropdown.getOrCreateInstance(a[0])[V]();
									}
								});
								if (!e.hasClass(h.qi)) {
									t = e.closest(h.Ii).data(h.Li);
									i = e.data(h.Di);
									n = new Date()[ti]();
									s = `${t}${Fr}${i}${Fr}${n}`;
									u.$.ajax(ca.concat(s), {
										type: h.Si,
										data: {
											comment_id: t,
											value: i,
											time: n,
										},
									}).done(c.pn.bn);
								}
							},
							Zs: function (t) {
								var i;
								var n;
								var s = this;
								t[Kt]();
								if (!o.dn.vn()) {
									i = (t = (0, u.$)(t[_]).closest(h.Ni)).find(h.Fi);
									n = t.find(h.Bi);
									if (!i.data(h.$i)) {
										i.data(h.$i, i.html());
									}
									n.one(h.Gi, function () {
										i.html(s.qs);
										u.We.Dropdown.getOrCreateInstance(n[0])[V]();
									});
								}
							},
							Qs: function (t) {
								var i = this;
								t[Kt]();
								var n = (0, u.$)(t[_]).closest(h.Ii);
								t = n.data(h.Li);
								var s = new Date()[ti]();
								var e = `${t}${Fr}${s}`;
								u.$.ajax(ua.concat(e), {
									data: {
										comment_id: t,
										time: s,
									},
								}).done(function (t) {
									c.pn.bn(t);
									if (t[Y] === 200) {
										i.wn(n, t[K]);
									}
								});
							},
							Xs: function (t) {
								var i = this;
								t[Kt]();
								var n = (t = (0, u.$)(t[_])).closest(h.Ii);
								var s = n.data(h.Li);
								t = t.data(h.wi);
								var e = new Date()[ti]();
								var r = `${s}${Fr}${t}${Fr}${e}`;
								u.$.ajax(oa.concat(r), {
									type: h.Si,
									data: {
										comment_id: s,
										action: t,
										time: e,
									},
								}).done(function (t) {
									c.pn.bn(t);
									if (t[Y] === 200) {
										i.kn(l.Is, i.js, s, "", function (t) {
											n.replaceWith(t.html);
										});
									}
								});
							},
							en: function (t) {
								t[Kt]();
								t = (0, u.$)(t[_]).closest(h.Ii).data(h.Li);
								var i = new URL(this.Rs[It]);
								i[ft].set(d, t);
								s.M.ze(i[Vt](), function () {
									(0, c.pn)(h.Hi);
								});
							},
							an: function (t) {
								t[Kt]();
								(0, u.$)(t[_]).removeClass(h.zi);
							},
							rn: function (t) {
								t = (0, u.$)(t[_]).data(h.Di);
								s.S.J(o.En.Sn, e.xn.Cn, t);
							},
							Ys: function (t) {
								t[Kt]();
								var i = (t = (0, u.$)(t[_]).closest(h.Ii)).data(h.Vi);
								if (t.data(h.Li)) {
									t.trigger(h.Ki);
								} else if (i) {
									t = this.Ls.find(ha.concat(i, W));
									this.gn(t, false);
								}
							},
							Ks: function (t) {
								var n;
								var s;
								var e;
								var r;
								var i;
								var a;
								var c = this;
								t[Kt]();
								if (!o.dn.vn()) {
									n = (0, u.$)(t[_]);
									s = n.closest(h.Ii);
									e = s.data(h.Li);
									r = s.data(h.Vi);
									s.find(h.Yi)[P]();
									if (n[0][fa]()) {
										if (!n.data(h.Wi)) {
											i = function (t) {
												var i = (0, u.$)(h.Ji);
												t = (0, u.$)(h.Qi).text(t);
												i.addClass(h.Xi).append(h.Zi);
												i.append(t);
												i.append(h.te);
												i[I]();
												i.insertAfter(n).fadeIn();
											};
											t = new Date()[ti]();
											a = {};
											n.serializeArray().map(function (t) {
												return (a[t[Et]] = t[Wt]);
											});
											a[h.ee] = e;
											a[h.se] = this.js;
											a[h.ne] = r;
											a[h.ae] = t;
											t = (e ? `${e}${Fr}` : "")
												.concat(this.js, Fr)
												.concat(r, Fr)
												.concat(t);
											n.data(h.Wi, true);
											u.$.ajax(la.concat(t), {
												type: h.Si,
												data: a,
											})
												.done(function (t) {
													if (t[Y] !== 200) {
														i(t[va]);
													} else {
														n.trigger(h.re);
														t = t[K];
														c.kn(l.Is, c.js, t, null, function (t) {
															var i;
															if (e) {
																s.replaceWith(t.html);
															} else if (r > 0) {
																(i = s.closest(ha.concat(r, W)))
																	.children(h.he)
																	.prepend(t.html);
																c.gn(i, false);
															} else {
																c.Hs.prepend(t.html);
															}
														});
													}
												})
												.always(function () {
													n.data(h.Wi, false);
												});
										}
									} else {
										n[0][da]();
									}
								}
							},
							wn: function (t, i) {
								var n = t.find(h.oe);
								var s = (0, u.$)(this.$s).find(h.Mt);
								var e = n.prop(h.wt);
								n.replaceWith(s);
								t.activate();
								s.find(h.ce).text(h.ue);
								s.find(h._e).val(i[ga])[as]().trigger(h.fe);
								t.off(h.Ki).one(h.Ki, function () {
									s.replaceWith(e);
								});
							},
							gn: function (t, i) {
								var n = t.data(h.Li);
								var s = t.find(h.le);
								if (!i) {
									return t.find(h.ve).slideUp(h.de, function () {
										s.removeClass(h.Mi);
										(0, u.$)(this)[P]();
									});
								}
								s.addClass(h.Mi);
								i = t.children(h.he);
								(t = (0, u.$)(this.$s))
									.addClass(h.be)
									.attr(h.pe, n)
								[I]()
									.prependTo(i)
									.slideDown(h.de)
									.activate();
								t.find(h._e)[as]();
								t.find(h.Mt).find(h.ce).text(h.me);
							},
						});
						var y = (n.xs = {
							Tn: false,
							Dn: function () {
								if (!this.Tn) {
									this.Tn = true;
									r.Ze.V(h.ke);
									w.V(h.ye);
								}
							},
							mn: function (i, t) {
								this.Dn();
								t = t || h.ge;
								var n = (0, u.$)(t);
								t = {
									page_identifier: i[wa],
									page_url: i[It],
									page_title: i[yi] || Gt[yi],
									target: t,
								};
								n.loading();
								u.$.ajax(h.we, {
									data: t,
								}).done(function (t) {
									if (t[Y] !== 200) {
										n.html(ya.concat(t[va], La));
									} else {
										n.data(h.vt, i).html(t[K]).activate();
									}
								});
							},
						});
					},
					{
						13: 13,
						15: 15,
						18: 18,
						2: 2,
						4: 4,
						7: 7,
						9: 9,
					},
				],
				11: [
					function (t, i, n) {
						n.i = true;
						n[G] = n.Mn = undefined;
						var a = t(7);
						var s = t(2);
						var c = t(4);
						var e = t(15);
						var r = t(13);
						var u = {
							o: Ca,
							u: ba,
							_: za,
							l: Ba,
							v: Da,
							p: S,
							m: xa,
							vt: pa,
							dt: Ma,
							bt: Si,
							kt: ka,
							yt: tr,
							gt: ma,
							wt: ja,
							St: Aa,
							Et: qa,
							Ct: Na,
							xt: Ui,
							Tt: Ha,
							Dt: Yt,
							Mt: Ga,
							It: Pa,
							ci: Sa,
							ui: _a,
							_i: Ta,
							fi: Ua,
							li: Ia,
							vi: Va,
							di: Ya,
							bi: Ka,
							pi: Wa,
							mi: Ea,
							ki: h1,
							yi: _r,
							gi: $a,
							wi: m,
							Si: yi,
							Ei: ms,
							Ci: Xa,
							xi: Ja,
							Ti: Ra,
							Di: Qa,
							Mi: Fa,
							Ii: t0,
							Ai: i0,
							Li: U,
							Ri: n0,
							ji: Wt,
							Ui: s0,
							Oi: e0,
							Pi: r0,
							Ni: a0,
							Fi: c0,
							Bi: dt,
							Gi: u0,
							$i: o0,
							qi: es,
							Hi: h0,
							zi: f0,
							Vi: l0,
							Ki: v0,
							Yi: d0,
							Wi: g0,
							Ji: w0,
							Qi: y0,
							Xi: L0,
							Zi: C0,
							te: b0,
							ee: z0,
							se: B0,
							ne: D0,
							ae: x0,
							re: p0,
							he: ia,
							oe: M0,
							ce: k0,
							ue: m0,
							_e: j0,
							fe: A0,
							le: q0,
							ve: N0,
							de: H0,
							be: G0,
							pe: ni,
							me: P0,
							ke: Bt,
							ye: S0,
							ge: _0,
							we: ei,
							Se: T0,
							Ee: U0,
							Ce: I0,
							xe: cr,
							Te: hr,
							De: or,
							Me: V0,
							Ie: Y0,
							Ae: K0,
							Le: W0,
							Re: E0,
							je: $0,
							Ue: O0,
							Oe: Z0,
							Pe: X0,
							Ne: J0,
							Fe: R0,
							Be: Q0,
							Ge: F0,
							$e: tc,
							qe: ic,
							In: nc,
							An: sc,
						};
						// a.$.fn.loading = function () {
						// 	return this.html(u.o);
						// };
						// a.$.fn.scrollFocus = function () {
						// 	Ht.scrollTo({
						// 		top: Gt[Dt][ec] + this[Ra]()[ss],
						// 		behavior: u.u,
						// 	});
						// 	return this;
						// };
						var o = s.k.B({
							G: function (t) {
								a.We.Tooltip.getOrCreateInstance(t[0]);
							},
						});
						var h = (n.Mn = s.k.B({
							G: function (t) {
								var i = t.data(u._);
								var n = t.data(u.l);
								this.Ln = t;
								this.Rn = t.data(u.v);
								this.jn = rc.concat(t.data(u.p));
								this.Un = n ? (0, a.$)(n) : null;
								this.On = i ? (0, a.$)(i) : t.closest(u.m).find(u.vt);
								this.Pn = t.find(u.dt);
								this.Nn = t.data(u.bt);
								this.Pn.click(this.Fn.bind(this));
								this.Bn();
							},
							Fn: function (t) {
								t[Kt]();
								t = (0, a.$)(t[_]);
								if (this.Rn) {
									s.D.set(this.jn, t.data(u.p));
								}
								this.Gn(t);
							},
							$n: function () {
								return this.Pn.filter(u.kt);
							},
							Bn: function () {
								var t;
								var i = this.$n();
								if (this.Rn) {
									t = s.D.get(this.jn) || i.data(u.p);
									i = this.Pn.filter(ac.concat(t, W));
								}
								this.Gn(i);
							},
							Gn: function (t) {
								var i;
								var n;
								var s;
								var e;
								var r = this;
								if (this.Un) {
									this.Un.html(t.html());
								}
								if (!t.hasClass(u.yt)) {
									this.Pn.removeClass(u.yt);
									t.addClass(u.yt);
									i = this.On.filter(ac.concat(t.data(u.p), W));
									n = this.Ln.data(u.gt);
									s = function () {
										t.trigger(u.yt);
										i.trigger(u.wt);
									};
									e = function () {
										switch (r.Nn) {
											case u.St:
												r.On[I]();
												i.fadeIn(s);
												break;
											case u.Et:
												r.On.slideUp();
												i.slideDown(s);
												break;
											default:
												r.On[I]();
												i.css(u.Ct, "");
												s();
										}
									};
									if (n) {
										i = this.On.first();
										this.On.css(u.xt, 0.8);
										a.$.ajax(n + (t.data(u.Tt) || cc.concat(t.data(u.p))))
											.done(function (t) {
												i.html(t[K]).activate();
												e();
											})
											.always(function () {
												r.On.css(u.xt, 1);
											});
									} else {
										e();
									}
									if (i[Tt] && !uc.test(t.attr(u.Dt))) {
										c.lt.ii(t.attr(u.Dt));
									}
								}
							},
						}));
						var f = s.k.B({
							G: function (t) {
								var i = this;
								this.qn = t;
								this.Hn = Math.max(
									0,
									t.data(u.Mt) - Math.floor(new Date()[ti]() / 1000)
								);
								this.zn = t.data(u.It) || 1;
								this.Vn = t.data(u.ci) || u.ui;
								this.Kn = t.data(u._i) || (this.Vn === u.ui ? u.fi : u.li);
								this.Yn = t.data(u.vi);
								this.Wn();
								this.it = p(function () {
									return i.Wn();
								}, this.zn * 1000);
							},
							Wn: function () {
								this.Hn = Math.max(0, this.Hn - this.zn);
								this.qn.text(this.Jn());
								if (this.Hn <= 0) {
									if (this.Yn) {
										this.qn.text(this.Yn);
									}
									M(this.it);
								}
							},
							Jn: function () {
								var i = this;
								var n = {
									day: Math.floor(this.Hn / 86400),
									hour: Math.floor((this.Hn % 86400) / 3600),
									minute: Math.floor((this.Hn % 3600) / 60),
									second: this.Hn % 60,
								};
								var t = [u.di, u.bi];
								if (n.day || n.hour) {
									t.push(u.pi);
								}
								if (n.day) {
									t.push(u.mi);
								}
								return t[gs]()
									.map(function (t) {
										if (i.Vn === u.ui) {
											return `${n[t]}${x}${t}${n[t] > 1 ? u.ki : ""}`;
										} else {
											return oc.concat(n[t]).slice(-2);
										}
									})
									.join(this.Kn);
							},
						});
						var l = s.k.B({
							G: function (t) {
								var i = (n = new Date(t.data(u.yi) * 1000))
									.toLocaleDateString(u.gi)
									.replace(hc, u.wi);
								var n = n[fc]();
								t.attr(u.Si, t[Ei]());
								t.text(`${i}${x}${n}`);
								a.We.Tooltip.getOrCreateInstance(t[0]);
							},
						});
						var v = s.k.B({
							G: function (t) {
								var i = this;
								if (!(Ht[lc] < 1024)) {
									this.Qn = t;
									this.Xn = null;
									this.Zn = 250;
									this.ta = 200;
									this.Qn.mouseenter(function () {
										i.ia();
										i.ea ||= _t(i.sa.bind(i), i.Zn);
									}).mouseleave(function () {
										if (i.ea) {
											E(i.ea);
											i.ea = null;
										}
										i.na();
									});
								}
							},
							aa: function (t) {
								var i = this;
								this.ia();
								if (this.ra) {
									this.ra.fadeOut(t ? 0 : u.Ei, function () {
										i.ha.destroy();
										i.ha = null;
										i.ra[P]();
										i.ra = null;
										i.oa = false;
									});
								}
							},
							ia: function () {
								if (this.Xn) {
									E(this.Xn);
								}
								this.Xn = null;
							},
							na: function () {
								this.ia();
								this.Xn = _t(this.aa.bind(this), this.ta);
							},
							sa: function () {
								var i;
								var t;
								var n = this;
								this.ia();
								if (v.ca && v.ca !== this) {
									v.ca.aa(true);
								}
								if (!this.oa) {
									this.oa = true;
									(v.ca = this).ra = (0, a.$)(u.Ci)
										.appendTo(Gt[Dt])
										.mouseenter(this.ia.bind(this))
										.mouseleave(this.na.bind(this));
									this.ha = a.Qe.createPopper(this.Qn[0], this.ra[0], {
										placement: u.xi,
										modifiers: [
											{
												name: u.Ti,
												options: {
													offset: [0, 10],
												},
											},
										],
									});
									i = function () {
										if (n.oa) {
											n.ra.find(u.Di).html(n.ua).activate();
											n.ha[vc]();
										}
									};
									if (this.ua) {
										i();
									} else {
										t = this.Qn.data(u.Mi);
										a.$.get(dc.concat(t)).done(function (t) {
											n.ua = t[K];
											i();
										});
									}
								}
							},
						});
						var d = s.k.B({
							G: function (t) {
								this._a = t.find(u.Ii);
								this.On = t.find(u.Ai);
								this._a.click(this.fa.bind(this));
							},
							fa: function (t) {
								t[Kt]();
								t = (0, a.$)(t[_]).data(u.Li);
								this.On[I]().filter(gc.concat(t, wc)).fadeIn(u.Ei);
							},
						});
						var g = s.k.B({
							G: function (t) {
								this.la = t;
								this.va = t.data(u.Ri) || u.ji;
								this.la.attr(u.Ui, u.Oi);
								this.da = a.We.Tooltip.getOrCreateInstance(this.la[0]);
								this.la.click(this.ba.bind(this));
							},
							pa: function () {
								switch (this.la.data(u.Li)) {
									case undefined:
										return this.la;
									case u.Pi:
										return this.la[gr]().find(u.Ni);
									default:
										return (0, a.$)(this.la.data(u.Li));
								}
							},
							ma: function () {
								var t = this;
								this.la.attr(u.Ui, u.Fi);
								this.da[V]();
								_t(function () {
									t.la.attr(u.Ui, u.Oi);
								}, 1000);
							},
							ba: function (t) {
								var i = this;
								t[Kt]();
								t = this.pa().attr(this.va);
								s.M.ze(t, function () {
									i.ma();
								});
							},
						});
						var w = s.k.B({
							G: function () {
								var t;
								var i = this;
								if (!Ht.__sharethis__) {
									(t = Gt.createElement(u.Bi))[zt] = u.Gi;
									Gt[Oi].appendChild(t);
									t[$i] = function () {
										return i.ka();
									};
								}
								this.ka();
							},
							ka: function () {
								var t = Ht.__sharethis__;
								try {
									t[Yt] = a.ct[Yt];
									t.init({
										"inline-share-buttons": {
											alignment: u.qi,
											color: u.Hi,
											enabled: true,
											font_size: 12,
											has_spacing: true,
											is_ssb: false,
											labels: u.zi,
											language: u.Vi,
											min_count: 10,
											networks: [u.Ki, u.Yi, u.Wi, u.Ji, u.Qi, u.Xi],
											num_networks: 6,
											num_ssb_networks: 6,
											padding: 20,
											radius: 10,
											show_total: true,
											size: 32,
											size_label: u.Zi,
											spacing: 8,
											text_color: u.te,
											use_native_counts: true,
										},
									});
									t.loader[u.$i](t.config[u.$i]);
								} catch (t) { }
							},
						});
						var y = s.k.B({
							G: function (i) {
								i.attr(u.ee, u.se);
								i.attr(u.ne, u.ae);
								i.attr(u.Si, u.re);
								i.css(u.he, u.oe);
								var n = a.We.Tooltip.getOrCreateInstance(i[0]);
								i.click(function (t) {
									n[I]();
									n[yc]();
									if (Gt[Lc]()[Vt]() === "") {
										i.toggleClass(u.ce);
										if (i.hasClass(u.ce)) {
											i.css(u.ue, u._e).css(u.fe, u._e);
										} else {
											i.css(u.ue, "").css(u.le, "").css(u.fe, "").scrollTop(0);
										}
									}
								});
							},
						});
						var L = s.k.B({
							G: function (t) {
								this.ya = (0, a.$)(u.ve);
								this.Ln = t.children(u.de);
								this.ga = this.wa.bind(this);
								this.Sa = this.Ln.find(u.be);
								this.Ea();
							},
							Ea: function () {
								var s = this;
								this.ya.click(this.Ca.bind(this));
								this.Sa.each(function (t, i) {
									var n = (0, a.$)(i);
									n.siblings(u.pe).click(function (t) {
										t[Kt]();
										if (n.is(u.me)) {
											n.slideUp(u.Ei);
										} else {
											s.Sa.not(n).each(function (t, i) {
												(0, a.$)(i).slideUp(u.Ei);
											});
											n.slideDown(u.Ei);
										}
									});
								});
							},
							Ca: function (t) {
								t[Kt]();
								if (this.Ln.is(u.me)) {
									this.aa();
								} else {
									this.sa();
								}
							},
							sa: function () {
								this.Ln.slideDown(u.Ei);
								Gt.addEventListener(u.ke, this.ga, true);
							},
							aa: function () {
								this.Sa.slideUp(u.Ei);
								this.Ln.slideUp(u.Ei);
								Gt.removeEventListener(u.ke, this.ga, true);
							},
							wa: function (t) {
								if (
									!this.Ln[0].contains(t[U]) &&
									!this.ya[0].contains(t[U]) &&
									!!this.Ln.is(u.me)
								) {
									t[Kt]();
									t[Cc]();
									this.aa();
								}
							},
						});
						var C = s.k.B({
							G: function (t) {
								this.ya = (0, a.$)(u.ye);
								this.Ln = t;
								this.xa = t.find(u.ge);
								this.ns = t.find(u.we);
								this.tt = this.ns.find(u.Ni);
								this.Ta = t.find(u.Se);
								this.ga = this.wa.bind(this);
								new s.C(this.tt, this.Da.bind(this), this.Ma.bind(this));
								this.ns.submit(this.zt.bind(this));
								this.ya.click(this.Ia.bind(this));
							},
							Ia: function (t) {
								t[Kt]();
								if (this.Ln.hasClass(u.yt)) {
									this.Aa();
								} else {
									this.oa();
									this.tt[as]();
								}
							},
							wa: function (t) {
								if (
									!this.Ta[0].contains(t[U]) &&
									!this.xa[0].contains(t[U]) &&
									!!this.Ln.hasClass(u.yt)
								) {
									t[Kt]();
									t[Cc]();
									this.Aa();
								}
							},
							Da: function (t) {
								var i = this;
								a.$.get(u.Ee, {
									keyword: t,
								}).done(function (t) {
									if (t[K][na]) {
										i.Ta.html(t[K].html).activate().slideDown(u.Ei);
										i.oa();
									} else {
										i.Ma();
									}
								});
							},
							Ma: function () {
								this.Ta[Le]()[I]();
							},
							oa: function () {
								Gt.removeEventListener(u.ke, this.ga, true);
								this.Ln.addClass(u.yt);
								Gt.addEventListener(u.ke, this.ga, true);
							},
							Aa: function () {
								this.Ma();
								this.Ln.removeClass(u.yt);
								Gt.removeEventListener(u.ke, this.ga, true);
							},
							zt: function (t) {
								if (this.tt.val()[ot]() === "") {
									t[Kt]();
									this.tt[as]();
								}
							},
						});
						var b = s.k.B({
							G: function (t) {
								var i = this;
								this.qn = t;
								this.qn.data(u.Vi, this.qn[Ei]());
								this.La = e.ja.Ra;
								this.Wn();
								s.S.W(e.En.Ua + this.La, function (t) {
									i.Oa(t);
								});
							},
							Wn: function () {
								var t = e.dn.Pa(this.La);
								if (t && t[Tt]) {
									this.Oa(t);
								}
							},
							Oa: function (t) {
								if (!(t = this.qn.data(t)) || !t[Tt]) {
									t = this.qn.data(u.Vi);
								}
								this.qn.text(t);
							},
						});
						var z = s.k.B({
							G: function (t) {
								var i = this;
								this.Ln = t;
								this.La = e.ja.Ra;
								this.Na = e.dn.Pa(this.La) || (t.hasClass(u.Vi) ? u.Vi : u.Ce);
								this.Fa = t.children(u.xe);
								this.Ln.click(this.Ba.bind(this));
								s.S.W(e.En.Ua + this.La, function (t) {
									i.Na = t;
									i.Wn();
								});
								this.Wn();
							},
							Ba: function (t) {
								t[Kt]();
								this.Na = this.Na === u.Vi ? u.Ce : u.Vi;
								e.dn.Ga(this.La, this.Na);
								this.Wn();
							},
							Wn: function () {
								this.Fa.removeClass(u.yt)
									.filter(ra.concat(this.Na, W))
									.addClass(u.yt);
							},
						});
						var B = s.k.B({
							G: function (n) {
								n.click(function (t) {
									var i = n.data(u.p);
									var i = (0, r.$a)(i);
									a.We.Modal.getOrCreateInstance(i[0])[V]();
								});
							},
						});
						var D = s.k.B({
							G: function (t) {
								var i = this;
								this.ya = t.find(u.Te);
								this.qa = t.find(u.De);
								new a.We.Dropdown(this.ya[0]);
								this.ya.on(u.Me, function () {
									Gt[Dt].appendChild(i.qa[0]);
								});
								this.ya.on(u.Ie, function () {
									t.append(i.qa);
								});
							},
						});
						n[G] = function () {
							D.V(u.Ae);
							o.V(u.Le);
							y.V(u.Re);
							w.V(u.je);
							g.V(u.Ue);
							h.V(u.Oe);
							d.V(u.Pe);
							L.V(u.Ne);
							C.V(u.Fe);
							b.V(u.Be);
							z.V(u.Ge);
							f.V(u.$e);
							l.V(u.qe);
							v.V(u.In);
							B.V(u.An);
						};
					},
					{
						13: 13,
						15: 15,
						2: 2,
						4: 4,
						7: 7,
					},
				],
				12: [
					function (t, i, n) {
						n.i = true;
						n[G] = undefined;
						var e = t(7);
						var s = t(2);
						var r = t(15);
						var a = t(11);
						var c = t(16);
						var u = {
							o: bc,
							u: Aa,
							_: zc,
							l: Bc,
							v: Dc,
							p: xc,
							m: Z0,
							vt: pc,
							dt: Mc,
							bt: kc,
							kt: mc,
							yt: jc,
							gt: S,
							wt: Ha,
							St: tr,
							Et: s0,
							Ct: Ac,
							xt: qc,
							Tt: Nc,
							Dt: Hc,
							Mt: Gc,
							It: Pc,
							ci: Sc,
							ui: _c,
							_i: ms,
							fi: Tc,
							li: Uc,
							vi: Ia,
							di: Ic,
							bi: Vc,
							pi: Yc,
							mi: Kc,
							ki: Wc,
							yi: Ec,
							gi: $c,
							wi: oc,
							Si: Oc,
							Ei: Zc,
							Ci: Xc,
							xi: Jc,
							Ti: Rc,
							Di: Qc,
							Mi: H0,
							Ii: nr,
							Ai: $a,
							Li: m,
							Ri: Ui,
							ji: Fc,
							Ui: _r,
							Oi: Si,
							Pi: t2,
							Ni: i2,
							Fi: n2,
							Bi: s2,
							Gi: e2,
							$i: r2,
							qi: a2,
							Hi: c2,
						};
						var o = s.k.B({
							G: function (t) {
								new e.Je(t.find(u.o)[0], {
									effect: Ht[lc] <= 768 ? "" : u.u,
									loop: true,
									autoplay: {
										delay: 10000,
										disableOnInteraction: false,
									},
									pagination: {
										el: u._,
										type: u.l,
									},
									navigation: {
										nextEl: u.v,
										prevEl: u.p,
									},
								});
							},
						});
						var h = s.k.B({
							G: function (t) {
								var i = this;
								this.Ln = t;
								this.Ha = t.find(u.m).data(a.Mn.F);
								this.za = t.find(u.vt);
								this.Va = this.za.find(u.dt);
								this.Ka = this.za.find(u.bt);
								this.da = e.We.Tooltip.getOrCreateInstance(this.za[0]);
								this.za.mouseleave(function () {
									return i.da[I]();
								});
								this.Va.click(this.Ya.bind(this));
								this.Ka.click(this.Ya.bind(this));
								this.Ha.Pn.click(this.Fn.bind(this));
								this.Wa(this.Ha.$n());
							},
							Ya: function (t) {
								t[Kt]();
								t = (0, e.$)(t[_]);
								var i = this.Ha.$n();
								var n = i.data(u.kt) || 1;
								t = t.hasClass(u.yt) ? n + 1 : n - 1;
								n = cc.concat(i.data(u.gt), u2).concat(t);
								if (!(t <= 0)) {
									i.data(u.kt, t).data(u.wt, n).removeClass(u.St);
									this.Wa(i);
									this.da[V]();
									this.Ha.Gn(i);
									if (Ht[lc] <= 576) {
										this.Ln.scrollFocus();
									}
								}
							},
							Fn: function (t) {
								t = (0, e.$)(t[_]);
								this.Wa(t);
							},
							Wa: function (t) {
								t = t.data(u.kt) || 1;
								this.za.attr(u.Et, o2.concat(t));
								if (t <= 1) {
									this.Va.addClass(u.Ct);
								} else {
									this.Va.removeClass(u.Ct);
								}
							},
						});
						var f = s.k.B({
							G: function (t) {
								new e.Je(t[0], {
									slidesPerView: u.xt,
									navigation: {
										nextEl: u.Tt,
										prevEl: u.Dt,
									},
								});
							},
						});
						var l = s.k.B({
							G: function (t) {
								this.Ln = t;
								this.sa = r.dn.Pa(r.ja.Ja);
								if (this.sa === undefined) {
									this.sa = true;
								}
								s.S.W(r.En.Qa, this.Xa.bind(this));
								s.S.W(r.En.Za, this.tr.bind(this));
								this.Ea();
							},
							Ea: function () {
								this.ir = this.Ln.find(u.Mt);
								this.er = this.Ln.find(u.It);
								this.sr = this.Ln.find(u.vt);
								this.qt = this.Ln.find(u.ci);
								this.ir.click(this.Ia.bind(this));
								this.nr = new e.Je(this.qt[0], {
									slidesPerView: u.xt,
									slidesPerGroup: 2,
									navigation: {
										nextEl: this.sr.find(u.bt)[0],
										prevEl: this.sr.find(u.dt)[0],
									},
								});
								if (!r.dn.ar()) {
									this.er[I]();
								}
							},
							Ia: function (t) {
								t[Kt]();
								this.sa = !this.sa;
								r.dn.Ga(r.ja.Ja, this.sa ? 1 : 0);
								if (this.sa) {
									this.sr[V]();
									this.ir.removeClass(u.ui);
									this.qt.slideDown(u._i);
								} else {
									this.sr[I]();
									this.ir.addClass(u.ui);
									this.qt.slideUp(u._i);
								}
							},
							tr: function () {
								var s = this;
								this.ka(function (t) {
									var i = s.Ln.find(u.fi)
										.map(function (t, i) {
											return (0, e.$)(i).data(u.gt);
										})
									[ci]();
									var n = [];
									t.forEach(function (t) {
										if (i.indexOf(t[S]) === -1) {
											n.push(t);
										}
									});
									s.rr(n);
									if (!i[Tt] && !n[Tt]) {
										s.Jn([]);
									}
									s.nr[vc]();
								});
							},
							Xa: function () {
								this.ka(this.Jn.bind(this));
							},
							ka: function (t) {
								if (r.dn.ar()) {
									this.hr(t);
								} else {
									t(c.ur.cr());
								}
							},
							hr: function (i) {
								e.$.get(u.li).done(function (t) {
									if (i) {
										i(t[K]);
									}
								});
							},
							_r: function (t) {
								return (t > 3600 ? [t / 3600] : [])
									.concat([(t % 3600) / 60, t % 60])
									.map(function (t) {
										return u.wi.concat(Math.floor(t)).slice(-2);
									})
									.join(u.vi);
							},
							rr: function (t) {
								var n = this;
								t = t
									.map(function (t) {
										var i = h2.test(t.episode[f2]) ? u.di : u.bi;
										return v2
											.concat(t[S], g2)
											.concat(t[S], w2)
											.concat(t[It], C2)
											.concat(t[b2], z2)
											.concat(t.titleJP, d2)
											.concat(t.titleEN, B2)
											.concat(i, D2)
											.concat(i, x2)
											.concat(t.episode.num, p2)
											.concat(n._r(t.episode[rs]), M2)
											.concat(n._r(t.episode[k2]), m2)
											.concat(
												Math.floor((t.episode[rs] / t.episode[k2]) * 100),
												j2
											);
									})
									.join("");
								this.Ln.find(u.pi).append(t).activate();
							},
							Jn: function (t) {
								var i;
								if (t && t[Tt]) {
									i = q2
										.concat(this.sa ? "" : u.ui, G2)
										.concat(this.sa ? "" : u.mi, P2)
										.concat(this.sa ? u.ki : u.mi, S2);
									this.Ln.html(i).activate();
									this.rr(t);
									this.Ea();
								} else {
									this.Ln[Le]();
								}
							},
						});
						var v = s.k.B({
							G: function (t) {
								this.Ln = t;
								this.lr = this.vr();
								this.ka();
							},
							vr: function () {
								var t = new Date()[_2]();
								var i = Math.abs(t);
								return (
									(t < 0 ? u.yi : u.gi) +
									(u.wi + Math.floor(i / 60)).slice(-2) +
									u.vi +
									(u.wi + (i % 60)).slice(-2)
								);
							},
							ka: function () {
								var i = this;
								e.$.get(u.Si, {
									tz: this.lr,
								}).done(function (t) {
									i.Ln.html(t[K]).activate();
									i.dr();
									i.br();
									i.pr();
								});
							},
							br: function () {
								var n = this;
								this.qt = this.Ln.find(u.Ei);
								this.mr = this.Ln.find(u.Ci);
								this.kr = this.Ln.find(u.xi);
								this.er = this.Ln.find(u.Ti);
								this.mr.click(function (t) {
									t = (0, e.$)(t[_]);
									n.mr.removeClass(u.St);
									t.addClass(u.St);
									n.yr(t);
								});
								this.er.click(function () {
									n.er.toggleClass(u.Di);
									n.qt.find(u.Mi).toggleClass(u.Ii);
								});
								function t() {
									var t = (i = new Date())
										.toLocaleDateString(u.Ai)
										.replace(hc, u.Li);
									var i = i.toLocaleTimeString(u.Ai, {
										hour12: false,
									});
									n.kr.text(`${t}${x}${i}`);
								}
								t();
								p(t, 1000);
							},
							yr: function (t) {
								var i = this;
								this.qt.css(u.Ri, 0.5);
								e.$.get(u.ji, {
									tz: this.lr,
									time: t.data(u.Ui),
								}).done(function (t) {
									i.qt.html(t[K]).removeAttr(u.Oi).activate();
									i.pr();
								});
							},
							pr: function () {
								if (this.qt.find(u.Mi).hasClass(u.Ii)) {
									this.er.removeClass(u.Di)[V]();
								} else {
									this.er[I]();
								}
							},
							dr: function () {
								var t = this.Ln.find(u.ci);
								var i = this.Ln.find(u.Pi);
								var n = this.Ln.find(u.Ni);
								var s = t.find(u.Fi)[T2]();
								new e.Je(t[0], {
									grabCursor: true,
									navigation: {
										nextEl: i[0],
										prevEl: n[0],
									},
									slidesPerView: u.xt,
									slidesPerGroup: 1,
								}).slideTo(s);
							},
						});
						n[G] = function () {
							o.V(u.Bi);
							h.V(u.Gi);
							f.V(u.$i);
							v.V(u.qi);
							l.V(u.Hi);
						};
					},
					{
						11: 11,
						15: 15,
						16: 16,
						2: 2,
						7: 7,
					},
				],
				13: [
					function (t, i, n) {
						function u(t) {
							return (u =
								H == typeof Symbol && tt == typeof Symbol[Xt]
									? function (t) {
										return typeof t;
									}
									: function (t) {
										if (
											t &&
											H == typeof Symbol &&
											t[Jt] === Symbol &&
											t !== Symbol[Ut]
										) {
											return tt;
										} else {
											return typeof t;
										}
									})(t);
						}
						n.i = true;
						n[G] = n.$a = n.pn = n.gr = n.wr = undefined;
						var o = t(7);
						var e = t(2);
						var h = {
							o: U2,
							u: I2,
							_: V2,
							l: Y2,
							v: K2,
							p: W2,
							m: E2,
							vt: $2,
							dt: br,
							bt: zr,
							kt: O2,
							yt: Z2,
							gt: Br,
							wt: Mr,
							St: X2,
							Et: J2,
							Ct: Hr,
							xt: ms,
							Tt: R2,
							Dt: Q2,
							Mt: F2,
							It: tu,
							ci: iu,
							ui: nu,
							_i: su,
							fi: eu,
							li: ru,
							vi: Ac,
							di: yr,
							bi: au,
							pi: cu,
							mi: uu,
							ki: H,
							yi: ou,
							gi: Et,
							wi: O,
							Si: hu,
							Ei: fu,
							Ci: lu,
							xi: vu,
							Ti: du,
							Di: Je,
							Mi: ai,
							Ii: oi,
							Ai: ui,
							Li: gu,
							Ri: wu,
						};
						var c = (n.gr = {
							Sr: 1,
							Er: 2,
							Cr: 3,
						});
						function r(t, i) {
							if (t[Tt]) {
								var n = Ht.grecaptcha;
								try {
									var s = t.data(h.o);
									if (!s) {
										s = n.render(t[0], {
											sitekey: e.g.U(e.g.j),
											theme: t.data(h.u) || h._,
										});
										t.data(h.o, s);
									}
									n.reset(s);
								} catch (n) {
									if (!i || i < 5) {
										_t(function () {
											return r(t, (i || 0) + 1);
										}, 500);
									}
								}
							}
						}
						function a(t, i) {
							if (t[Tt]) {
								var n = Ht.turnstile;
								try {
									var s = t.data(h.l);
									if (!s) {
										s = n.render(t[0], {
											sitekey: e.g.U(e.g.j),
											size: h.v,
										});
										t.data(h.l, s);
									}
									n.reset(s);
								} catch (n) {
									if (!i || i < 5) {
										_t(function () {
											return a(t, (i || 0) + 1);
										}, 500);
									}
								}
							}
						}
						var s = Ht.turnstile ? a : r;
						n.$a = function (t, i) {
							var n = (0, o.$)(hi.concat(t));
							if (!n[Tt]) {
								(n = (0, o.$)(Ht.modals[t]).appendTo(Gt[Dt])).activate();
								if (i) {
									i(n);
								}
							}
							return n;
						};
						var f = (n.pn = function (n, s, e) {
							if (u(n) === h.p) {
								n = [n];
							}
							var r = (0, o.$)(h.m);
							if (!r[Tt]) {
								r = (0, o.$)(h.vt).appendTo(Gt[Dt]);
							}
							var t = function () {
								var t = (0, o.$)(h.dt);
								var i = (0, o.$)(h.bt).text(n[a]);
								if (s === c.Er) {
									t.addClass(h.kt).append(h.yt);
								} else if (s === c.Sr) {
									t.addClass(h.gt).append(h.wt);
								} else {
									t.addClass(h.St).append(h.Et);
								}
								t.append(i);
								t.append(h.Ct);
								t[I]();
								t.fadeIn(h.xt);
								_t(function () {
									return t.fadeOut(function () {
										return t[P]();
									});
								}, e || 3000);
								r.append(t);
							};
							for (var a = 0; a < n[Tt]; a++) {
								t();
							}
						});
						f.bn = function (t) {
							var i;
							if (t.messages && t.messages[Tt]) {
								i = c.Cr;
								if (t[Y] >= 400) {
									i = c.Sr;
								} else if (typeof t[K] === h.Tt && t[K]) {
									i = c.Er;
								}
								f(t.messages, i);
							}
						};
						var l = (n.wr = e.k.B({
							Tr: function () { },
							Dr: function () { },
							Mr: function () { },
							Ir: function () { },
							G: function (t) {
								this.ns = t;
								this.Ar = t.find(h.Dt);
								this.Lr = t.find(h.Mt);
								this.Rr = t.find(h.It);
								this.jr = t.closest(h.ci);
								this.Ur = t.data(h.ui);
								this.Bt();
								this.Lr.click(this.Or.bind(this));
								this.ns.submit(this.Pr.bind(this));
								this.Tr();
							},
							Bt: function () {
								var t = this;
								if (this.jr[Tt]) {
									this.jr.on(h._i, function () {
										t.Nr();
									});
								} else {
									this.Nr();
								}
							},
							Or: function (t) {
								if (this.ns[0][fa]()) {
									this.ns[si]();
								} else {
									this.ns[0][da]();
								}
							},
							Fr: function (t) {
								if (!this.zs && !((this.zs = this.ns.find(h.fi)), this.zs[Tt])) {
									this.zs = (0, o.$)(h.li)[I]().appendTo(this.ns);
								}
								this.Br = false;
								if (t) {
									this.zs[V]();
									this.Lr.attr(h.vi, true);
								} else {
									this.zs[I]();
									this.Lr.removeAttr(h.vi);
								}
							},
							bn: function (t) {
								var i;
								if (t.messages && t.messages[Tt]) {
									i = c.Cr;
									if (t[Y] >= 400) {
										i = c.Sr;
									} else if (u(t[K]) === h.Tt && t[K]) {
										i = c.Er;
									}
									this.Gr(t.messages, i);
								}
								if (t[Y] === 200) {
									if (this.Ur) {
										e.S.J(this.Ur);
									}
									this.Dr();
								} else if (t[Y] === 302 || t[Y] === 301) {
									_t(function () {
										o.ct[Yt] = t[It];
									}, 1000);
									this.Ir();
								} else {
									this.Mr();
								}
							},
							Nr: function () {
								s(this.Rr);
							},
							Cs: function () {
								this.ns[0][ks]();
							},
							$r: function () {
								this.ns.find(h.di)[P]();
							},
							Gr: function (t, i) {
								var n = (0, o.$)(h.bi).append(h.Ct);
								if (i === c.Er) {
									n.addClass(h.kt);
								} else if (i === c.Sr) {
									n.addClass(h.gt);
								} else {
									n.addClass(h.St);
								}
								for (var s = 0; s < t[Tt]; s++) {
									(0, o.$)(h.pi).text(t[s]).appendTo(n);
								}
								n[I]();
								this.ns.prepend(n);
								n.fadeIn();
							},
							qr: function () {
								return true;
							},
							Hr: function () {
								var t = this.ns.find(h.Dt);
								var s = {};
								var i = t.filter(h.mi);
								var n = (O == typeof FormData ? O : u(FormData)) === h.ki;
								var e = (n = i[Tt] && n) ? new FormData() : {};
								var r = {};
								t.filter(h.yi).each(function (t, i) {
									var n = (i = (0, o.$)(i)).attr(h.gi);
									if (n) {
										if (u(r[n]) === h.wi) {
											r[n] = 0;
										}
										s[n.replace(yu, he.concat(r[n]++, wc))] = i.val();
									}
								});
								t.filter(h.Si).each(function (t, i) {
									var n = (i = (0, o.$)(i)).is(h.Ei) ? i.val() : 0;
									if ((i = i.attr(h.gi))) {
										if (u(r[i]) === h.wi) {
											r[i] = 0;
										}
										s[i.replace(Lu, he.concat(r[i], wc))] = n;
										r[i]++;
									}
								});
								t.filter(h.Ci).each(function (t, i) {
									var n = (i = (0, o.$)(i)).attr(h.gi);
									i = i.is(h.Ei) ? i.val() : 0;
									if (!!n && (u(s[n]) === h.wi || s[n] === 0)) {
										s[n] = i;
									}
								});
								if (n) {
									i.each(function (t, i) {
										for (var n = 0; n < i[Cu][Tt]; n++) {
											var s = (0, o.$)(i)
												.attr(h.gi)
												.replace(yu, he.concat(n, wc));
											e.append(s, i[Cu][n], i[Cu][n][Et]);
										}
									});
									for (var a = Pt.keys(s), c = 0; c < a[Tt]; c++) {
										e.append(a[c], s[a[c]]);
									}
									return [h.xi, e];
								}
								return [h.Ti, s];
							},
							Pr: function (t) {
								var i = this;
								t[Kt]();
								if (!this.Br && this.ns[0][fa]() && this.qr()) {
									this.Fr(true);
									this.$r();
									t =
										(t = this.Hr())[0] === h.xi
											? {
												type: h.Di,
												data: t[1],
												async: true,
												contentType: false,
												processData: false,
											}
											: {
												type: this.ns.attr(h.Mi) || h.Ii,
												data: t[1],
											};
									o.$.ajax(this.ns.data(h.Ai) || this.ns.attr(h.Ai), t)
										.done(function (t) {
											return i.bn(t);
										})
										.always(function () {
											i.Fr(false);
											i.Nr();
										});
								}
							},
						}));
						var v = e.k.B({
							G: function (t) {
								this.Rr = t.find(h.It);
								s(this.Rr);
							},
						});
						n[G] = function () {
							l.V(h.Li);
							v.V(h.Ri);
						};
					},
					{
						2: 2,
						7: 7,
					},
				],
				14: [
					function (t, i, n) {
						n.i = true;
						n[G] = undefined;
						var e;
						var r = t(7);
						var s = t(2);
						var a = t(4);
						var c = t(15);
						var u = {
							o: bu,
							u: zu,
							_: Bu,
							l: Du,
							v: xu,
							p: pu,
							m: Ir,
							vt: $c,
							dt: Mu,
							bt: rs,
							kt: ku,
							yt: ms,
							gt: Bt,
							wt: P0,
							St: fu,
							Et: mu,
							Ct: Kc,
							xt: ju,
							Tt: Au,
							Dt: qu,
							Mt: Nu,
							It: Hu,
							ci: Gu,
							ui: Pu,
							_i: Ba,
							fi: Ua,
							li: Su,
							vi: _u,
						};
						var o = s.k.B({
							G: function (t) {
								this.zr = t.find(u.o);
								this.Vr = t.find(u.u);
								this.Kr = (0, r.$)(u._);
								this.Yr = t.find(u.l);
								this.Wr = t.find(u.v);
								this.Jr = t.find(u.p);
								this.Qr = t.find(u.m);
								this.Xr = this.Zr.bind(this);
								s.S.W(c.En.Qa, this.Xa.bind(this));
								this.Yr.click(this.th.bind(this));
								this.zr.click(this.ih.bind(this));
								this.Vr.keydown(this.eh.bind(this));
								this.sh();
								this.nh();
							},
							sh: function () {
								this.zr.each(function (t, i) {
									i = (0, r.$)(i);
									if (`${i.val()}`[0] === u.vt) {
										i.addClass(u.dt);
									}
								});
							},
							eh: function (t) {
								if (t[Rt] === 13) {
									t[Kt]();
									t[Cc]();
									this.Qr[Bt]();
								}
							},
							Zr: function (t) {
								if (
									!this.Wr[0].contains(t[U]) &&
									!this.Yr[0].contains(t[U]) &&
									!this.Qr[0].contains(t[U]) &&
									this.Wr.css(u.bt) === u.kt
								) {
									t[Kt]();
									t[Cc]();
									this.ah();
								}
							},
							ah: function () {
								this.Wr[Tu]().slideUp(u.yt);
								Gt.removeEventListener(u.gt, this.Xr, true);
							},
							th: function () {
								if (this.Wr.is(u.wt)) {
									this.ah();
								} else {
									this.Wr[Tu]().slideDown(u.yt);
									Gt.addEventListener(u.gt, this.Xr, true);
								}
							},
							ih: function (t) {
								var i = (0, r.$)(t[_]);
								var n = `${i.val()}`;
								var s = n.replace(Uu, "");
								if (i.is(u.St) || n[0] === u.vt) {
									i.removeClass(u.dt).val(s);
								} else {
									t[Kt]();
									i.addClass(u.dt).val(u.vt.concat(s));
								}
							},
							nh: function () {
								if (
									this.Jr.find(u.Et).filter(function (t, i) {
										return i[Si][Na] !== u.Ct;
									})[Tt] > 0
								) {
									this.Jr[V]();
								} else {
									this.Jr[I]();
								}
							},
							Xa: function () {
								if (c.dn.ar() && !(0, r.q)(r.ct[Iu], u.xt)) {
									this.Kr.val(c.dn.rh)[gr]()[V]();
									this.nh();
								}
							},
						});
						function h(t) {
							var i;
							var n;
							var s = (t = (0, r.$)(t).closest(Vu.concat(e)))[gr]().find(u.Mt);
							if (s[Tt]) {
								if (s.data(u.It) === undefined) {
									s.data(u.It, s[Ei]()[ot]());
								}
								t = t.find(u.ci);
								i = s.data(u.ui) || 1;
								n = s.data(u.It);
								if (t[Tt]) {
									n = [];
									t.each(function (t, i) {
										i = (0, r.$)(i)[gr]().find(u._i)[Ei]();
										n.push(i[ot]());
									});
									n = n[Tt] > i ? `${n[0]}${Yu}${n[Tt] - 1}${wc}` : n.join(u.fi);
								}
								s.html(n);
							}
						}
						function f() {
							(0, r.$)(Vu.concat(e)).each(function (t, i) {
								return h(i);
							});
						}
						e = u.Tt;
						t = u.Dt;
						// (0, r.$)(Gt)
						// 	.ready(f)
						// 	.on(a.Z.Lt, f)
						// 	.on(Ku.concat(t), u.li, function (t) {
						// 		return h(t[_]);
						// 	});
						// n[G] = function () {
						// 	o.V(u.vi);
						// };
					},
					{
						15: 15,
						2: 2,
						4: 4,
						7: 7,
					},
				],
				15: [
					function (t, i, n) {
						function s(t) {
							return (s =
								H == typeof Symbol && tt == typeof Symbol[Xt]
									? function (t) {
										return typeof t;
									}
									: function (t) {
										if (
											t &&
											H == typeof Symbol &&
											t[Jt] === Symbol &&
											t !== Symbol[Ut]
										) {
											return tt;
										} else {
											return typeof t;
										}
									})(t);
						}
						n.i = true;
						n[G] = n.dn = n.ja = n.En = undefined;
						var u = t(7);
						var e = t(2);
						var r = t(4);
						var a = t(13);
						var o = {
							o: Wu,
							u: Eu,
							_: $u,
							l: Ou,
							v: Zu,
							p: Xu,
							m: Ju,
							vt: Ru,
							dt: Qu,
							bt: Fu,
							kt: to,
							yt: io,
							gt: no,
							wt: so,
							St: eo,
							Et: ro,
							Ct: ao,
							xt: co,
							Tt: uo,
							Dt: oo,
							Mt: O,
							It: ho,
							ci: fo,
							ui: lo,
							_i: vo,
							fi: go,
							li: wo,
							vi: yo,
							di: Bt,
							bi: Lo,
							pi: lr,
							mi: Co,
							ki: bo,
							yi: zo,
							gi: l2,
							wi: Li,
							Si: Us,
							Ei: Bo,
							Ci: S,
							xi: Do,
							Ti: or,
							Di: xo,
							Mi: a0,
							Ii: po,
							Ai: Mo,
							Li: ko,
							Ri: mo,
							ji: jo,
							Ui: Ao,
							Oi: qo,
							Pi: No,
							Ni: Ho,
							Fi: Go,
							Bi: Po,
							Gi: So,
							$i: V0,
							qi: _o,
							Hi: To,
							zi: ka,
							Vi: Uo,
							Ki: tr,
							Yi: Io,
							Wi: Vo,
							Ji: _0,
							Qi: Yo,
							Xi: s0,
							Zi: Ko,
							te: Wo,
							ee: Eo,
							se: $o,
							ne: Oo,
							ae: Zo,
							re: Xo,
							he: zt,
							oe: su,
							ce: Jo,
							ue: Ro,
							_e: Qo,
							fe: Fo,
							le: th,
							ve: ih,
							de: nh,
							be: sh,
							pe: eh,
							me: rh,
							ke: ah,
						};
						var c = o.o;
						var h = o.u;
						var f = o._;
						var l = (n.ja = {
							Ra: o.l,
							hh: o.v,
							oh: o.p,
							uh: o.m,
							_h: o.vt,
							fh: o.dt,
							lh: o.bt,
							Ja: o.kt,
							dh: o.yt,
							bh: o.gt,
						});
						var v = (n.En = {
							Qa: o.wt,
							ph: o.St,
							Sn: o.Et,
							Za: o.Ct,
							Ua: o.xt,
							mh: o.Tt,
						});
						var d = (n.dn = {
							kh: null,
							rh: 0,
							yh: null,
							Bt: function () {
								var t = this;
								// (0, u.$)(Gt).on(r.Z.Lt, function () {
								// 	t.kh = null;
								// 	t.gh();
								// });
								// _t(this.gh.bind(this), 100);
							},
							gh: function () {
								try {
									this.wh(e.D.get(c));
								} catch (t) { }
							},
							wh: function (t) {
								if (t !== this.kh) {
									this.Sh((0, u.P)(e.M.N(t)));
									this.kh = t;
									e.D.set(c, t);
								}
							},
							Sh: function (t) {
								this.rh = t[S];
								this.Eh(t.folders);
								this.Ch(t.settings);
								e.S.J(v.Qa, this);
							},
							ar: function () {
								return this.rh > 0;
							},
							vn: function () {
								return !this.ar() && ((0, a.pn)(o.Dt, a.gr.Sr), true);
							},
							xh: function () {
								return e.D.get(f, []);
							},
							Eh: function (t) {
								e.D.set(f, t);
							},
							Ch: function (i) {
								var n = this;
								Pt.keys(i).forEach(function (t) {
									n.Ga(t, i[t]);
								});
							},
							Th: function () {
								var i;
								var n = this;
								if (!this.yh) {
									i = e.D.get(h) || {};
									this.yh = {};
									Pt.values(l).forEach(function (t) {
										try {
											if (s(i[t]) !== o.Mt) {
												n.yh[t] = i[t];
											}
										} catch (t) { }
									});
								}
								return this.yh;
							},
							Pa: function (t) {
								return this.Th()[t];
							},
							Ga: function (t, i) {
								var n = this;
								if (i !== this.Th()[t] && !(Pt.values(l).indexOf(t) < 0)) {
									this.yh[t] = i;
									e.D.set(h, this.yh);
									e.S.J(v.Ua + t, i);
									if (this.ar()) {
										if (this.Dh) {
											E(this.Dh);
										}
										this.Dh = _t(function () {
											return n.Mh();
										}, 500);
									}
								}
							},
							Mh: function () {
								u.$.post(o.It, {
									settings: this.Th(),
								});
							},
						});
						var g = e.k.B({
							G: function (t) {
								var i = this;
								this.Ih = t;
								this.ka();
								this.Ah = o.ci;
								e.S.W(v.ph, function () {
									return i.ka();
								});
								this.Lh(e.D.get(this.Ah));
							},
							Lh: function (t) {
								var i = this;
								if (t && t !== this.Rh) {
									this.Rh = t;
									e.D.set(this.Ah, t);
									this.Ih.html(t);
									_t(function () {
										i.Ih.activate();
									}, 100);
								}
							},
							ka: function () {
								var s = this;
								u.$.get(o.ui).done(function (t, i, n) {
									s.Lh(t[K]);
									d.wh(n.getResponseHeader(o._i));
								});
							},
						});
						var w = e.k.B({
							G: function (t) {
								this.Ln = t;
								this.jh = (0, u.$)(o.fi).html();
								this.Uh = (0, u.$)(o.li).html();
								this.Oh();
								this.Ln.delegate(o.vi, o.di, this.Ph.bind(this));
							},
							Oh: function () {
								this.Nh = this.Ln.find(o.bi);
								this.Nh.each(function (t, i) {
									(i = (0, u.$)(i)).data(o.pi, i.html());
								});
							},
							Ph: function (t) {
								t[ch]();
								t[Kt]();
								var i;
								var n = (t = (0, u.$)(t[_])).closest(o.bi);
								if (t.hasClass(o.mi)) {
									if (!this.Ln.find(o.ki)[Tt]) {
										i = this.Ln.find(o.yi);
										i = (0, u.$)(
											(0, u.$)(this.Uh).attr(o.gi, 0)[Le]().prop(o.wi)
										).insertBefore(i);
										this.Fh(i);
									}
								} else if (t.hasClass(o.Si)) {
									this.Fh(n);
								} else if (t.hasClass(o.Ei)) {
									this.Bh(n);
								}
							},
							Gh: function (t) {
								t.html(t.data(o.pi));
							},
							Bh: function (t) {
								var i = this;
								t = t.data(o.Ci);
								u.$.post(o.xi, {
									id: t,
								})
									.done(function (t) {
										a.pn.bn(t);
									})
									.always(function () {
										i.$h();
									});
							},
							$h: function () {
								var s = this;
								function i(t) {
									s.Ln.find(o.bi)[P]();
									var i = "";
									for (var n = 0; n < t[Tt]; n++) {
										if (!t[n][G]) {
											i += s.Uh.replace(uh, t[n][S]).replace(oh, t[n][Et]);
										}
									}
									s.Ln.find(o.Ti).prepend(i);
									s.Oh();
								}
								u.$.get(o.Di).done(function (t) {
									d.Eh(t[K]);
									i(t[K]);
								});
							},
							qh: function (i) {
								var n = this;
								var t = i.data(o.Ci);
								var s = i.find(o.Mi).val();
								u.$.post(o.Ii, {
									id: t || 0,
									name: s,
								}).done(function (t) {
									a.pn.bn(t);
									if (t[Y] === 200) {
										n.$h();
										n.Gh(i);
									}
								});
							},
							Fh: function (t) {
								var i = this;
								var n = (0, u.$)(this.jh);
								var s = t.find(o.Ai);
								t[Le]().addClass(o.Li).append(n);
								n = t.find(o.Mi);
								var e = t.find(o.Ri);
								var r = t.find(o.ji);
								n[as]();
								if (s[Tt]) {
									n.val(s[Ei]());
								}
								function a() {
									if (t.data(o.Ci)) {
										t.removeClass(o.Ui);
										i.Gh(t);
									} else {
										t[P]();
									}
								}
								function c() {
									i.qh(t);
								}
								r.click(function (t) {
									t[ch]();
									a();
								});
								e.click(function (t) {
									t[ch]();
									c();
								});
								n.keydown(function (t) {
									if (t[Rt] === 13) {
										c();
									} else if (t[Rt] === 27) {
										a();
									}
								});
							},
						});
						var y = e.k.B(a.wr[Ut], {
							Dr: function () {
								var t = this;
								_t(function () {
									t.Cs();
									e.S.J(v.ph);
									u.We.Modal.getOrCreateInstance(t.jr[0])[I]();
								}, 1000);
							},
						});
						var L = e.k.B(a.wr[Ut], {
							Dr: function () {
								var t = this;
								this.Cs();
								_t(function () {
									t.$r();
								}, 10000);
							},
						});
						var C = e.k.B({
							G: function (t) {
								this.Ln = t;
								this.Hh = t.find(o.Oi);
								this.zh = t.find(o.Pi);
								this.Vh = t.find(o.Ni);
								this.Kh = t.find(o.Fi);
								this.Yh = o.Bi;
								this.Wh = this.Hh[Tt] > 0;
								this.Vh.click(this.Jh.bind(this));
								this.Kh.click(this.Qh.bind(this));
								e.S.W(v.mh, this.Xh.bind(this));
								if (this.Ln.hasClass(o.Gi)) {
									this.Ln.on(o.$i, this.Zh.bind(this));
								}
								this.io();
							},
							eo: function (t) {
								this.zh.toggleClass(o.qi, t > 0);
							},
							io: function () {
								this.so = this.Ln.find(o.Hi);
								if (this.so[Tt]) {
									this.Kh[V]();
								} else {
									this.Kh[I]();
								}
							},
							no: function () {
								var n = this;
								return this.so.filter(function (t, i) {
									return !(0, u.$)(i).hasClass(n.Yh);
								});
							},
							Zh: function () {
								var i = this;
								var t = this.Vh.filter(o.zi);
								this.Hh.loading();
								u.$.ajax(o.Vi, {
									data: {
										type: t.data(o.Ci),
									},
								}).done(function (t) {
									if (t[Y] === 200) {
										i.Hh.html(t[K].html);
										i.eo(t[K][na]);
										i.io();
									}
								});
							},
							Jh: function (t) {
								t[Kt]();
								t = (0, u.$)(t[_]);
								this.Vh.removeClass(o.Ki);
								t.addClass(o.Ki);
								this.Zh();
							},
							Qh: function () {
								var i = this.no()
									.map(function (t, i) {
										return (0, u.$)(i).data(o.Ci);
									})
								[ci]();
								if (i[Tt]) {
									u.$.post(o.Yi, {
										action: o.Wi,
										ids: i,
									}).done(function (t) {
										if (t[Y] === 200) {
											a.pn.bn(t);
										}
										e.S.J(v.mh, i);
									});
								}
							},
							Xh: function (n) {
								this.no()
									.filter(function (t, i) {
										return n.indexOf((0, u.$)(i).data(o.Ci)) > -1;
									})
									.addClass(this.Yh);
								if (this.Wh) {
									this.Zh();
								}
							},
						});
						var b = e.k.B({
							G: function (t) {
								var i = this;
								this.ao = t;
								this.ro = t.closest(o.Ji);
								this.ho = this.ao.hasClass(o.Qi);
								this.da = u.We.Tooltip.getOrCreateInstance(this.ao[0]);
								t.click(this.oo.bind(this)).mouseout(function () {
									return i.da[I]();
								});
								this.Wn();
							},
							Wn: function () {
								if (this.ho) {
									this.ro.addClass(o.Qi);
									this.ao.addClass(o.Qi);
									this.ao.attr(o.Xi, o.Zi);
								} else {
									this.ao.removeClass(o.Qi);
									this.ro.removeClass(o.Qi);
									this.ao.attr(o.Xi, o.te);
								}
							},
							oo: function (t) {
								var i = this;
								u.$.post(o.ee, {
									ani_id: this.ao.data(o.Ci),
									status: this.ho ? o.se : o.Qi,
								})
									.done(function (t) {
										if (t[K]) {
											i.ho = !i.ho;
										}
									})
									.always(function () {
										i.Wn();
										i.da[V]();
									});
							},
						});
						var z = e.k.B({
							G: function (t) {
								this.jr = t;
								this.co = (0, u.$)(o.ne);
								this.jn = this.co.data(o.Ci);
								this.uo = null;
								this._o = t.find(o.ae);
								this.co.data(o.re, this.co.attr(o.he));
								this._o.click(this.fo.bind(this));
								t.on(o.oe, this.lo.bind(this));
								t.on(o.ce, this.vo.bind(this));
							},
							lo: function (t) {
								var i = this._o
									.filter(ac.concat(this.co.data(o.Ci), W))
									.addClass(o.ue)
									.closest(o._e)
									.data(o.Ci);
								this.jr.find(hh.concat(i, W))[Bt]();
							},
							vo: function (t) {
								var i = this;
								if (this.uo && this.uo !== this.jn) {
									u.$.post(o.It, {
										avatar_id: this.uo,
									}).done(function (t) {
										a.pn.bn(t);
										i.jn = i.uo;
										e.S.J(v.ph);
									});
								}
							},
							fo: function (t) {
								t[Kt]();
								t = (0, u.$)(t[_]);
								this._o.removeClass(o.ue);
								t.addClass(o.ue);
								this.uo = t.data(o.Ci);
								this.co
									.attr(o.he, t.find(o.fe).attr(o.he))
									.data(o.Ci, t.data(o.Ci));
							},
						});
						n[G] = function () {
							d.Bt();
							g.V(o.le);
							y.V(o.ve);
							L.V(o.de);
							w.V(o.be);
							b.V(o.pe);
							C.V(o.me);
							z.V(o.ke);
						};
					},
					{
						13: 13,
						2: 2,
						4: 4,
						7: 7,
					},
				],
				16: [
					function (t, i, n) {
						function s(t) {
							return (s =
								H == typeof Symbol && tt == typeof Symbol[Xt]
									? function (t) {
										return typeof t;
									}
									: function (t) {
										if (
											t &&
											H == typeof Symbol &&
											t[Jt] === Symbol &&
											t !== Symbol[Ut]
										) {
											return tt;
										} else {
											return typeof t;
										}
									})(t);
						}
						n.i = true;
						n[G] = n.ur = n.do = undefined;
						var e = t(7);
						var r = t(2);
						var a = t(4);
						var c = t(15);
						var u = t(13);
						var v = {
							o: fh,
							u: lh,
							_: vh,
							l: dh,
							v: gh,
							p: wh,
							m: yh,
							vt: Lh,
							dt: Ch,
							bt: bh,
							kt: zh,
							yt: Bh,
							gt: Je,
							wt: Dh,
							St: xh,
							Et: ph,
							Ct: Mh,
							xt: kh,
							Tt: mh,
							Dt: jh,
							Mt: Ah,
							It: qh,
							ci: Nh,
							ui: Hh,
							_i: S,
							fi: Tc,
							li: Gh,
							vi: Ph,
							di: Sh,
							bi: _h,
							pi: or,
							mi: hr,
							ki: Th,
							yi: Bt,
							gi: Uh,
							wi: Ih,
							Si: Vh,
							Ei: Co,
							Ci: Us,
							xi: Yh,
							Ti: Kh,
							Di: l2,
							Mi: tr,
							Ii: Wh,
							Ai: Eh,
							Li: $h,
							Ri: Oh,
							ji: Zh,
							Ui: Xh,
							Oi: Jh,
						};
						function o(i, t) {
							var n;
							var s = Pt.keys(i);
							if (Pt[Rh]) {
								n = Pt.getOwnPropertySymbols(i);
								if (t) {
									n = n.filter(function (t) {
										return Pt.getOwnPropertyDescriptor(i, t).enumerable;
									});
								}
								s[b1].apply(s, n);
							}
							return s;
						}
						function h(i) {
							for (var t = 1; t < arguments[Tt]; t++) {
								var n = arguments[t] ?? {};
								if (t % 2) {
									o(Pt(n), true).forEach(function (t) {
										f(i, t, n[t]);
									});
								} else if (Pt.getOwnPropertyDescriptors) {
									Pt.defineProperties(i, Pt.getOwnPropertyDescriptors(n));
								} else {
									o(Pt(n)).forEach(function (t) {
										Pt.defineProperty(i, t, Pt.getOwnPropertyDescriptor(n, t));
									});
								}
							}
							return i;
						}
						function f(t, i, n) {
							if ((i = l(i)) in t) {
								Pt.defineProperty(t, i, {
									value: n,
									enumerable: true,
									configurable: true,
									writable: true,
								});
							} else {
								t[i] = n;
							}
							return t;
						}
						function l(t) {
							t = d(t, W2);
							if (tt == s(t)) {
								return t;
							} else {
								return t + "";
							}
						}
						function d(t, i) {
							if (nn != s(t) || !t) {
								return t;
							}
							var n = t[Symbol.toPrimitive];
							if (n === undefined) {
								return (W2 === i ? q : Number)(t);
							}
							n = n.call(t, i || G);
							if (nn != s(n)) {
								return n;
							}
							throw new TypeError(Qh);
						}
						function g(t, i) {
							return b(t) || C(t, i) || y(t, i) || w();
						}
						function w() {
							throw new TypeError(Fh);
						}
						function y(t, i) {
							var n;
							if (t) {
								if (W2 == typeof t) {
									return L(t, i);
								} else if (
									tf ===
									(n =
										wt === (n = {}[Vt].call(t).slice(8, -1)) && t[Jt]
											? t[Jt][Et]
											: n) ||
									nf === n
								) {
									return St.from(t);
								} else if (sf === n || ef.test(n)) {
									return L(t, i);
								} else {
									return undefined;
								}
							}
						}
						function L(t, i) {
							if (i == null || i > t[Tt]) {
								i = t[Tt];
							}
							for (var n = 0, s = St(i); n < i; n++) {
								s[n] = t[n];
							}
							return s;
						}
						function C(t, i) {
							var n =
								t == null
									? null
									: (O != typeof Symbol && t[Symbol[Xt]]) || t["@@iterator"];
							if (n != null) {
								var s;
								var e;
								var r;
								var a;
								var c = [];
								var u = true;
								var o = false;
								try {
									r = (n = n.call(t))[jc];
									if (i === 0) {
										if (Pt(n) !== n) {
											return;
										}
										u = false;
									} else {
										for (
											;
											!(u = (s = r.call(n))[rf]) && (c.push(s[Wt]), c[Tt] !== i);
											u = true
										);
									}
								} catch (t) {
									o = true;
									e = t;
								} finally {
									try {
										if (
											!u &&
											n.return != null &&
											((a = n.return()), Pt(a) !== a)
										) {
											return;
										}
									} finally {
										if (o) {
											throw e;
										}
									}
								}
								return c;
							}
						}
						function b(t) {
							if (St.isArray(t)) {
								return t;
							}
						}
						var z = v.o;
						var B = v.u;
						var D = v._;
						var x = v.l;
						var p = (n.ur = {
							O: null,
							bo: null,
							po: null,
							mo: false,
							Bt: function () {
								// r.S.W(c.En.Qa, this.ko.bind(this));
								// $(Gt).on(a.Z.X, this.ko.bind(this));
								// $(Ht).on(v.v, this.ko.bind(this)).on(v.p, this.yo.bind(this));
							},
							yo: function (t) {
								if (t[af] - (this.wo || 0) >= 5000) {
									this.wo = t[af];
									this.ko();
								}
							},
							ko: function () {
								if (this.mo) {
									this.So();
									if (c.dn.ar()) {
										this.Eo();
									}
									this.mo = false;
								}
							},
							Co: function () {
								this.So();
								if (this.xo) {
									E(this.xo);
								}
								this.xo = _t(this.ko.bind(this), 5000);
							},
							So: function () {
								this.To();
								r.D.set(z, St.from(this.O).slice(-100));
								r.D.set(B, this.Do());
								r.D.set(D, St.from(this.po).slice(-30));
							},
							Do: function () {
								this.To();
								return St.from(this.bo[cf]()).slice(-10);
							},
							To: function () {
								var i = this;
								if (!this.O) {
									try {
										this.O = new Map(r.D.get(z));
									} catch (t) {
										this.O = new Map();
									}
								}
								if (!this.bo) {
									this.bo = new Map();
									try {
										r.D.get(B).forEach(function (t) {
											i.bo.set(t, 1);
										});
									} catch (t) { }
								}
								if (!this.po) {
									try {
										this.po = new Map(r.D.get(D));
									} catch (t) {
										this.po = new Map();
									}
								}
							},
							Mo: function (t, i, n, s, e) {
								this.To();
								i = i.replace(uf, "");
								this.po.delete(t);
								this.po.set(t, [i, n, s, e]);
								this.mo = true;
								this.Co();
							},
							Io: function (t) {
								this.To();
								this.bo.delete(t);
								this.O.delete(t);
								this.po.delete(t);
								this.mo = true;
								this.ko();
							},
							Ao: function (t, i, n, s, e, r, a) {
								this.To();
								this.O.delete(t);
								this.O.set(t, [i, n, s, e, r, a]);
								this.bo.delete(t);
								this.bo.set(t, 1);
								this.mo = true;
								this.Co();
							},
							cr: function () {
								var t =
									arguments[Tt] > 0 && arguments[0] !== undefined
										? arguments[0]
										: 10;
								this.To();
								var i = St.from(this.po);
								var n = [];
								var s = 0;
								for (var e = i[Tt] - 1; e >= 0; e--) {
									var r = (a = g(i[e], 2))[0];
									var a = a[1];
									try {
										var c = g(a, 4);
										var u = c[0];
										var o = c[1];
										var h = c[2];
										var f = c[3];
										var l = this.Lo(r);
										if (!l) {
											throw new Error(v.m);
										}
										n.push({
											id: r,
											url: u,
											poster: o,
											titleEN: h,
											titleJP: f,
											episode: l,
										});
										if (++s >= t) {
											break;
										}
									} catch (t) {
										this.po.delete(r);
										this.mo = true;
										this.Co();
									}
								}
								return n;
							},
							Lo: function (t) {
								this.To();
								var i = this.O.get(t);
								if (i) {
									try {
										var n = g(i, 6);
										return {
											eid: n[0],
											num: n[1],
											slug: n[2],
											lang: n[3],
											position: n[4],
											duration: n[5],
										};
									} catch (i) {
										this.O.delete(t);
										this.mo = true;
										this.Co();
									}
								}
								return null;
							},
							U: function (t, i) {
								var n = this.Lo(t);
								if (c.dn.ar()) {
									$.get(v.vt, {
										ani_id: t,
									}).done(function (t) {
										if (t[Y] === 200) {
											i(t[K]);
										} else if (n) {
											i(n);
										}
									});
								} else if (n) {
									i(n);
								}
							},
							Eo: function () {
								var i = this;
								var n = [];
								this.Do().forEach(function (t) {
									if ((t = i.Lo(t))) {
										n.push(t);
									}
								});
								if (n[Tt]) {
									$.post(v.dt, {
										watching: n,
									}).done(function () {
										i.bo[Ji]();
										i.mo = true;
										i.ko();
									});
								}
							},
						});
						var M = (n.do = {
							Ro: null,
							jo: new Map(),
							Bt: function () {
								// r.S.W(c.En.Qa, this.Xa.bind(this));
								// $(Gt).on(a.Z.X, this.Uo.bind(this));
								// $(Ht).on(v.v, this.Uo.bind(this));
							},
							Oo: function () {
								this.Ro = null;
								r.D.remove(x);
							},
							Xa: function () {
								if (c.dn.ar() && c.dn.Pa(c.ja.bh)) {
									this.Po();
								}
							},
							No: function (t) {
								if (this.Ro) {
									$.ajax(
										v.bt,
										h(
											{
												crossDomain: true,
												headers: {
													"Content-Type": v.yt,
													Authorization: of.concat(this.Ro.access_token),
												},
												type: v.gt,
											},
											t
										)
									);
								}
							},
							Fo: function (t, i) {
								this.No({
									data: (0, e.Ye)({
										query: v.wt,
										variables: {
											mediaId: t,
											score: i,
										},
									}),
								});
							},
							Bo: function (t, i) {
								var n;
								var s = this;
								if (t) {
									n =
										{
											1: v.St,
											2: v.Et,
											3: v.Ct,
											4: v.xt,
											5: v.Tt,
										}[i] || v.St;
									if (i > 0) {
										this.No({
											data: (0, e.Ye)({
												query: v.Dt,
												variables: {
													mediaId: t,
													status: n,
												},
											}),
										});
									} else {
										this.No({
											data: (0, e.Ye)({
												query: v.Dt,
												variables: {
													mediaId: t,
													status: v.xt,
												},
											}),
											success: function (t) {
												t = t[T].SaveMediaListEntry[S];
												s.No({
													data: (0, e.Ye)({
														query: v.Mt,
														variables: {
															id: t,
														},
													}),
												});
											},
										});
									}
								}
							},
							Uo: function () {
								var n = this;
								St.from(this.jo).forEach(function (t) {
									var i = (t = g(t, 2))[0];
									var t = t[1];
									n.No({
										data: (0, e.Ye)({
											query: v.It,
											variables: {
												mediaId: i,
												progress: t,
											},
										}),
									});
								});
								this.jo[Ji]();
							},
							Go: function (t, i) {
								if (t) {
									this.jo.set(t, i);
									if (this.xo) {
										E(this.xo);
									}
									this.xo = _t(this.Uo.bind(this), 5000);
								}
							},
							Po: function () {
								var i = this;
								if (!this.Ro) {
									function n() {
										$.post(v.ci, {
											action: v.ui,
										}).done(function (t) {
											u.pn.bn(t);
											if (t[Y] === 200) {
												r.D.set(x, (i.Ro = t[K]));
											} else {
												i.Oo();
											}
										});
									}
									try {
										this.Ro = r.D.get(x);
										if (
											!this.Ro ||
											this.Ro.expired_at < Math.floor(new Date()[ti]() / 1000)
										) {
											n();
										}
									} catch (t) {
										n();
									}
								}
							},
						});
						var k = r.k.B({
							G: function (s) {
								s.click(function (t) {
									t[Kt]();
									t = s.data(v._i);
									var i = s.closest(v.fi);
									p.Io(t);
									function n() {
										i.fadeOut(function () {
											i[P]();
											r.S.J(c.En.Za);
										});
									}
									if (c.dn.ar()) {
										$.post(v.li, {
											ani_id: t,
										}).done(function (t) {
											u.pn.bn(t);
											n();
										});
									} else {
										n();
									}
								});
							},
						});
						var m = r.k.B({
							G: function (t) {
								t.click(function () {
									var t = new Date()[ti]();
									$.post(hf.concat(t), {
										time: t,
									}).done(function (t) {
										u.pn.bn(t);
										if (t[Y] === 200) {
											_t(function () {
												return (0, e.ft)();
											}, 2000);
										}
									});
								});
							},
						});
						var j = r.k.B({
							G: function (t) {
								this.$o = t;
								this.qo = this.$o.data(v.vi);
								this.jn = this.$o.data(v._i);
								this.Ho = this.$o.data(v.di);
								this.zo = this.$o.data(v.bi);
								this.qa = this.$o.find(v.pi);
								this.ya = this.$o.find(v.mi);
								this.Vo = this.$o.find(v.ki);
								this.Ko = false;
								this.Yo = e.We.Dropdown.getOrCreateInstance(this.ya[0]);
								this.ya.mouseenter(this.Wo.bind(this));
								this.ya.click(this.Jo.bind(this));
								this.qa.on(v.yi, v.gi, this.Qo.bind(this));
								if (this.zo) {
									r.S.W(c.En.Qa, this.Xo.bind(this));
									this.Xo();
								}
							},
							Xo: function () {
								var i = this;
								if (c.dn.ar()) {
									if (!this.Zo) {
										this.Zo = true;
										$.get(v.wi, {
											ani_id: this.jn,
										}).done(function (t) {
											if (t[Y] === 200) {
												i.Ho = t[K];
												i.tc();
											}
										});
									}
								} else {
									this.tc();
								}
							},
							Jo: function (t) {
								if (c.dn.vn()) {
									t[ch]();
									this.Yo[I]();
								}
							},
							Qo: function (t) {
								t[Kt]();
								t = $(t[_]).data(v._i);
								this.Ho = t;
								this.tc();
								this.Yo[I]();
								M.Bo(this.qo, t);
								$.post(v.Si, {
									ani_id: this.jn,
									folder: t,
								}).done(function (t) {
									u.pn.bn(t);
								});
							},
							tc: function () {
								this.qa[Le]();
								var t = c.dn.xh();
								if (this.ya.data(v.Ei) && this.ya.data(v.Ci)) {
									this.ya.html(this.ya.data(this.Ho ? v.Ci : v.Ei));
								}
								if (this.Ho) {
									t.push({
										id: 0,
										name: v.xi,
										remove: true,
									});
								}
								for (var i = 0; i < t[Tt]; i++) {
									var n = $(v.Ti).attr(v.Di, t[i][S]);
									if (t[i][P]) {
										n.html(t[i][Et]);
									} else {
										n.text(t[i][Et]);
									}
									if (this.Ho === t[i][S]) {
										n.addClass(v.Mi);
										this.Vo.text(t[i][Et]);
									}
									this.qa.append(n);
								}
							},
							Wo: function (t) {
								if (!this.Ko) {
									this.Ko = true;
									this.tc();
								}
							},
						});
						var A = r.k.B({
							G: function (t) {
								this.ic = t.find(v.Ii);
								this.ic.click(this.ec.bind(this));
								this.sc();
							},
							ec: function (t) {
								t[Kt]();
								$.post(v.ci, {
									action: v.Ai,
								}).done(function (t) {
									u.pn.bn(t);
									if (t[Y] === 200) {
										(0, e.ft)();
										M.Oo();
									}
								});
							},
							sc: function () {
								var t = ff.exec(e.ct[Yt]);
								if (t) {
									$.post(v.ci, {
										action: v.Li,
										access_token: t[1],
									}).done(function (t) {
										u.pn.bn(t);
										if (t[Y] === 200) {
											(0, e.Wt)(e.ct[Yt].replace(Hi, ""));
										}
									});
								}
							},
						});
						n[G] = function () {
							M.Bt();
							p.Bt();
							j.V(v.Ri);
							k.V(v.ji);
							m.V(v.Ui);
							A.V(v.Oi);
						};
					},
					{
						13: 13,
						15: 15,
						2: 2,
						4: 4,
						7: 7,
					},
				],
				17: [
					function (t, i, n) {
						n.i = true;
						n[G] = undefined;
						var c = t(7);
						var r = t(2);
						var a = t(13);
						var s = t(18);
						var e = t(15);
						var u = t(4);
						var o = {
							o: lf,
							u: vf,
							_: df,
							l: gf,
							v: wf,
							p: yf,
							m: Lf,
							vt: Cf,
							dt: bf,
							bt: cr,
							kt: zf,
							yt: s0,
							gt: Bf,
							wt: Df,
							St: xf,
							Et: pf,
							Ct: Mf,
							xt: f2,
							Tt: kf,
							Dt: P0,
							Mt: tr,
							It: cu,
							ci: _i,
							ui: mf,
							_i: Is,
							fi: rs,
							li: U1,
							vi: es,
							di: ss,
							bi: jf,
							pi: Af,
							mi: qf,
							ki: Ui,
							yi: Nf,
							gi: Na,
							wi: Kc,
							Si: Hf,
							Ei: j0,
							Ci: Si,
							xi: Gf,
							Ti: Pf,
							Di: Sf,
							Mi: $h,
							Ii: bn,
							Ai: _f,
							Li: Tf,
							Ri: Uf,
							ji: If,
							Ui: Vf,
							Oi: Yf,
							Pi: Kf,
							Ni: Wf,
							Fi: Ef,
							Bi: $f,
							Gi: Of,
							$i: Zf,
							qi: Xf,
							Hi: Jf,
							zi: a0,
							Vi: Rf,
							Ki: Qf,
							Yi: Bt,
							Wi: Ff,
							Ji: t3,
							Qi: i3,
							Xi: n3,
							Zi: s3,
							te: S,
							ee: e3,
							se: zh,
							ne: r3,
							ae: a3,
							re: c3,
							he: u3,
							oe: qc,
							ce: nt,
							ue: o3,
							_e: h3,
							fe: f3,
							le: l3,
							ve: v3,
							de: d3,
							be: g3,
							pe: w3,
							me: y3,
							ke: L3,
							ye: rf,
							ge: C3,
							we: b3,
							Se: z3,
							Ee: B3,
							Ce: D3,
							xe: x3,
							Te: p3,
							De: M3,
							Me: k3,
							Ie: m3,
							Ae: j3,
							Le: La,
							Re: A3,
							je: m0,
							Ue: q3,
							Oe: N3,
							Pe: H3,
							Ne: G3,
							Fe: P3,
							Be: S3,
							Ge: _3,
							$e: T3,
							qe: U3,
							In: I3,
							An: V3,
							nc: Y3,
							ac: K3,
							rc: zt,
							hc: W3,
							oc: E3,
							cc: $3,
							uc: O3,
							_c: Z3,
						};
						var h = o.o;
						var d = o.u;
						var g = c.ct[Qr];
						var w = r.k.B(s.Ic[Ut], {
							Ac: s.Ic[Ut].Lc,
							G: function (t) {
								this.Rc = t;
								this.jn = this.Rc.jn;
								this.jc = this.Rc.jc;
								this.Uc = this.Rc.Uc;
								this.Ln = this.Rc.Ln;
								this.Oc = (0, c.$)(o._);
								this.Pc = [];
								this.Nc = this.Ln.find(o.l);
								this.Fc = this.Ln.find(o.v);
								this.Bc = this.Ln.find(o.p);
								this.Gc = this.Ln.find(o.m);
								this.$c = this.Ln.find(o.vt);
								this.qc = this.Ln.find(o.dt);
								this.Hc = this.qc.children(o.bt);
								this.Gc.click(this.zc.bind(this));
								this.Bc.click(this.Vc.bind(this));
								this.Fc.click(this.Kc.bind(this));
								this.Hc.click(this.Yc.bind(this));
								this.qc[I]();
								this.Wc();
							},
							Wc: function () {
								if (this.Rc.Jc) {
									this.Gc.html(o.kt).attr(o.yt, o.gt);
								} else {
									this.Gc.html(o.wt).attr(o.yt, o.St);
								}
								if (this.Gc[Tt]) {
									this.Gc.attr(o.Et, o.Ct);
									c.We.Tooltip.getOrCreateInstance(this.Gc[0]);
								}
							},
							Qc: function () {
								this.Oc[Le]();
								this.qc[P]();
								this.$c[gr]()[P]();
								this.Fc[gr]()[P]();
								this.Gc[gr]()[P]();
							},
							Lc: function (t) {
								this.Ac(t);
								this.Xc();
							},
							Zc: function (s) {
								this.Hc.each(function (t, i) {
									i = (0, c.$)(i);
									var n = s[i.data(o.xt)] || null;
									i.data(o.Tt, n);
									if (n) {
										i[V]();
									} else {
										i[I]();
									}
								});
								if (this.Hc.filter(o.Dt)[Tt] < 2) {
									this.Hc.removeClass(o.Mt).filter(o.Dt).addClass(o.Mt);
								}
								this.qc[V]();
								this.tu();
							},
							zc: function (t) {
								var i = this;
								t[Kt]();
								if (this.Rc.Jc) {
									this.Rc.iu(function () {
										i.Qc();
									});
								} else {
									this.eu(this.su(), function () {
										i.nu();
									});
								}
								c.We.Tooltip.getOrCreateInstance(this.Gc[0])[I]();
							},
							Vc: function (t) {
								var i = this;
								t[Kt]();
								if (!this.au) {
									this.au = (0, c.$)(o.It)
										.css(o.ci, o.ui)
										.css(o._i, o.ui)
										.css(o.fi, o.li)
										.css(o.vi, 0)
										.css(o.di, 0)
										.css(o.bi, Math.pow(9, 8))
										.css(o.pi, o.mi)
										.css(o.ki, o.yi)
										.css(o.gi, o.wi)
										.appendTo(Gt[Dt])
										.click(this.Vc.bind(this));
									this.ru = (0, c.$)(o.Si);
								}
								this.hu = !this.hu;
								if (this.hu) {
									this.au.fadeIn();
									this.ru.css(o.bi, o.Ei);
									this.Nc.css(o.bi, Math.pow(9, 9));
								} else {
									this.au.fadeOut(function () {
										i.Nc.removeAttr(o.Ci);
										i.ru.css(o.bi, "");
									});
								}
							},
							Yc: function (t) {
								t[Kt]();
								t = (0, c.$)(t[_]);
								this.ou(t);
								r.D.set(d, t.data(o.xt));
								this.cu(t);
							},
							ou: function (t) {
								if (!t.hasClass(o.Mt)) {
									this.Hc.removeClass(o.Mt);
									t.addClass(o.Mt);
								}
							},
							tu: function () {
								var t;
								var i = r.D.get(d) || e.dn.Pa(e.ja.hh);
								if (
									!(t = i
										? this.Hc.filter(o.Dt).filter(X3.concat(i, W)).first()
										: t) ||
									!t[Tt]
								) {
									t = this.Hc.filter(o.Dt).first();
								}
								this.ou(t);
							},
							uu: function () { },
							_u: function () { },
							Xc: function () {
								var t = this;
								var i = this.fu(o.xi, this.jc);
								this.lu(i);
								this.vu(i);
								this.du(i);
								this.eu(i, function () {
									t.tu();
								});
							},
							nu: function () {
								var t = this.bu();
								if (t[Tt]) {
									this.cu(t);
								}
							},
							cu: function (i) {
								var n = this;
								var s = this.su();
								var t = i.data(o.Tt);
								var e = J3.concat(this.Rc.pu).concat(t);
								c.$.post(R3.concat(e), {
									id: this.Rc.pu,
									episode_id: t,
								})
									.done(function (t) {
										if (t[Y] !== 200) {
											a.pn.bn(t);
										} else {
											n.Rc.mu(s.attr(o.Ti), i.data(o.xt), r.M.He(t[K]));
											n.Wc();
										}
									})
									.fail(function () {
										n.Rc.ku(o.Di);
									});
							},
							eu: function (t, i) {
								var n = this;
								this.lu(t);
								this.du(t);
								t = t.attr(o.Mi);
								var s = new URLSearchParams(g);
								s.set(o.Mi, t);
								s.set(o.Ii, J3.concat(t));
								c.$.get(Q3.concat(s[Vt]()))
									.done(function (t) {
										if (t[Y] !== 200) {
											n.Rc.ku(t[va]);
										} else {
											n.Zc((0, c.P)(r.M.He(t[K])));
											if (i) {
												i();
											}
										}
									})
									.fail(function () {
										n.Rc.ku(o.Ai);
									});
							},
							yu: function () {
								var i = this;
								var t = new URLSearchParams(g);
								t.set(o.Li, this.Rc.gu);
								t.set(o.Ii, J3.concat(this.Rc.gu));
								this.Oc.loading();
								c.$.get(F3.concat(t[Vt]()))
									.done(function (t) {
										if (t[Y] !== 200) {
											i.Rc.ku(t[va]);
										} else {
											i.Lc(t[K]);
										}
									})
									.fail(function () {
										i.Rc.ku(o.Ri);
									});
							},
						});
						var y = r.k.B({
							G: function (t) {
								var i = this;
								var n = (0, c.P)(r.M.N(t.data(o.ji)));
								this.gu = n.ani_id;
								this.pu = n[S];
								this.wu = n.ep_num;
								this.jc = n.ep_slug;
								this.Uc = n.ep_lang;
								this.Su = n.user;
								this.Jc = n.started;
								this.Eu = n[Va];
								this.Cu = n.creator_id === n.user[S];
								this.ar = n.is_logged;
								this.xu = n.media_url;
								this.Ln = t;
								this.Tu = this.Ln.find(o.Ui);
								this.Nc = this.Ln.find(o.l);
								this.Du = this.Ln.find(o.Oi);
								this.Mu = this.Ln.find(o.Pi);
								this.Iu = this.Ln.find(o.Ni);
								this.Au = new w(this);
								this.Lu = (0, c.$)(o.Fi);
								this.Ru = this.Ln.find(o.Bi);
								this.ju = this.Ln.find(o.Gi);
								this.Uu = this.Lu.find(o.$i);
								this.Ou = this.Lu.find(o.qi);
								this.Pu = this.Lu.find(o.Hi);
								this.Nu = this.Pu.find(o.zi);
								this.Fu = this.Pu.find(o.Vi);
								this.Bu = (0, c.$)(o.Ki);
								this.Gu = this.$u.bind(this);
								this.Ru.click(this.qu.bind(this));
								this.Nu.keyup(this.Hu.bind(this));
								this.Fu.click(this.zu.bind(this));
								this.Uu.click(function () {
									return i.Vu();
								});
								this.Ku = 0;
								this.Yu();
								this.Wu();
								this.Vu(true);
								this.Ju();
							},
							$u: function (t) {
								if (
									!!c.$.contains(this.ju[0], t[U]) ||
									!c.$.contains(this.Bu[0], t[U])
								) {
									t[Kt]();
									t[Cc]();
									this.Bu.removeClass(o.Mt);
									Gt.removeEventListener(o.Yi, this.Gu, true);
								}
							},
							qu: function (t) {
								t[Kt]();
								t[Cc]();
								if (this.Bu.hasClass(o.Mt)) {
									this.Bu.removeClass(o.Mt);
									Gt.removeEventListener(o.Yi, this.Gu, true);
								} else {
									this.Bu.addClass(o.Mt);
									Gt.addEventListener(o.Yi, this.Gu, true);
								}
							},
							Wu: function () {
								if (!this.Eu) {
									if (this.Jc) {
										this.Qu(this.wu, this.Uc, this.xu);
									}
									if (this.Cu) {
										this.Au.yu();
									}
								}
							},
							Yu: function () {
								var t = this;
								this.Xu = new WebSocket(h);
								this.Xu[t5] = this.Zu.bind(this);
								this.Xu[i5] = this.t_.bind(this);
								this.Xu[n5] = this.i_.bind(this);
								this.Xu[s5] = this.e_.bind(this);
								function i() {
									t.Xu[i5] = t.Xu[n5] = t.Xu[s5] = undefined;
									t.Xu[e5]();
								}
								(0, c.$)(Gt).one(u.Z.X, i);
								(0, c.$)(Ht).off(o.Wi).on(o.Wi, i);
							},
							Zu: function (t) {
								this.Ku = 0;
								this.s_(1, {
									room_id: this.pu,
									user: this.Su,
								});
							},
							t_: function (t) {
								try {
									var i = (0, c.P)(t[T]);
									switch (i.cmd) {
										case 1:
											this.Iu.text(i[T][sa]);
											this.n_(3, i[T].user);
											this.a_(i[T].user);
											break;
										case 2:
											this.Iu.text(i[T][sa]);
											this.n_(4, i[T].user);
											break;
										case 11:
											this.n_(2);
											break;
										case 8:
											this.a_(i[T].user);
											break;
										case 3:
											this.r_();
											break;
										case 4:
											this.Qu(i[T].num, i[T][f2], i[T][It]);
											break;
										case 10:
											(0, a.pn)(i[T][va]);
											break;
										case 7:
										case 6:
										case 5:
											this.h_(i.cmd, i);
											break;
										case 9:
											this.n_(1, i[T]);
											break;
										default:
											break;
									}
								} catch (t) { }
							},
							e_: function (t) {
								if (++this.Ku < 3) {
									this.Yu();
								} else {
									(0, a.pn)(o.Ji, a.gr.Sr);
								}
							},
							i_: function (t) { },
							Ur: function (t, i) {
								return this.s_(2, this.o_(t, i));
							},
							s_: function (t, i) {
								return (
									this.Xu[Vi] === 1 &&
									(this.Xu.send((0, c.Ye)(this.o_(t, i))), true)
								);
							},
							o_: function (t, i) {
								return {
									cmd: t,
									data: i,
								};
							},
							mu: function (t, i, n) {
								var s = this;
								this.Ur(10, {
									message: r5.concat(t, a5).concat(i, le),
								});
								this.Ur(4, {
									num: t,
									lang: i,
									url: n,
								});
								if (!this.Jc) {
									this.Jc = true;
									this.Ur(11);
								}
								if (this.Cu) {
									_t(function () {
										return s.a_();
									}, 3000);
									_t(function () {
										return s.a_();
									}, 5000);
								}
							},
							a_: function (t) {
								if (this.Cu && this.c_) {
									if (t) {
										this.Ur(5, {
											position: this.c_.getPosition(),
											toUser: t[S],
										});
									} else {
										this.Ur(5, {
											position: this.c_.getPosition(),
										});
									}
									if (this.c_.getState() === o.Qi) {
										this.Ur(6);
									} else {
										this.Ur(7);
									}
								}
							},
							iu: function (i) {
								var n = this;
								c.$.post(c5.concat(this.pu), {
									id: this.pu,
								}).done(function (t) {
									a.pn.bn(t);
									if (t[Y] === 200 && t[K]) {
										n.Eu = true;
										if (i) {
											i();
										}
										n.Ur(3);
									}
								});
							},
							h_: function (t, i) {
								if (this.c_ && !this.Cu) {
									switch (t) {
										case 7:
											if (this.c_.getState() === o.Qi) {
												this.c_[v3]();
												(0, a.pn)(o.Xi);
											}
											break;
										case 6:
											if (this.c_.getState() !== o.Qi) {
												this.c_[d3]();
												(0, a.pn)(o.Zi);
											}
											break;
										case 5:
											if (!i[T].toUser || i[T].toUser === this.Su[S]) {
												this.c_.seek(Math.max(0, i[T][rs] - 0.1));
											}
											break;
										default:
									}
								}
							},
							__: function () {
								var t = new Date()[ti]();
								if (!this.f_ || this.f_ + 3000 < t) {
									this.f_ = t;
									this.Ur(8, {
										user: this.Su,
									});
								}
							},
							r_: function () {
								var i = this;
								var t = new URLSearchParams(g);
								t.set(o.te, this.pu);
								t.set(o.Ii, this.pu);
								c.$.get(u5.concat(t[Vt]())).done(function (t) {
									if (t[Y] !== 200) {
										a.pn.bn(t);
									} else {
										try {
											i.c_[d3]();
										} catch (t) { }
										i.Tu.html(t[K]);
									}
								});
							},
							Qu: function (t, i, n) {
								var s = this;
								this.Mu.text(t);
								this.Du.removeClass(o.ee).addClass(i).html(o5.concat(i, h5));
								c.$.ajax(n, {
									headers: {
										"Content-Type": o.ne,
									},
								}).done(function (t) {
									if (t[Y] !== 200) {
										(0, a.pn)(o.ae, a.gr.Sr);
									} else {
										s.l_(t[K].sources);
									}
								});
							},
							l_: function (t) {
								var i;
								var n;
								var s = this;
								this.Tu[Le]();
								this.d_ = (0, c.$)(o.It).attr(o.te, o.re).appendTo(this.Tu);
								this.c_ = Ht.jwplayer(this.d_[0])
									.setup({
										sources: t,
										width: o.ui,
										height: o.ui,
										primary: o.he,
										hlshtml: true,
										preload: o.oe,
										autostart: true,
										key: o.ce,
										playbackRateControls: false,
									})
									.on(o.ue, function () {
										Gt.querySelectorAll(o._e).forEach(function (t) {
											t.addEventListener(
												o.fe,
												function (t) {
													return t[Cc]();
												},
												true
											);
										});
									});
								if (this.Cu) {
									this.c_
										.on(o.le, function (t) {
											s.Ur(5, {
												position: t[Ra],
											});
										})
										.on(o.ve, function (t) {
											s.Ur(5, {
												position: s.c_.getPosition(),
											});
											s.Ur(7);
										})
										.on(o.de, function (t) {
											s.Ur(6);
											s.Ur(5, {
												position: s.c_.getPosition(),
											});
										});
								} else {
									this.c_
										.once(o.ve, function () {
											_t(function () {
												return s.__();
											}, 1000);
											_t(function () {
												return s.__();
											}, 3000);
										})
										.on(o.be, function (t) {
											s.__();
										})
										.on(o.de, function (t) {
											s.__();
										})
										.on(o.ve, function (t) {
											s.__();
										});
									i = 0;
									n = p(function () {
										s.Tu.find(o.pe)[P]();
										if ((i += 150) >= 3000) {
											M(n);
										}
									}, 100);
								}
							},
							Hu: function (t) {
								if (this.ar) {
									if (t[Rt] === 13) {
										this.b_();
									}
								} else {
									(0, a.pn)(o.me, a.gr.Sr);
								}
							},
							zu: function (t) {
								t[Kt]();
								this.b_();
							},
							b_: function () {
								var t;
								var i = this;
								var n = this.Nu.val()[ot]();
								if (n === "") {
									this.Nu[as]();
								} else if (n[Tt] >= 1000) {
									(0, a.pn)(o.ke, a.gr.Sr);
								} else if (!this.p_) {
									this.p_ = true;
									t = `${this.pu}${n}`;
									c.$.post(f5.concat(t), {
										room_id: this.pu,
										content: n,
									})
										.done(function (t) {
											if (t[Y] !== 200) {
												a.pn.bn(t);
											} else {
												i.Ur(9, {
													content: t[K],
													user: i.Su,
												});
												i.Nu.val("");
											}
										})
										.always(function () {
											i.p_ = false;
											i.Nu[as]();
										});
								}
							},
							Vu: function (t) {
								var i = this;
								if (!this.Uu.data(o.ye)) {
									c.$.get(o.ge, {
										room_id: this.pu,
										last_id: this.m_,
									}).done(function (t) {
										if (!t[K].more) {
											i.Uu.text(o.we).data(o.ye, true);
										}
										i.m_ = t[K].last_id;
										t[K].messages.forEach(function (t) {
											i.n_(1, t, true);
										});
									});
									if (t) {
										this.k_();
									}
								}
							},
							k_: function () {
								this.Ou.animate({
									scrollTop: this.Ou[0][l5],
								});
							},
							n_: function (t, i, n) {
								function s(t) {
									return v5.concat(t, d5);
								}
								switch (t) {
									case 1:
										var e = (0, c.$)(o.Se)
											.data(o.Ee, i.user[S])
											.append(
												g5.concat(i.user.avatar_url, w5).concat(i.user[Et], $s)
											);
										var r = y5.concat(i[ga], d5);
										if (i.user[S] === this.Su[S]) {
											e.addClass(o.Ce).find(o.xe)[I]();
										}
										var a = null;
										if (
											(a = n ? this.Ou[rr]().first() : this.Ou[rr]().last()).data(
												o.Ee
											) === e.data(o.Ee)
										) {
											if (n) {
												a.find(o.xe).after(r);
											} else {
												a.append(r);
											}
										} else {
											e.find(o.xe).after(r);
											if (n) {
												e.prependTo(this.Ou);
											} else {
												e.appendTo(this.Ou);
											}
										}
										if (!n) {
											this.k_();
										}
										break;
									case 3:
										this.Ou.append(s(`${i[Et] || o.Te}${L5}`));
										this.k_();
										break;
									case 4:
										this.Ou.append(s(`${i[Et] || o.Te}${C5}`));
										this.k_();
										break;
									case 2:
										this.Ou.append(s(o.De));
										this.k_();
										break;
									default:
										break;
								}
							},
							ku: function (t) {
								var i = o.Me + o.Ie + o.Ae + o.Le;
								(i = (0, c.$)(i)).find(o.Re).text(t);
								this.Tu[Le]().append(i);
							},
							Ju: function () {
								var i;
								var n;
								var s = this;
								function t() {
									s.Lu.attr(o.Ci, "");
									i = s.Bu[Is]();
									n = s.Lu[Ra]()[ss];
									if (Ht[b5][_i] <= 768) {
										i = Math.round(Ht[b5][Is] / 2);
									}
								}
								function e() {
									var t = Ht[z5] - n + Ht[B5] - 10;
									var t = Math.min(i, t);
									s.Lu.css(o.je, t);
								}
								t();
								e();
								(0, c.$)(Ht)
									.off(o.Ue)
									.on(o.Ue, e)
									.off(o.Oe)
									.on(o.Oe, function () {
										t();
										e();
									});
							},
						});
						var L = r.k.B({
							G: function (t) {
								this.jr = t;
								this.y_ = t.find(o.Pe);
								this.g_ = t.find(o.Ne);
								this.w_ = t.find(o.Fe);
								this.S_ = t.find(o.Be);
								this.E_ = t.find(o.Ge);
								this.C_ = t.find(o.$e);
								this.x_ = t.find(o.qe);
								this.T_ = t.find(o.In);
								this.D_ = t.find(o.An);
								this.x_.click(this.M_.bind(this));
								this.C_.keyup(this.I_.bind(this));
							},
							I_: function (t) {
								var i = this.C_.val()[ot]();
								this.E_.text(i[Tt] ? i : this.C_.attr(o.nc));
							},
							M_: function (t) {
								t[Kt]();
								t = (0, c.$)(t[_]);
								this.x_.removeClass(o.Mt);
								t.addClass(o.Mt);
								this.D_.val(t.hasClass(o.ac) ? 1 : 0);
							},
							A_: function (t) {
								this.L_ = null;
								this.y_.attr(o.rc, t.user.avatar_url);
								this.g_.html(t.user[Et]);
								this.w_.attr(o.rc, t.anime[b2]);
								this.S_.css(o.hc, D5.concat(t.anime[b2], le));
								this.E_.html(t.anime[yi]);
								this.C_.val(t.anime[yi]).attr(o.nc, t.anime[yi]);
								this.T_.val(t.anime[S]);
							},
						});
						var C = r.k.B({
							G: function (t) {
								this.ao = t;
								this.R_ = false;
								this.ao.click(this.oo.bind(this));
							},
							oo: function (t) {
								var i = this;
								t[Kt]();
								if (!e.dn.vn() && !this.R_) {
									this.R_ = true;
									c.$.get(o.oc, {
										ani_id: this.ao.data(o.te),
									})
										.done(function (t) {
											var i;
											if (t[Y] !== 200) {
												a.pn.bn(t);
											} else {
												(i = (0, a.$a)(o.cc, function (t) {
													t.data(L.F, new L(t));
												}))
													.data(L.F)
													.A_(t[K]);
												c.We.Modal.getOrCreateInstance(i[0])[V]();
											}
										})
										.always(function () {
											i.R_ = false;
										});
								}
							},
						});
						n[G] = function () {
							y.V(o.uc);
							C.V(o._c);
						};
					},
					{
						13: 13,
						15: 15,
						18: 18,
						2: 2,
						4: 4,
						7: 7,
					},
				],
				18: [
					function (t, i, n) {
						// console.log(t);
						function e(t) {
							// console.log(t);
							return (e =
								H == typeof Symbol && tt == typeof Symbol[Xt]
									? function (t) {
										return typeof t;
									}
									: function (t) {
										if (
											t &&
											H == typeof Symbol &&
											t[Jt] === Symbol &&
											t !== Symbol[Ut]
										) {
											return tt;
										} else {
											return typeof t;
										}
									})(t);
						}
						n.i = true;
						n[G] = n.Ic = n.xn = undefined;
						var a = t(7);
						var r = t(2);
						var s = t(4);
						var c = t(15);
						var u = t(16);
						var o = t(13);
						var h = t(19);
						var f = t(10);
						var l = {
							o: x5,
							u: p5,
							_: M5,
							l: k5,
							v: m5,
							p: j5,
							m: A5,
							vt: q5,
							dt: N5,
							bt: H5,
							kt: G5,
							yt: P5,
							gt: S5,
							wt: _5,
							St: T5,
							Et: U5,
							Ct: I5,
							xt: V5,
							Tt: Y5,
							Dt: tr,
							Mt: s0,
							It: K5,
							ci: _c,
							ui: cu,
							_i: _i,
							fi: mf,
							li: Is,
							vi: rs,
							di: U1,
							bi: es,
							pi: ss,
							mi: jf,
							ki: Af,
							yi: qf,
							gi: Ui,
							wi: Nf,
							Si: Na,
							Ei: Kc,
							Ci: W5,
							xi: gf,
							Ti: Hf,
							Di: j0,
							Mi: E5,
							Ii: $5,
							Ai: O5,
							Li: Z5,
							Ri: Si,
							ji: X5,
							Ui: cr,
							Oi: q0,
							Pi: J5,
							Ni: R5,
							Fi: Q5,
							Bi: F5,
							Gi: hr,
							$i: a0,
							qi: t9,
							Hi: Wt,
							zi: i9,
							Vi: n9,
							Ki: J3,
							Yi: Et,
							Wi: V,
							Ji: s9,
							Qi: Ku,
							Xi: Ia,
							Zi: e9,
							te: r9,
							ee: a9,
							se: c9,
							ne: u9,
							ae: Pf,
							re: kf,
							he: o9,
							oe: h9,
							ce: f9,
							ue: O,
							_e: l9,
							fe: v9,
							le: Vf,
							ve: d9,
							de: g9,
							be: w9,
							pe: y9,
							me: L9,
							ke: Gc,
							ye: Ma,
							ge: Zc,
							we: C9,
							Se: b9,
							Ee: z9,
							Ce: B9,
							xe: D9,
							Te: x9,
							De: p9,
							Me: M9,
							Ie: k9,
							Ae: ei,
							Le: Bt,
							Re: ni,
							je: m9,
							Ue: j9,
							Oe: A9,
							Pe: q9,
							Ne: Yt,
							Fe: Gf,
							Be: N9,
							Ge: H9,
							$e: G9,
							qe: zt,
							In: P9,
							An: S9,
							nc: _9,
							ac: T9,
							rc: U9,
							hc: I9,
							oc: V9,
							cc: Y9,
							uc: S,
							_c: K9,
							j_: W9,
							U_: E9,
							O_: hi,
							P_: $9,
							N_: O9,
							F_: jc,
							G_: ka,
							q_: Z9,
							H_: X9,
							z_: Ic,
							V_: Vc,
							K_: A3,
							Y_: J9,
							W_: yi,
							J_: Z,
							Q_: ms,
							X_: R9,
							Z_: f2,
							tf: Q9,
							if: F9,
							ef: W2,
							sf: tl,
							nf: dt,
							af: il,
							rf: nl,
							hf: sl,
							cf: el,
							uf: rl,
							_f: al,
							ff: cl,
							lf: P0,
							vf: k3,
							df: m3,
							bf: j3,
							pf: La,
							mf: ul,
							kf: Mc,
							yf: Ac,
							gf: kc,
							wf: ol,
							Sf: hl,
							Ef: it,
							Cf: nt,
							xf: If,
							Tf: fl,
							Df: ll,
							Mf: vl,
							If: dl,
							Af: gl,
							Lf: wl,
							Rf: yl,
							jf: Ll,
							Uf: su,
							Of: Cl,
							Pf: bl,
							Nf: zl,
							Ff: Bl,
							Bf: Dl,
							Gf: I0,
							$f: xl,
							qf: Tf,
							Hf: bn,
							zf: Uf,
							Vf: pl,
							Kf: $h,
							Yf: Ml,
							Wf: kl,
							Jf: Sf,
							Qf: qc,
							Xf: ml,
							Zf: jl,
							t0: Al,
							i0: ql,
						};
						var v = 66;
						var d = 78;
						var g = 77;
						var w = 74;
						var y = 76;
						var L = 83;
						var C = 32;
						var b = {
							e0: l.o,
							s0: l.u,
							n0: l._,
							a0: l.l,
							r0: l.v,
							h0: l.p,
							o0: l.m,
							Cn: l.vt,
							c0: l.dt,
						};
						var z = (n.xn = {
							u0: l.bt,
							_0: l.kt,
							f0: l.yt,
							Cn: l.vt,
							l0: l.gt,
							v0: l.wt,
							d0: l.St,
							b0: l.Et,
							p0: l.Ct,
						});
						var B = l.xt;
						var D = l.Tt;
						var x = a.ct[Qr];
						var p = r.k.B({
							Tr: function () { },
							m0: function () { },
							G: function (t, i, n, s) {
								var e = this;
								this.Qn = t;
								this.k0 = i;
								this.Rn = n;
								this.Na = undefined;
								this.da = a.We.Tooltip.getOrCreateInstance(t[0]);
								this.y0 = [];
								if (this.Rn) {
									this.Na = c.dn.Pa(this.k0);
								}
								if (this.Na === undefined) {
									this.Na = s;
								}
								this.Qn.click(this.Jo.bind(this)).mouseleave(function () {
									return e.da[I]();
								});
								this.Tr();
								this.g0();
							},
							w0: function (t) {
								this.y0.push(t);
							},
							Jo: function (t) {
								this.Na = this.Na ? 0 : 1;
								if (this.Rn) {
									c.dn.Ga(this.k0, this.Na);
								}
								this.y0.forEach(function (t) {
									return t();
								});
								this.g0();
								this.da[V]();
							},
							g0: function () {
								if (this.Na) {
									this.Qn.addClass(l.Dt);
								} else {
									this.Qn.removeClass(l.Dt);
								}
								this.Qn.attr(l.Mt, `${this.Na ? l.It : l.ci}`);
								this.m0();
							},
						});
						var M = r.k.B(p[Ut], {
							Tr: function () {
								this.S0 = (0, a.$)(l.ui)
									.css(l._i, l.fi)
									.css(l.li, l.fi)
									.css(l.vi, l.di)
									.css(l.bi, 0)
									.css(l.pi, 0)
									.css(l.mi, Math.pow(9, 8))
									.css(l.ki, l.yi)
									.css(l.gi, l.wi)
									.css(l.Si, l.Ei)
									.appendTo((0, a.$)(l.Ci))
									.click(this.Jo.bind(this));
								this.Nc = (0, a.$)(l.xi);
								this.ru = (0, a.$)(l.Ti);
							},
							m0: function () {
								var t;
								var i;
								var n = this;
								if (this.Na) {
									this.S0.fadeIn();
									this.ru.css(l.mi, l.Di);
									t = this.Nc[0][Nl]();
									this.Nc[gr]().css(l.li, t[Is]);
									this.Nc.data(l.Mi, t)
										.css(l.mi, Math.pow(9, 9))
										.css(l.vi, l.di)
										.css(l.Ii, 0)
										.css(l._i, t[_i])
										.css(l.li, t[Is])
										.css(l.bi, t[wn])
										.css(l.pi, t[r1])
										.css(l.Ai, l.Li);
									_t(function () {
										n.Nc.css(l.bi, Hl.concat(t[_i], Gl)).css(
											l.pi,
											Pl.concat(t[Is], Gl)
										);
									}, 50);
								} else if ((i = this.Nc.data(l.Mi))) {
									this.Nc.css(l.bi, i[wn]).css(l.pi, i[r1]);
									_t(function () {
										n.ru.css(l.mi, "");
										n.Nc.removeAttr(l.Ri);
										_t(function () {
											n.Nc[gr]().removeAttr(l.Ri);
										}, 300);
									}, 200);
									this.S0.fadeOut();
								}
							},
						});
						var k = r.k.B(p[Ut], {
							Tr: function () {
								this.E0 = (0, a.$)(l.ji);
								this.Un = this.Qn.find(l.Ui);
							},
							m0: function () {
								if (this.Na) {
									this.E0.css(l.Oi, l.Pi).css(l.Ni, 0).css(l._i, 0);
									this.Un.text(l.Fi);
								} else {
									this.E0.attr(l.Ri, "");
									this.Un.text(l.Bi);
								}
							},
						});
						var m = r.k.B({
							G: function (t) {
								this.$o = t;
								this.ya = t.find(l.Gi);
								this.Ar = this.$o.find(l.$i);
								this.C0 = null;
								this.x0 = null;
								this.Qr = t.find(l.qi);
								this.T0 = 0;
								this.D0 = a.We.Dropdown.getOrCreateInstance(this.ya[0]);
								this.M0 = Ht[lc] <= 1024;
								if (this.M0) {
									this.I0();
								} else {
									this.ya.click(this.Ia.bind(this));
									this.Qr.click(this.Pr.bind(this));
									this.Ar.focus(this.A0.bind(this))
										.change(this.L0.bind(this))
										.each(function (t, i) {
											return (0, a.$)(i).data(l.Hi, 0);
										});
								}
							},
							Ia: function (t) {
								if (c.dn.vn()) {
									t[ch]();
									this.D0[I]();
								}
							},
							A0: function (t) {
								this.C0 = (0, a.$)(t[_]);
							},
							L0: function (t) {
								var i = (0, a.$)(t[_]);
								t = i.val()[ot]();
								if ((t = Sl.exec(t))) {
									t =
										Math.min(5, t[1] || 0) * 3600 +
										Math.min(60, t[2]) * 60 +
										Math.min(60, t[3]);
									t = Math.min(this.R0, t);
									i.val(this._r(t)).data(l.Hi, t);
								} else {
									i.val("").data(l.Hi, 0);
								}
								for (var n = 0; n < this.Ar[Tt] - 1; n++) {
									var s = (0, a.$)(this.Ar[n]);
									var e = (0, a.$)(this.Ar[n + 1]);
									if (
										s.data(l.Hi) &&
										e.data(l.Hi) &&
										s.data(l.Hi) > e.data(l.Hi)
									) {
										(i[0] === s[0] ? e : s).val("").data(l.Hi, 0);
									}
								}
							},
							j0: function () {
								var t = null;
								for (var i = 0; i < this.Ar[Tt] - 1; i += 2) {
									var n = (0, a.$)(this.Ar[i]).val();
									var s = (0, a.$)(this.Ar[i + 1]).val();
									if (
										(n !== "" && s === "") ||
										(n === "" && s !== "") ||
										(n !== "" && n === s)
									) {
										(0, o.pn)(l.zi, o.gr.Sr);
										t = false;
										break;
									}
									if (t === null && n && s) {
										t = true;
									}
								}
								if (t !== null) {
									return t || false;
								} else {
									(0, o.pn)(l.Vi, o.gr.Sr);
									return false;
								}
							},
							Pr: function () {
								var s;
								var e;
								if (this.j0()) {
									s = {
										episode_id: this.x0,
									};
									e = l.Ki;
									this.Ar.each(function (t, i) {
										var n = (i = (0, a.$)(i)).data(l.Hi) || "";
										s[i.attr(l.Yi)] = n;
										e += `${n}`;
									});
									a.$.post(_l.concat(e), s).done(function (t) {
										o.pn.bn(t);
									});
								}
							},
							U0: function (t, i) {
								if (!this.M0) {
									this.x0 = t;
									this.R0 = Math.floor(i[k2]);
									this.$o[V]();
								}
							},
							I0: function () {
								this.D0[I]();
								this.$o[I]();
								this.Ar.val("").data(l.Hi, "");
							},
							O0: function (t) {
								if (this.ya.hasClass(l.Wi)) {
									if (this.C0) {
										t = Math.floor(t[Ra]);
										this.C0.val(this._r(t)).trigger(l.Qi);
									} else {
										(0, o.pn)(l.Ji, o.gr.Sr);
									}
								}
							},
							_r: function (t) {
								return [
									Math.floor(t / 3600),
									Math.floor((t % 3600) / 60),
									Math.floor(t % 60),
								]
									.map(function (t) {
										return oc.concat(t).slice(-2);
									})
									.join(l.Xi);
							},
						});
						var j = r.k.B(o.wr[Ut], {
							P0: function (t) {
								this.N0 = t;
							},
							Tr: function () {
								this.F0 = this.jr.find(l.Zi);
								this.B0 = (0, a.$)(l.te).appendTo(this.ns);
								this.G0 = (0, a.$)(l.ee).appendTo(this.ns);
								this.$0 = a.We.Modal.getOrCreateInstance(this.jr[0]);
								this.q0 = {};
								this.jr.on(l.se, this.H0.bind(this));
							},
							Dr: function () {
								var t = this;
								this.q0[this.B0.val()] = 1;
								_t(function () {
									t.$0[I]();
									t.Cs();
								}, 2000);
							},
							H0: function (t) {
								this.$r();
								var i = this.N0.su();
								var n = this.N0.bu();
								if (i && i[Tt] && n && n[Tt]) {
									this.F0.text(i.attr(l.ae));
									this.B0.val(n.data(l.re));
									this.G0.val(n.data(l.he));
								} else {
									(0, o.pn)(l.ne, o.gr.Sr);
									t[Kt]();
									this.$0[I]();
								}
							},
							qr: function () {
								var t;
								if (this.q0[this.B0.val()]) {
									this.$r();
									this.Gr([l.oe], o.gr.Sr);
									return false;
								} else {
									return (
										typeof (t = this.Hr()[1])[l.ce] === l.ue ||
										t[l.ce] !== "" ||
										t[va][ot]() !== "" ||
										((0, o.pn)(l._e, o.gr.Sr), false)
									);
								}
							},
						});
						var A = (n.Ic = r.k.B({
							G: function (t, i) {
								this.z0 = t;
								this.jn = this.z0.jn;
								this.V0 = this.z0.V0;
								this.K0 = this.z0.K0;
								this.jc = this.z0.jc;
								this.Uc = this.z0.Uc;
								this.Ln = i;
								this.Nc = i.find(l.xi);
								this.Y0 = i.find(l.fe);
								this.Tu = this.Nc.find(l.le);
								this.Gc = this.Nc.find(l.ve);
								this.Fc = this.Y0.find(l.de);
								this.Oc = i.find(l.be);
								this.qc = i.find(l.pe);
								this.W0 = (0, a.$)(l.me);
								this.J0 = this.W0.find(l.ke);
								this.Q0 = this.W0.find(l.ye);
								this.X0 = this.W0.find(l.ge);
								this.Gc.click(this.Z0.bind(this));
								this.Fc.click(this.Kc.bind(this));
								this.J0.click(this.tl.bind(this));
								this.Q0.click(this.il.bind(this));
								(0, a.$)(Ht).off(l.we).on(l.we, this.sl.bind(this));
							},
							Lc: function (t) {
								var i = this;
								this.Oc.html(t).activate();
								this.nl = this.Oc.find(l.Se);
								this.al = this.Oc.find(l.Ee);
								this.Pc = this.Oc.find(l.Ce);
								this.rl = this.Oc.find(l.xe);
								this.hl = this.Oc.find(l.Te);
								this.ol = this.Oc.find(l.De);
								this.cl = this.Oc.find(l.Me);
								this.ul = this.Oc.find(l.Ie);
								this._l = this.Oc.find(l.Ae);
								this.fl = this._l.find(l.$i);
								this.cl.click(this.ll.bind(this));
								this.ul.click(this.vl.bind(this));
								this.hl.click(this.dl.bind(this));
								this.ol.click(this.bl.bind(this));
								this._l.submit(this.pl.bind(this));
								this.fl
									.focus(function (t) {
										return i.fl[cs]();
									})
									.keyup(this.ml.bind(this));
								this.nl.on(l.Le, l.Re, this.kl.bind(this));
								this.uu();
								this.yl();
								this.gl("");
								this.wl(this.Sl());
							},
							Zc: function (t) {
								this.qc.html(t).activate();
								this.El = this.qc.find(l.je);
								this.Cl = this.qc.find(l.Ue);
								this.Hc = this.qc.find(l.Oe);
								this.Hc.click(this.Yc.bind(this));
								this.El.click(this.xl.bind(this));
								this.tu();
								if (this.bu()[Tt]) {
									this.Nc.addClass(l.Pe);
								}
								t = c.dn.Pa(c.ja.dh);
								this.Tl(t === undefined || t);
							},
							uu: function () {
								var n = this;
								this.Pc.each(function (t, i) {
									(i = (0, a.$)(i)).attr(l.Ne, `${n.V0}${Tl}${i.attr(l.Fe)}`);
								});
							},
							Dl: function (n) {
								n = new URL(n);
								new URLSearchParams(x).forEach(function (t, i) {
									n[ft].set(i, t);
								});
								if (this.Ml || this.z0.Il()) {
									n[ft].set(l.Be, l.Ge);
								}
								n = n[Vt]();
								this.Tu[rr]().not(l.$e)[P]();
								var t = this.Tu.find(l.$e);
								if (t[Tt]) {
									t.attr(l.qe, n);
								} else {
									t = (0, a.$)(l.In)
										.attr(l.qe, n)
										.attr(l.An, l.nc)
										.attr(l.ac, l.rc)
										.attr(l.hc, l.oc)
										.attr(l.cc, l.oc)
										.css(l._i, l.fi)
										.css(l.li, l.fi)
										.css(l.Oi, l.Pi);
									this.Tu.html(t);
								}
							},
							il: function (t) {
								t[Kt]();
								t = (0, a.$)(t[_]);
								this.Al(t.data(l.uc));
								this.Ll(t.data(l.uc) === l._c ? null : this.su());
							},
							tl: function (t) {
								t[Kt]();
								this.Tl(!c.dn.Pa(c.ja.dh));
							},
							Rl: function (t, i) {
								(i = i || {}).cmd = t;
								if ((t = this.Tu.find(l.$e))[Tt]) {
									t[0][Ul].postMessage(JSON.stringify(i), l.j_);
								}
							},
							Kc: function (t) {
								t[Kt]();
								if ((0, a.$)(t[_]).hasClass(l.U_)) {
									this.jl(-1);
								} else {
									this.jl(1);
								}
							},
							Z0: function (t) {
								t[Kt]();
								if ((t = this.bu())[Tt]) {
									this.Ul();
									this.cu(t);
								}
							},
							xl: function (t) {
								if (
									t.originalEvent &&
									((t = (0, a.$)(t[_]).data(l.uc)),
										this.Cl.filter(ac.concat(t, W)).find(l.Oe)[Tt])
								) {
									r.T.set(B, t, {
										expires: 1,
									});
									this.Ol(t);
									this.Ul();
									this.nu();
									this.Pl();
								}
							},
							Yc: function (t) {
								t[Kt]();
								var i = (t = (0, a.$)(t[_])).data(l.he);
								var n = {
									expires: 1,
								};
								r.T.set(D, i, n);
								this.ou(t);
								this.Ul();
								this.nu();
								this.Pl();
							},
							Pl: function () {
								var n = this;
								(0, a.$)(Gt).one(Il.concat(b.s0), function () {
									var t = u.ur.Lo(n.jn);
									var i = n.su();
									if (
										t &&
										`${t.num}` === i.attr(l.ae) &&
										`${t.slug}` === i.attr(l.Fe)
									) {
										n.z0.Rl(z.Cn, {
											value: t[rs],
										});
									}
								});
							},
							sl: function (t) {
								var i = this;
								var n = new URLSearchParams(a.ct[Vl].replace(l.O_, "")).get(l.P_);
								if (n && n !== this.jc) {
									this.jc = n;
									this.Xc(function () {
										i.nu();
									});
								}
							},
							kl: function (t) {
								var i = this;
								t[Kt]();
								t = (0, a.$)(t[_]);
								this.eu(t, function () {
									i.Ul();
									i.nu();
								});
								if (Ht[lc] <= 768) {
									this.Tu.scrollFocus();
								}
							},
							pl: function (t) {
								t[Kt]();
							},
							ml: function (t) {
								var i = this;
								var n = t[Rt] === 13;
								if (this.Nl) {
									E(this.Nl);
								}
								this.Nl = _t(function () {
									var t = (t = i.fl.val()[ot]()).replace(Yl, "");
									i.fl.val(t);
									if (i.Fl) {
										i.Fl.removeClass(l.N_);
										i.Fl = null;
									}
									if ((t = i.fu(l.ae, t, false))) {
										i.Fl = t.addClass(l.N_);
										if (n) {
											i.eu(t, function () {
												i.nu();
											});
										} else {
											i.lu(t);
											i.vu(t);
										}
									}
								}, 150);
							},
							dl: function (t) {
								t[Kt]();
								t = (0, a.$)(t[_]);
								this.Bl(t.data(l.Hi));
							},
							bl: function (t) {
								t[Kt]();
								if (
									(t = (0, a.$)(t[_]).hasClass(l.F_)
										? this.hl.filter(l.G_)[jc]()
										: this.hl.filter(l.G_).prev()) &&
									t[Tt]
								) {
									this.Bl(t.data(l.Hi));
								}
							},
							ll: function (t) {
								t[Kt]();
								(t = (0, a.$)(t[_])).toggleClass(l.Dt);
								if (!this.cl.filter(l.G_)[Tt]) {
									this.cl.not(t).addClass(l.Dt);
								}
								var i = this.cl.filter(l.q_);
								var n = this.cl.filter(l.H_);
								var s = "";
								if (i.hasClass(l.Dt) && !n.hasClass(l.Dt)) {
									s = l.z_;
								} else if (!i.hasClass(l.Dt) && n.hasClass(l.Dt)) {
									s = l.V_;
								}
								(i = t.closest(l.K_)).attr(
									l.Mt,
									Kl.concat(s === "" ? l.Y_ : s, Wl)
								);
								a.We.Tooltip.getOrCreateInstance(i[0])[V]();
								this.Gl(s);
								this.gl(s);
							},
							vl: function (t) {
								t[Kt]();
								t = this.ul.hasClass(l.Dt) ? l.J_ : l.W_;
								this.Sl(t);
								this.wl(t);
							},
							cu: function (t) {
								this.z0.cu(t);
							},
							Al: function (t) {
								if (!(t = this.Q0.filter(ac.concat(t, W))).hasClass(l.Dt)) {
									this.Q0.removeClass(l.Dt);
									t.addClass(l.Dt);
								}
							},
							Tl: function (t) {
								c.dn.Ga(c.ja.dh, t ? 1 : 0);
								if (t) {
									this.J0.removeClass(l.ci);
									this.Q0[V]();
									this.X0.slideDown(l.Q_);
									this.Ll(this.su());
								} else {
									this.J0.addClass(l.ci);
									this.Q0[I]();
									this.X0.slideUp(l.Q_);
								}
							},
							Ll: function () {
								var t;
								var i;
								var n;
								var s =
									arguments[Tt] > 0 && arguments[0] !== undefined
										? arguments[0]
										: null;
								if (c.dn.Pa(c.ja.dh)) {
									n = this.W0.data(l.uc);
									t = new URL(this.K0);
									if (s) {
										i = this.bu().closest(l.X_).data(l.uc);
										s = s.attr(l.Fe);
										i = El.test(i) ? l.V_ : l.z_;
										n = `${n}${l.Hf}${s}${l.Hf}${i}`;
										t[ft].set(l.P_, s);
										t[ft].set(l.Z_, i);
										this.Al(l.tf);
										this.Q0.find(l.if).text(i);
									}
									if (e(t) !== l.ef) {
										t = t[Vt]();
									}
									this.$l(n, t);
								}
							},
							$l: function (t, i) {
								if (this.ql !== t) {
									this.ql = t;
									f.xs.mn({
										identifier: t,
										url: i,
									});
								}
							},
							Hl: function (t, i) {
								var n;
								var s;
								if (this.ql !== t) {
									this.ql = t;
									if (new URL(i)[fs].indexOf(l.Xi) > 0) {
										i = i.replace(uf, l.sf);
									}
									Ht.disqus_config = function () {
										this[mc][wa] = t;
										this[mc][It] = i;
									};
									n = function () {
										Ht.DISQUS.reset({
											reload: true,
											config: Ht.disqus_config,
										});
									};
									if (e(Ht.DISQUS) === l.ue) {
										(s = Gt.createElement(l.nf))[zt] = $l.concat(
											this.W0.data(l.af),
											Ol
										);
										s.setAttribute(l.rf, +new Date());
										s[$i] = n;
										Gt[Oi].appendChild(s);
									} else {
										n();
									}
								}
							},
							yl: function () {
								var s = this;
								this.zl = [];
								this.al.each(function (t, i) {
									var n = (i = (0, a.$)(i)).data(l.hf);
									s.zl.push({
										Vl: s.hl.filter(ra.concat(n, W)),
										Ln: i,
										Pc: i.find(l.Re),
									});
								});
							},
							jl: function (t) {
								var i = this;
								var n = this.su();
								if (!((n = this.Kl.index(n) + t) < 0)) {
									if ((t = this.Kl.eq(n)) && t[Tt]) {
										this.eu(t, function () {
											i.nu();
										});
									}
								}
							},
							Ul: function () {
								var t = this;
								this.Ml = true;
								_t(function () {
									t.Ml = false;
								}, 3000);
							},
							eu: function (t, i) {
								var n = this;
								this.lu(t);
								this.du(t);
								this._u(t);
								this.Tu.find(l.cf)[P]();
								this.z0.eu(t, function () {
									n.tu();
									if (i) {
										i();
									}
								});
								this.Q0.find(l.uf).text(t.attr(l.ae));
								this.Q0.find(l.if).text("");
							},
							nu: function () {
								var t = this.bu();
								if (t[Tt]) {
									this.cu(t);
								} else {
									this.ku(l._f);
								}
							},
							Xc: function (t) {
								var i = this.fu(l.Fe, this.jc);
								this.vu(i);
								this.eu(i, t);
							},
							tu: function () {
								var t;
								var i = this;
								if (this.Uc) {
									t = this.Uc;
									_t(function () {
										i.Uc = null;
									}, 3000);
								} else {
									t = r.T.get(B) || this.Gl();
								}
								this.Ol(t);
							},
							Ol: function (t) {
								var i;
								var n = r.T.get(D);
								if (
									!(i =
										!t ||
											((i = n
												? this.Cl.filter(ac.concat(t, W))
													.find(Zl.concat(n, W))
													.first()
												: i) &&
												i[Tt])
											? i
											: this.Cl.filter(ac.concat(t, W)).find(l.Oe).first()) ||
									!i[Tt]
								) {
									if (n) {
										i = this.Cl.find(Zl.concat(n, W)).first();
									}
								}
								if (!i || !i[Tt]) {
									i = this.Hc.first();
								}
								this.ou(i);
							},
							ou: function (t) {
								if (!t.hasClass(l.Dt)) {
									this.Hc.removeClass(l.Dt);
									t.addClass(l.Dt);
								}
								t = t.closest(l.X_).data(l.uc);
								this.El.filter(ac.concat(t, W))[Bt]();
								this.Ll(this.su());
							},
							du: function (t) {
								t[V]();
								if (!t.hasClass(l.Dt)) {
									this.Pc.removeClass(l.Dt);
									t.addClass(l.Dt);
								}
								if (!(t = t.closest(l.ff)).is(l.lf)) {
									this.al[I]();
									t[V]();
								}
							},
							_u: function (t) {
								s.lt.ii(t.attr(l.Ne));
							},
							su: function () {
								if (this.Pc) {
									for (var t = 0; t < this.Pc[Tt]; t++) {
										if (this.Pc[t][Xl].contains(l.Dt)) {
											return (0, a.$)(this.Pc[t]);
										}
									}
								}
								return null;
							},
							bu: function () {
								try {
									return this.Hc.filter(l.G_);
								} catch (t) {
									return null;
								}
							},
							Yl: function () {
								var t = this;
								var i = u.ur.Lo(this.jn);
								if (
									!!i &&
									(!this.jc || this.jc === i.slug) &&
									(!this.Uc || this.Uc === i[f2])
								) {
									var n = this.su();
									if (
										this.Pc &&
										(!n || n.attr(l.ae) !== `${i.num}`) &&
										(n =
											this.fu(l.Fe, i.slug, false) || this.fu(l.ae, i.num, false))
									) {
										this.du(n);
										this.eu(n, function () {
											t.Ol(i[f2]);
										});
										return true;
									}
								}
								return false;
							},
							vu: function (t) {
								var i = t.closest(l.ff);
								t = t[Ra]()[ss] + i[ec]() - i[Ra]()[ss] - t[Jl]();
								i.animate({
									scrollTop: t,
									duration: 150,
								});
							},
							ku: function (t) {
								var i = l.vf + l.df + l.bf + l.pf;
								(i = (0, a.$)(i)).find(l.K_).text(t);
								this.Tu[Le]().append(i);
							},
							fu: function (t, i) {
								var n =
									!(arguments[Tt] > 2) ||
									arguments[2] === undefined ||
									arguments[2];
								var s = null;
								for (var e = n ? this.Pc : this.Kl, r = 0; r < e[Tt]; r++) {
									if (e[r].getAttribute(t) === i) {
										s = (0, a.$)(e[r]);
										break;
									}
								}
								return (s = !s && n ? this.Pc.first() : s);
							},
							lu: function (t) {
								t = t.closest(l.ff).data(l.hf);
								this.Bl(t);
							},
							wl: function (t) {
								if (t === l.W_ || (t === "" && this.Pc[Tt] <= 30)) {
									this.ul.addClass(l.Dt);
									this.nl.addClass(l.mf);
								} else {
									this.ul.removeClass(l.Dt);
									this.nl.removeClass(l.mf);
								}
							},
							Bl: function (i) {
								var t = this.hl.filter(ra.concat(i, W));
								this.hl.removeClass(l.Dt);
								t.addClass(l.Dt);
								this.rl.text(t[Ei]()).data(l.Hi, i);
								if (t.prev()[Tt]) {
									this.ol.filter(l.kf).removeClass(l.yf);
								} else {
									this.ol.filter(l.kf).addClass(l.yf);
								}
								if (t[jc]()[Tt]) {
									this.ol.filter(l.gf).removeClass(l.yf);
								} else {
									this.ol.filter(l.gf).addClass(l.yf);
								}
								this.zl.forEach(function (t) {
									if (t.Vl.data(l.Hi) === i) {
										t.Ln[V]();
									} else {
										t.Ln[I]();
									}
								});
							},
							gl: function (t) {
								var i = this.cl.filter(l.q_);
								var n = this.cl.filter(l.H_);
								(t === l.z_
									? (n.removeClass(l.Dt), i)
									: (t === l.V_ ? i.removeClass(l.Dt) : i.addClass(l.Dt), n)
								).addClass(l.Dt);
								if (t === "") {
									this.Kl = this.Pc.attr(l.Dt, 1)[V]();
								} else {
									var s = t === l.V_ ? 2 : 1;
									this.Kl = this.Pc.filter(function (t, i) {
										i = (0, a.$)(i);
										var n = parseInt(i.attr(l.wf), 10) & s;
										(n ? i[V]() : i[I]()).attr(l.Dt, n ? 1 : 0);
										return n;
									});
									if (!this.Kl[Tt]) {
										this.gl("");
										return;
									}
								}
								this.Wl();
							},
							Wl: function () {
								var t = this.rl.data(l.Hi);
								this.zl.forEach(function (t) {
									if (t.Pc.filter(l.Sf)[Tt]) {
										t.Vl.attr(l.Dt, l.Cf)[V]();
									} else {
										t.Vl.attr(l.Dt, l.Ef)[I]();
									}
								});
								var i = false;
								for (var n = this.hl[Tt]; n >= 0; n--) {
									var s = (0, a.$)(this.hl[n]);
									if (i || s.data(l.Hi) !== t || s.attr(l.Dt) === l.Cf) {
										if (i && s.attr(l.Dt) === l.Cf) {
											this.Bl(s.data(l.Hi));
											break;
										}
									} else {
										i = true;
									}
								}
							},
							Gl: function (t) {
								if (arguments[Tt] > 0) {
									c.dn.Ga(c.ja.hh, t);
								}
								return c.dn.Pa(c.ja.hh);
							},
							Sl: function (t) {
								if (arguments[Tt] > 0) {
									c.dn.Ga(c.ja.lh, t);
								}
								return c.dn.Pa(c.ja.lh);
							},
						}));
						var q = r.k.B({
							G: function (t) {
								var i = this;
								var n = (0, a.P)(r.M.N(t.data(l.xf)));
								this.qo = n.alid;
								this.jn = n[S];
								this.V0 = n[It];
								this.K0 = n.url_short;
								var s = new URLSearchParams(a.ct[Vl].replace(l.O_, ""));
								this.jc = s.get(l.P_) || n.ep_slug;
								this.Uc = s.get(l.Z_) || n.ep_lang;
								this.Ln = t;
								this.Jl = t.find(l.Tf);
								this.Ql = t.find(l.Df);
								this.N0 = new A(this, t);
								new M(this.N0.Y0.find(l.Mf));
								new k(this.N0.Y0.find(l.If));
								this.Xl = new p(this.N0.Y0.find(l.Af), c.ja.uh, true);
								this.Zl = new p(this.N0.Y0.find(l.Lf), c.ja.oh, true, true);
								this.tv = new p(this.N0.Y0.find(l.Rf), c.ja._h, true);
								this.iv = new m(this.N0.Y0.find(l.jf));
								this.tv.w0(function () {
									return i.ev();
								});
								(0, a.$)(Gt).one(l.Uf, l.Of, function (t) {
									if (!(t = (0, a.$)(t[U])).data(l.Pf)) {
										t.data(l.Pf, new j(t.find(l.Ae)).P0(i.N0));
									}
								});
								this.sv();
								this.nv();
								r.S.W(c.En.Qa, this.av.bind(this));
								r.S.W(c.En.Sn, this.rv.bind(this));
								this.hv = false;
								this.ov = false;
								this.yu(function () {
									i.cv = _t(function () {
										if (!i.ov && !i.N0.Yl()) {
											i.N0.Xc();
										}
									}, 500);
								});
							},
							av: function () {
								var i = this;
								u.ur.U(this.jn, function (t) {
									i.hv = true;
									u.ur.Ao(i.jn, t.eid, t.num, t.slug, t[f2], t[rs], t[k2]);
									if (i.N0.Yl() && ((i.ov = true), i.cv)) {
										E(i.cv);
									}
								});
							},
							sv: function () {
								var n = this;
								(0, a.$)(Ht)
									.off(l.Nf)
									.on(l.Nf, function (t) {
										t = t[va] || t[T] || t.originalEvent[T];
										try {
											var i = (0, a.P)(t);
											if (i && typeof i[Rl] !== l.ue) {
												n.uv(i);
											}
										} catch (t) { }
									});
							},
							nv: function () {
								var i = this;
								(0, a.$)(Ht)
									.off(l.Ff)
									.on(l.Ff, function (t) {
										if (l.Bf.indexOf(t[U][Ql]) === -1) {
											i.ot(t[Rt], t);
										}
									});
							},
							_v: function () {
								if (this.Xl.Na) {
									this.N0.nu();
								}
							},
							fv: function () {
								if (this.Zl.Na) {
									this.N0.jl(1);
								}
							},
							ev: function () {
								if (this.lv) {
									this.Rl(z.b0, {
										value: [this.lv.intro, this.lv.outro],
										auto: this.tv.Na,
									});
								}
							},
							vv: function (t) {
								var i = this.N0.su();
								var n = (s = this.N0.bu()).data(l.re);
								var s = s.closest(l.X_).data(l.uc);
								var e = i.attr(l.ae);
								var i = i.attr(l.Fe);
								var r = t[rs] ? Math.floor(t[rs]) : 0;
								t = Math.floor(t[k2]);
								u.ur.Ao(this.jn, n, e, i, s, r, t);
								n = this.Jl.attr(l.qe);
								i = this.Ql[Ei]()[ot]();
								s = this.Ql.data(l.Gf);
								u.ur.Mo(this.jn, this.V0, n, i, s);
								if (t * 0.8 <= r) {
									u.do.Go(this.qo, e);
								}
							},
							dv: function () {
								var t;
								var i;
								var n;
								if (!this.bv) {
									this.bv = true;
									if (
										(t = u.ur.Lo(this.jn)) &&
										((i = this.N0.su()),
											(n = this.N0.bu()),
											`${t.num}` === i.attr(l.ae)) &&
										t[f2] === n.closest(l.X_).data(l.uc)
									) {
										this.Rl(z.Cn, {
											value: t[rs],
										});
									}
								}
							},
							pv: function (t) {
								if (this.bv) {
									this.vv(t);
								}
							},
							rv: function (t, i) {
								var n = this;
								switch (t) {
									case z.Cn:
										this.N0.Tu.scrollFocus();
										(0, a.$)(Gt).one(Il.concat(b.s0), function () {
											n.Rl(z.Cn, {
												value: i,
											});
											_t(function () {
												n.Rl(z.u0);
											}, 1000);
										});
										if (this.mv) {
											(0, a.$)(Gt).trigger(Il.concat(b.s0));
										} else {
											this.N0.Ul();
											this.N0.nu();
										}
										break;
								}
							},
							uv: function (t) {
								switch (t[Rl]) {
									case b.e0:
										this.ev();
										break;
									case b.s0:
										var i;
										if (t[T].metadataType === l.$f) {
											this.dv();
											i = this.N0.bu().data(l.re);
											this.iv.U0(i, t[T]);
											this.mv = true;
											(0, a.$)(Gt).trigger(Il.concat(b.s0));
										}
										break;
									case b.Cn:
										this.iv.O0(t[T]);
										break;
									case b.n0:
										this.pv(t[T]);
										break;
									case b.a0:
										this.fv();
										break;
									case b.c0:
										if ([L, v, d].indexOf(t[T]) > -1) {
											this.ot(t[T]);
										}
										break;
									default:
								}
							},
							ot: function (t, i) {
								switch (t) {
									case v:
										this.N0.jl(-1);
										break;
									case d:
										this.N0.jl(1);
										break;
									case w:
										this.Rl(z.Cn, {
											value: -Math.floor(parseInt(c.dn.Pa(c.ja.fh), 10) || 5),
											skip: true,
										});
										break;
									case y:
										this.Rl(z.Cn, {
											value: Math.floor(parseInt(c.dn.Pa(c.ja.fh), 10) || 5),
											skip: true,
										});
										break;
									case C:
										this.Rl(z.f0);
										if (i) {
											i[Kt]();
										}
										break;
									case g:
										this.Rl(z.l0);
										break;
									case L:
										this.Rl(z.p0);
										break;
									default:
								}
							},
							Rl: function (t, i) {
								this.N0.Rl(t, i);
							},
							Il: function () {
								return this.Xl.Na;
							},
							yu: function (i) {
								var n = this;
								this.N0.Oc.loading();
								var t = new URLSearchParams(x);
								t.set(l.qf, this.jn);
								t.set(l.Hf, l.Ki.concat(this.jn));
								a.$.get(Fl.concat(t[Vt]()))
									.done(function (t) {
										if (t[Y] !== 200) {
											n.N0.ku(t[va]);
										} else {
											n.N0.Lc(t[K]);
											if (i) {
												i();
											}
										}
									})
									.fail(function () {
										n.N0.ku(l.zf);
									});
							},
							eu: function (t, i) {
								var n;
								var s;
								var e = this;
								if (!t.data(l.Vf)) {
									t.data(l.Vf, 1);
									this.N0.qc.loading();
									n = t.attr(l.Kf);
									(s = new URLSearchParams(x)).set(l.Kf, n);
									s.set(l.Hf, l.Ki.concat(n));
									a.$.get(t4.concat(s[Vt]()))
										.done(function (t) {
											if (t[Y] !== 200) {
												e.N0.ku(t[va]);
											} else {
												e.N0.Zc(t[K]);
												if (i) {
													i();
												}
												e._v();
											}
										})
										.fail(function () {
											e.N0.ku(l.Yf);
										})
										.always(function () {
											t.data(l.Vf, 0);
										});
								}
							},
							cu: function (t) {
								var i;
								var n;
								var s = this;
								if (!t.data(l.Vf)) {
									t.data(l.Vf, 1);
									this.iv.I0();
									if (!Gt[i4]) {
										this.N0.Tu.loading();
									}
									i = t.data(l.Wf);
									(n = new URLSearchParams(x)).set(l.uc, i);
									n.set(l.Hf, l.Ki.concat(i));
									a.$.get(n4.concat(n[Vt]()))
										.done(function (t) {
											var i;
											if (t[Y] !== 200) {
												s.N0.ku(t[va]);
											} else {
												i = (t = (0, a.P)(r.M.He(t[K])))[It];
												t = t.skip;
												s.N0.Dl(i);
												s.lv = t;
											}
										})
										.fail(function () {
											s.N0.ku(l.Jf);
										})
										.always(function () {
											t.data(l.Vf, 0);
										});
								}
							},
						});
						var N = r.k.B({
							G: function (t) {
								var i = t.find(l.G_)[T2]();
								new a.Je(t[0], {
									slidesPerView: l.Qf,
									navigation: {
										nextEl: l.Xf,
										prevEl: l.Zf,
									},
								}).slideTo(i);
							},
						});
						n[G] = function () {
							(0, h[G])();
							q.V(l.t0);
							N.V(l.i0);
						};
					},
					{
						10: 10,
						13: 13,
						15: 15,
						16: 16,
						19: 19,
						2: 2,
						4: 4,
						7: 7,
					},
				],
				19: [
					function (t, i, n) {
						n.i = true;
						n[G] = undefined;
						var s = t(7);
						var e = t(2);
						var r = t(13);
						var a = t(16);
						var c = {
							o: s4,
							u: e4,
							_: r4,
							l: a4,
							v: c4,
							p: u4,
							m: o4,
							vt: S,
							dt: Ph,
							bt: h4,
							kt: s0,
							yt: f4,
							gt: l4,
							wt: v4,
							St: Bt,
							Et: tr,
							Ct: d4,
						};
						var u = c.o;
						var o = e.k.B({
							kv: {
								5: c.u,
								4: c._,
								3: c.l,
								2: c.v,
								1: c.p,
							},
							G: function (t) {
								this.Ln = t;
								this.yv = t.find(c.m);
								this.gv = this.yv[rr]();
								this.jn = t.data(c.vt);
								this.qo = t.data(c.dt);
								this.wv = t.data(c.bt);
								this.Sv = this.Ev();
								this.gv.each(function (t, i) {
									i.da = s.We.Tooltip.getOrCreateInstance(i);
								});
								if (this.Sv) {
									this.Cv();
								} else {
									this.gv
										.mouseenter(this.xv.bind(this))
										.mouseleave(this.Tv.bind(this))
										.click(this.Dv.bind(this));
									this.Mv(this.wv);
								}
							},
							Dv: function (t) {
								t = (0, s.$)(t[U]);
								if (!this.Ev()) {
									this.Iv((t[T2]() + 1) * 2);
								}
								this.Cv();
							},
							xv: function (t) {
								var i = (0, s.$)(t[U]);
								var n = i[T2]() + 1;
								this.Mv(n * 2);
								i.attr(c.kt, this.kv[n]);
								t[U].da[V]();
							},
							Tv: function (t) {
								this.Mv(this.wv);
								t[U].da[I]();
							},
							Cv: function () {
								this.yv.addClass(c.yt);
								this.gv.off(c.gt).off(c.wt).off(c.St);
								this.Mv(this.Sv);
							},
							Mv: function (t) {
								for (var i = 0; i < 5; i++) {
									if ((i + 1) * 2 <= t) {
										(0, s.$)(this.gv[i]).addClass(c.Et);
									} else {
										(0, s.$)(this.gv[i]).removeClass(c.Et);
									}
								}
							},
							To: function () {
								if (!this.Av) {
									try {
										this.Av = new Map(e.D.get(u) || []);
									} catch (t) {
										this.Av = new Map();
									}
								}
							},
							Iv: function (t) {
								this.Sv = t;
								this.To();
								this.Av.delete(this.jn);
								this.Av.set(this.jn, this.Sv);
								e.D.set(u, St.from(this.Av).slice(-200));
								t = new Date()[ti]();
								var i = [this.jn, this.Sv, t].join("");
								a.do.Fo(this.qo, this.Sv);
								s.$.post(g4.concat(i), {
									id: this.jn,
									value: this.Sv,
									time: t,
								}).done(function (t) {
									r.pn.bn(t);
								});
							},
							Ev: function () {
								this.To();
								return this.Av.get(this.jn);
							},
						});
						n[G] = function () {
							o.V(c.Ct);
						};
					},
					{
						13: 13,
						16: 16,
						2: 2,
						7: 7,
					},
				],
				20: [
					function (t, i, n) {
						var s;
						var e;
						var qt = {
							o: nn,
							u: O,
							_: H,
							l: tt,
							v: w4,
							p: Wt,
							m: Ut,
							vt: y4,
							dt: L4,
							bt: C4,
							kt: b4,
							yt: W2,
							gt: tf,
							wt: wt,
							St: nf,
							Et: sf,
							Ct: Z,
							xt: z4,
							Tt: B4,
							Dt: D4,
							Mt: x4,
							It: p4,
							ci: M4,
							ui: k4,
							_i: m4,
							fi: j4,
							li: A4,
							vi: q4,
							di: N4,
							bi: H4,
							pi: G4,
							mi: P4,
							ki: S4,
							yi: _4,
							gi: f3,
							wi: T4,
							Si: U4,
							Ei: I4,
							Ci: I1,
							xi: V4,
							Ti: Y4,
							Di: K4,
							Mi: W4,
							Ii: E4,
							Ai: $4,
							Li: O4,
							Ri: Z4,
							ji: X4,
							Ui: J4,
							Oi: R4,
							Pi: Q4,
							Ni: F4,
							Fi: tv,
							Bi: iv,
							Gi: nv,
							$i: sv,
							qi: ev,
							Hi: J5,
							zi: rv,
							Vi: av,
							Ki: cv,
							Yi: uv,
							Wi: ov,
							Ji: hv,
							Qi: fv,
							Xi: lv,
							Zi: vv,
							te: dv,
							ee: gv,
							se: wv,
							ne: A3,
							ae: S,
							re: yv,
							he: Lv,
							oe: Cv,
							ce: pi,
							ue: bv,
							_e: zv,
							fe: _n,
							le: Bv,
							ve: Dv,
							de: J9,
							be: xv,
							pe: pv,
							me: Mv,
							ke: kv,
							ye: mv,
							ge: jv,
							we: Av,
							Se: qv,
							Ee: Nv,
							Ce: Hv,
							xe: It,
							Te: Gv,
							De: Pv,
							Me: Sv,
							Ie: x,
							Ae: $c,
						};
						function Nt(t) {
							return (Nt =
								qt._ == typeof Symbol && qt.l == typeof Symbol[Xt]
									? function (t) {
										return typeof t;
									}
									: function (t) {
										if (
											t &&
											qt._ == typeof Symbol &&
											t[Jt] === Symbol &&
											t !== Symbol[Ut]
										) {
											return qt.l;
										} else {
											return typeof t;
										}
									})(t);
						}
						s = undefined;
						e = function () {
							function e(t) {
								return (e =
									qt._ == typeof Symbol && qt.l == Nt(Symbol[Xt])
										? function (t) {
											return Nt(t);
										}
										: function (t) {
											if (
												t &&
												qt._ == typeof Symbol &&
												t[Jt] === Symbol &&
												t !== Symbol[Ut]
											) {
												return qt.l;
											} else {
												return Nt(t);
											}
										})(t);
							}
							function n(t, i) {
								if (!(t instanceof i)) {
									throw new TypeError(qt.v);
								}
							}
							function S(t, i) {
								for (var n = 0; n < i[Tt]; n++) {
									var s = i[n];
									s.enumerable = s.enumerable || false;
									s.configurable = true;
									if (qt.p in s) {
										s.writable = true;
									}
									Pt.defineProperty(t, s[_v], s);
								}
							}
							function t(t, i, n) {
								if (i) {
									S(t[Ut], i);
								}
								if (n) {
									S(t, n);
								}
								Pt.defineProperty(t, qt.m, {
									writable: false,
								});
							}
							function i(t, i, n) {
								if (i in t) {
									Pt.defineProperty(t, i, {
										value: n,
										enumerable: true,
										configurable: true,
										writable: true,
									});
								} else {
									t[i] = n;
								}
							}
							function s(t, i) {
								if (qt._ != typeof i && i !== null) {
									throw new TypeError(qt.vt);
								}
								t[Ut] = Pt.create(i && i[Ut], {
									constructor: {
										value: t,
										writable: true,
										configurable: true,
									},
								});
								Pt.defineProperty(t, qt.m, {
									writable: false,
								});
								if (i) {
									_(t, i);
								}
							}
							function r(t) {
								return (r = Pt[Tv]
									? Pt[Uv][Iv]()
									: function (t) {
										return t[Vv] || Pt.getPrototypeOf(t);
									})(t);
							}
							function _(t, i) {
								return (_ = Pt[Tv]
									? Pt[Tv][Iv]()
									: function (t, i) {
										t[Vv] = i;
										return t;
									})(t, i);
							}
							function T(t, i) {
								if (!i || (qt.o != Nt(i) && qt._ != typeof i)) {
									if (i !== undefined) {
										throw new TypeError(qt.dt);
									}
									if ((i = t) === undefined) {
										throw new ReferenceError(qt.bt);
									}
								}
								return i;
							}
							function a(n) {
								var s = (() => {
									if (qt.u == typeof Reflect || !Reflect.construct) {
										return false;
									}
									if (Reflect.construct.sham) {
										return false;
									}
									if (qt._ == typeof Proxy) {
										return true;
									}
									try {
										Boolean[Ut][Yv].call(
											Reflect.construct(Boolean, [], function () { })
										);
										return true;
									} catch (t) {
										return false;
									}
								})();
								return function () {
									var t;
									var i = r(n);
									return T(
										this,
										s
											? ((t = r(this)[Jt]), Reflect.construct(i, arguments, t))
											: i.apply(this, arguments)
									);
								};
							}
							function U(t, i) {
								if (i == null || i > t[Tt]) {
									i = t[Tt];
								}
								for (var n = 0, s = new St(i); n < i; n++) {
									s[n] = t[n];
								}
								return s;
							}
							function I(t, i) {
								var n;
								var s;
								var e;
								var r;
								var a = (qt.u != typeof Symbol && t[Symbol[Xt]]) || t[qt.kt];
								if (a) {
									e = true;
									r = false;
									return {
										s: function () {
											a = a.call(t);
										},
										n: function () {
											var t = a[jc]();
											e = t[rf];
											return t;
										},
										e: function (t) {
											r = true;
											s = t;
										},
										f: function () {
											try {
												if (!e && a.return != null) {
													a.return();
												}
											} finally {
												if (r) {
													throw s;
												}
											}
										},
									};
								}
								if (
									St.isArray(t) ||
									(a = ((t, i) => {
										var n;
										if (t) {
											if (qt.yt == typeof t) {
												return U(t, i);
											} else {
												n = Pt[Ut][Vt].call(t).slice(8, -1);
												if (
													qt.gt === (n = qt.wt === n && t[Jt] ? t[Jt][Et] : n) ||
													qt.St === n
												) {
													return St.from(t);
												} else if (qt.Et === n || ef.test(n)) {
													return U(t, i);
												} else {
													return undefined;
												}
											}
										}
									})(t)) ||
									(i && t && qt.Ct == typeof t[Tt])
								) {
									if (a) {
										t = a;
									}
									n = 0;
									return {
										s: (i = function () { }),
										n: function () {
											if (n >= t[Tt]) {
												return {
													done: true,
												};
											} else {
												return {
													done: false,
													value: t[n++],
												};
											}
										},
										e: function (t) {
											throw t;
										},
										f: i,
									};
								}
								throw new TypeError(qt.xt);
							}
							function V() {
								if (f[It]) {
									Ht[hs][Yt] = f[It];
								} else if (f.rewriteHTML) {
									try {
										Gt[Ft][Qt] = f.rewriteHTML;
									} catch (t) {
										Gt[Ft][Kv] = f.rewriteHTML;
									}
								} else {
									try {
										Ht[Wv] = null;
										Ht.open("", qt.Tt);
										Ht[e5]();
										Ht[os][vr]();
									} catch (t) {
										console.log(t);
									}
									_t(function () {
										// This?
										// Ht[hs][Yt] = f.timeOutUrl || qt.Dt.concat(Ot(location[fs]));
									}, 500);
								}
							}
							var f = {
								md5: "",
								// ondevtoolopen: V,
								ondevtoolclose: null,
								url: "",
								timeOutUrl: "",
								tkName: qt.Mt,
								interval: 500,
								disableMenu: true,
								stopIntervalTime: 5000,
								clearIntervalWhenDevOpenTrigger: false,
								detectors: [0, 1, 3, 4, 5, 6, 7],
								clearLog: true,
								disableSelect: false,
								disableCopy: false,
								disableCut: false,
								disablePaste: false,
								ignore: null,
								disableIframeParents: true,
								seo: true,
								rewriteHTML: "",
							};
							var Y = [qt.It, qt.ci, qt.ui];
							function K(t) {
								var i;
								var n = arguments[Tt] > 0 && t !== undefined ? t : {};
								for (i in f) {
									var s = i;
									if (
										n[s] !== undefined &&
										(e(f[s]) === e(n[s]) || Y.indexOf(s) !== -1)
									) {
										f[s] = n[s];
									}
								}
								if (
									qt._ == typeof f.ondevtoolclose &&
									f.clearIntervalWhenDevOpenTrigger === true
								) {
									f.clearIntervalWhenDevOpenTrigger = false;
									console.warn(qt._i);
								}
							}
							function c() {
								return new Date()[ti]();
							}
							function W(t) {
								var i = c();
								t();
								return c() - i;
							}
							function E(n, s) {
								function t(i) {
									return function () {
										if (n) {
											n();
										}
										var t = i.apply(undefined, arguments);
										if (s) {
											s();
										}
										return t;
									};
								}
								var i = Ht[Ev];
								var e = Ht[$v];
								var r = Ht[Ov];
								try {
									Ht[Ev] = t(i);
									Ht[$v] = t(e);
									Ht[Ov] = t(r);
								} catch (t) { }
							}
							var u;
							var o;
							var $;
							var g = {
								iframe: false,
								pc: false,
								qqBrowser: false,
								firefox: false,
								macos: false,
								edge: false,
								oldEdge: false,
								ie: false,
								iosChrome: false,
								iosEdge: false,
								chrome: false,
								seoBot: false,
								mobile: false,
							};
							function O() {
								function t(t) {
									return true// i.indexOf(t) !== -1;
								}
								// var i = $t[Zv][Xv]();
								// var n = (() => {
								// 	var t = (i = $t)[Jv];
								// 	var i = i[Rv];
								// 	if (qt.Ct == typeof i) {
								// 		return i > 1;
								// 	}
								// 	if (qt.yt == typeof t) {
								// 		i = t[Xv]();
								// 		if (Qv.test(i)) {
								// 			return false;
								// 		}
								// 		if (Fv.test(i)) {
								// 			return true;
								// 		}
								// 	}
								// 	return t6.test($t[Zv][Xv]());
								// })();
								var s = !!Ht[ss] && Ht !== Ht[ss];
								var e = !n;
								var r = t(qt.fi);
								var a = t(qt.li);
								var c = t(qt.vi);
								var u = t(qt.di);
								var o = u && !t(qt.bi);
								var h = o || t(qt.pi) || t(qt.mi);
								var f = t(qt.ki);
								var l = t(qt.yi);
								var v = t(qt.bi) || f;
								var d = !n && i6.test(i);
								Pt.assign(g, {
									iframe: s,
									pc: e,
									qqBrowser: r,
									firefox: a,
									macos: c,
									edge: u,
									oldEdge: o,
									ie: h,
									iosChrome: f,
									iosEdge: l,
									chrome: v,
									seoBot: d,
									mobile: n,
								});
							}
							function Z() {
								var t = (() => {
									var t = {};
									for (var i = 0; i < 500; i++) {
										t[`${i}`] = `${i}`;
									}
									return t;
								})();
								var i = [];
								for (var n = 0; n < 50; n++) {
									i.push(t);
								}
								return i;
							}
							function l() {
								if (f.clearLog) {
									$();
								}
							}
							var X = "";
							var J = false;
							function R() {
								var t = f.ignore;
								if (t) {
									if (qt._ == typeof t) {
										return t();
									}
									if (t[Tt] !== 0) {
										var i = location[Yt];
										if (X === i) {
											return J;
										}
										X = i;
										var n;
										var s = false;
										var e = I(t);
										try {
											for (e.s(); !(n = e[an]())[rf];) {
												var r = n[Wt];
												if (qt.yt == typeof r) {
													if (i.indexOf(r) !== -1) {
														s = true;
														break;
													}
												} else if (r.test(i)) {
													s = true;
													break;
												}
											}
										} catch (t) {
											e.e(t);
										} finally {
											e[n6]();
										}
										return (J = s);
									}
								}
							}
							function Q() {
								return false;
							}
							function h(n) {
								var i;
								var t;
								var s = 74;
								var e = 73;
								var r = 85;
								var a = 83;
								var c = 123;
								var u = g.macos
									? function (t, i) {
										return t[ki] && t[Ai] && (i === e || i === s);
									}
									: function (t, i) {
										return t[mi] && t[ji] && (i === e || i === s);
									};
								var o = g.macos
									? function (t, i) {
										return (t[ki] && t[Ai] && i === r) || (t[ki] && i === a);
									}
									: function (t, i) {
										return t[mi] && (i === a || i === r);
									};
								// n.addEventListener(
								// 	qt.gi,
								// 	function (t) {
								// 		var i = (t = t || n[Rl])[Rt] || t[Mi];
								// 		if (i === c || u(t, i) || o(t, i)) {
								// 			return F(n, t);
								// 		}
								// 	},
								// 	true
								// );
								i = n;
								if (f.disableMenu) {
									i.addEventListener(qt.wi, function (t) {
										if (qt.Si !== t[s6]) {
											return F(i, t);
										}
									});
								}
								t = n;
								if (f.disableSelect) {
									v(t, qt.Ei);
								}
								t = n;
								if (f.disableCopy) {
									v(t, qt.Ci);
								}
								t = n;
								if (f.disableCut) {
									v(t, qt.xi);
								}
								t = n;
								if (f.disablePaste) {
									v(t, qt.Ti);
								}
							}
							function v(i, t) {
								i.addEventListener(t, function (t) {
									return F(i, t);
								});
							}
							function F(t, i) {
								if (!R() && !Q()) {
									(i = i || t[Rl])[e6] = false;
									i[Kt]();
									return false;
								}
							}
							var d;
							var tt = false;
							var w = {};
							function it(t) {
								w[t] = false;
							}
							function nt() {
								for (var t in w) {
									if (w[t]) {
										return (tt = true);
									}
								}
								return (tt = false);
							}
							(M = d = d || {})[(M.Unknown = -1)] = qt.Di;
							M[(M.RegToString = 0)] = qt.Mi;
							M[(M.DefineId = 1)] = qt.Ii;
							M[(M.Size = 2)] = qt.Ai;
							M[(M.DateToString = 3)] = qt.Li;
							M[(M.FuncToString = 4)] = qt.Ri;
							M[(M.Debugger = 5)] = qt.ji;
							M[(M[J4] = 6)] = qt.Ui;
							M[(M.DebugLib = 7)] = qt.Oi;
							t(ot, [
								{
									key: qt.Pi,
									value: function () {
										// var t;
										console.warn(qt.Ni.concat(this[kr], qt.Fi));
										// if (f.clearIntervalWhenDevOpenTrigger) {
										// ft();
										// }
										// Ht.clearTimeout(at);
										// f.ondevtoolopen(this[kr], V);
										// t = this[kr];
										// w[t] = true;
									},
								},
								{
									key: qt.Bi,
									value: function () { },
								},
							]);
							var st;
							var y = ot;
							s(L, y);
							st = a(L);
							t(
								L,
								[
									{
										key: qt.Bi,
										value: function () { },
									},
									{
										key: qt.Gi,
										value: function () {
											var t;
											if (
												((t = (t = Ht.eruda) == null ? undefined : t._devTools) ==
													null
													? undefined
													: t._isShow) === true ||
												(Ht._vcOrigConsole && Ht[Zt].querySelector(qt.$i))
											) {
												// this.onDevToolOpen();
											}
										},
									},
								],
								[
									{
										key: qt.qi,
										value: function () {
											return !!Ht.eruda || !!Ht._vcOrigConsole;
										},
									},
								]
							);
							var et = L;
							var rt = 0;
							var at = 0;
							var ct = [];
							var ut = 0;
							function L() {
								n(this, L);
								return st.call(this, {
									type: d.DebugLib,
								});
							}
							function ot(t) {
								var i = t[kr];
								var t = (t = t[r6]) === undefined || t;
								n(this, ot);
								this[kr] = d.Unknown;
								this[r6] = true;
								this[kr] = i;
								this[r6] = t;
								if (this[r6]) {
									ct.push((i = this));
									this[iv]();
								}
							}
							function ht(e) {
								// function t() {
								// 	o = true;
								// }
								// function i() {
								// 	o = false;
								// }
								// var n;
								// var s;
								// var r;
								// var a;
								// var c;
								// var u;
								// var o = false;
								// function h() {
								// 	(u[a] === r ? s : n)();
								// }
								// E(t, i);
								// n = i;
								// s = t;
								// if ((u = Gt)[J5] !== undefined) {
								// 	r = qt.Hi;
								// 	c = qt.zi;
								// 	a = qt.Vi;
								// } else if (u[cv] !== undefined) {
								// 	r = qt.Ki;
								// 	c = qt.Yi;
								// 	a = qt.Wi;
								// } else if (u[hv] !== undefined) {
								// 	r = qt.Ji;
								// 	c = qt.Qi;
								// 	a = qt.Xi;
								// } else if (u[vv] !== undefined) {
								// 	r = qt.Zi;
								// 	c = qt.te;
								// 	a = qt.ee;
								// }
								// u.removeEventListener(c, h, false);
								// u.addEventListener(c, h, false);
								// rt = Ht.setInterval(function () {
								// 	if (!e.isSuspend && !o && !R()) {
								// 		var t;
								// 		var i;
								// 		var n = I(ct);
								// 		try {
								// 			for (n.s(); !(t = n[an]())[rf]; ) {
								// 				var s = t[Wt];
								// 				it(s[kr]);
								// 				s.detect(ut++);
								// 			}
								// 		} catch (t) {
								// 			n.e(t);
								// 		} finally {
								// 			n[n6]();
								// 		}
								// 		l();
								// 		if (
								// 			qt._ == typeof f.ondevtoolclose &&
								// 			((i = tt), !nt()) &&
								// 			i
								// 		) {
								// 			f.ondevtoolclose();
								// 		}
								// 	}
								// }, f[Nv]);
								// at = _t(function () {
								// 	if (!g.pc && !et.isUsing()) {
								// 		ft();
								// 	}
								// }, f.stopIntervalTime);
							}
							function ft() {
								// Ht.clearInterval(rt);
							}
							var C = 8;
							function lt(t) {
								for (
									var i = ((t, i) => {
										t[i >> 5] |= 128 << i % 32;
										t[14 + (((i + 64) >>> 9) << 4)] = i;
										var n = 1732584193;
										var s = -271733879;
										var e = -1732584194;
										var r = 271733878;
										for (var a = 0; a < t[Tt]; a += 16) {
											var c = n;
											var u = s;
											var o = e;
											var h = r;
											var n = z(n, s, e, r, t[a + 0], 7, -680876936);
											var r = z(r, n, s, e, t[a + 1], 12, -389564586);
											var e = z(e, r, n, s, t[a + 2], 17, 606105819);
											var s = z(s, e, r, n, t[a + 3], 22, -1044525330);
											n = z(n, s, e, r, t[a + 4], 7, -176418897);
											r = z(r, n, s, e, t[a + 5], 12, 1200080426);
											e = z(e, r, n, s, t[a + 6], 17, -1473231341);
											s = z(s, e, r, n, t[a + 7], 22, -45705983);
											n = z(n, s, e, r, t[a + 8], 7, 1770035416);
											r = z(r, n, s, e, t[a + 9], 12, -1958414417);
											e = z(e, r, n, s, t[a + 10], 17, -42063);
											s = z(s, e, r, n, t[a + 11], 22, -1990404162);
											n = z(n, s, e, r, t[a + 12], 7, 1804603682);
											r = z(r, n, s, e, t[a + 13], 12, -40341101);
											e = z(e, r, n, s, t[a + 14], 17, -1502002290);
											n = B(
												n,
												(s = z(s, e, r, n, t[a + 15], 22, 1236535329)),
												e,
												r,
												t[a + 1],
												5,
												-165796510
											);
											r = B(r, n, s, e, t[a + 6], 9, -1069501632);
											e = B(e, r, n, s, t[a + 11], 14, 643717713);
											s = B(s, e, r, n, t[a + 0], 20, -373897302);
											n = B(n, s, e, r, t[a + 5], 5, -701558691);
											r = B(r, n, s, e, t[a + 10], 9, 38016083);
											e = B(e, r, n, s, t[a + 15], 14, -660478335);
											s = B(s, e, r, n, t[a + 4], 20, -405537848);
											n = B(n, s, e, r, t[a + 9], 5, 568446438);
											r = B(r, n, s, e, t[a + 14], 9, -1019803690);
											e = B(e, r, n, s, t[a + 3], 14, -187363961);
											s = B(s, e, r, n, t[a + 8], 20, 1163531501);
											n = B(n, s, e, r, t[a + 13], 5, -1444681467);
											r = B(r, n, s, e, t[a + 2], 9, -51403784);
											e = B(e, r, n, s, t[a + 7], 14, 1735328473);
											n = D(
												n,
												(s = B(s, e, r, n, t[a + 12], 20, -1926607734)),
												e,
												r,
												t[a + 5],
												4,
												-378558
											);
											r = D(r, n, s, e, t[a + 8], 11, -2022574463);
											e = D(e, r, n, s, t[a + 11], 16, 1839030562);
											s = D(s, e, r, n, t[a + 14], 23, -35309556);
											n = D(n, s, e, r, t[a + 1], 4, -1530992060);
											r = D(r, n, s, e, t[a + 4], 11, 1272893353);
											e = D(e, r, n, s, t[a + 7], 16, -155497632);
											s = D(s, e, r, n, t[a + 10], 23, -1094730640);
											n = D(n, s, e, r, t[a + 13], 4, 681279174);
											r = D(r, n, s, e, t[a + 0], 11, -358537222);
											e = D(e, r, n, s, t[a + 3], 16, -722521979);
											s = D(s, e, r, n, t[a + 6], 23, 76029189);
											n = D(n, s, e, r, t[a + 9], 4, -640364487);
											r = D(r, n, s, e, t[a + 12], 11, -421815835);
											e = D(e, r, n, s, t[a + 15], 16, 530742520);
											n = x(
												n,
												(s = D(s, e, r, n, t[a + 2], 23, -995338651)),
												e,
												r,
												t[a + 0],
												6,
												-198630844
											);
											r = x(r, n, s, e, t[a + 7], 10, 1126891415);
											e = x(e, r, n, s, t[a + 14], 15, -1416354905);
											s = x(s, e, r, n, t[a + 5], 21, -57434055);
											n = x(n, s, e, r, t[a + 12], 6, 1700485571);
											r = x(r, n, s, e, t[a + 3], 10, -1894986606);
											e = x(e, r, n, s, t[a + 10], 15, -1051523);
											s = x(s, e, r, n, t[a + 1], 21, -2054922799);
											n = x(n, s, e, r, t[a + 8], 6, 1873313359);
											r = x(r, n, s, e, t[a + 15], 10, -30611744);
											e = x(e, r, n, s, t[a + 6], 15, -1560198380);
											s = x(s, e, r, n, t[a + 13], 21, 1309151649);
											n = x(n, s, e, r, t[a + 4], 6, -145523070);
											r = x(r, n, s, e, t[a + 11], 10, -1120210379);
											e = x(e, r, n, s, t[a + 2], 15, 718787259);
											s = x(s, e, r, n, t[a + 9], 21, -343485551);
											n = p(n, c);
											s = p(s, u);
											e = p(e, o);
											r = p(r, h);
										}
										return St(n, s, e, r);
									})(
										((t) => {
											var i = St();
											var n = (1 << C) - 1;
											for (var s = 0; s < t[Tt] * C; s += C) {
												i[s >> 5] |= (t.charCodeAt(s / C) & n) << s % 32;
											}
											return i;
										})(t),
										t[Tt] * C
									),
									n = qt.se,
									s = "",
									e = 0;
									e < i[Tt] * 4;
									e++
								) {
									s +=
										n.charAt((i[e >> 2] >> ((e % 4) * 8 + 4)) & 15) +
										n.charAt((i[e >> 2] >> ((e % 4) * 8)) & 15);
								}
								return s;
							}
							function b(t, i, n, s, e, r) {
								return p(((i = p(p(i, t), p(s, r))) << e) | (i >>> (32 - e)), n);
							}
							function z(t, i, n, s, e, r, a) {
								return b((i & n) | (~i & s), t, i, e, r, a);
							}
							function B(t, i, n, s, e, r, a) {
								return b((i & s) | (n & ~s), t, i, e, r, a);
							}
							function D(t, i, n, s, e, r, a) {
								return b(i ^ n ^ s, t, i, e, r, a);
							}
							function x(t, i, n, s, e, r, a) {
								return b(n ^ (i | ~s), t, i, e, r, a);
							}
							function p(t, i) {
								var n = (t & 65535) + (i & 65535);
								return (((t >> 16) + (i >> 16) + (n >> 16)) << 16) | (n & 65535);
							}
							s(j, y);
							gt = a(j);
							t(j, [
								{
									key: qt.Bi,
									value: function () {
										var i = this;
										this.lastTime = 0;
										this.reg = a6;
										u(this.reg);
										this.reg[Vt] = function () {
											var t;
											// if (g.qqBrowser) {
											// 	t = new Date()[ti]();
											// 	if (i.lastTime && t - i.lastTime < 100) {
											// 		i.onDevToolOpen();
											// 	} else {
											// 		i.lastTime = t;
											// 	}
											// } else if (g.firefox) {
											// 	i.onDevToolOpen();
											// }
											return "";
										};
									},
								},
								{
									key: qt.Gi,
									value: function () {
										u(this.reg);
									},
								},
							]);
							var vt;
							var dt;
							var gt;
							var M = j;
							s(m, y);
							dt = a(m);
							t(m, [
								{
									key: qt.Bi,
									value: function () {
										// var t = this;
										// this.div = Gt.createElement(qt.ne);
										// this.div.__defineGetter__(qt.ae, function () {
										// 	t.onDevToolOpen();
										// });
										// Pt.defineProperty(this.div, qt.ae, {
										// 	get: function () {
										// 		t.onDevToolOpen();
										// 	},
										// });
									},
								},
								{
									key: qt.Gi,
									value: function () {
										u(this.div);
									},
								},
							]);
							var wt = m;
							s(k, y);
							vt = a(k);
							t(k, [
								{
									key: qt.Bi,
									value: function () {
										var t = this;
										this.checkWindowSizeUneven();
										Ht.addEventListener(
											qt.re,
											function () {
												_t(function () {
													t.checkWindowSizeUneven();
												}, 100);
											},
											true
										);
									},
								},
								{
									key: qt.Gi,
									value: function () { },
								},
								{
									key: qt.he,
									value: function () {
										if (
											(i = Lt(Ht[c6])
												? Ht[c6]
												: !Lt((i = Ht[b5])) &&
												!!i[u6] &&
												!!i[o6] &&
												i[u6] / i[o6]) !== false
										) {
											var t = Ht[h6] - Ht[lc] * i > 200;
											var i = Ht[Jl] - Ht[z5] * i > 300;
											if (t || i) {
												// this.onDevToolOpen();
												// return false;
											}
											it(this[kr]);
										}
										var i;
										return true;
									},
								},
							]);
							var yt = k;
							function k() {
								n(this, k);
								return vt.call(this, {
									type: d.Size,
									enabled: !g.iframe && !g.edge,
								});
							}
							function m() {
								n(this, m);
								return dt.call(this, {
									type: d.DefineId,
								});
							}
							function j() {
								n(this, j);
								return gt.call(this, {
									type: d.RegToString,
									enabled: g.qqBrowser || g.firefox,
								});
							}
							function Lt(t) {
								return t != null;
							}
							s(G, y);
							Bt = a(G);
							t(G, [
								{
									key: qt.Bi,
									value: function () {
										var t = this;
										this[na] = 0;
										this.date = new Date();
										this.date[Vt] = function () {
											t[na]++;
											return "";
										};
									},
								},
								{
									key: qt.Gi,
									value: function () {
										this[na] = 0;
										u(this.date);
										l();
										// if (this[na] >= 2) {
										// 	this.onDevToolOpen();
										// }
									},
								},
							]);
							var A;
							var Ct;
							var bt;
							var zt;
							var Bt;
							var Dt = G;
							s(H, y);
							zt = a(H);
							t(H, [
								{
									key: qt.Bi,
									value: function () {
										var t = this;
										this[na] = 0;
										this.func = function () { };
										this.func[Vt] = function () {
											t[na]++;
											return "";
										};
									},
								},
								{
									key: qt.Gi,
									value: function () {
										this[na] = 0;
										u(this.func);
										l();
										// if (this[na] >= 2) {
										// 	this.onDevToolOpen();
										// }
									},
								},
							]);
							var xt = H;
							s(N, y);
							bt = a(N);
							t(N, [
								{
									key: qt.Gi,
									value: function () {
										var t = c();
										// if (c() - t > 100) {
										// 	this.onDevToolOpen();
										// }
									},
								},
							]);
							var pt = N;
							s(q, y);
							Ct = a(q);
							t(q, [
								{
									key: qt.Bi,
									value: function () {
										this.maxPrintTime = 0;
										this.largeObjectArray = Z();
									},
								},
								{
									key: qt.Gi,
									value: function () {
										var t = this;
										var i = W(function () {
											o(t.largeObjectArray);
										});
										var n = W(function () {
											u(t.largeObjectArray);
										});
										this.maxPrintTime = Math.max(this.maxPrintTime, n);
										l();
										if (i === 0 || this.maxPrintTime === 0) {
											return false;
										}
										if (i > this.maxPrintTime * 10) {
											// this.onDevToolOpen();
										}
									},
								},
							]);
							var y = q;
							i((A = {}), d.RegToString, M);
							i(A, d.DefineId, wt);
							i(A, d.Size, yt);
							i(A, d.DateToString, Dt);
							i(A, d.FuncToString, xt);
							// i(A, d.Debugger, pt);
							i(A, d[J4], y);
							i(A, d.DebugLib, et);
							var Mt = A;
							function q() {
								n(this, q);
								return Ct.call(this, {
									type: d[J4],
									enabled: g[H4] || !g.mobile,
								});
							}
							function N() {
								n(this, N);
								return bt.call(this, {
									type: d.Debugger,
									enabled: false,
								});
							}
							function H() {
								n(this, H);
								return zt.call(this, {
									type: d.FuncToString,
									enabled: !g.iosChrome && !g.iosEdge,
								});
							}
							function G() {
								n(this, G);
								return Bt.call(this, {
									type: d.DateToString,
									enabled: !g.iosChrome && !g.iosEdge,
								});
							}
							var kt;
							var mt;
							var jt;
							var At;
							var P = Pt.assign(
								function (t) {
									function i() {
										var t =
											arguments[Tt] > 0 && arguments[0] !== undefined
												? arguments[0]
												: "";
										return {
											success: !t,
											reason: t,
										};
									}
									var n;
									var s;
									var e;
									if (P.isRunning) {
										return i(qt.oe);
									}
									O();
									n = Ht[f6] || {
										log: function () { },
										table: function () { },
										clear: function () { },
									};
									$ = g.ie
										? ((u = function () {
											return n[l6].apply(n, arguments);
										}),
											(o = function () {
												return n[v6].apply(n, arguments);
											}),
											function () {
												return n[Ji]();
											})
										: ((u = n[l6]), (o = n[v6]), n[Ji]);
									K(t);
									if (
										f.md5 &&
										lt(
											((t = f.tkName),
												(s = Ht[hs][Qr]),
												(e = Ht[hs][Vl]),
												(s =
													s === "" && e !== ""
														? qt.ce.concat(e.split(qt.ce)[1])
														: s) !== "" &&
													s !== undefined &&
													((e = new RegExp(qt.ue + t + qt._e, qt.fe)),
														(t = s.substr(1).match(e)) != null)
													? unescape(t[2])
													: "")
										) === f.md5
									) {
										return i(qt.le);
									}
									if (f.seo && g.seoBot) {
										return i(qt.ve);
									}
									P.isRunning = true;
									ht(P);
									var r = P;
									Q = function () {
										return r.isSuspend;
									};
									var a = Ht[ss];
									var c = Ht[gr];
									h(Ht);
									if (f.disableIframeParents && a && c && a !== Ht) {
										while (c !== a) {
											h(c);
											c = c[gr];
										}
										h(a);
									}
									// (qt.de === f.detectors ? Pt.keys(Mt) : f.detectors).forEach(
									// 	function (t) {
									// 		// new Mt[t]();
									// 	}
									// );
									return i();
								},
								{
									isRunning: false,
									isSuspend: false,
									md5: lt,
									version: qt.be,
									DetectorType: d,
									isDevToolOpened: false,
								}
							);
							if (
								(M =
									qt.u != typeof Ht && Ht[Zt] && (kt = Gt.querySelector(qt.pe))
										? ((mt = [qt.me, qt.ke, qt.ye, qt.ge, qt.we, qt.Se]),
											(jt = [qt.Ee]),
											(At = {}),
											[qt.Ce, qt.xe, qt.Te, qt.It]
												.concat(mt, jt)
												.forEach(function (t) {
													var i;
													var n = kt.getAttribute(t);
													if (n !== null) {
														if (jt.indexOf(t) !== -1) {
															n = parseInt(n);
														} else if (mt.indexOf(t) !== -1) {
															n = qt.De !== n;
														} else if (qt.Me === t && qt.de !== n) {
															n = n.split(qt.Ie);
														}
														At[
															(t = t).indexOf(qt.Ae) === -1
																? t
																: ((i = false),
																	t
																		.split("")
																		.map(function (t) {
																			if (qt.Ae === t) {
																				i = true;
																				return "";
																			} else if (i) {
																				i = false;
																				return t[Di]();
																			} else {
																				return t;
																			}
																		})
																		.join(""))
														] = n;
													}
												}),
											At)
										: null)
							) {
								P(M);
							}
							return P;
						};
						if (qt.o == (typeof n === qt.u ? qt.u : Nt(n)) && qt.u != typeof i) {
							i.exports = e();
						} else if (qt._ == typeof define && define.amd) {
							define(e);
						} else {
							(s = qt.u != typeof globalThis ? globalThis : s || self).Dn8ovpj3k =
								e();
						}
					},
					{},
				],
			},
			{},
			[8]
		);
	})();
	//#endregion
	// End of PAIN

	console.log(win.FG) // Simple check for me later

	this.encrypt_ut = win.FG.ut;
	this.encrypt__t = win.FG._t;
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

// nothing will happen here, just going to do some simple token setup?
async function GetEncryptedToken(_token, notStrict) {

	if (notStrict) _token = encodeURIComponent(_token)
	else _token = encodeURIComponent(`strict${_token}`)

	const _reg = RegExp.exec(_token);
	const NewToken = _reg[1] ? encrypt_ut(_reg[2]) : encrypt__t(_reg[2]);

	console.log(_token);
	console.log(NewToken);

	return NewToken;
}

async function searchResults(keyword) {
	try {
		const encodedKeyword = encodeURIComponent(keyword);
		const searchUrl = `https://animekai.to/browser?keyword=${encodedKeyword}`;
		const response = await fetchv3(searchUrl, {
			DisableDebug: true
		});
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
	try {
		const fetchUrl = `${url}`;
		const response = await fetchv3(fetchUrl, {
			DisableDebug: true
		});
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
	try {
		const fetchUrlForId = `${url}`;
		const repsonse = await fetchv3(fetchUrlForId);
		const responseTextForId = await repsonse.text();

		// const kaiCodexContent = await loadKaiCodex();
		// const patchedKaiCodex = kaiCodexContent + "\nthis.KAICODEX = KAICODEX;"; // attach to global scope
		// (0, eval)(patchedKaiCodex); // Now it should be visible globally

		encryptionSetup(); // Load encryption

		const rateBoxIdRegex = /<div class="rate-box"[^>]*data-id="([^"]+)"/;
		const idMatch = responseTextForId.match(rateBoxIdRegex);
		// const aniId = idMatch ? idMatch[1] : null;

		// const urlFetchToken = KAICODEX.enc(aniId);

		let param = new URLSearchParams();

		const aniId = idMatch ? idMatch[1] : "";
		const token = "strict".concat(aniId);

		param.set("ani_id", aniId);
		param.set("_", await GetEncryptedToken(token));

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

		const responseTextListApi = await fetchv3(fetchUrlListApi);
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
			const tokenEncoded = await GetEncryptedToken(token);
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

		encryptionSetup(); // Load encryption

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

		throw new Error("This currently is WIP, Looking into it but it's too late...")

		if (selectedStreamType) {
			// Find server 1 span and extract data-lid
			const serverSpanRegex =
				/<span class="server"[^>]*data-lid="([^"]+)"[^>]*>Server 1<\/span>/;
			const serverMatch = serverSpanRegex.exec(selectedStreamType);

			if (serverMatch && serverMatch[1]) {
				dataLid = serverMatch[1];
				dataLidToken = await GetEncryptedToken(dataLid);

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
// async function loadKaiCodex() {
// 	if (typeof KAICODEX !== "undefined") return KAICODEX;

// 	try {
// 		const res = await fetchv3(
// 			"https://raw.githubusercontent.com/haawwkeye/AnimeKai/main/kaicodex/generated/keys.json",
// 			{
// 				DisableDebug: true,
// 			}
// 		);
// 		const responseText = await res.text();
// 		var keys = JSON.parse(responseText);
// 		var homeKeys = [];
// 		var megaKeys = [];
// 		for (var i = 0; i < keys.kai.length; i++) {
// 			homeKeys.push(atob(keys.kai[i]));
// 		}
// 		for (var i = 0; i < keys.mega.length; i++) {
// 			megaKeys.push(atob(keys.mega[i]));
// 		}
// 		function megaDec(n) {
// 			n = atob(n.replace(/_/g, "/").replace(/-/g, "+"));
// 			var l = n.length;
// 			var o = [];
// 			for (var i = 0; i < l; i++) {
// 				var c = n.charCodeAt(i);
// 				var k = megaKeys[c];
// 				o.push(k.charCodeAt(i % k.length));
// 			}
// 			return decodeURIComponent(String.fromCharCode.apply(null, o));
// 		}
// 		var keysChar =
// 			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-~!*()'.".split(
// 				""
// 			);
// 		function encrypt$(n) {
// 			n = encodeURIComponent(n);
// 			var l = n.length;
// 			var o = [];
// 			for (var i = 0; i < l; i++) {
// 				var kc = homeKeys[keysChar.indexOf(n.charAt(i))];
// 				c = kc.charAt(i % kc.length);
// 				o.push(c);
// 			}
// 			return btoa(o.join(""))
// 				.replace(/\//g, "_")
// 				.replace(/\+/g, "-")
// 				.replace(/\=/g, "");
// 		}
// 		function decrypt$(n) {
// 			n = atob(n.replace(/_/g, "/").replace(/-/g, "+"));
// 			var l = n.length;
// 			var o = [];
// 			for (var i = 0; i < l; i++) {
// 				var c = n.charCodeAt(i);
// 				var cp = "";
// 				for (var j = 0; j < homeKeys.length; j++) {
// 					var ck = homeKeys[j].charCodeAt(i % homeKeys[j].length);
// 					if (ck === c) {
// 						cp = keysChar[j];
// 						break;
// 					}
// 				}
// 				if (cp) {
// 					o.push(cp);
// 				} else {
// 					o.push("%");
// 				}
// 			}
// 			return decodeURIComponent(o.join(""));
// 		}
// 		this.KAICODEX = {
// 			enc: encrypt$,
// 			dec: decrypt$,
// 			decMega: megaDec,
// 		};
// 		// AnimeKai Codex
// 		// $ap('https://raw.githubusercontent.com/amarullz/kaicodex/main/generated/kai_codex.js?'+$time(),function(r){
// 		//   if (r.ok){
// 		//     try{
// 		//       eval(r.responseText+"\n\nwindow.KAICODEX=KAICODEX;");
// 		//     }catch(e){}
// 		//   }
// 		// });
// 		return KAICODEX;
// 	} catch (error) {
// 		console.log("Load Kaicodex error:" + error);
// 	}
// 	// try {
// 	// 	const url =
// 	// 		"https://raw.githubusercontent.com/amarullz/kaicodex/refs/heads/main/generated/kai_codex.js";
// 	// 	const response = await fetchv3(url);
// 	// 	const scriptText = await response.text();
// 	// 	return scriptText;
// 	// } catch (error) {
// 	// 	console.log("Load Kaicodex error:" + error);
// 	// }
// }

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
this.AKextractStreamUrl = extractStreamUrl;
this.btoa = btoa;
this.atob = atob;
