import { Github, Mail, Linkedin } from 'lucide-react';
import { NavItem, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    icon: Github, 
    href: 'https://github.com/just-sampath', 
    label: 'GitHub',
    gradient: 'from-[#6e5494] to-[#24292e]'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com/in/just-sampath', 
    label: 'LinkedIn',
    gradient: 'from-[#0077B5] to-[#00A0DC]'
  },
  { 
    icon: Mail, 
    href: 'mailto:ysampath36@gmail.com', 
    label: 'Email',
    gradient: 'from-[#EA4335] to-[#FBBC05]'
  }
];
