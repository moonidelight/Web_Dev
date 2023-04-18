export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img1: string,
  img2: string,
  img3: string
  rating: number,
  link: string
}

export const products = [
  {
    id: 1,
    name: 'Когтеточка Кактус XR10032 зеленый',
    price: 14900,
    // description: "smth"
    description: 'тип: когтеточка\n' +
      'форма: круглая\n' +
      'материал: дерево, ,ковролин\n' +
      'место установки: напольная\n' +
      'длина: 40 см\n' +
      'ширина: 40 см\n' +
      'страна производитель: Китай',
    img1: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/hed/68678994460702/kogtetochka-kaktus-xr10032-zelenyi-108767388-1.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h41/68678994722846/kogtetochka-kaktus-xr10032-zelenyi-108767388-2.jpg",
    img3: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h48/he0/68678994984990/kogtetochka-kaktus-xr10032-zelenyi-108767388-3.jpg",
    link: "https://kaspi.kz/shop/p/kogtetochka-kaktus-xr10032-zelenyi-108767388/?c=750000000#!/item",
    rating: 0
  },
  {
    id: 2,
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
    id: 3,
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
    link: "https://kaspi.kz/shop/p/felix-kusochki-v-zhele-kuritsa-85-g-1-sht-100218764/?c=750000000#!/item"
  },
  {
    id: 4,
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
    link: "https://kaspi.kz/shop/p/kitekat-teljatinka-appetitnaja-1-9-kg-100221515/?c=750000000#!/item"
  },
  {
    id: 5,
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
    link: 'https://kaspi.kz/shop/p/whiskas-vkusnye-podushechki-s-nezhnym-pashtetom-kuritsa-i-indeika-0-35-kg-100221268/?c=750000000#!/item'
  },
  {
    id: 6,
    name: 'Корм Friskies для котят курица, молоко и овощи 2 кг',
    price: 3255,
    description: 'порода: для любой породы\n' +
      'возраст животного: котята (до 1 года)\n' +
      'особые потребности: для беременных/кормящих кошек, ,для здоровья костей и суставов\n' +
      'ветеринарная диета: отсутствует\n' +
      'основной ингредиент: птица, ,овощи\n' +
      'холистик: Нет\n' +
      'вес упаковки: 2 кг',
    rating: 5,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf6/h33/46689783250974/friskies-dla-kotat-kurica-moloko-i-ovosi-2-kg-100175356-1-Container.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha8/hfc/46689783480350/friskies-dla-kotat-kurica-moloko-i-ovosi-2-kg-100175356-2-Container.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/h5d/46689783709726/friskies-dla-kotat-kurica-moloko-i-ovosi-2-kg-100175356-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/friskies-dlja-kotjat-kuritsa-moloko-i-ovoschi-2-kg-100175356/?c=750000000#!/item'
  },
  {
    id: 7,
    name: 'Корм Perfect Fit Для стерилизованных кошек 75 г 1 шт',
    price: 209,
    description: 'порода: для любой породы\n' +
      'текстура: паштет\n' +
      'тип упаковки: пауч (пакетик)\n' +
      'количество упаковок: 1 шт\n' +
      'основной ингредиент: мясо\n' +
      'вес упаковки: 75 г\n' +
      'вкус: мясное ассорти',
    rating: 0,
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h20/h3a/51520215056414/korm-perfect-fit-dla-stirilizovannyh-kosek-pastet-s-govadinoj-75gr-d-p-105294087-1.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf6/h7b/51520215547934/korm-perfect-fit-dla-stirilizovannyh-kosek-pastet-s-govadinoj-75gr-d-p-105294087-2.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h5a/51520216072222/korm-perfect-fit-dla-stirilizovannyh-kosek-pastet-s-govadinoj-75gr-d-p-105294087-3.jpg',
    link: 'https://kaspi.kz/shop/p/perfect-fit-dlja-sterilizovannyh-koshek-75-g-1-sht-105294087/?c=750000000#!/item'
  },
  {
    id: 8,
    name: 'Корм Sheba 296326 75 г 1 шт',
    price: 265,
    description: 'порода: для любой породы\n' +
      'текстура: кусочки в соусе\n' +
      'тип упаковки: пауч (пакетик)\n' +
      'количество упаковок: 1 шт\n' +
      'основной ингредиент: мясо\n' +
      'вес упаковки: 75 г\n' +
      'вкус: мясное ассорти',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h74/47305875783710/sheba-craft-collection-agnenok-v-souse-0-75-g-1-st-102942490-1.jpg',
    img2: '',
    img3: '',
    link: 'https://kaspi.kz/shop/p/sheba-296326-75-g-1-sht-102942490/?c=750000000#!/item',
    rating: 5
  },
  {
    id: 9,
    name: 'Корм PRO PLAN Delicate Adult при чувствительном пищеварении индейка 1.5 кг',
    price: 6994,
    description: 'порода: для любой породы\n' +
      'возраст животного: взрослые (1-6 лет)\n' +
      'особые потребности: при чувствительном пищеварении\n' +
      'ветеринарная диета: отсутствует\n' +
      'основной ингредиент: мясо\n' +
      'холистик: Нет\n' +
      'вес упаковки: 1.5 кг',
    img1: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/hb4/46756335452190/pro-plan-delicate-adult-pri-cuvstvitelnom-pisevarenii-indejka-1-5-kg-100115938-1-Container.jpg',
    img2: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6d/h9b/46756335681566/pro-plan-delicate-adult-pri-cuvstvitelnom-pisevarenii-indejka-1-5-kg-100115938-2-Container.jpg',
    img3: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h47/h2d/46756335910942/pro-plan-delicate-adult-pri-cuvstvitelnom-pisevarenii-indejka-1-5-kg-100115938-3-Container.jpg',
    link: 'https://kaspi.kz/shop/p/pro-plan-delicate-adult-pri-chuvstvitel-nom-pischevarenii-indeika-1-5-kg--100115938/?c=750000000#!/item',
    rating: 5
  },
  {
    id: 10,
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
    link: 'https://kaspi.kz/shop/p/dreamies-podushechki-s-govjadinoi-140-g-101251114/?c=750000000#!/item'
  }
];
