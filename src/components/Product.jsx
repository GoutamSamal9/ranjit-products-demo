import "./Product.css"
import products from "../constants/products.json"

const Product=()=>{

    console.log(products);
    let k=0;
    return(
        <div className="product-container">
            <div className="product-cards">
                {
                    products.map((each, index)=>(
                        <div className="product-card-container" key={index}>
                            <div>
                                <div className="product-image-container">
                                    <img src={each.productImage} alt="" />
                                </div>

                                <div className="product-name-container">
                                    <h4>{each.productName}</h4>
                                </div>
                                <div className="product-item-for">
                                    <h4>For: {each.productFor}</h4>
                                </div>

                                <div className="product-item-button">
                                    <button>Add to card</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
               
            </div>

        </div>
   
    );

}
export default Product;