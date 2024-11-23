import React, { useState } from 'react';
import { Form } from 'react-router-dom';
 


const Comments = () => {
    const products = [
        {
            id: 1,
            title: 'Mars gilam',
            cost: '100',
            qoldiq: 24,
            imgUrl: 'dashboard/public/image 10.png'
        },
        {
            id: 2,
            title: 'Klaviatura stiker',
            cost: '499',
            qoldiq: 11,
            imgUrl: 'https://example.com/keyboard-sticker.jpg'
        },
        {
            id: 3,
            title: 'Mars gilam',
            cost: '100',
            qoldiq: 24,
            imgUrl: 'https://example.com/mars-rug.jpg'
        },
        {
            id: 4,
            title: 'Mars gilam',
            cost: '100',
            qoldiq: 24,
            imgUrl: 'https://example.com/mars-rug.jpg'
        },
        {
            id: 5,
            title: 'Mars gilam',
            cost: '100',
            qoldiq: 24,
            imgUrl: 'https://example.com/mars-rug.jpg'
        },
        {
            id: 6,
            title: 'Mars gilam',
            cost: '100',
            qoldiq: 24,
            imgUrl: 'https://example.com/mars-rug.jpg'
        },
        {
            id: 7,
            title: 'Mars gilam',
            cost: '100',
            qoldiq: 24,
            imgUrl: 'https://example.com/mars-rug.jpg'
        },
        {
            id: 8,
            title: 'Mars gilam',
            cost: '100',
            qoldiq: 24,
            imgUrl: 'https://example.com/mars-rug.jpg'
        },
        
     
    ];

    const [data, setData] = useState(products);
    const [searchQuery, setSearchQuery] = useState('');
    const [buyedHistory, setBuyedHistory] = useState(JSON.parse(localStorage.getItem('product')) || []);
    const [showHistory, setShowHistory] = useState(false);

    const BuyedProduct = (index) => {
        const selectedProduct = data[index];

        if (selectedProduct.qoldiq > 0) {
            const updatedProduct = { ...selectedProduct, qoldiq: selectedProduct.qoldiq - 1 };
            const updatedData = [...data];
            updatedData[index] = updatedProduct;

            const updatedHistory = [...buyedHistory, { ...updatedProduct, qoldiq: 1 }];
            localStorage.setItem('product', JSON.stringify(updatedHistory));

            setData(updatedData);
            setBuyedHistory(updatedHistory);
        } else {
            alert('Tovar ombordan tugadi');
        }
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = data.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col">
       
            <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <img src="dashboard/src/assets/1.png" alt="Logo" className="h-10" />
                    <nav className="space-x-4">
                        <a href="#home" className="text-gray-600 hover:text-gray-900">Bosh sahifa</a>
                        <a href="#learning" className="text-gray-600 hover:text-gray-900">O'qish</a>
                        <a href="#shop" className="text-orange-500 font-semibold">Do'kon</a>
                    </nav>
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">+ Post yaratish</button>
            </header>

         
            <main className="flex-grow container mx-auto p-6">
        
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="text"
                        placeholder="Izlash..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="border p-2 rounded w-full"
                    />
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Sotib olish tarixi
                    </button>
                </div>

             
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {!showHistory ? (
                        filteredProducts.map((v, index) => (
                            <div key={v.id} className="border p-4 rounded shadow-lg bg-white">
                                <img src={v.imgUrl} alt={v.title} className="w-full h-40 object-cover rounded mb-2" />
                                <p className="text-lg font-semibold">{v.title}</p>
                                <p className="text-yellow-500">Narxi: {v.cost} Coins</p>
                                <p className="text-gray-500">Skladda qolgan: {v.qoldiq}</p>
                                <button
                                    onClick={() => BuyedProduct(index)}
                                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Sotib olish
                                </button>
                            </div>
                        ))
                    ) : (
                        buyedHistory.length > 0 ? (
                            buyedHistory.map((value, index) => (
                                <div key={index} className="border p-4 rounded shadow-lg bg-white">
                                    <img src={value.imgUrl} alt={value.title} className="w-full h-40 object-cover rounded mb-2" />
                                    <p className="text-lg font-semibold">{value.title}</p>
                                    <p className="text-yellow-500">Narxi: {value.cost} Coins</p>
                                    <p className="text-gray-500">Sotib olingan: {value.qoldiq}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Sotib olish tarixi bo'sh.</p>
                        )
                    )}
                </div>
            </main>

          
            <footer className="bg-white shadow-md py-4 px-6 mt-6">
                <div className="flex justify-between items-center container mx-auto">
                    <p className="text-gray-600"></p>
                    <p className="text-blue-500 hover:underline cursor-pointer"></p>
                </div>
            </footer>
        </div>
    );
};

export default Comments;










// import React, { useState } from 'react';

// const Comments = () => {
//     const products = [
//         {
//             id: 1,
//             title: 'Iphone',
//             cost: '700',
//             qoldiq: '12',
//             imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1Du163lWirdyScfJ7W74LTMerWCq6560Kw&s'
//         },
//         {
//             id: 2,
//             title: 'Iphone 11',
//             cost: '900',
//             qoldiq: '14',
//             imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1Du163lWirdyScfJ7W74LTMerWCq6560Kw&s'
//         }
//     ];

//     const [data, setData] = useState(products);
//     const [buyedHistory, setBuyedHistory] = useState(JSON.parse(localStorage.getItem('product')) || []);

//     const BuyedProduct = (index) => {
//         const selectedProduct = data[index];
//         const updatedHistory = [...buyedHistory, selectedProduct];
//         localStorage.setItem('product', JSON.stringify(updatedHistory));
//         setBuyedHistory(updatedHistory);
//     };

//     return (
//         <div className='bg-white mt-4 w-[79%] rounded-[20px] p-4 flex gap-5'>
//             <div>
//                 {data.map((v, index) => (
//                     <div key={v.id}>
//                         <img src={v.imgUrl} alt="" />
//                         <p>{v.title}</p>
//                         <p>{v.cost}</p>
//                         <p>{v.qoldiq}</p>
//                         <button onClick={() => BuyedProduct(index)}>buy</button>
//                     </div>
//                 ))}
//             </div>

//             <div>
//                 {buyedHistory.map((value, index) => (
//                     <div key={index}>
//                         <img src={value.imgUrl} alt="" />
//                         <p>{value.title}</p>
//                         <p>{value.cost}</p>
//                         <p>{value.qoldiq}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Comments;




























// import React, { useState } from 'react';

// const Comments = () => {
//     const [photos, setPhotos] = useState([]);
//     const [searchPhoto, setSearchPhoto] = useState('');

//     const key = 'IHokim7BgVPrShyyHxKZO2dlkebMT7KV53JrgLBKVo0';
//     const api = `https://api.unsplash.com/search/photos?query=${searchPhoto}`;

//     const SearchPhotoBtn = () => {
//         fetch(api, {
//             headers: {
//                 Authorization: `Client-ID ${key}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => setPhotos(data.results));
//     };

//     return (
//         <div className="bg-blue-300 mt-4 w-full max-w-2xl p-6 rounded-2xl mx-auto shadow-md">
//             <div className="flex items-center space-x-2 mb-4 justify-start">
//                 <input
//                     onChange={(e) => setSearchPhoto(e.target.value)}
//                     type="text"
//                     placeholder="Search photos"
//                     className="w-3/4 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button
//                     onClick={SearchPhotoBtn}
//                     className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
//                 >
//                     Search
//                 </button>
//             </div>

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//                 {photos.map((value) => (
//                     <div key={value.id} className="w-full">
//                         <img
//                             src={value.urls.small}
//                             alt={value.alt_description || 'Photo'}
//                             className="w-full h-auto rounded shadow-lg mb-2"
//                         />
//                         <div className="text-sm text-gray-700">
//                             <p className="font-semibold">
//                                 Photographer: {value.user.name || 'Unknown'}
//                             </p>
//                             <p>
//                                 Created on: {new Date(value.created_at).toLocaleDateString('en-US')}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Comments;




