import { createFileRoute } from '@tanstack/react-router';
import { PageHeading } from '@/components/portfolio/page-heading';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/privacy')({ head: () => pageHead('Privacy', 'Privacy information for Alex Morgan’s personal portfolio.'), component: Privacy });
function Privacy() { return <><PageHeading title="Privacy" description="A small website. A simple approach to privacy." /><div className="prose-content"><h2>Your information</h2><p>This portfolio does not require an account or collect personal information through forms. Email links open your own email application.</p><h2>Local preferences</h2><p>Your theme preference is saved in your browser so it can be remembered on your next visit. No tracking cookies are used.</p><h2>External links</h2><p>Links to external services are subject to those services’ own privacy policies.</p></div></>; }
