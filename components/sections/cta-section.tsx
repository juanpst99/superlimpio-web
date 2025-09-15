import { Container } from '@/components/shared/container'
import { Section } from '@/components/shared/section'
import { CTAButton } from '@/components/cro/cta-button'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
  stats?: Array<{
    value: string
    label: string
  }>
}

export function CTASection({ 
  title, 
  description, 
  buttonText, 
  buttonHref,
  stats 
}: CTASectionProps) {
  return (
    <Section background="gradient" padding="lg">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-neutral-900">
            {title}
          </h2>
          <p className="text-lg mb-8 text-neutral-700">
            {description}
          </p>
          
          {stats && (
            <div className="bg-white/60 backdrop-blur rounded-xl p-6 mb-8 border border-white/80">
              <div className={`grid grid-cols-2 md:grid-cols-${stats.length} gap-4`}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-neutral-900">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-neutral-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <CTAButton
            href={buttonHref}
            variant="primary"
            size="lg"
            pulse
            className="bg-primary hover:bg-primary-600 text-white shadow-elevation-2"
          >
            {buttonText}
          </CTAButton>
        </div>
      </Container>
    </Section>
  )
}