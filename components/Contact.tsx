import Link from 'next/link'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export default function Contact() {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:dwikydanov39@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dwiky-danov-30021217a/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/danovcode' },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">Get in Touch</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-foreground/70 text-lg mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out if you have any questions or just want to connect.
        </p>

        <div className="inline-flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg mb-16 hover:shadow-lg transition-shadow">
          <Mail className="text-accent" size={20} />
          <Link
            href="mailto:dwikydanov39@gmail.com"
            className="text-foreground hover:text-accent transition-colors font-medium"
          >
            dwikydanov39@gmail.com
          </Link>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon size={20} />
              </Link>
            )
          })}
        </div>

        <div className="border-t border-border pt-12">
          <p className="text-foreground/60 text-sm">
            © 2024 My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
