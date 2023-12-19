import { Carousel, Typography, Button } from "@material-tailwind/react";

 
export function anasayfaSlider() {
  return (
    <div>

    
   


    <Carousel className="h-[750px] ">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 1"
          className="h-[750px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-red_orange"
            >
              7/24 sizin için buradayız
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              İhtiyacınız olan hehangi bir servis ihtiyacınız için en doğru çözüm için her zaman arayabilirsiniz. Sorularınızı yanıtlamak ve tamir için randevu oluşturmak için her zaman buradayız.
            </Typography>
            <div className="flex justify-center ">
              
              <a href="tel:08508508558" className='text-white   bg-cyan font-medium rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN BİLGİ AL</a>
              
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1604754742629-3e5728249d73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-[750px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-red_orange"
            >
              Elektronik Servisi
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Bilgisayarınızın performansı mı düştü? Telefonunuzun şarjı yetmiyor mu? Elektronik cihazlarınızın tamiratı için güvenilir ve profesyonel bir işyeri arıyorsanız, doğru yerdesiniz! Her marka ve modele uygun tamir hizmetleri sunmaktayız.
            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 3"
          className="h-[750px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-red_orange"
            >
              Teknik Servis
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Buzdolabınızın soğutma sorunu mu var? Klimanız eskisi gibi verimli değil mi? Bizimle iletişime geçin, size en iyi tamir hizmetini sunalım. İş yerimizde, yenilikçi tamir teknikleri ve yüksek kaliteli yedek parçalarla cihazlarınızı orijinal durumuna getiriyoruz.


            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1603114595741-e60bf9486e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 4"
          className="h-[750px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-red_orange"
            >
              Hizmet Kalitesi
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Ekran değişimi, anakart onarımı, güç kaynağı değişimi ve yazılım sorunları gibi farklı hizmetlerimiz bulunmaktadır.
              Tamir süreci boyunca size düzenli bilgi aktararak, her adımda ne olduğunu anlamanızı ve memnuniyetinizi sağlamayı hedefliyoruz.



            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 5"
          className="h-[750px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-red_orange"
            >
              Hızlı Destek
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              İhtiyacınız olan servis hizmetini bizden alın, size en yakın uzman ekibi 30 dk içinde yönlendirelim.
              Eşyalarınızı tamir etmek için tecrübeli ve uzman ekibimize güvenin. Memnuniyetiniz bizim önceliğimizdir.
            </Typography>
            <div className="flex gap-2">
              
            </div>
          </div>
        </div>
      </div>
      
    </Carousel>
    
    </div>
  );
}

export default anasayfaSlider;