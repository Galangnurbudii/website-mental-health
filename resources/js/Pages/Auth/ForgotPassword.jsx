import { useEffect } from 'react'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'
import PopupFP from '@/Components/PopUpFP'

export default function ForgotPassword() {
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
                            src="images/Forgot Password.png"
                            alt=""
                        />
                    </div>

                    {/* right side */}
                    <div
                        className="md:w-3/4
                                    lg:w-1/2 h-full

                                    md:p-20 lg:p-10 
                                    flex flex-col justify-between items-center p-10 mt-5"
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
                                                lg:text-[42px] font-bold mb-5"
                                >
                                    Lupa Password
                                </h1>
                                <p className="text-[#333333] text-2xl font-semibold mb-7">
                                    Tidak perlu khawatir, buat password baru
                                    Anda
                                </p>
                            </div>

                            {/* login box -> w594 h60 */}
                            {/* RegisteredUserController */}
                            <div>
                                <div className="mb-7">
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
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mb-7">
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
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mb-10">
                                    <InputLabel htmlFor="password_confirmation" />

                                    <TextInput
                                        id="password_confirmation"
                                        placeholder="Password Confirmation"
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
                                </div>

                                <PopupFP
                                    name="Reset Password"
                                    titledesc={'Password Anda Berhasil Diubah'}
                                    desc={
                                        'Ingat dan catat password Anda agar dapat masuk ke dalam website'
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </GuestLayout>
    )
}
