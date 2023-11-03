import Cash from './assets/svg/icon-cash.svg?url';
import Transfers from './assets/svg/icon-transfer.svg?url';
import Card from './assets/svg/icon-card.svg?url'
import Support from './assets/svg/icon-time.svg?url'

export const ContentHero = {
  title: 'Welcome to Supreme Bank: Your financial future starts here.',
  paragraph:
    'High-yield savings account, credit card with no annual or joining fee, and the best: set up everything from the App.',
};

export const ContentPeople = {
  h5_subtitle: 'GLOBAL TRUST',
  h2_title: 'Innovative.',
  p_description:
    'Your trusted financial partner, delivering creative solutions with a personal touch. We prioritize security, efficiency, and customer satisfaction.',
  list_bulets: [
    {
      bullet_id: '1',
      bullet_title: 'Security First.',
      bullet_description:
        'Your financial security is our top priority, with robust measures in place to protect your assets.',
    },
    {
      bullet_id: '2',
      bullet_title: 'Digital Convenience.',
      bullet_description:
        'Enjoy the convenience of modern digital banking while retaining the personal touch you deserve.',
    },
    {
      bullet_id: '3',
      bullet_title: '24/7 Accessibility.',
      bullet_description:
        'Providing round-the-clock access to your accounts and services.',
    },
  ],
  link_advantages: 'Supreme advantages.',
};


export const ContentAdvantages = {
  advantages : [
    {id: 1, icon: Cash, text: 'money is good'},
    {id: 2,icon: Transfers, text: 'transfer is essential'},
    {id: 3,icon: Card, text: 'card at any time'},
    {id: 4,icon: Support, text: '24/7 support'}
  ]
}