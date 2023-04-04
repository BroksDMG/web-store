import React from 'react'
import ProductCard from './ProductCard'
import ProductFilter from './ProductFilter'
function ProductsContainer() {
    const products=[
    {
        title:"Exvos Sparta perfumy",
        description:"Perfumy do samochodu",
        price:49.99,
        img:'https://k2.com.pl/wp-content/plugins/sscatalog/cache/images/822x822/37ccbdfc382279a794ec612688a0c576.jpg'

    },
    
    {
        title:"Miedź Spray 400 ML",
        description:"Wysokotemperaturowy, szybkoschnący smar miedziowy",
        price:30.33,
        img:'https://k2.com.pl/wp-content/plugins/sscatalog/cache/images/822x822/93459173777c54a0fbf49e26ede12c10.jpg'

    },
    {
        title:"Biały Smar z PTFE 400ML",
        description:"Redukuje tarcie, usuwa wigloć, eliminuje szkypienie i chroni przed korozją",
        price:28.40,
        img:'https://k2.com.pl/wp-content/plugins/sscatalog/cache/images/822x822/3041313a02c5286771dbafdaca00b909.jpg'

    },
    {
        title:"Gerwazy 10ml",
        description:"skuteczny odmrażacz do zamków",
        price:4.69,
        img:'https://k2.com.pl/wp-content/plugins/sscatalog/cache/images/822x822/2bd0ed3d7ad9208e7b939f0d18781f65.jpg'
        
    },
    {
        title:"Skrobaczka do Szyb z Mosiężnym Ostrzem",
        description:"",
        price:10.20,
        img:'https://k2.com.pl/wp-content/plugins/sscatalog/cache/images/822x822/c2efddf9567da8b698ab4d1ca71fe92a.jpg'

    },
    {
        title:"Nano Sprysk -18C 4L",
        description:"Zimowy płyn do myscia szyb reflektorów",
        price:38.88,
        img:'https://k2.com.pl/wp-content/plugins/sscatalog/cache/images/822x822/82f9a4012572eafdc029e6b48bed9b88.jpg'

    },
    {
        title:"Alaska 700 ML",
        description:"Odmraża szyby nawet w -70°C",
        price:20.19,
        img:'https://k2.com.pl/wp-content/plugins/sscatalog/cache/images/822x822/cac80d873bd69719189181aedd2baee0.jpg'

    },
    {
        title:"20W-50 XL 4L",
        description:"Olej silnikowy",
        price:120.00,
        img:'https://k2.com.pl/wp-content/plugins/sscatalog/cache/images/822x822/c372953d78b7c77aec8af07747da970b.jpg'

    },
    ]
    
  return (
    <div className='flex flex-col'>
        <h1>Happy shopping 🤗</h1>
        <div className='flex justify-between'>
        <h1>Kategorie</h1>
        <ProductFilter/>
        </div>
        <div className='flex flex-wrap'>
        {products.map((product,index)=><ProductCard items={product} key={index}></ProductCard>)}
        </div>
    </div>
  )
}

export default ProductsContainer