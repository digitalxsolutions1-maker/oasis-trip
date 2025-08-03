import React from 'react'
const pic6 ="/pic7.png"
const icon = "/icone1.svg"
const pic8 = "/pic8.png"
const pic9 = "/pic9.png"

const features = () => {
  return (
    <div>
        <h1 className='flex justify-center items-center text-center font-bold text-4xl p-12 mt-6'>Un tourisme durable, inclusif et <br/> accessible à tous</h1>

        <div className='w-[100%] p-10 -mt-8 flex gap-6'>
            <div className='w-[30%]'>
                <h1 className='text-3xl font-bold'>Qui sommes-nous ?</h1>
                <p className='text-xl font-normal'>Sahara Journey+ est une plateforme immersive qui permet aux voyageurs de planifier, réserver et vivre une expérience authentique dans le Sahara algérien. De l’hébergement aux activités locales, en passant par les guides sahariens et les missions écologiques, tout est réuni pour un voyage responsable, humain et inoubliable.</p>
            </div>
            <div className="relative w-[50%]">
                <img src={pic6} alt="pic1" className="h-[400px] rounded-[40px] w-full object-cover" />
                <div className="absolute top-25 left-10 right-10 text-white text-4xl font-bold leading-tight">
                <p>Nos services :</p>
                
                <button className='p-3 rounded-full mt-2 border-2 text-xs border-white/40 flex items-center gap-2'>
                    <img src={icon} alt="icone" className="w-5 h-5" />
                    Mise en relation avec des guides locaux
                </button>
                <button className='p-3 rounded-full mt-2 border-2 text-xs border-white/40 flex items-center gap-2'>
                    <img src={icon} alt="icone" className="w-5 h-5" />
                    Suivi personnalisé du voyageur
                </button>
                <button className='p-3 rounded-full mt-2 border-2 text-xs border-white/40 flex items-center gap-2'>
                    <img src={icon} alt="icone" className="w-5 h-5" />
                    Visites immersives en 3D
                </button>
                <button className='p-3 rounded-full mt-2 border-2 text-xs border-white/40 flex items-center gap-2'>
                    <img src={icon} alt="icone" className="w-5 h-5" />
                    Jeu de défis écoresponsables
                </button>
                </div>
            </div>
            <div className="relative w-[30%]">
            <img src={pic8} alt="pic1" className="rounded-[40px] h-[200px] w-full object-cover" />
            <div className="absolute top-40 left-10 right-10 text-white text-lg text-center leading-tight">
                <p className='p-2 rounded-full bg-transparent backdrop-blur-2xl text-[10px] text-center justify-center border-2 border-white/40 flex items-center gap-2'>
                    Si le chameau pouvait voir sa bosse, il tomberait de honte
                </p>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <img src={pic9} alt="pic1" className="rounded-[40px] h-[200px] flec justify-center items-center object-cover" />
            </div>

        </div>
        </div>

    </div>
  )
}

export default features