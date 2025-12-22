'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface FormData {
  name: string
  email: string
  company: string
  whatIsUnfinished: string
  whatHaveYouTried: string
  consequences: string
  timeline: string
  budget: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    whatIsUnfinished: '',
    whatHaveYouTried: '',
    consequences: '',
    timeline: '',
    budget: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Form submitted:', formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      whatIsUnfinished: '',
      whatHaveYouTried: '',
      consequences: '',
      timeline: '',
      budget: ''
    })
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-24 bg-surface">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-primary mb-6">Start Execution</h2>
            <p className="text-lg text-secondary leading-relaxed">
              Complete this form to begin. The questions below help us determine if we're a fit 
              for your specific execution needs.
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">
                Execution Request Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-primary">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-primary">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-primary">
                    Company *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                {/* Core Filtering Questions */}
                <div>
                  <Label htmlFor="whatIsUnfinished" className="text-sm font-medium text-primary">
                    What is currently unfinished or unstable? *
                  </Label>
                  <Textarea
                    id="whatIsUnfinished"
                    value={formData.whatIsUnfinished}
                    onChange={(e) => handleInputChange('whatIsUnfinished', e.target.value)}
                    required
                    rows={3}
                    className="mt-1"
                    placeholder="Be specific about systems, tools, workflows, or processes that need completion or stabilization."
                  />
                </div>

                <div>
                  <Label htmlFor="whatHaveYouTried" className="text-sm font-medium text-primary">
                    What have you already tried? *
                  </Label>
                  <Textarea
                    id="whatHaveYouTried"
                    value={formData.whatHaveYouTried}
                    onChange={(e) => handleInputChange('whatHaveYouTried', e.target.value)}
                    required
                    rows={3}
                    className="mt-1"
                    placeholder="Internal team efforts, previous vendors, tools attempted, approaches considered."
                  />
                </div>

                <div>
                  <Label htmlFor="consequences" className="text-sm font-medium text-primary">
                    What happens if this is not resolved in the next 60–90 days? *
                  </Label>
                  <Textarea
                    id="consequences"
                    value={formData.consequences}
                    onChange={(e) => handleInputChange('consequences', e.target.value)}
                    required
                    rows={3}
                    className="mt-1"
                    placeholder="Business impact, team productivity issues, revenue effects, operational risks."
                  />
                </div>

                {/* Timeline and Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="timeline" className="text-sm font-medium text-primary">
                      Timeline *
                    </Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (within 2 weeks)</SelectItem>
                        <SelectItem value="short-term">Short-term (1-2 months)</SelectItem>
                        <SelectItem value="medium-term">Medium-term (2-4 months)</SelectItem>
                        <SelectItem value="long-term">Long-term (4+ months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-sm font-medium text-primary">
                      Budget Range *
                    </Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </div>

                <p className="text-xs text-muted text-center">
                  All fields are required. We review each submission personally and respond within 2 business days.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}