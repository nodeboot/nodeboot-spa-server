# nodeboot-spa-server

http server for any spa developed with react, angular, vue, etc with some few useful features

# Requirements

- nodejs >= 10

# Usage

If you have the result of your spa build, you just need install this server

```
npm install nodeboot-spa-server --save"
```


and add this script to you package.json


```
"start" : "nodeboot-spa-server dist"
```

Where dist is the folder where your build assets were created:

- angular and vue
  - dist
- react
  - build

If you are using another framework, just set any folder that you need. This folder should be in the default workspace  

# Features

### /settings.json

Read [this](https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/) in section "The Limitations.." to understand why all the SPAs(angular, react, vue, etc) needs a build for any environment. I mean if one build was tested for Q&A team, another build is required to production.

**How we solve this?**
Get your settings from an http endpoint which is exposed by this framework, ready to use. Values are from environment variables, exactly like [create-react-app](https://create-react-app.dev/docs/adding-custom-environment-variables/) but for general purpose.

Just export some variables with prefix: **SPA_VAR_**

```
export SPA_VAR_FOO=foo_value
export SPA_VAR_BAR=bar_value
```

Then in your spa, **at the beginning**, you could consume this get endpoint with ajax in order to get your settings, instead

- .env
- environment.prod.ts
- hardcoded values in constants.js, config.js

Then the result could be exposed to the entire spa with:

- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- some global variable like `global._settings`
- some javascript module or class
- store or another advanced approach

# License

[MIT](./LICENSE)

# Contributors

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">JRichardsz</a></label>
      <br />
    </td>    
  </tbody>
</table>
