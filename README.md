UNOFFICIAL GITHUB BUTTONS
=========================

Showcase your GitHub (repo's) success with these three simple, static buttons featuring dynamic watch, fork and follower counts and a link to your GitHub repo or profile page.

__This is a fork of the Mark Otto's work : [http://ghbtns.com](http://ghbtns.com)__

To get started, checkout http://onigoetz.ch/github-buttons!


Usage
-----

The difference of this fork and the original one is that the fork doesn't use iframes with the following advantages:
- You don't have to calculate the width of your iframe
- Better loading time, the JS/CSS is only loaded once
- The `data:image` is only parsed once

These buttons are hosted via GitHub Pages, meaning all you need to do is include an JS/CSS file and start to use them right in your code.

``` html
	<link href="//onigoetz.ch/github-buttons/btn.min.css" rel=stylesheet>
	<script src="//onigoetz.ch/github-buttons/btn.min.js" async></script>
	<span class="github-btn" data-type=BUTTONTYPE data-user=USERNAME data-repo=REPONAME></span>
```

### Requirements

`data-user`<br>
GitHub username that owns the repo<br>

`data-repo`<br>
GitHub repository to pull the forks and watchers counts

`data-type`<br>
Type of button to show: `watch` or `fork` or `follow`

### Optional

`data-count`<br>
Show the optional watchers or forks count: *none* by default or `true`

### Button size
There are two sizes available, if normal and big, if you want it big, add the `github-btn-large` class to the button



Examples
--------

**Basic Watch button**

``` html
	<span class="github-btn" data-type=watch data-user=onigoetz data-repo=github-buttons></span>
```

**Basic Fork button**

``` html
	<span class="github-btn" data-type=fork data-user=onigoetz data-repo=github-buttons></span>
```

**Basic Follow button**

``` html
	<span class="github-btn" data-type=follow data-user=onigoetz></span>
```

**Watch with count**

``` html
	<span class="github-btn" data-type=watch data-user=onigoetz data-repo=github-buttons data-count=true></span>
```

**Fork with count**

``` html
	<span class="github-btn" data-type=fork data-user=onigoetz data-repo=github-buttons data-count=true></span>
```

**Follow with count**

``` html
	<span class="github-btn" data-type=follow data-user=onigoetz data-repo=github-buttons data-count=true></span>
```

**Large Watch button with count**

``` html
	<span class="github-btn github-btn-large" data-type=watch data-user=onigoetz data-repo=github-buttons data-count=true></span>
```


Bug tracker
-----------

Have a bug? Please create an issue here on GitHub at https://github.com/onigoetz/github-buttons/issues.



Authors
-------

**Mark Otto** - Creator

+ http://twitter.com/mdo
+ http://github.com/markdotto

**Stéphane Goetz** - Iframe remover

+ http://twitter.com/onigoetz
+ http://github.com/onigoetz



Copyright and license
---------------------

Copyright 2011 Mark Otto.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.