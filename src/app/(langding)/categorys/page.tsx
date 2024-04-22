import Category from "../category/page";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Tất cả sản phẩm - Hương Vân Cát',
  description: 'Tất cả sản phẩm - Hương Vân Cát',
  keywords: 'Tất cả sản phẩm - Hương Vân Cát'
}
export default function Categorys(){
    return(
        <>
            <Category/>
        </>
    )
}