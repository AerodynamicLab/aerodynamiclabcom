import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
      {
        text: 'Expertise',
        href: '#',
      },
      {
        text: 'Applications',
        href: '#',
      },
      {
        text: 'Why Us?',
        href: '#',
      },
      {
        text: 'FAQ',
        href: '#',
      },
      {
        text: 'Contact',
        href: '#',
      },
  ]
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/aerodynamiclab' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
   Template by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> | © 2024 AerodynamicLab, All Rights Reserved
  `,
};
