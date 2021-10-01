
import React from "react";



const Product = ({ product }) => {
   return (
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden hover:shadow-2xl transition">
         <div className="px-5 py-3">
            <h3 className="text-gray-700 uppercase">{product.name}</h3>
            <span className="text-gray-500 mt-2">{product.issuer}</span>
            <span className="text-gray-500 mt-2"> -- Apr {product.apr}</span>
            <div className="text-gray-500 mt-2">Fee {product.Fee}</div>
            <div className="text-gray-500 mt-2"> Travel {product.cashback.travel}</div>
            <div className="text-gray-500 mt-2"> Dining {product.cashback.dining}</div>
            <div className="text-gray-500 mt-2"> Other {product.cashback.other}</div>
         </div>
      </div>
   );
};

export default Product;