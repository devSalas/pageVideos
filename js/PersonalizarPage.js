const d=document
  const $info = d.querySelector('.info')
  const $form=d.querySelector(".content-form")
console.log($form)
const personalizarPage=()=>{
  const $name = $info.querySelector(".info .name")
  $name.textContent = $form.nombre.value
  
  
}

export default personalizarPage;