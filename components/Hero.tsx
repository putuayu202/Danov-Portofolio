'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p
                className="text-accent font-medium text-sm uppercase tracking-widest animate-fadeIn opacity-0"
                style={{
                  animation: isLoaded
                    ? 'fadeIn 0.6s ease-out 0.2s forwards'
                    : 'none',
                }}
              >
                Fullstack & Backend Engineer
              </p>

              <h1
                className="text-4xl sm:text-5xl lg:text-6l font-bold text-foreground leading-tight animate-fadeIn opacity-0"
                style={{
                  animation: isLoaded
                    ? 'fadeIn 0.6s ease-out 0.4s forwards'
                    : 'none',
                }}
              >
                Turning Complex
                <span className="text-accent"> Business Processes </span>
                Into Scalable Digital Solutions
              </h1>

              <p
                className="text-lg text-foreground/70 leading-relaxed animate-fadeIn opacity-0 max-w-2xl"
                style={{
                  animation: isLoaded
                    ? 'fadeIn 0.6s ease-out 0.6s forwards'
                    : 'none',
                }}
              >
                Experienced in building enterprise applications, designing scalable
                database structures, and developing maintainable system
                architectures. Focused on transforming real operational and business
                needs into efficient, reliable, and impactful applications.
              </p>
            </div>

            {/* Highlight Stats */}
            <div
              className="flex flex-wrap gap-4 pt-2 animate-fadeIn opacity-0"
              style={{
                animation: isLoaded
                  ? 'fadeIn 0.6s ease-out 0.7s forwards'
                  : 'none',
              }}
            >
              {[
                '6+ Years Experience',
                'Enterprise Systems',
                'Database Architecture',
                'Backend Engineering',
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-secondary text-foreground/80 text-sm border border-border"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 pt-6 animate-fadeIn opacity-0"
              style={{
                animation: isLoaded
                  ? 'fadeIn 0.6s ease-out 0.8s forwards'
                  : 'none',
              }}
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-300 font-medium hover:shadow-lg hover:scale-105"
              >
                Explore My Projects
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg hover:bg-secondary transition-all duration-300 font-medium hover:shadow-lg hover:scale-105"
              >
                Let&apos;s Collaborate
              </Link>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-fadeIn opacity-0"
              style={{
                animation: isLoaded
                  ? 'fadeIn 0.8s ease-out 0.4s forwards'
                  : 'none',
              }}
            >
              {/* Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl transform -rotate-3 blur-2xl" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-accent/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent z-10" />

                <Image
                  src="/profile.jpg"
                  alt="Dwiky Danov"
                  fill
                  priority
                  quality={90}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-10 top-10 hidden lg:block">
                <div className="px-4 py-3 rounded-2xl border border-border bg-background/80 backdrop-blur-md shadow-xl">
                  <p className="text-xs text-foreground/60 mb-1">
                    Focus Area
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    System Architecture
                  </p>
                </div>
              </div>

              <div className="absolute -right-8 bottom-10 hidden lg:block">
                <div className="px-4 py-3 rounded-2xl border border-border bg-background/80 backdrop-blur-md shadow-xl">
                  <p className="text-xs text-foreground/60 mb-1">
                    Expertise
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Database & Backend
                  </p>
                </div>
              </div>

              {/* Blur Effects */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
