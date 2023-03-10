class Category{
    constructor(CategoryName){
        this.CategoryName=CategoryName;
        this.Products=[];
    }

    addProduct(Product){
        this.Products.push(Product);
    }

    deleteProduct(Product){
        this.Products=this.Products.filter((product)=> product!==Product);
       // this.Products=this.Products.splice(this.Products[1],1);
    }
}
class Product{
    constructor(ProductName,ProductPrice,ProductStock){
        this.ProductName=ProductName;
        this.ProductPrice=ProductPrice;
        this.ProductStock=ProductStock;
    }
}

const CategoryList=[];

function addCategory(){
    const CategoryName=document.getElementById("CategoryName").value;

    if(!CategoryName){
        alert("Category Name Can Not Be Empty");
        return;
    }

    if(CategoryList.some((category)=> category.CategoryName==CategoryName)){
        alert("Category Already Exists");
        return;
    }

    const category=new Category(CategoryName);
    CategoryList.push(category);
    document.getElementById("CategoryName").value="";
    document.getElementById("CategoryName").focus;

    categoryUpdate();
}

function categoryUpdate(){

    //Select Category Update

    const selectCategory=document.getElementById("SelectCategory");

    selectCategory.innerHTML=`<option disabled value selected> -- Select Category --</option>`;

    CategoryList.forEach((category)=>{
        const option=document.createElement("option");
        option.value=category.CategoryName;
        option.innerText=category.CategoryName;

        selectCategory.add(option);
    });

    const CategoryProductList=document.getElementById("ProductList");
    CategoryProductList.innerHTML="";
    CategoryList.forEach((category)=>{
        const tr=document.createElement("tr");
        const th=document.createElement("th");
        const thbtn=document.createElement("th");


        const DeleteCategoryButton=document.createElement("button");
        DeleteCategoryButton.innerText="Delete Category";
        DeleteCategoryButton.className="btn btn-danger";

        DeleteCategoryButton.addEventListener("click",()=>{
            deleteCategory(category.CategoryName);
        });
        th.innerText=category.CategoryName;
        th.colSpan=4;
        tr.appendChild(th);
        thbtn.appendChild(DeleteCategoryButton);
        tr.appendChild(thbtn);
        CategoryProductList.appendChild(tr);

        var number=0;

        category.Products.forEach((product)=>{
            number++;

            const ProductTr=document.createElement("tr");
            const NumberTd=document.createElement("td");
            NumberTd.innerText=number;

            const ProductNameTd=document.createElement("td");
            const ProductPriceTd=document.createElement("td");
            const ProductStockTd=document.createElement("td");
            const DeleteProductButtonTd=document.createElement("td");

            ProductNameTd.innerText=product.ProductName;
            ProductPriceTd.innerText=product.ProductPrice;
            ProductStockTd.innerText=product.ProductStock;

            const DeleteProductButton=document.createElement("button");
            DeleteProductButton.innerText="Delete Product";
            DeleteProductButton.className="btn btn-warning";

            DeleteProductButton.addEventListener("click",()=>{
                deleteProduct(category.CategoryName,product);
            });

            DeleteProductButtonTd.appendChild(DeleteProductButton);

            ProductTr.appendChild(NumberTd);
            ProductTr.appendChild(ProductNameTd);
            ProductTr.appendChild(ProductPriceTd);
            ProductTr.appendChild(ProductStockTd);
            ProductTr.appendChild(DeleteProductButtonTd);

            CategoryProductList.appendChild(ProductTr);
        })
    });

}

document.getElementById("addCategory").addEventListener("click",(e)=>{
    e.preventDefault();
    addCategory();
});

document.getElementById("addProduct").addEventListener("click",(e)=>{
    e.preventDefault();
    addProduct();
});

categoryUpdate();


function addProduct(){
    const CategoryName=document.getElementById("SelectCategory").value;
    const ProductName=document.getElementById("ProductName").value.trim();
    const ProductPrice=document.getElementById("ProductPrice").value.trim();
    const ProductStock=document.getElementById("ProductStock").value.trim();

    if(CategoryName==="" || ProductName==="" || ProductPrice<=0 || ProductStock<=0){
        alert("Boş Alan Bırakılamaz");
        return;
    }
    
    const category=CategoryListt.find((category)=> category.CategoryName===CategoryName);

    const product=new Product(ProductName,ProductPrice,ProductStock);

    category.addProduct(product);
    categoryUpdate();

    ProductName=document.getElementById("ProductName").value="";
    ProductPrice=document.getElementById("ProductPrice").value="";
    ProductStock=document.getElementById("ProductStock").value="";
}

function deleteCategoryy(CategoryName){
    CategoryListt.splice(CategoryList.findIndex((category)=> category.CategoryName===CategoryName),1);
    categoryUpdate();
}

function deleteProduct(CategoryName,Product){
    const category=CategoryListt.find((category)=> category.CategoryName===CategoryName);

    category.deleteProduct(Product);

    categoryUpdate();
}














class Categoryy{
    constructor(CategoryNamee){
        this.CategoryNamee=CategoryNamee;
        this.Productss=[];
    }

    addProduct(Productss){
        this.Productss.push(Productss);
    }

    deleteProductt(Productss){
        this.Productss=this.Productss.filter((productss)=> productss!==Productss);
       // this.Products=this.Products.splice(this.Products[1],1);
    }
}
class Arac{
    constructor(ProductNamee,ProductPricee,ProductStockk){
        this.ProductNamee=ProductNamee;
        this.ProductPricee=ProductPricee;
        this.ProductStockk=ProductStockk;
    }
}

const CategoryListt=[];

function addCategoryy(){
    const CategoryNamee=document.getElementById("AracName").value;

    if(!CategoryNamee){
        alert("Category Name Can Not Be Empty");
        return;
    }

    if(CategoryListt.some((category)=> category.CategoryNamee===CategoryNamee)){
        alert("Category Already Exists");
        return;
    }

    const categoryy=new Categoryy(CategoryNamee);
    CategoryListt.push(categoryy);
    document.getElementById("AracName").value="";
    document.getElementById("AracName").focus;

    categoryUpdatee();
}

function categoryUpdatee(){

    //Select Category Update

    const selectCategoryy=document.getElementById("AracCategory");

    selectCategoryy.innerHTML=`<option disabled value selected> -- Select Category --</option>`;

    CategoryListt.forEach((category)=>{
        const optionn=document.createElement("option");
        optionn.value=category.CategoryNamee;
        optionn.innerText=category.CategoryNamee;

        selectCategoryy.add(optionn);
    });

    const CategoryProductListt=document.getElementById("AracList");
    CategoryProductListt.innerHTML="";
    CategoryListt.forEach((category)=>{
        const trr=document.createElement("tr");
        const thh=document.createElement("th");
        const thbtnn=document.createElement("th");


        const DeleteCategoryButtonn=document.createElement("button");
        DeleteCategoryButtonn.innerText="Delete Category";
        DeleteCategoryButtonn.className="btn btn-danger";

        DeleteCategoryButtonn.addEventListener("click",()=>{
            deleteCategoryy(category.CategoryNamee);
        });
        thh.innerText=category.CategoryNamee;
        thh.colSpan=4;
        trr.appendChild(thh);
        thbtnn.appendChild(DeleteCategoryButtonn);
        trr.appendChild(thbtnn);
        CategoryProductListt.appendChild(trr);

        var numberr=0;

        category.Products.forEach((product)=>{
            numberr++;

            const ProductTrr=document.createElement("tr");
            const NumberTdd=document.createElement("td");
            NumberTdd.innerText=number;

            const ProductNameTdd=document.createElement("td");
            const ProductPriceTdd=document.createElement("td");
            const ProductStockTdd=document.createElement("td");
            const DeleteProductButtonTdd=document.createElement("td");

            ProductNameTdd.innerText=product.ProductName;
            ProductPriceTdd.innerText=product.ProductPrice;
            ProductStockTdd.innerText=product.ProductStock;

            const DeleteProductButtonn=document.createElement("button");
            DeleteProductButtonn.innerText="Delete Product";
            DeleteProductButtonn.className="btn btn-warning";

            DeleteProductButtonn.addEventListener("click",()=>{
                deleteProductt(category.CategoryNamee,product);
            });

            DeleteProductButtonTdd.appendChild(DeleteProductButtonn);

            ProductTrr.appendChild(NumberTdd);
            ProductTrr.appendChild(ProductNameTdd);
            ProductTrr.appendChild(ProductPriceTdd);
            ProductTrr.appendChild(ProductStockTdd);
            ProductTrr.appendChild(DeleteProductButtonTdd);

            CategoryProductListt.appendChild(ProductTrr);
        })
    });

}

document.getElementById("addArac").addEventListener("click",(e)=>{
    e.preventDefault();
    addCategoryy();
});

document.getElementById("addProduct").addEventListener("click",(e)=>{
    e.preventDefault();
    addProductt();
});

categoryUpdatee();


function addProductt(){
    const CategoryNamee=document.getElementById("SelectArac").value;
    const ProductNamee=document.getElementById("AracName").value.trim();
    const ProductPricee=document.getElementById("AracPrice").value.trim();
    const ProductStockk=document.getElementById("AracStock").value.trim();

    if(CategoryNamee==="" || ProductNamee==="" || ProductPricee<=0 || ProductStockk<=0){
        alert("Boş Alan Bırakılamaz");
        return;
    }
    
    const categoryy=CategoryListt.find((category)=> category.CategoryName===CategoryNamee);

    const productt=new Arac(ProductNamee,ProductPricee,ProductStockk);

    categoryy.addProductt(productt);
    categoryUpdatee();

    ProductNamee=document.getElementById("AracName").value="";
    ProductPricee=document.getElementById("AracPrice").value="";
    ProductStockk=document.getElementById("AracStock").value="";
}

function deleteCategoryy(CategoryName){
    CategoryListt.splice(CategoryListt.findIndex((category)=> category.CategoryNamee===CategoryName),1);
    categoryUpdatee();
}

function deleteProductt(CategoryName,Product){
    const categoryy=CategoryListt.find((category)=> category.CategoryNamee===CategoryName);

    categoryy.deleteProductt(Product);

    categoryUpdatee();
}