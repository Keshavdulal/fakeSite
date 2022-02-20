import React from 'react'

import GridContainer from '_components/GridContainer'

const ThirdSection = () => {
  return (
    <section className='mb-16'>
      <GridContainer>
        <div className='col-span-4 md:col-span-7 md:col-start-2.5 text-center py-10 '>
          <h2 className='text-size-h2 text-secondary mb-20'>
            Ready to have your cake and eat it too?
          </h2>
          <p className='text-tertiary text-size-reg px-10 font-light'>
            Start by designing the experience you have in mind. We'll guide you through each step.
            if your experience meets the quality standards, you'll hear more about what's next.
          </p>
        </div>
      </GridContainer>
    </section>
  )
}

export default ThirdSection
