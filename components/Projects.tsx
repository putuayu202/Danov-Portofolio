'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'Lensa Inventory',
      company: 'PT. Telkom Akses',
      description:
        'Enterprise warehouse management system used across 32 service areas and 451 warehouses to control material usage, reduce fraud, and improve operational efficiency.',
      tags: [
        'Laravel 12',
        'Microservices',
        'API Gateway',
        'SAP',
        'Kibana',
      ],
      image: '/lensainventory.png',

      links: {
        demo: '#',
        github: '#',
      },

      overview:
        'Developed a large-scale warehouse management platform designed to support operational monitoring, material transactions, and cost control processes for PT. Telkom Akses.',

      problem:
        'Material usage monitoring was difficult to control at scale, creating operational inefficiencies and potential fraud risks across warehouses and field technicians.',

      solution:
        'Built an integrated warehouse ecosystem with scalable backend architecture, centralized monitoring, and SAP integration to improve material transparency and operational control.',

      features: [
        'Warehouse stock management',
        'Material transaction monitoring',
        'SAP integration',
        'Fraud prevention monitoring',
        'Operational dashboard and analytics',
        'Role-based access management',
      ],

      technologies: [
        'Laravel 12',
        'Microservices',
        'MySQL',
        'Kibana',
        'API Gateway',
        'SAP Integration',
      ],

      challenges: [
        'Designed scalable architecture for thousands of active operational users',
        'Handled complex warehouse transaction flows and material tracking',
        'Integrated enterprise systems with SAP and centralized services',
      ],

      impact:
        'Used by more than 12,000 technicians across 32 service areas and 451 warehouses while helping improve material usage transparency and operational efficiency.',
    },

    {
      title: 'Ekspedisi Online',
      company: 'PT. Telkom Akses',
      description:
        'Digital expedition operational and payment management system used for preparation, execution, monitoring, evaluation, and invoicing processes with expedition partners.',

      tags: [
        'CodeIgniter 2',
        'Enterprise System',
        'Operational Monitoring',
      ],

      image: '/Myta.png',

      links: {
        demo: '#',
        github: '#',
      },

      overview:
        'Built a parallel expedition operational module inside MyTA ecosystem that manages the complete lifecycle of expedition operational activities and payments.',

      problem:
        'Expedition operational processes and billing validations were fragmented, making monitoring, evaluation, and payment processing inefficient.',

      solution:
        'Developed a centralized expedition management module with end-to-end operational flow and billing monitoring capabilities.',

      features: [
        'Preparation and execution workflow',
        'Expedition monitoring and tracking',
        'Evaluation management',
        'Billing and payment processing',
        'Multi-submodule parallel workflow',
        'Partner expedition management',
      ],

      technologies: [
        'CodeIgniter 2',
        'MySQL',
        'jQuery',
        'Bootstrap',
      ],

      challenges: [
        'Managed complex parallel workflows across multiple operational submodules',
        'Ensured accurate billing validation for expedition partners',
        'Designed stable operational monitoring for nationwide expedition activities',
      ],

      impact:
        'Supported 16 expedition partners and helped process more than 2,000 expedition billings across operational regions.',
    },

    {
      title: 'Invoice Online PSB',
      company: 'PT. Telkom Akses',
      description:
        'Digital invoicing and documentation system for New Installation Service Partners with fully integrated workflows from assignment letters to invoicing.',

      tags: [
        'CodeIgniter 2',
        'API Gateway',
        'Privy',
        'RPA',
        'CRM',
      ],

      image: '/Myta.png',

      links: {
        demo: '#',
        github: '#',
      },

      overview:
        'Created a fully digitalized invoicing ecosystem for installation service partners with automated workflows, digital documentation, and external integrations.',

      problem:
        'Invoice processing and document verification were heavily manual, time-consuming, and difficult to track operationally.',

      solution:
        'Developed an integrated invoicing platform with automation, digital signing, and centralized validation workflows.',

      features: [
        'Digital invoicing workflow',
        'Assignment and reconciliation modules',
        'Privy digital signature integration',
        'Automated document processing',
        'Billing validation system',
        'Operational monitoring dashboard',
      ],

      technologies: [
        'CodeIgniter 2',
        'MySQL',
        'API Gateway',
        'Privy Integration',
        'RPA',
        'CRM',
      ],

      challenges: [
        'Integrated multiple external enterprise systems into one workflow',
        'Automated operational document validation and invoicing process',
        'Handled large-scale invoice transactions with high operational dependency',
      ],

      impact:
        'Supported 211 installation partners and successfully processed more than 13,000 invoice transactions through fully digitalized operational flows.',
    },

    {
      title: 'e-Pilammas',
      company: 'Kementerian Pendidikan Banyumas',
      description:
        'Personnel and salary recap system for honorary teachers, PPPK, and civil servants used for salary processing, incentives, and recommendation documentation.',

      tags: [
        'Laravel',
        'Education System',
        'Government Project',
        'MySQL',
      ],

      image: '/epilam.png',

      links: {
        demo: '#',
        github: '#',
      },

      overview:
        'Developed a centralized education personnel recap system to simplify salary management and recommendation administration processes.',

      problem:
        'Personnel data and salary recapitulation were difficult to manage manually across multiple employment categories.',

      solution:
        'Created a digital platform for centralized personnel recap, salary support, and recommendation administration.',

      features: [
        'Personnel data management',
        'Salary recap system',
        'Incentive documentation',
        'Recommendation letter management',
        'Employee categorization',
      ],

      technologies: [
        'Laravel',
        'MySQL',
        'Bootstrap',
        'jQuery',
      ],

      challenges: [
        'Designed flexible database structures for multiple employee categories',
        'Maintained data consistency for payroll and recommendation processing',
        'Simplified complex administrative workflows into one platform',
      ],

      impact:
        'Improved administrative efficiency and simplified personnel recap processes for educational operational teams.',
    },

    {
      title: 'Supplier Management',
      company: 'PT. Telkom Akses',
      description:
        'Enterprise partner management module inside MyTA ecosystem used to manage supplier collaboration, contracts, warnings, and operational clustering.',

      tags: [
        'CodeIgniter 2',
        'Contract Management',
        'Enterprise System',
      ],

      image: '/Myta.png',

      links: {
        demo: '#',
        github: '#',
      },

      overview:
        'Built supplier management modules to support operational collaboration and partnership governance processes within PT. Telkom Akses.',

      problem:
        'Supplier monitoring and contract management processes lacked centralized operational visibility and structured evaluation.',

      solution:
        'Developed integrated supplier management modules with operational monitoring and contract governance capabilities.',

      features: [
        'Contract management',
        'Warning letter management',
        'Operational clustering',
        'Supplier capability monitoring',
        'Supplier documentation management',
      ],

      technologies: [
        'CodeIgniter 2',
        'MySQL',
        'Bootstrap',
        'jQuery',
      ],

      challenges: [
        'Designed relational database structures for supplier operational monitoring',
        'Maintained stable contract management workflows',
        'Handled operational data consistency across multiple modules',
      ],

      impact:
        'Helped improve operational governance and monitoring for supplier collaboration processes.',
    },

    {
      title: 'Logee Distribution',
      company: 'PT. Telkom Indonesia',
      description:
        'Digital supply chain distribution platform connecting producers, distributors, and business outlets to streamline ordering and product distribution.',

      tags: [
        'Node.js',
        'Restify',
        'MongoDB',
        'MinIO',
      ],

      image: '/logeedisri.png',

      links: {
        demo: '#',
        github: '#',
      },

      overview:
        'Contributed as Backend Developer Intern in developing REST APIs and operational backend services for digital supply chain distribution ecosystem.',

      problem:
        'Distribution and ordering processes between suppliers and outlets required more efficient digital operational workflows.',

      solution:
        'Developed backend services and APIs to support supply chain integration and digital ordering processes.',

      features: [
        'REST API services',
        'Supply chain integration',
        'Product distribution workflow',
        'Data storage services',
        'Operational backend services',
      ],

      technologies: [
        'Node.js',
        'Restify',
        'MongoDB',
        'MinIO',
      ],

      challenges: [
        'Learned scalable backend architecture during internship environment',
        'Handled API service integration and storage management',
        'Improved debugging and backend tracing capabilities',
      ],

      impact:
        'Supported development of Telkom Indonesia digital distribution ecosystem for operational supply chain management.',
    },
  ]

  return (
    <>
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">Featured Work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Selected Projects
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl">
              A showcase of my recent work, demonstrating skills in design, development, and problem-solving across various technologies and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(idx)}
                className="group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
              >
                {/* Project Image */}
                <div className={`h-48 flex items-center justify-center relative overflow-hidden`}>
                  <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm font-semibold text-foreground bg-accent/90 px-4 py-2 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(idx)
                      }}
                      className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary transition-colors font-medium hover:scale-110"
                    >
                      View Details
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-all duration-300 font-medium hover:shadow-lg hover:scale-105"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          project={projects[selectedProject]}
        />
      )}
    </>
  )
}
