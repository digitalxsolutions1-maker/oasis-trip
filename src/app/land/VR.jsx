import React from 'react'

const pic1 = "/pic1.png";
const pic2 = "/pic2.png";
const pic3 = "/pic3.png";
const pic4 = "/pic4.png";
const pic5 = "/pic5.png";
const pic6 = "/pic6.png";

const VR = () => {
  return (
    <div>
      <h1 className='flex justify-center items-center font-bold text-4xl p-12'>Explorez les Trésors du Sahara</h1>
      <h1 className='flex justify-center items-center font-semibold text-xl pb-10'>Plongez dans l’âme de chaque région à travers des visites 3D immersives et des récits authentiques.</h1>

      <div className='w-[100%] flex gap-4 p-12'>
      <div className="w-[35%] flex flex-col gap-2">
  {/* Image 1 avec texte */}
  <div className="relative w-full">
    <img src={pic1} alt="pic1" className="h-[600px] rounded-[40px] w-full object-cover" />
    <p className="absolute top-10 left-10 right-10 text-white text-3xl font-bold leading-tight">
      Tamanrasset <br />
      <span className="font-normal text-lg leading-3">
        Cœur du Hoggar, paysages volcaniques, traditions touareg, Assekrem.
      </span>
    </p>
  </div>

  {/* Image 2 avec texte */}
  <div className="relative w-full">
    <img src={pic2} alt="pic2" className="h-80 rounded-[40px] w-full object-cover" />
    <p className="absolute top-10 left-10 right-10 text-white text-3xl font-bold leading-tight">
      Djanet <br />
      <span className="font-normal text-lg leading-snug">
        Beautés du Tassili n'Ajjer (classé UNESCO), peintures rupestres, oasis féeriques.
      </span>
    </p>
  </div>
</div>

<div className="w-[35%] flex flex-col gap-4">
  {/* Image 1 avec texte */}
  <div className="relative w-full">
    <img src={pic3} alt="pic1" className="h-80 rounded-[40px] w-full object-cover" />
    <p className="absolute top-10 left-10 right-10 text-white text-3xl font-bold leading-tight">
    Timimoun <br />
      <span className="font-normal text-lg leading-3">
      Oasis rouge, architecture ksourienne unique, ambiance mystique.
      </span>
    </p>
  </div>

  {/* Image 2 avec texte */}
  <div className="relative w-full">
    <img src={pic4} alt="pic2" className="h-[600px] rounded-[40px] w-full object-cover" />
    <p className="absolute top-10 left-10 right-10 text-white text-3xl font-bold leading-tight">
    Ouargla <br />
      <span className="font-normal text-lg leading-snug">
      Point de départ vers plusieurs oasis, riche culture saharienne.
      </span>
    </p>
  </div>

  
</div>
<div className="w-[35%] flex flex-col gap-4">
  {/* Image 1 avec texte */}
  <div className="relative w-full">
    <img src={pic5} alt="pic1" className="h-[600px] rounded-[40px] w-full object-cover" />
    <p className="absolute top-10 left-10 right-10 text-white text-3xl font-bold leading-tight">
    Ghardaïa <br />
      <span className="font-normal text-lg leading-3">
      Capitale du Mzab, architecture inscrite à l’UNESCO, artisanat riche.
      </span>
    </p>
  </div>

  {/* Image 2 avec texte */}
  <div className="relative w-full">
    <img src={pic6} alt="pic2" className="h-80 rounded-[40px] w-full object-cover" />
    <p className="absolute top-10 left-10 right-10 text-white text-3xl font-bold leading-tight">
    Bechar (Taghit) <br />
      <span className="font-normal text-lg leading-snug">
      Grandes dunes dorées, palmeraies, patrimoine historique.
       </span>
    </p>
  </div>
</div>
      </div>

    </div>
  )
}

export default VR