import React from 'react'

const teknikServis = () => {
  return (
    <div className=' min-h-screen gap-4 justify-center m-0'>

      <div className='m-0 object-cover bg-cover bg-center xl:container bg-[url("https://images.pexels.com/photos/19014645/pexels-photo-19014645/free-photo-of-gokyuzu-desen-doku-duvar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-center'>


        <div className="  min-h-450 gap-4 flex-wrap flex justify-center items-center p-6">
          <div>
            <img className="max-h-96 object-cover rounded-3xl" src="https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>

          <div className='bg-gray-400 rounded-3xl'>
            <p className='text-white flex items-center p-1 text-center h-96 max-w-lg mt-1'>İş yerimiz, profesyonel ekibimizle birlikte sorunlarınızı çözmek için burada.
              Buzdolabınızın soğutma sorunu mu var? Klimanızın verimliliği düştü mü? Bizimle iletişime geçin, size en iyi tamir hizmetini sunalım.
              Ev eşyalarınızda oluşan arızalar sizi üzmesin. Tamir işleriniz için doğru adres burası!
              Buzdolabı, klima, çamaşır makinesi ve daha fazlası... Biz, ev eşyalarınızı tamir etmek için her zaman hazırız.
              Eşyalarınızı tamir etmek için tecrübeli ve uzman ekibimize güvenin. Memnuniyetiniz bizim önceliğimizdir.
              Ev eşyalarınızın uzun ömürlü olması için bakım ve tamir işlerini bize bırakın. Size zaman ve maliyet tasarrufu sağlayacağız.
              İş yerimizde, yenilikçi tamir teknikleri ve yüksek kaliteli yedek parçalarla cihazlarınızı orijinal durumuna getiriyoruz.
            </p>
          </div>
        </div>


        <div className=" w-full gap-4 flex-wrap flex justify-center items-center p-6">
          <div className="w-96 min-h-390 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

            <img className="h-64 object-cover w-96 rounded-xl" src="https://www.servisfonitürkiye.com/assets/images/blog/blog-img1.jpg" alt="" />
            <div className="p-2">

              <h2 className="font-bold text-lg mb-2 ">Beyaz Eşya Servisi</h2>

              <p className="text-sm text-gray-600">İhtiyacınız olan servis hizmetini Merkez Servisten alın, size en yakın servisi 30 dk içinde yönlendirelim.</p>
            </div>
          </div>

          <div className="w-96 min-h-390 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

            <img className="h-64 object-cover w-96 rounded-xl" src="https://www.servisfonitürkiye.com/assets/images/blog/blog-img2.jpg" alt="" />
            <div className="p-2">

              <h2 className="font-bold text-lg mb-2 ">Kombi Servisi</h2>

              <p className="text-sm text-gray-600">İhtiyacınız olan servis hizmetini Merkez Servisten alın, size en yakın servisi 30 dk içinde yönlendirelim.</p>
            </div>
          </div>

          <div className="w-96 min-h-390 p-2 bg-white rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg shadow-black hover:shadow-2xl">

            <img className="h-64 object-cover w-96 rounded-xl" src="https://www.servisfonitürkiye.com/assets/images/blog/blog-img3.jpg" alt="" />
            <div className="p-2">

              <h2 className="font-bold text-lg mb-2 ">Klima Servisi</h2>

              <p className="text-sm text-gray-600">İhtiyacınız olan servis hizmetini Merkez Servisten alın, size en yakın servisi 30 dk içinde yönlendirelim.</p>
            </div>
          </div>
          

        </div>
      </div>
    </div>


  )
}

export default teknikServis