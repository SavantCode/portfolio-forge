import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { PageHeading } from '@/components/portfolio/page-heading';
import { SocialLinks } from '@/components/portfolio/site-shell';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/portfolio';
import { pageHead } from '@/lib/seo';
export const Route = createFileRoute('/contact')({ head: () => pageHead('Contact', 'Get in touch with Alex Morgan for web development and creative collaborations.'), component: Contact });
function Contact() { const [copied, setCopied] = useState(false); return <><PageHeading title="Let's talk." description="An idea, a collaboration, or just a hello. My inbox is open." /><div className="contact-email"><Mail /><a href={`mailto:${profile.email}`}>{profile.email}</a><Button variant="ghost" size="icon" aria-label="Copy email address" onClick={async () => { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2500); }}>{copied ? <Check /> : <Copy />}</Button></div><Button asChild className="mt-6"><a href={`mailto:${profile.email}`}>Send an email <ArrowUpRight /></a></Button><div className="mt-12"><SocialLinks /></div></>; }
