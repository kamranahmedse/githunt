<p align="center">
<img width="600" src="http://i.imgur.com/KUEq97P.png" text-align="center">
</p>

> Chrome extension - Replaces new tab with trending github repositories

Whenever you will open a new tab, you will be presented with a page similar to following

![New Tab](http://i.imgur.com/COyJUJg.png)

By default it is set to show the trending repositories from the current week plus the repositories belonging to every language is shown. However, once you will apply some filter, it will remember your configuration and the next time you will open the new tab, you will be presented with the last filter that you applied.

## Installation

Extension itself doesn't need any setup. All you have to do is

- Install it from [Chrome Webstore](https://chrome.google.com/webstore/detail/githunt/khpcnaokfebphakjgdgpinmglconplhp)  or [manually install it](http://superuser.com/a/247654/6877).


Github API has rate limit applied in their API and although the extension implements the caching in order to make sure that the rate limit may not be crossed but however I would recommend you to set the API token in the extension in order to increase the quota. 

Here is how you can do that
   
- Go to the [`Settings > Personal Access Tokens`](https://github.com/settings/tokens) of your github profile
- Click `Generate New Token` button. Give the token description and select the scope called `public_repo` under `repo` and click `Generate Token`.
- You will be presented with the generated token. Copy the token.
- Right click on the extension icon and click `Options`. Paste the API token in the given field and click save

![Options Page](http://i.imgur.com/FK1vFlq.png)

- Voila! You are all set to go on a hunt.

## Contribution
I'd love to hear what you have to say. Reach me out at kamranahmed.se@gmail.com or on twitter @kamranahmed_se

## License
MIT © [Kamran Ahmed](https://kamranahmed.info)


