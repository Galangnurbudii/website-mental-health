import React, { useState } from "react";
import Select from "react-select";
// import { provinces, regencies } from 'indonesia';

// const kabupatenKota = Indonesian

// const provinceList = provinces.getList();

const provinces = [
    { value: "Aceh", label: "Aceh" },
    { value: "Bali", label: "Bali" },
    { value: "Bangka Belitung", label: "Bangka Belitung" },
    { value: "Banten", label: "Banten" },
    { value: "Bengkulu", label: "Bengkulu" },
    { value: "Gorontalo", label: "Gorontalo" },
    { value: "Jambi", label: "Jambi" },
    { value: "Jawa Barat", label: "Jawa Barat" },
    { value: "Jawa Tengah", label: "Jawa Tengah" },
    { value: "Jawa Timur", label: "Jawa Timur" },
    { value: "Kalimantan Barat", label: "Kalimantan Barat" },
    { value: "Kalimantan Selatan", label: "Kalimantan Selatan" },
    { value: "Kalimantan Tengah", label: "Kalimantan Tengah" },
    { value: "Kalimantan Timur", label: "Kalimantan Timur" },
    { value: "Kalimantan Utara", label: "Kalimantan Utara" },
    { value: "Kepulauan Riau", label: "Kepulauan Riau" },
    { value: "Lampung", label: "Lampung" },
    { value: "Maluku", label: "Maluku" },
    { value: "Maluku Utara", label: "Maluku Utara" },
    { value: "Nusa Tenggara Barat", label: "Nusa Tenggara Barat" },
    { value: "Nusa Tenggara Timur", label: "Nusa Tenggara Timur" },
    { value: "Papua", label: "Papua" },
    { value: "Papua Barat", label: "Papua Barat" },
    { value: "Riau", label: "Riau" },
    { value: "Sulawesi Barat", label: "Sulawesi Barat" },
    { value: "Sulawesi Selatan", label: "Sulawesi Selatan" },
    { value: "Sulawesi Tengah", label: "Sulawesi Tengah" },
    { value: "Sulawesi Tenggara", label: "Sulawesi Tenggara" },
    { value: "Sulawesi Utara", label: "Sulawesi Utara" },
    { value: "Sumatera Barat", label: "Sumatera Barat" },
    { value: "Sumatera Selatan", label: "Sumatera Selatan" },
    { value: "Sumatera Utara", label: "Sumatera Utara" },
    { value: "Yogyakarta", label: "Yogyakarta" },
];

const kabupatenKota = [
    { value: "Aceh Barat", label: "Aceh Barat" },
    { value: "Aceh Barat Daya", label: "Aceh Barat Daya" },
    { value: "Aceh Besar", label: "Aceh Besar" },
    { value: "Aceh Jaya", label: "Aceh Jaya" },
    { value: "Aceh Selatan", label: "Aceh Selatan" },
    { value: "Aceh Singkil", label: "Aceh Singkil" },
    { value: "Aceh Tamiang", label: "Aceh Tamiang" },
    { value: "Aceh Tengah", label: "Aceh Tengah" },
    { value: "Aceh Tenggara", label: "Aceh Tenggara" },
    { value: "Aceh Timur", label: "Aceh Timur" },
    { value: "Aceh Utara", label: "Aceh Utara" },
    { value: "Agam", label: "Agam" },
    { value: "Alor", label: "Alor" },
    { value: "Ambon", label: "Ambon" },
    { value: "Asahan", label: "Asahan" },
    { value: "Asmat", label: "Asmat" },
    { value: "Badung", label: "Badung" },
    { value: "Balangan", label: "Balangan" },
    { value: "Balikpapan", label: "Balikpapan" },
    { value: "Banda Aceh", label: "Banda Aceh" },
    { value: "Bandar Lampung", label: "Bandar Lampung" },
    { value: "Bandung", label: "Bandung" },
    { value: "Bandung Barat", label: "Bandung Barat" },
    { value: "Banggai", label: "Banggai" },
    { value: "Banggai Kepulauan", label: "Banggai Kepulauan" },
    { value: "Bangka", label: "Bangka" },
    { value: "Bangka Barat", label: "Bangka Barat" },
    { value: "Bangka Selatan", label: "Bangka Selatan" },
    { value: "Bangka Tengah", label: "Bangka Tengah" },
    { value: "Bangkalan", label: "Bangkalan" },
    { value: "Bangli", label: "Bangli" },
    { value: "Banjar", label: "Banjar" },
    { value: "Banjar Baru", label: "Banjar Baru" },
    { value: "Banjarmasin", label: "Banjarmasin" },
    { value: "Banjarnegara", label: "Banjarnegara" },
    { value: "Bantaeng", label: "Bantaeng" },
    { value: "Bantul", label: "Bantul" },
    { value: "Banyuasin", label: "Banyuasin" },
    { value: "Banyumas", label: "Banyumas" },
    { value: "Banyuwangi", label: "Banyuwangi" },
    { value: "Barito Kuala", label: "Barito Kuala" },
    { value: "Barito Selatan", label: "Barito Selatan" },
    { value: "Barito Timur", label: "Barito Timur" },
    { value: "Barito Utara", label: "Barito Utara" },
    { value: "Barru", label: "Barru" },
    { value: "Batam", label: "Batam" },
    { value: "Batang", label: "Batang" },
    { value: "Batang Hari", label: "Batang Hari" },
    { value: "Batu", label: "Batu" },
    { value: "Baturaja", label: "Baturaja" },
    { value: "Bekasi", label: "Bekasi" },
    { value: "Belitung", label: "Belitung" },
    { value: "Belitung Timur", label: "Belitung Timur" },
    { value: "Belu", label: "Belu" },
    { value: "Bener Meriah", label: "Bener Meriah" },
    { value: "Bengkalis", label: "Bengkalis" },
    { value: "Bengkayang", label: "Bengkayang" },
    { value: "Bengkulu", label: "Bengkulu" },
    { value: "Bengkulu Selatan", label: "Bengkulu Selatan" },
    { value: "Bengkulu Tengah", label: "Bengkulu Tengah" },
    { value: "Bengkulu Utara", label: "Bengkulu Utara" },
    { value: "Berau", label: "Berau" },
    { value: "Biak Numfor", label: "Biak Numfor" },
    { value: "Bima", label: "Bima" },
    { value: "Bintan", label: "Bintan" },
    { value: "Bireuen", label: "Bireuen" },
    { value: "Bitung", label: "Bitung" },
    { value: "Blitar", label: "Blitar" },
    { value: "Blora", label: "Blora" },
    { value: "Boalemo", label: "Boalemo" },
    { value: "Bogor", label: "Bogor" },
    { value: "Bojonegoro", label: "Bojonegoro" },
    { value: "Bolaang Mongondow", label: "Bolaang Mongondow" },
    { value: "Bolaang Mongondow Selatan", label: "Bolaang Mongondow Selatan" },
    { value: "Bolaang Mongondow Timur", label: "Bolaang Mongondow Timur" },
    { value: "Bolaang Mongondow Utara", label: "Bolaang Mongondow Utara" },
    { value: "Bombana", label: "Bombana" },
    { value: "Bondowoso", label: "Bondowoso" },
    { value: "Bone", label: "Bone" },
    { value: "Bone Bolango", label: "Bone Bolango" },
    { value: "Bontang", label: "Bontang" },
    { value: "Boven Digoel", label: "Boven Digoel" },
    { value: "Boyolali", label: "Boyolali" },
    { value: "Brebes", label: "Brebes" },
    { value: "Bulukumba", label: "Bulukumba" },
    { value: "Bulungan", label: "Bulungan" },
    { value: "Bungo", label: "Bungo" },
    { value: "Buol", label: "Buol" },
    { value: "Buru", label: "Buru" },
    { value: "Buru Selatan", label: "Buru Selatan" },
    { value: "Buton", label: "Buton" },
    { value: "Buton Selatan", label: "Buton Selatan" },
    { value: "Buton Tengah", label: "Buton Tengah" },
    { value: "Buton Utara", label: "Buton Utara" },
    { value: "Ciamis", label: "Ciamis" },
    { value: "Cianjur", label: "Cianjur" },
    { value: "Cilacap", label: "Cilacap" },
    { value: "Cilegon", label: "Cilegon" },
    { value: "Cimahi", label: "Cimahi" },
    { value: "Cirebon", label: "Cirebon" },
];

export default function App() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className="w-full max-w-sm pb-4">
            <Select
                placeholder="Pilih Provinsi"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={provinces}
            />
            <div className="py-4">
                <Select
                    placeholder="Pilih Kabupaten"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={kabupatenKota}
                />
            </div>
        </div>
    );
}
