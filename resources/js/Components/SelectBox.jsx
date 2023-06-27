import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import RadioGroupButton from './RadioGroupButton';
import { useState } from 'react';

export default function SelectBox() {

  const [selectedOption, setSelectedOption] = useState('Pilih Metode Pembayaran');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  // let imageSrc = '';

  // if (selectedOption === 'Option 1') {
  //   imageSrc = 'BNI.jpg';
  // } else if (selectedOption === 'Option 2') {
  //   imageSrc = 'BRI.jpg';
  // }else{
  //   imageSrc = 'BCA.png'
  // }

  return (
    <div className="w-full xl:px-10 lg:px-4 md:px-10 sm:px-10 xs:px-4">
      <div className="w-full rounded-2xl bg-white py-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg  py-2 text-left text-sm font-bold text-disabled">
                {/* judulnya */}
                <span>{selectedOption}</span>
                <ChevronDownIcon
                  className={`${
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


    // <div>
    //     <div className="collapse collapse-arrow bg-base-200">
    //     <input type="radio" name="my-accordion-2" checked="checked" /> 
    //     <div className="collapse-title text-xl font-medium">
    //         Click to open this one and close others
    //     </div>
    //     <div className="collapse-content"> 
    //         <p>hello</p>
    //     </div>
    //     </div>                
    // </div>
    
    // <div className='xl:px-10 lg:px-4 md:px-10 sm:px-10 xs:px-4 bg-white'>    
    //     <Accordion className='bg-white hover-none border-0 card lg:card-side shadow-sm rounded-sm overflow-x-auto'>
    //     <Accordion.Panel className='bg-white'>
    //         <Accordion.Title>
    //             Pilih Metode Pembayaran
    //         </Accordion.Title>
    //         <Accordion.Content>

    //         </Accordion.Content>
    //     </Accordion.Panel>
    //     </Accordion>
    // </div>
