/*
 * Copyright (c) 2016, Sowmya B A. All rights reserved.
 */

var data = {
  "categories": [
    {
      "id": "1",
      "name": "Oil Paintings",
      "image": "img/items/oil-01-s.jpg"
    },
    {
      "id": "2",
      "name": "Tanjore Paintings",
      "image": "img/items/tan-01-s.jpg"
    },
    {
      "id": "3",
      "name": "Kalamkari",
      "image": "img/items/kal-01-s.jpg"
    },
    {
      "id": "4",
      "name": "Colour Pencil Sketches",
      "image": "img/items/pcl-01-s.jpg"
    },
    {
      "id": "5",
      "name": "Zentangles",
      "image": "img/items/zen-01-s.jpg"
    },
    {
      "id": "6",
      "name": "Hand Painted Vases",
      "image": "img/items/pot-01-s.jpg"
    },
    {
      "id": "7",
      "name": "Others",
      "image": "img/items/mur-01-s.jpg"
    }
  ],
  "items": [
    {
      "id": "oil-01",
      "name": "The Maharashtrian Lady",
      "category": "1",
      "price": 20000,
      "size": [20, 28],
      "outOfStock": true,
      "description": "Media - Oil on canvas"
    },
    {
      "id": "oil-02",
      "name": "Lady Playing Swarbat",
      "category": "1",
      "price": 20000,
      "size": [23.5, 27.5],
      "description": "Media - Oil on canvas"
    },
    {
      "id": "oil-03",
      "name": "The Buddha",
      "category": "1",
      "price": 10000,
      "size": [22.5, 22.5],
      "description": "Media - Oil on canvas"
    },
    {
      "id": "oil-04",
      "name": "Toy Seller",
      "category": "1",
      "price": 12000,
      "size": [24, 36],
      "description": "Media - Oil on canvas"
    },
    {
      "id": "oil-05",
      "name": "Weeping Boy",
      "category": "1",
      "price": 5000,
      "size": [17.5, 21.5],
      "description": "Media - Oil on canvas"
    },
    {
      "id": "tan-01",
      "name": "Ganesha",
      "category": "2",
      "price": 25000,
      "size": [16, 20],
      "outOfStock": true,
      "description": "Tanjore Painting - Antique Style"
    },
    {
      "id": "tan-02",
      "name": "Subramanya with Sri Valli and Devayani",
      "category": "2",
      "price": 30000,
      "size": [16, 20],
      "outOfStock": true,
      "description": "Tanjore Painting - Antique Style"
    },
    {
      "id": "tan-03",
      "name": "Vishnu",
      "category": "2",
      "price": 20000,
      "size": [13, 17],
      "outOfStock": true,
      "description": "Tanjore Painting - Classic Style"
    },
    {
      "id": "kal-01",
      "name": "Radha Krishna",
      "category": "3",
      "price": 10000,
      "size": [21, 28],
      "description": "Media - Acrylic on Cloth"
    },
    {
      "id": "kal-02",
      "name": "Dancing Ganesha",
      "category": "3",
      "price": 12000,
      "size": [24, 28],
      "description": "Media - Acrylic on Cloth"
    },
    {
      "id": "kal-03",
      "name": "Saraswathi",
      "category": "3",
      "price": 15000,
      "size": [24, 30],
      "description": "Media - Acrylic on Cloth"
    },
    {
      "id": "kal-04",
      "name": "The Buddha",
      "category": "3",
      "price": 12000,
      "size": [26, 32],
      "description": "Media - Acrylic on Cloth"
    },
    {
      "id": "kal-05",
      "name": "Peacock",
      "category": "3",
      "price": 8000,
      "size": [21, 28],
      "outOfStock": true,
      "description": "Media - Acrylic on Cloth"
    },
    {
      "id": "kal-06",
      "name": "Twin Elephants",
      "category": "3",
      "price": 9000,
      "size": [28.5, 22.5],
      "description": "Media - Acrylic on Cloth"
    },
    {
      "id": "kal-07",
      "name": "Twin Horses",
      "category": "3",
      "price": 9000,
      "size": [28.5, 22.5],
      "description": "Media - Acrylic on Cloth"
    },
    {
      "id": "zen-01",
      "name": "Humming Bird",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-02",
      "name": "Fly Catcher 1",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-03",
      "name": "Fly Catcher 2",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-04",
      "name": "Fly Catcher 3",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-05",
      "name": "Floral Girl",
      "category": "5",
      "price": 3000,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-06",
      "name": "Tribal Girl",
      "category": "5",
      "price": 3000,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-07",
      "name": "Mermaid",
      "category": "5",
      "price": 3000,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-08",
      "name": "War Horse",
      "category": "5",
      "price": 2500,
      "size": [15.5, 13],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-09",
      "name": "Wild Horse",
      "category": "5",
      "price": 2500,
      "size": [20, 16.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-10",
      "name": "Blaze",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-11",
      "name": "Fossil Shell",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "outOfStock": true,
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-12",
      "name": "Peacock",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "outOfStock": true,
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-13",
      "name": "Tangled Peacock Web",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-14",
      "name": "Tribal Elephant",
      "category": "5",
      "price": 3000,
      "size": [17, 19.5],
      "outOfStock": true,
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-15",
      "name": "Dancing Ganesha",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "outOfStock": true,
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-16",
      "name": "Mooshika Ganesha",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-17",
      "name": "Ganesha",
      "category": "5",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "zen-18",
      "name": "Modaka Ganesha",
      "category": "5",
      "price": 2500,
      "size": [13, 16.5],
      "description": "Media - Pen and pencil on paper"
    },
    {
      "id": "pcl-01",
      "name": "Mrs. Chardin",
      "category": "4",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Glass Marking Pencils"
    },
    {
      "id": "pcl-02",
      "name": "Fruit Seller",
      "category": "4",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Colour Pencils"
    },
    {
      "id": "pcl-03",
      "name": "Vegetable Seller",
      "category": "4",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Colour Pencils"
    },
    {
      "id": "pcl-04",
      "name": "Lady with the Lamp",
      "category": "4",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Colour Pencils"
    },
    {
      "id": "pcl-05",
      "name": "C N Mangala",
      "category": "4",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Colour Pencils"
    },
    {
      "id": "mur-01",
      "name": "Lady with Pot",
      "category": "7",
      "price": 20000,
      "size": [24, 30],
      "outOfStock": true,
      "description": "Media - Mural"
    },
    {
      "id": "mur-02",
      "name": "The Two Sisters",
      "category": "7",
      "price": 12000,
      "size": [24, 36],
      "outOfStock": true,
      "description": "Media - Mural"
    },
    {
      "id": "mur-03",
      "name": "Rajasthani lady at the Window",
      "category": "7",
      "price": 14000,
      "size": [24, 36],
      "outOfStock": true,
      "description": "Media - Mural"
    },
    {
      "id": "mar-01",
      "name": "Lady Playing Instrument",
      "category": "7",
      "price": 3000,
      "size": [9, 10],
      "outOfStock": true,
      "description": "Media - Marble Painting"
    },
    {
      "id": "pas-01",
      "name": "Vegetable Seller",
      "category": "7",
      "price": 12000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Oil Pastels"
    },
    {
      "id": "pas-02",
      "name": "Girl with Cap",
      "category": "7",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Oil Pastels"
    },
    {
      "id": "mnk-01",
      "name": "Rajasthani woman",
      "category": "7",
      "price": 10000,
      "size": [30, 24],
      "outOfStock": true,
      "description": "Meenakari - Mixed Media, Oil on Canvas"
    },
    {
      "id": "mnk-02",
      "name": "Mother and Children",
      "category": "7",
      "price": 10000,
      "size": [18, 25],
      "description": "Meenakari - Mixed Media, Oil on Canvas"
    },
    {
      "id": "acr-01",
      "name": "Egyptian Pharoah",
      "category": "7",
      "price": 4000,
      "size": [22, 18],
      "description": "Media - Acrylic Paint"
    },
    {
      "id": "pos-01",
      "name": "Sakhi going for Pooja",
      "category": "7",
      "price": 8000,
      "size": [20, 24],
      "description": "Media - Poster Colours"
    },
    {
      "id": "pot-01",
      "name": "Leopard Prints",
      "category": "6",
      "price": 300,
      "size": [3.5, 6],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-02",
      "name": "Elephants at Sunset",
      "category": "6",
      "price": 500,
      "size": [4.75, 5.5],
      "imageCount": 2,
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-03",
      "name": "Giraffes at Sunset",
      "category": "6",
      "price": 500,
      "size": [5, 5.5],
      "outOfStock": true,
      "imageCount": 3,
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-04",
      "name": "Kathakali face",
      "category": "6",
      "price": 600,
      "size": [4, 5.5],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-05",
      "name": "Ajantha Ellora",
      "category": "6",
      "price": 880,
      "size": [6, 5.5],
      "outOfStock": true,
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-06",
      "name": "Spiral Warli",
      "category": "6",
      "price": 600,
      "size": [4.25, 5],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-07",
      "name": "Warli",
      "category": "6",
      "price": 400,
      "size": [3.5, 6],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-08",
      "name": "Black Ovals",
      "category": "6",
      "price": 400,
      "size": [4.2, 5.5],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-09",
      "name": "Sunflower",
      "category": "6",
      "price": 500,
      "size": [5.5, 3.5],
      "imageCount": 2,
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-10",
      "name": "Black Circles",
      "category": "6",
      "price": 300,
      "size": [3.5, 4.5],
      "outOfStock": true,
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-11",
      "name": "Lady Bug Small",
      "category": "6",
      "price": 300,
      "size": [3.9, 4.6],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-12",
      "name": "Lady Bug",
      "category": "6",
      "price": 500,
      "size": [4, 9],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-13",
      "name": "White Circles on Red",
      "category": "6",
      "price": 400,
      "size": [4.2, 5],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-14",
      "name": "Black and White Triangles",
      "category": "6",
      "price": 500,
      "size": [4.5, 5.2],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-15",
      "name": "Brown Crackled",
      "category": "6",
      "price": 300,
      "size": [4.3, 5.5],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-16",
      "name": "Creepers",
      "category": "6",
      "price": 500,
      "size": [4.5, 5.2],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-17",
      "name": "Wedges",
      "category": "6",
      "price": 500,
      "size": [4.4, 4],
      "description": "Media - Acrylic on Terracotta Pot"
    },
    {
      "id": "pot-18",
      "name": "Abstract Triangles",
      "category": "6",
      "price": 250,
      "size": [3, 6.5],
      "outOfStock": true,
      "description": "Media - Acrylic on Terracotta Pot"
    }
  ]
};

data.items = data.items.map(function (item) {
  if (!item.imageCount) {
    item.imageCount = 1;
  }

  item.images = {
    small: [],
    large: []
  };

  for (var i = 0; i < item.imageCount; ++i) {
    item.images.small.push('img/items/' + item.id + '-' + (i || '') + 's.jpg');
    item.images.large.push('img/items/' + item.id + '-' + (i || '') + 'l.jpg');
  }

  return item;
});

export default data;
export let {categories, items} = data;
