export interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  },
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

export interface Warrior {
  fight(): string;
  sneak(): string;
}

export interface Weapon {
  hit(): string;
}

export interface ThrowableWeapon {
  throw(): string;
}

export interface UserService {
  getUsers(url: string): Promise<User[]>
}
