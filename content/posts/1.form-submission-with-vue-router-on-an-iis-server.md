---
layout: ../../layouts/PostLayout.astro
title: Form Submission with Vue Router on an IIS Server
publishDate: Feb 4 2022
author: Tim Long
description: Blog post about an issue I came across with Vue Router and URL Rewriting on an IIS Server
---

I recently had the pleasure of deploying my first website done with Vue to production! I had a ton of fun learning Vue and it had become my go to for web development. Absolutely love it.

For routing, I course used Vue router and also loved its simplicity with defining routes and binding them to a component/view. I did not realize under I deployed to a staging environment that my URLs would break when attempted to be accessed directly.

```js
// imports, some routes & project specific whatevers removed/abbreviated
import ...

export const router = createRouter({
    history: createWebHistory(),
    routes: [
      { 
          path: '/', 
          component: Home,
          meta: {title: 'Home'}
      },
      { 
          path: '/about',
          component: About,
          meta: {title: 'About'}
      },
      ...
    ],

    scrollBehavior(to, from, savedPosition) {
        return savedPosition ?? {top: 0};
    },
});
```

I know now it has to do with the fact that a new page is not fully requested and loaded, since it is clearly a *single page application* with components being swapped out when a route is accessed. The URL at the top is no longer tied to a separate page and so if you refresh or try to access it directly, the server has to page to return to you.

And this is no secret. Vue Router’s documentation has an entire page dedicated to History mode with server config snippets to address this fix. Basically you need to rewrite urls to point back to the index page. The server I was deploying to is IIS, and here is the code they recommend you include:

```xml

<!-- Make sure the IIS URLRewrite Extension is installed! -->
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Handle History Mode and custom 404/500" stopProcessing="true">
          <match url="(.*)" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

And this works… almost perfectly. I have a form on one of my pages that sends a `POST` request and it stopped working after adding these rules. The url that it was going to was also being affected by the rewrite rules. I have zero experience with IIS and so the fix took a bit of help from a colleague, some googling and some trial and error. Ultimately, the solution was very simple.

Inside the `<condition>` block include:

```xml
<add input="{REQUEST_METHOD}" matchType="Pattern" pattern="POST" ignoreCase="true" negate="true" />
```

Save it and try submitting your form. You should be good to go! I hope this saves someone some time 🙂