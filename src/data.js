// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent3.png';
import Agent2 from './assets/img/agents/agent3.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent3.png';
import Agent5 from './assets/img/agents/agent3.png';
import Agent6 from './assets/img/agents/agent3.png';
import Agent7 from './assets/img/agents/agent3.png';
import Agent8 from './assets/img/agents/agent3.png';
import Agent9 from './assets/img/agents/agent3.png';
import Agent10 from './assets/img/agents/agent3.png';
import Agent11 from './assets/img/agents/agent3.png';
import Agent12 from './assets/img/agents/agent3.png';

export const housesData = [
  {
    id: 1,
    type: 'Maison',
    name: 'Maison 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'Cotonou',
    address: '22 Rue de la Liberté, Quartier Haie Vive',
    bedrooms: '6',
    bathrooms: '3',
    surface: '42.000 m²',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Kossi Afolabi',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'Maison',
    name: 'Maison 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'Lomé',
    address: '18 Rue des Commerçants, Quartier Adawlato',
    bedrooms: '6',
    bathrooms: '3',
    surface: '12.000 m²',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Jean Adande',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'Maison',
    name: 'Maison 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    country: 'Cotonou',
    address: '135 Avenue des Palmiers, Quartier Ganhi',
    bedrooms: '6',
    bathrooms: '3',
    surface: '5.000 m²',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Patrick Amado',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'Maison',
    name: 'Maison 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'Lomé',
    address: '76 Boulevard Circulaire, Quartier Bè-Kpota',
    bedrooms: '6',
    bathrooms: '3',
    surface: '46.000 m²',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Sèna Hounkpatin',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'Maison',
    name: 'Maison 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    country: 'Cotonou',
    address: '7 Rue de l\'Indépendance, Quartier Zongo',
    bedrooms: '5',
    bathrooms: '3',
    surface: '31.000 m²',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Gérard Ayélawadjè',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'Maison',
    name: 'Maison 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'Lomé',
    address: '29 Rue du Marché, Quartier Tokoin',
    bedrooms: '6',
    bathrooms: '3',
    surface: '63.000 m²',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Amélie Béklikame',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Appartement',
    name: 'Appartement 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Lomé',
    address: '5 Avenue des Cocotiers, Quartier Deckon',
    bedrooms: '2',
    bathrooms: '1',
    surface: '12.000 m²',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Kodjo Sotouboua',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Appartement',
    name: 'Appartement 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Cotonou',
    address: '50 Boulevard Marina, Quartier Jonquet',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1.000 m²',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Akouvi Avedji',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Appartement',
    name: 'Appartement 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Cotonou',
    address: '12 Rue des Cocotiers, Quartier Fidjrossè',
    bedrooms: '2',
    bathrooms: '1',
    surface: '11.000 m²',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Mawulé Baguida',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'Maison',
    name: 'Maison 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'Lomé',
    address: '42 Rue de l\'Indépendance, Quartier Nyékonakpoé',
    bedrooms: '5',
    bathrooms: '3',
    surface: '32.000 m²',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Yasmine Soglo',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'Maison',
    name: 'Maison 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'Lomé',
    address: '27 Avenue du Port, Quartier Be-Klikame',
    bedrooms: '7',
    bathrooms: '2',
    surface: '22.000 m²',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Aïcha Dossou',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'Maison',
    name: 'Maison 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    country: 'Cotonou',
    address: '3 Rue des Hibiscus, Quartier Cadjèhoun',
    bedrooms: '4',
    bathrooms: '4',
    surface: '46.000 m²',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Firmin Koudjo',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'Maison',
    name: 'Maison 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'Lomé',
    address: '55 Rue des Arts, Quartier Tokoin-Sotouboua',
    bedrooms: '5',
    bathrooms: '2',
    surface: '52.000 m²',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Agossa',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'Maison',
    name: 'Maison 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    country: 'Cotonou',
    address: '88 Avenue de la Paix, Quartier Agla',
    bedrooms: '5',
    bathrooms: '2',
    surface: '32.000 m²',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Serge Houngbédji',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'Maison',
    name: 'Maison 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    country: 'Lomé',
    address: '4 Boulevard de l\'Unité, Quartier Baguida',
    bedrooms: '4',
    bathrooms: '3',
    surface: '52.000 m²',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Nadège Agossa',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Appartement',
    name: 'Appartement 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Lomé',
    address: '36 Rue de la Résistance, Quartier Adétikopé',
    bedrooms: '2',
    bathrooms: '1',
    surface: '13.000 m²',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Josiane Tchamba',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Appartement',
    name: 'Appartement 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Cotonou',
    address: '15 Rue de l\'Église, Quartier Houéyiho',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1.000 m²',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Koffi Atakpamé',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Appartement',
    name: 'Appartement 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Lomé',
    address: '62 Avenue des Cocotiers, Quartier Avedji',
    bedrooms: '3',
    bathrooms: '1',
    surface: '12.000 m²',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Adjoa Agbodrafo',
      phone: '0123 456 78910',
    },
  },
];
