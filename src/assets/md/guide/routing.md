# Routing


Let's get straight to the point: most apps you'll build with a framework
will require some form of routing controlled by, and with, the browser's
URL path. This is an essential part of just about any web app and Angular
has its very own Angular Router module pre-installed, assuming you used
the CLI to set up your app.


## Installing Angular Router

If you used the CLI to install your app, you don't need to do this and can
skip this section.

If you're constructing an Angular app from the ground up, here's the NPM
install command to get Angular Router installed:

```bash
npm install --save @angular/router
```


## Creating a basic Router

Routing should be familiar if you've ever worked with other front-end
frameworks. But in case you're not, a router is typically a module in an
app whose two main responsibilities are:

- Reacting to browser URL changes by changing part of the UI
- Pushing or replacing the browser's URL in reaction to an action from the user

Enough talk, let's implement your app's router. Open up `app.module.ts` and
add the `RouterModule` import, including it inside your `NgModule` imports
array:

```typescript
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Notice how we added the following inside the `RouterModule` `forRoot` call:

```typescript
RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
])
```

That array of objects is our set of routes that we want our app to have available.

>The concept of a _page_ isn't really relevant in Angular. What's relevant
is the concept of a _component_. A component can however be treated like
a page, and that's exactly what's happening in Angular Router, and it's why routes
have a `component` key, and not `page` key.

Now let's create a `HomeComponent`, simply use the Angular CLI tool to minimise
the work required:

```bash
ng g component home
```

That should have created a `home` component inside the `app` directory.

And what's even better than this? Open again your `app.module.ts` file and take a
look at the imports:

```typescript
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
```

It's automatically added the necessary import and added `HomeComponent` to your
app module declarations array! Hopefully now the power of the Angular CLI is
becoming apparent.

Whilst these kinds of changes can easily be made manually, there's something very
gratifying and assuring about knowing that these changes required in two separate
locations in order to add one new component can be made seamlessly like this.
