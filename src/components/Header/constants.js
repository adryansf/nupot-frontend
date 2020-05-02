const linksForAnonimous = [
  { to: '/meals', label: 'Refeições' },
  { to: '/', label: 'Cardápios' },
  { to: '/kitchen/new', label: 'Registre sua cozinha' },
  { to: '/register', label: 'Cadastre-se' },
  { to: '/login', label: 'Login' },
];

const linksForAuthenticated = [
  { to: '/meals', label: 'Refeições' },
  { to: '/', label: 'Cardápios' },
  { to: '/kitchen/new', label: 'Registre sua cozinha' },
  { to: '/my_kitchen', label: 'Minha cozinha' },
];

export const getLinks = isPrivate =>
  isPrivate ? linksForAuthenticated : linksForAnonimous;
