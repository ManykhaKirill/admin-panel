import type { User, UserView, UserRole, UserStatus } from './user';

const roles: UserRole[] = ['Admin', 'Moderator', 'User'];

export const enrichUser = (user: User): UserView => {
  const role = roles[user.id % roles.length];

  const status: UserStatus =
    user.id % 4 === 0 ? 'Blocked' : 'Active';

  const now = Date.now();

  return {
    ...user,
    role,
    status,
    registeredAt: new Date(now - user.id * 1000 * 60 * 60 * 24),
    lastActiveAt: new Date(now - user.id * 1000 * 60 * 30),
  };
};
