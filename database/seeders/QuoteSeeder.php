<?php

namespace Database\Seeders;

use App\Models\Quote;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuoteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $qoutes = [
            "Kesuksesan dimulai dengan keberanian untuk mencoba.",
            "Kesempatan tidak datang dua kali, tetapi jika kamu siap, kamu bisa menciptakannya sendiri. - Roy T. Bennett",
            "Keberanian bukanlah ketiadaan rasa takut, tetapi kemampuan untuk melampaui rasa takut. - Nelson Mandela",
            "Setiap kali kamu berpikir kamu tidak mampu, ingatlah mengapa kamu memulai.",
            "Kesabaran adalah kuncinya. Dalam semua hal, kesabaran adalah kunci sukses.",
            "Kebahagiaan sejati berasal dari dalam, bukan dari pencapaian luar.",
            "Jangan biarkan kegagalan hari ini menghalangi kesuksesan besok.",
            "Jangan takut gagal. Takutlah tidak mencoba.",
            "Hidupmu adalah buku; tulislah kisah yang luar biasa.",
            "Kesuksesan tidak datang dengan mudah, tetapi itu layak untuk diperjuangkan.",
            "Jangan menunda-nunda kebahagiaanmu. Mulailah hidup hari ini.",
            "Ketika kamu berhenti belajar, kamu berhenti tumbuh.",
            "Jadilah yang terbaik versi dirimu, bukan tiruan orang lain.",
            "Jika kamu tidak pernah mencoba, kamu tidak akan pernah tahu apa yang bisa kamu capai.",
            "Berpikir positif akan mengubah hidupmu.",
            "Hidup adalah petualangan yang berani. Jangan takut mengambil risiko.",
            "Kesuksesan bukan tentang siapa yang berada di atas, tetapi tentang siapa yang bangkit setelah jatuh.",
            "Kamu adalah satu-satunya yang bisa mengubah hidupmu. Mulailah sekarang.",
            "Jadilah pribadi yang hebat, bukan hanya karena apa yang kamu miliki, tetapi karena siapa kamu sebenarnya.",
            "Kesuksesan adalah proses, bukan tujuan akhir.",
            "Hidupmu adalah cerita yang berharga. Buatlah itu tak terlupakan.",
            "Ketika kamu merasa lelah, istirahat sejenak, tetapi jangan pernah menyerah.",
            "Kamu adalah sang pencipta dalam hidupmu. Lukislah dengan warna-warna cerah.",
            "Kesempatan terbaik seringkali muncul di tengah-tengah tantangan terbesar.",
            "Hidup adalah anugerah terbesar, jadi nikmatilah setiap momennya.",
            "Hidup adalah perjalanan, jadi nikmatilah pemandangan di sepanjang jalan.",
            "Ketika kamu mencari alasan untuk menyerah, temukan alasan untuk terus berjuang.",
            "Berpikir positif adalah kunci untuk membuka pintu menuju kebahagiaan dan kesuksesan.",
            "Pekerjaan besar selalu dimulai dari langkah-langkah kecil.",
            "Hidupmu adalah hasil dari pilihan yang kamu buat. Pilihlah dengan bijaksana.",
            "Ketika kamu mengubah pikiranmu, kamu mengubah duniamu.",
            "Keberanian adalah saat ketika kamu merasa takut, tetapi tetap melangkah maju.",
            "Ketika kamu percaya pada dirimu sendiri, kesempatan datang menghampirimu.",
            "Hidup adalah petualangan yang menakjubkan. Jangan lewatkan momen-momen berharganya.",
            "Kegagalan adalah batu loncatan menuju kesuksesan.",
            "Jika kamu tidak mencobanya, kamu tidak akan pernah tahu apakah kamu bisa melakukannya.",
            "Ketika kamu berhenti mencari kesempurnaan, kamu akan menemukan kebahagiaan.",
            "Hidup adalah seperti bersepeda, agar tetap seimbang, kamu harus terus bergerak maju.",
            "Impian adalah api yang membara dalam dirimu. Jaga terus api itu menyala.",
            "Ketika kamu merasa putus asa, ingatlah bahwa setiap hari adalah kesempatan baru untuk memulai lagi.",
            "Kesehatan mentalmu adalah prioritas. Jaga dirimu dengan baik, pikiran, tubuh, dan jiwa.",
            "Kebahagiaan bukanlah ketiadaan masalah, tapi kemampuan untuk menghadapinya.",
            "Kesehatan mentalmu sama pentingnya dengan kesehatan fisikmu. Luangkan waktu untuk merawatnya.",
            "Jangan terlalu keras pada dirimu sendiri. Kamu melakukan yang terbaik yang kamu bisa.",
            "Pilihlah untuk menjadi baik pada dirimu sendiri, bahkan di hari-hari yang paling sulit.",
            "Tarik napas dengan penuh percaya diri, hembuskan keraguan. Percayalah pada dirimu dan perjalananmu.",
            "Terimalah ketidaksempurnaanmu dan rayakan keunikanmu. Kamu sudah cukup.",
            "Temukan kebahagiaan dalam hal-hal kecil dan biarkan rasa syukur memenuhi hatimu.",
            "Kamu lebih kuat daripada yang kamu kira. Teruslah maju, meski sulit.",
            "Sekelilingilah dirimu dengan orang-orang positif yang mengangkatmu dan menginspirasi.",
            "Praktikkan cinta pada diri sendiri dan penerimaan diri. Kamu layak mendapatkan cinta dan kebahagiaan.",
            "Jangan takut untuk meminta bantuan. Itu adalah tanda kekuatan, bukan kelemahan.",
            "Isilah pikiranmu dengan pemikiran positif dan lepaskan negativitas.",
            "Matahari akan terbit kembali, begitu juga denganmu. Teruslah maju.",
            "Jangan membandingkan perjalananmu dengan orang lain. Setiap jalan memiliki keunikan sendiri.",
            "Kesehatan mentalmu tidak ditentukan oleh masa lalu. Kamu memiliki kekuatan untuk menciptakan masa depan yang lebih cerah."
        ];

        foreach($qoutes as $q) {
            Quote::create(['konten' => $q]);
        }
        // Quote::factory()->count(30)->create();
    }
}