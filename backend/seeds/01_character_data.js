/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("characters").del();
  await knex("characters").insert([
    {
      id: 1,
      name: "Traveler",
      element: "Anemo",
      rarity: 5,
      weapon: "Sword",
      description:
        "The Traveler is the protagonist of Genshin Impact, capable of harnessing the power of the elements.",
      url: "https://genshin-impact.fandom.com/wiki/Traveler",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/29/Traveler_Card.png/revision/latest?cb=20220725205258",
      region: "Teyvat",
    },
    {
      id: 2,
      name: "Amber",
      element: "Pyro",
      rarity: 4,
      weapon: "Bow",
      description:
        "Amber is a talented archer known for her enthusiasm and love for exploring.",
      url: "https://genshin-impact.fandom.com/wiki/Amber",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Amber_Card.png/revision/latest?cb=20220725204839",
      region: "Mondstadt",
    },
    {
      id: 3,
      name: "Kaeya",
      element: "Cryo",
      rarity: 4,
      weapon: "Sword",
      description:
        "Kaeya is a nobleman and a skilled swordsman who wields the power of Cryo.",
      url: "https://genshin-impact.fandom.com/wiki/Kaeya",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/20/Kaeya_Card.png/revision/latest?cb=20220725205013",
      region: "Mondstadt",
    },
    {
      id: 4,
      name: "Lisa",
      element: "Electro",
      rarity: 4,
      weapon: "Catalyst",
      description:
        "Lisa is a librarian with a deep knowledge of magic, specializing in the Electro element.",
      url: "https://genshin-impact.fandom.com/wiki/Lisa",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Lisa_Card.png/revision/latest?cb=20220725205045",
      region: "Mondstadt",
    },
    {
      id: 5,
      name: "Barbara",
      element: "Hydro",
      rarity: 4,
      weapon: "Catalyst",
      description:
        "Barbara is a kind-hearted idol and a healer who uses Hydro abilities to support her allies.",
      url: "https://genshin-impact.fandom.com/wiki/Barbara",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Barbara_Card.png/revision/latest?cb=20220725204852",
      region: "Mondstadt",
    },
    {
      id: 6,
      name: "Diluc",
      element: "Pyro",
      rarity: 5,
      weapon: "Claymore",
      description:
        "Diluc is a wealthy nobleman with exceptional combat skills, wielding the power of Pyro.",
      url: "https://genshin-impact.fandom.com/wiki/Diluc",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/e7/Diluc_Card.png/revision/latest?cb=20220725204921",
      region: "Mondstadt",
    },
    {
      id: 7,
      name: "Jean",
      element: "Anemo",
      rarity: 5,
      weapon: "Sword",
      description:
        "Jean is the Acting Grand Master of the Knights of Favonius, adept in using Anemo abilities for support and offense.",
      url: "https://genshin-impact.fandom.com/wiki/Jean",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Jean_Card.png/revision/latest?cb=20220725210053",
      region: "Mondstadt",
    },
    {
      id: 8,
      name: "Venti",
      element: "Anemo",
      rarity: 5,
      weapon: "Bow",
      description:
        "Venti is a bard and an archer, known as the Windborne Bard, capable of manipulating the power of Anemo.",
      url: "https://genshin-impact.fandom.com/wiki/Venti",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Venti_Card.png/revision/latest?cb=20220725205218",
      region: "Mondstadt",
    },
    {
      id: 9,
      name: "Tartaglia",
      element: "Hydro",
      rarity: 5,
      weapon: "Bow",
      description:
        "Tartaglia, also known as Childe, is a fierce warrior with the ability to switch between ranged and melee combat.",
      url: "https://genshin-impact.fandom.com/wiki/Tartaglia",
      image_url: "https://example.com/tartaglia.png",
      region: "Snezhnaya",
    },
    {
      id: 10,
      name: "Zhongli",
      element: "Geo",
      rarity: 5,
      weapon: "Polearm",
      description:
        "Zhongli is a consultant for the Wangsheng Funeral Parlor and possesses immense Geo powers.",
      url: "https://genshin-impact.fandom.com/wiki/Zhongli",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Zhongli_Card.png/revision/latest?cb=20201217052506",
      region: "Liyue",
    },
    {
      id: 11,
      name: "Xiangling",
      element: "Pyro",
      rarity: 4,
      weapon: "Polearm",
      description:
        "Xiangling is a renowned chef from Liyue who excels at Pyro-based attacks using her cooking skills.",
      url: "https://genshin-impact.fandom.com/wiki/Xiangling",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/aa/Xiangling_Card.png/revision/latest?cb=20220725205223",
      region: "Liyue",
    },
    {
      id: 12,
      name: "Chongyun",
      element: "Cryo",
      rarity: 4,
      weapon: "Claymore",
      description:
        "Chongyun is a young exorcist with a strong sense of justice and the ability to freeze his opponents with Cryo powers.",
      url: "https://genshin-impact.fandom.com/wiki/Chongyun",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Chongyun_Card.png/revision/latest?cb=20220725204909",
      region: "Liyue",
    },
    {
      id: 13,
      name: "Keqing",
      element: "Electro",
      rarity: 5,
      weapon: "Sword",
      description:
        "Keqing is a high-ranking member of the Liyue Qixing with strong Electro abilities and exceptional swordsmanship.",
      url: "https://genshin-impact.fandom.com/wiki/Keqing",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/64/Keqing_Card.png/revision/latest?cb=20220725205019",
      region: "Liyue",
    },
    {
      id: 14,
      name: "Mona",
      element: "Hydro",
      rarity: 5,
      weapon: "Catalyst",
      description:
        "Mona is a mysterious astrologer with Hydro powers, known for her fortune-telling and elemental mastery.",
      url: "https://genshin-impact.fandom.com/wiki/Mona",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9f/Mona_Card.png/revision/latest?cb=20220725210059",
      region: "Mondstadt",
    },
    {
      id: 15,
      name: "Qiqi",
      element: "Cryo",
      rarity: 5,
      weapon: "Sword",
      description:
        "Qiqi is a zombie-like character who uses Cryo powers to heal and support her allies on the battlefield.",
      url: "https://genshin-impact.fandom.com/wiki/Qiqi",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/03/Qiqi_Card.png/revision/latest?cb=20220725205124",
      region: "Liyue",
    },
    {
      id: 16,
      name: "Diona",
      element: "Cryo",
      rarity: 4,
      weapon: "Bow",
      description:
        "Diona is a bartender and an exceptional Cryo archer, known for her unique mix of offensive and supportive abilities.",
      url: "https://genshin-impact.fandom.com/wiki/Diona",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/14/Diona_Card.png/revision/latest?cb=20201107193459",
      region: "Mondstadt",
    },
    {
      id: 17,
      name: "Fischl",
      element: "Electro",
      rarity: 4,
      weapon: "Bow",
      description:
        "Fischl is a mysterious adventurer who fights alongside her familiar, the Electro raven named Oz.",
      url: "https://genshin-impact.fandom.com/wiki/Fischl",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/5/54/Fischl_Card.png/revision/latest?cb=20220725204926",
      region: "Mondstadt",
    },
    {
      id: 18,
      name: "Xingqiu",
      element: "Hydro",
      rarity: 4,
      weapon: "Sword",
      description:
        "Xingqiu is a young poet and Hydro swordsman who uses his abilities to support and protect his allies.",
      url: "https://genshin-impact.fandom.com/wiki/Xingqiu",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/2e/Xingqiu_Card.png/revision/latest?cb=20220725205235",
      region: "Liyue",
    },
    {
      id: 19,
      name: "Beidou",
      element: "Electro",
      rarity: 4,
      weapon: "Claymore",
      description:
        "Beidou is the captain of the Crux Fleet, known for her Electro powers and her fearless nature.",
      url: "https://genshin-impact.fandom.com/wiki/Beidou",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c0/Beidou_Card.png/revision/latest?cb=20220725204858",
      region: "Liyue",
    },
    {
      id: 20,
      name: "Ningguang",
      element: "Geo",
      rarity: 4,
      weapon: "Catalyst",
      description:
        "Ningguang is a powerful businesswoman and the Tianquan of the Liyue Qixing, wielding Geo abilities.",
      url: "https://genshin-impact.fandom.com/wiki/Ningguang",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a8/Ningguang_Card.png/revision/latest?cb=20220725205113",
      region: "Liyue",
    },
    {
      id: 21,
      name: "Xinyan",
      element: "Pyro",
      rarity: 4,
      weapon: "Claymore",
      description:
        "Xinyan is a rock 'n' roll musician with Pyro abilities, using her music and powerful attacks to create chaos on the battlefield.",
      url: "https://genshin-impact.fandom.com/wiki/Xinyan",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/a7/Xinyan_Card.png/revision/latest?cb=20221121172209",
      region: "Liyue",
    },
    {
      id: 22,
      name: "Sucrose",
      element: "Anemo",
      rarity: 4,
      weapon: "Catalyst",
      description:
        "Sucrose is an alchemist and a researcher, utilizing Anemo powers to control and manipulate the wind.",
      url: "https://genshin-impact.fandom.com/wiki/Sucrose",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Sucrose_Card.png/revision/latest?cb=20220725205205",
      region: "Mondstadt",
    },
    {
      id: 23,
      name: "Shenhe",
      element: "Cryo",
      rarity: 5,
      weapon: "Polearm",
      description:
        "Shenhe, a mysterious Cryo specialist from an exorcist family, possesses enigmatic nature and extraordinary adepti talents.",
      url: "https://genshin-impact.fandom.com/wiki/Shenhe",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Shenhe_Card.png/revision/latest?cb=20220725205152",
      region: "Liyue",
    },
    {
      id: 24,
      name: "Rosaria",
      element: "Cryo",
      rarity: 4,
      weapon: "Polearm",
      description:
        "Rosaria is a nun and a skilled Cryo warrior, carrying out her duties both in the church and on the battlefield.",
      url: "https://genshin-impact.fandom.com/wiki/Rosaria",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/16/Rosaria_Card.png/revision/latest?cb=20210330063015",
      region: "Mondstadt",
    },
    {
      id: 25,
      name: "Hu Tao",
      element: "Pyro",
      rarity: 5,
      weapon: "Polearm",
      description:
        "Hu Tao is the director of the Wangsheng Funeral Parlor and a Pyro polearm wielder with an affinity for the afterlife.",
      url: "https://genshin-impact.fandom.com/wiki/Hu_Tao",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/88/Hu_Tao_Card.png/revision/latest?cb=20220725204937",
      region: "Liyue",
    },
    {
      id: 26,
      name: "Yanfei",
      element: "Pyro",
      rarity: 4,
      weapon: "Catalyst",
      description:
        "Yanfei is a half-human, half-illuminated beast legal adviser who unleashes powerful Pyro attacks with her catalyst.",
      url: "https://genshin-impact.fandom.com/wiki/Yanfei",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fc/Yanfei_Card.png/revision/latest?cb=20210422100113",
      region: "Liyue",
    },
    {
      id: 27,
      name: "Eula",
      element: "Cryo",
      rarity: 5,
      weapon: "Claymore",
      description:
        "Eula is the Spindrift Knight and captain of the Knights of Favonius Reconnaissance Company, wielding Cryo powers.",
      url: "https://genshin-impact.fandom.com/wiki/Eula",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Eula_Card.png/revision/latest?cb=20210511110453",
      region: "Mondstadt",
    },
    {
      id: 28,
      name: "Kaedehara Kazuha",
      element: "Anemo",
      rarity: 5,
      weapon: "Sword",
      description:
        "Kaedehara Kazuha is a wandering swordsman from the region of Inazuma, skilled in using Anemo powers.",
      url: "https://genshin-impact.fandom.com/wiki/Kaedehara_Kazuha",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/81/Kaedehara_Kazuha_Card.png/revision/latest?cb=20210607100841",
      region: "Inazuma",
    },
    {
      id: 29,
      name: "Yoimiya",
      element: "Pyro",
      rarity: 5,
      weapon: "Bow",
      description:
        "Yoimiya is a talented Pyro archer and the owner of the Naganohara Fireworks shop in Inazuma.",
      url: "https://genshin-impact.fandom.com/wiki/Yoimiya",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/3/36/Yoimiya_Card.png/revision/latest?cb=20210607100839",
      region: "Inazuma",
    },
    {
      id: 30,
      name: "Sayu",
      element: "Anemo",
      rarity: 4,
      weapon: "Claymore",
      description:
        "Sayu is a pint-sized ninja with Anemo abilities, capable of swift movements and delivering powerful attacks.",
      url: "https://genshin-impact.fandom.com/wiki/Sayu",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Sayu_Card.png/revision/latest?cb=20230121174331",
      region: "Inazuma",
    },
    {
      id: 31,
      name: "Raiden Shogun",
      element: "Electro",
      rarity: 5,
      weapon: "Polearm",
      description:
        "Raiden Shogun, also known as the Almighty Narukami Ogosho, is the Electro Archon ruling over Inazuma.",
      url: "https://genshin-impact.fandom.com/wiki/Raiden_Shogun",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/6/60/Raiden_Shogun_Card.png/revision/latest?cb=20220725205132",
      region: "Inazuma",
    },
    {
      id: 32,
      name: "Kujou Sara",
      element: "Electro",
      rarity: 4,
      weapon: "Bow",
      description:
        "Kujou Sara is a general of the Shogun's army, utilizing Electro powers and excelling in tactical combat.",
      url: "https://genshin-impact.fandom.com/wiki/Kujou_Sara",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Kujou_Sara_Card.png/revision/latest?cb=20220725205032",
      region: "Inazuma",
    },
    {
      id: 33,
      name: "Kamisato Ayaka",
      element: "Cryo",
      rarity: 5,
      weapon: "Sword",
      description:
        "Kamisato Ayaka is a princess of the Kamisato House in Inazuma, proficient in Cryo swordsmanship.",
      url: "https://genshin-impact.fandom.com/wiki/Kamisato_Ayaka",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Kamisato_Ayaka_Card.png/revision/latest?cb=20210607100828",
      region: "Inazuma",
    },
    {
      id: 34,
      name: "Baizhu",
      element: "Dendro",
      rarity: 5,
      description:
        "Baizhu, the esteemed master of Bubu Pharmacy and guardian of Qiqi, possesses formidable Dendro powers.",
      weapon: "Catalyst",
      url: "https://genshin-impact.fandom.com/wiki/Baizhu",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/a/ae/Baizhu_Card.png/revision/latest?cb=20230224215334",
      region: "Liyue",
    },
    {
      id: 35,
      name: "Ayato",
      element: "Hydro",
      rarity: 4,
      weapon: "Sword",
      description:
        "Ayato is a member of the Kamisato Clan in Inazuma, skilled in Hydro swordsmanship.",
      url: "https://genshin-impact.fandom.com/wiki/Ayato",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/12/Kamisato_Ayato_Card.png/revision/latest?cb=20220927195614",
      region: "Inazuma",
    },
    {
      id: 36,
      name: "Albedo",
      element: "Geo",
      rarity: 5,
      weapon: "Sword",
      description:
        "Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
      url: "https://genshin-impact.fandom.com/wiki/Albedo",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/01/Albedo_Card.png/revision/latest?cb=20210302092013",
      region: "Mondstadt",
    },
    {
      id: 37,
      name: "Ganyu",
      element: "Cryo",
      rarity: 5,
      weapon: "Bow",
      description:
        "Ganyu is a secretary at Yuehai Pavilion and possesses exceptional Cryo archery skills.",
      url: "https://genshin-impact.fandom.com/wiki/Ganyu",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/24/Ganyu_Card.png/revision/latest?cb=20230519012433",
      region: "Liyue",
    },
    {
      id: 38,
      name: "Xiao",
      element: "Anemo",
      rarity: 5,
      weapon: "Polearm",
      description:
        "Xiao is a Yaksha, an adeptus responsible for vanquishing demons, and wields Anemo powers with his polearm.",
      url: "https://genshin-impact.fandom.com/wiki/Xiao",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Xiao_Card.png/revision/latest?cb=20220725205230",
      region: "Liyue",
    },
    {
      id: 39,
      name: "Bennett",
      element: "Pyro",
      rarity: 4,
      weapon: "Sword",
      description:
        "Bennett is an adventurer from Mondstadt known for his bad luck, but his Pyro abilities make him a valuable support character.",
      url: "https://genshin-impact.fandom.com/wiki/Bennett",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/c/c5/Bennett_Card.png/revision/latest?cb=20220725204904",
      region: "Mondstadt",
    },
    {
      id: 40,
      name: "Klee",
      element: "Pyro",
      rarity: 5,
      weapon: "Catalyst",
      description:
        "Klee is a mischievous young girl from Mondstadt with a passion for explosives, using her Pyro abilities to cause fiery chaos.",
      url: "https://genshin-impact.fandom.com/wiki/Klee",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Klee_Card.png/revision/latest?cb=20220725205026",
      region: "Mondstadt",
    },
    {
      id: 41,
      name: "Mika",
      element: "Cryo",
      rarity: 4,
      weapon: "Bow",
      description:
        "Mika is a skilled archer with the power of Cryo, known for their precision and agility in battle.",
      url: "https://genshin-impact.fandom.com/wiki/Mika",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Mika_Card.png/revision/latest?cb=20230116101322",
      region: "Inazuma",
    },
    {
      id: 42,
      name: "Razor",
      element: "Electro",
      rarity: 4,
      weapon: "Claymore",
      description:
        "Razor is a lone wolf from Wolvendom, wielding the power of Electro and fighting alongside his loyal companion, the wolf spirit.",
      url: "https://genshin-impact.fandom.com/wiki/Razor",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/1b/Razor_Card.png/revision/latest?cb=20220725205138",
      region: "Mondstadt",
    },
    {
      id: 43,
      name: "Yaoyao",
      element: "Dendro",
      rarity: 5,
      weapon: "Polearm",
      description:
        "Yaoyao, a diligent and caring young individual, takes great care of others and their well-being. She is a dendro user.",
      url: "https://genshin-impact.fandom.com/wiki/Yaoyao",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/2/24/Yaoyao_Card.png/revision/latest?cb=20221209042817",
      region: "Liyue",
    },
    {
      id: 44,
      name: "Yelan",
      element: "Hydro",
      rarity: 5,
      weapon: "Bow",
      description:
        "Yelan, a mysterious Hydro archer, disguises as a civil affairs worker and operates as an intelligence agent at the Yanshang Teahouse.",
      url: "https://genshin-impact.fandom.com/wiki/Yelan",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Yelan_Card.png/revision/latest?cb=20220725205242",
      region: "Liyue",
    },
    {
      id: 45,
      name: "Arataki Itto",
      element: "Geo",
      rarity: 5,
      weapon: "Claymore",
      description:
        "Arataki Itto, leader of the Arataki Gang and descendant of the crimson oni. Known for his boisterous nature, he wields Geo powers.",
      url: "https://genshin-impact.fandom.com/wiki/Arataki_Itto",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/9d/Arataki_Itto_Card.png/revision/latest?cb=20220725204845",
      region: "Inazuma",
    },
    {
      id: 46,
      name: "Gorou",
      element: "Geo",
      rarity: 4,
      weapon: "Bow",
      description:
        "Gorou, the trusted general of the Watatsumi Army, exemplifies courage and reliability, inspiring unwavering loyalty from his troops.",
      url: "https://genshin-impact.fandom.com/wiki/Gorou",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Gorou_Card.png/revision/latest?cb=20220725204934",
      region: "Inazuma",
    },
    {
      id: 47,
      name: "Kuki Shinobu",
      element: "Electro",
      rarity: 4,
      weapon: "Sword",
      description:
        "Kuki Shinobu, a skilled shinobi from Inazuma, wields Electro powers and strikes swiftly with her agile swordplay.",
      url: "https://genshin-impact.fandom.com/wiki/Kuki_Shinobu",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Kuki_Shinobu_Card.png/revision/latest?cb=20220725205038",
      region: "Inazuma",
    },
    {
      id: 48,
      name: "Sangonomiya Kokomi",
      element: "Hydro",
      rarity: 5,
      weapon: "Catalyst",
      description:
        "Sangonomiya Kokomi, the Divine Priestess of Sangonomiya Shrine in Inazuma, utilizes Hydro powers and excels as a dedicated healer.",
      url: "https://genshin-impact.fandom.com/wiki/Sangonomiya_Kokomi",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/f/f4/Sangonomiya_Kokomi_Card.png/revision/latest?cb=20220725205145",
      region: "Inazuma",
    },
    {
      id: 49,
      name: "Shikanoin Heizou",
      element: "Anemo",
      rarity: 4,
      weapon: "Catalyst",
      description:
        "Shikanoin Heizou, a detective working for the Tenryu Commission in Inazuma",
      url: "https://genshin-impact.fandom.com/wiki/Shikanoin_Heizou",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/9/92/Shikanoin_Heizou_Card.png/revision/latest?cb=20220725205159",
      region: "Inazuma",
    },
    {
      id: 50,
      name: "Thoma",
      element: "Pyro",
      rarity: 4,
      weapon: "Polearm",
      description:
        "Thoma is a dedicated member of the Kamisato Clan in Inazuma, serving as a housekeeper and providing support to the clan.",
      url: "https://genshin-impact.fandom.com/wiki/Thoma",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/1/12/Thoma_Card.png/revision/latest?cb=20220725205212",
      region: "Inazuma",
    },
    {
      id: 51,
      name: "Yae Miko",
      element: "Electro",
      rarity: 5,
      weapon: "Catalyst",
      description:
        "Yae Miko, the revered Shrine Maiden of the Grand Narukami Shrine in Inazuma, leads with strength and wields powerful Electro abilities.",
      url: "https://genshin-impact.fandom.com/wiki/Yae_Miko",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/8/89/Yae_Miko_Card.png/revision/latest?cb=20211231161334",
      region: "Inazuma",
    },
    {
      id: 52,
      name: "Yun Jin",
      element: "Geo",
      rarity: 4,
      weapon: "Polearm",
      description:
        "Yun Jin, a fiery opera singer from Liyue, mesmerizes audiences with her exceptional polearm skills and captivating performances.",
      url: "https://genshin-impact.fandom.com/wiki/Yun_Jin",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Yun_Jin_Card.png/revision/latest?cb=20220725205249",
      region: "Inazuma",
    },
    {
      id: 53,
      name: "Noelle",
      element: "Geo",
      rarity: 4,
      weapon: "Claymore",
      description:
        "Noelle, a dedicated maid serving the Knights of Favonius in Mondstadt, utilizes her Geo powers and unwavering determination to protect and heal others.",
      url: "https://genshin-impact.fandom.com/wiki/Noelle",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/e/eb/Noelle_Card.png/revision/latest?cb=20220725205118",
      region: "Mondstadt",
    },
    {
      id: 54,
      name: "Alhaitham",
      element: "Dendro",
      rarity: 5,
      weapon: "Sword",
      description:
        "Alhaitham, a brilliant member of the Sumeru Akademiya, serves as the Akademiya's Scribe, documenting findings and drafting ordinances.",
      url: "https://genshin-impact.fandom.com/wiki/Alhaitham",
      image_url:
        "https://static.wikia.nocookie.net/gensin-impact/images/7/70/Alhaitham_Card.png/revision/latest?cb=20221209042646",
      region: "Sumeru",
    },
  ]);
};
