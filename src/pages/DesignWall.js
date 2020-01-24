
import React, { Component } from "react"
import { Link } from "gatsby"
import styles from "./DesignWall.module.css"
import Layout from "../components/layout"
import Container from '../components/container'
import pdf from '../pdf1/designwall.pdf'
import DesignWallWrapper from '../components/DesignWallWrapper'

import wood from '../images/designWall/Antique Wood/woodPanel.jpg'
import wood1 from '../images/designWall/Antique Wood/wood1.jpg'
import wood2 from '../images/designWall/Antique Wood/wood2.jpg'
import wood3 from '../images/designWall/Antique Wood/wood3.jpg'
import wood4 from '../images/designWall/Antique Wood/wood4.jpg'

import stones from '../images/designWall/Stones/stones.jpg'
import stones1 from '../images/designWall/Stones/stones1.jpg'
import stones2 from '../images/designWall/Stones/stones2.jpg'
import stones3 from '../images/designWall/Stones/stones3.jpg'

import kitten from '../images/designWall/Kitten1/kitten.jpg'
import kitten1 from '../images/designWall/Kitten1/kitten1.jpg'


import knock from '../images/designWall/Knock/knock.jpg'
import knock1 from '../images/designWall/Knock/knock1.jpg'
import knock2 from '../images/designWall/Knock/knock2.jpg'
import knock3 from '../images/designWall/Knock/knock3.jpg'

import twilight from '../images/designWall/Twilight/twilight.jpg'
import twilight1 from '../images/designWall/Twilight/twilight1.jpg'

import stonewall from '../images/designWall/Stonewall/stonewall.jpg'
import stonewall1 from '../images/designWall/Stonewall/stonewall1.jpg'

import autumn from '../images/designWall/Autumn/autumn.jpg'
import autumn1 from '../images/designWall/Autumn/autumn.jpg'

import concrete from '../images/designWall/Concrete/concrete.jpg'
import concrete1 from '../images/designWall/Concrete/concrete1.jpg'

import silhuette from '../images/designWall/Silhuette/silhuette.jpg'
import silhuette1 from '../images/designWall/Silhuette/silhuette1.jpg'

import gate from '../images/designWall/Gate/gate.jpg'
import gate1 from '../images/designWall/Gate/gate1.jpg'

import hole from '../images/designWall/Hole/hole.jpg'
import hole1 from '../images/designWall/Hole/hole1.jpg'

import forest from '../images/designWall/Forest/forest.jpg'
import forest1 from '../images/designWall/Forest/forest1.jpg'

import world from '../images/designWall/World/world.jpg'
import world1 from '../images/designWall/World/world1.jpg'

import miami from '../images/designWall/M/m.jpg'
import miami1 from '../images/designWall/M/m1.jpg'

import kitten2 from '../images/designWall/Kitten2/kitten2.jpg'

import puppy from '../images/designWall/Puppy/puppy.jpg'
import puppy1 from '../images/designWall/Puppy/puppy1.jpg'

import library from '../images/designWall/Library/library.jpg'
import library1 from '../images/designWall/Library/library1.jpg'

import teddy from '../images/designWall/Teddy/teddy.jpg'
import teddy1 from '../images/designWall/Teddy/teddy1.jpg'

import waterside from '../images/designWall/Waterside/waterside.jpg'
import waterside1 from '../images/designWall/Waterside/waterside1.jpg'

import brickwall from '../images/designWall/BrickWall/brickwall.jpg'
import brickwall1 from '../images/designWall/BrickWall/brickwall1.jpg'

import formwork from '../images/designWall/Formwork/formwork.jpg'
import formwork1 from '../images/designWall/Formwork/formwork1.jpg'

import gray from '../images/designWall/Gray/gray.jpg'
import gray1 from '../images/designWall/Gray/gray1.jpg'





class DesignWall extends Component {





    render() {


        let panels = [
            {
                img: wood,
                name: 'Antique wood',
                description: ['Dekor jest dostosowany do 4 płyt. 2 płyty w paczce. ',
                    'Możesz wybrać dekor 1 lub 2, patrz nr art. lub zamontować wszystkie cztery płyty i uzyskać',
                    'dekoracyjną ścianę 2400 mm. ',
                    ' ',
                    'Typ panelu: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: maks. 4 szt.',
                    'Nr art.: 1 nr art. 204101;2 nr art. 204102'
                ],



                colors: [
                    {
                        img: wood1,


                    },
                    {
                        img: wood2,


                    },
                    {
                        img: wood3,


                    },
                    {
                        img: wood4,


                    },
                ]
            },
            {
                img: stones,
                name: 'Stones',
                description: [
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdego panelu: 11x620x2390 mm',
                    'Liczba płyt: 1 szt.',
                    'Nr art.: 204123'
                ],



                colors: [
                    {
                        img: stones1,


                    },
                    {
                        img: stones2,


                    },
                    {
                        img: stones3,


                    }
                ]
            },
            {
                img: kitten,
                name: 'KItten 1',
                description: [
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: 1 szt.',
                    'Nr art.: 204115'
                ],



                colors: [
                    {
                        img: kitten1,


                    }
                ]
            },
            {
                img: knock,
                name: 'Knock on wood',
                description: [
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: 2 szt.',
                    'Nr art.: 204120'
                ],



                colors: [
                    {
                        img: knock1,


                    },
                    {
                        img: knock2,


                    },
                    {
                        img: knock3,


                    }
                ]
            },
            {
                img: twilight,
                name: 'Twilight',
                description: [
                    'Dekor jest dostosowany do 4 płyt. 2 płyty w paczce. ',
                    'Możesz wybrać dekor 1 lub 2, patrz nr art. lub zamontować wszystkie cztery płyty i uzyskać',
                    'dekoracyjną ścianę 2400 mm. ',
                    ' ',
                    'Typ płyty: Płyta Huntonit Fas struktura 8 panelowa',
                    'Rozmiar płyty: 11x620x2390 mm',
                    'Liczba płyt: maks. 4 szt.',
                    'Nr art.: 1 nr art. 204130;2 nr art. 204131 '
                ],



                colors: [
                    {
                        img: twilight1,


                    }
                ]
            },
            {
                img: stonewall,
                name: 'Stonewall',
                description: [
                    'Dekor jest dostosowany do 4 płyt. Nakładany bezpośrednio na płycie ściennej Huntonit Antikk.  ',
                    'Pióro-wpust idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                    'Możesz wybrać dekor 1 lub 2, patrz nr art. lub zamontować wszystkie cztery płyty i uzyskać',
                    ' dekoracyjną ścianę 2400 mm. ',
                    '',
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: maks. 4 szt.',
                    'Nr art.: 1 nr art. 204125;2 nr art. 204126'
                ],



                colors: [
                    {
                        img: stonewall1,


                    }
                ]
            },
            {
                img: autumn,
                name: 'Norwegian autumn',
                description: [
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: 2 szt.',
                    'Nr art.: 204119'
                ],



                colors: [
                    {
                        img: autumn1,


                    }
                ]
            },
            {
                img: concrete,
                name: 'Concrete',
                description: [
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: 3 szt.',
                    'Nr art.: 204105'
                ],



                colors: [
                    {
                        img: concrete1,


                    }
                ]
            },
            {
                img: silhuette,
                name: 'Silhuette',
                description: [
                    'Male ',
                    '-1 płyta',
                    '-szerokość 60 cm, ',
                    '-nr art. 204117',
                    ' ',
                    'Female ',
                    '-2 płyty ',
                    '-szerokość 120 cm, ',
                    '-nr art. 204118 ',
                    ' ',
                    'Pióro-wpust idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                    ' ',
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: maks. 3 szt.',


                ],



                colors: [
                    {
                        img: silhuette1,


                    }
                ]
            },
            {
                img: gate,
                name: 'Golden Gate',
                description: [
                    'Dekor jest dostosowany do 4 płyt. Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
                    'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                    ' ',
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: maks. 4 szt.',
                    'Nr art.: 204110'


                ],



                colors: [
                    {
                        img: gate1,


                    }
                ]
            },
            {
                img: hole,
                name: 'Hole in wall',
                description: [
                    'Dekor jest dostosowany do 4 płyt. Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
                    'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                    'Dekor wywołuje niesamowite, trójwymiarowe wrażenie wizualne.',
                    ' ',
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: maks. 4 szt.',
                    'Nr art.: 204132',

                ],



                colors: [
                    {
                        img: hole1,


                    }
                ]
            },
            {
                img: forest,
                name: 'Forest',
                description: [
                    'Dekor emitujący naturalny brzozowy las jest dostosowany do 4 płyt. ',
                    'Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
                    'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                    ' ',
                    'Typ płyty: Płyta Huntonit Antikk',
                    'Rozmiar każdej płyty: 11x620x2390 mm',
                    'Liczba płyt: maks. 4 szt.',
                    'Nr art.: 204127'

                ],



                colors: [
                    {
                        img: forest1,


                    }
                ]
            },
            {
                img: world,
                name: 'The World',
                description: [
                   'Dekor przedstawiający zabytkową wersję mapy świata. Jest dostosowany do 5 płyt. ',
                   'Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
                   'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                   ' ',
                   'Typ płyty: Płyta Huntonit Antikk',
                   'Rozmiar każdej płyty: 11x620x2390 mm',
                   'Liczba płyt: maks. 5 szt.',
                   'Nr art.: 204133',

                ],



                colors: [
                    {
                        img: world1,


                    }
                ]
            },
            {
                img: miami,
                name: 'Miami Skyline',
                description: [
                 'Dekor jest dostosowany do 6 płyt. ',
                 'Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
                 'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                 ' ',
                 'Typ płyty: Płyta Huntonit Antikk',
                 'Rozmiar każdej płyty: 11x620x2390 mm',
                 'Liczba płyt: maks. 6 szt.',
                 'Nr art.: 204121'

                ],



                colors: [
                    {
                        img: miami1,


                    }
                ]
            },
            {
                img: kitten2,
                name: 'Kitten 2',
                description: [
                 'Dekor jest dostosowany do 1 płyty. ',
                 'Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
                 'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                 ' ',
                 'Typ płyty: Płyta Huntonit Antikk',
                 'Rozmiar każdej płyty: 11x620x2390 mm',
                 'Liczba płyt: maks. 1 szt.',
                 'Nr art.: 204116'

                ],



                colors: [
                    {
                        img: kitten2,


                    }
                ]
            },
            {
                img: puppy,
                name: 'Puppy',
                description: [
                'Dekor jest dostosowany do 1 płyty. ',
                'Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
                'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                'Obiekt na dekorze jest umieszczony nieco powyżej dolnej części płyty, w celu uniknięcia zakrycia',
                'go przez listwę podłogową.',
                ' ',
                'Typ płyty: Płyta Huntonit Antikk',
                'Rozmiar każdej płyty: 11x620x2390 mm',
                'Liczba płyt: maks. 1 szt.',
                'Nr art.: 204122'

                ],



                colors: [
                    {
                        img: puppy1,


                    }
                ]
            },
            {
                img: library,
                name: 'Library',
                description: [
                'Dekor jest dostosowany do 4 płyt. Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
                'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
                ' ',
                'Typ płyty: Płyta Huntonit Antikk',
                'Rozmiar każdej płyty: 11x620x2390 mm',
                'Liczba płyt: maks. 4 szt.',
                'Nr art.: 204138'

                ],



                colors: [
                    {
                        img: library1,


                    }
                ]
            },
            {
                img: teddy,
                name: 'Teddy',
                description: [
              'Dekor jest dostosowany do 1 płyty. Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
              'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
              ' ',
              'Typ płyty: Płyta Huntonit Antikk',
              'Rozmiar każdej płyty: 11x620x2390 mm',
              'Liczba płyt: maks. 1 szt.',
              'Nr art.: 204136'

                ],



                colors: [
                    {
                        img: teddy1,


                    }
                ]
            },
            {
                img: waterside,
                name: 'Waterside',
                description: [
             'Dekor jest dostosowany do 2 płyt. Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
             'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
             ' ',
             'Typ płyty: Płyta Huntonit Antikk',
             'Rozmiar każdej płyty: 11x620x2390 mm',
             'Liczba płyt: maks. 2 szt.',
             'Nr art.: 204137'

                ],



                colors: [
                    {
                        img: waterside1,


                    }
                ]
            },
            {
                img: brickwall,
                name: 'Brick Wall',
                description: [
           'Dekor emitujący ścianę z cegieł jest dostosowany od 2 do 6 płyt. ',
           'Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
           'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
           'Należy pamiętać, że przy ilościach większych niż 2 płyty stosuje się numerację poszczególnych',
           'płyt, aby dopasować wzór.',
           ' ',
           'Typ płyty: Płyta Huntonit Antikk',
           'Rozmiar każdej płyty: 11x620x2390 mm',
           'Liczba płyt: maks. 6 szt.',
           'Nr art.:',
           '2 pierwsze płyty: 204143, ',
           '2 środkowe płyty: 204144,',
           '2 końcowe płyty: 204145 '

                ],



                colors: [
                    {
                        img: brickwall1,


                    }
                ]
            },
            {
                img: formwork,
                name: 'Formwork',
                description: [
           'Dekor emituje drewno w odcieniach szarości i jest dostosowany do 4 płyt. Nakładany bezpośrednio na',
           'płycie ściennej Huntonit Antikk. ',
           'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
           'Dekoracja idealnie pasuje jako kontrast w większości pomieszczeń.',
           ' ',
           'Typ płyty: Płyta Huntonit Antikk',
           'Rozmiar każdej płyty: 11x620x2390 mm',
           'Liczba płyt: maks. 4 szt.',
           'Nr art.:',
           '2 początkowe płyty 204141',
           '2 końcowe płyty 204142'

                ],



                colors: [
                    {
                        img: formwork1,


                    }
                ]
            },
            {
                img: gray,
                name: 'Gray Concrete',
                description: [
           'Dekor emituje szary, surowy beton i jest dostosowany do 4 płyt. ',
           'Nakładany bezpośrednio na płycie ściennej Huntonit Antikk. ',
           'Dzięki pióro-wpuście idealnie pasuje do wszystkich standardowych płyt ściennych Huntonit.',
            'Możesz wybrać dekor 1 lub 2, patrz nr art. lub zamontować wszystkie cztery płyty i uzyskać',
            'dekoracyjną ścianę 2400 mm.',
            ' ',
            'Typ płyty: Płyta Huntonit Antikk',
            'Rozmiar każdej płyty: 11x620x2390 mm',
            'Liczba płyt: maks. 4 szt.',
            'Nr art.: 1 nr art. 204139;2 nr art. 204140'

                ],



                colors: [
                    {
                        img: gray1,


                    }
                ]
            },

        ]



        return (
            <Layout>
                <Container>




                    <div className={styles.designWall}>

                        <div className={styles.header}>
                            <div className={styles.header__line}>

                            </div>
                            <h1>Design Wall</h1>
                            <div className={styles.header__logo}>

                            </div>
                        </div>
                        <div className={styles.section1}>
                            <div className={styles.section1__text}>
                                <p>Dekoracyjne, ścienne płyty z wybraną fotografią</p>
                                <ul>
                                    <li> Fotografia na ścianie</li>
                                    <li> Stwórz unikalną ścianę w swoim domu</li>
                                    <li> Szybki i prosty montaż</li>
                                    <li> Poznaj dekory, które tworzą wizerunek wnętrza <br />
                                        i nadają mu charakter</li>
                                    <li> Płyty z pióro-wpustem, co umożliwia <br />
                                        połączenie z innymi płytami ściennymi <br />
                                        Huntonit</li>
                                    <li> Wysoka jakość fotografii</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.section2}>
                            <p className={styles.section2__text}>
                                Stwórz unikalną ścianę, dzięki wizualizacji fotograficznej w pokoju dziecinnym, korytarzu, poczekalni, <br />
                                recepcji lub w najbardziej stylowym biurze. <br />
                                Produkt Huntonit Designwall jest dostarczany ze zdjęciami nałożonymi na płytach. <br />
                                Płyty są odporne na wilgoć i mogą być instalowane w kuchni, pralni i łazience poza strefą mokrą. <br />
                                Pomieszczenie powinno być dobrze wentylowane. <br />
                                Produkt jest odporny na duże wahania temperatury, dlatego jest bardzo dobrą alternatywą do <br />
                                instalacji w miejscach, które nie są ogrzewane przez cały czas. Designwall mają ten sam rdzeń <br />
                                z włókna drzewnego jak pozostałe produkty marki Huntonit. Płyty są dostępne w różnych dekorach <br />
                                i liczbie płyt. Możemy również dostarczyć produkt z wybranym zdjęciem z własnej kolekcji. <br />
                                <span className="bigger">Twoja wyobraźnia - Twój wybór!</span>  <br />
                                *Huntonit tworzy produkty naturalne, dlatego mogą wystąpić różnice w kolorze lub wyglądzie. <br />
                                Zalecamy, aby na powierzchni ściany stosować płyty z tej samej produkcji lub numeru partii. <br />
                                Mogą wystąpić odchylenia kolorów z powodu ustawień wyświetlacza. <br />
                            </p>
                        </div>

                        <div className={styles.wrapper__title}>Płyty ścienne Design Wall występują w wariantach:</div>
                        <DesignWallWrapper panels={panels} />
                        <div className={styles.mont}>
                            <a download='Instrukcja montażu płyt ściennych Design Wall' href={pdf}>Instrukcja montażu płyt ściennych Design Wall</a>
                        </div>
                    </div>


                </Container>
            </Layout>
        )
    }
}



export default DesignWall
