import Post from '@/Components/Post'
import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import React from 'react'
import PrimaryButton from '@/Components/PrimaryButton'

export default function ForumHome({ posts, auth }) {
    return (
        <>
            <NavBar user={auth.user} />

            <div className="flex flex-col px-6 md:px-16 lg:px-32 pt-20 pb-32">
                <div className="relative w-full flex justify-end pb-4">
                    <a href={route('forum')} className=" right-0">
                        <PrimaryButton>Post</PrimaryButton>
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}
