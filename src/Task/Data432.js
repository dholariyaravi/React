import React, { useState,useEffect } from 'react'

export default function Data432() {
 
    const [data,setdata]= useState([]);

    useEffect(() => {
     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
     .then(p => p.json())
     .then(p=>{
        setdata(p)
     });

    }, []);

  return (
    <div>
        <table>
            {data?.drinks?.map((val) => {
               return(
                <tr> 
                    <td>{val.idDrink}</td> 
                    <td>{val.strDrink}</td> 
                    <td>{val.strCategory}</td> 
                    <td>{val.strAlcoholic}</td> 
                     <td>{val.strGlass}</td>
                     <td>{val.strInstructions}</td>  
                     <td>{val.strIngredient1}</td>  
                     <td>{val.strIngredient2}</td>  
                     <td>{val.strIngredient6}</td> 
                     <td>{val.strCreativeCommonsConfirmed}</td>          

                    
                </tr>
               )
            })
            }
        </table>

    </div>
  )
}
 