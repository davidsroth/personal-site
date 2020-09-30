const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'David Roth',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | David Roth',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | David Roth',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | David Roth',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | David Roth',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
