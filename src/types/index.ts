// Common types used across the application
export interface NavItem {
  name: string;
  path: string;
}

export interface SocialLink {
  icon: React.FC;
  href: string;
  label: string;
  gradient: string;
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}
