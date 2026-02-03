export type User = {
  id: number;
  name: string;
  username: string;
  email:string;
  address?: {
    street: string;
    suite: string;
    city: string;
  };
  phone?: string,
  website?: string,
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
};

export type UserEdit = Pick<User, 'id' | 'name' | 'email' | 'phone'>;