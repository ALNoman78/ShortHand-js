const photosData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets')
    const data = await res.json()
    mainData(data.pets)
}
photosData()
const mainData = (data) => {
    console.log(data);
    data.forEach(getData => {
        console.log(getData.image);
        const section = document.getElementById('photos')
        const div = document.createElement('div')
        div.innerHTML = `<img src= "${getData.image}">`
        section.appendChild(div)
    })
}