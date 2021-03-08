class TableDto {
    private _id: number;
    private _name: string;
    private _age: number;
    private _email: string;
    private _country: string;

    constructor(id: number, name: string, age: number, email: string, country: string) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._email = email;
        this._country = country;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }


    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }
}