export default function Home() {
  return (
    <main className="bg-[#0f172a] text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-24">
        <img
          src="/me.jpg"
          className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-yellow-400"
        />

        <h1 className="text-5xl font-bold">
          Uchqun Turdiyev
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          Marketing Strategist • Digital Marketer • Sales Expert
        </p>
      </section>


      {/* ABOUT */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
          Men haqimda
        </h2>

        <p className="text-gray-300 leading-8">
          Men marketing strategiyasi, reklama optimizatsiyasi va savdo
          tizimlarini rivojlantirish bilan shug‘ullanaman. 
          Bizneslarga mijoz oqimini oshirish va marketingni tizimlashtirish
          bo‘yicha yordam beraman.
        </p>
      </section>


      {/* WORKS */}
      <section className="py-20 px-6 bg-[#020617]">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Mening Ishlarim
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-2">
              Marketing Strategy
            </h3>
            <p className="text-gray-400">
              Klinikalar va bizneslar uchun marketing audit.
            </p>
          </div>

          <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-2">
              SMM Campaign
            </h3>
            <p className="text-gray-400">
              Target reklama orqali mijoz oqimini oshirish.
            </p>
          </div>

          <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-bold mb-2">
              Sales System
            </h3>
            <p className="text-gray-400">
              Bizneslar uchun savdo tizimi yaratish.
            </p>
          </div>

        </div>
      </section>


      {/* CERTIFICATES */}
      <section className="py-20 px-6">

        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Sertifikatlar
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">

          <img
            src="/sert1.jpg"
            className="w-64 rounded-lg border border-gray-700"
          />

          <img
            src="/sert2.jpg"
            className="w-64 rounded-lg border border-gray-700"
          />

        </div>

      </section>


      {/* SOCIAL */}
      <section className="bg-[#020617] py-20 text-center">

        <h2 className="text-3xl font-bold mb-8 text-yellow-400">
          Ijtimoiy tarmoqlar
        </h2>

        <div className="flex justify-center gap-8 text-lg">

          <a href="#" className="hover:text-yellow-400">
            Instagram
          </a>

          <a href="#" className="hover:text-yellow-400">
            Telegram
          </a>

          <a href="#" className="hover:text-yellow-400">
            LinkedIn
          </a>

        </div>

      </section>


      {/* CONTACT */}
      <section className="py-24 px-6">

        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">
          Bog‘lanish
        </h2>

        <form className="max-w-xl mx-auto space-y-4">

          <input
            type="text"
            placeholder="Ism"
            className="w-full p-3 rounded bg-[#020617] border border-gray-700"
          />

          <input
            type="text"
            placeholder="Familya"
            className="w-full p-3 rounded bg-[#020617] border border-gray-700"
          />

          <input
            type="tel"
            placeholder="Telefon raqam"
            className="w-full p-3 rounded bg-[#020617] border border-gray-700"
          />

          <textarea
            placeholder="Taklif yoki xabar yozing..."
            className="w-full p-3 rounded bg-[#020617] border border-gray-700 h-32"
          />

          <button className="bg-yellow-400 text-black px-6 py-3 rounded font-bold w-full">
            Yuborish
          </button>

        </form>

      </section>

    </main>
  )
}