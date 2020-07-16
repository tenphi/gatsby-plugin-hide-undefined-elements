# gatsby-plugin-numl

A [Gatsby](https://github.com/gatsbyjs/gatsby) plugin for [Numl Design System](https://github.com/tenphi/numl).

There is no full SSR support at the moment, but you can use it with `npm run build` without any problem except SEO optimizations. 

## Install
Install this module via **npm**:

```sh
npm install gatsby-plugin-numl
```

## How to use

There are no options for the plugin. Just add `gatsby-plugin-numl` to the `plugins` section of the `gatsby-config.js`:

```javascript
// gatsby-config.js

module.exports = {
  plugins: [`gatsby-plugin-numl`],
};
``` 

## Support for Native Events

Install [jsx-native-events](https://github.com/calebdwilliams/jsx-native-events) to add support for native events that are used in Web Components.

Numl has two main events: `tap` (for action elements) and `input` (for widget elements like input, slider and more).

```jsx
/* @jsx nativeEvents */
import nativeEvents from 'jsx-native-events';

export default function Input({ onInput }) {
    function handle(e) {
        if (onInput) {
          onInput(e.detail);
        }
    }

    return <nu-input onEventInput={handle}></nu-input>;
}
```

## Examples

You learn more about **Numl Design System** visit the [Official Numl Site](https://numl.design).
