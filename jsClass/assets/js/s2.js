class Category{
    constructor(CategoryName){
        this.CategoryName=CategoryName;
        this.Products=[];
    }

    addProduct(Product){
        this.Products.push(Product);
    }
}

class Product{
    constructor(Name,Price,Stock){
        this.Name=Name;
        this.Price=Price;
        this.Stock=Stock;
    }
}
const eletronik=new Category("Elektronik");
function cateyak(){

    const tel = document.getElementById("telefon").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;
    
    
    

    const urun = new Product( tel,price,stock)



    eletronik.addProduct(urun);


    document.getElementById("categoryName").innerText=eletronik.CategoryName;

    let result="";
    let number=0;

    eletronik.Products.forEach((product) => {
        number++;
        result+=`<tr>
                    <td>${number}</td>
                    <td>${product.Name}</td>
                    <td>${product.Price}</td>
                    <td>${product.Stock}</td>
                <tr>`;
    });
    document.getElementById("productList").innerHTML=result;
}
    


