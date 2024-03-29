import { useEffect, useState } from 'react'
import Checkbox from '@/Components/Checkbox'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import BackUpButton from '@/Components/BackUpButton'
import TextInput from '@/Components/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        remember: false,
    })

    useEffect(() => {
        return () => {
            reset('password')
        }
    }, [])

    const submit = (e) => {
        e.preventDefault()

        post(route('login'))
    }

    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="w-full h-screen lg:flex md:flex md:justify-center lg:overflow-hidden">
                    {/* left side */}
                    <div
                        className="relative                    
                                    md:w-1/2
                                    md:flex
                                    md:justify-center
                                    md:items-center
                                    lg:h-full
                                    lg:w-1/2 lg:flex-col"
                    >
                        {/* put left side image here */}
                        <img
                            className="lg:w-full md:h-full object-cover"
                            src="images/login.jpg"
                        />
                    </div>

                    {/* right side */}
                    <div
                        className="md:w-3/4
                                    lg:w-1/2 h-full
                                    md:p-20 lg:p-10 
                                    flex flex-col justify-between items-center p-10 mt-5"
                    >
                        <div className="w-full flex flex-col max-w-[525px] pt-0 sm:pt-8">
                            {/* title */}

                            <div
                                className="w-full flex flex-col 
                                            max-w-[500px] sm:pt-10"
                            >
                                <h1 className="text-primary text-2xl md:text-3xl lg:text-[42px] font-bold mb-5">
                                    Selamat Datang Kembali
                                </h1>
                                <p className="text-hitam text-lg sm:text-xl md:text-2xl  font-semibold mb-7 px-1">
                                    Masuk ke Berani Bicara. Isikan detail
                                    informasi
                                </p>
                            </div>
                            <div className="w-full flex flex-col">
                                <div className="w-full mt-2 pb-10">
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

                                    <div className="relative flex flex-row items-center">
                                        <TextInput
                                            id="password"
                                            placeholder="Password"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full"
                                            autoComplete="current-password"
                                            onChange={(e) =>
                                                setData(
                                                    'password',
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-5"
                                        >
                                            {showPassword ? (
                                                <FaEye />
                                            ) : (
                                                <FaEyeSlash />
                                            )}
                                        </button>
                                    </div>
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="block mb-10 flex justify-between">
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
                                        />
                                        <span className="font-semibold text-sm md:text-base ml-2 text-gray-600">
                                            Ingat saya
                                        </span>
                                    </label>

                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="font-semibold text-sm text-primary hover:text-[#2d8efd] rounded-md"
                                        >
                                            Lupa Password?
                                        </Link>
                                    )}
                                </div>

                                <div>
                                    <BackUpButton disabled={processing}>
                                        Masuk
                                    </BackUpButton>
                                </div>

                                <div className="flex justify-center pt-8">
                                    {canResetPassword && (
                                        <Link
                                            href={route('register')}
                                            className="font-semibold text-sm text-gray-600 hover:text-gray-900 rounded-md"
                                        >
                                            Belum punya akun?{' '}
                                            <span className="text-primary">
                                                Daftar di sini
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </GuestLayout>
    )
}
