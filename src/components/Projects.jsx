import { ExternalLink, Star } from 'lucide-react'
import { GitHubIcon } from './BrandIcons.jsx'

const projects = [
  {
    name: 'PID Controller',
    subtitle: 'Self-Balancing Inverted Pendulum',
    featured: true,
    description:
      'Classic robotics control benchmark balancing an inverted pendulum on a moving cart using a manual PID controller built from first principles. Demonstrates full-loop feedback control of an unstable nonlinear system.',
    details:
      'Features physics from scratch, anti-windup PID, live pygame rendering, real-time matplotlib plots, runtime gain tuning with sliders, disturbance metrics, and CSV/JSON logging.',
    stack: ['Python', 'pygame', 'matplotlib', 'numpy'],
    links: [{ label: 'GitHub', href: 'https://github.com/Vivaan-Vora', icon: GitHubIcon }],
  },
  {
    name: 'Mammoly',
    subtitle: 'Breast Cancer Risk Assessment',
    featured: true,
    description:
      'Risk prediction platform using scikit-learn models trained on 1,800+ real clinical records. Includes a Streamlit frontend and a bias audit dashboard surfacing model disparities across 4 demographic subgroups.',
    details: 'Reached 91% validation accuracy with Logistic Regression and Random Forest model comparisons.',
    stack: ['Python', 'scikit-learn', 'Streamlit'],
    links: [{ label: 'Live', href: 'https://mammoly.lovable.app', icon: ExternalLink }],
  },
]

function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28 sm:px-8">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-portfolio-accent/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.45em] text-portfolio-accent">
            Projects
          </p>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-[-0.05em] text-portfolio-primary sm:text-6xl">
            Control systems, clinical ML, and applied engineering.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="reveal group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-portfolio-accent/45 hover:shadow-[0_24px_120px_rgba(91,156,246,0.16)] sm:p-8"
            >
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-portfolio-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-3xl font-bold tracking-[-0.04em] text-portfolio-primary">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.26em] text-portfolio-muted">
                    {project.subtitle}
                  </p>
                </div>
                {project.featured && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-portfolio-accent/40 bg-portfolio-accent/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-portfolio-accent">
                    <Star size={13} fill="currentColor" />
                    Featured
                  </span>
                )}
              </div>

              <p className="mt-8 text-lg leading-8 text-portfolio-muted">{project.description}</p>
              <p className="mt-5 text-base leading-7 text-portfolio-muted/90">{project.details}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-portfolio-border bg-portfolio-bg/70 px-3 py-2 text-sm text-portfolio-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                {project.links.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-portfolio-border px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-portfolio-primary transition-colors duration-300 hover:border-portfolio-accent hover:text-portfolio-accent"
                    aria-label={`${project.name} ${label}`}
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
