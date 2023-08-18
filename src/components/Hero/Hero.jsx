import React from 'react'
import sunita from '../../img/old-lady.jpg'
import nature from '../../img/mountain.jpg'

const Hero = () => {
    return (
        <div>
            <div className='absolute top-16 bg-sky-50'>
                <div style={{ backgroundImage: `url(${nature})` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 ">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-cyan-900">HELLO SUNITA SHARMA!  </h1>
                        <p className="mt-7 mb-8 text-md  sm:mb-0 xl:max-w-2xl text-black-100">Each day is another chance to change your life.
                        Motivation is what gets you started. Habit is what keeps you going.A journey of a thousand miles begins with a single step.
 </p>
                    </div>
                </div>
                {/* 480x320 */}
                <img src={sunita} alt="" className="w-3/6 mx-auto mb-12 -mt-20 rounded-3xl shadow-md lg:-mt-40 dark:bg-gray-500" />
                <div className='h-60 -mt-32 -z-50 '>
                    <p className='w-full pb-4 absolute text-Cyan-600 text-center bottom-0 bg-slate-300'>
                        <a href="https://github.com/Monishgithub123">Made by @MONISH YEDLEWAR  </a>
                    </p>
                </div>

                <div className=" -mt-48 mb-10 py-4 px-4 pt-16 bg-green-100 flex flex-col items-center text-center">
                    <div className='max-w-4xl text-lg px-4'>
                        <h1 className='w-full text-center text-3xl py-4 font-semibold mb-2 text-gray-700'><span className='text-cyan-600'>MYfitness BY MONISH YEDLEWAR</span>  GUIDES YOU TO STAY HEALTHY AND FIT 😊</h1>
                        <p className='text-gray-700'>Sunita Sharma you can lead a healthier life by incorporating regular walks, balanced meals with plenty of fruits and vegetables, and staying hydrated. Engaging in mindfulness practices, connecting with loved ones, and pursuing hobbies can promote mental well-being.  It's important to maintain open communication with doctors, ensure home safety, and have a support network in place. These small changes can collectively contribute to her overall health and happiness.</p>

                        <p className='text-gray-700'>But if you're 65 or older, something as simple as the flu or a common cold can progress and lead to complications. This includes secondary infections like pneumonia, bronchitis, an ear infection, or a sinus infection. If you have a chronic condition such as asthma or diabetes, a respiratory illness can make these worse.</p>

                        <p className='text-gray-700'>Because of this, it's important to make healthy choices to strengthen your immune system and reduce the likelihood of illness.</p>

                        <p className='py-10 text-3xl text-gray-1000 font-semibold'> Remember these <span className='text-cyan-600'>important tips</span> to stay healthy year-round</p>
                        <ul className='list-decimal text-gray-800'>
                            <li className='hover:text-cyan-600'>Kick Unhealthy Habits</li>
                            <li className='hover:text-cyan-600'>Get Your Checkups</li>
                            <li className='hover:text-cyan-600'> Make Sleep a Priority</li>
                            <li className='hover:text-cyan-600'>Exercise Regularly</li>
                            <li className='hover:text-cyan-600'>Eat a Nutritious Diet</li>
                            <li className='hover:text-cyan-600'>Enjoy Breakfast Every Day</li>
                            <li className='hover:text-cyan-600'>Hydrate With Water</li>
                            <li className='hover:text-cyan-600'>Reduce Your Stress</li>
                            <li className='hover:text-cyan-600'>Get Vaccinated</li>
                            <li
                            className='hover:text-cyan-600'>Wash Those Hands
                            </li>
                        </ul>
                    </div>
                    <br className='bg-red-500 h-2' />
                    {/* checkbox table */}
                    {/* <p className='w-full text-center text-2xl my-2 mt-10 text-gray-700'> Check following boxes to track daily report</p>
                    <div className='flex justify-center'>
                        <table class="table-auto justify-start">
                            <tbody className='text-xl'>
                                <tr className='flex space-x-4'>
                                    <td>
                                        <label>
                                            <input type="checkbox" className='accent-green-600' />
                                        </label>
                                    </td>
                                    <td>Exercise and Yoga</td>
                                </tr>
                                <tr className='flex space-x-4'>
                                    <td>
                                        <label>
                                            <input type="checkbox" className='accent-green-600' />
                                        </label>
                                    </td>
                                    <td>Healthy Diet</td>
                                </tr>
                                <tr className='flex space-x-4'>
                                    <td>
                                        <label>
                                            <input type="checkbox" className='accent-green-600' />
                                        </label>
                                    </td>
                                    <td>Feeling Happy Happy! 😄</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                    {/* checkbox table */}
                </div>
            </div>
        </div>
    )
}

export default Hero