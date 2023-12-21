import IconCheck from './assets/svg/icon-check.svg?react';

import Mobile from './assets/svg/icon-mobile.svg?react';
import Time from './assets/svg/icon-time.svg?react';
import Settings from './assets/svg/icon-config.svg?react';

import Cash from './assets/svg/icon-cash.svg?react';
import Transfers from './assets/svg/icon-transfer.svg?react';
import Card from './assets/svg/icon-card.svg?react';
import Support from './assets/svg/icon-support.svg?react';

import Woman1 from './assets/img/testimonial-woman-1.jpg';
import Woman2 from './assets/img/testimonial-woman-2.jpg';
import Woman3 from './assets/img/testimonial-woman-3.jpg';

import Man1 from './assets/img/testimonial-man-1.jpg';
import Man2 from './assets/img/testimonial-man-2.jpg';

import Contactless from './assets/svg/icon-contactless.svg?react';

import PlayStore from './assets/svg/app-store.svg?react';
import GooglePlay from './assets/svg/google-play.svg?react';

/*<li className='dropdown-title'>
<a
  ref={menuRef1}
  onClick={handleClick}
  id='1'
  href=''
  className={`nav-link-mobile ${
    verifyMenuState(menuRef1) ? 'nav-link-mobile-active' : ''
  }`}
>
  <StyledHeadings as='h3' $device='desktop'>
    Supreme Bank
  </StyledHeadings>
</a>

<ul
  className={`dropdown-wrapper ${
    verifyMenuState(menuRef1) ? 'dropdown-wrapper-active' : ''
  }`}
>
  

  <NavLink to="/savings"><DropdownItem>Savings</DropdownItem></NavLink>

  <DropdownItem>Who we are</DropdownItem>

  <DropdownItem>Careers</DropdownItem>
</ul>
</li>

<li className='dropdown-title'>
<a
  ref={menuRef2}
  onClick={handleClick}
  id='2'
  href=''
  className={`nav-link-mobile ${
    verifyMenuState(menuRef2) ? 'nav-link-mobile-active' : ''
  }`}
>
  <StyledHeadings as='h3' $device='desktop'>
    Digital Account
  </StyledHeadings>
</a>

<ul
  className={`dropdown-wrapper ${
    verifyMenuState(menuRef2) ? 'dropdown-wrapper-active' : ''
  }`}
>
  <DropdownItem>Create your account</DropdownItem>
  <DropdownItem>Transfers</DropdownItem>
  <DropdownItem>Income</DropdownItem>
</ul>
</li>

<li className='dropdown-title'>
<a
  ref={menuRef3}
  id='3'
  onClick={handleClick}
  href=''
  className={`nav-link-mobile ${
    verifyMenuState(menuRef3) ? 'nav-link-mobile-active' : ''
  }`}
>
  <StyledHeadings as='h3' $device='desktop'>
    For you
  </StyledHeadings>
</a>

<ul
  className={`dropdown-wrapper ${
    verifyMenuState(menuRef3) ? 'dropdown-wrapper-active' : ''
  }`}
>
  <DropdownItem>Community</DropdownItem>
  <DropdownItem>Rewards</DropdownItem>
  <DropdownItem>News</DropdownItem>
</ul>
</li>

<li>
<a href='' className='nav-link-mobile'>
  <StyledHeadings as='h3' $device='desktop'>
    Join Supreme Bank
  </StyledHeadings>
</a>
</li>*/

export const ContentNavMobile = {
  nav_mobile: [
    {
      id: '1',
      title_link: 'Supreme Bank',
      pages: {
        page_1: { link: 'Savings', url: 'savings' },
        page_2: { link: 'Checking', url: 'checking' },
        page_3: { link: 'Cards', url: 'cards' },
      },
    },
    {
      id: '2',
      title_link: 'Digital Account',
      pages: {
        page_1: { link: 'Create your account', url: 'account' },
        page_2: { link: 'Transfers', url: 'transfers' },
        page_3: { link: 'Deposits', url: 'deposits' },
      },
    },
    {
      id: '3',
      title_link: 'For You',
      pages: {
        page_1: { link: 'Rewards', url: 'rewards' },
        page_2: { link: 'Careers', url: 'careers' },
        page_3: { link: 'About us', url: 'about' },
      },
    },
  ],
};

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
  h2_title: 'Discover the Supreme Experience.',
  list_testimonials: [
    {
      id: 1,
      photo: Woman1,
      name: 'Joanne Fuentes',
      testimonial:
        "I recently moved to a new city and was in search of a trustworthy bank. I'm so glad I found Supreme Bank. I appreciate the personalized attention they give to their customers.",
    },
    {
      id: 2,
      photo: Woman3,
      name: 'Kelly Davis',
      testimonial:
        "I've been their customer for years, and I couldn't be happier with their services. Their friendly staff is always there to assist me with any questions.",
    },
    {
      id: 3,
      photo: Man1,
      name: 'Harry Portman',
      testimonial:
        'The security and peace of mind that they offer are unparalleled. I never have to worry about my accounts or personal information being compromised. Thank you Supreme Bank.',
    },
    {
      id: 4,
      photo: Woman2,
      name: 'Lucy Young',
      testimonial:
        "I appreciate Sup's commitment to community involvement. Their charitable initiatives and sponsorships show their dedication to making a positive impact in our local area. It's a bank that truly cares about the community it serves.",
    },
    {
      id: 5,
      photo: Man2,
      name: 'Norman Smith',
      testimonial:
        "I've had accounts with several banks, but Supreme stands out from the rest. Their commitment to security and innovation is impressive. I feel confident knowing my money is in safe hands.",
    },
  ],
};

export const ContentSupremeApp = {
  app_description: [
    {
      id: 1,
      h5_subtitle: 'SUPREME APP',
      h2_title: 'Effortless financial control.',
      p_description:
        'Step into the future of banking with our digital account feature. Enjoy the absolute management of your finances with swift transactions, rock-solid security, and a user-friendly interface. ',
    },
  ],
  app_bullets: [
    {
      bullet_id: '1',
      bullet_title: 'Easy Payments',
      bullet_description:
        'Painless settlement with convenient in-app payment options, rendering a great experience.',
      bullet_icon: <Mobile />,
    },
    {
      bullet_id: '2',
      bullet_title: 'Quick Transactions',
      bullet_description:
        'Complete transactions swiftly with efficient processing, saving you valuable time.',
      bullet_icon: <Time />,
    },
    {
      bullet_id: '3',
      bullet_title: 'Accessibility Options',
      bullet_description:
        'Enhance usability with settings catering to different accessibility needs.',
      bullet_icon: <Settings />,
    },
  ],

  link_supremeapp: 'Secure and efficient.',
};

export const ContentDoubleCard = {
  h5_subtitle: 'TURN SUPREME',
  h2_title: 'Credit and debit card.',
  p_description:
    "Maximize your spending with our bank's credit card. Earn points on every purchase, redeemable for exciting rewards. Take control of your finances – apply now for a card that works for you!",
  icons_bullets: [
    {
      bullet_id: 1,
      bullet_title: 'Contactless Technology',
      bullet_description:
        'Enjoy the contactless payment feature. Quick payment at your leisure.',
      bullet_icon: <Contactless />,
    },
    {
      bullet_id: 2,
      bullet_title: 'Virtual Card',
      bullet_description:
        'Go cardless: our virtual card offers secure transactions. Zero physical hassle.',
      bullet_icon: <Card />,
    },
  ],

  link_double_card: 'Learn more',
};

export const ContentDownloadApp = {
  h5_subtitle: 'CREATE YOUR ACCOUNT.',
  h2_title: "Get yours. It's free.",
  p_description:
    'Join the best bank in the universe, with more than 20 million active clients all over the world. Boost your financial experience with Supreme Bank.',
  buttons: [{ button: <PlayStore /> }, { button: <GooglePlay /> }],
};

export const ContentAccountTypes = {
  Savings: {
    h5_subtitle: 'CASH OASIS',
    h2_title: 'Savings Account & CDs',
    p_description:
      'Smart savings platform for a prosperous and stress-free financial journey.',
    link_button_1: 'Get a review',
    link_button_2: 'Find my branch',
  },
};
