import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Официальный дилер</Badge>,
    title: "Погрузочная техника для любых задач.",
    showButton: true,
    buttonText: 'Смотреть каталог'
  },
  {
    id: 'about',
    title: 'Почему выбирают нас?',
    content: 'Более 10 лет на рынке спецтехники. Гарантия на все машины, сервисное обслуживание, поставка под заказ. Работаем с юридическими и физическими лицами.'
  },
  {
    id: 'features',
    title: 'Наш каталог',
    content: 'В наличии и под заказ. Лучшие мировые бренды по конкурентным ценам.',
    catalog: [
      {
        name: 'Фронтальные погрузчики',
        description: 'Мощные машины для погрузки, перемещения сыпучих материалов и расчистки территорий.',
        image: 'https://cdn.poehali.dev/projects/be5d07f6-da5e-4942-8dd7-7d2be4b47c0e/files/48648fed-9cc8-46c5-a45e-99ea66cbf2b6.jpg'
      },
      {
        name: 'Вилочные погрузчики',
        description: 'Надёжная складская техника для работы с паллетами и тяжёлыми грузами.',
        image: 'https://cdn.poehali.dev/projects/be5d07f6-da5e-4942-8dd7-7d2be4b47c0e/files/cdef2c1f-079b-43de-94d4-a8c16f735fc5.jpg'
      },
      {
        name: 'Погрузчики-экскаваторы',
        description: 'Универсальная техника: спереди — ковш погрузчика, сзади — стрела экскаватора.',
        image: 'https://cdn.poehali.dev/projects/be5d07f6-da5e-4942-8dd7-7d2be4b47c0e/files/b3080686-a64d-4ff2-bb87-7ecd98d001a5.jpg'
      },
      {
        name: 'Мини-экскаваторы',
        description: 'Компактные машины для работы в стеснённых условиях — траншеи, коммуникации, ландшафт.',
        image: 'https://cdn.poehali.dev/projects/be5d07f6-da5e-4942-8dd7-7d2be4b47c0e/files/b9e143b3-1b6b-430b-917d-6504a5361bb9.jpg'
      },
    ]
  },
  {
    id: 'testimonials',
    title: 'Надёжная техника — надёжный бизнес.',
    content: 'Наши клиенты — строительные компании, склады, агропредприятия и муниципальные службы по всей стране. Доверяют нам за честные условия и быструю поставку.'
  },
  {
    id: 'join',
    title: 'Получите предложение сегодня',
    content: 'Оставьте заявку — наш менеджер свяжется с вами в течение 30 минут, подберёт технику под ваши задачи и озвучит лучшую цену.',
    showButton: true,
    buttonText: 'Оставить заявку'
  },
]