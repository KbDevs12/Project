import EmblaCarousel from "@/components/Carousel/Embla";

export default function Home() {
  return (
    <>
      <div>
        <div className="mt-14">
          <EmblaCarousel />
        </div>
        <div className=" text-center text-lg px-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          iusto sed odio similique velit libero voluptatum temporibus saepe id,
          amet maxime natus rerum, quam sit quo, veritatis reiciendis pariatur
          neque!
        </div>
        <div className="profile-kampus mt-8 px-4" id="project">
          <h2 className="text-2xl font-bold mb-4">Profil Kampus</h2>
          <p className="text-lg py-4">
            Kampus kami adalah institusi pendidikan tinggi yang berkomitmen
            untuk memberikan pendidikan berkualitas dan penelitian inovatif.
            Kami menawarkan berbagai program studi yang dirancang untuk
            mempersiapkan mahasiswa menghadapi tantangan global.
          </p>
          <p className="mb-8 text-lg">
            Fasilitas kami mencakup perpustakaan modern, laboratorium canggih,
            dan pusat kegiatan mahasiswa yang dinamis. Kami juga memiliki
            jaringan luas dengan industri dan institusi akademik di seluruh
            dunia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="https://source.unsplash.com/random/800x600?campus"
              alt="Gambar Kampus 1"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x601?campus"
              alt="Gambar Kampus 2"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x602?campus"
              alt="Gambar Kampus 3"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x603?campus"
              alt="Gambar Kampus 4"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x604?campus"
              alt="Gambar Kampus 5"
              className="w-full h-auto rounded-lg"
            />
            <img
              src="https://source.unsplash.com/random/800x605?campus"
              alt="Gambar Kampus 6"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
