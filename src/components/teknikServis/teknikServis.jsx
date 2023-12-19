import React from 'react'

const teknikServis = () => {
  return (
    <div className=' min-h-screen gap-4 md:mx-auto w-full grid grid-cols-12'>
      <div className='col-span-3 bg-gray-300 my-auto rounded-xl '>
      <div className='grid my-auto py-2 '>
                        <a href="tel:08508508558" className='text-white mx-auto w-4/5  bg-cyan font-bold rounded-lg text-sm xl:text-xl px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN ARA</a>
                        <a href="tel:08508508558" className='text-white mx-auto w-4/5  bg-dark_mode font-bold rounded-lg text-sm xl:text-xl px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>0850 850 8550</a>
                    </div>
        
      </div>

      <div className='col-span-9 m-0 object-cover bg-cover bg-center xl:container  bg-center'>


        <div className="  min-h-450 gap-4 flex-wrap flex justify-center items-center p-6">
          <div>
            <img className="max-h-96 object-cover rounded-3xl" src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>

          <div className='bg-dark_mode rounded-3xl '>
            <h1 className=' text-center p-1 pt-1 text-2xl text-red_orange font-bold underline'>Her türlü sorununuza çözüm burada</h1>
            <p className='text-white flex items-center p-1 text-center  max-w-lg text-lg'>
              Buzdolabınızın soğutma sorunu mu var? Klimanız eskisi gibi verimli değil mi? Bizimle iletişime geçin, size en iyi tamir hizmetini sunalım.
              İş yerimizde, yenilikçi tamir teknikleri ve yüksek kaliteli yedek parçalarla cihazlarınızı orijinal durumuna getiriyoruz.
            </p>
          </div>
        </div>


        <div className=" w-full gap-4 flex-wrap flex justify-center items-center p-6">
          <div className="w-96 min-h-390 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

            <img className="h-64 object-cover w-96 rounded-xl" src="https://www.servisfonitürkiye.com/assets/images/blog/blog-img1.jpg" alt="" />
            <div className="p-2">

              <h2 className="font-bold text-lg mb-2 italic text-red_orange">Beyaz Eşya Servisi</h2>

              <p className="text-sm text-gray-600">İhtiyacınız olan servis hizmetini bizden alın, size en yakın uzman ekibi 30 dk içinde yönlendirelim.</p>
            </div>
          </div>

          <div className="w-96 min-h-390 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

            <img className="h-64 object-cover w-96 rounded-xl" src="https://www.servisfonitürkiye.com/assets/images/blog/blog-img2.jpg" alt="" />
            <div className="p-2">

              <h2 className="font-bold text-lg mb-2 italic text-red_orange">Kombi Servisi</h2>

              <p className="text-sm text-gray-600">Ev eşyalarınızın uzun ömürlü olması için bakım ve tamir işlerini bize bırakın. Size zaman ve maliyet tasarrufu sağlayacağız.</p>
            </div>
          </div>

          <div className="w-96 min-h-390 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

            <img className="h-64 object-cover w-96 rounded-xl" src="https://www.servisfonitürkiye.com/assets/images/blog/blog-img3.jpg" alt="" />
            <div className="p-2">

              <h2 className="font-bold text-lg mb-2 italic text-red_orange">Klima Servisi</h2>

              <p className="text-sm text-gray-600"> Eşyalarınızı tamir etmek için tecrübeli ve uzman ekibimize güvenin. Memnuniyetiniz bizim önceliğimizdir.</p>
            </div>
          </div>
          

        </div>
      </div>
    </div>


  )
}

export default teknikServis