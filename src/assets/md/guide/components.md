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


