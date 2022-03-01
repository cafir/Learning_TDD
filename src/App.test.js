import Enzyme from 'enzyme';
import App from "./App"


describe("Counter Testing", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = Enzyme.mount(<App />)
  })

  test('render learn react link', () => {
    expect(wrapper.find('h1').text()).toContain('This is counter app')
  });

  test('render a button with text of `incerment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })

  test('render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0')
  })

  test('render the click event of increment button and increment counter value', () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('1')
  })

  test('render the click event of decrement button and increment counter value', () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('1')
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('0')
  })
})

