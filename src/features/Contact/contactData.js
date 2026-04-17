// src/features/Contact/contactData.js
import { InstagramIcon, WhatsappIcon } from '../../ui/icons';

export const contactData = [
  {
    type: 'phone',
    title: 'Phone',
    href: 'tel:+493091588492',
    value: '+49 30 915-88492',
  },
  {
    type: 'socials',
    title: 'Socials',
    links: [
      {
        href: 'https://www.instagram.com',
        label: 'Instagram',
        icon: InstagramIcon,
      },
      {
        href: 'https://wa.me/493091588492',
        label: 'WhatsApp',
        icon: WhatsappIcon,
      },
    ],
  },
  {
    type: 'address',
    title: 'Address',
    value: 'Wallstraße 9-13, 10179 Berlin, Deutschland',
  },
  {
    type: 'text',
    title: 'Working Hours',
    value: '24 hours a day',
  },
];
