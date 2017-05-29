# Angular CLI


Angular offers an [official CLI](https://cli.angular.io/) (Command Line
Interface) tool that can be used to create a new Angular project (as outlined
in the [Getting Started](/guide/getting-started) guide).

However, it offers much more than that, and deserves mentioning on its own
because it can be an incredibly useful tool to have at hand as you build your
Angular app.


## Code Generation

Heavily inspired [Ember's](https://www.emberjs.com/) CLI, the Angular CLI also
provides a one-stop tool to assist in creating new modules of code that you'll
require in building an Angular app.

Here's the list of currently available modules that can be generated, as taken
from the [official README](https://github.com/angular/angular-cli):

Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

You can also replace the `ng g` in all of the above commands for `ng generate`
if you prefer.

Since Angular encourages code modularity and an opinionated app structure, using
the Angular CLI will help ensure that your app remains consistent as it
grows. Consistency is important for developing a codebase that stays easy to
manage and make changes to later, no matter no big it grows.
