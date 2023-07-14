import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PrimaryButton from './PrimaryButton'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Popup({ desc }) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  ///////////////////////////////////////////////

  const [error, setError] = useState('');
  const [selectedOption, setSelectedOption] = useState('Pilih Metode Pembayaran');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setError('');
  }

  let imageSrc = '';

  if (selectedOption === 'Bank BCA') {
    imageSrc = 'images/BNI.jpg';
  } else if (selectedOption === 'Bank BRI') {
    imageSrc = 'images/BRI.png';
  }else if (selectedOption === 'Bank BNI'){
    imageSrc = 'images/BCA.png'
  }

  function openModal() {

    if (!selectedOption || selectedOption === 'Pilih Metode Pembayaran') {
      setError('Metode Pembayaran harus diisi');
      return;
    }
    setIsOpen(true)
  }

  return (
    <>
<div className="border border-gray-100 card lg:card-side bg-base-100 shadow-sm rounded-sm overflow-x-auto">
    <div className="w-full xl:px-10 lg:px-4 md:px-10 sm:px-10 xs:px-4">
      <div className="w-full rounded-2xl bg-white py-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg py-4 text-left text-sm font-bold text-disabled">
                {/* title & image*/}
                <div className='flex items-center'>
                  <div className="pr-5">
                    {imageSrc && <img src={imageSrc} alt="Selected Bank" />}
                  </div>
                  <span className='flex items-center'>{selectedOption}</span>
                </div> 
                <ChevronDownIcon
                    className= {` flex items-center ${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-disabled`}
                  />
                
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2 text-sm text-disabled">                
                {/* <RadioGroupButton /> */}
                <>
                <div>
                  <div className="flex items-center justify-between mb-4 border-b-2 pb-5 border-disabled-300">                
                  <div className='flex items-center'>
                    <img
                        className="w-8"
                        src="images/BNI.jpg"
                      />                
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-sm font-medium text-disabled">
                        Bank BCA
                      </label>   
                  </div>       
                  <input
                        id="default-radio-2"
                        type="radio"
                        value="Bank BCA"
                        name="default-radio"
                        checked={selectedOption === 'Bank BCA'}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      />       
                  </div>    
                  <div className="flex items-center justify-between mb-4 border-b-2 pb-5 border-disabled-300">          
                  <div className='flex items-center'>
                    <img
                        className="w-8"
                        src="images/BRI.png"
                      />                
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-sm font-medium text-disabled">
                        Bank BRI
                      </label>   
                  </div>   
                    <input
                      id="default-radio-1"
                      type="radio"
                        value="Bank BRI"
                        name="default-radio"
                        checked={selectedOption === 'Bank BRI'}
                        onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />        
                  </div>   
                  <div className="flex items-center justify-between mb-4">          
                  <div className='flex items-center'>
                    <img
                        className="w-8"
                        src="images/BCA.png"
                      />                
                      <label
                        htmlFor="default-radio-1"
                        className="ml-2 text-sm font-medium text-disabled">
                        Bank BNI
                      </label>   
                  </div>   
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="Bank BNI"
                        name="default-radio"
                        checked={selectedOption === 'Bank BNI'}
                        onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />        
                  </div>   
                  
                </div>
                </>                
              </Disclosure.Panel>
              <p className="text-sm text-red-500 pb-4 pl-5">{error}</p>
            </>
          )}
        </Disclosure>        
        
      </div>
    </div>        
    
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                
                <Dialog.Panel className="text-center w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 align-middle shadow-xl transition-all">
                <div className='flex justify-center py-10'>
                  <img src="images/approved.png"/>
                </div>
                
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Pembayaran Anda Berhasil
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-700 font-medium">
                      {desc}
                    </p>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>  
      </div>        
      
      <PrimaryButton onClick={openModal} className='mt-7'>Konfirmasi Pembayaran</PrimaryButton>

    </>
  )
}
