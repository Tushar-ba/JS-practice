const quotes = ["this","is","the","quotes","you","were","looking","for"];



const usedIndexs = new Set();
const quoteElement = document.getElementById("quotes");



function generateQuote(){
    if(usedIndexs.size >= quotes.length){
        usedIndexs.clear()
    }


    while (true) {
    const randIdx = Math.floor(Math.random()* quotes.length)
    if(usedIndexs.has(randIdx)) continue
    const quote = quotes[randIdx]
    quoteElement.innerHTML=quote;
    usedIndexs.add(randIdx)
    break
    }
    
}