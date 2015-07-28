/*
 * Copyright (c) 2015, Sowmya B A. All rights reserved.
 */

'use strict';

var data = {
  "categories": [
    {
      "id": "0",
      "name": "Others",
      "image": "img/items/mur-01-s.jpg"
    },
    {
      "id": "1",
      "name": "Oil Paintings",
      "image": "img/items/oil-01-s.jpg"
    },
    {
      "id": "2",
      "name": "Kalamkari",
      "image": "img/items/kal-01-s.jpg"
    },
    {
      "id": "3",
      "name": "Zentangles",
      "image": "img/items/zen-01-s.jpg"
    },
    {
      "id": "4",
      "name": "Hand Painted Vases",
      "image": "img/items/pot-01-s.jpg"
    },
    {
      "id": "5",
      "name": "Colour Pencil Sketches",
      "image": "img/items/pcl-01-s.jpg"
    }
  ],
  "items": [
    {
      "id": "oil-01",
      "name": "The Maharashtrian Lady",
      "category": "1",
      "price": 15000,
      "size": [20, 28],
      "outOfStock": true,
      "description": "Media - Oil on canvas",
      "images": {
        "small": [
          "img/items/oil-01-s.jpg"
        ],
        "large": [
          "img/items/oil-01-l.jpg"
        ]
      }
    },
    {
      "id": "oil-02",
      "name": "Lady Playing Swarbat",
      "category": "1",
      "price": 15000,
      "size": [23.5, 27.5],
      "description": "Media - Oil on canvas",
      "images": {
        "small": [
          "img/items/oil-02-s.jpg"
        ],
        "large": [
          "img/items/oil-02-l.jpg"
        ]
      }
    },
    {
      "id": "oil-03",
      "name": "The Buddha",
      "category": "1",
      "price": 10000,
      "size": [22.5, 22.5],
      "description": "Media - Oil on canvas",
      "images": {
        "small": [
          "img/items/oil-03-s.jpg"
        ],
        "large": [
          "img/items/oil-03-l.jpg"
        ]
      }
    },
    {
      "id": "oil-04",
      "name": "Toy Seller",
      "category": "1",
      "price": 8000,
      "size": [24, 36],
      "description": "Media - Oil on canvas",
      "images": {
        "small": [
          "img/items/oil-04-s.jpg"
        ],
        "large": [
          "img/items/oil-04-l.jpg"
        ]
      }
    },
    {
      "id": "oil-05",
      "name": "Weeping Boy",
      "category": "1",
      "price": 5000,
      "size": [17.5, 21.5],
      "description": "Media - Oil on canvas",
      "images": {
        "small": [
          "img/items/oil-05-s.jpg"
        ],
        "large": [
          "img/items/oil-05-l.jpg"
        ]
      }
    },
    {
      "id": "kal-01",
      "name": "Radha Krishna",
      "category": "2",
      "price": 10000,
      "size": [21, 28],
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": [
          "img/items/kal-01-s.jpg"
        ],
        "large": [
          "img/items/kal-01-l.jpg"
        ]
      }
    },
    {
      "id": "kal-02",
      "name": "Dancing Ganesha",
      "category": "2",
      "price": 10000,
      "size": [24, 28],
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": [
          "img/items/kal-02-s.jpg"
        ],
        "large": [
          "img/items/kal-02-l.jpg"
        ]
      }
    },
    {
      "id": "kal-03",
      "name": "Saraswathi",
      "category": "2",
      "price": 15000,
      "size": [24, 30],
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": [
          "img/items/kal-03-s.jpg"
        ],
        "large": [
          "img/items/kal-03-l.jpg"
        ]
      }
    },
    {
      "id": "kal-04",
      "name": "The Buddha",
      "category": "2",
      "price": 10000,
      "size": [26, 32],
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": [
          "img/items/kal-04-s.jpg"
        ],
        "large": [
          "img/items/kal-04-l.jpg"
        ]
      }
    },
    {
      "id": "kal-05",
      "name": "Peacock",
      "category": "2",
      "price": 8000,
      "size": [21, 28],
      "outOfStock": true,
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": [
          "img/items/kal-05-s.jpg"
        ],
        "large": [
          "img/items/kal-05-l.jpg"
        ]
      }
    },
    {
      "id": "kal-06",
      "name": "Twin Elephants",
      "category": "2",
      "price": 8000,
      "size": [28.5, 22.5],
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": [
          "img/items/kal-06-s.jpg"
        ],
        "large": [
          "img/items/kal-06-l.jpg"
        ]
      }
    },
    {
      "id": "kal-07",
      "name": "Twin Horses",
      "category": "2",
      "price": 8000,
      "size": [28.5, 22.5],
      "description": "Media - Acrylic on Cloth",
      "images": {
        "small": [
          "img/items/kal-07-s.jpg"
        ],
        "large": [
          "img/items/kal-07-l.jpg"
        ]
      }
    },
    {
      "id": "zen-01",
      "name": "Humming Bird",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-01-s.jpg"
        ],
        "large": [
          "img/items/zen-01-l.jpg"
        ]
      }
    },
    {
      "id": "zen-02",
      "name": "Fly Catcher 1",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-02-s.jpg"
        ],
        "large": [
          "img/items/zen-02-l.jpg"
        ]
      }
    },
    {
      "id": "zen-03",
      "name": "Fly Catcher 2",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-03-s.jpg"
        ],
        "large": [
          "img/items/zen-03-l.jpg"
        ]
      }
    },
    {
      "id": "zen-04",
      "name": "Fly Catcher 3",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-04-s.jpg"
        ],
        "large": [
          "img/items/zen-04-l.jpg"
        ]
      }
    },
    {
      "id": "zen-05",
      "name": "Floral Girl",
      "category": "3",
      "price": 3000,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-05-s.jpg"
        ],
        "large": [
          "img/items/zen-05-l.jpg"
        ]
      }
    },
    {
      "id": "zen-06",
      "name": "Tribal Girl",
      "category": "3",
      "price": 3000,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-06-s.jpg"
        ],
        "large": [
          "img/items/zen-06-l.jpg"
        ]
      }
    },
    {
      "id": "zen-07",
      "name": "Mermaid",
      "category": "3",
      "price": 3000,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-07-s.jpg"
        ],
        "large": [
          "img/items/zen-07-l.jpg"
        ]
      }
    },
    {
      "id": "zen-08",
      "name": "War Horse",
      "category": "3",
      "price": 2500,
      "size": [15.5, 13],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-08-s.jpg"
        ],
        "large": [
          "img/items/zen-08-l.jpg"
        ]
      }
    },
    {
      "id": "zen-09",
      "name": "Wild Horse",
      "category": "3",
      "price": 2500,
      "size": [20, 16.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-09-s.jpg"
        ],
        "large": [
          "img/items/zen-09-l.jpg"
        ]
      }
    },
    {
      "id": "zen-10",
      "name": "Blaze",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-10-s.jpg"
        ],
        "large": [
          "img/items/zen-10-l.jpg"
        ]
      }
    },
    {
      "id": "zen-11",
      "name": "Fossil Shell",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-11-s.jpg"
        ],
        "large": [
          "img/items/zen-11-l.jpg"
        ]
      }
    },
    {
      "id": "zen-12",
      "name": "Peacock",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "outOfStock": true,
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-12-s.jpg"
        ],
        "large": [
          "img/items/zen-12-l.jpg"
        ]
      }
    },
    {
      "id": "zen-13",
      "name": "Tangled Peacock Web",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-13-s.jpg"
        ],
        "large": [
          "img/items/zen-13-l.jpg"
        ]
      }
    },
    {
      "id": "zen-14",
      "name": "Tribal Elephant",
      "category": "3",
      "price": 3000,
      "size": [17, 19.5],
      "outOfStock": true,
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-14-s.jpg"
        ],
        "large": [
          "img/items/zen-14-l.jpg"
        ]
      }
    },
    {
      "id": "zen-15",
      "name": "Dancing Ganesha",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-15-s.jpg"
        ],
        "large": [
          "img/items/zen-15-l.jpg"
        ]
      }
    },
    {
      "id": "zen-16",
      "name": "Mooshika Ganesha",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-16-s.jpg"
        ],
        "large": [
          "img/items/zen-16-l.jpg"
        ]
      }
    },
    {
      "id": "zen-17",
      "name": "Ganesha",
      "category": "3",
      "price": 2500,
      "size": [13, 15.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-17-s.jpg"
        ],
        "large": [
          "img/items/zen-17-l.jpg"
        ]
      }
    },
    {
      "id": "zen-18",
      "name": "Modaka Ganesha",
      "category": "3",
      "price": 2500,
      "size": [13, 16.5],
      "description": "Media - Pen and pencil on paper",
      "images": {
        "small": [
          "img/items/zen-18-s.jpg"
        ],
        "large": [
          "img/items/zen-18-l.jpg"
        ]
      }
    },
    {
      "id": "pcl-01",
      "name": "Mrs. Chardin",
      "category": "5",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Glass Marking Pencils",
      "images": {
        "small": [
          "img/items/pcl-01-s.jpg"
        ],
        "large": [
          "img/items/pcl-01-l.jpg"
        ]
      }
    },
    {
      "id": "pcl-02",
      "name": "Fruit Seller",
      "category": "5",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Colour Pencils",
      "images": {
        "small": [
          "img/items/pcl-02-s.jpg"
        ],
        "large": [
          "img/items/pcl-02-l.jpg"
        ]
      }
    },
    {
      "id": "pcl-03",
      "name": "Vegetable Seller",
      "category": "5",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Colour Pencils",
      "images": {
        "small": [
          "img/items/pcl-03-s.jpg"
        ],
        "large": [
          "img/items/pcl-03-l.jpg"
        ]
      }
    },
    {
      "id": "pcl-04",
      "name": "Lady with the Lamp",
      "category": "5",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Colour Pencils",
      "images": {
        "small": [
          "img/items/pcl-04-s.jpg"
        ],
        "large": [
          "img/items/pcl-04-l.jpg"
        ]
      }
    },
    {
      "id": "mur-01",
      "name": "Lady with Pot",
      "category": "0",
      "price": 10000,
      "size": [24, 30],
      "outOfStock": true,
      "description": "Media - Mural",
      "images": {
        "small": [
          "img/items/mur-01-s.jpg"
        ],
        "large": [
          "img/items/mur-01-l.jpg"
        ]
      }
    },
    {
      "id": "mar-01",
      "name": "Lady Playing Instrument",
      "category": "0",
      "price": 3000,
      "size": [9, 10],
      "outOfStock": true,
      "description": "Media - Marble Painting",
      "images": {
        "small": [
          "img/items/mar-01-s.jpg"
        ],
        "large": [
          "img/items/mar-01-l.jpg"
        ]
      }
    },
    {
      "id": "pas-01",
      "name": "Vegetable Seller",
      "category": "0",
      "price": 10000,
      "size": [20, 24],
      "outOfStock": true,
      "description": "Media - Oil Pastels",
      "images": {
        "small": [
          "img/items/pas-01-s.jpg"
        ],
        "large": [
          "img/items/pas-01-l.jpg"
        ]
      }
    },
    {
      "id": "mnk-01",
      "name": "Rajasthani woman",
      "category": "0",
      "price": 8000,
      "size": [30, 24],
      "outOfStock": true,
      "description": "Meenakari - Mixed Media, Oil on Canvas",
      "images": {
        "small": [
          "img/items/mnk-01-s.jpg"
        ],
        "large": [
          "img/items/mnk-01-l.jpg"
        ]
      }
    },
    {
      "id": "mnk-02",
      "name": "Mother and Children",
      "category": "0",
      "price": 8000,
      "size": [18, 25],
      "description": "Meenakari - Mixed Media, Oil on Canvas",
      "images": {
        "small": [
          "img/items/mnk-02-s.jpg"
        ],
        "large": [
          "img/items/mnk-02-l.jpg"
        ]
      }
    },
    {
      "id": "acr-01",
      "name": "Egyptian Pharoah",
      "category": "0",
      "price": 4000,
      "size": [22, 18],
      "description": "Media - Acrylic Paint",
      "images": {
        "small": [
          "img/items/acr-01-s.jpg"
        ],
        "large": [
          "img/items/acr-01-l.jpg"
        ]
      }
    },
    {
      "id": "pot-01",
      "name": "Leopard Prints",
      "category": "4",
      "price": 300,
      "size": [3.5, 6],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-01-s.jpg"
        ],
        "large": [
          "img/items/pot-01-l.jpg"
        ]
      }
    },
    {
      "id": "pot-02",
      "name": "Elephants at Sunset",
      "category": "4",
      "price": 500,
      "size": [4.75, 5.5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-02-s.jpg"
        ],
        "large": [
          "img/items/pot-02-l.jpg"
        ]
      }
    },
    {
      "id": "pot-03",
      "name": "Giraffes at Sunset",
      "category": "4",
      "price": 500,
      "size": [5, 5.5],
      "outOfStock": true,
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-03-s.jpg"
        ],
        "large": [
          "img/items/pot-03-l.jpg"
        ]
      }
    },
    {
      "id": "pot-04",
      "name": "Kathakali face",
      "category": "4",
      "price": 600,
      "size": [4, 5.5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-04-s.jpg"
        ],
        "large": [
          "img/items/pot-04-l.jpg"
        ]
      }
    },
    {
      "id": "pot-05",
      "name": "Ajantha Ellora",
      "category": "4",
      "price": 800,
      "size": [6, 5.5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-05-s.jpg"
        ],
        "large": [
          "img/items/pot-05-l.jpg"
        ]
      }
    },
    {
      "id": "pot-06",
      "name": "Spiral Warli",
      "category": "4",
      "price": 600,
      "size": [4.25, 5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-06-s.jpg"
        ],
        "large": [
          "img/items/pot-06-l.jpg"
        ]
      }
    },
    {
      "id": "pot-07",
      "name": "Warli",
      "category": "4",
      "price": 400,
      "size": [3.5, 6],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-07-s.jpg"
        ],
        "large": [
          "img/items/pot-07-l.jpg"
        ]
      }
    },
    {
      "id": "pot-08",
      "name": "Black Ovals",
      "category": "4",
      "price": 400,
      "size": [4.2, 5.5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-08-s.jpg"
        ],
        "large": [
          "img/items/pot-08-l.jpg"
        ]
      }
    },
    {
      "id": "pot-09",
      "name": "Sunflower",
      "category": "4",
      "price": 500,
      "size": [5.5, 3.5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-09-s.jpg"
        ],
        "large": [
          "img/items/pot-09-l.jpg"
        ]
      }
    },
    {
      "id": "pot-10",
      "name": "Black Circles",
      "category": "4",
      "price": 300,
      "size": [3.5, 4.5],
      outOfStock: true,
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-10-s.jpg"
        ],
        "large": [
          "img/items/pot-10-l.jpg"
        ]
      }
    },
    {
      "id": "pot-11",
      "name": "Lady Bug Small",
      "category": "4",
      "price": 300,
      "size": [3.9, 4.6],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-11-s.jpg"
        ],
        "large": [
          "img/items/pot-11-l.jpg"
        ]
      }
    },
    {
      "id": "pot-12",
      "name": "Lady Bug",
      "category": "4",
      "price": 500,
      "size": [4, 9],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-12-s.jpg"
        ],
        "large": [
          "img/items/pot-12-l.jpg"
        ]
      }
    },
    {
      "id": "pot-13",
      "name": "White Circles on Red",
      "category": "4",
      "price": 400,
      "size": [4.2, 5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-13-s.jpg"
        ],
        "large": [
          "img/items/pot-13-l.jpg"
        ]
      }
    },
    {
      "id": "pot-14",
      "name": "Black and White Triangles",
      "category": "4",
      "price": 500,
      "size": [4.5, 5.2],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-14-s.jpg"
        ],
        "large": [
          "img/items/pot-14-l.jpg"
        ]
      }
    },
    {
      "id": "pot-15",
      "name": "Brown Crackled",
      "category": "4",
      "price": 300,
      "size": [4.3, 5.5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-15-s.jpg"
        ],
        "large": [
          "img/items/pot-15-l.jpg"
        ]
      }
    },
    {
      "id": "pot-16",
      "name": "Creepers",
      "category": "4",
      "price": 500,
      "size": [4.5, 5.2],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-16-s.jpg"
        ],
        "large": [
          "img/items/pot-16-l.jpg"
        ]
      }
    },
    {
      "id": "pot-17",
      "name": "Wedges",
      "category": "4",
      "price": 500,
      "size": [4.4, 4],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-17-s.jpg"
        ],
        "large": [
          "img/items/pot-17-l.jpg"
        ]
      }
    },
    {
      "id": "pot-18",
      "name": "Abstract Triangles",
      "category": "4",
      "price": 250,
      "size": [3, 6.5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-18-s.jpg"
        ],
        "large": [
          "img/items/pot-18-l.jpg"
        ]
      }
    },
    {
      "id": "pot-19",
      "name": "Pink and Black Floral",
      "category": "4",
      "price": 250,
      "size": [3.5, 4.5],
      "description": "Media - Acrylic on Terracotta Pot",
      "images": {
        "small": [
          "img/items/pot-19-s.jpg"
        ],
        "large": [
          "img/items/pot-19-l.jpg"
        ]
      }
    }
  ]
};

module.exports = data;
