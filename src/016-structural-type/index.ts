type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser = { username: 'João', password: '123123' };
const sentUser = { username: 'João', password: '123123' };

// consegue se inferir o tipo soemente levando em conta a estrutura, e não o nome do tipo
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
