import React, { useState } from 'react'

const serviscagir = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: Object.fromEntries(formData),
            });

            const result = await response.json();
            console.log(result.message);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className=''>
            <div className='grid md:grid-cols-2  md:gap-6'>
                <div className='md:max-w-xl max-w-sm  my-20 md:mr-0 mx-auto bg-dark_mode rounded-lg p-6 text-white'>
                    <table class="table-auto">
                        <thead>
                            <tr className='text-red_orange text-xl sm:text-3xl underline'>
                                <th>Adres</th>
                                <th>İlçe/İl</th>
                                <th>No</th>
                            </tr>
                        </thead>
                        <tbody className='sm:text-xl text-lg'>
                            <tr>
                                <td>Kemankeş Karamustafa Paşa, Gümrük Sk. 34425 </td>
                                <td className='italic'>Beyoğlu/İstanbul</td>
                                <td>25</td>
                            </tr>
                            <tr>

                            </tr>
                            <tr>

                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className=' my-auto sm:mx-auto md:ml-0 md:w-10/12'  >
                    <div className=" p-4 flex-wrap">
                        <div className='px-2 mb-0  xl:text-4xl text-lg m-auto text-red_orange font-bold bg-dark_mode rounded-t-md ms-0 bg-opacity-75'>7/24 Müşteri Hizmetleri </div>
                        <div className='px-2 mt-0 xl:text-xl text-white  bg-dark_mode rounded-b-md bg-opacity-75 text-sm'> İhtiyacınız olan hehangi bir servis ihtiyacınız için en doğru çözüm için her zaman arayabilirsiniz. Sorularınızı yanıtlamak ve tamir için randevu oluşturmak için her zaman buradayız.
                        </div>
                        <div className='mx-auto me-0 my-0 grid xl:grid-cols-2 md:grid-cols-1'>
                            <a href="tel:08508508558" className='text-white max-h-16  bg-indigo-600 font-medium rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>HEMEN BİLGİ AL</a>
                            <a href="tel:08508508558" className='text-white max-h-16  bg-gray-500 font-medium rounded-lg text-sm xl:text-lg px-5 py-4 text-center hover:bg-ferrari_red hover:drop-shadow-md transition duration-300 ease-in-out m-2'>0850 850 8550</a></div>
                    </div>
                </div>

            </div>


            <div className='grid md:grid-cols-2  md:gap-6'>
                <div className=''>
                    <form onSubmit={handleSubmit} id='contactForm' method='POST' className="md:max-w-xl max-w-sm  my-20 md:mr-0 mx-auto bg-dark_mode rounded-lg p-6">
                        <div className="">
                            <div className="relative z-0 w-full mb-5 ">
                                <input type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ad Soyad</label>
                            </div>

                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email adresi</label>
                        </div>


                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tel no: (550 979 5160)</label>
                            </div>

                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mesaj</label>
                            <textarea name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Sorununuzu kısaca yazınız..."></textarea>
                        </div>

                        <button type="submit" className="realative mx-auto  w-full  text-white bg-cyan hover:bg-red_orange focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md  px-5 py-2.5 text-center">Mesaj Gönder</button>
                    </form>

                </div>

                <div className=' my-auto sm:mx-auto md:ml-0 md:w-10/12'  >
                    <div className=" p-4 flex-wrap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.0549089862184!2d28.974388878624186!3d41.02285329493505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e8087f4bff%3A0x791b116c3a3c9bc3!2zS2VtYW5rZcWfIEthcmFtdXN0YWZhIFBhxZ9hLCBHw7xtcsO8ayBTay4sIDM0NDI1IEJleW_En2x1L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1699781686079!5m2!1str!2str" width="100%" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default serviscagir