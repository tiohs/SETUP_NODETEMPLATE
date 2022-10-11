import Person from './index';

it('should had been return my name !', () => {
  const person = new Person();

  expect(person.sayMyName()).toBe('Hamilton');
});
