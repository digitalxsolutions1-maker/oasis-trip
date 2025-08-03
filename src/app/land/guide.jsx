import React from "react";

export default function C() {
  return (
<main className="w-full bg-[url('/backgroundimage.png')] bg-no-repeat bg-cover bg-top text-white">
  <section className="text-center px-6 py-20">
    <h1 className="text-3xl md:text-5xl font-bold mb-6">
      Devenez Ambassadeur de Votre Terre
    </h1>
    <p className="mb-12 text-sm md:text-lg leading-relaxed">
      Partagez votre passion du Sahara, faites découvrir vos traditions <br />
      et gagnez votre vie en devenant guide local certifié.
    </p>

    <div className="flex flex-col mt-16 md:flex-row justify-center items-start md:items-start gap-16 max-w-5xl mx-auto text-left">
      <ul className="space-y-4 text-base md:text-lg list-disc list-inside">
        <li>Gagne de l’argent en guidant les visiteurs dans ta région.</li>
        <li>Partage ta culture avec des touristes du monde entier.</li>
        <li>Utilise une appli simple pour recevoir et gérer tes réservations.</li>
      </ul>
      <ul className="space-y-4 text-base md:text-lg list-disc list-inside">
        <li>Obtiens un badge officiel de guide saharien certifié.</li>
        <li>Profite de formations gratuites pour améliorer ton expérience.</li>
        <li>Fais partie d’une communauté de guides engagés et solidaires.</li>
      </ul>
    </div>

    <button className="mt-16 bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md">
      Devenir guide
    </button>
  </section>
</main>


  );
}
