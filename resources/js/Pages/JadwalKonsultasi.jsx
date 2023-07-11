import NavProfil2 from '@/Components/NavProfil2'
import DateRangePickers from '@/Components/DateRangePickers'
import { useState } from 'react';

export default function HapusProfil() {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div>
      <NavProfil2 />
      <div className='lg:pl-96 md:px-40 px-10 py-20'>
        <h1 className="font-bold text-3xl pt-5 pb-8">
          Jadwal Konsultasi Hari Ini
        </h1>
        <h2 className='pb-5 text-xl font-semibold'>
          Periode Konsultasi
        </h2>
        <div className='pb-10'>
          <div className='flex gap-44'>
            <h3 className="pb-4 font-semibold text-lg">Dari Tanggal:</h3>
            <h3 className="pb-4 font-semibold text-lg">Sampai Tanggal:</h3>
          </div>
          <div className='flex justify-between pr-10'>
            <DateRangePickers />
            <div>
              <select
                className="select select-bordered w-[150px] focus:outline-none"
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                <option disabled value="">Filter by</option>
                <option value="Hari ini">Hari ini</option>
                <option value="Selesai">Selesai</option>                
              </select>
            </div>
          </div>
        </div>

        <div className={`border-l-4 ${selectedFilter === 'Selesai' ? 'border-gray-400' : (selectedFilter === 'Hari ini' ? 'border-primary' : '')} px-10`}>
          <div className='w-full shadow-xl rounded-lg border border-gray-300 bg-white mx-auto mb-8'>
            <div className='p-10'>
              <h2 className='font-semibold pb-4 text-lg'>
                Senin, 18 Juli 2023 - 09.00 AM
              </h2>
              <h3 className='font-semibold pb-2'>
                Nama Pasien: Galang Nurbudi Utomo
              </h3>
              <h3 className='font-medium pb-2'>
                Tipe Konsultasi: Online
              </h3>
              <h3 className='font-medium'>
                Status: Confirmed
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
