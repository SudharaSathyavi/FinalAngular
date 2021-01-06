export default class AdminUserDTO{
  private _email: string;
  private _password: string;
  private _name: string;
  private _contact: string;


  constructor(email: string, password: string, name: string, contact: string) {
    this._email = email;
    this._password = password;
    this._name = name;
    this._contact = contact;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get contact(): string {
    return this._contact;
  }

  set contact(value: string) {
    this._contact = value;
  }
}
