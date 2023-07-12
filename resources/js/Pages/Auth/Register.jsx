import { useEffect } from 'react'
import Checkbox from '@/Components/Checkbox'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation')
        }
    }, [])

    const submit = (e) => {
        e.preventDefault()

        post(route('register'))
    }

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className="w-full h-screen lg:flex md:flex md:justify-center">
                    {/* left side */}
                    <div
                        className="relative                    
                                    md:w-1/2
                                    md:flex
                                    md:justify-center
                                    md:items-center
                                    lg:h-full
                                    lg:w-1/2 lg:flex lg:flex-col"
                    >
                        {/* put left side image here */}
                        <img
                            className="lg:h-full lg:w-full 
                            md:h-full               
                            object-cover"
                            src="storage/images/bgloginfix.png"
                            alt=""
                        />
                    </div>

                    {/* right side */}
                    <div
                        className="md:w-3/4
                                    lg:w-1/2 h-full

                                    md:p-20 lg:p-10 
                                    flex flex-col justify-between items-center p-10"
                    >
                        <div className="w-full flex flex-col max-w-[525px] sm:pt-8">
                            {/* title */}
                            <div
                                className="w-full flex flex-col 
                                            max-w-[500px] sm:pt-10"
                            >
                                <h1
                                    className="text-primary 
                                                text-2xl 
                                                sm:text-3xl 
                                                md:text-3xl 
                                                lg:text-[48px] font-bold mb-5"
                                >
                                    Join Our Community
                                </h1>
                                <p className="text-[#333333] text-[24px] font-semibold mb-7">
                                    Don’t feel alone. Love yourself more with us
                                </p>
                            </div>

                            {/* login box -> w594 h60 */}
                            {/* RegisteredUserController */}
                            <div>
                                <div className="w-full mt-4 mb-10">
                                    <InputLabel htmlFor="name" />

                                    <TextInput
                                        id="name"
                                        placeholder="Name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-14">
                                    <InputLabel htmlFor="email" />

                                    <TextInput
                                        id="email"
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        required
                                    />
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
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData('password', e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mb-12">
                                    <InputLabel htmlFor="password_confirmation" />

                                    <TextInput
                                        id="password_confirmation"
                                        placeholder="password confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                'password_confirmation',
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="block mb-10">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    'remember',
                                                    e.target.checked
                                                )
                                            }
                                            required
                                        />
                                        <span className="font-semibold ml-2 text-sm text-gray-600">
                                            I Agree to{' '}
                                            <span className="text-primary">
                                                terms & conditions
                                            </span>
                                        </span>
                                    </label>
                                </div>

                                <PrimaryButton
                                    className="bg-primary mb-5"
                                    disabled={processing}
                                >
                                    Create Account
                                </PrimaryButton>

                                <div className="flex justify-center mt-4">
                                    <Link
                                        href={route('login')}
                                        className="font-semibold text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none"
                                    >
                                        Already have an account?{' '}
                                        <span className="text-primary">
                                            Log In here
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </GuestLayout>
    )
}
