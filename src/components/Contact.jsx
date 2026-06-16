import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './BrandIcons.jsx'
import Magnetic from './Magnetic.jsx'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Vivaan-Vora', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vivaan-vora/', icon: LinkedInIcon },
]

function Contact() {
  return (
    <section id="contact" className="relative px-5 py-28 sm:px-8">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-portfolio-border to-transparent" />
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-portfolio-border bg-portfolio-surface/55 p-8 backdrop-blur-xl sm:p-12 lg:p-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-portfolio-accent/15 blur-[100px]" />
        <div className="absolute -bottom-32 left-16 h-64 w-64 rounded-full bg-portfolio-violet/10 blur-[110px]" />

        <div className="relative">
          <p className="reveal font-heading text-sm font-bold uppercase tracking-[0.45em] text-portfolio-accent">
            Contact
          </p>
          <h2 className="reveal mt-5 font-heading text-5xl font-bold tracking-[-0.06em] text-portfolio-primary sm:text-7xl">
            Let&apos;s build something.
          </h2>
          <Magnetic className="reveal mt-10">
            <a
              href="mailto:vivora@ucsc.edu"
              className="inline-flex items-center gap-4 break-all font-heading text-3xl font-bold tracking-[-0.04em] text-portfolio-primary transition-colors duration-300 hover:text-portfolio-accent sm:text-5xl"
            >
              <Mail className="hidden text-portfolio-accent sm:block" size={38} />
              vivora@ucsc.edu
            </a>
          </Magnetic>

          <div className="reveal mt-10 flex flex-wrap gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Magnetic key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-portfolio-border bg-portfolio-bg/70 px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-portfolio-muted transition-colors duration-300 hover:border-portfolio-accent hover:text-portfolio-accent"
                >
                  <Icon size={18} />
                  {label}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
