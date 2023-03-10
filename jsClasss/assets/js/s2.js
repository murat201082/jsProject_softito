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

function proccess(){
    const eletronik=new Category("Elektronik");

    const telefon=new Product("Iphone 14",45000,15);
    const bilgisayar=new Product("Macintosh",42000,10);

    eletronik.addProduct(telefon);
    eletronik.addProduct(bilgisayar);

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