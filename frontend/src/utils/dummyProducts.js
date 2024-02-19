import planta1 from "../assets/planta1.jpeg";
import planta2 from "../assets/planta2.jpeg";
import planta3 from "../assets/planta3.jpeg";
import planta4 from "../assets/planta4.jpeg";
import planta5 from "../assets/planta5.jpeg";

export const Product = [
  {
    id: 1,
    name: "Planta 1",
    image: planta1,
    images: [ planta1, planta2, planta3, planta4, planta5 ],
    category: "Planta medicinal",
    characteristics: [
      {
        id: 1,
        name: "Altura",
        value: "1.5m",
      },
      {
        id: 2,
        name: "Temperatura",
        value: "20-30°C",
      },
      {
        id: 3,
        name: "Riego",
        value: "Cada 3 días",
      },
      {
        id: 4,
        name: "Luz",
        value: "Media",
      },
    ],
  },
  {
    id: 2,
    name: "Planta 2",
    image: planta2,
    images: [ planta1, planta2, planta3, planta4, planta5 ],
    category: "Planta ornamental",
    characteristics: [
      {
        id: 1,
        name: "Altura",
        value: "1.5m",
      },
      {
        id: 2,
        name: "Temperatura",
        value: "20-30°C",
      },
      {
        id: 3,
        name: "Riego",
        value: "Cada 3 días",
      },
      {
        id: 4,
        name: "Luz",
        value: "Media",
      },
    ],
  },
  {
    id: 3,
    name: "Planta 3",
    image: planta3,
    images: [ planta1, planta2, planta3, planta4, planta5 ],
    category: "Planta ornamental",
    characteristics: [
      {
        id: 1,
        name: "Altura",
        value: "1.5m",
      },
      {
        id: 2,
        name: "Temperatura",
        value: "20-30°C",
      },
      {
        id: 3,
        name: "Riego",
        value: "Cada 3 días",
      },
      {
        id: 4,
        name: "Luz",
        value: "Media",
      },
    ],
  },
  {
    id: 4,
    name: "Planta 4",
    image: planta4,
    images: [ planta1, planta2, planta3, planta4, planta5 ],
    category: "Planta ornamental",
    characteristics: [
      {
        id: 1,
        name: "Altura",
        value: "1.5m",
      },
      {
        id: 2,
        name: "Temperatura",
        value: "20-30°C",
      },
      {
        id: 3,
        name: "Riego",
        value: "Cada 3 días",
      },
      {
        id: 4,
        name: "Luz",
        value: "Media",
      },
    ],
  },
  {
    id: 5,
    name: "Planta 5",
    image: planta5,
    images: [ planta1, planta2, planta3, planta4, planta5 ],
    category: "Planta medicinal",
    characteristics: [
      {
        id: 1,
        name: "Altura",
        value: "1.5m",
      },
      {
        id: 2,
        name: "Temperatura",
        value: "20-30°C",
      },
      {
        id: 3,
        name: "Riego",
        value: "Cada 3 días",
      },
      {
        id: 4,
        name: "Luz",
        value: "Media",
      },
    ],
  },
];

export const Category = [
  {
    id: "1",
    name: "Planta medicinal",
  },
  {
    id: "2",
    name: "Planta ornamental",
  },
];
