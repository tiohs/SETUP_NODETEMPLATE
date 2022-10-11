import name from '@/one/two/tree';

export default class Person {
  public sayMyName() {
    return name;
  }
}

console.log(new Person().sayMyName());
