'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import { Fragment } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const formattedPaths = {
  assignors: 'Cedentes',
  payables: 'Pagáveis',
}

type Paths = keyof typeof formattedPaths

export function BreadcrumbWithSegments() {
  const segments = useSelectedLayoutSegments()

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          {segments.length === 0 ? (
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        <Breadcrumbs segments={segments} />
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export function Breadcrumbs({ segments }: { segments: string[] }) {
  return segments.map((segment, index) => {
    const isLastSegment = segments.length - 1 === index
    const breadcrumb = formattedPaths[segment as Paths] || segment

    console.log(segment)

    return (
      <Fragment key={segment}>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          {isLastSegment ? (
            <BreadcrumbPage key={segment}>{breadcrumb}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink key={segment} href={`/${segment}`}>
              {breadcrumb}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      </Fragment>
    )
  })
}
