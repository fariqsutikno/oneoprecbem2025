const organizationsData = [
  {
    "id": "bem-stdiis",
    "name": "Badan Eksekutif Mahasiswa (BEM)",
    "logo": "./logo/bem.jpg",
    "category": "Keorganisasian", 
    "featured": true,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/C1bj21x5oXVeHbdS8",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Badan Eksekutif Mahasiswa (BEM) STDI Imam Syafi'i merupakan organisasi tertinggi di kampus yang berperan sebagai poros kehidupan kampus yang integratif, adaptif, profesional, dan responsif. BEM STDI Imam Syafi'i memiliki tanggung jawab untuk membuat program kerja yang memaksimalkan peran mahasiswa, mengkaji berbagai isu, melakukan pencerdasan, dan menyampaikan aspirasi mahasiswa maupun masyarakat kepada pihak yang bersangkutan.",
      "vision": [
        "BEM sebagai kolektif yang Tertata dan Responsif, Tumbuh Bersama Menjadi Ekosistem yang Terbuka untuk Mengakselerasi Potensi serta Kebutuhan Mahasiswa."
      ],
      "mission": [
        "Membangun tata kelola dan sistem kerja organisasi yang terstruktur, transparan, serta berbasis SOP dan evaluasi yang berkelanjutan.",
        "Mengembangkan kapasitas, rasa tanggung jawab dan akuntabilitas pengurus melalui ekosistem pembinaan serta monitoring kinerja yang objektif.",
        "Menjadikan BEM sebagai ekosistem yang inklusif dan kolaboratif, merangkul seluruh elemen mahasiswa tanpa sekat untuk berpartisipasi aktif.",
        "Menjalankan mekanisme pemetaan yang responsif untuk mengakselerasi potensi, bakat, serta kebutuhan akademik maupun karier mahasiswa secara nyata.",
        "Menghadirkan program-program pelayanan dan inisiatif kesejahteraan mahasiswa yang inklusif, solutif, serta langsung dirasakan manfaatnya."
      ],
      "generalRequirements": [
        "Mahasiswa S1 aktif STDIIS",
        "Tidak berencana cuti atau melepas status mahasiswa selama satu tahun kepengurusan",
        "Bersedia mengemban amanah selama satu periode penuh",
        "Mengisi formulir beserta CV, hasil tes DISC dan gaya komunikasi"
      ],
      "contactInfo": {
        "instagram": "@bem_stdiis",
        "telegram": "@bem_stdiis",
        "whatsapp": "08978204885"
      },
      "divisions": [
    {
      "name": "Inspektorat Jenderal (Irjen)",
      "quota": null,
      "fokus_utama": "Menjalankan fungsi pengawasan independen, audit internal, serta penegakan standar mutu dan etika organisasi secara objektif guna memastikan seluruh lini berjalan sesuai dengan kerangka sistem yang berlaku.",
      "tugas_pokok": [
        "Melakukan monitoring dan evaluasi independen terhadap kinerja kementerian dan biro di bawah BEM.",
        "Mengawal kepatuhan pengurus terhadap SOP, kode etik, dan alur kerja organisasi.",
        "Menyediakan mekanisme pelaporan internal (whistleblowing) untuk mendeteksi dini penyimpangan atau hambatan operasional.",
        "Menjadi mitra strategis Presiden dan Wakil Presiden dalam menjaga integritas kelembagaan."
      ],
      "requirements": [
        "Memiliki integritas tinggi, objektif, dan tidak mudah terpengaruh secara personal.",
        "Teliti, kritis, serta memiliki pemahaman yang kuat terhadap sistem organisasi.",
        "Mampu berkomunikasi secara asertif dan memberikan umpan balik yang membangun."
      ]
    },
    {
      "name": "Biro Administrasi",
      "quota": null,
      "fokus_utama": "Bertanggung jawab terhadap ketertiban administrasi, standardisasi dokumen, dan pengelolaan arsip digital organisasi secara sistematis dan berkelanjutan.",
      "tugas_pokok": [
        "Mengelola surat-menyurat masuk dan keluar, baik fisik maupun digital.",
        "Menstandarisasi format dokumen, laporan, dan notulensi rapat resmi organisasi.",
        "Membangun serta merawat sistem arsip digital yang rapi dan terstruktur.",
        "Menyusun kalender kegiatan BEM serta rekapitulasi administratif secara periodik."
      ],
      "requirements": [
        "Detail, teliti, dan memiliki kepekaan tinggi terhadap kerapian serta kesalahan penulisan (typo).",
        "Terbiasa menggunakan perangkat pengolah data dan dokumen secara efisien.",
        "Responsif terhadap kebutuhan administratif kesekjenan."
      ]
    },
    {
      "name": "Biro Keuangan",
      "quota": null,
      "fokus_utama": "Mengelola arus kas dan siklus keuangan organisasi secara akuntabel, transparan, serta siap diaudit mulai dari perencanaan hingga pelaporan akhir.",
      "tugas_pokok": [
        "Menyusun dan mereviu Rencana Anggaran Belanja (RAB) untuk setiap program kerja.",
        "Melakukan pencatatan transaksi kas masuk dan keluar secara real-time.",
        "Menyusun laporan keuangan berkala (arus kas/LRA) yang transparan.",
        "Mengawasi penggunaan dana agar sesuai dengan standar keuangan dan prinsip efisiensi."
      ],
      "requirements": [
        "Jujur, amanah, dan memiliki orientasi yang kuat terhadap akurasi angka.",
        "Teliti dalam menyusun pembukuan dan laporan keuangan yang audit-ready.",
        "Memiliki komitmen tinggi terhadap prinsip transparansi finansial."
      ]
    },
    {
      "name": "Biro Desain Komunikasi Visual (DKV)",
      "quota": null,
      "fokus_utama": "Mengelola komunikasi publik, strategi branding visual, dan diseminasi informasi BEM agar tersampaikan secara estetis, inklusif, dan konsisten.",
      "tugas_pokok": [
        "Menyusun strategi komunikasi dan identitas visual BEM secara konsisten di media sosial.",
        "Memproduksi konten grafis, video, infografis, dan narasi publikasi yang informatif.",
        "Mendokumentasikan setiap kegiatan BEM dalam bentuk visual yang tertata rapi.",
        "Berkolaborasi dengan kementerian lain untuk mendukung publikasi program kerja mereka."
      ],
      "requirements": [
        "Memiliki kepekaan estetika visual yang tajam serta kreativitas tinggi.",
        "Familiar dengan perangkat lunak desain dan penyuntingan konten digital.",
        "Responsif terhadap tren komunikasi publik dan pengeloaan media sosial."
      ]
    },
    {
      "name": "Kementerian Harmonisasi Kampus",
      "quota": null,
      "fokus_utama": "Membangun sinergi, komunikasi yang efektif, dan kolaborasi harmonis antar organisasi mahasiswa (Ormawa) serta UKM di lingkungan kampus.",
      "tugas_pokok": [
        "Menjalin komunikasi intensif dengan seluruh himpunan prodi/daerah, Ormawa, dan UKM sebagai mitra strategis.",
        "Merancang dan memfasilitasi program kolaboratif lintas organisasi.",
        "Menyelenggarakan forum koordinasi berkala untuk menyamakan visi gerakan kemahasiswaan.",
        "Bertindak sebagai mediator yang netral dan solutif dalam mengatasi gesekan antar Ormawa."
      ],
      "requirements": [
        "Supel, luwes, dan memiliki kemampuan membangun relasi sosial yang kuat.",
        "Peka terhadap potensi konflik serta memiliki kapasitas mediasi yang baik.",
        "Berorientasi pada sistem koordinasi yang rapi dan kolaboratif."
      ]
    },
    {
      "name": "Kementerian Akademik dan Pengembangan Karier",
      "quota": null,
      "fokus_utama": "Mendukung peningkatan prestasi akademik dan kesiapan profesional mahasiswa melalui komunitas belajar, mentoring, serta akses pengembangan karier.",
      "tugas_pokok": [
        "Mengelola komunitas belajar atau ruang diskusi ilmiah sebagai wadah pengembangan skill mahasiswa.",
        "Menyediakan informasi dan pendampingan untuk kompetisi/lomba akademik maupun non-akademik.",
        "Menyelenggarakan pelatihan keterampilan penunjang karier (seperti penulisan CV, wawancara, dan personal branding).",
        "Membuka akses informasi magang dan pengembangan kapasitas profesional."
      ],
      "requirements": [
        "Memiliki semangat belajar yang tinggi dan kesadaran terhadap tren dunia profesional.",
        "Senang berbagi pengetahuan serta membimbing rekan sebaya melalui diskusi interaktif.",
        "Inisiatif tinggi dalam merancang program pengembangan diri yang aplikatif."
      ]
    },
    {
      "name": "Kementerian Pengembangan Bahasa",
      "quota": null,
      "fokus_utama": "Meningkatkan kapasitas literasi, kemampuan bahasa asing, dan budaya komunikasi yang baik di kalangan mahasiswa.",
      "tugas_pokok": [
        "Menyelenggarakan program pelatihan atau kelas bahasa asing (seperti Bahasa Arab dan Inggris).",
        "Menginisiasi kompetisi atau tantangan kebahasaan yang edukatif dan menarik.",
        "Menyediakan konten edukatif seputar pengembangan kemampuan berbahasa.",
        "Mendorong penggunaan standar komunikasi yang baik dalam ekosistem kampus."
      ],
      "requirements": [
        "Memiliki kecintaan terhadap dunia kebahasaan, literasi, dan komunikasi.",
        "Percaya diri tampil di depan publik sebagai fasilitator atau pengajar.",
        "Kreatif dalam mengemas materi belajar bahasa agar interaktif dan menyenangkan."
      ]
    },
    {
      "name": "Kementerian Hubungan Eksternal",
      "quota": null,
      "fokus_utama": "Membangun jejaring strategis dengan lembaga luar kampus, instansi, alumni, dan mitra eksternal untuk memperluas kolaborasi dan dukungan organisasi.",
      "tugas_pokok": [
        "Merumuskan strategi relasi dengan pihak luar, sponsor, media partner, dan instansi terkait.",
        "Membangun jejaring komunikasi dengan alumni untuk program mentorship dan dukungan karier.",
        "Mewakili institusi dalam forum atau undangan kelembagaan eksternal.",
        "Mengelola pangkalan data (database) mitra strategis BEM."
      ],
      "requirements": [
        "Komunikatif, pandai bernegosiasi, dan mewakili citra lembaga secara elegan.",
        "Memiliki relasi yang luas atau terbiasa berinteraksi dengan pihak profesional.",
        "Cekatan dan tanggap dalam merawat hubungan jangka panjang dengan mitra."
      ]
    },
    {
      "name": "Kementerian Pemuda dan Olahraga",
      "quota": null,
      "fokus_utama": "Mewadahi minat bakat di bidang keolahragaan serta menumbuhkan budaya hidup sehat, sportivitas, dan solidaritas antar mahasiswa.",
      "tugas_pokok": [
        "Menyelenggarakan kegiatan olahraga berkala, turnamen, maupun ruang latihan rutin.",
        "Mendorong terbentuknya komunitas-komunitas olahraga mahasiswa.",
        "Mempersiapkan dan mendampingi delegasi kampus untuk ajang kompetisi olahraga eksternal.",
        "Mengelola inventaris serta perawatan fasilitas dan perlengkapan olahraga secara berkala."
      ],
      "requirements": [
        "Memiliki minat tinggi di bidang keolahragaan dan manajemen kegiatan fisik.",
        "Energik, menyukai kerja tim, dan mampu menggerakkan massa melalui event olahraga.",
        "Bertanggung jawab dalam pemeliharaan aset dan inventaris penunjang."
      ]
    },
    {
      "name": "Kementerian Kaderisasi dan Pengembangan SDM (KPSDM)",
      "quota": null,
      "fokus_utama": "Merancang sistem pembinaan, penjenjangan kader, dan ekosistem pertumbuhan kapasitas internal pengurus secara berkelanjutan.",
      "tugas_pokok": [
        "Menyusun dan mengevaluasi sistem kaderisasi serta pelatihan internal BEM.",
        "Menyelenggarakan program peningkatan soft skill, kepemimpinan, dan kerja sama tim.",
        "Mengawal sistem monitoring perkembangan kapasitas dan evaluasi kinerja pengurus.",
        "Menanamkan nilai-nilai organisasi serta budaya kerja sehat di lingkungan internal."
      ],
      "requirements": [
        "Memiliki growth mindset yang kuat serta kepedulian tinggi terhadap perkembangan orang lain.",
        "Berpengalaman atau berminat dalam bidang fasilitasi, mentorship, dan manajemen talenta.",
        "Objektif dan peka dalam melihat dinamika pertumbuhan anggota."
      ]
    },
    {
      "name": "Kementerian Kesejahteraan Mahasiswa (Kesma)",
      "quota": null,
      "fokus_utama": "Memfokuskan kapabilitas operasional pada dimensi pelayanan kesejahteraan mahasiswa secara holistik, mencakup pengelolaan bantuan fasilitas, dukungan finansial, kemudahan akses kemahasiswaan, serta inisiatif yang langsung dirasakan manfaatnya oleh mahasiswa.",
      "tugas_pokok": [
        "Merancang dan menjalankan program-program yang meningkatkan kesejahteraan mahasiswa, seperti dukungan finansial, kesehatan, dan akses fasilitas kampus.",
        "Mengelola informasi serta penyaluran program bantuan pendidikan atau beasiswa internal.",
        "Menyediakan kanal pelayanan yang solutif terhadap kendala non-akademik dan kesejahteraan harian mahasiswa.",
        "Beririsan secara harmonis dengan fungsi legislatif BPM yang memegang ranah advokasi kebijakan institusional."
      ],
      "requirements": [
        "Memiliki kepekaan sosial yang tinggi terhadap kondisi kesejahteraan sekitar.",
        "Telaten, solutif, dan cekatan dalam merespons kebutuhan riil mahasiswa.",
        "Amanah dan transparan dalam mengelola program-program bantuan atau pelayanan mahasiswa."
      ]
    }
  ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      },
      {
        "phase": "Interview",
        "startDate": "2026-09-08",
        "endDate": "2026-09-14",
        "status": "comingsoon"
      }
    ],
    "tags": ["Kepemimpinan", "Leadership", "Keorganisasian", "Eksekutif", "BEM", "Manajemen", "Advokasi", "Firhan", "Affan", "Irsyadi"]
  },
  {
    "id": "bpm-stdiis",
    "name": "Badan Perwakilan Mahasiswa (BPM)",
    "logo": "./logo/bpm.jpg",
    "category": "Keorganisasian",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "./guidebook/bpm new.pdf",
      "registrationUrl": "https://docs.google.com/forms/d/e/1FAIpQLSeYPyt_LYMpxJDnM9mDTAJ9SeMMBEswym1KlEatIp0sv-pUNw/viewform?usp=dialog",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Badan Perwakilan Mahasiswa, atau lebih dikenal sebagai BPM, adalah sebuah lembaga yang memiliki peran krusial dalam mewakili dan menyuarakan aspirasi mahasiswa di Kampus STDI Imam Syafi’i Jember. Tugas utama BPM adalah menjadi suara mahasiswa dalam menghadapi berbagai isu, kebijakan, atau permasalahan yang berkaitan dengan pendidikan, dan kesejahteraan mahasiswa.",
      "vision": [],
      "mission": [],
      "generalRequirements": [
        "Mahasiswa aktif S1",
        "Memiliki kompetensi dasar dalam pengetahuan tentang lembaga legislatif khusus nya di lingkungan kampus",
        "Memiliki semangat dan komitmen untuk selalu belajar dan aktif"
      ],
      "contactInfo": {
        "instagram": "@bpm_stdiis",
        "telegram": "el_shufr",
        "telegram2": "AzkiMaulaZake"
      },
      "divisions": [
        { "name": "Komisi I Legislasi dan Hukum", "quota": null, "requirements": [] },
        { "name": "Komisi II Pengawasan dan Anggaran", "quota": null, "requirements": [] },
        { "name": "Komisi III Aspirasi dan Advokasi", "quota": null, "requirements": [] },
        { "name": "Biro PSDM dan Kaderisasi", "quota": null, "requirements": [] },
        { "name": "Biro Media dan Informasi", "quota": null, "requirements": [] },
        { "name": "Biro administrasi dan keuangan", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      },
      {
        "phase": "Interview",
        "startDate": "2026-09-08",
        "endDate": "2026-09-14",
        "status": "comingsoon"
      }
    ],
    "tags": ["Kepemimpinan", "Leadership", "Legislatif", "Pengawasan", "Aspirasi", "BPM", "Keorganisasian"]
  },
  {
    "id": "hima-hki-stdiis",
    "name": "Hima HKI",
    "logo": "./logo/HIMA HKI.png",
    "category": "Keorganisasian",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "./guidebook/hki.pdf",
      "registrationUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfDqdFbiMutwm_gQQp8KqAnOpTR35o_rMLSZeWifwTyNqXaoA/viewform?usp=publish-editor",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Himpunan Mahasiswa Program Studi Hukum Keluarga Islam (HIMA HKI), salah satu organisasi kemahasiswaan tingkat program studi di STDI Imam Syafi'i Jember. \n\nHIMA HKI menjadi wadah pengembangan potensi mahasiswa, fasilitator antara mahasiswa dan Program Studi Hukum Keluarga Islam, serta mitra strategis program studi dalam mendukung pengembangan akademik dan kemahasiswaan.\n\nHIMA HKI dibangun dengan semangat bahwa HIMA tidak hanya menjadi penyelenggara kegiatan kemahasiswaan, tetapi juga menjadi pusat pengembangan akademik dan profesional mahasiswa HKI. Seluruh program yang dijalankan diarahkan untuk menciptakan lingkungan belajar yang aktif, kolaboratif, dan berorientasi pada peningkatan kualitas mahasiswa.\n\nHIMA HKI berfokus pada pengembangan kompetensi mahasiswa Hukum Keluarga Islam melalui penguatan keilmuan, peningkatan keterampilan, pembentukan karakter, dan pengembangan karier.\n\nHIMA HKI juga menjadi jembatan yang menghubungkan mahasiswa dengan program studi, dosen, alumni, dan berbagai mitra untuk mendukung perkembangan akademik maupun profesional.\n\nDengan semangat kolaborasi dan kebermanfaatan, HIMA HKI berkomitmen menciptakan lingkungan yang mendorong mahasiswa HKI menjadi pribadi yang unggul, berintegritas, serta siap memberikan kontribusi nyata bagi masyarakat.",
      "vision": [
        "Menjadikan HIMA HKI yang Berkarakter, Bertumbuh dalam Prestasi dan Akademik, dan Berbuah pada Inovasi demi Mahasiswa HKI yang Sejahtera, Mandiri, dan Berdaya Saing."
      ],
      "mission": [
        "Membangun budaya organisasi HIMA HKI yang berintegritas, bertanggung jawab, dan menjunjung tinggi nilai etika.",
        "Mewujudkan tata kelola organisasi yang transparan, akuntabel, profesional, sertamemanfaatkan teknologi digital dalam pengelolaannya.",
        "Menghadirkan program penunjang akademik yang mendukung peningkatan kompetensi mahasiswa HKI.",
        "Mendorong dan memfasilitasi mahasiswa HKI untuk berpartisipasi dalam kompetisi, penelitian, dan kegiatan ilmiah.",
        "Menyediakan akses informasi beasiswa, pelatihan, dan program pengembangan diri gunameningkatkan kualitas serta kemandirian mahasiswa.",
        "Memperkuat sinergi dengan Program Studi HKI, dosen, alumni, dan mitra strategis untuk mendukung kebutuhan akademik dan pengembangan karier mahasiswa.",
        "Mengembangkan program kerja yang inovatif, adaptif, dan relevan dengan kebutuhan mahasiswa serta perkembangan dunia profesional."
      ],
      "generalRequirements": [
        "Oprek terbuka bagi seluruh mahasiswa aktif Program Studi Hukum Keluarga Islam (HKI) STDI Imam Syafi'i Jember yang memiliki semangat berkontribusi dan sesuai dengan karakter yang dibutuhkan masing-masing departemen."
      ],
      "contactInfo": {
        "instagram": "@himahki_stdiis",
        "telegram": "@himahki_stdiis",
        "email": "himahkistdiis@gmail.com"
      },
      "divisions": [
        { "name": "Departemen Keilmuan", "quota": null, "requirements": [ ]},
        { "name": "Departemen PSDM (Pengembangan Sumber Daya Manusia)", "quota": null, "requirements": []},
        { "name": "Departemen Relasi Strategis", "quota": null, "requirements": [ ]},
        { "name": "Departemen Media", "quota": null, "requirements": []}
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["HIMAHKISTDIIS", "KabinetAlHIKAM", "AlHIKAM2026", "OprekHIMAHKI", "HKI_STDIIS", "Fikih", "Keorganisasian", "Prodi"]
  },
  {
    "id": "fokus-stdiis",
    "name": "Forum Kajian Ilmu Hadis (FOKUS)",
    "logo": "./logo/fokus.jpg",
    "category": "Keorganisasian",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/kw2XN3cDzLYnrZt26",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "FOKUS (Forum Kajian Ilmu Hadits) adalah himpunan mahasiswa Program Studi Ilmu Hadits STDI Imam Syafi’i",
      "vision": [
        "FOKUS STDIIS Jember menjadi wadah Mahasiswa untuk mengembangkan keilmuan Hadis."
      ],
      "mission": [
        "Mengadakan kegiatan kemahasiswaan dengan berlandaskan kedisiplinan dan ekonsistenan."
      ],
      "generalRequirements": [
        "Mahasiswa aktif STDIIS Prodi Ilmu Hadits"
      ],
      "contactInfo": {
        "instagram": "@fokus_stdiis",
        "telegram": "nuriksan21"
      },
      "divisions": [
        { "name": "Divisi PSDM", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["FOKUS", "Hadis", "Ilmu Hadis", "HIMA", "Kajian", "Keilmuan", "Prodi"]
  },
  {
    "id": "hes-stdiis",
    "name": "Hima HES",
    "logo": "./logo/Hima Hes.JPEG",
    "category": "Keorganisasian",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/fdfMMiG6WrWhPky8A",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "HIMAHES adalah organisasi kemahasiswaan yang menjadi wadah pengembangan diri bagi mahasiswa Prodi Hukum Ekonomi Syariah. Dengan berlandaskan nilai & Norma Islam dan semangat intelektual, HIMAHES hadir untuk menjalankan empat fungsi utama: edukatif, informatif, representatif, dan sosial.",
      "vision": [
        "Menjadi Himpunan Mahasiswa yang unggul dalam mencerdaskan kehidupan dengan nilai hukum ekonomi syariah serta membangun karakter yang kreatif, inovatif, & kompetitif."
      ],
      "mission": [
        "Membantu terwujudnya mahasiswa HES yang berilmu, kritis, berintegritas dan berdaya saing di bidangnya.",
        "Membangun HIMA yang solid, kompak dan kolaboratif agar menjadi organisasi yang aktif, kreatif dan bermanfaat bagi kampus serta masyarakat.",
        "Mewujudkan HIMA yang berkualitas, bertanggungjawab dan berintegritas melalui penelitian dan pengembangan sistematis serta inovasi yang berkelanjutan.",
        "Menjamin kemudahan akses informasi dan publikasi bagi mahasiswa HES secara akurat dan tepat.",
        "Membangun ekosistem media yang edukatif dan inspiratif sebagai sarana penyebaran informasi, gagasan dan kontribusi mahasiswa HES.",
        "Membangun komunikasi serta kolaborasi yang harmonis di lingkungan internal maupun eksternal."
      ],
      "generalRequirements": [
        "Mahasiswa aktif program studi Hukum Ekonomi Syariah (HES) STDIIS Jember.",
        "Berakhlak mulia, berakidah lurus, serta memiliki komitmen tinggi untuk berkontribusi aktif selama 1 periode kepengurusan.",
        "Bebas dari sanksi pelanggaran tata tertib akademik maupun tata tertib kampus STDIIS Jember."
      ],
      "contactInfo": {
        "telegram": "@Muhafthaaa"
      },
      "divisions": [
        { "name": "Bendahara II", "quota": null, "requirements": [] },
        { "name": "Sekretaris II", "quota": null, "requirements": [] },
        { "name": "Bidang Penalaran Intelektual", "quota": null, "requirements": [] },
        { "name": "Bidang Kominfo", "quota": null, "requirements": [] },
        { "name": "Bidang Media Kreatif", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["HIMA", "HES", "Ekonomi Syariah", "Muamalah", "Hukum", "Keorganisasian", "Prodi"]
  },
  {
    "id": "fusha-stdiis",
    "name": "Hima BSA (Fusha)",
    "logo": "./logo/fusha.jpg",
    "category": "Keorganisasian",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "./guidebook/fusha.pdf",
      "registrationUrl": "https://forms.gle/schd3AgeCkBMuc9L9",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "FUSHA (Forum Ulum Sastra dan Bahasa Arab) adalah organisasi yang bergerak di bidang bahasa terutama dalam fungsi pelaksanaan dan pengembangan bahasa di STDI, HIMA ini didirikan atas inisiatif untuk membentuk wadah yang membantu mahasiswa STDI imam Syafi'i mengembangkan kemampuan berbahasa arab mereka dalam bentuk literatur atau non literatur.",
      "vision": [
        " Mewujudkan Himpunan Mahasiswa Bahasa dan Sastra Arab sebagai organisasi mahasiswa yang unggul, berintegritas, dan berperan aktif dalam pengembangan keilmuan, kebahasaan, kesastraan, serta kepemimpian mahasiswa."
      ],
      "mission": [
        "Mengembangkan potensi mahasiswa dalam bidang Bahasa dan sastra Arab.",
        "Mendorong peningkatan kualitas akademik dan intelektual mahasiswa.",
        "Menumbuhkan budaya ilmiah, kreatif, dan inovatif di kalangan mahasiswa.",
        "Membina karakter kepemimpinan, tanggung jawab, dan profesionalisme mahasiswa.",
        "Mempererat hubungan kekeluargaan dan kerja sama antar mahasiswa serta pihak terkait."
      ],
      "generalRequirements": [
        "Mahasiswa aktif Prodi Bahasa dan Sastra Arab.",
        "Memiliki minat dalam pengembangan diri, keorganisasian, dan kontribusi dalam melayani dan memajukan prodi BSA.",
        "Telah membaca dan mencermati Guide book yg tersedia.",
        "Mengisi Formulir pendaftaran.",
        "Mengikuti semua rangkaian Oprec."
      ],
      "contactInfo": {
        "email": "hima.bsa@stdiis.ac.id"
      },
      "divisions": [
        { "name": "Ketua", "quota": 1, "requirements": [] },
        { "name": "Sekretaris", "quota": 1, "requirements": [
          "Mampu mengoperasikan Microsoft Word, Excel, dan Google Workspace.",
          "Memiliki kemampuan administrasi dan manajemen arsip yang baik.",
          "Teliti, disiplin, dan bertanggung jawab.",
          "Memiliki kemampuan komunikasi dan penulisan yang baik.",
          "Mampu bekerja sama dalam tim serta menjaga kerahasiaan dokumen organisasi."
        ]
        },
        { "name": "Bendahara", "quota": 1, "requirements": [
          "Teliti dan bertanggung jawab dalam mengelola kas, rekening organisasi, serta penagihan iuran anggota.",
          "Menguasai pencatatan keuangan menggunakan spreadsheet dan pengarsipan bukti digital di Google Drive.",
          "Mampu menyusun Rencana Anggaran Biaya (RAB) serta mengontrol penggunaan dana tiap divisi agar tetap sesuai anggaran.",
          "Cermat dalam melakukan audit internal untuk mencocokkan catatan keuangan, saldo, dan bukti nota secara berkala.",
          "Mampu menyusun laporan keuangan bulanan serta Laporan Pertanggungjawaban (LPJ) akhir untuk sidang pleno."
        ]
        },
        { "name": "Humas", "quota": 2, "requirements": [
          "Komunikatif: Memiliki kemampuan komunikasi yang baik serta ramah, santun, dan mudah beradaptasi.",
          "Aktif di Media Sosial: Familiar dengan berbagai platform media sosial (Instagram, TikTok, Dsb) dan tren digital saat ini.",
          "Manajemen Waktu: Mampu membagi waktu antara perkuliahan dan kegiatan organisasi.",
          "Inisiatif Tinggi: Cepat tanggap."
        ]
        },
        { "name": "Lughoh (keilmuan)", "quota": 2, "requirements": [
          "Tertarik pada bidang keilmuan bahasa arab dan sastra.",
          "Mampu mengawasi dan melaksanakan acara-acara yang ada terdapat dalam hima BSA.",
          "Berani melaksanakan dan menegakkan peraturan wajib berbahasa arab.",
          "Memiliki kemampuan dasar kaidah-kaidah bahasa arab.",
          "Memiliki kemampuan dasar berbicara, mendengar, menulis, dan membaca bahasa arab.",
          "Siap aktif dalam hima dan perkuliahan.",
          "Mampu bekerja di bawah tekanan."
        ]
        },
        { "name": "Medkom", "quota": 2, "requirements": [
          "Memiliki kemampuan berpikir kreatif dalam membuat konsep, desain, dan konten yang menarik serta relevan.",
          "Melek Digital: Familiar dengan media sosial, aplikasi desain, editing, serta mengikuti perkembangan tren digital dan teknologi.",
          "Manajemen Waktu: Mampu membagi waktu antara perkuliahan dan tugas organisasi serta menyelesaikan pekerjaan sesuai tenggat waktu.",
          "Inisiatif Tinggi: Proaktif dalam mencari ide, membuat konten, dan menyampaikan informasi tanpa harus selalu menunggu arahan."
        ]
        }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["HIMA", "BSA", "Fusha", "Bahasa Arab", "Sastra", "Linguistik", "Prodi"]
  },
  {
    "id": "rijal-dakwah",
    "name": "Rijal Dakwah",
    "logo": "./logo/rijaldakwah.jpg",
    "category": "Keagamaan",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "./guidebook/rdnew.pdf",
      "registrationUrl": "https://forms.gle/5vQAo8QxgjKfihLb9",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Rijal Dakwah adalah organisasi dakwah kemahasiswaan yang bergerak dalam aktivitas keislaman dan keteknologian.",
      "generalRequirements": [
        "Mahasiswa aktif STDI Imam Syafi’i Jember",
        "Siap mengikuti pembinaan Akademi Da’i’ dan Rijalul Khidmah"
      ],
      "contactInfo": {
        "instagram": "@rijaldakwah_stdiis",
        "whatsapp": "6285706449305"
      },
      "divisions": [
        { "name": "Divisi Acara", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Oprec Keanggotaan",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Dakwah", "Keagamaan", "Islam", "Dai", "Sosial", "Pengabdian"]
  },
  {
    "id": "fortik-stdiis",
    "name": "Forum Teknologi Informasi dan Komunikasi (FORTIK)",
    "logo": "./logo/fortik.jpg",
    "category": "Teknologi",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-07",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": 150,
        "display": "150"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/2e5cBs5ttKBfY8UP8",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "FORTIK adalah UKM yang terfokus pada teknologi informasi.",
      "generalRequirements": [
        "Mahasiswa aktif S1 STDIIS Jember"
      ],
      "contactInfo": {
        "instagram": "@fortik_stdiis",
        "whatsapp": "6281212820632"
      },
      "divisions": [
        { "name": "Divisi Content Creator", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Teknologi", "IT", "Multimedia", "Content Creator", "Desain", "Komunikasi", "Digital"]
  },
  {
    "id": "fpkh-stdiis",
    "name": "Forum Pengembangan Kompetensi Hukum (FPKH)",
    "logo": "./logo/fpkh.jpg",
    "category": "Hukum",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Batas"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/oQekqxpkuuqQ6GL6A",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "FPKH adalah sebuah UKM yang bertujuan untuk mewadahi teman-teman mahasiswa STDIIS yang memiliki minat di bidang hukum.",
      "vision": [
        "Membentuk generasi hukum yang kompetitif di dunia profesional."
      ],
      "mission": [
        "Meningkatkan kompetensi hukum mahasiswa melalui pelatihan."
      ],
      "generalRequirements": [
        "Seluruh mahasiswa aktif STDIIS Jember"
      ],
      "contactInfo": {
        "instagram": "@fpkh.stdiis",
        "whatsapp": "081327992123"
      },
      "divisions": [
        { "name": "Departemen Tata Usaha", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Hukum", "FPKH", "Peradilan", "Advokasi", "Legal", "Syariah", "Kompetensi"]
  },
  {
    "id": "hw-stdiis",
    "name": "Huffazhul Wahyain STDIIS",
    "logo": "./logo/hw.jpg",
    "category": "Keagamaan",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Batas."
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/QGTwJ7od1BYyCmma8",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Huffazhul Wahyain merupakan wadah aktivitas kemahasiswaan luar kelas yang menampung mahasiswa-mahasiswa yang memiliki talenta di bidang hafalan Al-Qur’an dan Hadits.",
      "mission": [],
      "generalRequirements": [
        "Mahasiswa aktif STDIIS semester 1-7"
      ],
      "contactInfo": {
        "telegram": "Rizkyash"
      },
      "divisions": [
        { "name": "Divisi Kaderisasi", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-02",
        "endDate": "2026-09-08",
        "status": "ongoing"
      }
    ],
    "tags": ["Tahfidz", "Al-Quran", "Hadis", "Hafalan", "Keagamaan", "Kajian", "Keilmuan"]
  },
  {
    "id": "dkm-stdiis",
    "name": "Dewan Kemakmuran Masjid (DKM) Ar-Rahmah",
    "logo": "./logo/dkm.jpg",
    "category": "Keagamaan",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota."
      },
      "guidebookUrl": "./guidebook/dkm.pdf",
      "registrationUrl": "https://forms.gle/X2q4HNHAbA3wjr7N9",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "DKM Ar-Rahmah merupakan organisasi yang menggabungkan pembinaan anggota, dakwah dan keilmuan, pelayanan jamaah, pengelolaan kegiatan, pemeliharaan fasilitas, penguatan ukhuwah, dan gerakan imaroh masjid.",
      "generalRequirements": [
        "Mahasiswa aktif STDIIS (Program S1 dan I’dad Lughowy)",
        "Berakhlak baik, disiplin, jujur, amanah, dan bertanggung jawab.",
        "Berkomitmen untuk meluangkan waktu, tenaga dan pikiran untuk masjid Ar-Rahmah hingga akhir masa khidmat.",
        "Siap untuk bekerjasama.",
        "Bersedia menerima arahan, evaluasi, serta terus mengembangkan kemampuan diri.",
        "Memiliki semangat melayani jamaah dan berkontribusi aktif dalam kegiatan kemasjidan.",
        "Menjaga nama baik Masjid Ar-Rahmah, DKM, dan STDI Imam Syafi'i Jember.",
        "Mengisi formulir pendaftaran.",
        "Mengikuti tes interview.",
        "Follow akun instagram @masjid_arrahmah_stdiis."
      ],
      "contactInfo": {
        "telegram": "DKMARRAHMAH"
      },
      "divisions": [
        { "name": "Sekretaris", "quota": null, "requirements": [
          "Teliti, rapi, dan sistematis dalam administrasi.",
          "Mampu menggunakan aplikasi pengolah dokumen (seperti, word, excel, gdocs, spreadsheet, gform, dll).",
          "Memiliki kemampuan menyusun surat, notulen, dan arsip organisasi.",
          "Mampu mengelola administrasi secara tertib."
        ]
        },
        { "name": "Bendahara", "quota": null, "requirements": [
          "Amanah dan jujur dalam mengelola keuangan.",
          "Teliti dan bersegera dalam pencatatan transaksi.",
          "Mampu menyusun laporan keuangan sederhana.",
          "Memahami dasar pengelolaan anggaran kegiatan."
        ]
        },
        { "name": "MADRASA (Manajemen dan Urusan Acara)", "quota": null, "requirements": [
          "Memiliki kemampuan menyusun konsep dan alur kegiatan.",
          "Mampu mengatur timeline dan pembagian tugas panitia.",
          "Memiliki kemampuan koordinasi grup & lapangan.",
          "Mampu menyelesaikan kendala teknis kegiatan.",
          "Memiliki kemampuan dasar kepemimpinan dan manajemen acara.",
          "Mampu melakukan monitoring, evaluasi, dan pelaporan kegiatan."
        ] 
        },
        { "name": "WASILAH (Wadah Sponsor, Informasi, & Dana Usaha)", "quota": null, "requirements": [
          "Memiliki kemampuan komunikasi dan negosiasi.",
          "Mampu membuat proposal kerja sama. (opsi, nilai tambahan).",
          "Mampu menjalin relasi dengan pihak internal STDI maupun eksternal STDI.",
          "Memiliki kemampuan public relation.",
          "Memiliki kemampuan dasar fundraising. (opsi, nilai tambahan).",
          "Memiliki kemampuan koordinasi dengan pemateri atau asatidzah."
        ] 
        },
        { "name": "DAI (Dakwah, Akademik, dan Ilmu)", "quota": null, "requirements": [
          "Memiliki dasar ilmu syar'i yang baik.",
          "Mampu menyusun konsep dan bahan materi dakwah dan keilmuan (poster dakwah, video dakwah, dll).",
          "Memiliki kemampuan literasi dan penyusunan materi sederhana.",
          "Memiliki minat dalam pengembangan program pembinaan."
        ]
        },
        { "name": "PDD (Publikasi, Dokumentasi, dan Desain)", "quota": null, "requirements": [
          "Menguasai aplikasi desain grafis dasar (Canva/CorelDRAW/Photoshop atau sejenisnya). (opsi).",
          "Memiliki kemampuan fotografi atau videografi. (opsi).",
          "Memahami dasar branding media sosial.",
          "Memiliki kemampuan editing foto maupun video. (opsi).",
          "Mampu menghandle akun media sosial (opsi)."
        ] },
        { "name": "Inventaris", "quota": null, "requirements": [
          "Mampu melakukan pendataan inventaris. (opsi).",
          "Memiliki kemampuan administrasi sederhana. (opsi).",
          "Mampu menjaga, merawat, dan menata barang inventaris.",
          "Siap membantu kebutuhan perlengkapan setiap kegiatan.",
          "Siap diminta untuk bekerja fisik.",
          "Memiliki semangat melayani jamaah."
        ] 
        },
        { "name": "Kebersihan", "quota": null, "requirements": [
          "Memahami standar kebersihan dan kesucian area ibadah.",
          "Mampu bekerjasama sesuai jadwal yang telah ditentukan.",
          "Siap bekerja sebelum dan sesudah kegiatan.",
          "Memiliki semangat melayani jamaah."
        ]
        },
        { "name": "Imam", "quota": null, "requirements": [
          "Memiliki bacaan Al-Qur'an yang baik sesuai tajwid.",
          "Memahami tata cara shalat sesuai sunnah.",
          "Memiliki hafalan Al-Qur'an yang memadai.",
          "Mampu memimpin shalat dengan tenang dan tertib.",
          "Memiliki suara yang jelas dan dapat didengar makmum."
        ]
        },
        { "name": "Muadzin", "quota": null, "requirements": [
          "Memiliki suara yang baik dan jelas.",
          "Mampu mengumandangkan azan dan iqamah dengan benar.",
          "Memahami adab serta tata cara azan sesuai sunnah.",
          "Mampu mengoperasikan mikrofon dan pengeras suara.",
          "Hadir sebelum waktu shalat untuk memastikan kesiapan pelaksanaan azan."
        ]
        },
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["DKM", "Masjid", "Kemasjidan", "Keagamaan", "Dakwah", "Pelayanan", "Kajian"]
  },
  {
    "id": "rijal-maktabah",
    "name": "Rijal Maktabah",
    "logo": "./logo/maktabah.jpg",
    "category": "Keagamaan",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Sampai Terpenuhi"
      },
      "guidebookUrl": "./guidebook/rijal maktabah.pdf",
      "registrationUrl": "https://forms.gle/FFz6fsVaakVq8Kv49",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Rijal Maktabah adalah sebuah organisasi yang bergerak dalam bidang pengelolaan, pelayanan, dan pengembangan perpustakaan di lingkungan lembaga pendidikan. Organisasi ini berperan sebagai penggerak utama dalam menumbuhkan budaya literasi, meningkatkan minat baca, serta menyediakan akses yang mudah terhadap berbagai sumber ilmu pengetahuan.",
      "vision": [
        "Menjadi unit penggerak utama dalam pelayanan, manajemen koleksi, dan pengembangan budaya literasi ilmiah guna mendukung terwujudnya civitas akademik yang berjiwa Al-Qur'an dan As-Sunnah."
        ],
      "mission": [
        "Mengoptimalkan dukungan operasional UPT Perpustakaan melalui sistematisasi penginputan data buku, pengelolaan sirkulasi peminjaman koleksi, serta pendataan pengunjung yang akurat.",
        "Meningkatkan kompetensi kepustakawanan, softskill, dan hardskill dasar anggota UKM secara berkelanjutan.",
        "Memfasilitasi edukasi literasi akademik bagi mahasiswa.",
        "Mendorong keaktifan mahasiswa dalam membaca dan memahami literatur."
      ],
      "generalRequirements": [
        "Mahasiswa aktif STDI Imam Syafi’i Jember, program S1 maupun I’dad Lughowi, dan diutamakan belum berkeluarga.",
        "Memiliki minat dan kepedulian terhadap dunia literasi.",
        "Memiliki sikap amanah, disiplin, teliti, rapi, bertanggung jawab, serta mampu bekerja sama dalam tim.",
        "Memiliki kemampuan dasar dalam berorganisasi, berkomunikasi, dan mengatur waktu.",
        "Bersedia mengikuti pembekalan dan pelatihan dasar kepustakawanan.",
        "Diutamakan memiliki keterampilan dalam hal esain dan komputer dasar.",
        "Follow akun Instagram  @perpustakaanstdiis.",
        "mengumpulkan Curriculum Vitae (CV) dan bersedia mengikuti proses seleksi."
      ],
      "contactInfo": {
        "whatsapp": "0895366790401",
        "telegram": "@Ismailyzda",
        "instagram": "@perpustakaanstdiis"
      },
      "divisions": [
        { "name": "Sekretaris", "quota": 1, "requirements": [] },
        { "name": "Bendahara", "quota": 1, "requirements": [] },
        { "name": "Humas", "quota": 1, "requirements": [] },
        { "name": "PDD (Publikasi, Dokumentasi dan Design)", "quota": 4, "requirements": [] },
        { "name": "PENBANG (Pengelolaan dan Pengembangan)", "quota": 3, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Perpustakaan", "Literasi", "Buku", "Maktabah", "Keilmuan", "Kajian", "Pelayanan"]
  },
  {
    "id": "mapala-stdiis",
    "name": "Mapala Asad El Jabal",
    "logo": "./logo/mapala.jpg",
    "category": "Olahraga",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Terbatas"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://docs.google.com/forms/d/e/1FAIpQLSdJzxQugI8FJEV-q4W0B5Lf59Nx3qvNQSVKKroc1Z7UbXIPEw/viewform?usp=publish-editor",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Mapala asad El Jabal merupakan sebuah organisasi pecinta alam STDIIS, yang bergerak di bidang sosial lingkungan, kelestarian alam, dan kepedulian terhadap alam raya dan ciptaan-Nya. Mapala Asad El Jabal berdiri pada tanggal 24 juli 2012, yang diresmikan di puncak gunung rinjani. Tujuan dibentuknya mapala Asad El Jabal yaitu untuk mewadahi para pegiat ataupun pecinta alam dari mahasiswa STDI Imam Syafi`i Jember untuk meningkatkan dan mengembangkan soft skill dan hard skill dalam berkegiatan di alam bebas sesuai dengan ajaran agama islam.",
      "vision": [
        "Sebagai sarana yang terbaik bagi mahasiswa untuk hidup mandiri, mengembangkan ilmu pengetahuan dan mencintai alam semesta."
        ],
      "mission": [
        "Menumbuhkan kepada setiap anggota Mapala Asad el-Jabal.",
        "untuk senantiasa mencintai kelestarian alam ini.",
        "Senatiasa mengedepankan rasa kekeluargaan dan bertanggung jawab atas setiap apa-apa yang telah dikerjakan.",
        "Memberikan kesempatan kepada seluruh anggota untuk memberikan yang terbaik kepada masyarakat, organisasi, negara dan agama."
      ],
      "generalRequirements": [
        "Mahasiswa aktif (maksimal semester 3).",
        "Didahulukan mahasiswa yg belum memiliki kesibukan (organisasi) didalam maupun diluar kampus.",
        "Mahasiswa yg berkompeten, ulet, dan memiliki rasa tanggung jawab yg besar terhadap organisasi.",
        "Mendapat izin dari orang tua.",
        "Siap fisik dan mental."
      ],
      "contactInfo": {
        "whatsapp": "0895605043212",
        "whatsapp2": "0895320510950",
        "Instagram": "@asad_eljabal"
      },
      "divisions": [
        { "name": "Gunung hutan", "quota": null, "requirements": [] },
        { "name": "Konservasi", "quota": null, "requirements": [] },
        { "name": "Olahraga arus deras", "quota": null, "requirements": [] },
        { "name": "Rock climbing", "quota": null, "requirements": [] },
        { "name": "PDD", "quota": null, "requirements": [] },
        { "name": "Bendahara", "quota": null, "requirements": [] },
        { "name": "Humas", "quota": null, "requirements": [] },
        { "name": "Perkab", "quota": null, "requirements": [] },
        { "name": "Danus", "quota": null, "requirements": [] },
        { "name": "Sekretaris", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Mapala", "Pecinta Alam", "Petualangan", "Outdoor", "Gunung", "Lingkungan", "Olahraga"]
  },
  {
    "id": "sbc-stdiis",
    "name": "STDIIS Basketball Club (SBC)",
    "logo": "./logo/sbc.jpg",
    "category": "Olahraga",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/mLd3FMcZbnmpyoVRA",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "STDIIS Basketball Club (SBC) adalah Unit Kegiatan Mahasiswa yang menjadi wadah bagi mahasiswa yang memiliki minat dan bakat dalam olahraga basket.",
      "mission": [],
      "generalRequirements": [
        "Mahasiswa aktif STDIIS (S1 & Idad Lughowi)"
      ],
      "contactInfo": {
        "whatsapp": "087861399320"
      },
      "divisions": [
        { "name": "Divisi Korlap", "quota": 1, "requirements": [] },
        { "name": "Divisi Media", "quota": 1, "requirements": [] },
        { "name": "Divisi Humas", "quota": 1, "requirements": [] },
        { "name": "Divisi Sarpras", "quota": 1, "requirements": [] },
        { "name": "Divisi Anggota/Squad", "quota": 30, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Olahraga", "Basket", "Basketball", "Bola", "SBC", "Tim"]
  },
  {
    "id": "isfc-stdiis",
    "name": "Imam Syafii Futsal Club",
    "logo": "./logo/isfc.jpg",
    "category": "Olahraga",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://docs.google.com/forms/d/e/1FAIpQLSen8gXCxMGkoMW1kVpSpvelMIYrgKiJjJuosMV5bUPTaYaXzg/viewform?usp=header",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "ISFC STDIIS Jember merupakan wadah aktivitas kemahasiswaan luar kelas di bidang olahraga futsal.",
      "mission": [],
      "generalRequirements": [
        "Mahasiswa aktif STDI Imam Syafii Jember"
      ],
      "contactInfo": {
        "whatsapp": "6282266532721"
      },
      "divisions": [
        { "name": "Sekretaris", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Olahraga", "Futsal", "Bola", "ISFC", "Sepakbola", "Tim"]
  },
  {
    "id": "tapaksuci-stdiis",
    "name": "Tapak Suci STDIIS",
    "logo": "./logo/tapaksuci.jpg",
    "category": "Bela Diri",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/SYGna41enGyY2sWB7",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Unit Kegiatan Mahasiswa (UKM) Tapak Suci STDIIS Merupakan salah satu bidang yang mewadahi minat dan bakat mahasiswa di bidang pencak silat.",
      "vision": [
        "Mencetak Atlet Berprestasi, Bermental Mujahid, Beradab dan Ber-Sunnah"
        ],
      "mission": [
        "Tanamkan adab Islami dan keimanan sesuai Al-Qur'an & Sunnah dalam setiap latihan.",
        "Bina fisik, teknik & mental untuk raih prestasi di POMDA, POMNAS, dan kejuaraan lainnya.",
        "Bentuk pesilat bermental ksatria, disiplin waktu, ibadah, dan akademik.",
        "Eratkan ukhuwah dan syiarkan bela diri Islam yang santun dan bermartabat."
      ],
      "generalRequirements": [
        "Mahasiswa aktif STDI Imam Syafii Jember"
      ],
      "contactInfo": {
        "whatsapp": "089527535709"
      },
      "divisions": [
        { "name": "Sekretaris", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Seleksi Berkas",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Bela Diri", "Pencak Silat", "Silat", "Tapak Suci", "Seni Bela Diri", "Fisik"]
  },
  {
    "id": "thifan-stdiis",
    "name": "Thifan Po Khan STDIIS",
    "logo": "./logo/thifan.jpg",
    "category": "Bela Diri",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Terbatas"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfkGQJQlezT1G-khiYktLP5-hicc1allPRuSCuONEgsteS8WQ/viewform?usp=sharing&ouid=105148390275742524072",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Thifan Po Khan adalah bela diri Islam warisan Turki Utsmani.",
      "mission": [],
      "generalRequirements": [
        "Muslim berakhlak dan Amanah"
      ],
      "contactInfo": {
        "whatsapp": "6289654721839"
      },
      "divisions": []
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Bela Diri", "Thifan", "Thifan Po Khan", "Beladiri Islam", "Kungfu", "Fisik"]
  },
  {
    "id": "vbcs-stdiis",
    "name": "Volley Ball Club STDIIS",
    "logo": "./logo/vbcs.jpg",
    "category": "Olahraga",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "limited",
        "number": 70,
        "display": "70 Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/UM56dBHmdc5BbxyF8",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Volleyball Club STDIIS (VBCS) adalah Unit Kegiatan Mahasiswa di STDI Imam Syafi’i Jember di bidang olahraga voli.",
      "mission": [],
      "generalRequirements": [
        "Mahasiswa aktif STDIIS"
      ],
      "contactInfo": {
        "telegram": "@Raihanwira"
      },
      "divisions": [
        { "name": "Humas", "quota": 1, "requirements": [] },
        { "name": "Sarpras", "quota": 1, "requirements": [] },
        { "name": "Pelatihan", "quota": 2, "requirements": [] },
        { "name": "PDD", "quota": 2, "requirements": [] },
        { "name": "Anggota", "quota": 19, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Olahraga", "Voli", "Volleyball", "VBCS", "Bola", "Tim"]
  },
  {
    "id": "badminton-stdiis",
    "name": "Badminton STDIIS",
    "logo": "./logo/badminton.jpg",
    "category": "Olahraga",
    "featured": false,
    "recruitment": {
      "isOpen": false,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": true,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://docs.google.com/forms/d/e/1FAIpQLScqwhRncfBR4Uyl7gmdYxPM5pKL_IV_MNiS_52zXWdo4-gbFA/viewform?usp=sharing&ouid=100201915421048946076",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Unit Kegiatan Mahasiswa (UKM) Badminton STDIIS merupakan salah satu wadah yang diinisiasi untuk mengakomodasi minat dan bakat mahasiswa dalam olahraga badminton.",
      "mission": [],
      "generalRequirements": [
        "Mahasiswa aktif STDIIS"
      ],
      "contactInfo": {
        "whatsapp": "6281315483753"
      },
      "divisions": [
        { "name": "Acara", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Olahraga", "Bulu Tangkis", "Badminton", "Raket"]
  },
  {
    "id": "runners-stdiis",
    "name": "Ukhuwah Runners",
    "logo": "./logo/ukhuwah.jpg",
    "category": "Olahraga",
    "featured": false,
    "recruitment": {
      "isOpen": false,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": true,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://docs.google.com/forms/d/1EGqbYgeXx6hMYfrKXRmwI3B49xzEAgfmej5Tq3oTvg8/edit?usp=drivesdk",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "Ukhuwah Runners adalah komunitas mahasiswa yang fokus pada olahraga lari sebagai sarana pengembangan fisik, mental, dan spiritual.",
      "mission": [],
      "generalRequirements": [
        "Mahasiswa aktif STDIIS (S1 & I'dad Lughowi)"
      ],
      "contactInfo": {
        "whatsapp": "6281342275927"
      },
      "divisions": [
        { "name": "Sekretaris", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Olahraga", "Lari", "Running", "Jogging", "Maraton", "Kebugaran", "Ukhuwah"]
  },
  {
    "id": "football-stdiis",
    "name": "STDI Football Club",
    "logo": "./logo/football.jpg",
    "category": "Olahraga",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://docs.google.com/forms/d/e/1FAIpQLSfz3SZMgDA-AUywxP5BOTVncu6imZkzGMBe5rre53Hq4-yGIQ/viewform?usp=publish-editor",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "UKM STDIIS FC adalah Unit Kegiatan Mahasiswa yang bergerak di bidang olahraga, khususnya sepak bola. Organisasi ini dibentuk sebagai wadah strategis bagi seluruh mahasiswa STDIIS Jember untuk mengembangkan minat, bakat, dan potensi mereka dalam sepak bola melalui pelatihan serta pembinaan yang terstruktur. Lebih dari sekadar klub olahraga, STDIIS FC berkomitmen untuk membentuk karakter mahasiswa yang tangguh dengan meningkatkan kemampuan fisik, mental, fokus, dan kedisiplinan yang berlandaskan nilai-nilai sunnah. Melalui kegiatan olahraga yang interaktif dan kolaboratif, UKM ini juga berfungsi sebagai sarana memperkuat ukhuwah Islamiyah, menghidupkan kembali tradisi olahraga, serta mencetak atlet-atlet mahasiswa berprestasi yang siap mewakili kampus dalam berbagai kompetisi di tingkat lokal, regional, maupun nasional.",
      "vision": [
        "Menjadi wadah pembinaan sepak bola mahasiswa yang unggul, berprestasi, berakhlak islami, dan mampu mengharumkan nama baik STDIIS."
      ],
      "mission": [
        "Menyelenggarakan pembinaan sepak bola secara sistematis.",
        "Menumbuhkan budaya hidup sehat dan disiplin.",
        "Membentuk atlet yang berkarakter islami.",
        "Mengikuti kompetisi yang positif dan bermanfaat.",
        "Menjalin kerja sama dengan klub, kampus, dan lembaga olahraga lainnya"

      ],
      "generalRequirements": [
        "mempunyai skil dasar dalam sepak bola bagi calon pemain.",
        "ahli dalam editing poster dan editing vidio dan juga foto bagi calon Kominfo dan desain.",
        "ahli dalam bidang yang di pilih oleh calon pendaftar."
      ],
      "contactInfo": {
        "instagram": "@stdi_footballclub"
      },
      "divisions": [
        { "name": "Sekretaris", "quota": null, "requirements": [] },
        { "name": "Bendahara", "quota": null, "requirements": [] },
        { "name": "Acara", "quota": null, "requirements": [] },
        { "name": "Humas", "quota": null, "requirements": [] },
        { "name": "Kominfo Design", "quota": null, "requirements": [] },
        { "name": "Bimbingan Prestasi", "quota": null, "requirements": [] },
        { "name": "Sarpras", "quota": null, "requirements": [] },
        { "name": "Pemain", "quota": null, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Olahraga", "Sepakbola", "Football", "FC", "Bola", "Tim"]
  },
  {
    "id": "pc-stdiis",
    "name": "STDIIS Programming Club",
    "logo": "./logo/programming.jpg",
    "category": "Teknologi",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/zMzcmfue7u94Lnsc6",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "STDIIS Programming Club (PC) adalah UKM Kampus STDI Imam Syafi'i Jember yang bergerak di bidang pemrograman dan pengembangan perangkat lunak. Awalnya merupakan divisi SIIP di bawah UKM Fortik, PC dikukuhkan menjadi UKM tersendiri pada 20 Juni 2026 agar dapat fokus menjadi wadah tumbuhnya kompetensi pemrograman mahasiswa, sekaligus mitra kampus dalam memenuhi kebutuhan digitalnya melalui pengembangan solusi seperti website, sistem informasi, dan otomasi administratif.",
      "vision": [
        "Menjadi wadah tumbuhnya kompetensi pemrograman mahasiswa STDI Imam Syafi'i Jember, sekaligus mitra kampus dalam memenuhi kebutuhan digitalnya."
      ],
      "mission": [
        "Menyelenggarakan pembelajaran pemrograman yang terstruktur dan berkelanjutan melalui kelas rutin, mentoring, dan proyek bersama, dari dasar hingga anggota mampu membangun aplikasi nyata.",
        "Mengembangkan solusi digital untuk kebutuhan kampus (website, sistem informasi, dan otomasi pekerjaan administratif) sebagai bentuk khidmah kepada kampus.",
        "Menjadikan setiap proyek kampus sebagai sarana praktik langsung bagi anggota, sehingga belajar dan berkontribusi berjalan beriringan."
      ],
      "generalRequirements": [
        "Mahasiswa aktif STDIIS (S1/l'dad)."
      ],
      "contactInfo": {
        "instagram": "@pc.stdiis",
        "telegram": "@stdiis_pc_bot"
      },
      "divisions": [
        { "name": "member", "quota": 30, "requirements": [] }
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Teknologi", "Programming", "Coding", "Software", "Web", "Developer", "IT", "Komputer"]
  },
  {
    "id": "saad-stdiis",
    "name": "Sa'ad Al-Furusiyyah STDIIS Jember",
    "logo": "./logo/saad.jpg",
    "category": "Olahraga",
    "featured": false,
    "recruitment": {
      "isOpen": true,
      "deadline": "2026-09-06",
      "isDataAvailable": true,
      "isComingSoon": false,
      "isDisabled": false,
      "quota": {
        "type": "unlimited",
        "number": null,
        "display": "Tanpa Kuota"
      },
      "guidebookUrl": "",
      "registrationUrl": "https://forms.gle/cFmbmbtKY4wxquTq6",
      "registrationFee": 0
    },
    "applicants": 0,
    "info": {
      "currentMembers": 0,
      "established": null,
      "description": "UKM Sa'ad Al-Furusiyyah STDIIS Jember merupakan wadah pengembangan minat, bakat, dan potensi mahasiswa dalam bidang panahan, berkuda, dan kesatriaan yang berlandaskan nilai-nilai Islam. UKM ini hadir sebagai sarana bagi mahasiswa untuk mengembangkan keterampilan dan prestasi olahraga sekaligus membentuk pribadi yang kuat, sehat, disiplin, sportif, dan berakhlak mulia. Melalui kegiatan latihan, pembinaan, kajian, serta berbagai kompetisi dan kegiatan kebersamaan, UKM Sa'ad Al-Furusiyyah berupaya menghidupkan kembali sunnah Nabi ﷺ yang berkaitan dengan olahraga dan keterampilan tersebut, serta membangun semangat ukhuwah dan kebersamaan di lingkungan STDIIS Jember. \n\nSebagai bagian dari lingkungan pendidikan Islam, UKM Sa'ad Al-Furusiyyah tidak hanya berorientasi pada pencapaian prestasi olahraga, tetapi juga pada pembentukan karakter mahasiswa secara jasmani dan rohani. Dengan semangat menghidupkan sunnah, membangun kekuatan, dan meraih prestasi, UKM ini diharapkan menjadi wadah yang mampu melahirkan mahasiswa yang terampil, berkarakter, berprestasi, serta mampu memberikan manfaat bagi lingkungan kampus dan masyarakat",
      "vision": [
        "Terwujudnya UKM Panahan (baik tradisional dan modern), Berkuda dan kesatriaan STDIIS sebagai wadah mahasiswa dalam pengembangan diri di bidang panahan, berkuda dan kesatriaan. Menjadi UKM yang unggul dan berakhlak, mempromosikan semangat olahraga yang sehat dan profesional sesuai dengan nilai-nilai syariat Islam, serta membentuk karakter mahasiswa yang taat beragama dan berprestasi."
      ],
      "mission": [
        "Meningkatkan keterampilan dan prestasi panahan dan berkuda melalui pelatihan dan kompetisi.",
        "Mengembangkan komunitas panahan dan berkuda yang solid, sportif dan berprestasi.",
        "Mewujudkan UKM Panahan dan Berkuda sebagai wadah mahasiswa untuk mengembangkan bakat dan minat dalam panahan dan berkuda.",
        "Misi yang kuat dan sehat baik secara jasmani maupun rohani, dan meraih prestasi di bidang olahraga panahan dan berkuda."
      ],
      "generalRequirements": [
        "Mahasiswa aktif STDIIS (S1/l'dad)."
      ],
      "contactInfo": {
        "instagram": "@saad_alfurusiyyah"
      },
      "divisions": [
        { "name": "Sekretaris", "quota": null, "requirements": [
          "memiliki kemampuan mengoperasikan Microsoft Word dan Exel.",
          "dapat menyusun surat menyurat."
        ]
        },
        { "name": "Bendahara", "quota": null, "requirements": [
          "Teliti dan bertanggung jawab dalam mengelola keuangan.",
          "Mampu membuat pencatatan dan laporan keuangan dengan rapi.",
          "Mampu mengoperasikan Microsoft Excel atau aplikasi pengelolaan keuangan sederhana.",
          "Amanah dan transparan dalam mengelola pemasukan dan pengeluaran."
        ] 
        },
        { "name": "Media", "quota": null, "requirements": [
          "Memiliki device yang memadai.",
          "memiliki kemampuan mengedit di canva.",
          "menguasai skill capcut dasar.",
          "mempunyai ide konten yang menarik."
        ] 
        },
        { "name": "Acara", "quota": null, "requirements": [
          "Memiliki kemampuan menyusun konsep dan alur kegiatan.",
          "Mampu mengatur timeline dan pembagian tugas panitia. (opsi)",
          "Memiliki kemampuan koordinasi grup & lapangan.",
          "Mampu menyelesaikan kendala teknis kegiatan.",
          "Memiliki kemampuan dasar kepemimpinan dan manajemen acara.",
          "Mampu melakukan monitoring, evaluasi, dan pelaporan kegiatan."
        ]
        },
        { "name": "Humas", "quota": null, "requirements": [
          "Memiliki skill komunikasi yang baik.",
          "Responsif.",
          "Mampu mengelola informasi dan menyampaikannya dengan baik."
        ]
        },
        { "name": "Danus", "quota": null, "requirements": [
          "Mampu menciptakan ide usaha serta melihat dan memanfaatkan peluang usaha.",
          "Mampu berkomunikasi dan melakukan negosiasi serta mampu mencari sponsorship.",
          "Mampu mengelola dan mencatat keuangan."
        ] 
        },
        { "name": "Peralatan", "quota": null, "requirements": [
          "Disiplin Waktu: siap datang tepat waktu untuk mempersiapkan barang dan merapikan serta mengembalikan barang.",
          "Teliti & dapat memanajemen keluar dan masuknya barang.",
          "Fisik & stamina yang memumpuni."
        ]
        },
        { "name": "Binpres", "quota": null, "requirements": [
          "Paham tehnik dasar memanah dan berkuda.",
          "disiplin.", 
          "mampu membina binaan ukm."
        ] 
        },
      ]
    },
    "timeline": [
      {
        "phase": "Pendaftaran",
        "startDate": "2026-09-01",
        "endDate": "2026-09-06",
        "status": "ongoing"
      }
    ],
    "tags": ["Olahraga", "Kuda", "Berkuda", "saad", "furusyiah"]
  }
];
