
import { httpGet } from '@root/src/lib/HttpClient';
import { getSqlClient } from '@src/db';
import axios from 'axios';

export async function getProductsInCategory() {
  try {
    const products = await getSqlClient().product.findMany({
      include: {
        category: true,
      },
    });
    return products;
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  } 
}

export async function getProductsByName(trademark) {
  try {
    return await axios.get(`/api/category/${trademark}`)
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  }
}

export async function getCategory() {
  try {
    const category = await axios.get('/api/category/menu')
    if(!category){
      return 'not oke'
    }
    return category.data;
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  } 
}


export async function getCategoryForProductByName(id) {
  try {
    const product = await axios.get(`/api/category/menu/${id}`)
    if(!product){
      return 'not oke'
    }
    return product.data;
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  } 
}

export async function getCategoryForProductBySlug(slug) {
  try {
    const product = await axios.get(`/api/category/slug/${slug}`)
    if(!product){
      return 'not oke'
    }
    return product.data;
  } catch (error) {
    console.error('Error fetching products in category:', error);
    throw error;
  } 
}


