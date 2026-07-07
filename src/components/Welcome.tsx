import { logger } from '@/lib/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Welcome = () => {
  const throwSentryError = () => {
    console.log("Error")
    logger('error', 'Error')
  }

  return (
    <>
      <Input placeholder='Email' />
      <Button>Login</Button>
      <Button onClick={throwSentryError}>Throw test error</Button>
    </>
  )
}

export default Welcome
