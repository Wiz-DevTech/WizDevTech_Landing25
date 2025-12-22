'use client'

import { Button } from '@/components/ui/button'
import { 
  HeroSection, 
  WhatWeDoSection, 
  HowEngagementsWorkSection, 
  WhoThisIsForSection, 
  LeadershipSection, 
  CTASection 
} from '@/components/wizdevtech-landing'
import { ContactForm } from '@/components/contact-form'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">WizDevTech</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#what-we-do" className="text-secondary hover:text-primary transition-colors">
                What We Do
              </a>
              <a href="#how-it-works" className="text-secondary hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#who-its-for" className="text-secondary hover:text-primary transition-colors">
                Who It's For
              </a>
              <a href="#leadership" className="text-secondary hover:text-primary transition-colors">
                Leadership
              </a>
              <a href="#start-execution" className="text-secondary hover:text-primary transition-colors">
                Start Execution
              </a>
            </nav>
            <Button variant="outline" size="sm" className="border-border text-primary hover:bg-surface-subtle">
              Start Execution
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <div id="what-we-do">
          <WhatWeDoSection />
        </div>
        <div id="how-it-works">
          <HowEngagementsWorkSection />
        </div>
        <div id="who-its-for">
          <WhoThisIsForSection />
        </div>
        <div id="leadership">
          <LeadershipSection />
        </div>
        <CTASection />
        <div id="start-execution">
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface mt-auto">
        <div className="container py-8">
          <div className="text-center">
            <p className="text-secondary text-sm">
              © 2024 WizDevTech. Embedded execution services for teams who need things finished.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}