'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, XCircle, Clock, Target, Users, FileCheck } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="h-full transition-all hover-lift border-border bg-surface">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="text-primary">{icon}</div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-secondary leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

interface EngagementFeatureProps {
  title: string
  description: string
}

function EngagementFeature({ title, description }: EngagementFeatureProps) {
  return (
    <div className="flex gap-3">
      <CheckCircle className="text-success mt-0.5 flex-shrink-0" size={20} />
      <div>
        <h4 className="font-semibold text-primary mb-1">{title}</h4>
        <p className="text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}

interface AudienceItemProps {
  title: string
  description: string
  isFor: boolean
}

function AudienceItem({ title, description, isFor }: AudienceItemProps) {
  return (
    <div className="flex gap-3">
      {isFor ? (
        <CheckCircle className="text-success mt-0.5 flex-shrink-0" size={20} />
      ) : (
        <XCircle className="text-error mt-0.5 flex-shrink-0" size={20} />
      )}
      <div>
        <h4 className="font-semibold text-primary mb-1">{title}</h4>
        <p className="text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display font-bold text-primary mb-8">
            Embedded Execution for Teams Who Need Things Finished
          </h1>
          <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Enter your existing systems, complete what's half-done, stabilize what's breaking, 
            and exit cleanly. No vision, no teaching—just execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Start Execution
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhatWeDoSection() {
  const services = [
    {
      icon: <FileCheck size={24} />,
      title: "Finish Half-Built Systems",
      description: "Complete tools, documentation, boards, and setups that were started but never finished. Typical engagement: 2-4 weeks."
    },
    {
      icon: <Target size={24} />,
      title: "Repair Breaking Workflows", 
      description: "Fix automation and processes that are failing downstream. We enter after internal teams stall or vendors disengage."
    },
    {
      icon: <Clock size={24} />,
      title: "Clean & Handoff Data",
      description: "Migrate, organize, and structure data with clear documentation. Deliverables include documented processes and training materials."
    },
    {
      icon: <Users size={24} />,
      title: "Convert Notes to Tasks",
      description: "Transform meeting notes, voice memos, and scattered ideas into completed, trackable tasks. 1-2 week engagements typical."
    }
  ]

  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-primary mb-6">What We Do</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              We provide embedded execution inside active systems. Engagements are 2–6 weeks, 
              scoped, and end with documented handoff.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function HowEngagementsWorkSection() {
  const features = [
    {
      title: "Engagements are 2–6 weeks",
      description: "Scoped with clear start and end dates. We define deliverables before work begins."
    },
    {
      title: "Specific outcomes agreed upfront", 
      description: "No scope creep or vague promises. You know exactly what will be completed."
    },
    {
      title: "We execute, we don't educate",
      description: "Your team focuses on their work, not learning our processes. No training sessions included."
    },
    {
      title: "Authority through task completion",
      description: "Our influence comes from delivering results, not persuasion or presentations."
    },
    {
      title: "Documented handoff required",
      description: "Every engagement includes proper documentation and knowledge transfer for sustainable continuity."
    },
    {
      title: "Limited meetings",
      description: "Focused execution with maximum 2 meetings per week. Progress updates are written, not verbal."
    }
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-primary mb-6">How Engagements Work</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              Our process eliminates ambiguity. These constraints ensure clean, 
              professional execution without drama.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <EngagementFeature
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhoThisIsForSection() {
  const forAudience = [
    {
      title: "Founders with stalled projects",
      description: "People who have specific unfinished systems and need them completed within 60-90 days."
    },
    {
      title: "Teams under 20 people",
      description: "Groups that lack specialized ops talent but have clear execution needs and defined problems."
    },
    {
      title: "Documented work environments",
      description: "Organizations that value written processes, async communication, and clear deliverables."
    },
    {
      title: "Budget-approved decision makers",
      description: "Those with allocated budget and authority to hire execution specialists for specific projects."
    }
  ]

  const notForAudience = [
    {
      title: "Strategy-only requests",
      description: "Clients who want advice, planning, or consulting without implementation."
    },
    {
      title: "Team building or coaching",
      description: "Those looking for motivation, inspiration, or team development exercises."
    },
    {
      title: "Open-ended retainers",
      description: "Organizations seeking ongoing advisory relationships without defined exit points."
    },
    {
      title: "Cultural or identity work",
      description: "Projects focused on branding, narrative building, or organizational philosophy."
    }
  ]

  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-primary mb-6">Who This Is For</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              These specific criteria help ensure successful engagements. 
              If you don't fit these profiles, we're likely not the right partner.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-8 flex items-center gap-2">
                <CheckCircle className="text-success" size={24} />
                We Work Well With
              </h3>
              <div className="space-y-6">
                {forAudience.map((item, index) => (
                  <AudienceItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    isFor={true}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-8 flex items-center gap-2">
                <XCircle className="text-error" size={24} />
                We Don't Work With
              </h3>
              <div className="space-y-6">
                {notForAudience.map((item, index) => (
                  <AudienceItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    isFor={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function LeadershipSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h2 font-bold text-primary mb-8">Leadership</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Teri Massey</h3>
            <p className="text-secondary leading-relaxed">
              15+ years stabilizing broken systems and completing stalled projects. 
              Specializes in entering complex situations after other vendors have failed, 
              delivering specific outcomes, and documenting processes for handoff.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h2 font-bold text-primary mb-6">Have Specific Unfinished Work?</h2>
          <p className="text-lg text-secondary mb-12 leading-relaxed">
            If you have defined problems and budget allocated, 
            complete the form below to start execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Start Execution
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}