import axios from "axios";
import { useEffect, useState } from "../../lib";
import Navigation from "../components/navigation"
import Footer from "../components/footer";
// import data from '../../db.json' assert {type: 'json'}

var HomePage = function() {
    const [data, setData] = useState([])

    useEffect(function() {
        axios.get('http://localhost:3000/books')
        .then(function(dataAxios) {
            setData(dataAxios.data)
        })
    }, [])
    
        const category = [];
        data.map(function(item){
            if(!category.includes(item.categories.name)){
                category.push(item.categories.name)
            }
        })


        
        
    return /*html*/`
    ${Navigation()}

    <div class="flex">
        <div class="mt-14px ml-285px">
            <p class="pb-3.5 text-sm">Danh Mục Sản Phẩm</p>
            <div>
            <ul>
                
            ${category.map(function(category, index) {
                return /*html*/`
                    <li class="pb-2	"><a class="text-xs	" href="">${category}</a></li>
                `
            }).join('')}
        </ul>
            </div>
        </div>
        
        <div class="mt-16px ml-28 	">
            <h1 class="mb-3	pl-[10px] text-2xl font-normal">Nhà Sách Tiki</h1>
            <div>
                <img class="w-857px mt-3 mb-7 h-72	" src="./src/img/bannner.png" alt="">
            </div>

            <div>
                <ul class="flex mb-8">
                    <li class="text-sm pb-2 mx-5"><a href="">Phổ biến</a></li>
                    <li class="text-sm pb-2 mx-5"><a href="">Bán chạy</a></li>
                    <li class="text-sm pb-2 mx-5"><a href="">Hàng mới</a></li>
                    <li class="text-sm pb-2 mx-5"><a href="">Giá thấp</a></li>    
                    <li class="text-sm pb-2 mx-5"><a href="">Giá cao</a></li>    
                </ul>
            </div>

            <div class="ml-5 	">
                <button class="bg-regal-xam mr-2.5 px-3	rounded-3xl	"><a href=""><img class="" src="./src/img/icon_tikinow1.png" alt=""></a></button>
                <button class="bg-regal-xam px-3 rounded-3xl" ><a href=""><img class="" src="./src/img/icon_freeship.png" alt=""></a></button>
            </div>
            
            

            <div class="grid grid-cols-4 gap-y-10">
                ${data.map(function(book, index) {
                return /*html*/`
                <div class="w-248 pl-5">
                    <div>
                        <a class="w-200 h-96" href="products/${book.id}"><img src="${book.images[0].base_url}" alt=""></a>
                    </div>
                    <div class="">
                        <div class="">
                            <img class="mt-3 mb-2" src="src/img/icon_tikinow.png" alt="">
                            <a class="text-xs text-[#00AB56]" href="products/${book.id}">GIAO SIÊU TỐC 2H</a>      
                        </div>
                        <a class="text-sm my-2	" href="products/${book.id}">${book.name}</a>
                        <div class="flex">
                            <div class="flex mt-1.5	">
                                <img class="w-3.5 h-3.5 mr-0.5" src="src/img/icon_star.png" alt="">
<img class="w-3.5 h-3.5 mr-0.5" src="src/img/icon_star.png" alt="">
                                <img class="w-3.5 h-3.5 mr-0.5" src="src/img/icon_star.png" alt="">
                                <img class="w-3.5 h-3.5 mr-0.5" src="src/img/icon_star.png" alt="">
                                <img class="w-3.5 h-3.5 mr-0.5" src="src/img/icon_star.png" alt="">
                                <img class="w-3.5 h-3.5 mr-0.5" src="src/img/icon_star.png" alt="">
                            </div>
                            <p class="text-[#787878]">| ${book.quantity_sold ? book.quantity_sold.text : '0'}</p>
                        </div>
                        <div class="flex text-[#FF424E]">
                            <span class="text-base	">
                                ${book.list_price} ₫
                            </span>
                            <button class="border py-0.5 ml-1 mt-1.5 w-[32px] h-[16px] text-[9px] font-bold	 rounded-sm  border-red-400">-50%</button>
                        </div>
                    </div>
                </div>
                `
                }).join('')}
            </div>
        </div>
    </div>


    ${Footer()}
    `
}

export default HomePage