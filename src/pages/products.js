import axios from "axios";
import { render, router, useEffect, useState } from "../../lib";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const ProductPage = function(id) {
    const [book, setBook] = useState({})

    useEffect(function() {
        axios.get(`http://localhost:3000/books/${id}`)
        .then(function(dataAxios) {
            setBook(dataAxios.data)
        })
    }, [])

    const [data, setData] = useState([])
    useEffect(function() {
        axios.get('http://localhost:3000/books')
        .then(function(dataAxios) {
            setData(dataAxios.data)
        })
    }, [])

    const book_cate = data.filter(function (item) {
        return item.categories.id == book.categories.id;
      });
    
    console.log(book_cate);
    useEffect(() => {
        const form = document.getElementById("form-add");

        const productPrice = Number(document.getElementById("cart-price").value);
   
        const idPro = document.querySelector(".add-to-cart").dataset.id;

        // console.log(productPrice.value);

        let  cart = []; 

        // const product = JSON.parse(localStorage.getItem('books'));

        // console.log(product)

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            // them vao mang cart
            // Luu lai storage

            if(localStorage.getItem('cart')){
                cart = JSON.parse(localStorage.getItem('cart'))
            }

            const id = cart.find(item => item.id === idPro)
            if(id){
                id.quantity += productPrice;
            }else{
                cart.push({ id : idPro , quantity: productPrice});
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            

            // console.log(cart);
            // router.navigate(`/`);

        });
    });          

   


    // Optional chain
    return /*html*/`
                ${Navigation()}
                <div class="pl-72 pr-[300px]">
                    <div class="flex mt-4" >
                        <div class="	mr-6">
                            <div>
                                <img id="anh" class=" w-444 h-444 mt-3 mb-7	" src="${book.images?.[0].base_url}" alt="">
                            </div>
                            <div class="flex">
                                ${book.images?.map(function(imgage) {
                                let link = imgage.base_url;
                                return /*html*/`
                                <img  onclick="slide('${link}')" class="cursor-pointer w-16 h-16 mr-3.5" src="${imgage.thumbnail_url}" alt="">
                                `
                                }).join('')}
                        
                            </div>
                        </div>

                        <div class="mt-2">
                            <div class="flex">
                            <p>Tác giả :</p>
                            <a class="mr-4 text-[#0D5CB6]" href="">${book.authors ? book.authors?.[0].name : 'Không xác định'}</a>
                            <p>Thể loại :</p>
                            <a class="mr-4 text-[#0D5CB6]" href="">${book.categories?.name}</a>
                            </div>

                            <div>
                            <h1 class="text-2xl	font-normal">${book.name}</h1>
                            </div>

                            <div class="flex">
                                <div class="flex mt-1.5	">
                               
                                <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                </div>
                                <p class="text-[#787878] mx-2">(Xem 2942 đánh giá)</p>
                                <p class="text-[#787878] ml-2">Đã bán ${book.quantity_sold ? book.quantity_sold?.text : '0'}</p>
                            </div>

                            <div>
                                <div class="flex pt-3 pl-4 pb-12 mt-4 w-479 rounded bg-[#FAFAFA] ">
                                <p class="text-[#FF424E] text-4xl">${book.current_seller?.price} ₫</p>
                                <p class="text-[#787878] px-2 pt-5">${book.list_price} ₫</p>
                                
                                </div>
                            </div>

                            <form action="" id="form-add">
                                <p class="mt-12 mb-2.5	">Số Lượng</p>
                                <div class="flex border w-[137px]">
                                    <span onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class=" minus w-[45px] h-[30px]">-</span>
                                    <input id="cart-price" class="border px-2 quantity w-[45px] h-[30px]" min="0" name="quantity" value="1" type="number">
                                    <span onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class=" plus w-[45px] h-[30px]">+</span>
                                </div>
                                <div>
                                    <button  class="add-to-cart w-80 px-28 py-3 mt-4 bg-[#FF3945] text-[#FFFFFF]" data-id="${book.id}" type="submit">Chọn mua</button>
                                </div>
                            </form>

                        </div>
                    </div>

                    <div class="mt-12 mb-4">
                            <p class="text-2xl	mt-2">Sản Phẩm Tương Tự</p>

                            <div class="grid grid-cols-6 gap-y-10">
                            ${book_cate?.map(function(book, index) {
                            return /*html*/`
                                <div class="mt-6 pl-5 ">
                                <div>
                                    <a class="w-200 h-96" href="${book.id}"><img src="${book.images?.[0].base_url}" alt=""></a>
                                </div>
                                <div class="">
                                    <div class="">
                                        <img class="mt-3 mb-2" src="/src/img/icon_tikinow.png" alt="">
                                        <a class="text-[#00AB56]" href="${book.id}">GIAO SIÊU TỐC 2H</a>      
                                    </div>
                                    <a class="my-2	" href="${book.id}">${book.name}</a>
                                    <div class="flex">
                                        <div class="flex mt-1.5	">
                                            <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                            <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                            <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                            <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                            <img class="w-3.5 h-3.5 mr-0.5" src="/src/img/icon_star.png" alt="">
                                           
                                        </div>
                                        <p class="text-[#787878]">${book.quantity_sold ? book.quantity_sold?.text : '0'}</p>
                                    </div>
                                    <div class="flex text-[#FF424E]">
                                        <span >
                                            ${book.list_price} ₫
                                        </span>
                                        <button class="rounded-sm px-3.5 border-red-800">-50%</button>
                                    </div>
                                </div>
                            </div>
                            `
                            }).join('')}
                        </div>
                    </div>

                    <div class="mt-12 mb-4 ">
                            <p class="text-2xl	mt-2 mb-2">Thông tin chi tiết</p>
                            <table>
            ${book.specifications?.[0].attributes.map(function(book1, index) {
                                return /*html*/`
                                <tr>
                                <td class="text-[#4F4F4F] bg-[#EFEFEF] px-[15px] py-[10px]">${book1.name}  </td>
                                <td class="bg-[#FAFAFA] w-10/12 px-[15px] py-[10px]">${book1.value}</td>
                                </tr>
                                `}).join('')}
                            </table>
                    </div>

                    <div class="mt-12 mb-4 w-3/4 ">
                            <p class="text-2xl	mt-2">Mô Tả Sản Phẩm</p>
                            <p class="text-sm 	">
                            ${book.description}
                            </p>
                            <p class="text-[#189EFF] px-14 py-4 text-center">Xem Thêm Nội Dung ...</p>
                    </div>


                </div>
            ${Footer()}
    `
}

export default ProductPage;