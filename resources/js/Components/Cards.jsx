const CardCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };
  
    return (
        <div className='max-w-[1340px] mx-auto grid md:grid-cols-3 gap-8 pb-20'>
                        {/* First */}
                        <div className='w-full shadow-xl flex flex-col rounded-lg border border-gray-300'>
                            <img src='images/CaraKonseling1.jpg' alt=''/>
                            <div className='grid grid-cols-2 min-w-[900px]'>
                                <div className='absolute pt-7 px-10'>
                                    <NumberBox number={1} />
                                </div>                                
                                <h3 className='text-xl font-bold px-24 py-8'>Pilih Psikologmu</h3>
                            </div>                            
                            <p className='text-[#736D6D] px-10 text-[16px] pb-40 '>Pilih psikolog yang sesuai dengan permasalahanmu. Tidak perlu khawatir, psikolog kami akan senang mendengar ceritamu.</p>
                        </div>
                        {/* Second */}
                        <div className='w-full shadow-xl flex flex-col rounded-lg border border-gray-300'>
                            <img src='images/CaraKonseling2.jpg' alt=''/>
                            <div className='grid grid-cols-2 min-w-[900px]'>
                                <div className='absolute pt-7 px-10'>
                                    <NumberBox number={2} />
                                </div>                                
                                <h3 className='text-xl font-bold px-24 py-6'>Pilih Layanan dan Jadwalkan Konsultasimu</h3>
                            </div> 
                            <p className='text-[#736D6D] px-10 text-[16px] pb-40 '>Pilih layanan konsultasi sesuai kebutuhanmu. Cocokkan jadwal ketersediaanmu dengan psikolog dan pastikan jadwalmu senggang.</p>
                        </div>
                        {/* Third */}
                        <div className='w-full shadow-xl flex flex-col rounded-lg border border-gray-300'>
                            <img src='images/CaraKonseling3.png' alt=''/>
                            <div className='grid grid-cols-2 min-w-[900px]'>
                                <div className='absolute pt-7 px-10'>
                                    <NumberBox number={3} />
                                </div>                                
                                <h3 className='text-xl font-bold px-24 py-8'>Ceritakan Permasalahanmu</h3>
                            </div> 
                            <p className='text-[#736D6D] px-10 text-[16px] pb-40 '>Jangan khawatir bercerita dengan psikolog. Ceritakan semua permasalahanmu hingga kamu merasa lebih baik.</p>
                        </div>
                    </div>
        ))}
      </Slider>
    );
}