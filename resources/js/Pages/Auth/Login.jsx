import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };
      
    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>

            <div className='bg-[#B2D4FB] w-full h-screen flex items-start'>
               
                {/* left side */}
                <div className='relative w-1/2 h-full flex flex-col'>
                    {/* put left side image here */}
                    <img 
                        className='w-full h-full object-cover'
                        src='images/bgregisterfix.png'
                        alt=''/>
                </div>

                {/* right side */}
                <div className='w-1/2 h-full bg-[#FFFFFF] flex flex-col p-20 justify-between items-center'>
                    <div className='w-full flex flex-col max-w-[525px] pt-8 mt-2'>
                        {/* title */}
                        
                        <div> 
                            {/*  className='w-full flex flex-col' */}
                            <h1 className='text-[#4C9BF5] text-[48px] font-bold mb-2'>Wecome Back</h1>
                            <p className='text-[#333333] text-[24px] font-semibold mb-7'>Welcome to Mental Health. Please enter your details</p>
                        </div>

                        {/* login box -> w594 h60 */}
                        <div>
                            <div className='mt-4 mb-10'>
                                <InputLabel htmlFor="email" />

                                <TextInput
                                    id="email"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mb-12">
                                <InputLabel htmlFor="password" />

                                <TextInput
                                    id="password"
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className="block mb-10 flex justify-between">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}                                        
                                    />
                                    <span className="font-semibold ml-2 text-sm text-gray-600">Remember Me</span>
                                </label>
      
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="font-semibold text-sm text-[#4C9BF5] hover:text-[#2d8efd] rounded-md"
                                    >
                                        Forgot Password?
                                    </Link>                                     
                                )}                            

                            </div>

                            <div>
                                <PrimaryButton className='bg-[#4C9BF5] mb-5' disabled={processing}>
                                    Log In
                                </PrimaryButton>
                            </div>

                            <div className="flex justify-center mt-4">
                                {canResetPassword && (
                                    <Link
                                        href={route('register')}
                                        className="font-semibold text-sm text-gray-600 hover:text-gray-900 rounded-md"
                                    >
                                        Don’t have an account? <span className='text-[#4C9BF5]'>Sign up for free</span> 
                                    </Link>                                     
                                )}
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>            
                
            </form>
        </GuestLayout>
    );
}
