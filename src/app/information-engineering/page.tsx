export default function Page() {
  return (
    <>
      <div className="profile-fakultas mt-20 px-4">
        <h2 className="text-2xl font-bold mb-4" id="project">
          Profil Fakultas Teknik Informatika
        </h2>
        <p className="text-lg py-4">
          Fakultas Teknik Informatika (FTI) adalah salah satu fakultas unggulan
          yang berfokus pada pengembangan ilmu pengetahuan dan teknologi di
          bidang informatika. Kami berkomitmen untuk mencetak lulusan yang
          kompeten dan siap bersaing di dunia industri.
        </p>
        <p className="mb-8 text-lg">
          FTI menawarkan berbagai program studi yang mencakup berbagai aspek
          informatika, mulai dari pemrograman, jaringan komputer, keamanan
          siber, hingga kecerdasan buatan. Kami juga memiliki fasilitas
          laboratorium yang lengkap dan modern untuk mendukung kegiatan belajar
          mengajar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-8">
          <img
            src="https://source.unsplash.com/random/800x600?technology"
            alt="Gambar FTI 1"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x601?technology"
            alt="Gambar FTI 2"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x602?technology"
            alt="Gambar FTI 3"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x603?technology"
            alt="Gambar FTI 4"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x604?technology"
            alt="Gambar FTI 5"
            className="w-full h-auto rounded-lg"
          />
          <img
            src="https://source.unsplash.com/random/800x605?technology"
            alt="Gambar FTI 6"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
