import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { useEffect ,useState } from "../../lib";
import axios from "axios";

const cart = () => {
  
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])

  useEffect(function() {
      axios.get('http://localhost:3000/books')
      .then(function(dataAxios) {
          setData(dataAxios.data)
          setCart(JSON.parse(localStorage.getItem('cart')));
      })
  }, [])

  // console.log(JSON.parse(localStorage.getItem('cart')));


  const books_cart = JSON.parse(localStorage.getItem('cart'));

    const books = books_cart.map(function (book,index){

      const id = book.id;

        var books_cart = data.filter(function (item){

          return item.id == id;

       }) 
        return books_cart[0];
    })

   const book = [...books];

   var book1 = book[0] ? book : []  ;



   useEffect(() => {


 
    

    const btns = document.querySelectorAll(".btn-remove");

    const xx = document.querySelector("#quantity");

    xx.addEventListener('change',function(){
      if(xx.value < 0){
        alert('Số lượng phải lớn hơn 0');
        xx.value = 1;
      };
    })

    for (let btn of btns) {
        btn.addEventListener("click", async function () {
            const id = this.dataset.id;
            
            const confirm = window.confirm("bạn có chắc chắn muốn xóa hay không?");
            if (confirm) {
                try {
        
                    const sp = cart.findIndex((item) => item.id == id);

                    cart.splice(sp,1);
                    book1 = cart;
                    localStorage.setItem(`cart`, JSON.stringify(book1));     
                    console.log(book1);               
                    setCart(book1);
                } catch (error) {
                    console.log(error);
                }
            }
        });
    }
  });

 
  
  return /*html */`


        ${Navigation()};
          <div class="h-auto bg-gray-100 ">
          <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">


          ${book1.map(function( prd ,index){
            console.log(prd);

            return /*html */`
                  <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src="${prd ? prd.images?.[0].base_url : ''}"
                      alt="product-image" class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900">${prd ? prd.name : ""}</h2>
                        <p class="mt-1 text-xs text-gray-700"></p>
                      </div>
                      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class=" minus w-[40px] h-[30px]">-</button>
                          <input id="quantity" class="border px-2 quantity w-[45px] h-[30px]" min="0" name="quantity"  value="${cart[index].quantity}" type="number">
                          <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class=" plus w-[40px] h-[30px]">+</button>
                        </div>
                        <div class="flex items-center space-x-4">
                          <p class="text-sm">${prd ? prd.current_seller?.price : ""} NVD</p>
                          <button data-id="${prd ? prd.id : ""}" class="btn btn-danger btn-remove">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
            
            `
        }).join(' ')}
         
                </div>
   
            <!-- Sub total -->
     
          </div>
        </div>

      ${Footer()}  
  `
}

export default cart