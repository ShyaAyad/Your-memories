import animation from '../Login.json'
import Lottie from 'lottie-react'

const LogoutAnimation = () => {
  return (
    <div>
        <Lottie 
        animationData={animation}
        style={{ height: 600, width: 600 }}
        loop={true}
        autoplay={true}
      />
    </div>
  )
}

export default LogoutAnimation