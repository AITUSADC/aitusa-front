"use client";

import Button from "@/components/ui/Button";

const fi: React.CSSProperties = {
    fontFamily: 'SF Pro Display, SF Pro, sans-serif',
    fontWeight: 600,
    fontSize: 'clamp(20px, 3vw, 42px)',
    lineHeight: '120%',
    color: '#000000'
};

const op: React.CSSProperties = {
    fontFamily: 'SF Pro Display, SF Pro, sans-serif',
    fontWeight: 100,
    fontSize: 'clamp(14px, 1.5vw, 24px)',
    lineHeight: '120%',
    color: '#444444',
    marginTop: '8px'
};

export default function Team() {
    return (
        <div className="bg-[#F5F5F5] min-h-screen">


            <section className="w-full py-20 md:py-[200px] px-6 md:px-[80px] flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-[1569px]">
                    {[
                        {
                            img: "/images/Container.png",
                            name: "Жубаназарова Айназ",
                            role: <>Президент студенческого самоуправления <span style={{color: '#1285E5'}}>"AITUSA"</span></>
                        },
                        {
                            img: "/images/Container(1).png",
                            name: "Ермекова Линара",
                            role: "Вице-президент по социально-культурной деятельности"
                        },
                        {
                            img: "/images/Container(3).png",
                            name: "Тойлыбеков Асылхан",
                            role: "Вице-президент по научно-академической деятельности"
                        },
                    ].map((member, i) => (
                        <div key={i} className="flex flex-col w-full">
                            <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100 rounded-[40px]">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full flex flex-col items-center pt-4 text-center">
                                <h3 style={fi}>{member.name}</h3>
                                <p style={op}>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <div className="w-full">
                <img
                    src="/images/Rectangle 15.png"
                    className="w-full h-auto block"
                    alt="Team banner"
                />
            </div>


            <section className="w-full py-20 md:py-[200px] px-6 md:px-[80px] flex justify-center">
                <div className="w-full max-w-[1569px] bg-white rounded-[40px] p-8 md:p-[64px] flex flex-col items-center shadow-sm">
                    <div className="text-center mb-12">
                        <span className="block text-gray-400 text-sm md:text-base mb-4 uppercase tracking-[0.2em] font-medium">
                            О нас
                        </span>
                        <h2 className="text-[#000000] font-semibold leading-[1.1] tracking-tight max-w-[1200px]"
                            style={{ fontSize: 'clamp(24px, 4.5vw, 64px)' }}>
                            Хотите организовывать мероприятия, помогать студентам,
                            создавать контент <span className="text-gray-300">или налаживать партнерские отношения?</span>
                        </h2>
                    </div>

                    <div className="w-full relative">
                        <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-[32px] md:rounded-[40px]">
                            <img
                                src="/images/IMG.png"
                                alt="Join us"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute left-6 bottom-6 md:left-12 md:bottom-12">
                            <Button href="#apply" variant="blue">
                                Присоединяйтесь к нам
                            </Button>
                        </div>
                    </div>
                </div>
            </section>




            <div className="w-full">
                <img
                    src="/images/Rectangle 14.svg"
                    className="w-full h-auto block"
                    alt="Footer banner"
                />
            </div>

        </div>
    );
}