let items=["this"]
const itemsDiv = document.getElementById("item")

function renderItems(){
    itemsDiv.innerHTML=null;
    for(const [idx,item]of Object.entries(items)){
        const text = documnet.createElement("p")
        text.textContent = item;
        itemsDiv.appendChild(text)
        const button = document.createElement("button")
        button.textContent="Delete"
        button.onclick=()=>removeItem(idx)
        container.appendChild(text)
        container.appendChild()
    }
}

renderItems()