import React from 'react';
import Image from 'next/image';

const committees = [
    { id: 1, title: 'Социальная деятельность', info: '', bg: '/committees/soc_cul_dig.png', isBlue: true },
    { id: 2, title: 'СМИ', info: '', bg: '/committees/smi.png', isBlue: false },
    { id: 3, title: 'Культурно-массовая деятельность', info: '', bg: '/committees/soc_cul_dig.png', isBlue: true },
    { id: 4, title: 'Внешние связи', info: '', bg: '/committees/vneshie.png', isBlue: false },
    { id: 5, title: 'Академическая деятельность', info: '', bg: '/committees/academ.png', isBlue: false },
    { id: 6, title: 'Цифровизация', info: '', bg: '/committees/soc_cul_dig.png', isBlue: true },
    { id: 7, title: 'Научная и инновационная деятельность', info: '', bg: '/committees/sciense.png', isBlue: false, wide: true },
];

const Committees = () => {
    return (
        <section className="py-16 pb-200px px-[20px] md:px-[80px] w-full max-w-[1729px] mx-auto">

            <h2 className="text-[32px] md:text-[40px] font-semibold text-center mb-[40px] md:mb-[80px]">
                Комитеты
            </h2>


            <div className="grid grid-cols-2 lg:grid-cols-4 gap-[12px] md:gap-[20px]">
                {committees.map((item) => (
                    <button
                        key={item.id}
                        className={`
                            relative group overflow-hidden rounded-[24px] md:rounded-[32px] p-4 md:p-8 transition-all duration-500 hover:-translate-y-1
                            ${item.isBlue ? 'bg-[#3182ce]' : 'bg-white border border-gray-100 shadow-sm'}
                            
                          
                            ${item.wide ? 'col-span-1 lg:col-span-2' : 'col-span-1'}
                            
                           
                            aspect-square ${item.wide ? 'lg:aspect-auto' : ''}
                        `}
                    >

                        <div className="absolute inset-0 z-0">
                            <Image
                                src={item.bg}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>


                        <div className="absolute top-3 right-3 md:top-6 md:right-6 z-10">
                            {/*будущая кнопка*/}
                        </div>

                        <div className="absolute inset-0 z-20 bg-blue-600/90 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-center p-4 md:p-8 text-left">
                            <p className="text-white text-[12px] md:text-base font-medium">
                                {item.info}
                            </p>
                        </div>


                        <div className="relative z-10 h-full flex flex-col justify-end lg:group-hover:opacity-0 transition-opacity duration-300 text-left">
                            <h3 className={`text-[13px] sm:text-[16px] md:text-[22px] font-bold leading-tight ${item.isBlue ? 'text-white' : 'text-black'}`}>
                                {item.title}
                            </h3>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Committees;