import { useEffect , useState } from "../../lib"
import axios from "axios"


const Navigation = function () {

    const [cart, setData] = useState([])

    useEffect(function() {
        axios.get('http://localhost:3000/cart')
        .then(function(dataAxios) {
            setData(dataAxios.data)
            // console.log(cart);
        })
        // .then(function)
    }, [])


    if(localStorage.getItem('cart')){
        var numberCart = JSON.parse(localStorage.getItem('cart')).length ;
    }else{
        var numberCart = 0;
        
        

    }


    
    return /*html*/`
    <header class="flex pt-16px pb-21px h-100px w-full	  bg-regal-blue pl-269px" >
    
    <div class=" mr-123px">
        <a href="/"><img src="/src/img/Group 1.svg" alt=""></a>
    </div>
    <div class="flex ">
        <div class="flex h-40px mb-44px mr-16px	">
            <input class="w-626px" type="text">
            <button class="flex p-12px bg-regal-find">
                <a href=""><img src="/src/img/icon_find.png" alt=""></a>
                <p class="ml-2 text-sm	 text-[#FFFFFF]">Tìm Kiếm</p>
            </button>
        </div>
        <div class="flex ml-4">
            <a class="mt-1" href="#"><img src="/src/img/icon_man.png" alt=""></a>
            <div class="block mt-0.5 ml-2">
                <div class="flex">
                <a class="text-xs text-[#FFFFFF]" href="/sign-up">Đăng ký/ </a>
                <a class="text-xs text-[#FFFFFF]" href="/sign-in">Đăng nhập</a>
                </div>
                <a class=" text-xs text-[#FFFFFF]" href="/admin/products">Amin</a>
            </div>
        </div>
        <div class=" flex ml-8">
        <a class="mt-0.5" href="/cart"><img src="/src/img/cart.png" alt=""></a>
        <p class="relative left-[-12px] top-[-3px] mt-0.5 bg-amber-400 rounded-full p-[5px] pt-0 w-[22px] h-[22px]" href="">${numberCart}</p>
        <a class="left-0 mt-5 text-xs text-[#FFFFFF]" href="/cart">Giỏ hàng</a>
        </div>
    </div>    
    </header>
    <nav class="flex p-10px pl-269px h-40px w-full bg-regal-nav">
        
        <p class="text-[#808089] pr-5px"><a  href="/">Trang chủ</a></p> 
        <p class="text-[#808089] pr-5px"><</p> 
        <p class="text-[#808089] pr-5px"><a  href="/">Nhà sách tiki</a></p> 
        
     
    </nav>

    
    `
}


export default Navigation;