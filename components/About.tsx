export default function About() {
  const skills = [
    ['React', 'Next.js', 'TypeScript'],
    ['Tailwind CSS', 'UI/UX Design', 'Responsive Design'],
    ['Web Performance', 'Accessibility', 'Web Standards'],
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            About Me
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Building Scalable Systems with Strong Business Understanding
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed text-lg">
              I’m a Fullstack & Backend Engineer with professional experience
              building enterprise applications, internal operational systems,
              warehouse management platforms, supplier systems, and API integrations.
              My focus is not only on writing code, but on designing systems that are
              scalable, maintainable, and aligned with real business processes.
            </p>

            <p className="text-foreground/80 leading-relaxed text-lg">
              I have a strong interest in database architecture, code architecture,
              and transforming complex business processes into efficient digital
              solutions. I enjoy analyzing workflows, designing structured data
              relationships, and creating applications that help teams work faster,
              more accurately, and more efficiently.
            </p>

            <p className="text-foreground/80 leading-relaxed text-lg">
              Over the years, I’ve worked closely with users, operational teams, and
              stakeholders to bridge technical implementation with business needs —
              ensuring every feature delivers real impact, not just functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              ['Database Architecture', 'System Design'],
              ['Code Architecture', 'Business Process Analysis'],
              ['Laravel', 'REST API Development'],
              ['MySQL', 'Warehouse Management System'],
              ['Backend Engineering', 'Enterprise Application'],
            ].map((row, idx) => (
              <div key={idx} className="flex flex-wrap gap-2">
                {row.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Experience
          </h3>

          <div className="space-y-8">
            {[
              {
                title: 'Financial Web Developer',
                company: 'PT. Telkom Akses',
                period: 'Jan 2021 - Present',
                description:
                  'Developed and maintained enterprise internal applications including invoice systems, warehouse management systems, supplier management platforms, and API integrations. Focused on scalable backend architecture, database structure design, business process implementation, and operational system reliability.',
              },
              {
                title: 'Freelance Fullstack Developer',
                company: 'Freelance / Remote',
                period: 'Jun 2020 - Present',
                description:
                  'Built various applications for e-commerce, reporting systems, dashboards, document management, and custom business solutions using Laravel and CodeIgniter while adapting quickly to client requirements and fast-paced revisions.',
              },
              {
                title: 'IT Support & Web Developer',
                company: 'PT. Satu Wigola (Tororo.com)',
                period: 'Mar 2020 - Oct 2020',
                description:
                  'Developed internal operational tools and supported e-commerce website maintenance using Magento and CodeIgniter while handling production issues and operational support.',
              },
              {
                title: 'Back-End Developer Intern',
                company: 'PT. Telkom Indonesia (Logee Distribution)',
                period: 'Oct 2019 - Mar 2020',
                description:
                  'Developed REST APIs using Node.js and Restify with MongoDB and MinIO while learning system debugging, error tracing, and scalable backend development practices.',
              },
              {
                title: 'Back-End Developer Intern',
                company: 'PT. Unitokopo (Campaign.com)',
                period: 'Oct 2019 - Mar 2020',
                description:
                  'Developed internal management modules and RESTful APIs using Node.js, Express, and Firebase while participating in testing and go-live preparation processes.',
              },
            ].map((exp, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent mt-2" />

                  {idx < 4 && (
                    <div className="w-1 h-16 bg-border my-2" />
                  )}
                </div>

                <div className="pb-8">
                  <h4 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h4>

                  <p className="text-accent font-medium text-sm">
                    {exp.company}
                  </p>

                  <p className="text-foreground/60 text-sm mb-2">
                    {exp.period}
                  </p>

                  <p className="text-foreground/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
