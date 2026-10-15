import { createFileRoute } from '@tanstack/react-router';
import { PageHeading } from '@/components/portfolio/page-heading';
import { SocialLinks } from '@/components/portfolio/site-shell';
import { pageHead } from '@/lib/seo';
import portrait from '@/assets/profile.jpg';
export const Route = createFileRoute('/about')({ head: () => pageHead('About', 'Meet Alex Morgan, a developer who cares about craft, clarity, and the web.'), component: About });
function About() { return <><PageHeading title="About" description="A developer, a curious mind, and a work in progress." /><div className="about-content"><img src={portrait} width={160} height={160} alt="Alex Morgan" className="rounded-full" /><div className="prose-content"><h2>Hey, I'm Alex.</h2><p>I'm a full-stack developer based in Bengaluru, India. I enjoy taking an idea from a rough sketch to a real product, and I care equally about how things work and how they feel.</p><p>My days are mostly spent building with React and TypeScript, exploring open source, and trying to make the web a little more useful and accessible.</p><p>Outside of code, you'll find me reading, going for long walks, or adding another project to an already long list of ideas.</p><SocialLinks /></div></div></>; }
