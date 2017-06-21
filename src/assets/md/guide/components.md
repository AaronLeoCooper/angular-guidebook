# Components


Components are the bread-and-butter of most modern front-end frameworks,
and Angular is no exception. Let's look at how easy components are to
create, and some of the ways they can manipulated.


## Creating your first component

Assuming you're using the Angular CLI in your project, creating components
is made almost too easy! Let's create one right now by running the following
from the command line:

```bash
ng g component page
```

Congratulations! You just created your first component. Easy, right? But
let's look at what's been created.

When you create a component from the command line using the Angular CLI,
it makes 2 key changes.

First, and most obviously, it creates the directory and the files that make
up the component itself. You can check this out by looking under the `app`
directory. You should see something like the following:

```
app
  ` page
    |- page.component.html
    |- page.component.scss
    |- page.component.spec.ts
     ` page.component.ts
```

We'll have a look at the component's source code shortly, but first let's
observe the second update that the Angular CLI made.

If you open `app.module.ts`, you should see this inside:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Notice that import statement for `PageComponent`? And look a little further
down and you'll see `PageComponent` being used inside of the `@NgModule`
declarations array. These were added automatically by the Angular CLI
when the component was generated.

Oh and by the way, welcome to the App module! This is where all of your core
app modules will be declared, giving access to only what is required within
this app.

So, now that `PageComponent` was added into the `declarations` array, what
does this mean? Let's put it to the test and try to use the component
somewhere.


## Rendering components

Components have 2 main ways of being rendered to the screen:

- Passing the component definition to Angular Router
- Including HTML tags in a template

We already saw above how we can address the first method. The second is
more _declarative_ in that you specify exactly where a component is rendered
by placing it directly into another component's template markup.

Let's create a second component and add it to the markup of our `Page`
component we created above.

```bash
ng g component header
```

Open up the newly created `header.component.ts` file to take a look at
what makes up the component.

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

If you've not used ES7 or TypeScript **decorators** before, chances are you'll
find something a bit odd in this file, and you'll have seen something
similar inside `app.module.ts` earlier too:

```typescript
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
```

You can probably work out for yourself that this is some sort of definition
for your component, detailing how it's selected in the HTML output and where
its template file and CSS files are located in relation to this file.

However, the key piece here that defines it as a decorator is the name
preceded by an @ symbol. In fact, on its own this means nothing. It only
makes sense when placed immediately before a class definition, like this:

```typescript
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
```

This is signifying that the class `HeaderComponent` needs to have some special
properties. You don't need to worry too much about the inner workings of
decorators for now however, just try to understand that they _decorate_
classes with additional functionality that they wouldn't have otherwise. If
you want to read more, the
[official TypeScript docs](https://www.typescriptlang.org/docs/handbook/decorators.html)
do a great job of breaking down how decorators actually work.

`Component` comes from the `@angular/core` package because this is the standard
component definition decorator for Angular. By using this decorator before a
class, it prepares it to be ready to integrate into another components template,
or as a component rendered via Angular Router.

>NOTE: When importing a decorator, you _dont_ put the @ symbol before the
>variable name in the import - only add the @ when you actually use the decorator
