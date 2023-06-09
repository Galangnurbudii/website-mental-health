import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import RadioGroupButton from './RadioGroupButton';
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import PrimaryButton from './PrimaryButton'

export default function SelectBox() {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  ///////////////////////////////////////////////

  const [selectedOption, setSelectedOption] = useState('Pilih Metode Pembayaran');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  let imageSrc = '';

  if (selectedOption === 'Bank BCA') {
    imageSrc = 'images/BNI.jpg';
  } else if (selectedOption === 'Bank BRI') {
    imageSrc = 'images/BRI.png';
  }else if (selectedOption === 'Bank BNI'){
    imageSrc = 'images/BCA.png'
  }

  return (
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
                  <span>{selectedOption}</span>
                </div> 
                <ChevronDownIcon
                    className= {` mt-2 ${
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
            </>
          )}
        </Disclosure>        
      </div>
    </div>
    
  )
}
