
//al contenitore della pagina do il colore di sfondo e le caratteristiche del titolo
const containerFluid = document.querySelector(".container-fluid");

containerFluid.style.backgroundColor = "rgb(8, 59, 76)";

containerFluid.classList.add("text-center", "text-white");

//aggiungo il titolo e lo stile
let h1 = document.createElement('h1');

h1.textContent = "FizzBuzzDOM";

containerFluid.append(h1);

h1.classList.add("py-5", "display-1", "fw-bolder");

//creo il contenitore centrale in cui mettere i div

const container = document.createElement("div");

containerFluid.append(container);

container.classList.add("container");

// creo la classe row

const row = document.createElement("div");

container.append(row);

row.classList.add("row");

// gli dico che ogni riga deve avere 7 elementi 

row.classList.add("flex-wrap" ,"g-2","gx-2")

//creo gli elementi col 


for(let i=1;i<=100;i++){ 

    const col = document.createElement("div");

    row.append(col);

    col.classList.add("my-col","ratio","ratio-1x1","border","d-flex")

    const box = document.createElement("div");

    col.append(box);

    box.textContent=i;

    box.classList.add("box", "py-4","fs-3");

    

}








