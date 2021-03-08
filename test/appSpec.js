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
