/*! domready (c) Dustin Diaz 2014 - License MIT */
!function (doc) {
    var fns = [], listener
        , domContentLoaded = 'DOMContentLoaded'
        , loaded = /^loaded|^i|^c/.test(doc.readyState)

    if (!loaded)
        doc.addEventListener(domContentLoaded, listener = function () {
            doc.removeEventListener(domContentLoaded, listener)
            loaded = 1
            while (listener = fns.shift()) listener()
        })

    this.domready = function (fn) {
        loaded ? fn() : fns.push(fn)
    }
}(document);

(function (w, doc) {
    var head = doc.getElementsByTagName('head')[0],
        callback_count = 1

    // Add commas to numbers
    function addCommas(n) {
        return String(n).replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }

    function init(mainButton) {

        //init button
        mainButton.innerHTML = '<a class="gh-btn" href="#" target="_blank"><span class="gh-ico"></span><span class="gh-text"></span></a><a class="gh-count" href="#" target="_blank"></a>'

        //get parameters
        var params = {}, attr = mainButton.attributes;
        var i, len = attr.length;
        for (i = 0; i < len; i++) {
            if (attr[i].name.indexOf('data-') == 0)
                params[attr[i].name.replace('data-', '')] = attr[i].value
        }

        //init variables
        var user = params.user,
            repo = params.repo,
            type = params.type,
            button = mainButton.getElementsByClassName('gh-btn')[0],
            text = mainButton.getElementsByClassName('gh-text')[0],
            counter = mainButton.getElementsByClassName('gh-count')[0];

        function request(path) {
            var fn = "github_btn_callback" + (callback_count++),
                key = (type == 'fork') ? 'forks' : type + 'ers';

            w[fn] = function (obj) {
				if(obj.data[key] == undefined) return; //if the api limit is exceeded or the request failed
                counter.innerHTML = addCommas(obj.data[key]);
                counter.style.display = 'block';

                delete w[fn];
            }

            var el = doc.createElement('script');
            el.src = path + '?callback=' + fn;
            el.async = true;
            head.insertBefore(el, head.firstChild);
        }

        // Set href to be URL for repo
        button.href = 'https://github.com/' + user + '/' + repo + '/';

        // Add the class, change the text label, set count link href
        if (type == 'watch') {
            mainButton.className += ' github-watchers';
            text.innerHTML = 'Star';
            counter.href = 'https://github.com/' + user + '/' + repo + '/stargazers';
        } else if (type == 'fork') {
            mainButton.className += ' github-forks';
            text.innerHTML = 'Fork';
            counter.href = 'https://github.com/' + user + '/' + repo + '/network';
        } else if (type == 'follow') {
            mainButton.className += ' github-me';
            text.innerHTML = 'Follow @' + user;
            button.href = 'https://github.com/' + user;
            counter.href = 'https://github.com/' + user + '/followers';
        }

        if (params.count == 'true') {
            if (type == 'follow') {
                request('https://api.github.com/users/' + user);
            } else {
                request('https://api.github.com/repos/' + user + '/' + repo);
            }
        }
    }

    this.domready(function () {
        var nodes = doc.getElementsByClassName('github-btn');

        var i, len = nodes.length;
        for (i = 0; i < len; i++) {
            init(nodes[i]);
        }
    });

})(window, document);
