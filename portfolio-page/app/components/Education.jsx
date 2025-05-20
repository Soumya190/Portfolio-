import React from 'react'

const Education = () => {
  
  // const timelineData = ['2018', '2021', '2024', 'Present'];

  const educationEvents = [
    {
      year: "2022",
      title: "Completed Schooling",
      description: "Delhi Public School, Raigarh, Chhattisgarh"
    },
    {
      year: "2022–Present",
      title: "B.Tech in Computer Science",
      description: "O.P. Jindal University, Raigarh, Chhattisgarh"
    }
  ];

  const description = []
  return (
    <>
    <div id='education' className='h-[30rem] p-30 '>
      <p className='text-5xl font-semibold'>Education</p>
      <div className="relative mt-40 w-full max-w-4xl mx-auto px-4">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white opacity-20 transform -translate-y-1/2 z-0" />

        <div className="flex justify-between items-center relative z-10">
          {educationEvents.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[180px]">
              <span className="text-white font-bold mb-3 text-xl">{item.year}</span>
              <div className="w-4 h-4 rounded-full bg-gradient-to-r relative top-7 from-[#78847C] to-[#B3BFB8] mb-10"></div>
              <p className="text-sm text-white font-medium">{item.title}</p>
              <p className="text-xs text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
  </>
  )
}

export default Education;