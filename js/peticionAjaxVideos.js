

const getData= async()=>{
  try {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a1f559e723e5f97fd1014af75fb51fac&language=es-MX");
    //console.log(res)
    const data = await res.json();
   // console.log(data)
    const $template=document.querySelector('template').content
    const $fragment=document.createDocumentFragment()
    const $popular = document.querySelector('.popular')
    data.results.forEach((el)=>{
      const $img=$template.querySelector("img")
      const $figcaption = $template.querySelector("figcaption")
      $img.src= `https://image.tmdb.org/t/p/w500/${el.poster_path}`  
      $figcaption.textContent=el.title
      const clone = $template.cloneNode(true)
      $fragment.appendChild(clone)
    })
    $popular.appendChild($fragment)
    if(!res.ok) throw {status:res.status,statusTex:res.statusText}
    const $videos=document.querySelectorAll(".video")
    /* console.log($videos) */

    const GetImage= async ()=>{
      const res =await fetch("https://api.themoviedb.org/3/movie/550/images?api_key=a1f559e723e5f97fd1014af75fb51fac&language=en-US")
      const json = await res.json()
      console.log(json)

    }
    GetImage()

  } catch (error) {
    
    console.log(error)
    console.log("un error")

  }

  
};


export default getData;