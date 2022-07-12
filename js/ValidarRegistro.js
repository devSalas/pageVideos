import personalizarPage from "./PersonalizarPage.js"

const d=document;
const ValidarRegistro =()=>{
  const $Form= d.querySelector(".content-form")
  const $pageVideos=d.querySelector(".pageVideos")
  const $login = d.querySelector(".SignUp")
  const $SignIn = d.querySelector(".signIn")
  /* esto va ser para inicar sesion */
  const $logIn=d.querySelector(".logIn")
  const $FormLogIn=d.querySelector(".logIn-form")
  d.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e)
    if(e.target ===$Form){
      $SignIn.classList.add("none")
      $logIn.classList.remove("none")
    }
    if(e.target===$FormLogIn){
      $logIn.classList.add("none")
      $pageVideos.classList.remove("none")
      personalizarPage()
    }
    
  })

}
export default ValidarRegistro