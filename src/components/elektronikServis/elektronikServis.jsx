import React from 'react'

const elektronikServis = () => {
  return (
    <div className=' min-h-screen gap-4 md:mx-auto w-full grid grid-cols-12'>
      <div className='col-span-4 bg-gray-600 my-auto rounded-xl '>
        <div className='grid my-auto py-2 '>
          <a href="tel:08508508558" className='text-white mx-auto w-4/5  bg-cyan font-bold rounded-lg text-sm xl:text-xl px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN ARA</a>
          <a href="tel:08508508558" className='text-white mx-auto w-4/5  bg-dark_mode font-bold rounded-lg text-sm xl:text-xl px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>0850 850 8550</a>
        </div>

      </div>

      <div className='col-span-8 m-0 object-cover bg-cover bg-center '>


        <div className="  min-h-450 gap-4 flex-wrap flex justify-center items-center p-6">
          <div>
            <img className="max-h-96 object-cover rounded-3xl" src="https://images.pexels.com/photos/719399/pexels-photo-719399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>

          <div className='bg-dark_mode rounded-3xl '>
            <h1 className=' text-center p-1 pt-1 text-2xl text-red_orange font-bold underline'>Her türlü ihtiyacınıza çözüm burada</h1>
            <p className='text-white text-center p-1  max-w-lg mt-1 text-lg'>Bilgisayarınızın performansı mı düştü? Telefonunuzun şarjı yetmiyor mu? Elektronik cihazlarınızın tamiratı için güvenilir ve profesyonel bir işyeri arıyorsanız, doğru yerdesiniz! 
               Her marka ve modele uygun tamir hizmetleri sunmaktayız.
              
            </p>
          </div>
        </div>


        <div className=" w-full gap-4 flex-wrap flex justify-center items-center p-6">
          <div className="w-96 min-h-390 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

            <img className="h-64 object-cover w-96 rounded-xl" src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="p-2">

              <h2 className="font-bold text-lg mb-2 italic text-red_orange">Bilgisayar Servisi</h2>

              <p className="text-sm text-gray-600">Ekran değişimi, anakart onarımı, güç kaynağı değişimi ve yazılım sorunları gibi farklı hizmetlerimiz bulunmaktadır.</p>
            </div>
          </div>

          <div className="w-96 min-h-390 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

            <img className="h-64 object-cover w-96 rounded-xl" src="https://images.pexels.com/photos/13625784/pexels-photo-13625784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="p-2">

              <h2 className="font-bold text-lg mb-2 italic text-red_orange">Telefon Servisi</h2>

              <p className="text-sm text-gray-600">Televizyonlar, bilgisayarlar, oyun konsolları, tabletler, ses sistemleri ve daha birçok elektronik cihaz için tamiratlar gerçekleştiriyoruz.   </p>
            </div>
          </div>

          <div className="w-96 min-h-390 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

            <img className="h-64 object-cover w-96 rounded-xl " src="https://media.istockphoto.com/id/1257647898/tr/foto%C4%9Fraf/iki-profesyonel-teknisyen-%C3%BCniformal%C4%B1-i%C5%9F%C3%A7iler-kapal%C4%B1-mekanlarda-duvara-televizyon-d%C3%B6%C5%9Fer.jpg?b=1&s=612x612&w=0&k=20&c=t0hExPx5ReB3e2Kt3InHeHzK3frMac1HkVprNg3SHsU=" alt="" />
            <div className="p-2">

              <h2 className="font-bold text-lg mb-2 italic text-red_orange">Elektronik Eşya Servisi</h2>

              <p className="text-sm text-gray-600">Tamir süreci boyunca size düzenli bilgi aktararak, her adımda ne olduğunu anlamanızı ve memnuniyetinizi sağlamayı hedefliyoruz.</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default elektronikServis