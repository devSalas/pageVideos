import getData from "./peticionAjaxVideos.js"
import ValidarRegistro from "./ValidarRegistro.js"

const d=document

d.addEventListener("DOMContentLoaded",(e)=>{
  getData()
  ValidarRegistro()

  
})