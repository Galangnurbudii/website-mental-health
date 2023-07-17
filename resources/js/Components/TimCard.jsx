import React from 'react'

export default function TImCard({ tim }) {
    console.log(tim)
    return (
        <div className="carousel-item">
            <div className="px-10 pt-10 card w-96 bg-base-100 shadow-xl border border-gray-200">
                <figure className=" ">
                    <img
                        src={tim.gambar}
                        alt="Tim Foto"
                        className="rounded-xl object-cover scale-[4] -translate-y-16"
                        style={{
                            maxWidth: '200px',
                        }}
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{tim.nama}</h2>
                    <p>{tim.nim}</p>
                </div>
            </div>
        </div>
    )
}
