/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("character_images").del();
  await knex("character_images").insert([
    {
      id: 1,
      name: "Traveler",
      main_url:
        "https://genshin.global/wp-content/uploads/2020/09/aether-lumine-traveler-twins-profile-art-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_PlayerGirl.png",
    },
    {
      id: 2,
      name: "Amber",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/amber-pyro-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Ambor.png",
    },
    {
      id: 3,
      name: "Kaeya",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/kaeya-cryo-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Kaeya.png",
    },
    {
      id: 4,
      name: "Lisa",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/lisa-electro-character-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Lisa.png",
    },
    {
      id: 5,
      name: "Barbara",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/barbara-hydro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Barbara.png",
    },
    {
      id: 6,
      name: "Diluc",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/diluc-pyro-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Diluc.png",
    },
    {
      id: 7,
      name: "Jean",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/jean-anemo-character-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Qin.png",
    },
    {
      id: 8,
      name: "Venti",
      main_url:
        "https://genshin.global/wp-content/uploads/2020/09/venti-anemo-character-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Venti.png",
    },
    {
      id: 9,
      name: "Tartaglia",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/tartaglia-childe-hydro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Tartaglia.png",
    },
    {
      id: 10,
      name: "Zhongli",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/zhongli-geo-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Zhongli.png",
    },
    {
      id: 11,
      name: "Xiangling",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/xiangling-pyro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Xiangling.png",
    },
    {
      id: 12,
      name: "Chongyun",
      main_url:
        "https://genshin.global/wp-content/uploads/2020/09/chongyun-cryo-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Chongyun.png",
    },
    {
      id: 13,
      name: "Keqing",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/keqing-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Keqing.png",
    },
    {
      id: 14,
      name: "Mona",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/mona-hydro-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Mona.png",
    },
    {
      id: 15,
      name: "Qiqi",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/qiqi-cryo-character-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Qiqi.png",
    },
    {
      id: 16,
      name: "Diona",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/diona-cryo-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Diona.png",
    },
    {
      id: 17,
      name: "Fischl",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/fischl-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Fischl.png",
    },
    {
      id: 18,
      name: "Xingqiu",
      main_url:
        "https://genshin.global/wp-content/uploads/2020/09/xingqiu-hydro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Xingqiu.png",
    },
    {
      id: 19,
      name: "Beidou",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/beidou-geo-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Beidou.png",
    },
    {
      id: 20,
      name: "Ningguang",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/ningguang-geo-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Ningguang.png",
    },
    {
      id: 21,
      name: "Xinyan",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/xinyan-pyro-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Xinyan.png",
    },
    {
      id: 22,
      name: "Sucrose",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/sucrose-anemo-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Sucrose.png",
    },
    {
      id: 23,
      name: "Shenhe",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/shenhe-cryo-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Shenhe.png",
    },
    {
      id: 24,
      name: "Rosaria",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/rosaria-cryo-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Rosaria.png",
    },
    {
      id: 25,
      name: "Hu Tao",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/hu-tao-pyro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Hutao.png",
    },
    {
      id: 26,
      name: "Yanfei",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/yanfei-pyro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Feiyan.png",
    },
    {
      id: 27,
      name: "Eula",
      main_url:
        "https://genshin.global/wp-content/uploads/2017/06/eula-genshin-impact-800x800.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Eula.png",
    },
    {
      id: 28,
      name: "Kaedehara Kazuha",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/kazuha-anemo-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Kazuha.png",
    },
    {
      id: 29,
      name: "Yoimiya",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/yoimiya-pyro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Yoimiya.png",
    },
    {
      id: 30,
      name: "Sayu",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/sayu-anemo-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Sayu.png",
    },
    {
      id: 31,
      name: "Raiden Shogun",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/raiden-shogun-electro-character-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Shougun.png",
    },
    {
      id: 32,
      name: "Kujou Sara",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/kujou-sara-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Sara.png",
    },
    {
      id: 33,
      name: "Kamisato Ayaka",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/kamisato-ayaka-character-genshin-impact-copy.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Ayaka.png",
    },
    {
      id: 34,
      name: "Baizhu",
      main_url:
        "https://genshin.global/wp-content/uploads/2023/05/baizhu-dendro-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Baizhuer.png",
    },
    {
      id: 35,
      name: "Ayato",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/ayato-kamisato-character-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Ayato.png",
    },
    {
      id: 36,
      name: "Albedo",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/albedo-geo-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Albedo.png",
    },
    {
      id: 37,
      name: "Ganyu",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/ganyu-cryo-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Ganyu.png",
    },
    {
      id: 38,
      name: "Xiao",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/xiao-anemo-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Xiao.png",
    },
    {
      id: 39,
      name: "Bennett",
      main_url:
        "https://genshin.global/wp-content/uploads/2021/12/bennett-pyro-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Bennett.png",
    },
    {
      id: 40,
      name: "Klee",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/klee-pyro-character-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Klee.png",
    },
    {
      id: 41,
      name: "Mika",
      main_url:
        "https://genshin.global/wp-content/uploads/2023/05/mika-cyno-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Mika.png",
    },
    {
      id: 42,
      name: "Razor",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/razor-electro-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Razor.png",
    },
    {
      id: 43,
      name: "Yaoyao",
      main_url:
        "https://genshin.global/wp-content/uploads/2023/03/yaoyao-dendro-avatar-profile-genshin-impact-900x900.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Yaoyao.png",
    },
    {
      id: 44,
      name: "Yelan",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/yelan-hydro-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Yelan.png",
    },
    {
      id: 45,
      name: "Arataki Itto",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/Arataki-Itto-geo-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Itto.png",
    },
    {
      id: 46,
      name: "Gorou",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/gorou-geo-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Gorou.png",
    },
    {
      id: 47,
      name: "Kuki Shinobu",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/kuki-shinobu-electro-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Shinobu.png",
    },
    {
      id: 48,
      name: "Sangonomiya Kokomi",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/sangonomiya-kokomi-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Kokomi.png",
    },
    {
      id: 49,
      name: "Shikanoin Heizou",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/shikanoin-heizou-anemo-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Heizo.png",
    },
    {
      id: 50,
      name: "Thoma",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/thoma-pyro-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Tohma.png",
    },
    {
      id: 51,
      name: "Yae Miko",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/yae-miko-electro-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Yae.png",
    },
    {
      id: 52,
      name: "Yun Jin",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/05/yun-jin-geo-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Yunjin.png",
    },
    {
      id: 53,
      name: "Noelle",
      main_url:
        "https://genshin.global/wp-content/uploads/2022/06/noelle-geo-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Noel.png",
    },
    {
      id: 54,
      name: "Alhaitham",
      main_url:
        "https://genshin.global/wp-content/uploads/2023/01/alhaitham-dendro-avatar-profile-genshin-impact.webp",
      icon_url: "https://api.ambr.top/assets/UI/UI_AvatarIcon_Alhatham.png",
    },
  ]);
};
