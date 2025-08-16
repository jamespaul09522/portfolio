import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import React from 'react'
import { AnimatedTooltipPreview } from './animated-tooltip'
import { LinkPreview } from '@/components/ui/link-preview'
import { LinkPreviewDemo } from './link-preview'

function Footer() {
  return (
    <div className='flex justify-between p-40'>
        <div>Built by <LinkPreview url="https://www.linkedin.com/in/james-paul-57014122a/" className="font-bold">
                  James
                </LinkPreview>{" "}</div>
        <div>
        {/* <LinkPreviewDemo /> */}

        <AnimatedTooltipPreview /> 
        </div>
        {/* <div>Follow me</div> */}
    </div>
  )
}

export default Footer