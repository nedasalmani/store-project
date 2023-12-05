const Product = (props) =>{

    return(
    <div className="  mt-8">
        <div className='bg-white rounded overflow-hidden shadow-md relative hover:shadow-lg' >
            <img className="w-full h-48 object-contain" src={props.data.productImge} />
            <div className="m-4">
                <span className="font-bold">{props.data.productName}</span>
                <span className="block text-sm text-gray-400">price : {props.data.price}$</span>
            </div>

            <div>
                <span className="bg-red-600 text-white uppercase font-bold text-xs rounded-full p-2 absolute top-0 ml-2 mt-2">%{props.data.badges}</span>
            </div>

            <div className="flex justify-center">
                <button className="border-2 border-red-600  px-2 text-red-700 rounded hover:bg-red-600 hover:text-white ">+</button>
            </div>


        </div>
    </div>
    )

}
export default Product