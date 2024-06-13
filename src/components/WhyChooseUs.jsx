import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="">
        <div className="why_choose_us layout-width mx-auto py-4">
            <h2 className='mx-8'>Why Choose Us?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 place-items-center" >
                <Card content={"Community Events"} />
                <Card content={"Gym Facilities"} />
                <Card content={"Highspeed Wifi"} />
                <Card content={"Cafe & Tea Bar"} />
                <Card content={"Affordable"} />
                <Card content={"Comfort Lounges"} />
                <Card content={"Quick Booking"} />
                <Card content={"Sports Area"} />
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs

const Card = ({content}) => { 
    return <div className="card grid place-items-center px-3 py-4 gap-4 gap-y-4 lg:grid-cols-4">
        <img src={"images/logo/"+content.toLowerCase()+".png"} alt="" />
        <h5 className='lg:col-span-3'  >{content}</h5>
    </div>
}