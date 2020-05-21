import axios from "axios";
import { createBrowserHistory } from 'history';
import { resolve } from "dns";
import Categories from "../views/categories";

const query: string = "http://localhost:3001"


export function getCategories(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/categories`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve([]));
    });
}
//PROBANDO FUNCION
//........................................................
//export function getALLCategories(): Promise<any>{
//    return new Promise<any>(resolve=>{   
 //       axios.get(`${query}/categories`)
 //       .then(result=>{        
 //           resolve(result.data);
 //       })
 //       .catch(error => resolve([]));
 //   });
//}


//...........................................


export function getCategoriesWLanguages(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/categories/languages`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve([]));
    });
}


export function deleteCategory(id: string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.delete(`${query}/category/${id}`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve({successed:false}));
    });
}//show category


//export function RedirigirCategory (id:string):Promise<any> {
//    return new Promise<any>(resolve => {
  //   axios
    //  .post('/api/categories/redirigir', Categories)
     // .then(response => history.pushState(''))
     // .catch(err => resolve((err.response.data)));
   // }
 // }
//show category

export function getNewPageLangCate(id: string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/category/${id}`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve([]));
    });
}