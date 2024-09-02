import './Background.css'
import bmw_cinemtic from './bmw_cinemtic.mp4'
import image1 from './image1.jpeg'
import image2 from './image2.jpeg'
import image3 from './image3.jpeg'

const Background = ({playStatus,heroCount}) => {
    if (playStatus){
    
        return (
                <video className='background' autoPlay loop muted>
                    <source src={ bmw_cinemtic} type="video/mp4"/>
                </video>
            
        )
    }
     else if (heroCount===0)
        {
            return <img src={image1} className='background' alt="" />
        }   
     else if (heroCount===1)
        {
            return <img src={image2} className='background' alt="" />
        }   
     else if (heroCount===2)
        {
            return <img src={image3} className='background' alt="" />
        }   
}

export default Background