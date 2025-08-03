"use client";
import React from 'react';
import Header from '../../components/header';

const pic1 = "/1.png";
const icone1 = "/icone1.svg"
const icone2 = "/icone2.svg"

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${pic1})` }}
    >
      <Header/>

      <div className='px-28 mt-18'>
      <div className='flex gap-4'>
      <button className='p-3 rounded-full border-2 text-sm border-white/40 flex items-center gap-2'>
        <img src={icone1} alt="icone" className="w-5 h-5" />
        landscapes
      </button>
      <button className='p-3 rounded-full border-2 text-sm border-white/40 flex items-center gap-2'>
        <img src={icone2} alt="icone" className="w-5 h-5" />
        Culture & Traditions
      </button>
      </div>

        <p className="text-6xl font-bold mt-6">
          Découvrez la magie <br/>du Sahara algérien
      </p>
      <p className="text-xl font-normal pt-8 pb-6">
      Réservez un voyage authentique, responsable et 100% saharien.<br/> Hébergements, activités, guides locaux — tout en un seul endroit
      </p>
      
      <div className='border-2 border-white/30 rounded-[35px] bg-transparent backdrop-blur-3xl p-4 w-[950px]'>
        <h1 className='mb-2 text-xl font-medium'>Trouver</h1>
        <form className='flex gap-4'>
          <div className='flex flex-col'>
            <label className='pb-1 text-xs'>Ou souhaitez-vous aller?</label>
            <input type="text" className="w-[11vw] rounded-xl md:px-4 px-2.5 md:py-2 py-1.5 border border-white/20 bg-black/30" />
          </div>

          <div className='flex flex-col'>
          <label className='pb-1 text-xs'>Nombre de personnes</label>
          <input type="text" className="w-[11vw] rounded-xl md:px-4 px-2.5 md:py-2 py-1.5 border text-md border-white/20 bg-black/30" />
          </div>

          <div className='flex flex-col'>
          <label className='pb-1 text-xs'>Budget</label>
          <input type="text" className="w-[11vw] rounded-xl md:px-4 px-2.5 md:py-2 py-1.5 border text-md border-white/20 bg-black/30" />
          </div>

          <div className='flex flex-col'>
          <label className='pb-1 text-xs'>date de debut séjour</label>
          <input type="text" className="w-[11vw] rounded-xl md:px-4 px-2.5 md:py-2 py-1.5 border text-md border-white/20 bg-black/30" />
          </div>

          <div className='flex flex-col'>
          <label className='pb-1 text-xs'>date de debut séjour</label>
          <input type="text" className="w-[11vw] rounded-xl md:px-4 px-2.5 md:py-2 py-1.5 border text-md border-white/20 bg-black/30" />
          </div>
        </form>
        <div className='flex gap-4 mt-3 mb-2 justify-end'>
          <button className='p-3 text-xs'>Reinitialiser les filtres</button>
          <button className='p-3 text-xs bg-white text-black rounded-xl'>Reinitialiser les filtres <span className=''>⟶</span></button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
