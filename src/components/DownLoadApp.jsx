import React from 'react'

const DownLoadApp = () => {
  return (
    <section>
        <div className="download layout-width mx-auto py-4">
            <h3 className='hidden md:block mx-8'>Download Our app now</h3>
            <h5 className='md:hidden mx-8'>Download Our app now</h5>
            <div className=' large_div flex-col-reverse hidden lg:flex '>
                <div className="mobile"></div>
                <div className="text grid grid-cols-2">
                  <div></div>
                  <div>
                  <p>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
                  <div className="logos">
                    <div className="google_play"></div>
                    <div className="app_store"></div>
                  </div>
                  </div>
                </div>
            </div>
            <div className=' mobile_div lg:hidden '>
            <div className="mobile"></div>
            <div className="logos">
              <div className="google_play"></div>
              <div className="app_store"></div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default DownLoadApp