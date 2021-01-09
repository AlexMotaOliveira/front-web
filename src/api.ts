import axios from "axios";
import { OrderPayLoad } from "./Order/types";
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.put['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.put['Access-Control-Allow-Origin'] = '*';


const API_URL = process.env.REACT_APP_API_URL
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export function fetchProducts() {
    return axios(`${API_URL}/products`)
    
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`) 
}

export function saveOrder(payload: OrderPayLoad) {
    return axios.post(`${API_URL}/orders`, payload);
    
}