import React from 'react'
import '../../style/aboutus.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AboutUs = () => {

  const partnersArr = [
    {
      id : 1,
      name : "Kuwar Kapur",
      designation : "Backend & ML Engineer",
      pic : './Images/partnersImg/kuwar.jpg',
      description:"At Foodifyy I work with Machine learning and business development strategies. Started with Machine learning as a hobby project but later realized that it has the ability to improve many aspects of life. Have worked with many startups in scaling their tech with respect to Machine Learning. Loves food hence Foodifyy. Former DL Developer @NVIDIA",
      alignSelf : "flex-start"
    },
    {
      id : 2,
      name : "Ankit Kumar",
      designation : "Data Scientist & ML Engineer",
      pic : './Images/partnersImg/ankit.jpg',
      description:"Hello, I am a Backend Developer and a passionate Machine Learning engineer. I believe that a strong Data and ML Platform is key for organisations to be successful in scaling their tech business.",
      alignSelf : "flex-end"
    },
    {
      id : 3,
      name : "Ish Kapoor",
      designation : "Mentor",
      pic : './Images/partnersImg/ish.jpeg',
      description:"I give direction to this company in business and technology. I've worked with a lot of startups as Web Dev & PM.I have this skill of being able to see for potential in ideas. I'm great at forecasting products. I love building stuff.",
      alignSelf : "flex-start"
    },
    {
      id : 4,
      name : "Sumit Kumar",
      designation : "Software Developer",
      pic : './Images/partnersImg/sumit_2.png',
      description:"Developer with a passion to create great digital experiences through immense applications. Always curious to build, learn & explore technologies.I believe self growth is the best & biggest investment.",
      alignSelf : "flex-end"
    },
    {
      id : 5,
      name : "Risheek Jain",
      designation : "Business Development",
      pic : './Images/partnersImg/risheek.jpeg',
      description:"I am very keen about startups and often like to dig deeper into business models they posses.Personally, I have great interest in automobile,cars excite me alot and you would often find me researching on upcoming and existing technologies in the sector. ",
      alignSelf : "flex-start"
    },
    {
      id : 6,
      name : "Hemant",
      designation : "Data Scientist & ML Engineer",
      pic : './Images/partnersImg/hemant.jpeg',
      description:"I am a final year B.Tech student Mechatronics. In my leisure time, I enjoy coding and watching movies. Coding is a difficult and rewarding pastime for me since it allows me to explore new technologies and develop new skills.",
      alignSelf : "flex-end"
    },{
      id : 7,
      name : "Komal Agrawal",
      designation : "CREATIVE HEAD",
      pic : './Images/partnersImg/KOMAL AGRAWAL.png',
      description:"Hi,I am a Mechatronics undergrad at DSEU. Leading the designing team here . I love to delve deeper into the designing world. I relish bringing my imagination into actuality.",
      alignSelf : "flex-end"
    },
    {
      id : 8,
      name : "Kashyap Kumar Maurya",
      designation : "ML ENGINEER",
      pic : './Images/partnersImg/KASHYAP MAURYA.png',
      description:"I'm pursuing B.Tech in Mechatronics.At Foodifyy, I work with Machine Learning, in my idle hours I like to hone my skills and possibly learn something new.",
      alignSelf : "flex-end"
    }
  ]

  return (<div id="aboutus">
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination,A11y]}
    spaceBetween={1}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    
    {
      partnersArr.map((pic)=>{
        return <SwiperSlide>
                  <div className='h-auto bg-[#00745B]' id='AboutUs'>
                    <div className="w-full ">         
                    <div className='grid grid-cols-2 place-items-center gap-4 bg-[#00745B] p-5'>
                      <div id="image_container" className='place-self-center max-h-[30rem] lg:max-h-[45.5rem]'>
                        <img
                        id="dev_image"
                          src={pic.pic}
                          className="object-center sm:h-[30rem] md:h-[30.5rem] lg:h-[40rem] max-w-[10rem] sm:max-w-[15rem] md:max-w-[20rem] lg:max-w-[25rem] rounded-md "
                          alt="Wild Landscape"
                        />
                      </div>
                    <div id="all_details" className='place-self-center w-full max-h-full grid grid-cols-1 gap-0 lg:gap-4 text-white'>
                        <h1 id="our_team" className='font-bold text-[1.6rem] sm:text-[2.3rem] md:text-[3rem] lg:text-[5rem]'>Our Team</h1>
                        <h1 id="devname" className='font-medium text-[1rem] sm:text-[1.2rem] md:text-[1.7rem] lg:text-[2rem] text-left text-xs lg:text-lg'>{pic.name}</h1>
                        <h1 id="dev_designation" className='font-medium text-[0.6rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.4rem] text-left text-xs lg:text-lg'>-{pic.designation}</h1>
                        <p id="aboutus_description" className='max-w-[10rem] sm:max-w-sm md:max-w-[20rem] lg:max-w-[23rem] text-[0.5rem] sm:text-[0.8rem] md:text-[1.1rem] lg:text-[1rem] text-left font-medium text-xs lg:text-lg'>{pic.description}</p>
                    </div>  
                      </div>
                  </div>
                  </div>
               </SwiperSlide>
      })
    }
  </Swiper>
  </div>


  )
}

export default AboutUs