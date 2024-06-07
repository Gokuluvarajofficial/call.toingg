import React from 'react'

const Safety: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
        <div className='flex flex-col justify-center items-center'>
            <img src="Security Shield.png" alt="Security" />
            <span className='font-bold text-3xl'>The highest standards of trust and safety</span>
        </div>
        <div className='mt-10'>
            <span>We continue to actively restrict the calls we support, ensuring that our AI phone call technology continues to benefit consumers, businesses, and society as a whole.</span>
        </div>
        <div className="grid grid-cols-2 gap-20 mt-10">
          <div className="flex flex-col items-center">
            <img src="call.png" alt="call" className="h-16 w-20" />
            <span>Call Monitoring</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="project.png" alt="project" className="h-16 w-12" />
            <span>Prompt Injection</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="toll.png" alt="toll" className="h-16 w-16" />
            <span>Rate Limits</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="Audits.png" alt="Audits" className="h-16 w-16" />
            <span>Internal Hard Audits</span>
          </div>
        </div>
    </div>
  )
}

export default Safety
