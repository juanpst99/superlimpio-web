import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("py-4", className)}>
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className="text-neutral-600 hover:text-primary transition-colors"
          >
            Inicio
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-neutral-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-neutral-600 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-900 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}