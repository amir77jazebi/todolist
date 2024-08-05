const btnAd = document.getElementById('btn')
const form = document.getElementById('form')

// add list with btn
function creatList(classname, text) {
    // creat tag div and appendchild
    const div = document.createElement('DIV')
    div.className = classname
    const node = document.createTextNode(text);
    div.appendChild(node);


    document.getElementById('container').appendChild(div)
    function remove(className) {
        div.className = className
    }
    div.addEventListener('click' , () => {
        remove("none")
        div.innerText = ""
    })
    // toggle line-through
    // div.addEventListener('click', () => {
    //     div.classList.toggle('add')
    // })



}

// add icon remove








btnAd.addEventListener('click', () => {
    if (!form.value) {
        alert("قسمت مربوطه را کامل کنید")
        return
    }
    creatList("px-[100px]  py-[10px] bg-[#ffff] rounded-[10px] text-center text-[20px] my-[10px]", form.value)
    form.value = ""

})