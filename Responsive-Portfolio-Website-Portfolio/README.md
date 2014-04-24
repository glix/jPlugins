<h2>jQuery-Portfolio</h2>

<p>This plugin helps you display and organize your portfolio pieces in a slick & <b>responsive</b> fashion. Easy to set up and get going.</p>

I originally wrote this plugin when redesigning my <a href="http://www.arsenetoumani.com">portfolio</a> and later decided to make it available for all!<br/>
Rebranding and updating our portfolios are no fun tasks for us devs, so I thought this plugin would facilitate the process.<br/>
<b>Note:</b> I wrote this plugin in under an hour so it might be a little buggy. I'll try to patch them up with new features and such when I get some free time.

<h2>Demo:</h2>

View the full demo <a href="http://www.arsenetoumani.com">here</a>

<h2>Installation:</h2>

- Get both <i>portfolio.jquery.js</i> and <i>portfolio.jquery.css</i> files included in your html file
- Add `$("#MyPortfolio").portfolio({ options });` to your <i>script</i> tags or JS file
- Append and edit (to your liking) the HTML snippet you find in `/demo/index.html`
- That's it! really, you just have to follow what's going on in the `/demo` folder ;)

<h3>Options:</h3>

```javascript
$("#MyPortfolio").portfolio({
    cols: 4 // Number of columns you want your thumbnails to take. This is 3 by default
    transition: 'slideDown' // What jQuery transition effect you want. This is slideDown by default
});
```
For more options, just request in the issue tracker ;)

<h2>Setting up the repo:</h2>

- Clone the repo onto your desktop
- run `npm install` to install all dependencies
- run `gulp` for CSS and JS minification

You really only need to work in the demo folder then run `gulp` later.
