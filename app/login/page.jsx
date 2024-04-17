import { AuthPage } from '@/components/component/auth-page'
import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <div className='flex min-h-[100vh] items-center justify-center' >
            <AuthPage loginAction={login} signupAction={signup} />
        </div>
    )
}