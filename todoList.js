const textInput = document.querySelector('.input-button input')
const submit = document.querySelector('.input-button button')
const taskList = document.querySelector('.taskList')
const task = document.querySelector('.task')
submit.addEventListener('click', () =>{
    if(textInput.value === ''){
        alert('There is no task added!')
    }else{
        let cBox = document.createElement('input')
        cBox.type = 'checkbox'
        let p = document.createElement('p')
        p.innerHTML = textInput.value
        task.append(cBox,p)
        textInput.value = ''
    }
    
})