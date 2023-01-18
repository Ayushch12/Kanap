const products = [
  {
    "colors": ["Blue", "White", "Black"],
    "size": ["S", "M", "L","XL","XXL"],
    "_id": "107fb5b75607497b96722bda5b504926",
    "name": "Kanap",
    "price": "49 ",
    "sign": "€ ",
    "imageUrl": "kanap01.jpeg",
    "category": "Topwear",
    "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "altTxt": "Photo of a blue sofa, two seats"
  },
  {
    "colors": ["Black/Yellow", "Black/Red"],
    "size": ["S", "M", "L","XL","XXL"],
    "_id": "415b7cacb65d43b2b5c1ff70f3393ad1",
    "name": "Kanap Cyllène",
    "price": " 200 ",
    "sign": "€ ",
    "imageUrl": "kanap02.jpeg",
    "category": "Topwear",
    "description": "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
    "altTxt": "Photo of a yellow and black sofa, four seats"
  },
  {
    "colors": ["Green", "Red", "Orange"],
    "size": ["S", "M", "L","XL","XXL"],
    "_id": "055743915a544fde83cfdfc904935ee7",
    "name": "Kanap Calycé",
    "price": " 200 ",
    "sign": "€ ",
    "imageUrl": "kanap03.jpeg",
    "category": "Topwear",
    "description": "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.",
    "altTxt": "Photo of a green angle sofa, three seats"
  },
  {
    "colors": ["Pink", "White"],
    "size": ["S", "M", "L","XL","XXL"],
    "_id": "a557292fe5814ea2b15c6ef4bd73ed83",
    "name": "Kanap Autonoé",
    "price": " 200 ",
    "sign": "€ ",
    "imageUrl": "kanap04.jpeg",
    "category": "Bottomwear",
    "description": "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
    "altTxt": "Photo of a pink sofa, one to two seats"
  },
  {
    "colors": ["Grey", "Purple", "Blue"],
    "size": ["S", "M", "L","XL","XXL"],
    "_id": "8906dfda133f4c20a9d0e34f18adcf06",
    "name": "Kanap Eurydomé",
    "price": " 200 ",
    "sign": "€ ",
    "imageUrl": "kanap05.jpeg",
    "category": "Watch",
    "description": "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.",
    "altTxt": "Photo of a gray sofa, three seats"
  },
  {
    "colors": ["Grey", "Navy"],
    "size": ["S", "M", "L","XL","XXL"],
    "_id": "77711f0e466b4ddf953f677d30b0efc9",
    "name": "Kanap Hélicé",
    "price": " 200 ",
    "sign": "€ ",
    "imageUrl": "kanap06.jpeg",
    "category": "Topwear",
    "description": "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.",
    "altTxt": "Photo of a gray sofa, two seats"
  },
  {
    "colors": ["Red", "Silver"],
    "size": ["S", "M", "L","XL","XXL"],
    "_id": "034707184e8e4eefb46400b5a3774b5f",
    "name": "Kanap Thyoné",
    "price": " 200 ",
    "sign": "€ ",
    "imageUrl": "kanap07.jpeg",
    "category": "Topwear",
    "description": "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.",
    "altTxt": "Photo of a red sofa, two seats"
  },
  {
    "colors": ["Pink", "Brown", "Yellow", "White"],
    "size": ["S", "M", "L","XL","XXL"],
    "_id": "a6ec5b49bd164d7fbe10f37b6363f9fb",
    "name": "Kanap orthosie",
    "price": "200 ",
    "sign": "€ ",
    "imageUrl": "kanap08.jpeg",
    "category": "Topwear",
    "description": "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
    "altTxt": "Photo of a pink sofa, three seats"
  },
  {
    "colors": ["Pink", "Brown", "Yellow", "White"],
    "size": ["S", "M", "L","XL","XXL"],
    "_id": "a6ec5b49bd164d7fbe10f37b6363f9fb",
    "name": "Kanap orthosie",
    "price": " 200 ",
    "sign": "€ ",
    "imageUrl": "kanap08.jpeg",
    "category": "Topwear",
    "description": "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
    "altTxt": "Photo of a pink sofa, three seats"
  }

];


exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(products)).find(product =>
      product._id == id)
    )
  );
}





