import React from 'react'
import PrimaryButton from './PrimaryButton'
import { Link } from '@inertiajs/react'

function ForumHero() {
    return (
        <div className="bg-hoverBackground w-full mx-auto flex flex-col md:flex-row items-center pb-6 md:py-24 md:px-16 lg:px-32">
            <div className="flex flex-wrap flex-col max-full p-6 md:w-1/2 md:p-0">
                <div className="flex flex-col justify-center gap-2 md:gap-8 pb-4">
                    <h1 className="text-hitam font-bold text-2xl md:text-4xl">
                        Tuliskan Ceritamu di Forum
                    </h1>
                    <h2 className="text-hitam font-medium text-lg md:text-2xl md:pb-4">
                        Forum bersama jadi wadah untuk bertukar rasa dan cerita
                    </h2>
                </div>
                <Link href={route('forumHome')}>
                    <PrimaryButton>Tulis Ceritamu</PrimaryButton>
                </Link>
            </div>
            <div className="max-full md:flex md:justify-center px-4 md:w-1/2 md:pr-10 md:self-end">
                <img
                    src="images/forum.png"
                    alt="forum"
                    className="max-h-80 md:max-h-96"
                />
            </div>
        </div>
    )
}

export default ForumHero
