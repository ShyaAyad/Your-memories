import LogoutAnimation from "./LogoutAnimation"

const NoAccount = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-2xl'>Logged out</h1>
        <LogoutAnimation />
    </div>
  )
}

export default NoAccount