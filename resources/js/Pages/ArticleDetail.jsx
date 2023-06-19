import Badge from '@/Components/Badge'
import Directory from '@/Components/Directory'
import Footer from '@/Components/Footer'
import NavBar from '@/Components/NavBar'
import React from 'react'

export default function ArticleDetail() {
    return (
        <>
            <div className="bg-putih h-screen w-full">
                <NavBar />
                <Directory />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 pt-20 pb-32 md:px-16 lg:px-20">
                    <div className="grid col-span-6">
                        <div className="w-2/3 flex flex-col justify-between gap-10">
                            <h1 className="text-4xl text-hitam font-bold pt-10">
                                Pasangan Supportif Dapat Cegah Depresi
                            </h1>
                            <img
                                src="images/pasangan.jpg"
                                alt="Pasangan Supportif Dapat Cegah Depresi"
                            />
                            <div className="flex flex-col justify-between gap-4">
                                <h3 className="text-hitam text-2xl font-semibold">
                                    Pasangan
                                </h3>
                                <p className="text-hitam text-base">
                                    Lörem ipsum kompetenstrappa brorsantrick
                                    iskapet teleserat. Vattkoppsgodis julingar,
                                    fomo fast klimatlarm, beskade det vill säga
                                    vatrett. Krislåda mans, plad proligt liksom
                                    kramtjuv. Missmatchning vårdskuld, den nya
                                    ekonomin frågestrejka kadyssade.
                                    Vuxenmålarbok os då birad. Pseudossa
                                    mobilroman utom onijack plus makrolorat,
                                    prenera. Demisofi pseudoktigt dra ett streck
                                    i sanden, korsspråkande och suktiga prerysm.
                                    Spessade kor klimatstrejk e-cigarett. Resk
                                    trivodat res twerka. Miktiga osade hement
                                    emedan flexitarian och sohyvis. Sel besade
                                    vårdskuld. Iktiga ben agt. Paradade
                                    kamikazetips fast dydoren, om medelfili.
                                    Tetrarat trade, värdgraviditet, multinin.
                                    Doryr enkortsdator, ede kalkstenssångare
                                    dinde växtmjölk. Sarar exonar pimpa, val
                                    utan annonsblockerare alltså mervärdesmat.
                                    Gubbploga flitbonus pes. Askbränd
                                    hedersvåld, svenna sitt liv memil pimpa och
                                    teren. Nynön mälås conversesjukan
                                    datalektiker även om väggord. Dere grit
                                    multihäsm.
                                </p>
                                <h3 className="text-hitam text-2xl font-semibold">
                                    Cara menjalin
                                </h3>
                                <p className="text-hitam text-base">
                                    Lörem ipsum kompetenstrappa brorsantrick
                                    iskapet teleserat. Vattkoppsgodis julingar,
                                    fomo fast klimatlarm, beskade det vill säga
                                    vatrett. Krislåda mans, plad proligt liksom
                                    kramtjuv. Missmatchning vårdskuld, den nya
                                    ekonomin frågestrejka kadyssade.
                                    Vuxenmålarbok os då birad. Pseudossa
                                    mobilroman utom onijack plus makrolorat,
                                    prenera. Demisofi pseudoktigt dra ett streck
                                    i sanden, korsspråkande och suktiga prerysm.
                                    Spessade kor klimatstrejk e-cigarett. Resk
                                    trivodat res twerka. Miktiga osade hement
                                    emedan flexitarian och sohyvis. Sel besade
                                    vårdskuld. Iktiga ben agt. Paradade
                                    kamikazetips fast dydoren, om medelfili.
                                    Tetrarat trade, värdgraviditet, multinin.
                                    Doryr enkortsdator, ede kalkstenssångare
                                    dinde växtmjölk. Sarar exonar pimpa, val
                                    utan annonsblockerare alltså mervärdesmat.
                                    Gubbploga flitbonus pes. Askbränd
                                    hedersvåld, svenna sitt liv memil pimpa och
                                    teren. Nynön mälås conversesjukan
                                    datalektiker även om väggord. Dere grit
                                    multihäsm.
                                </p>
                                <h3 className="text-hitam text-2xl font-semibold">
                                    Cara menjalin
                                </h3>
                                <p className="text-hitam text-base">
                                    Lörem ipsum kompetenstrappa brorsantrick
                                    iskapet teleserat. Vattkoppsgodis julingar,
                                    fomo fast klimatlarm, beskade det vill säga
                                    vatrett. Krislåda mans, plad proligt liksom
                                    kramtjuv. Missmatchning vårdskuld, den nya
                                    ekonomin frågestrejka kadyssade.
                                    Vuxenmålarbok os då birad. Pseudossa
                                    mobilroman utom onijack plus makrolorat,
                                    prenera. Demisofi pseudoktigt dra ett streck
                                    i sanden, korsspråkande och suktiga prerysm.
                                    Spessade kor klimatstrejk e-cigarett. Resk
                                    trivodat res twerka. Miktiga osade hement
                                    emedan flexitarian och sohyvis. Sel besade
                                    vårdskuld. Iktiga ben agt. Paradade
                                    kamikazetips fast dydoren, om medelfili.
                                    Tetrarat trade, värdgraviditet, multinin.
                                    Doryr enkortsdator, ede kalkstenssångare
                                    dinde växtmjölk. Sarar exonar pimpa, val
                                    utan annonsblockerare alltså mervärdesmat.
                                    Gubbploga flitbonus pes. Askbränd
                                    hedersvåld, svenna sitt liv memil pimpa och
                                    teren. Nynön mälås conversesjukan
                                    datalektiker även om väggord. Dere grit
                                    multihäsm.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid col-span-6">
                        <div className="w-1/3">
                            <Badge titleBadge="Depresi" />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}
