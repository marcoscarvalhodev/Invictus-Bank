import IconCheck from './assets/svg/icon-check.svg?react';

import Cash from './assets/svg/icon-cash.svg?react';
import Transfers from './assets/svg/icon-transfer.svg?react';
import Card from './assets/svg/icon-card.svg?react';
import Support from './assets/svg/icon-support.svg?react';

import Woman1 from './assets/img/testimonial-woman-1.jpg';
import Woman2 from './assets/img/testimonial-woman-2.jpg';
import Woman3 from './assets/img/testimonial-woman-3.jpg';

import Man1 from './assets/img/testimonial-man-1.jpg';
import Man2 from './assets/img/testimonial-man-2.jpg';

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
      bullet_title: 'SECURITY FIRST.',
      bullet_description:
        'Your financial security is our top priority, with robust measures in place to protect your assets.',
      bullet_icon: <IconCheck />,
    },
    {
      bullet_id: '2',
      bullet_title: 'DIGITAL CONVENIENCE.',
      bullet_description:
        'Enjoy the convenience of modern digital banking while retaining the personal touch you deserve.',
      bullet_icon: <IconCheck />,
    },
    {
      bullet_id: '3',
      bullet_title: '24/7 ACCESSIBILITY.',
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
    { id: 1,
      photo: Woman1,
      name: 'Joanne Fuentes',
      testimonial:
        "I recently moved to a new city and was in search of a trustworthy bank. I'm so glad I found Supreme Bank. I appreciate the personalized attention they give to their customers.",
    },
    {id: 2,
      photo: Woman3,
      name: 'Kelly Davis',
      testimonial:
        "I've been their customer for years, and I couldn't be happier with their services. Their friendly staff is always there to assist me with any questions.",
    },
    { id: 3,
      photo: Man1,
      name: 'Harry Portman',
      testimonial:
        'The security and peace of mind that they offer are unparalleled. I never have to worry about my accounts or personal information being compromised. Thank you Supreme Bank.',
    },
    { id: 4,
      photo: Woman2,
      name: 'Lucy Young',
      testimonial:
        "I appreciate Sup's commitment to community involvement. Their charitable initiatives and sponsorships show their dedication to making a positive impact in our local area. It's a bank that truly cares about the community it serves.",
    },
    { id: 5,
      photo: Man2,
      name: 'Norman Smith',
      testimonial:
        "I've had accounts with several banks, but Supreme stands out from the rest. Their commitment to security and innovation is impressive. I feel confident knowing my money is in safe hands.",
    },
  ],
};
