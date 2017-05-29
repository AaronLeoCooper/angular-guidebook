# Comparing Angular


The front-end world has a multitude of different frameworks out there
to chose from. The question is, is _Angular_ the one you should select
for your next project?

Here's a straightforward comparison against other popular JavaScript
libraries/frameworks that you might also want to consider.


## Angular

Official site: <http://angular.io>

Angular is the second framework released by the Angular team, and the
successor to AngularJS. It builds upon some of the foundations laid out
by AngularJS, recycling some of the familiar niceties such as handlebars
templating inside HTML for declarative view construction.

Angular also strongly encourages using
[TypeScript](https://www.typescriptlang.org/) and is enabled by default if
you use the Angular CLI to create an app. If you're unfamiliar with
TypeScript, it's not too late to try it! TypeScript makes building big apps
much more manageable. It brings static analysis and advanced type
definitions. Even if you don't use TypeScript's features actively, you'll
still benefit from the passive static analysis that will catch type errors
that you might normally miss in plain JavaScript.


## React JS

Official site: <https://facebook.github.io/react/>

ReactJS is Facebook's answer to effective front-end development. React
is officially not a framework, but a library. It's gained significant
popularity over the last few years for providing a fresh paradigm shift
in the way interfaces are built. Features such as Virtual DOM,
deterministic view rendering and a heavy emphasis on building up a UI
using bite-sized components for easy maintenance have all proved mighty
successful in ReactJS.

Those still trying to get to grips ReactJS will likely find it compelling,
but occasionally (or maybe even frequently) struggling when it comes to
figuring out how to compose UI components, how best to pass data around
or even simply where to put certain logic. React's documentation doesn't
hand-hold and generally expects the developer to "fill in the blanks"
when it comes to actually structuring their apps. In contrast, Angular
is a lot more opinionated and has a documentation and tutorial that will
bring anyone up to speed with not only individual features, but app
architecture, too.

Advanced ReactJS developers may see little benefit in making the move to
Angular, unless they're looking for a more opinionated and structured
approach to UI development - something Angular offers right from the start.
[Angular's official guide](http://angular.io) makes this absolutely clear,
too, with an official coding style guide and a rich API documentation.
Whilst ReactJS prefers to keep the library minimal and let the developer
decide which other modules to pull in, the Angular approach provides
an ecosystem of modules maintained by the Angular team themselves.
In theory this means spending less time hunting for and integrating NPM
modules and more time developing and consulting from a single source of
information: Angular's comprehensive API documentation.


## Vue.js

Official site: <https://vuejs.org/>

Vue.js offers an interesting blend of Angular and ReactJS, in that it has
declarative handlebars-like HTML templating (like Angular) and a small
overall footprint, leaving more up to the developer (like ReactJS). It's
also fairly unopinionated, offering many ways of building up a UI. Like
Angular, Vue.js also has an official CLI tool that can be used to create
a Vue project in no time at all, allowing the user to even select a
project template to influence how the starter project will be created.

Angular goes a step further when it comes to the CLI: Angular's tool also
gives the developer post-install extras like generating commonly needed
modules (components, services, directives, etc..) and running builds and
tests.

As stated above, Vue.js is decidedly less opinionated than Angular and
whilst they state that this is a preferable feature to give the developer
greater flexibility, it comes at the cost of the developer being
responsible for making more of their own decisions and having their own
opinions - things that newcomers to the library will not always appreciate
as they won't know what's best and what isn't. Angular can be viewed as
a more structured and opinionated framework, giving the developer ample
tools and a wealth of documentation to get stuck in without being blocked
by having to make decisions about things that don't concern the core
logic of their app.


## Angular JS

Official site: <http://angularjs.org>

The predecessor to Angular, AngularJS has been around for a good few years
and has been the framework of choice for many teams and sole developers
(and still is!). It gained massive popularity largely due to it's shallow
learning curve and the masses of information and guides available online.

The Angular CLI is a particularly compelling reason to make the switch away
from AngularJS to the newer Angular, since it offers a super fast way of
getting into the framework with a bare minimum setup required. Not only
that, the Angular team have made many improvements and learned much from
the experience gained developing their previous framework. They've cast out
bottlenecks such as two-way data binding, and introduced a much more concise
and consistent API.

Scalability is also something the Angular team have made a high priority in
the new Angular framework, something that AngularJS suffered from a lack
of. With TypeScript as the official recommendation and much better support
for component-based UI structuring, Angular is truly what AngularJS should
have been.

Just be aware that if you're moving from AngularJS to Angular, there will
be some learning curve, too, since the API and app architecture methodology
have both changed quite significantly.
