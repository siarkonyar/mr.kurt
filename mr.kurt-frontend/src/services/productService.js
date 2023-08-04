import axios from "axios";

export default class productService{
	getProducts(){
		return axios.get("http://localhost:8090/api/products/getAllData");
	}

	getProductById(productId){
		return axios.get("http://localhost:8090/api/products/getProductById?id="+productId);
	}
}