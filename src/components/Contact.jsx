import Magnetic from './Magnetic.jsx'

const contactLinks = [
  { label: 'Email', href: 'mailto:vivora@ucsc.edu' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vivaan-vora/' },
  { label: 'GitHub', href: 'https://github.com/Vivaan-Vora' },
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

          <div className="reveal mt-10 flex flex-wrap items-center gap-3 text-lg text-portfolio-muted">
            {contactLinks.map((link, index) => (
              <span key={link.label} className="inline-flex items-center gap-3">
                {index > 0 && <span aria-hidden="true">·</span>}
                <Magnetic>
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                    className="font-medium text-portfolio-primary transition-colors duration-300 hover:text-portfolio-accent"
                  >
                    {link.label}
                  </a>
                </Magnetic>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
