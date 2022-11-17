const starData = [
    {
      nameKo: "처녀자리",
      nameLt: "Virgo",
      nameEn: "the Virgin",
      whereSee: "적경 13h 20m, 적위 -2°",
      whenMeridian: "2022-06-05 T21:00",
      numOfStar: "99개",
      size: "1294.428sr(2위)",
      tags: ["봄철 밤하늘 별자리","황도 제6궁"],
      emoji: "♍",
      file:"./img/vergino.jpg"
    },
    {
      nameKo: "거문고자리",
      nameLt: "Lyra",
      nameEn: "the Harp",
      whereSee: "적경 18h 45m, 적위 +36°",
      whenMeridian: "2022-08-27 T21:00",
      numOfStar: "35개",
      size: "286.476sr(52위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/lyra.webp"
    },
    {
      nameKo: "독수리자리",
      nameLt: "Aquila",
      nameEn: "the Eagle",
      whereSee: "적경 19h 30m, 적위 +2°",
      whenMeridian: "2022-09-08 T21:00",
      numOfStar: "70개",
      size: "652.473sr(22위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/aquila.jpg"
    },
    {
      nameKo: "뱀자리",
      nameLt: "Serpens",
      nameEn: "the Snake",
      whereSee: "적경 15h 35m, 적위 +8°",
      whenMeridian: "2022-07-10 T21:00",
      numOfStar: "54개",
      size: "636.928sr(23위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/Serpens.png"
    },
    {
      nameKo: "페가수스자리",
      nameLt: "Pegasus",
      nameEn: "the Winged Horse",
      whereSee: "적경 22h 30m, 적위 +17°",
      whenMeridian: "2022-10-23 T21:00",
      numOfStar: "98개",
      size: "1120.794sr(7위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/pegasus.jpg"
    },
    {
      nameKo: "물병자리",
      nameLt: "Aquarius",
      nameEn: "the Water-Man",
      whereSee: "적경 22h 20m, 적위 -13°",
      whenMeridian: "2022-10-20 T21:00",
      numOfStar: "96개",
      size: "979.854sr(10위)",
      tags: ["가을철 밤하늘 별자리","황도 제11궁"],
      emoji: "♒",
      file:"./img/aquarius.jpg"
    },
    {
      nameKo: "도마뱀자리",
      nameLt: "Lacerta",
      nameEn: "the Lizard",
      whereSee: "적경 22h 25m, 적위 +43°",
      whenMeridian: "2022-10-22 오후 T21:00",
      numOfStar: "36개",
      size: "200.688sr(68위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/lacerta.jpg"
    },
    {
      nameKo: "쌍둥이자리",
      nameLt: "Gemini",
      nameEn: "the Twins",
      whereSee: "적경 7h 00m, 적위 +22°",
      whenMeridian: "2022-03-01 T21:00",
      numOfStar: "75개",
      size: "513.761sr(30위)",
      tags: ["겨울철 밤하늘 별자리","황도 제3궁"],
      emoji: "♊",
      file:"./img/gemini.jpg"
    },
    {
      nameKo: "오리온자리",
      nameLt: "Orion",
      nameEn: "the Great Hunter",
      whereSee: "적경 5h 20m, 적위 +3°",
      whenMeridian: "2022-02-03 T21:00",
      numOfStar: "125개",
      size: "594.120sr(26위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/orion.jpg"
    },
    {
      nameKo: "케페우스자리",
      nameLt: "Cepheus",
      nameEn: "Cepheus, the king",
      whereSee: "적경 22h 00m, 적위 +70°",
      whenMeridian: "2022-10-15 T21:00",
      numOfStar: "96개",
      size: "587.787sr(27위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/cephus.jpg"
    },
    {
      nameKo: "까마귀자리",
      nameLt: "Corvus",
      nameEn: "the Crow",
      whereSee: "적경 12h 20m, 적위 -18°",
      whenMeridian: "2022-05-21 T21:00",
      numOfStar: "18개 / 17개",
      size: "183.801sr(70위) / 282.398sr(53위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/corvus.jpg"
    },
    {
      nameKo: "마차부자리",
      nameLt: "Auriga",
      nameEn: "the Charioteer, the Waggoner",
      whereSee: "적경 6h 00m, 적위 +42°",
      whenMeridian: "2022-02-13 T21:00",
      numOfStar: "78개",
      size: "657.438sr(21위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/auriga.jpg",
    },
    {
      nameKo: "작은개자리",
      nameLt: "Canis Minor",
      nameEn: "the Little Dog",
      whereSee: "적경 7h 30m, 적위 +6°",
      whenMeridian: "2022-03-09 T21:00",
      numOfStar: "25개",
      size: "183.367sr(71위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/canis.jpg",
    },
    {
      nameKo: "바다뱀자리",
      nameLt: "Hydra",
      nameEn: "the Sea Serpent, the Water Monster",
      whereSee: "적경 10h 30m, 적위 -20°",
      whenMeridian: "2022-04-23 T21:00",
      numOfStar: "126개",
      size: "1302.844sr(1위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/hydra.jpg",
    },
    {
      nameKo: "돌고래자리",
      nameLt: "Delphinus",
      nameEn: "the Dolphin",
      whereSee: "적경 20h 35m, 적위 +12°",
      whenMeridian: "2022-09-24 T21:00",
      numOfStar: "19개",
      size: "188.549sr(69위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/delphinus.jpg",
    },
    {
      nameKo: "안드로메다자리",
      nameLt: "Andromeda",
      nameEn: "the Chained Lady, the Chained Woman",
      whereSee: "적경 0h 40m, 적위 +38°",
      whenMeridian: "2022-11-25 T21:00",
      numOfStar: "84개",
      size: "722.278sr(19위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/andromeda.jpg",
    },
    {
      nameKo: "황소자리",
      nameLt: "Taurus",
      nameEn: "the Bull",
      whereSee: "적경 4h 30m, 적위 +18°",
      whenMeridian: "2022-01-22 T21:00",
      numOfStar: "143개",
      size: "797.249sr(17위)",
      tags: ["겨울철 밤하늘 별자리","황도 제2궁"],
      emoji: "♉",
      file:"./img/taurus.jpg",
    },
    {
      nameKo: "큰곰자리",
      nameLt: "Ursa Major",
      nameEn: "the Great Bear",
      whereSee: "적경 11h 00m, 적위 +58°",
      whenMeridian: "2022-05-01 T21:00",
      numOfStar: "126개",
      size: "1279.660sr(3위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/ursa_major.jpg",
    },
    {
      nameKo: "용자리",
      nameLt: "Draco",
      nameEn: "the Dragon",
      whereSee: "적경 17h 00m, 적위 +60°",
      whenMeridian: "2022-07-31 T21:00",
      numOfStar: "123개",
      size: "1082.952sr(8위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/draco.jpg",
    },
    {
      nameKo: "카시오페이아자리",
      nameLt: "Cassiopeia",
      nameEn: "Cassiopeia",
      whereSee: "적경 1h 00m, 적위 +60°",
      whenMeridian: "2022-11-30 T21:00",
      numOfStar: "94개",
      size: "598.407sr(25위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/cassiopeia.jpg",
    },
    {
      nameKo: "머리털자리",
      nameLt: "Coma Berenices",
      nameEn: "the Hair of Berenice",
      whereSee: "적경 12h 40m, 적위 +23°",
      whenMeridian: "2022-05-26 T21:00",
      numOfStar: "38개",
      size: "386.475sr(42위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/Coma_Berenices.jpg",
    },
    {
      nameKo: "사냥개자리",
      nameLt: "Canes Venatici",
      nameEn: "the Hunting Dogs",
      whereSee: "적경 13h 00m, 적위 +40°",
      whenMeridian: "2022-05-31 T21:00",
      numOfStar: "32개",
      size: "465.194sr(38위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/canes-venatici.jpg",
    },
    {
      nameKo: "천칭자리",
      nameLt: "Libra",
      nameEn: "the Balance, the Scale",
      whereSee: "적경 15h 10m, 적위 -14°",
      whenMeridian: "2022-07-04 T21:00",
      numOfStar: "50개",
      size: "538.052sr(29위)",
      tags: ["봄철 밤하늘 별자리","황도 제7궁"],
      emoji: "♎",
      file:"./img/libra.jpg",
    },
    {
      nameKo: "살쾡이자리",
      nameLt: "Lynx",
      nameEn: "the Lynx",
      whereSee: "적경 7h 50m, 적위 +45°",
      whenMeridian: "2022-03-14 T21:00",
      numOfStar: "61개",
      size: "545.386sr(28위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/lynx.jpg",
    },
    {
      nameKo: "궁수자리",
      nameLt: "Sagittarius",
      nameEn: "the Archer",
      whereSee: "적경 19h 00m, 적위 -25°",
      whenMeridian: "2022-08-31 T21:00",
      numOfStar: "113개",
      size: "867.432sr(15위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/sagittarius.jpg",
    },
    {
      nameKo: "백조자리",
      nameLt: "Cygnus",
      nameEn: "the Swan",
      whereSee: "적경 20h 30m, 적위 +43°",
      whenMeridian: "2022-09-23 T21:00",
      numOfStar: "139개",
      size: "803.983sr(16위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/swan.jpg"
    },
    {
      nameKo: "염소자리",
      nameLt: "Capricornus",
      nameEn: "the Sea Goat the Goathorn",
      whereSee: "적경 20h 50m, 적위 -20°",
      whenMeridian: "2022-09-28 T21:00",
      numOfStar: "47개",
      size: "413.947sr(40위)",
      tags: ["여름철 밤하늘 별자리","황도 제10궁"],
      emoji: "♑",
      file:"./img/capricornus.jpg",
    },
    {
      nameKo: "전갈자리",
      nameLt: "Scorpius",
      nameEn: "the Scorpion",
      whereSee: "적경 16h 20m, 적위 -6°",
      whenMeridian: "2022-07-21 T21:00",
      numOfStar: "101개",
      size: "496.783sr(33위)",
      tags: ["여름철 밤하늘 별자리","황도 제8궁"],
      emoji: "♏",
      file:"./img/scorpio.jpg",
    },
    {
      nameKo: "헤르쿨레스자리",
      nameLt: "Hercules",
      nameEn: "Hercules",
      whereSee: "적경 17h 10m, 적위 +27°",
      whenMeridian: "2022-08-03 T21:00",
      numOfStar: "142개",
      size: "1225.148sr(5위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/hercules.jpg",
    },
    {
      nameKo: "작은여우자리",
      nameLt: "Vulpecula",
      nameEn: "the Little Fox",
      whereSee: "적경 20h 10m, 적위 +25°",
      whenMeridian: "2022-09-18 T21:00",
      numOfStar: "45개",
      size: "268.165sr(55위)",
      tags: ["여름철 밤하늘 별자리","황도 제9궁"],
      emoji: "♐",
      file:"./img/vulpecula.jpg",
    },
    {
      nameKo: "고래자리",
      nameLt: "Cetus",
      nameEn: "the Whale",
      whereSee: "적경 1h 45m, 적위 -12°",
      whenMeridian: "2022-12-11 T21:00",
      numOfStar: "110개",
      size: "1231.411sr(4위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/cetus.jpg",
    },
    {
      nameKo: "물고기자리",
      nameLt: "Pisces",
      nameEn: "the Fishes",
      whereSee: "적경 0h 20m, 적위 +10°",
      whenMeridian: "2022-11-20 T21:00",
      numOfStar: "81개",
      size: "889.417sr(14위)",
      tags: ["가을철 밤하늘 별자리","황도 제12궁"],
      emoji: "♓",
      file:"./img/pisces.jpg",
    },
    {
      nameKo: "페르세우스자리",
      nameLt: "Perseus",
      nameEn: "Perseus",
      whereSee: "적경 3h 20m, 적위 +42°",
      whenMeridian: "2022-01-04 T21:00",
      numOfStar: "98개",
      size: "614.997sr(24위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/perseus.jpg",
    },
    {
      nameKo: "양자리",
      nameLt: "Aries",
      nameEn: "the Ram",
      whereSee: "적경 2h 30m, 적위 +20°",
      whenMeridian: "2022-12-25 T21:00",
      numOfStar: "56개",
      size: "441.395sr(39위)",
      tags: ["가을철 밤하늘 별자리","황도 제1궁"],
      emoji: "♈",
      file:"./img/aries.png",
    },
    {
      nameKo: "게자리",
      nameLt: "Cancer",
      nameEn: "the Crab",
      whereSee: "적경 8h 30m, 적위 +20°",
      whenMeridian: "2022-03-24 T21:00",
      numOfStar: "52개",
      size: "505.872sr(31위)",
      tags: ["겨울철 밤하늘 별자리","황도 제4궁"],
      emoji: "♋",
      file:"./img/cancer.jpg",
    },
    {
      nameKo: "에리다누스자리",
      nameLt: "Eridanus",
      nameEn: "the River, River Eridanus",
      whereSee: "적경 3h 50m, 적위 -30°",
      whenMeridian: "2022-01-12 T21:00",
      numOfStar: "129개",
      size: "1137.919sr(6위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/eridanus.jpg",
    },
    {
      nameKo: "토끼자리",
      nameLt: "Lepus",
      nameEn: "the Hare",
      whereSee: "적경 5h 25m, 적위 -20°",
      whenMeridian: "2022-02-04 T21:00",
      numOfStar: "46개",
      size: "290.291sr(51위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/lepus.jpg",
    },
    {
      nameKo: "큰개자리",
      nameLt: "Canis Major",
      nameEn: "the Greater Dog",
      whereSee: "적경 6h 40m, 적위 -24°",
      whenMeridian: "2022-02-24 T21:00",
      numOfStar: "87개",
      size: "380.118sr(43위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/canis-major.jpg",
    },
    {
      nameKo: "사자자리",
      nameLt: "Leo",
      nameEn: "the Lion",
      whereSee: "적경 10h 30m, 적위 +15°",
      whenMeridian: "2022-04-23 T21:00",
      numOfStar: "80개",
      size: "946.964sr(12위)",
      tags: ["봄철 밤하늘 별자리","황도 제5궁"],
      emoji: "♌",
      file:"./img/leo.jpg",
    },
    {
      nameKo: "목동자리",
      nameLt: "Bootes",
      nameEn: "the Herdsman",
      whereSee: "적경 14h 35m, 적위 +30°",
      whenMeridian: "2022-06-24 T21:00",
      numOfStar: "86개",
      size: "906.831sr(13위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/bootes.jpg",
    }
  ];