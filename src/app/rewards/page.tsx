import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Rewards | Power Market',
  description: 'Everything you need right around the corner',
}

export default function Rewards() {
  return (
    <div>
      <div className='new-canvas_0'>
        <div className='new-canvas_0-mask'></div>
        <h1 className='new-canvas_0-text'>Power Market Rewards</h1>
      </div>

      <div className='new-canvas_1'>
        <h2 className='new-canvas_1-text'>How It Works</h2>
      </div>

      <div className='new-canvas_2'></div>

      <div className='new-canvas_3'></div>

      <div className='new-canvas_4 d-flex justify-content-around mt-5'>
        <div className='new-canvas_4-pic1'></div>
        <div className='new-canvas_4-pic2'></div>
      </div>

      <div className='new-canvas_5 d-flex justify-content-around mt-5 mb-5'>
        <div className='new-canvas_5-pic1 d-flex justify-content-center align-items-center flex-column'>
          <h4 className='new-canvas_5-text'>Download Our App!</h4>
          <div className='d-flex justify-content-around w-100'>
            <div className='new-canvas_5-pic2'></div>
            <div className='new-canvas_5-pic3'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
