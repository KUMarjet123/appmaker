
if (!window.NITROPACK_STATE || window.NITROPACK_STATE != 'FRESH') {
    var proxyPurgeOnly = 0;
    if (typeof navigator.sendBeacon !== 'undefined') {
        var nitroData = new FormData();
        nitroData.append('nitroBeaconUrl', 'aHR0cHM6Ly9hcHBtYWtlcnNsYS5jb20v');
        nitroData.append('nitroBeaconCookies', 'W10=');
        nitroData.append('nitroBeaconHash', '204e4158381a7ca08972af8840d58cc97e8aca1eb1023cd71c2e0de455b013a831b132fdcc807b083a9a23f2daa57ccf0d613698e42f0c89ab4ac6ac0ee102a2');
        nitroData.append('proxyPurgeOnly', '');
        nitroData.append('layout', 'home');
        navigator.sendBeacon(location.href, nitroData);
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', location.href, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('nitroBeaconUrl=aHR0cHM6Ly9hcHBtYWtlcnNsYS5jb20v&nitroBeaconCookies=W10=&nitroBeaconHash=204e4158381a7ca08972af8840d58cc97e8aca1eb1023cd71c2e0de455b013a831b132fdcc807b083a9a23f2daa57ccf0d613698e42f0c89ab4ac6ac0ee102a2&proxyPurgeOnly=&layout=home');
    }
}
document.cookie = 'nitroCachedPage=' + (!window.NITROPACK_STATE ? '0' : '1') + '; path=/; SameSite=Lax';

(function() {
    var t = [];
    var e = {};
    var r = null;
    var a = {
        enabled: true,
        observeSelectors: ['[class*="slider"]', '[id*="slider"]', ".fotorama", ".esg-grid"],
        attributes: ["src", "data-src"],
        attributeRegex: /^data:image\/.*?;nitro-empty-id=([^;]*);base64/,
        cssUrlFuncRegex: /^url\(['|"]data:image\/.*?;nitro-empty-id=([^;]*);base64/
    };
    var i = function(t) {
        setTimeout(t, 0)
    };
    var l = function() {
        document.querySelectorAll("[nitro-lazy-empty]").forEach(function(t) {
            let r = t.getAttribute("nitro-lazy-src");
            let a = t.getAttribute("id");
            if (a && r) {
                e[a] = r
            }
        });
        r = new MutationObserver(n);
        let t = document.querySelectorAll(a.observeSelectors.join(","));
        for (let e = 0; e < t.length; ++e) {
            r.observe(t[e], {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: a.attributes,
                characterData: false,
                attributeOldValue: false,
                characterDataOldValue: false
            })
        }
    };
    var n = function(t) {
        for (let e = 0; e < t.length; ++e) {
            switch (t[e].type) {
            case "attributes":
                let r = t[e].target.getAttribute(t[e].attributeName);
                if (!r)
                    break;
                let l = a.attributeRegex.exec(r);
                if (l && l[1]) {
                    t[e].target.setAttribute("nitro-lazy-" + t[e].attributeName, u(l[1]));
                    if (t[e].target.className.indexOf("nitro-lazy") < 0) {
                        t[e].target.className += " nitro-lazy"
                    }
                }
                break;
            case "childList":
                if (t[e].addedNodes.length > 0) {
                    for (let r = 0; r < t[e].addedNodes.length; ++r) {
                        let a = t[e].addedNodes[r];
                        i(function(t) {
                            return function() {
                                s(t, true)
                            }
                        }(a))
                    }
                }
                break
            }
        }
    };
    var s = function(e, r) {
        if (!(e instanceof HTMLElement))
            return;
        if (t.indexOf(e) > -1)
            return;
        for (let t = 0; t < a.attributes.length; ++t) {
            let r = e.getAttribute(a.attributes[t]);
            if (r) {
                let i = a.attributeRegex.exec(r);
                if (i) {
                    e.setAttribute("nitro-lazy-" + a.attributes[t], u(i[1]));
                    if (e.className.indexOf("nitro-lazy") < 0) {
                        e.className += " nitro-lazy"
                    }
                }
            }
        }
        if (e.style.backgroundImage) {
            let t = a.cssUrlFuncRegex.exec(e.style.backgroundImage);
            if (t) {
                e.setAttribute("nitro-lazy-bg", u(t[1]));
                if (e.className.indexOf("nitro-lazy") < 0) {
                    e.className += " nitro-lazy"
                }
            }
        }
        t.push(e);
        if (r) {
            e.querySelectorAll("*").forEach(function(t) {
                i(function() {
                    s(t)
                })
            })
        }
    };
    function u(t) {
        return e[t]
    }
    if (a.enabled) {
        l()
    }
}
)();