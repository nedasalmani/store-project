const Product = (props) =>{

    return(
    <div className="  mt-8">
        <div className='bg-white rounded overflow-hidden shadow-md relative' >
            <img className="w-full object-cover h-48" src={props.data.productImge} />
            <div className="m-4">
                <span className="font-bold">{props.data.productName}</span>
                <span className="block text-sm text-gray-400">price : {props.data.price}$</span>
            </div>

            <div>
                <span className="bg-red-600 text-white uppercase font-bold text-xs rounded-full p-2 absolute top-0 ml-2 mt-2">%{props.data.badges}</span>
            </div>

            <div>
                <button className="bg-blue-300 rounded ">+</button>
            </div>


        </div>
    </div>
    )

}
export default Product