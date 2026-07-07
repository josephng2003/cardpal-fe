import { logger } from '@/lib/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Welcome = () => {
  const throwSentryError = () => {
    console.log('Error new')
    logger('error', 'Error 2222')
    logger('debug', 'Debug', {
      text: 'Hello world'
    })
  }

  return (
    <>
      <Input placeholder='Email' />
      <Button>Login</Button>
      <Button onClick={throwSentryError}>Throw sentry test error</Button>
    </>
  )
}

export default Welcome
