const starData = [
    {
      nameKo: "처녀자리",
      nameLt: "Virgo",
      nameEn: "the Virgin",
      whereSee: "적경 13h 20m, 적위 -2°",
      whenMeridian: "2022-06-05",
      numOfStar: "99개",
      size: "1294.428sr(2위)",
      tags: ["봄철 밤하늘 별자리","황도 제6궁"],
      emoji: "♍",
      file:"./img/vergino.jpg",
      south:"2022-05-25T21:00",
      desc:"두 개의 밀 이삭을 가지고 있는 처녀 형태를 띠는 황도 제6궁의 별자리. ",
    },
    {
      nameKo: "거문고자리",
      nameLt: "Lyra",
      nameEn: "the Harp",
      whereSee: "적경 18h 45m, 적위 +36°",
      whenMeridian: "2022-08-27",
      numOfStar: "35개",
      size: "286.476sr(52위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/lyra.webp",
      south:"2022-08-15TT21:00",
      desc:"고대 그리스의 현악기인 리라(Lyra)의 형태를 한 별자리. 고대 그리스 신화에서는 오르페우스의 악기로 등장한다.",
    },
    {
      nameKo: "독수리자리",
      nameLt: "Aquila",
      nameEn: "the Eagle",
      whereSee: "적경 19h 30m, 적위 +2°",
      whenMeridian: "2022-09-08",
      numOfStar: "70개",
      size: "652.473sr(22위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/aquila.jpg",
      south:"2022-08-30T21:00",
      desc:"독수리가 날개를 펼친 형상을 한 별자리. 고대 그리스 신화에는 제우스에 속한 새라 기록되어 있다.",
    },
    {
      nameKo: "뱀자리",
      nameLt: "Serpens",
      nameEn: "the Snake",
      whereSee: "적경 15h 35m, 적위 +8°",
      whenMeridian: "2022-07-10",
      numOfStar: "54개",
      size: "636.928sr(23위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/Serpens.png",
      south:"2022-06-30T21:00",
      desc:"뱀의 머리와 꼬리 둘로 나뉘어 뱀을 그리고 있는 형태의 별자리. 둘 사이에는 뱀주인자리가 뱀을 잡고 있는 형태를 띠고 있다.",
    },
    {
      nameKo: "페가수스자리",
      nameLt: "Pegasus",
      nameEn: "the Winged Horse",
      whereSee: "적경 22h 30m, 적위 +17°",
      whenMeridian: "2022-10-23",
      numOfStar: "98개",
      size: "1120.794sr(7위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/pegasus.jpg",
      south:"2022-10-20T21:00",
      desc:"그리스 신화 속 날개 달린 말인 페가수스의 형태를 띠는 별자리.",
    },
    {
      nameKo: "물병자리",
      nameLt: "Aquarius",
      nameEn: "the Water-Man",
      whereSee: "적경 22h 20m, 적위 -13°",
      whenMeridian: "2022-10-20",
      numOfStar: "96개",
      size: "979.854sr(10위)",
      tags: ["가을철 밤하늘 별자리","황도 제11궁"],
      emoji: "♒",
      file:"./img/aquarius.jpg",
      south:"2022-10-10T21:00",
      desc:"그리스 신화 속 가니메데가 들고 있는 물병으로 묘사되는 별자리.",
    },
    {
      nameKo: "도마뱀자리",
      nameLt: "Lacerta",
      nameEn: "the Lizard",
      whereSee: "적경 22h 25m, 적위 +43°",
      whenMeridian: "2022-10-22",
      numOfStar: "36개",
      size: "200.688sr(68위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/lacerta.jpg",
      south:"2022-10-10T21:00",
      desc:"작은 W형태로, 카시오페아자리와 비슷한 형태를 가지고 있는 별자리. 한 쪽 끝이 은하수와 겹쳐져 있다.",
    },
    {
      nameKo: "쌍둥이자리",
      nameLt: "Gemini",
      nameEn: "the Twins",
      whereSee: "적경 7h 00m, 적위 +22°",
      whenMeridian: "2022-03-01",
      numOfStar: "75개",
      size: "513.761sr(30위)",
      tags: ["겨울철 밤하늘 별자리","황도 제3궁"],
      emoji: "♊",
      file:"./img/gemini.jpg",
      south:"2022-02-20T21:00",
      desc:"쌍둥이가 서로 붙어 서 있는 모습을 띠는 별자리. 그리스 로마 신화의 디오스쿠로이 형제가 모티브가 되었다.",
    },
    {
      nameKo: "오리온자리",
      nameLt: "Orion",
      nameEn: "the Great Hunter",
      whereSee: "적경 5h 20m, 적위 +3°",
      whenMeridian: "2022-02-03",
      numOfStar: "125개",
      size: "594.120sr(26위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/orion.jpg",
      south:"2022-01-25T21:00",
      desc:"그리스 로마 신화 속 사냥꾼 오리온의 이름을 딴 별자리. 근처의 큰개, 작은개자리와 함께 서 황소에게 맞선 형태로 그려진다.",
    },
    {
      nameKo: "케페우스자리",
      nameLt: "Cepheus",
      nameEn: "Cepheus, the king",
      whereSee: "적경 22h 00m, 적위 +70°",
      whenMeridian: "2022-10-15",
      numOfStar: "96개",
      size: "587.787sr(27위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/cephus.jpg",
      south:"2022-10-15T21:00",
      desc:"카시오페이아 자리 옆에서 북극성 부근을 돌고 있는 별자리.",
    },
    {
      nameKo: "까마귀자리",
      nameLt: "Corvus",
      nameEn: "the Crow",
      whereSee: "적경 12h 20m, 적위 -18°",
      whenMeridian: "2022-05-21",
      numOfStar: "18개 / 17개",
      size: "183.801sr(70위) / 282.398sr(53위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/corvus.jpg",
      south:"2022-05-10T21:00",
      desc:"뱀자리 북쪽에 위치한 작은 별자리. 바다뱀자리와 같은 신화를 공유한다.",
    },
    {
      nameKo: "마차부자리",
      nameLt: "Auriga",
      nameEn: "the Charioteer, the Waggoner",
      whereSee: "적경 6h 00m, 적위 +42°",
      whenMeridian: "2022-02-13",
      numOfStar: "78개",
      size: "657.438sr(21위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/auriga.jpg",
      south:"2022-01-10T21:00",
      desc:"페르세우스자리 근처에 위치한 오각형 형태의 별자리.",
    },
    {
      nameKo: "작은개자리",
      nameLt: "Canis Minor",
      nameEn: "the Little Dog",
      whereSee: "적경 7h 30m, 적위 +6°",
      whenMeridian: "2022-03-09",
      numOfStar: "25개",
      size: "183.367sr(71위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/canisMinor.jpg",
      south:"2022-03-01T21:00",
      desc:"오리온자리를 따르는 두 마리의 개 중 한 마리로 그려지는 별자리.",
    },
    {
      nameKo: "바다뱀자리",
      nameLt: "Hydra",
      nameEn: "the Sea Serpent, the Water Monster",
      whereSee: "적경 10h 30m, 적위 -20°",
      whenMeridian: "2022-04-23",
      numOfStar: "126개",
      size: "1302.844sr(1위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/hydra.jpg",
      south:"2022-04-20T21:00",
      desc:"꼬아져 있는 뱀의 형태를 가진 별자리. 까마귀자리와 같은 신화를 공유한다.",
    },
    {
      nameKo: "돌고래자리",
      nameLt: "Delphinus",
      nameEn: "the Dolphin",
      whereSee: "적경 20h 35m, 적위 +12°",
      whenMeridian: "2022-09-24",
      numOfStar: "19개",
      size: "188.549sr(69위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/delphinus.jpg",
      south:"2022-09-15T21:00",
      desc:"바다 위로 튀어 오른 돌고래의 모습과 닮은 별자리.",
    },
    {
      nameKo: "안드로메다자리",
      nameLt: "Andromeda",
      nameEn: "the Chained Lady",
      whereSee: "적경 0h 40m, 적위 +38°",
      whenMeridian: "2022-11-25",
      numOfStar: "84개",
      size: "722.278sr(19위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/andromeda.jpg",
      south:"2022-11-10T21:00",
      desc:"영문 이름에서 알 수 있듯 사슬에 묶여 있는 여성의 모습을 하고 있는 것으로 여겨지는 별자리.",
    },
    {
      nameKo: "황소자리",
      nameLt: "Taurus",
      nameEn: "the Bull",
      whereSee: "적경 4h 30m, 적위 +18°",
      whenMeridian: "2022-01-22",
      numOfStar: "143개",
      size: "797.249sr(17위)",
      tags: ["겨울철 밤하늘 별자리","황도 제2궁"],
      emoji: "♉",
      file:"./img/taurus.jpg",
      south:"2022-01-15T21:00",
      desc:"오리온자리를 향해 뿔을 내밀고 있는 황소의 모습을 띠는 별자리.",
    },
    {
      nameKo: "큰곰자리",
      nameLt: "Ursa Major",
      nameEn: "the Great Bear",
      whereSee: "적경 11h 00m, 적위 +58°",
      whenMeridian: "2022-05-01",
      numOfStar: "126개",
      size: "1279.660sr(3위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/ursa_major.jpg",
      south:"2022-04-20T21:00",
      desc:"곰의 모습을 띠며, 작은곰자리와 대조를 이루는 별자리. 북두칠성을 포함하고 있다.",
    },
    {
      nameKo: "용자리",
      nameLt: "Draco",
      nameEn: "the Dragon",
      whereSee: "적경 17h 00m, 적위 +60°",
      whenMeridian: "2022-07-31",
      numOfStar: "123개",
      size: "1082.952sr(8위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/draco.jpg",
      south:"2022-07-20T21:00",
      desc:"그리스 신화 속 라돈(Ladon)이라는 100개의 눈을 가진 용을 의미하는 별자리.",
    },
    {
      nameKo: "카시오페이아자리",
      nameLt: "Cassiopeia",
      nameEn: "Cassiopeia",
      whereSee: "적경 1h 00m, 적위 +60°",
      whenMeridian: "2022-11-30",
      numOfStar: "94개",
      size: "598.407sr(25위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/cassiopeia.jpg",
      south:"2022-11-20T21:00",
      desc:"W자를 하고 있는 카시오페이아 여왕을 의미하는 별자리.",
    },
    {
      nameKo: "머리털자리",
      nameLt: "Coma Berenices",
      nameEn: "the Hair of Berenice",
      whereSee: "적경 12h 40m, 적위 +23°",
      whenMeridian: "2022-05-26",
      numOfStar: "38개",
      size: "386.475sr(42위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/Coma_Berenices.jpg",
      south:"2022-05-15T21:00",
      desc:"사자자리의 꼬리 부근에 위치한 별자리. 이집트의 왕 프톨레마이오스 3세가 원정에서 무사히 귀환하며 그의 왕비가 신전에 자신의 머리카락을 바쳤다는 이야기가 전해진다.",
    },
    {
      nameKo: "사냥개자리",
      nameLt: "Canes Venatici",
      nameEn: "the Hunting Dogs",
      whereSee: "적경 13h 00m, 적위 +40°",
      whenMeridian: "2022-05-31",
      numOfStar: "32개",
      size: "465.194sr(38위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/canes-venatici.jpg",
      south:"2022-05-20T21:00",
      desc:"목동자리가 쥐고 있는 끈에 묶여 있는 것으로 그려지는 별자리.",
    },
    {
      nameKo: "천칭자리",
      nameLt: "Libra",
      nameEn: "the Balance, the Scale",
      whereSee: "적경 15h 10m, 적위 -14°",
      whenMeridian: "2022-07-04",
      numOfStar: "50개",
      size: "538.052sr(29위)",
      tags: ["봄철 밤하늘 별자리","황도 제7궁"],
      emoji: "♎",
      file:"./img/libra.jpg",
      south:"2022-06-20T21:00",
      desc:"처녀자리와 전갈자리 사이에 위치한 저울의 일종인 천칭의 모양을 띠는 별자리.",
    },
    {
      nameKo: "살쾡이자리",
      nameLt: "Lynx",
      nameEn: "the Lynx",
      whereSee: "적경 7h 50m, 적위 +45°",
      whenMeridian: "2022-03-14",
      numOfStar: "61개",
      size: "545.386sr(28위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/lynx.jpg",
      south:"2022-03-05T21:00",
      desc:"매우 어두운 별자리여서, 천문학자 요하네스 허벨리우스가 '스라소니의 눈을 가진 사람만이 볼 수 있다'고 하여 이런 이름이 붙여졌다.",
    },
    {
      nameKo: "궁수자리",
      nameLt: "Sagittarius",
      nameEn: "the Archer",
      whereSee: "적경 19h 00m, 적위 -25°",
      whenMeridian: "2022-08-31",
      numOfStar: "113개",
      size: "867.432sr(15위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/sagittarius.jpg",
      south:"2022-08-20T21:00",
      desc:"흔히 활시위를 당기는 켄타우로스로 묘사되는 별자리. 우리 은하의 중심이 위치하고 있다.",
    },
    {
      nameKo: "백조자리",
      nameLt: "Cygnus",
      nameEn: "the Swan",
      whereSee: "적경 20h 30m, 적위 +43°",
      whenMeridian: "2022-09-23",
      numOfStar: "139개",
      size: "803.983sr(16위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/swan.jpg",
      south:"2022-09-10T21:00",
      desc:"날개를 펼친 백조의 모습을 가진 별자리. 은하수 위에 위치해 있다.",
    },
    {
      nameKo: "염소자리",
      nameLt: "Capricornus",
      nameEn: "the Sea Goat the Goathorn",
      whereSee: "적경 20h 50m, 적위 -20°",
      whenMeridian: "2022-09-28",
      numOfStar: "47개",
      size: "413.947sr(40위)",
      tags: ["여름철 밤하늘 별자리","황도 제10궁"],
      emoji: "♑",
      file:"./img/capricornus.jpg",
      south:"2022-09-20T21:00",
      desc:"'뿔 달린 염소'나 '염소의 뿔'을 의미하는 별자리. 물병자리, 물고기자리, 에리다누스자리와 함께 물과 관련된 별자리를 구성한다.",
    },
    {
      nameKo: "전갈자리",
      nameLt: "Scorpius",
      nameEn: "the Scorpion",
      whereSee: "적경 16h 20m, 적위 -6°",
      whenMeridian: "2022-07-21",
      numOfStar: "101개",
      size: "496.783sr(33위)",
      tags: ["여름철 밤하늘 별자리","황도 제8궁"],
      emoji: "♏",
      file:"./img/scorpio.jpg",
      south:"2022-07-20T21:00",
      desc:"꼬리가 강조되어 있는 전갈의 형태를 띠는 별자리.",
    },
    {
      nameKo: "헤르쿨레스자리",
      nameLt: "Hercules",
      nameEn: "Hercules",
      whereSee: "적경 17h 10m, 적위 +27°",
      whenMeridian: "2022-08-03",
      numOfStar: "142개",
      size: "1225.148sr(5위)",
      tags: ["여름철 밤하늘 별자리"],
      file:"./img/hercules.jpg",
      south:"2022-07-25T21:00",
      desc:"그리스 신화에 등장하는 헤라클레스의 이름을 따 지어진 별자리.",
    },
    {
      nameKo: "작은여우자리",
      nameLt: "Vulpecula",
      nameEn: "the Little Fox",
      whereSee: "적경 20h 10m, 적위 +25°",
      whenMeridian: "2022-09-18",
      numOfStar: "45개",
      size: "268.165sr(55위)",
      tags: ["여름철 밤하늘 별자리","황도 제9궁"],
      emoji: "♐",
      file:"./img/vulpecula.jpg",
      south:"2022-09-10T21:00",
      desc:"천문학자 요하네스 헤벨리우스에 의해 만들어진 어두운 별자리. 은하수 위에 위치해 있다.",
    },
    {
      nameKo: "고래자리",
      nameLt: "Cetus",
      nameEn: "the Whale",
      whereSee: "적경 1h 45m, 적위 -12°",
      whenMeridian: "2022-12-11",
      numOfStar: "110개",
      size: "1231.411sr(4위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/cetus.jpg",
      south:"2022-11-30T21:00",
      desc:"그리스 신화 속 포세이돈이 보낸 괴물을 의미하는 별자리. 물과 관련된 물병자리, 물고기자리와 함께 위치해 있다.",
    },
    {
      nameKo: "물고기자리",
      nameLt: "Pisces",
      nameEn: "the Fishes",
      whereSee: "적경 0h 20m, 적위 +10°",
      whenMeridian: "2022-11-20",
      numOfStar: "81개",
      size: "889.417sr(14위)",
      tags: ["가을철 밤하늘 별자리","황도 제12궁"],
      emoji: "♓",
      file:"./img/pisces.jpg",
      south:"2022-11-10T21:00",
      desc:"두 마리의 연결된 물고기가 서로 반대 방향으로 헤엄치는 모습을 띠는 황도 제 12궁의 별자리.",
    },
    {
      nameKo: "페르세우스자리",
      nameLt: "Perseus",
      nameEn: "Perseus",
      whereSee: "적경 3h 20m, 적위 +42°",
      whenMeridian: "2022-01-04",
      numOfStar: "98개",
      size: "614.997sr(24위)",
      tags: ["가을철 밤하늘 별자리"],
      file:"./img/perseus.jpg",
      south:"2022-12-25T21:00",
      desc:"그리스 신화에 등장하는 영웅인 페르세우스에서 유래된 별자리. 메두사의 목을 들고 있는 모습을 하고 있다.",
    },
    {
      nameKo: "양자리",
      nameLt: "Aries",
      nameEn: "the Ram",
      whereSee: "적경 2h 30m, 적위 +20°",
      whenMeridian: "2022-12-25",
      numOfStar: "56개",
      size: "441.395sr(39위)",
      tags: ["가을철 밤하늘 별자리","황도 제1궁"],
      emoji: "♈",
      file:"./img/aries.png",
      south:"2022-12-10T21:00",
      desc:"양의 뿔을 형상화한 형태의 별자리.",
    },
    {
      nameKo: "게자리",
      nameLt: "Cancer",
      nameEn: "the Crab",
      whereSee: "적경 8h 30m, 적위 +20°",
      whenMeridian: "2022-03-24",
      numOfStar: "52개",
      size: "505.872sr(31위)",
      tags: ["겨울철 밤하늘 별자리","황도 제4궁"],
      emoji: "♋",
      file:"./img/cancer.jpg",
      south:"2022-03-15T21:00",
      desc:"그리스 신화에는 헤라가 헤라클레스를 없애기 위해 보낸 '카르키노스'라는 거대한 게라고 되어 있다.",
    },
    {
      nameKo: "에리다누스자리",
      nameLt: "Eridanus",
      nameEn: "the River, River Eridanus",
      whereSee: "적경 3h 50m, 적위 -30°",
      whenMeridian: "2022-01-12",
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
      whenMeridian: "2022-02-04",
      numOfStar: "46개",
      size: "290.291sr(51위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/lepus.jpg",
      south:"2022-01-25T21:00",
      desc:"토끼의 형태를 띠는 별자리. 위쪽에 위치한 오리온자리에게 쫒기는 모습으로도 그려진다.",
    },
    {
      nameKo: "큰개자리",
      nameLt: "Canis Major",
      nameEn: "the Greater Dog",
      whereSee: "적경 6h 40m, 적위 -24°",
      whenMeridian: "2022-02-24",
      numOfStar: "87개",
      size: "380.118sr(43위)",
      tags: ["겨울철 밤하늘 별자리"],
      file:"./img/canis-major.jpg",
      south:"2022-02-15T21:00",
      desc:"사냥꾼 오리온을 따르는 두 마리의 개 중 한 마리로 그려지는 별자리.",
    },
    {
      nameKo: "사자자리",
      nameLt: "Leo",
      nameEn: "the Lion",
      whereSee: "적경 10h 30m, 적위 +15°",
      whenMeridian: "2022-04-23",
      numOfStar: "80개",
      size: "946.964sr(12위)",
      tags: ["봄철 밤하늘 별자리","황도 제5궁"],
      emoji: "♌",
      file:"./img/leo.jpg",
      south:"2022-06-20T21:00",
      desc:"그리스 신화의 헤라클레스가 쓰러뜨린 네메아의 사자에서 유래된 별자리. 현대의 88개 별자리 중 가장 오래된 별자리이다.",
    },
    {
      nameKo: "목동자리",
      nameLt: "Bootes",
      nameEn: "the Herdsman",
      whereSee: "적경 14h 35m, 적위 +30°",
      whenMeridian: "2022-06-24",
      numOfStar: "86개",
      size: "906.831sr(13위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/bootes.jpg",
      south:"2022-06-15T21:00",
      desc:"큰곰자리를 향하는 큰 사람의 형태를 띠고 있다.",
    },
    {
      nameKo: "땅꾼자리",
      nameLt: "Ophiuchus",
      nameEn: "the Serpentholder",
      whereSee: "적경 17h 10m, 적위 -4°",
      whenMeridian: "2022-08-03",
      numOfStar: "84개",
      size: "948.340sr(11위)",
      tags: ["여름철 밤하늘 별자리","황도 제13궁"],
      emoji:"⛎",
      file:"./img/ophiuchus.jpeg",
      south:"2022-07-25T21:00",
      desc:"뱀을 들고 있는 사람의 형태를 가진 별자리. 뱀자리 중간에 위치해 별자리를 둘로 가르고 있다.",
    },
    {
      nameKo: "작은곰자리",
      nameLt: "Ursa Minor",
      nameEn: "the Little Bear",
      whereSee: "적경 15h 40m, 적위 +78°",
      whenMeridian: "2022-07-11",
      numOfStar: "26개",
      size: "255.864sr(56위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/ursa-minor.jpg",
      south:"2022-06-25T21:00",
      desc:"북두칠성과 유사한 국자 형상을 하는 별자리. 북극성 폴라리스를 포함하고 있다.",
    },
    {
      nameKo: "기린자리",
      nameLt: "Camelopardalis",
      nameEn: "the Giraffe",
      whereSee: "적경 5h 40m, 적위 +70°",
      whenMeridian: "2022-02-08",
      numOfStar: "74개",
      size: "756.828sr(18위)",
      tags: ["북쪽 밤하늘 별자리"],
      file:"./img/Camelopardalis.jpg",
      south:"2022-02-01T21:00",
      desc:"최초 발견되었을 때는 성경에 등장하는 낙타였자만, 이후 기린으로 명칭이 변경되었다.",
    },
    {
    nameKo: "남쪽물고기자리",
    nameLt: "Piscis Austrinus",
    nameEn: "the Southern Fish",
    whereSee: "적경 22h 00m, 적위 -32°",
    whenMeridian: "2022-10-15",
    numOfStar: "26개",
    size: "245.375평방도(60위)",
    tags: ["가을철 밤하늘 별자리"],
    file:"./img/Piscis-Austrinus.jpg",
    south:"2022-10-10T21:00",
    desc:"물고기의 모습으로 그려지는 별자리. 그리스 신화에서는, 연회 중 괴물이 나타나 도망칠 때 여신 아프로디테가 물고기로 변한 데서 유래되었다.",
  },
  {
    nameKo: "조랑말자리",
    nameLt: "Equuleus",
    nameEn: "the Little Horse",
    whereSee: "적경 21h 10m, 적위 +6°",
    whenMeridian: "2022-10-03",
    numOfStar: "10개",
    size: "71.641평방도(87위)",
    tags: ["가을철 밤하늘 별자리"],
    file:"./img/Equuleus.jpg",
    south:"2022-09-20T21:00",
    desc:"그리스 신화 속 페가수스의 새끼 또는 형제로 알려진 셀레리스와 관련되어 있다고 알려진 별자리.",
  },
  {
    nameKo: "컵자리",
    nameLt: "Crater",
    nameEn: "the Cup",
    whereSee: "적경 11h 20m, 적위 -15°",
    whenMeridian: "2022-05-06",
    numOfStar: "17개",
    size: "282.398평방도(53위)",
    tags: ["봄철 밤하늘 별자리"],
    file:"./img/crater.jpg",
    south:"2022-04-25T21:00",
    desc:"바다뱀자리, 까마귀자리 신화에 등장하는 술잔이 배경이 된 별자리. 술잔자리라고도 불린다.",
  },
  {
      nameKo: "북쪽왕관자리",
      nameLt: "Corona Borealis",
      nameEn: "the Northern Crown",
      whereSee: "적경 15h 40m, 적위 +30°",
      whenMeridian: "2022-07-11",
      numOfStar: "25개",
      size: "178.710평방도(73위)",
      tags: ["봄철 밤하늘 별자리"],
      file:"./img/corona-borealis_northen.jpg",
      south:"2022-06-30T21:00",
      desc:"머리띠 형태의 얇은 왕관을 닮은 별자리. 그리스 신화에서는 디오니소스가 아리아드네에게 선물한 왕관이라고도 기록되어 있다. 별의 배치가 매우 닮은 남쪽왕관자리가 존재한다.",
  },
  ];

  // {
  //   nameKo: "",
  //   nameLt: "",
  //   nameEn: "",
  //   whereSee: "",
  //   whenMeridian: "",
  //   numOfStar: "",
  //   size: "",
  //   tags: [""],
  //   file:"./img/",
  //   south:"",
  //   desc:"",
  // },