import React from 'react'

const iletisim = () => {
  return (
    <div className=''>
      <div className='w-full min-h-screen object-cover bg-cover bg-center bg-indigo-950'>

        <div className='  grid grid-cols-2 h-80 grid grid-rows-2 '>
          <div className=''></div>
          <div className='px-2 mb-0  xl:text-4xl text-lg m-auto text-white font-bold bg-dark_mode rounded-t-md ms-0 bg-opacity-75'>7/24 Müşteri Hizmetleri </div>
          <div className='mx-auto me-0 my-0 grid xl:grid-cols-2 md:grid-cols-1'>
            <a href="tel:08508508558" className='text-white max-h-16  bg-indigo-600 font-medium rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN BİLGİ AL</a>
            <a href="tel:08508508558" className='text-white max-h-16  bg-gray-500 font-medium rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>0850 850 8550</a></div>
          <div className='px-2 mt-0 xl:text-xl m-auto text-white  bg-dark_mode rounded-b-md ms-0 me-10 bg-opacity-75 text-sm'> İhtiyacınız olan hehangi bir servis ihtiyacınız için en doğru çözüm için her zaman arayabilirsiniz. Sorularınızı yanıtlamak ve tamir için randevu oluşturmak için her zaman buradayız.
          </div>
        </div>


        <div className="  min-h-450 gap-4 flex-wrap flex justify-center items-center p-6">
          <div className="mb-2 p-4 m-auto flex-wrap flex justify-center"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.0549089862184!2d28.974388878624186!3d41.02285329493505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e8087f4bff%3A0x791b116c3a3c9bc3!2zS2VtYW5rZcWfIEthcmFtdXN0YWZhIFBhxZ9hLCBHw7xtcsO8ayBTay4sIDM0NDI1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1699781686079!5m2!1str!2str" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className='bg-gray-400 rounded-3xl flex-wrap flex justify-center m-auto'>
            <h1 className='text-3xl p-3 flex-wrap flex justify-center m-auto font-bold text-ferrari_red'>KONUM:</h1>
            <p className='flex-wrap flex justify-center m-auto p-2 text-xl underline'>
              Kemankeş Karamustafa Paşa, Gümrük Sk., 34425 Beyoğlu/İstanbul
            </p>
          </div>
        </div>










      </div>
    </div>
  )
}

export default iletisim