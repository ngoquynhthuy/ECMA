import axios from "axios";
import { useEffect, router, useState } from "../../../lib";




const AdminProducts = () => {

    const [data, setData] = useState([])
    const [book, setBook] = useState([])


    useEffect(function() {
        axios.get('http://localhost:3000/books')
        .then(function(dataAxios) {
            setData(dataAxios.data)
            setBook(dataAxios.data)
        })
    }, [])


    // console.log(data)
    
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        // console.log(btns);
        for (let btn of btns) {
            btn.addEventListener("click", async function () {
                const id = this.dataset.id;

                // console.log(id);
                const confirm = window.confirm("bạn có chắc chắn muốn xóa hay không?");
                if (confirm) {
                    try {
                        // await deleteProduct(id);
                        axios.delete(`http://localhost:3000/books/${id}`);
                        const newProducts = data.filter((book) => book.id !== +id);
                        setData(newProducts);
                    } catch (error) {
                        console.log(error);
                    }
                }
                // alert("hello")
            });
        }
    });



// Search


    useEffect(function(){
        const btn_search = document.querySelector(".btn-search");
        const textSearch = document.querySelector("#table-search");

    
        btn_search.addEventListener("click",async function() {
  
                try {
                    // const newProducts = [data];
                    const nameAll = data.map(function(prd , index){
                        // console.log(prd.name);
                        // newProducts = data.filter((prd) => prd.name === textSearch.value);
                        return prd.name;

                    })
    
                    if(textSearch.value != ""){
                        const searchProducts = nameAll.filter(word => word.includes(`${textSearch.value}`));
                        const bookName = data.filter((book) => 
                        // console.log(book.name = textSearch.value)
                        
                        book.name.includes(`${searchProducts[0]}`)
           
                         );
                        
                        console.log(searchProducts);

                        console.log(bookName);

                        setBook(bookName);

                    }else{
                        // console.log(data);
                        console.log("2");

                        // router.navigate("/admin/products");

                        setBook(data);

                    }

            
                } catch (error) {
                    console.log(error);
                }
            
            
         
        })


    });







  return /*html */`
            <div class="max-w-[1300px] mx-auto">

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div class="flex p-4">
                    <label for="table-search" class="sr-only">Search</label>
                    <div class="relative mt-1">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
                    </div>
                    <button id="" class="btn-search bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80px] h-[50px] p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        Search
                    </button>
        
            </div>


                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                STT
                            </th>   
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>   
                                <th scope="col" class="px-6 py-3">
                                    Img 
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Delete</span>
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                              ${book.map(function(books ,index){
                                return /* html */`
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td class="w-4 p-4">
                                        <div class="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                            <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        ${index +1}
                                    </th>
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        <a href="/admin/products/${books.id}/edit"> ${books.name}</a>
                                    </th>
                                    <td class="px-6 py-4">
                                        <img src="${books.images?.[0].base_url}" alt="">
                                    </td>
                                    <td class="px-6 py-4">
                                    ${books.categories?.name}
                                    </td>
                                    <td class="px-6 py-4">
                                    ${books.list_price} ₫
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button data-id="${books.id}" class=" btn btn-danger btn-remove font-medium text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                                    </td>
                                </tr>
                                `
                              }).join(" ")
                            }               
                        </tbody>
                    </table>
                </div>

                <p class="mt-5">This table component is part of a larger, open-source library of Tailwind CSS components.
                    Learn
                    more
                    by going to the official <a class="text-blue-600 hover:underline"
                        href="https://flowbite.com/docs/getting-started/introduction/" target="_blank">Flowbite
                        Documentation</a>.
                </p>
                <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
            </div>
  `
}

export default AdminProducts