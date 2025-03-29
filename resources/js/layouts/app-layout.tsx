import { SiteFooter } from '@/components/site-footer';
import SiteHeader from '@/components/site-header';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
  <div className="flex min-h-screen flex-col" {...props}>
    <SiteHeader />
    <main className="flex-1">
      {children}
    </main>
    <SiteFooter />
  </div>);
