import { useEffect, useState } from 'react'
import Checkbox from '@/Components/Checkbox'
import GuestLayout from '@/Layouts/GuestLayout'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { Head, Link, useForm } from '@inertiajs/react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import BackUpButton from '@/Components/BackUpButton'

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

    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const [showPassword2, setShowPassword2] = useState(false)
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2)
    }

    return (
        <GuestLayout>
            <Head title="Register" />
            <form onSubmit={submit}>
                <div className="w-full h-screen md:flex md:justify-center">
                    <div className="relative md:w-1/2 md:flex md:justify-center md:items-center lg:h-full lg:flex lg:flex-col">
                        <img
                            className="lg:w-full md:h-full object-cover"
                            src="images/register.png"
                            alt="Gambar Buat Akun"
                        />
                    </div>

                    <div className="md:w-3/4 lg:w-1/2 h-full md:p-20 lg:p-10 flex flex-col justify-between items-center p-10">
                        <div className="w-full flex flex-col max-w-[525px] pt-4">
                            {/* title */}
                            <div className="w-full flex flex-col max-w-[500px]">
                                <h1 className="text-primary text-2xl md:text-4xl font-bold mb-5">
                                    Bergabung ke Komunitas
                                </h1>
                                <p className="text-hitam text-2xl font-semibold pb-7">
                                    Jangan merasa sendiri. Cintai dirimu bersama
                                    kami
                                </p>
                            </div>
                            <div className="">
                                <div className="w-full mt-4 mb-7">
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
                                        required
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
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    'password',
                                                    e.target.value
                                                )
                                            }
                                            required
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
                                <div className="mb-10">
                                    <InputLabel htmlFor="password_confirmation" />
                                    <div className="relative flex flex-row items-center">
                                        <TextInput
                                            id="password_confirmation"
                                            placeholder="Password Confirmation"
                                            type={
                                                showPassword2
                                                    ? 'text'
                                                    : 'password'
                                            }
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

                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility2}
                                            className="absolute right-5"
                                        >
                                            {showPassword2 ? (
                                                <FaEye />
                                            ) : (
                                                <FaEyeSlash />
                                            )}
                                        </button>
                                    </div>
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
                                        <span className="font-semibold text-sm md:text-base ml-2 text-gray-600">
                                            Saya setuju dengan{' '}
                                            <span className="text-primary">
                                                ketentuan dan persyaratan
                                            </span>
                                        </span>
                                    </label>
                                </div>

                                <BackUpButton disabled={processing}>
                                    Buat Akun
                                </BackUpButton>

                                <div className="flex justify-center pt-4">
                                    <Link
                                        href={route('login')}
                                        className="font-semibold text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none"
                                    >
                                        Sudah punya akun?{' '}
                                        <span className="text-primary">
                                            Masuk
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
