import React from "react"
import { useLazyGetAllCountriesQuery} from "../../services/countriesapi"
function Countries(){
    // var x={isLoading,data}
    // var {isLoading,data}= useGetAllCountriesQuery()
//    console.log(x)
var [ getAllCountriesFn,{isLoading,data}]=useLazyGetAllCountriesQuery()
function abc(){
    getAllCountriesFn()
}
    return(
        <div className="border border-danger p-2 m-2">
            <h1>All Countries</h1>
            <button onClick={()=>{abc()}}>Countries Open</button>
            <ol>
            {
                isLoading===false && data?.map((m)=>{
                    return <li>{m.name.common}</li>
                })
                
            }
            </ol>
            { isLoading===true && <img src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F2973561%2Fscreenshots%2F5757826%2Floading__.gif&sp=1722420288T28935292bf0997780db4a93d1cba09c7aea59121b3a5537cb9b8173b910aec2f"></img>}
        </div>
    )
}
export default Countries