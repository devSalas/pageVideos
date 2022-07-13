


export default function jumpAllRegister(){
  const d=document;
  const $jumpSingnUp= d.getElementById("jumpSingnUp");
  const $jumpAll= d.getElementById("jumpAll");
  const $pageVideos=d.querySelector(".pageVideos")
  const $logIn=d.querySelector(".logIn")
  const $SignIn = d.querySelector(".signIn")
  console.log("funcioan")
  d.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target===$jumpSingnUp){
      console.log("funciona")
      $SignIn.classList.add("none")
      $logIn.classList.remove("none")
    }
    if(e.target===$jumpAll){
      $SignIn.classList.add("none")
      $logIn.classList.add("none")
      $pageVideos.classList.remove("none")
    }
  })

}