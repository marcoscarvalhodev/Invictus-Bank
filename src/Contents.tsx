import IconCheck from './assets/svg/icon-check.svg?react';

import Cash from './assets/svg/icon-cash.svg?react';
import Transfers from './assets/svg/icon-transfer.svg?react';
import Card from './assets/svg/icon-card.svg?react';
import Support from './assets/svg/icon-support.svg?react';

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
      bullet_icon: <IconCheck />,
    },
    {
      bullet_id: '2',
      bullet_title: 'Digital Convenience.',
      bullet_description:
        'Enjoy the convenience of modern digital banking while retaining the personal touch you deserve.',
      bullet_icon: <IconCheck />,
    },
    {
      bullet_id: '3',
      bullet_title: '24/7 Accessibility.',
      bullet_description:
        'Providing round-the-clock access to your accounts and services.',
      bullet_icon: <IconCheck />,
    },
  ],
  link_advantages: 'Supreme advantages.',
};

export const ContentAdvantages = {
  advantages: [
    {
      id: 1,
      icon: <Cash />,
      text: 'Attractive savings account interest rates.',
    },
    {
      id: 2,
      icon: <Transfers />,
      text: 'Versatile transfer options available.',
    },
    { id: 3, icon: <Card />, text: 'Flexible credit limit options.' },
    { id: 4, icon: <Support />, text: 'Multi-lingual customer support.' },
  ],
};

export const ContentTestimonials = {
  h5_subtitle: 'TESTIMONIALS',
  h2_title: 'Discover the Supreme Experience',
  list_testimonials: [
    { photo: '', name: '', testimonial: '' },
    { photo: '', name: '', testimonial: '' },
    { photo: '', name: '', testimonial: '' },
    { photo: '', name: '', testimonial: '' },
    { photo: '', name: '', testimonial: '' },
  ],
};
