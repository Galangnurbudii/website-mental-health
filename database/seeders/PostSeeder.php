<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $curahanHati = [
            "Kehidupan ini terasa begitu berat. Rasanya tak ada harapan lagi untuk bisa bangkit dari keterpurukan ini.",
            "Aku merasa sendiri, seperti tidak ada yang memahami perjuanganku. Setiap hari terasa seperti aku berjalan sendiri di lorong yang gelap.",
            "Aku merindukan cinta dan kasih sayang. Rasanya seperti hatiku telah membeku dan tak mampu merasakan kehangatan lagi.",
            "Terkadang, aku bertanya-tanya apa arti hidup ini. Apakah semua penderitaan yang aku alami sebanding dengan apa yang akan aku dapatkan di akhir?",
            "Setiap kali aku mencoba bangkit, selalu ada hambatan baru yang datang menghancurkan semangatku. Aku lelah berjuang tanpa hasil yang memuaskan.",
            "Aku ingin merasa dihargai dan diakui. Tapi sepertinya dunia ini hanya memandangku sebelah mata.",
            "Aku ingin merasakan kebahagiaan sejati. Bukan hanya sekadar senyuman palsu di wajah, tapi kebahagiaan yang tulus dan abadi.",
            "Mungkin aku harus belajar menerima keadaan dan menjalani hidup ini sebaik mungkin. Meski hatiku seringkali hancur dan terluka.",
            "Terkadang aku berharap bisa memiliki kekuatan untuk mengubah segalanya. Tapi nyatanya, aku hanyalah manusia biasa yang rapuh dan terkadang terjebak dalam kesedihan.",
            "Aku ingin mencapai impian-impianku, tapi sering kali kehilangan motivasi. Terkadang aku bertanya pada diri sendiri, apakah aku memang pantas untuk meraih mimpi-mimpi itu?",
            "Setiap kali aku berusaha untuk bangkit, rasanya selalu ada kekuatan yang menarikku kembali ke dalam lubang kegelapan.",
            "Aku lelah berpura-pura kuat di depan orang lain. Sebenarnya, hatiku hancur dan aku tak tahu harus berbuat apa.",
            "Hidup terasa begitu monoton dan tanpa warna. Aku merasa terjebak dalam rutinitas yang tak berarti.",
            "Aku ingin memiliki seseorang yang bisa kupercaya sepenuhnya. Seseorang yang tak akan meninggalkanku ketika aku sedang dalam kesulitan.",
            "Kadang-kadang, aku merasa seperti orang asing di dunia ini. Aku tidak tahu di mana tempatku berada atau dengan siapa aku bisa berbagi kebahagiaan dan kesedihan.",
            "Aku merasa kehilangan arah. Tidak ada tujuan yang jelas dalam hidupku dan rasanya sulit untuk menemukan arti sejati dari keberadaanku di dunia ini.",
            "Aku merindukan masa-masa ketika hidup terasa lebih sederhana. Sekarang, semuanya begitu rumit dan aku sering kali merasa tersesat.",
            "Aku ingin memiliki seseorang yang mengerti dan mendukungku sepenuhnya. Seseorang yang bisa aku andalkan di saat-saat sulit.",
            "Setiap hari aku berusaha untuk tersenyum, tetapi dalam hatiku, ada luka yang tak kunjung sembuh.",
            "Aku ingin hidupku memiliki makna yang lebih dalam. Rasanya seperti aku hanya menjalani rutinitas tanpa alasan yang jelas.",
            "Aku ingin bisa melepaskan diri dari masa lalu yang menyakitkan. Tapi terkadang kenangan itu terus menghantuiku dan sulit untuk dilupakan.",
            "Aku takut akan kegagalan. Aku takut mencoba hal baru karena takut tidak berhasil dan dihakimi oleh orang lain.",
            "Aku lelah berjuang sendiri. Aku butuh seseorang yang bisa berada di sampingku dan melalui segala kesulitan bersama-sama.",
            "Rasa kecemasan dan ketakutan selalu menghantuiku. Aku merasa seperti terjebak dalam penjara pikiran yang sulit untuk ditembus.",
            "Aku merasa terasing dan tidak diterima oleh masyarakat sekitar. Sepertinya sulit bagiku untuk menemukan tempat di mana aku bisa benar-benar termasuk.",
            "Aku ingin hidupku memiliki arti yang lebih besar. Aku ingin berkontribusi dan membuat perbedaan di dunia ini.",
            "Aku lelah berpura-pura bahagia di depan orang lain. Kadang-kadang, aku hanya ingin menangis dan melepaskan semua rasa sakit yang ada di dalam hatiku.",
            "Aku merasa terjebak dalam perasaan yang rumit. Aku tidak tahu apa yang sebenarnya aku inginkan dan apa yang membuatku bahagia.",
            "Aku ingin menemukan kedamaian dalam diriku sendiri. Aku ingin bisa menerima dan mencintai diriku apa adanya.",
            "Setiap kali aku mencoba untuk percaya pada diriku sendiri, selalu ada suara yang meragukan kemampuanku. Aku butuh kekuatan untuk mengatasi keraguan ini.",
            "Hidup terasa begitu tidak adil. Aku sering kali melihat orang lain mendapatkan apa yang mereka inginkan sementara aku terus berjuang untuk mencapai hal yang sama.",
            "Aku ingin hidupku memiliki lebih banyak warna dan petualangan. Rasanya seperti aku terjebak dalam kehidupan yang monoton dan membosankan.",
            "Aku ingin bisa memaafkan diriku sendiri atas kesalahan yang pernah kulakukan. Tapi terkadang, rasa bersalah itu terus menghantuiku.",
            "Aku merasa kehilangan identitasku. Aku tidak tahu siapa sebenarnya aku dan apa yang membuatku unik.",
        ];

        foreach ($curahanHati as $q) {
            Post::create(['konten' => $q, 'id_user' => '1']);
        }
        // Post::factory()->count(30)->create();

    }
}