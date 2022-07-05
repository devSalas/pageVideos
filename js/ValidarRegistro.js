import personalizarPage from "./PersonalizarPage.js"

const d=document;
const ValidarRegistro =()=>{
  const $Form= d.querySelector(".content-form")
  const $pageVideos=d.querySelector(".pageVideos")
  const $login = d.querySelector(".login")
/*   const $Sign = d.querySelector(".SignUp") */
  d.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e)
    if(e.target ===$Form){
      $login.classList.add("none")
      $pageVideos.classList.remove("none")
      personalizarPage()
    }
  })

}
export default ValidarRegistro