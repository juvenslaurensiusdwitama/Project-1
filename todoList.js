const textInput = document.querySelector('.input-button input')
const submit = document.querySelector('.input-button button')
const taskList = document.querySelector('.taskList')
const card = document.querySelector('.card')
submit.addEventListener('click', () =>{
    if(textInput.value === ''){
        alert('There is no task added!')
    }else{
        let div = document.createElement('div')
        let cBox = document.createElement('input')
        cBox.type = 'checkbox'
        let p = document.createElement('p')
        p.innerHTML = textInput.value
        div.append(cBox,p)
        div.classList.add('task')
        taskList.append(div)
    }
    textInput.value = ''
})