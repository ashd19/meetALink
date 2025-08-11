import React from 'react'
import { Button } from '@/components/ui/button'
import CardBanner from '@/components/card-04'
function Page
() {
  return (
    <div className=""> 
    <div className="flex items-center justify-center">
      <div className="heading">
        <Button className="flex items-center mb-5">Create links </Button>
      </div>
    
 </div>
   <div className='flex flex-row gap-5' >
    <CardBanner title='23 RD July Batch' time='8:15 PM' link='https://google.com'/>
    <CardBanner title='30 Th July Batch' time='6:15 PM' link='https://google.com'/>
   </div>

    
    </div>

  )
}

export default Page
