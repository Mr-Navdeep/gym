import React from 'react'
import { Header,ImageContent } from '../../components'
import { about,about2 } from '../../assets/images/images'


const About = () => {
  return (
    <main>
      <section>
      <Header content="About Us" textAlign="text-center" fontSize="text-5xl" background={about} bgPos="bg-center"  bgSize="bg-cover" bgRepeat="bg-no-repeat" color="text-white"/>
        <div className='container'>      
          
              <ImageContent padding="py-12" image={about2} content="At Our Gym, we believe that fitness is not just a goal, it's a lifestyle. Our state-of-the-art facility is designed to cater to all fitness levels, from beginners to seasoned athletes. With a team of experienced trainers and cutting-edge equipment, we provide an environment that motivates and empowers you to achieve your fitness goals." heading="About Gym"/>                      

          </div>
        
        
      </section>
    </main>

  )
}

export default About