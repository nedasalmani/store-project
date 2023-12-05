import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { faSignIn} from '@fortawesome/free-solid-svg-icons'

const Nav = () =>{
    return(
    //    <div  className="flex border-b-2">

    //     <ul dir="ltr" class="flex border-b">

    //         <li class="-mb-px mr-1">
    //             <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Home</a>
    //         </li>
    //         <li class="mr-1">
    //             <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Register</a>
    //         </li>
    //         {/* <li class="mr-1">
    //             <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
    //         </li> */}
 
    //     </ul>

    //    </div>
    



    
        <div className=' text-gray-700 font-nunito  '>
            <nav className='flex justify-between' >

                <div className='font-bold uppercase p-4 '>
                <Link className='hover:text-gray-500' to='#'>clothing shop</Link>
                </div>

                <ul className='flex p-4' >

                    <li className='text-gray-700 font-semibold'>
                    <Link to='/register'>
                        <FontAwesomeIcon icon={faSignIn} />
                        Register
                        </Link>
                    </li>

                    <li className='text-gray-700 font-semibold ml-4'>
                    <Link to="/home">
                        <FontAwesomeIcon icon={faHome} />
                        Home
                    </Link>
                    </li>

                    

                </ul>
            </nav>
        </div>


   
    )
}
export default Nav;