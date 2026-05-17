'use client'

import { X } from 'lucide-react'
import { useEffect } from 'react'
import Image from 'next/image'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    description: string
    tags: string[]
    overview: string
    problem: string
    solution: string
    features: string[]
    technologies: string[]
    challenges: string[]
    impact: string
    image: string
  }
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.3s ease-out'
        }}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-card rounded-2xl shadow-2xl overflow-y-auto border border-border/50 transition-all duration-300"
        style={{
          animation: 'slideUp 0.4s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Project Image */}
        <div className={`h-64 sm:h-80 relative overflow-hidden flex items-center justify-center`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-card/80 hover:bg-card rounded-full border border-border/50 text-foreground hover:text-accent transition-all duration-300 backdrop-blur-sm hover:scale-110"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Title and Description */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{project.title}</h2>
            <p className="text-foreground/70 text-lg leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem and Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Problem Solved
              </h3>
              <p className="text-foreground/70 leading-relaxed">{project.problem}</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Solution
              </h3>
              <p className="text-foreground/70 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Key Features
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-foreground/70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-secondary text-foreground/70 rounded-full text-sm font-medium border border-border/50 hover:border-accent/50 hover:text-accent transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges and Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Challenges &amp; Solutions
            </h3>
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="p-3 bg-secondary/50 rounded-lg border border-border/30 text-foreground/70">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Impact */}
          <div className="space-y-3 p-6 bg-accent/10 rounded-xl border border-accent/20">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Business Impact
            </h3>
            <p className="text-foreground/70 leading-relaxed">{project.impact}</p>
          </div>

          {/* Close Button at Bottom */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Close
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
