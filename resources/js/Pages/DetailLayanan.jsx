import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import BackUpButton from '@/Components/BackUpButton'
import { useState, useEffect } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePickers from '@/Components/DatePickers'
import DropdownMenu from '@/Components/DropdownMenu'
import CardsDetail from '@/Components/CardsDetail'
import LeftSideLayanan from '@/Components/LeftSideLayanan'
import Header from '@/Components/Header'
import Select from 'react-select'

export default function DetailLayanan() {
    // const [nama, rating] = psikolog;

    // Dropdown Menu

    const provinces = [
        { value: 'Aceh', label: 'Aceh' },
        { value: 'Bali', label: 'Bali' },
        { value: 'Bangka Belitung', label: 'Bangka Belitung' },
        { value: 'Banten', label: 'Banten' },
        { value: 'Bengkulu', label: 'Bengkulu' },
        { value: 'Gorontalo', label: 'Gorontalo' },
        { value: 'Jakarta', label: 'Jakarta' },
        { value: 'Jambi', label: 'Jambi' },
        { value: 'Jawa Barat', label: 'Jawa Barat' },
        { value: 'Jawa Tengah', label: 'Jawa Tengah' },
        { value: 'Jawa Timur', label: 'Jawa Timur' },
        { value: 'Kalimantan Barat', label: 'Kalimantan Barat' },
        { value: 'Kalimantan Selatan', label: 'Kalimantan Selatan' },
        { value: 'Kalimantan Tengah', label: 'Kalimantan Tengah' },
        { value: 'Kalimantan Timur', label: 'Kalimantan Timur' },
        { value: 'Kalimantan Utara', label: 'Kalimantan Utara' },
        { value: 'Kepulauan Riau', label: 'Kepulauan Riau' },
        { value: 'Lampung', label: 'Lampung' },
        { value: 'Maluku', label: 'Maluku' },
        { value: 'Maluku Utara', label: 'Maluku Utara' },
        { value: 'Nusa Tenggara Barat', label: 'Nusa Tenggara Barat' },
        { value: 'Nusa Tenggara Timur', label: 'Nusa Tenggara Timur' },
        { value: 'Papua', label: 'Papua' },
        { value: 'Papua Barat', label: 'Papua Barat' },
        { value: 'Riau', label: 'Riau' },
        { value: 'Sulawesi Barat', label: 'Sulawesi Barat' },
        { value: 'Sulawesi Selatan', label: 'Sulawesi Selatan' },
        { value: 'Sulawesi Tengah', label: 'Sulawesi Tengah' },
        { value: 'Sulawesi Tenggara', label: 'Sulawesi Tenggara' },
        { value: 'Sulawesi Utara', label: 'Sulawesi Utara' },
        { value: 'Sumatera Barat', label: 'Sumatera Barat' },
        { value: 'Sumatera Selatan', label: 'Sumatera Selatan' },
        { value: 'Sumatera Utara', label: 'Sumatera Utara' },
        { value: 'Yogyakarta', label: 'Yogyakarta' },
    ]

    const kabupatenKota = {
        Aceh: [
            { value: 'Aceh Barat', label: 'Aceh Barat' },
            { value: 'Aceh Barat Daya', label: 'Aceh Barat Daya' },
            { value: 'Aceh Besar', label: 'Aceh Besar' },
            { value: 'Aceh Jaya', label: 'Aceh Jaya' },
            { value: 'Aceh Selatan', label: 'Aceh Selatan' },
            { value: 'Aceh Singkil', label: 'Aceh Singkil' },
            { value: 'Aceh Tamiang', label: 'Aceh Tamiang' },
            { value: 'Aceh Tengah', label: 'Aceh Tengah' },
            { value: 'Aceh Tenggara', label: 'Aceh Tenggara' },
            { value: 'Aceh Timur', label: 'Aceh Timur' },
            { value: 'Aceh Utara', label: 'Aceh Utara' },
        ],
        Bali: [
            { value: 'Badung', label: 'Badung' },
            { value: 'Bangli', label: 'Bangli' },
            { value: 'Buleleng', label: 'Buleleng' },
            { value: 'Denpasar', label: 'Denpasar' },
            { value: 'Gianyar', label: 'Gianyar' },
            { value: 'Jembrana', label: 'Jembrana' },
            { value: 'Karangasem', label: 'Karangasem' },
            { value: 'Klungkung', label: 'Klungkung' },
            { value: 'Tabanan', label: 'Tabanan' },
        ],
        Banten: [
            { value: 'Lebak', label: 'Lebak' },
            { value: 'Pandeglang', label: 'Pandeglang' },
            { value: 'Serang', label: 'Serang' },
            { value: 'Tangerang', label: 'Tangerang' },
            { value: 'Tangerang Selatan', label: 'Tangerang Selatan' },
        ],
        Bengkulu: [
            { value: 'Bengkulu', label: 'Bengkulu' },
            { value: 'Bengkulu Selatan', label: 'Bengkulu Selatan' },
            { value: 'Bengkulu Tengah', label: 'Bengkulu Tengah' },
            { value: 'Bengkulu Utara', label: 'Bengkulu Utara' },
            { value: 'Kaur', label: 'Kaur' },
            { value: 'Kepahiang', label: 'Kepahiang' },
            { value: 'Lebong', label: 'Lebong' },
            { value: 'Mukomuko', label: 'Mukomuko' },
            { value: 'Rejang Lebong', label: 'Rejang Lebong' },
            { value: 'Seluma', label: 'Seluma' },
        ],
        Yogyakarta: [
            { value: 'Bantul', label: 'Bantul' },
            { value: 'Gunung Kidul', label: 'Gunung Kidul' },
            { value: 'Kulon Progo', label: 'Kulon Progo' },
            { value: 'Sleman', label: 'Sleman' },
            { value: 'Yogyakarta', label: 'Yogyakarta' },
        ],
        Jakarta: [
            { value: 'Jakarta Barat', label: 'Jakarta Barat' },
            { value: 'Jakarta Pusat', label: 'Jakarta Pusat' },
            { value: 'Jakarta Selatan', label: 'Jakarta Selatan' },
            { value: 'Jakarta Timur', label: 'Jakarta Timur' },
            { value: 'Jakarta Utara', label: 'Jakarta Utara' },
        ],
        Gorontalo: [
            { value: 'Boalemo', label: 'Boalemo' },
            { value: 'Bone Bolango', label: 'Bone Bolango' },
            { value: 'Gorontalo', label: 'Gorontalo' },
            { value: 'Gorontalo Utara', label: 'Gorontalo Utara' },
            { value: 'Pohuwato', label: 'Pohuwato' },
        ],
        Jambi: [
            { value: 'Batanghari', label: 'Batanghari' },
            { value: 'Bungo', label: 'Bungo' },
            { value: 'Jambi', label: 'Jambi' },
            { value: 'Kerinci', label: 'Kerinci' },
            { value: 'Merangin', label: 'Merangin' },
            { value: 'Muaro Jambi', label: 'Muaro Jambi' },
            { value: 'Sarolangun', label: 'Sarolangun' },
            { value: 'Tanjung Jabung Barat', label: 'Tanjung Jabung Barat' },
            { value: 'Tanjung Jabung Timur', label: 'Tanjung Jabung Timur' },
            { value: 'Tebo', label: 'Tebo' },
        ],
        'Jawa Barat': [
            { value: 'Bandung', label: 'Bandung' },
            { value: 'Bandung Barat', label: 'Bandung Barat' },
            { value: 'Bekasi', label: 'Bekasi' },
            { value: 'Bogor', label: 'Bogor' },
            { value: 'Ciamis', label: 'Ciamis' },
            { value: 'Cianjur', label: 'Cianjur' },
            { value: 'Cirebon', label: 'Cirebon' },
            { value: 'Garut', label: 'Garut' },
            { value: 'Indramayu', label: 'Indramayu' },
            { value: 'Karawang', label: 'Karawang' },
            { value: 'Kuningan', label: 'Kuningan' },
            { value: 'Majalengka', label: 'Majalengka' },
            { value: 'Pangandaran', label: 'Pangandaran' },
            { value: 'Purwakarta', label: 'Purwakarta' },
            { value: 'Subang', label: 'Subang' },
            { value: 'Sukabumi', label: 'Sukabumi' },
            { value: 'Sumedang', label: 'Sumedang' },
            { value: 'Tasikmalaya', label: 'Tasikmalaya' },
        ],
        'Jawa Tengah': [
            { value: 'Banjarnegara', label: 'Banjarnegara' },
            { value: 'Banyumas', label: 'Banyumas' },
            { value: 'Batang', label: 'Batang' },
            { value: 'Blora', label: 'Blora' },
            { value: 'Boyolali', label: 'Boyolali' },
            { value: 'Brebes', label: 'Brebes' },
            { value: 'Cilacap', label: 'Cilacap' },
            { value: 'Demak', label: 'Demak' },
            { value: 'Grobogan', label: 'Grobogan' },
            { value: 'Jepara', label: 'Jepara' },
            { value: 'Karanganyar', label: 'Karanganyar' },
            { value: 'Kebumen', label: 'Kebumen' },
            { value: 'Kendal', label: 'Kendal' },
            { value: 'Klaten', label: 'Klaten' },
            { value: 'Kudus', label: 'Kudus' },
            { value: 'Magelang', label: 'Magelang' },
            { value: 'Pati', label: 'Pati' },
            { value: 'Pekalongan', label: 'Pekalongan' },
            { value: 'Pemalang', label: 'Pemalang' },
            { value: 'Purbalingga', label: 'Purbalingga' },
            { value: 'Purworejo', label: 'Purworejo' },
            { value: 'Rembang', label: 'Rembang' },
            { value: 'Semarang', label: 'Semarang' },
            { value: 'Sragen', label: 'Sragen' },
            { value: 'Sukoharjo', label: 'Sukoharjo' },
            { value: 'Tegal', label: 'Tegal' },
            { value: 'Temanggung', label: 'Temanggung' },
            { value: 'Wonogiri', label: 'Wonogiri' },
            { value: 'Wonosobo', label: 'Wonosobo' },
        ],
        'Jawa Timur': [
            { value: 'Bangkalan', label: 'Bangkalan' },
            { value: 'Banyuwangi', label: 'Banyuwangi' },
            { value: 'Blitar', label: 'Blitar' },
            { value: 'Bojonegoro', label: 'Bojonegoro' },
            { value: 'Bondowoso', label: 'Bondowoso' },
            { value: 'Gresik', label: 'Gresik' },
            { value: 'Jember', label: 'Jember' },
            { value: 'Jombang', label: 'Jombang' },
            { value: 'Kediri', label: 'Kediri' },
            { value: 'Lamongan', label: 'Lamongan' },
            { value: 'Lumajang', label: 'Lumajang' },
            { value: 'Madiun', label: 'Madiun' },
            { value: 'Magetan', label: 'Magetan' },
            { value: 'Malang', label: 'Malang' },
            { value: 'Mojokerto', label: 'Mojokerto' },
            { value: 'Nganjuk', label: 'Nganjuk' },
            { value: 'Ngawi', label: 'Ngawi' },
            { value: 'Pacitan', label: 'Pacitan' },
            { value: 'Pamekasan', label: 'Pamekasan' },
            { value: 'Pasuruan', label: 'Pasuruan' },
            { value: 'Ponorogo', label: 'Ponorogo' },
            { value: 'Probolinggo', label: 'Probolinggo' },
            { value: 'Sampang', label: 'Sampang' },
            { value: 'Sidoarjo', label: 'Sidoarjo' },
            { value: 'Situbondo', label: 'Situbondo' },
            { value: 'Sumenep', label: 'Sumenep' },
            { value: 'Surabaya', label: 'Surabaya' },
            { value: 'Trenggalek', label: 'Trenggalek' },
            { value: 'Tuban', label: 'Tuban' },
            { value: 'Tulungagung', label: 'Tulungagung' },
        ],
        'Kalimantan Barat': [
            { value: 'Bengkayang', label: 'Bengkayang' },
            { value: 'Kapuas Hulu', label: 'Kapuas Hulu' },
            { value: 'Kayong Utara', label: 'Kayong Utara' },
            { value: 'Ketapang', label: 'Ketapang' },
            { value: 'Kubu Raya', label: 'Kubu Raya' },
            { value: 'Landak', label: 'Landak' },
            { value: 'Melawi', label: 'Melawi' },
            { value: 'Mempawah', label: 'Mempawah' },
            { value: 'Sambas', label: 'Sambas' },
            { value: 'Sanggau', label: 'Sanggau' },
            { value: 'Sekadau', label: 'Sekadau' },
            { value: 'Sintang', label: 'Sintang' },
        ],
        'Kalimantan Selatan': [
            { value: 'Balangan', label: 'Balangan' },
            { value: 'Banjar', label: 'Banjar' },
            { value: 'Banjarbaru', label: 'Banjarbaru' },
            { value: 'Banjarmasin', label: 'Banjarmasin' },
            { value: 'Barito Kuala', label: 'Barito Kuala' },
            { value: 'Hulu Sungai Selatan', label: 'Hulu Sungai Selatan' },
            { value: 'Hulu Sungai Tengah', label: 'Hulu Sungai Tengah' },
            { value: 'Hulu Sungai Utara', label: 'Hulu Sungai Utara' },
            { value: 'Kota Baru', label: 'Kota Baru' },
            { value: 'Tabalong', label: 'Tabalong' },
            { value: 'Tanah Bumbu', label: 'Tanah Bumbu' },
            { value: 'Tanah Laut', label: 'Tanah Laut' },
            { value: 'Tapin', label: 'Tapin' },
        ],
        'Kalimantan Tengah': [
            { value: 'Barito Selatan', label: 'Barito Selatan' },
            { value: 'Barito Timur', label: 'Barito Timur' },
            { value: 'Barito Utara', label: 'Barito Utara' },
            { value: 'Gunung Mas', label: 'Gunung Mas' },
            { value: 'Kapuas', label: 'Kapuas' },
            { value: 'Katingan', label: 'Katingan' },
            { value: 'Kotawaringin Barat', label: 'Kotawaringin Barat' },
            { value: 'Kotawaringin Timur', label: 'Kotawaringin Timur' },
            { value: 'Lamandau', label: 'Lamandau' },
            { value: 'Murung Raya', label: 'Murung Raya' },
            { value: 'Palangka Raya', label: 'Palangka Raya' },
            { value: 'Pulang Pisau', label: 'Pulang Pisau' },
            { value: 'Sukamara', label: 'Sukamara' },
            { value: 'Seruyan', label: 'Seruyan' },
            { value: 'Kudangan', label: 'Kudangan' },
        ],
        'Kalimantan Timur': [
            { value: 'Berau', label: 'Berau' },
            { value: 'Kutai Barat', label: 'Kutai Barat' },
            { value: 'Kutai Kartanegara', label: 'Kutai Kartanegara' },
            { value: 'Kutai Timur', label: 'Kutai Timur' },
            { value: 'Mahakam Ulu', label: 'Mahakam Ulu' },
            { value: 'Paser', label: 'Paser' },
            { value: 'Penajam Paser Utara', label: 'Penajam Paser Utara' },
            { value: 'Samarinda', label: 'Samarinda' },
        ],
        'Kalimantan Utara': [
            { value: 'Bulungan', label: 'Bulungan' },
            { value: 'Malinau', label: 'Malinau' },
            { value: 'Nunukan', label: 'Nunukan' },
            { value: 'Tana Tidung', label: 'Tana Tidung' },
            { value: 'Tarakan', label: 'Tarakan' },
        ],
        'Bangka Belitung': [
            { value: 'Bangka', label: 'Bangka' },
            { value: 'Bangka Barat', label: 'Bangka Barat' },
            { value: 'Bangka Selatan', label: 'Bangka Selatan' },
            { value: 'Bangka Tengah', label: 'Bangka Tengah' },
            { value: 'Belitung', label: 'Belitung' },
            { value: 'Belitung Timur', label: 'Belitung Timur' },
            { value: 'Pangkal Pinang', label: 'Pangkal Pinang' },
        ],
        'Kepulauan Riau': [
            { value: 'Bintan', label: 'Bintan' },
            { value: 'Karimun', label: 'Karimun' },
            { value: 'Kepulauan Anambas', label: 'Kepulauan Anambas' },
            { value: 'Lingga', label: 'Lingga' },
            { value: 'Natuna', label: 'Natuna' },
            { value: 'Tanjung Pinang', label: 'Tanjung Pinang' },
        ],
        Lampung: [
            { value: 'Lampung Barat', label: 'Lampung Barat' },
            { value: 'Lampung Selatan', label: 'Lampung Selatan' },
            { value: 'Lampung Tengah', label: 'Lampung Tengah' },
            { value: 'Lampung Timur', label: 'Lampung Timur' },
            { value: 'Lampung Utara', label: 'Lampung Utara' },
            { value: 'Mesuji', label: 'Mesuji' },
            { value: 'Pringsewu', label: 'Pringsewu' },
            { value: 'Tanggamus', label: 'Tanggamus' },
            { value: 'Tulang Bawang', label: 'Tulang Bawang' },
            { value: 'Tulang Bawang Barat', label: 'Tulang Bawang Barat' },
            { value: 'Way Kanan', label: 'Way Kanan' },
        ],
        Maluku: [
            { value: 'Buru', label: 'Buru' },
            { value: 'Buru Selatan', label: 'Buru Selatan' },
            { value: 'Kepulauan Aru', label: 'Kepulauan Aru' },
            { value: 'Maluku Barat Daya', label: 'Maluku Barat Daya' },
            { value: 'Maluku Tengah', label: 'Maluku Tengah' },
            { value: 'Maluku Tenggara', label: 'Maluku Tenggara' },
            { value: 'Maluku Tenggara Barat', label: 'Maluku Tenggara Barat' },
            { value: 'Seram Bagian Barat', label: 'Seram Bagian Barat' },
        ],
        'Maluku Utara': [
            { value: 'Halmahera Barat', label: 'Halmahera Barat' },
            { value: 'Halmahera Tengah', label: 'Halmahera Tengah' },
            { value: 'Halmahera Utara', label: 'Halmahera Utara' },
            { value: 'Halmahera Selatan', label: 'Halmahera Selatan' },
            { value: 'Halmahera Timur', label: 'Halmahera Timur' },
            { value: 'Kepulauan Sula', label: 'Kepulauan Sula' },
            { value: 'Ternate', label: 'Ternate' },
            { value: 'Tidore Kepulauan', label: 'Tidore Kepulauan' },
        ],
        'Nusa Tenggara Barat': [
            { value: 'Bima', label: 'Bima' },
            { value: 'Dompu', label: 'Dompu' },
            { value: 'Lombok Barat', label: 'Lombok Barat' },
            { value: 'Lombok Tengah', label: 'Lombok Tengah' },
            { value: 'Lombok Timur', label: 'Lombok Timur' },
            { value: 'Lombok Utara', label: 'Lombok Utara' },
            { value: 'Sumbawa', label: 'Sumbawa' },
            { value: 'Sumbawa Barat', label: 'Sumbawa Barat' },
            { value: 'Mataram', label: 'Mataram' },
        ],
        'Nusa Tenggara Timur': [
            { value: 'Alor', label: 'Alor' },
            { value: 'Belu', label: 'Belu' },
            { value: 'Ende', label: 'Ende' },
            { value: 'Flores Timur', label: 'Flores Timur' },
            { value: 'Kupang', label: 'Kupang' },
            { value: 'Lembata', label: 'Lembata' },
            { value: 'Malaka', label: 'Malaka' },
            { value: 'Manggarai', label: 'Manggarai' },
            { value: 'Manggarai Barat', label: 'Manggarai Barat' },
            { value: 'Manggarai Timur', label: 'Manggarai Timur' },
            { value: 'Nagekeo', label: 'Nagekeo' },
            { value: 'Ngada', label: 'Ngada' },
            { value: 'Rote Ndao', label: 'Rote Ndao' },
            { value: 'Sabu Raijua', label: 'Sabu Raijua' },
            { value: 'Sikka', label: 'Sikka' },
            { value: 'Sumba Barat', label: 'Sumba Barat' },
            { value: 'Sumba Barat Daya', label: 'Sumba Barat Daya' },
            { value: 'Sumba Tengah', label: 'Sumba Tengah' },
            { value: 'Sumba Timur', label: 'Sumba Timur' },
            { value: 'Timor Tengah Selatan', label: 'Timor Tengah Selatan' },
            { value: 'Timor Tengah Utara', label: 'Timor Tengah Utara' },
        ],
        Papua: [
            { value: 'Asmat', label: 'Asmat' },
            { value: 'Biak Numfor', label: 'Biak Numfor' },
            { value: 'Boven Digoel', label: 'Boven Digoel' },
            { value: 'Deiyai', label: 'Deiyai' },
            { value: 'Dogiyai', label: 'Dogiyai' },
            { value: 'Intan Jaya', label: 'Intan Jaya' },
            { value: 'Jayapura', label: 'Jayapura' },
            { value: 'Jayawijaya', label: 'Jayawijaya' },
            { value: 'Keerom', label: 'Keerom' },
            { value: 'Kepulauan Yapen', label: 'Kepulauan Yapen' },
            { value: 'Lanny Jaya', label: 'Lanny Jaya' },
            { value: 'Mamberamo Raya', label: 'Mamberamo Raya' },
            { value: 'Mamberamo Tengah', label: 'Mamberamo Tengah' },
            { value: 'Mappi', label: 'Mappi' },
            { value: 'Merauke', label: 'Merauke' },
            { value: 'Mimika', label: 'Mimika' },
            { value: 'Nabire', label: 'Nabire' },
            { value: 'Nduga', label: 'Nduga' },
            { value: 'Paniai', label: 'Paniai' },
            { value: 'Pegunungan Bintang', label: 'Pegunungan Bintang' },
            { value: 'Puncak', label: 'Puncak' },
            { value: 'Puncak Jaya', label: 'Puncak Jaya' },
            { value: 'Sarmi', label: 'Sarmi' },
            { value: 'Supiori', label: 'Supiori' },
            { value: 'Tolikara', label: 'Tolikara' },
            { value: 'Waropen', label: 'Waropen' },
            { value: 'Yahukimo', label: 'Yahukimo' },
            { value: 'Yalimo', label: 'Yalimo' },
        ],
        'Papua Barat': [
            { value: 'Fakfak', label: 'Fakfak' },
            { value: 'Kaimana', label: 'Kaimana' },
            { value: 'Manokwari', label: 'Manokwari' },
            { value: 'Manokwari Selatan', label: 'Manokwari Selatan' },
            { value: 'Maybrat', label: 'Maybrat' },
            { value: 'Raja Ampat', label: 'Raja Ampat' },
            { value: 'Sorong', label: 'Sorong' },
            { value: 'Sorong Selatan', label: 'Sorong Selatan' },
            { value: 'Tambrauw', label: 'Tambrauw' },
            { value: 'Teluk Bintuni', label: 'Teluk Bintuni' },
            { value: 'Teluk Wondama', label: 'Teluk Wondama' },
        ],
        Riau: [
            { value: 'Bengkalis', label: 'Bengkalis' },
            { value: 'Indragiri Hilir', label: 'Indragiri Hilir' },
            { value: 'Indragiri Hulu', label: 'Indragiri Hulu' },
            { value: 'Kampar', label: 'Kampar' },
            { value: 'Kepulauan Meranti', label: 'Kepulauan Meranti' },
            { value: 'Kuantan Singingi', label: 'Kuantan Singingi' },
            { value: 'Pekanbaru', label: 'Pekanbaru' },
            { value: 'Pelalawan', label: 'Pelalawan' },
            { value: 'Rokan Hilir', label: 'Rokan Hilir' },
            { value: 'Rokan Hulu', label: 'Rokan Hulu' },
            { value: 'Siak', label: 'Siak' },
        ],
        'Sulawesi Barat': [
            { value: 'Majene', label: 'Majene' },
            { value: 'Mamasa', label: 'Mamasa' },
            { value: 'Mamuju', label: 'Mamuju' },
            { value: 'Mamuju Tengah', label: 'Mamuju Tengah' },
            { value: 'Mamuju Utara', label: 'Mamuju Utara' },
            { value: 'Polewali Mandar', label: 'Polewali Mandar' },
        ],
        'Sulawesi Selatan': [
            { value: 'Bantaeng', label: 'Bantaeng' },
            { value: 'Barru', label: 'Barru' },
            { value: 'Bone', label: 'Bone' },
            { value: 'Bulukumba', label: 'Bulukumba' },
            { value: 'Enrekang', label: 'Enrekang' },
            { value: 'Gowa', label: 'Gowa' },
            { value: 'Jeneponto', label: 'Jeneponto' },
            { value: 'Luwu', label: 'Luwu' },
            { value: 'Luwu Timur', label: 'Luwu Timur' },
            { value: 'Luwu Utara', label: 'Luwu Utara' },
            { value: 'Maros', label: 'Maros' },
            { value: 'Pangkajene Islands', label: 'Pangkajene Islands' },
            { value: 'Pinrang', label: 'Pinrang' },
            { value: 'Selayar', label: 'Selayar' },
            { value: 'Sidenreng Rappang', label: 'Sidenreng Rappang' },
            { value: 'Sinjai', label: 'Sinjai' },
            { value: 'Soppeng', label: 'Soppeng' },
            { value: 'Takalar', label: 'Takalar' },
            { value: 'Tana Toraja', label: 'Tana Toraja' },
            { value: 'Toraja Utara', label: 'Toraja Utara' },
            { value: 'Wajo', label: 'Wajo' },
            { value: 'Makassar', label: 'Makassar' },
            { value: 'Palopo', label: 'Palopo' },
            { value: 'Parepare', label: 'Parepare' },
        ],
        'Sulawesi Tengah': [
            { value: 'Banggai', label: 'Banggai' },
            { value: 'Banggai Kepulauan', label: 'Banggai Kepulauan' },
            { value: 'Buol', label: 'Buol' },
            { value: 'Donggala', label: 'Donggala' },
            { value: 'Morowali', label: 'Morowali' },
            { value: 'Palu', label: 'Palu' },
            { value: 'Parigi Moutong', label: 'Parigi Moutong' },
            { value: 'Poso', label: 'Poso' },
            { value: 'Sigi', label: 'Sigi' },
            { value: 'Tojo Una-Una', label: 'Tojo Una-Una' },
            { value: 'Tolitoli', label: 'Tolitoli' },
        ],
        'Sulawesi Tenggara': [
            { value: 'Bombana', label: 'Bombana' },
            { value: 'Buton', label: 'Buton' },
            { value: 'Buton Selatan', label: 'Buton Selatan' },
            { value: 'Buton Tengah', label: 'Buton Tengah' },
            { value: 'Buton Utara', label: 'Buton Utara' },
            { value: 'Kolaka', label: 'Kolaka' },
            { value: 'Kolaka Timur', label: 'Kolaka Timur' },
            { value: 'Kolaka Utara', label: 'Kolaka Utara' },
            { value: 'Konawe', label: 'Konawe' },
            { value: 'Konawe Kepulauan', label: 'Konawe Kepulauan' },
            { value: 'Konawe Selatan', label: 'Konawe Selatan' },
            { value: 'Konawe Utara', label: 'Konawe Utara' },
            { value: 'Muna', label: 'Muna' },
            { value: 'Muna Barat', label: 'Muna Barat' },
            { value: 'Wakatobi', label: 'Wakatobi' },
            { value: 'Kendari', label: 'Kendari' },
        ],
        'Sulawesi Utara': [
            { value: 'Bolaang Mongondow', label: 'Bolaang Mongondow' },
            {
                value: 'Bolaang Mongondow Selatan',
                label: 'Bolaang Mongondow Selatan',
            },
            {
                value: 'Bolaang Mongondow Timur',
                label: 'Bolaang Mongondow Timur',
            },
            {
                value: 'Bolaang Mongondow Utara',
                label: 'Bolaang Mongondow Utara',
            },
            { value: 'Kepulauan Sangihe', label: 'Kepulauan Sangihe' },
            {
                value: 'Kepulauan Siau Tagulandang Biaro',
                label: 'Kepulauan Siau Tagulandang Biaro',
            },
            { value: 'Kepulauan Talaud', label: 'Kepulauan Talaud' },
            { value: 'Minahasa', label: 'Minahasa' },
            { value: 'Minahasa Selatan', label: 'Minahasa Selatan' },
            { value: 'Minahasa Tenggara', label: 'Minahasa Tenggara' },
            { value: 'Minahasa Utara', label: 'Minahasa Utara' },
            { value: 'Manado', label: 'Manado' },
            { value: 'Tomohon', label: 'Tomohon' },
        ],
        'Sumatera Barat': [
            { value: 'Agam', label: 'Agam' },
            { value: 'Dharmasraya', label: 'Dharmasraya' },
            { value: 'Kepulauan Mentawai', label: 'Kepulauan Mentawai' },
            { value: 'Lima Puluh Kota', label: 'Lima Puluh Kota' },
            { value: 'Padang', label: 'Padang' },
            { value: 'Padang Pariaman', label: 'Padang Pariaman' },
            { value: 'Pasaman', label: 'Pasaman' },
            { value: 'Pasaman Barat', label: 'Pasaman Barat' },
            { value: 'Pesisir Selatan', label: 'Pesisir Selatan' },
            { value: 'Sijunjung', label: 'Sijunjung' },
            { value: 'Solok', label: 'Solok' },
            { value: 'Solok Selatan', label: 'Solok Selatan' },
            { value: 'Tanah Datar', label: 'Tanah Datar' },
        ],
        'Sumatera Selatan': [
            { value: 'Banyuasin', label: 'Banyuasin' },
            { value: 'Empat Lawang', label: 'Empat Lawang' },
            { value: 'Lahat', label: 'Lahat' },
            { value: 'Muara Enim', label: 'Muara Enim' },
            { value: 'Musi Banyuasin', label: 'Musi Banyuasin' },
            { value: 'Musi Rawas', label: 'Musi Rawas' },
            { value: 'Musi Rawas Utara', label: 'Musi Rawas Utara' },
            { value: 'Ogan Ilir', label: 'Ogan Ilir' },
            { value: 'Ogan Komering Ilir', label: 'Ogan Komering Ilir' },
            { value: 'Ogan Komering Ulu', label: 'Ogan Komering Ulu' },
            {
                value: 'Ogan Komering Ulu Selatan',
                label: 'Ogan Komering Ulu Selatan',
            },
            {
                value: 'Ogan Komering Ulu Timur',
                label: 'Ogan Komering Ulu Timur',
            },
            { value: 'Pagar Alam', label: 'Pagar Alam' },
            { value: 'Palembang', label: 'Palembang' },
            { value: 'Prabumulih', label: 'Prabumulih' },
            { value: 'Lubuklinggau', label: 'Lubuklinggau' },
        ],
        'Sumatera Utara': [
            { value: 'Asahan', label: 'Asahan' },
            { value: 'Batu Bara', label: 'Batu Bara' },
            { value: 'Dairi', label: 'Dairi' },
            { value: 'Deli Serdang', label: 'Deli Serdang' },
            { value: 'Humbang Hasundutan', label: 'Humbang Hasundutan' },
            { value: 'Karo', label: 'Karo' },
            { value: 'Labuhanbatu', label: 'Labuhanbatu' },
            { value: 'Labuhanbatu Selatan', label: 'Labuhanbatu Selatan' },
            { value: 'Labuhanbatu Utara', label: 'Labuhanbatu Utara' },
            { value: 'Langkat', label: 'Langkat' },
            { value: 'Mandailing Natal', label: 'Mandailing Natal' },
            { value: 'Nias', label: 'Nias' },
            { value: 'Nias Barat', label: 'Nias Barat' },
            { value: 'Nias Selatan', label: 'Nias Selatan' },
            { value: 'Nias Utara', label: 'Nias Utara' },
            { value: 'Padang Lawas', label: 'Padang Lawas' },
            { value: 'Padang Lawas Utara', label: 'Padang Lawas Utara' },
            { value: 'Pakpak Bharat', label: 'Pakpak Bharat' },
            { value: 'Samosir', label: 'Samosir' },
            { value: 'Serdang Bedagai', label: 'Serdang Bedagai' },
            { value: 'Simalungun', label: 'Simalungun' },
            { value: 'Tapanuli Selatan', label: 'Tapanuli Selatan' },
            { value: 'Tapanuli Tengah', label: 'Tapanuli Tengah' },
            { value: 'Tapanuli Utara', label: 'Tapanuli Utara' },
            { value: 'Toba Samosir', label: 'Toba Samosir' },
        ],
    }

    // Empty Validation for Dropdown Menu Lokasi

    const [selectedProvince, setSelectedProvince] = useState(null)
    const [selectedKabupaten, setSelectedKabupaten] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const handleProvinceChange = (selectedOption) => {
        setSelectedProvince(selectedOption)
        setSelectedKabupaten(null)
        setErrorMessage('')
    }

    const handleKabupatenChange = (selectedOption) => {
        setSelectedKabupaten(selectedOption)
        setErrorMessage('')
    }

    // Filter the options for the kabupaten dropdown based on the selected province
    const filteredKabupatenOptions =
        selectedProvince && kabupatenKota[selectedProvince.value]
            ? kabupatenKota[selectedProvince.value]
            : []

    ////////////////////////////////////////////////////////////

    const jam = ['12.00', '14.00', '16.00', '18.00', '20.00']

    const [showContent, setShowContent] = useState(false)
    const [availablePsikolog, setAvailablePsikolog] = useState([])
    const handleClick2 = (e) => {
        e.prevent
        if (!activeIndex) {
            setErrorMessage('Waktu harus diisi.')
            return
        }

        if (!selectedProvince || !selectedKabupaten) {
            // Validation failed, handle the error
            setErrorMessage('Lokasi harus diisi.')
            return
        }

        const jsonData = {
            type: 'offline',
            provinsi: selectedProvince.value,
            kabupaten: selectedKabupaten.value,
            jam: jam[activeIndex - 1],
            tanggal: startDate.toISOString().split('T')[0],
        }   
        axios
            .post(route('filter'), jsonData)
            .then((response) => {
                setAvailablePsikolog(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.response.data)
            })

        setShowContent(!showContent)
    }

    // Waktu
    const [activeIndex, setActiveIndex] = useState()
    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }
    const handleDoubleClick = () => {
        setActiveIndex(null)
    }

    // Date Picker
    const [startDate, setStartDate] = useState(new Date())

    const changeDate = (date) => {
        setStartDate(date)
    }

    return (
        <div className="overflow-x-hidden">
            <NavBar />
            <Header
                pages2="Konsultasi"
                currpages2="Layanan"
                currpages="Detail"
            />
            <div className="w-full flex items-start sm:flex-col md:flex-row lg:flex-row">
                <LeftSideLayanan />
                {/* right side */}
                <div
                    className="
                            w-full
                            sm:w-full 
                            md:w-[100%]
                            lg:w-[60%]
                            h-full bg-white p-6 md:pl-16 lg:pr-28 md:pr-16
                            flex flex-col"
                >
                    <div className="w-full flex flex-col pt-4 md:pt-8 lg:pt-12 mt-2">
                        <h2 className="font-bold text-2xl pb-6">
                            Detail Layanan
                        </h2>
                        <div className="pb-10">
                            <div className="p-5 w-full rounded-lg shadow-xl border bg-disabledBackground mx-auto my-auto md:pb-5 lg:pb-5">
                                {/* Dividing Section */}
                                <div>
                                    {/* Detail List Psikolog */}
                                    {showContent ? (
                                        // Section 2

                                        <div className="pt-5 grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 px-3 pb-5 gap-4">
                                            {availablePsikolog.map(
                                                (psikolog) => (
                                                    <CardsDetail
                                                        psikolog={psikolog}
                                                        imageSrc={`${psikolog.foto_profil}`}
                                                        names={psikolog.nama}
                                                        jobs="Psikolog"
                                                        text={
                                                            psikolog.bidang_keahlian
                                                        }
                                                        badge1={`${psikolog.tahun_pengalaman} tahun`}
                                                        badge2={psikolog.rating}
                                                        fee={`Rp${psikolog.harga}0`}
                                                        jam= {jam[activeIndex - 1]}
                                                        tanggal={startDate.toISOString().split('T')[0]}
                                                    />
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        // Section 1
                                        <div className="pt-5 p-5">
                                            <div>
                                                <h3 className="pb-4 font-semibold text-xl">
                                                    Tanggal
                                                </h3>
                                                <DatePickers
                                                    changeDate={changeDate}
                                                />
                                            </div>

                                            {/* Waktu */}
                                            <div>
                                                <h3 className="pt-4 font-semibold text-xl">
                                                    Waktu
                                                </h3>
                                                {/* Badge */}

                                                <div className="join">
                                                    <div className="py-4 pl-1 flex flex-row gap-2 shrink overflow-x-auto">
                                                        <button
                                                            className={`inline-flex items-center px-4 py-1 bg-white border border-[#d8dbe1] text-sm text-center text-disabled font-semibold  rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                                activeIndex == 1
                                                                    ? 'ring-2 outline-none ring-blue-300'
                                                                    : ''
                                                            }`}
                                                            onClick={() =>
                                                                handleClick(1)
                                                            }
                                                        >
                                                            <p className="text-disabled font-semibold">
                                                                12:00
                                                            </p>
                                                        </button>
                                                        <button
                                                            className={`inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                                activeIndex ===
                                                                2
                                                                    ? 'ring-2 outline-none ring-blue-300'
                                                                    : ''
                                                            }`}
                                                            onClick={() =>
                                                                handleClick(2)
                                                            }
                                                            onDoubleClick={() =>
                                                                handleDoubleClick(
                                                                    2
                                                                )
                                                            }
                                                        >
                                                            <p className="text-disabled font-semibold">
                                                                14:00
                                                            </p>
                                                        </button>
                                                        <button
                                                            className={`inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                                activeIndex ===
                                                                3
                                                                    ? 'ring-2 outline-none ring-blue-300'
                                                                    : ''
                                                            }`}
                                                            onClick={() =>
                                                                handleClick(3)
                                                            }
                                                            onDoubleClick={() =>
                                                                handleDoubleClick(
                                                                    3
                                                                )
                                                            }
                                                        >
                                                            <p className="text-disabled font-semibold">
                                                                16:00
                                                            </p>
                                                        </button>
                                                        <button
                                                            className={`inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                                activeIndex ===
                                                                4
                                                                    ? 'ring-2 outline-none ring-blue-300'
                                                                    : ''
                                                            }`}
                                                            onClick={() =>
                                                                handleClick(4)
                                                            }
                                                            onDoubleClick={() =>
                                                                handleDoubleClick(
                                                                    4
                                                                )
                                                            }
                                                        >
                                                            <p className="text-disabled font-semibold">
                                                                18:00
                                                            </p>
                                                        </button>
                                                        <button
                                                            className={`inline-flex items-center px-4 py-1 border border-[#d8dbe1] text-sm text-center text-disabled font-semibold bg-white rounded-md hover:bg-gray-300 focus:ring-1 focus:outline-none focus:ring-blue-300 ${
                                                                activeIndex ===
                                                                5
                                                                    ? 'ring-2 outline-none ring-blue-300'
                                                                    : ''
                                                            }`}
                                                            onClick={() =>
                                                                handleClick(5)
                                                            }
                                                            onDoubleClick={() =>
                                                                handleDoubleClick(
                                                                    5
                                                                )
                                                            }
                                                        >
                                                            <p className="text-disabled font-semibold">
                                                                20:00
                                                            </p>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="pb-4 font-semibold text-xl">
                                                    Lokasi
                                                </h3>
                                            </div>
                                            {/* <DropdownMenu/> */}

                                            <div className="w-full max-w-sm pb-4">
                                                <Select
                                                    placeholder="Pilih Provinsi"
                                                    value={selectedProvince}
                                                    onChange={
                                                        handleProvinceChange
                                                    }
                                                    options={provinces}
                                                />

                                                <div className="pt-4">
                                                    <Select
                                                        placeholder="Pilih Kabupaten"
                                                        value={
                                                            selectedKabupaten
                                                        }
                                                        onChange={
                                                            handleKabupatenChange
                                                        }
                                                        options={
                                                            filteredKabupatenOptions
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-sm text-red-500 pb-4">
                                                {errorMessage}
                                            </p>
                                            <BackUpButton
                                                className="h-0"
                                                onClick={handleClick2}
                                            >
                                                Lanjut
                                            </BackUpButton>
                                        </div>
                                    )}
                                    {/* Dividing Section End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
