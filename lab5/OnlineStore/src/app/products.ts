export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img1: string,
  img2: string,
  img3: string
  rating: number,
  link: string,
  like?: number,
}

export const products = [
  {
    id: 1,
    name: 'Корм Kitekat кусочки в соусе кролик 85 г 1 шт',
    price: 144,
    description: 'Корм для кошек любой породы: \n' +
      'кусочки в соусе, \n' +
      'основной ингредиент - мясо, \n' +
      'вес упаковки - 85 г, \n' +
      'вкус - кролик',
    img1: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/h4e/46705533026334/kitekat-krolik-v-souse-85-g-100219866-1-Container.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h77/he8/46705533485086/kitekat-krolik-v-souse-85-g-100219866-2.jpg",
    img3: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h90/46705533943838/kitekat-krolik-v-souse-85-g-100219866-3.jpg",
    rating: 5,
    link: "https://kaspi.kz/shop/p/kitekat-kusochki-v-souse-krolik-85-g-1-sht-100219866/?c=750000000#!/item"
  },
  {
    id: 2,
    name: 'Корм Felix кусочки в желе курица 85 г 1 шт',
    price: 137,
    description: 'порода: для любой породы\n' +
      'текстура: кусочки в желе\n' +
      'тип упаковки: пауч (пакетик)\n' +
      'количество упаковок: 1 шт\n' +
      'основной ингредиент: птица\n' +
      'вес упаковки: 85 г\n' +
      'вкус: курица',
    rating: 5,
    img1: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/hb2/46689476837406/felix-appetitnye-kusocki-kurica-v-zele-85-g-100218764-1-Container.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/h9f/46689477296158/felix-appetitnye-kusocki-kurica-v-zele-85-g-100218764-2.jpg",
    img3: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h16/46689477754910/felix-appetitnye-kusocki-kurica-v-zele-85-g-100218764-3.jpg",
    link: "https://kaspi.kz/shop/p/felix-kusochki-v-zhele-kuritsa-85-g-1-sht-100218764/?c=750000000#!/item",
    like: 0
  },
  {
    id: 3,
    name: "Корм Kitekat Телятинка аппетитная 1.9 кг",
    description: "порода: для любой породы\n" +
      "возраст животного: взрослые (1-6 лет)\n" +
      "особые потребности: отсутствуют\n" +
      "ветеринарная диета: отсутствует\n" +
      "основной ингредиент: мясо\n" +
      "холистик: Нет\n" +
      "вес упаковки: 1.9 кг",
    rating: 5,
    price: 2999,
    img1: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h24/49690964131870/kitekat-telatinka-appetitnaa-1-9-kg-100221515-1-Container.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/ha5/46689172160542/kitekat-telatinka-appetitnaa-1-9-kg-100221515-2.jpg",
    img3: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/hc3/46689172619294/kitekat-telatinka-appetitnaa-1-9-kg-100221515-3.jpg",
    link: "https://kaspi.kz/shop/p/kitekat-teljatinka-appetitnaja-1-9-kg-100221515/?c=750000000#!/item",
    like: 0
  },
  {
    id: 4,
    name: 'Корм Whiskas Вкусные подушечки с нежным паштетом курица и индейка 0.35 кг',
    price: 794,
    description: 'порода: для любой породы\n' +
      'возраст животного: взрослые (1-6 лет)\n' +
      'особые потребности: отсутствуют\n' +
      'ветеринарная диета: отсутствует\n' +
      'основной ингредиент: птица\n' +
      'холистик: Нет\n' +
      'вес упаковки: 0.35 кг',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h40/46693777637406/whiskas-vkusnye-podusecki-s-neznym-pastetom-kurica-i-indejka-350-g-100221268-1-Container.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h99/h6d/46693778096158/whiskas-vkusnye-podusecki-s-neznym-pastetom-kurica-i-indejka-350-g-100221268-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/hf6/46693778554910/whiskas-vkusnye-podusecki-s-neznym-pastetom-kurica-i-indejka-350-g-100221268-3.jpg',
    link: 'https://kaspi.kz/shop/p/whiskas-vkusnye-podushechki-s-nezhnym-pashtetom-kuritsa-i-indeika-0-35-kg-100221268/?c=750000000#!/item',
    like: 0
  },
  {
    id: 5,
    name: 'Лакомство Dreamies Подушечки с говядиной 140 г',
    price: 900,
    description: 'тип: подушечки\n' +
      'возраст животного: для любого возраста\n' +
      'вкус: мясо\n' +
      'вес упаковки: 140 г',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/hd3/33700187209758/dreamies-podusecki-s-govadinoj-140-g-101251114-1-Container.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h40/33700195336222/dreamies-podusecki-s-govadinoj-140-g-101251114-2-Container.jpg',
    img3: '',
    link: 'https://kaspi.kz/shop/p/dreamies-podushechki-s-govjadinoi-140-g-101251114/?c=750000000#!/item',
    like: 0
  },
  // ice creams
  {
    id: 6,
    name: 'Мороженое Шин-Лайн лесная белочка пломбир 70 г',
    price: 287,
    description: 'эскимо\n' +
      'форма выпуска: на палочке\n' +
      'вкус: шоколад, ,натуральный\n' +
      'страна производства: Казахстан',
    rating: 5.5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/hbf/46737332174878/sin-lajn-lesnaa-belocka-plombir-70-g-102676877-1.jpg',
    img2: '',
    img3: '',
    link: 'https://kaspi.kz/shop/p/morozhenoe-shin-lain-lesnaja-belochka-plombir-70-g-102676877/?c=750000000#!/item',
    like: 0
  },
  {
    id: 7,
    name: 'Мороженое Шин-Лайн Бомба пломбир большой рожок 135 г',
    price: 455,
    description: 'пломбир\n' +
      'форма выпуска: рожок\n' +
      'вкус: шоколад\n' +
      'страна производства: Казахстан',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hfd/hc9/46737334632478/sin-lajn-bomba-plombir-bolsoj-rozok-135-g-102676925-1.jpg',
    img2: '',
    img3: '',
    link: 'https://kaspi.kz/shop/p/morozhenoe-shin-lain-bomba-plombir-bol-shoi-rozhok-135-g-102676925/?c=750000000#!/item',
    like: 0
  },
  {
    id: 8,
    name: 'Мороженое Шин-Лайн Бомба рожок черное печенье 125 г',
    price: 459,
    description: 'сливочное\n' +
      'форма выпуска: рожок\n' +
      'вкус: шоколад\n' +
      'страна производства: Казахстан',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/hcf/46737337778206/sin-lajn-bomba-rozok-cernoe-pecene-125-g-102676928-1.jpg',
    img2: '',
    img3: '',
    link: 'https://kaspi.kz/shop/p/morozhenoe-shin-lain-bomba-rozhok-chernoe-pechen-e-125-g-102676928/?c=750000000#!/item',
    like: 0
  },
  {
    id: 9,
    name: 'Мороженое Шин-Лайн Бомба сливочное вафельный mix 90 г',
    price: 325,
    description: 'вид мороженого: сливочное\n' +
      'форма выпуска: стаканчик\n' +
      'вкус: натуральный\n' +
      'страна производства: Казахстан',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/ha1/46737333387294/sin-lajn-bomba-slivocnoe-vafelnyj-mix-90-g-102676893-1.jpg',
    img2: '',
    img3: '',
    link: 'https://kaspi.kz/shop/p/morozhenoe-shin-lain-bomba-slivochnoe-vafel-nyi-mix-90-g-102676893/?c=750000000#!/item',
    like: 0
  },
  {
    id: 10,
    name: 'Мороженое Шин-Лайн Миша для супер семейки пломбир 800 г',
    price: 2199,
    description: 'вид мороженого: молочное\n' +
      'форма выпуска: брикет\n' +
      'вкус: натуральный\n' +
      'страна производства: Казахстан',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h41/hdf/46737882087454/sin-lajn-misa-dla-super-semejki-plombir-800-g-102677014-1.jpg',
    img3: '',
    img2: '',
    link: 'https://kaspi.kz/shop/p/morozhenoe-shin-lain-misha-dlja-super-semeiki-plombir-800-g-102677014/?c=750000000#!/item',
    like: 0
  },
  // Сэндвичи, бутерброды, шаурма
  {
    id: 11,
    name: 'Mfood.kz cендвич с курицей терияки 100 г',
    price: 650,
    description: 'тип: cендвич\n' +
      'не содержит: пальмовое масло, ,ГМО, ,глутамат натрия\n' +
      'страна производства: Казахстан',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/h0a/49929188278302/sendvic-s-kuricej-teriaki-104410525-1.jpg',
    img3: '',
    img2: '',
    link: 'https://kaspi.kz/shop/p/mfood-kz-cendvich-s-kuritsei-terijaki-100-g-104410525/?c=750000000#!/item',
    like: 0
  },
  {
    id: 12,
    name: 'Mfood.kz гренки с сыром и ветчиной 220 г\n',
    price: 990,
    description: 'тип: cендвич\n' +
      'не содержит: ГМО\n' +
      'страна производства: Казахстан',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h7d/62878169923614/mfood-kz-grenki-s-syrom-i-vetcinoj-220-g-106679923-1.jpg',
    img2: '',
    img3: '',
    link: 'https://kaspi.kz/shop/p/mfood-kz-grenki-s-syrom-i-vetchinoi-220-g-106679923/?c=750000000#!/item',
    like: 0
  },
  {
    id: 13,
    name: 'Mfood.kz чизбургер с куриной котлетой и фри 325 г',
    price: 2590,
    description: 'не содержит: пальмовое масло, ,ГМО, ,глутамат натрия\n' +
      'страна производства: Казахстан',
    rating: 4.5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/h40/49389706084382/cizburger-s-kurinoj-kotletoj-fri-v-podarok-mfood-kz-104139544-1.jpg',
    img2: '',
    img3: '',
    link: 'https://kaspi.kz/shop/p/mfood-kz-chizburger-s-kurinoi-kotletoi-i-fri-325-g-104139544/?c=750000000#!/item',
    like: 0
  },
  {
    id: 14,
    name: 'Сегодня клаб cендвич с курицей 150 г',
    price: 649,
    description: 'тип: cендвич\n' +
      'не содержит: нитрит натрия\n' +
      'страна производства: Казахстан',
    rating: 4.5,
    img3: '',
    img2: '',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf3/h72/62052763009054/segodna-klab-cendvic-s-kuricej-150-g-106232846-1.jpg',
    link: 'https://kaspi.kz/shop/p/segodnja-klab-cendvich-s-kuritsei-150-g-106232846/?c=750000000#!/item',
    like: 0
  },
  {
    id: 15,
    name: 'Mfood.kz гамбургер с куриной котлетой и фри 325 г',
    price: 2290,
    description: 'тип: гамбургер\n' +
      'не содержит: пальмовое масло, ,ГМО, ,глутамат натрия\n' +
      'страна производства: Казахстан',
    rating: 3.5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h51/49389693501470/burger-s-kurinoj-kotletoj-fri-v-podarok-mfood-kz-104139499-1.jpg',
    img2: '',
    img3: '',
    link: 'https://kaspi.kz/shop/p/mfood-kz-gamburger-s-kurinoi-kotletoi-i-fri-325-g-104139499/?c=750000000#!/item',
    like: 0
  },
  // Соки, нектары, морсы
  {
    id: 16,
    name: 'DaDa сок виноград, клубника, черника 1.9 л',
    price: 992,
    description: 'вкус: виноград, ,клубника, ,черника',
    rating: 5,
    img3: '',
    img2: '',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h15/44440612569118/dada-sok-vinograd-chernika-klubnika-1-9-l-102043216-1.jpg',
    link: 'https://kaspi.kz/shop/p/dada-sok-vinograd-klubnika-chernika-1-9-l-102043216/?c=750000000#!/item',
    like: 0
  },
  {
    id: 17,
    name: 'Piko сок яблоко 1 л\n',
    price: 585,
    description: 'тип: сок\n' +
      'разновидность: фруктовый\n' +
      'с мякотью: Нет\n' +
      'вкус: яблоко\n' +
      'страна производства: Казахстан',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/ha9/46694446792734/piko-sok-yabloko-1-l-101088659-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h27/46694447022110/piko-sok-yabloko-1-l-101088659-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h56/46694447251486/piko-sok-yabloko-1-l-101088659-3.jpg',
    link: 'https://kaspi.kz/shop/p/piko-sok-jabloko-1-l-101088659/?c=750000000#!/item',
    like: 0
  },
  {
    id: 18,
    name: 'DaDa сок тропик 1.9 л\n',
    price: 830,
    description: 'тип: сок\n' +
      'разновидность: фруктовый\n' +
      'с мякотью: Да\n' +
      'вкус: мультифрукт\n' +
      'страна производства: Казахстан',
    rating: 5,
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h5e/49751549706270/dada-sok-mul-tifrukt-1-9-l-100799201-3.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h90/49751549247518/dada-sok-mul-tifrukt-1-9-l-100799201-2.jpg',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdb/ha8/49751549018142/dada-sok-mul-tifrukt-1-9-l-100799201-1.jpg',
    link: 'https://kaspi.kz/shop/p/dada-sok-tropik-1-9-l-100799201/?c=750000000#!/item',
    like: 0
  },
  {
    id: 19,
    name: 'Gracio сок гранат 0.95 л\n',
    price: 744,
    description: 'тип: сок\n' +
      'разновидность: фруктовый\n' +
      'с мякотью: Нет\n' +
      'вкус: гранат\n' +
      'страна производства: Казахстан',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h9d/51899451506718/gracio-sok-granat-0-95-l-100219115-1.jpg',
    img2: '',
    img3: '',
    link: 'https://kaspi.kz/shop/p/gracio-sok-granat-0-95-l-100219115/?c=750000000#!/item',
    like: 0
  },
  {
    id: 20,
    name: 'Gracio сок вишня 0.95 л\n',
    price: 713,
    description: 'тип: сок\n' +
      'разновидность: ягодный\n' +
      'с мякотью: Нет\n' +
      'вкус: вишня\n' +
      'страна производства: Казахстан',
    rating: 5,
    img3: '',
    img2: '',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/h84/51898839891998/gracio-sok-vishnya-0-95-l-100217456-1.jpg',
    link: 'https://kaspi.kz/shop/p/gracio-sok-vishnja-0-95-l-100217456/?c=750000000#!/item',
    like: 0
  }

];
