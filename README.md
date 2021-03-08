# Test an app using Browser Monkey and electron-mocha

```bash
yarn add browser-monkey electron electron-mocha --dev
yarn add react react-dom
```

Now create a test file: `test/appSpec.js`
For simplicity we will create our react application in the test file.

```js
const {Query} = require('browser-monkey')
const {default: ReactMount} = require('browser-monkey/ReactMount')
const React = require('react')

class App extends React.Component {
  render () {
    return React.createElement('div', {className: 'greeting'}, 'Hello World')
  }
}

describe('greeting', () => {
  it('renders a greeting', async () => {
    const mount = new ReactMount(React.createElement(App, {}, null))
    const page = new Query().mount(mount)

    await page.find('.greeting').containing('Hello World').shouldExist()
  })
})
```

Now you can run the test using `electron-mocha`, the `--renderer` flag tells electron to run the test in it's built in browser, the `--interactive` flag makes the browser visible so that you can debug or inspect the test

```bash
yarn electron-mocha test/**/*Spec.js --renderer --interactive
```
