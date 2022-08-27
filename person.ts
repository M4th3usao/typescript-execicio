export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  listEmail: Array<string> = [
    'matheuscruz@gmail.com',
    'carloseduardo@gaml.com',
    'jose@gmail.com',
  ];
  constructor(nome: string, nomeMiddle: string, nomeLast, year: number) {
    this.firstName = nome;
    this.middleName = nomeMiddle;
    this.lastName = nomeLast;
    this.age = year;
  }

  getFullName() {
    return (
      'Seu nome é: ' +
      this.firstName +
      ' ' +
      this.middleName +
      ' ' +
      this.lastName
    );
  }

  getBirthdayYear() {
    2022 - this.age;
    return 'Sua idade é:' + this.age;
  }
}
