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

export type UserInfoProps = {
  user: User;
  variant?: 'default' | 'compact';
  className?: string;
}

export type UserEdit = Pick<User, 'id' | 'name' | 'email' | 'phone'>;

export type UserRole = 'Admin' | 'Moderator' | 'User';

export type UserStatus = 'Active' | 'Blocked';

export type UserView = User & {
  role: UserRole;
  status: UserStatus;
  lastActiveAt: Date;
  registeredAt: Date;
};