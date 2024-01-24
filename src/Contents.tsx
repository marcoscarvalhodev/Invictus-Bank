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

import PigIcon from './assets/svg/savings/slide/pig-icon.svg?react';
import CDIcon from './assets/svg/savings/slide/cd-icon.svg?react';
import MoneyIcon from './assets/svg/savings/slide/money-icon.svg?react';
import SunsetIcon from './assets/svg/savings/slide/sunset-icon.svg?react';

import Wallet from './assets/svg/checking/slide/wallet.svg?react';
import Hand from './assets/svg/checking/slide/hand.svg?react';
import Book from './assets/svg/checking/slide/book.svg?react';
import Elder from './assets/svg/checking/slide/elder.svg?react';

import Card1 from './assets/svg/cards/card-1.svg?react';
import Card2 from './assets/svg/cards/card-2.svg?react';

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

    savings_slides: {
      h5_subtitle: 'ACCOUNT TYPES',
      h2_title: 'Ready to transform your finances?',
      p_description:
        'Discover which smart money-saving strategy is the best for you.',
      slides: [
        {
          id: '1',
          icon: <PigIcon className='pig-icon slide-svg' />,
          name: 'Savings Account',
          link: 'Compare ',
        },
        {
          id: '2',
          icon: <CDIcon className='slide-svg' />,
          name: 'Certificates of Deposit (CDs)',
          link: 'See CDs',
        },
        {
          id: '3',
          icon: <MoneyIcon className='slide-svg' />,
          name: 'Money Market Account',
          link: 'Compare',
        },
        {
          id: '4',
          icon: <SunsetIcon className='slide-svg' />,
          name: 'For Retirement',
          link: 'Learn more',
        },
      ],
    },

    savings_advantages: {
      h5_subtitle: 'SAVINGS ADVANTAGES',
      h2_title: 'Your savings made easy and secure.',
      p_description:
        "We're talking about a fortress-level security engineering, money that practically moonwalks to growth, and access so easy it's practically a high-five. Let's elevate your savings game!",
      bullets: [
        {
          id: 1,
          bullet_description:
            'Pay bills directly from your savings account hassle-free.',
        },
        {
          id: 2,
          bullet_description:
            '96% of customers appreciate our clear and straightforward fee structure.',
        },
        {
          id: 3,
          bullet_description:
            'Set it and let it – watch your savings grow automatically.',
        },
        {
          id: 4,
          bullet_description:
            'Choose from a range of accounts suitableb to different needs and preferences.',
        },
        {
          id: 5,
          bullet_description:
            '89% of users utilizing auto-savings meet their financial targets.',
        },
        {
          id: 6,
          bullet_description:
            'No hidden fees; Our customers express trust in our fee transparency.',
        },
        {
          id: 7,
          bullet_description:
            'Process withdrawals and deposits within an average of 3 seconds.',
        },
      ],
    },
  },

  Checking: {
    h5_subtitle: 'CASH HARMONY',
    h2_title: 'Checking Account',
    p_description:
      'Simple, fee-free checking. Easy online access for a superb integration.',

    checking_slides: {
      h5_subtitle: 'ACCOUNT TYPES',
      h2_title: 'Maximize your finances with our checking solutions.',
      p_description:
        "Your financial aspirations deserve the best, and that's why we are here for.",
      slides: [
        {
          id: '1',
          icon: <Wallet className='slide-svg' />,
          name: 'Simple Checking',
          link: 'Details',
        },
        {
          id: '2',
          icon: <Hand className='slide-svg' />,
          name: 'Business Checking',
          link: 'Details',
        },
        {
          id: '3',
          icon: <Book className='slide-svg' />,
          name: 'Student Checking',
          link: 'Details',
        },
        {
          id: '4',
          icon: <Elder className='slide-svg' />,
          name: 'Senior Checking',
          link: 'Details',
        },
      ],
    },

    checking_advantages: {
      h5_subtitle: 'CHECKING ADVANTAGES',
      h2_title: 'Your money grows with one swipe at a time.',
      p_description:
        'Get paid to spend! Our checking account offers cool cash rewards with every swipe. Enjoy perks like never before!',
      bullets: [
        {
          id: 1,
          bullet_description:
            'Your transactions are protected with cutting-edge encryption technology.',
        },
        {
          id: 2,
          bullet_description:
            'Manage your money on-the-go with our app—rated 4.8 stars with 100,000+ downloads.',
        },
        {
          id: 3,
          bullet_description:
            'Access over 30,000 ATMs nationwide with zero fees, ensuring convenient and cost-effective cash withdrawals.',
        },
        {
          id: 4,
          bullet_description:
            'Enjoy a 95% success rate in preventing overdrafts, offering flexible protection options to suit your needs.',
        },
        {
          id: 5,
          bullet_description:
            'Utilize integrated budgeting features with a 92% user satisfaction rate, helping you track spending and achieve financial goals.',
        },
        {
          id: 6,
          bullet_description:
            'Settle bills online with a 99% success rate, eliminating postage costs and ensuring timely payments.',
        },
        {
          id: 7,
          bullet_description:
            '85% of users successfully manage their budget with our integrated tools.',
        },
      ],
    },
  },
};

export const ContentCards = {
  Cards: {
    h5_subtitle: 'CARD MANAGEMENT',
    h2_title: 'Supreme Cards',
    p_description:
      'Simplify your financial transactions, gain insights, and earn rewards with our card services.',
    link_button_1: 'Get a card',
    link_button_2: 'Find my branch',

    card_options: {
      h5_subtitle: 'CARD OPTIONS',
      h2_title: 'With Supreme cards you can only go right.',
      p_description:
        ' Choose the card that suits your lifestyle, and enjoy the multiple advantages that we offer through them.',

      slides: [
        {
          id: '1',
          name: 'Credit Card',
          icon: <Card2 className='bullet-card' />,
          advantages: [
            'Earn loyalty points for each transaction and redeem them for exciting rewards.',
            'Flexibility of adjustable credit limits to meet your changing financial needs.',
            'Full protection of your card against unauthorized use.',
            'Travel perks, including insurance coverage, for a worry-free journey.',
            'Access special discounts and offers from our partner merchants with your credit card.',
            'Set up automatic bill payments to ensure you never miss a due date and avoid late fees.',
          ],
        },
        {
          id: '2',
          name: 'Debit Card',
          icon: <Card1 className='bullet-card' />,
          advantages: [
            'Quick and secure payments with contactless technology for added convenience.',
            'Immediate access to your funds anytime, anywhere with our debit card.',
            'Benefit from robust fraud protection measures, ensuring the security of your transactions.',
            'Easily link your debit card to a savings account for simplified fund transfers and better financial management.',
            'Cashback on select purchases, turning everyday spending into savings.',
            'Use your debit card internationally with ease, with competitive foreign exchange rates.',
          ],
        },
      ],
    },
  },
};

export const ContentLoginSignupForm = {
  login: { h2: 'Login', h4: 'Log in to your Supreme Bank Account' },
  signup: { h2: 'Signup', h4: 'Create a Supreme Bank Account' },

  alternateAccount: {
    login: {
      title: "Signup",
      message: "Don't you have an account?",
      button: "Signup",
      link: "/signup"
    },
    signup: {
      title: "Login",
      message: "Already have an account?",
      button: "Login",
      link: "/login" 
    }

  }
};
