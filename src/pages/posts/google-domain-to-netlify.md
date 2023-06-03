---
layout: ../../layouts/PostLayout.astro
title: Connecting a Google domain to a Netlify Site
publishDate: Apr 11 2023
author: Tim Long
description: Use pm2 to automate the startup of scripts on a server
---

<aside class="border-2 border-secondary text-secondary p-8 my-8">
💡 This tutorial assumes you have already purchased your domain, and you bought at Google Domains. You need a Netlify account and a site configured. If you haven’t, come back once you have! I’ll be here.
</aside>

The documentation on Netlify’s site can be a little confusing so I made this for myself for next time. Hopefully it helps someone else!

You are going to need to create 2 records:

1. “apex” domain
2. “www” subdomain

We will start with the subdomain which will require a `CNAME` record. Followed the apex record the is tied to an `A` record.

<!-- ![The domain side menu with DNS selected](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/110c5af6-d185-46ab-8557-d00843695b87/Screenshot_2023-04-11_at_10.38.50_PM.png) -->
<!--
The domain side menu with DNS selected -->

On the Google Domains site when logged in, choose the domain you want to configure. You should then see a menu on the side, with a link to DNS

From here, look for **Custom Records**. It should be just a little ways down the screen. If you don’t see it, make sure you are in the **Default Name Servers (Active)** tab.

Click **Manage Custom Records**. From here, you should see a row with empty fields and a button to add a new record. This first field we will use to set up the subdomain record.

Click the select element to choose the type of record, and select CNAME. Enter `www` in the hostname field, and `your-site-name.netlify.app` in the data field.

Now, for the Apex record, add a new record. This time in the dropdown choose `A`. This is different from `ANAME` (Google domains do not support that one). Leave the hostname blank, and in the data field, add `75.2.60.5`.

Your records should look like:

| Host name          | Type  | TTL    | Data                 |
| ------------------ | ----- | ------ | -------------------- |
| yourdomain.com     | A     | 1 hour | 75.2.60.5            |
| www.yourdomain.com | CNAME | 1 hour | yoursite.netlify.app |

And now… we wait!

It can take up to 24 hours for it to start working, so exercise some patience young padawan and you’ll should be good to go!
