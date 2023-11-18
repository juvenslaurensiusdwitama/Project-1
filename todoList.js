const textInput = document.querySelector('.input-button input')
const submit = document.querySelector('.input-button button')
const taskList = document.querySelector('.taskList')
const card = document.querySelector('.card')
const task = document.querySelector('.task')
const sb = document.querySelector('.sb')

submit.addEventListener('click', () =>{
    if(textInput.value === ''){
        alert('There is no task added!')
    }else{
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let cBox = document.createElement('input')
        let taskDiv = document.createElement('div')
        cBox.type = 'checkbox'
        let p = document.createElement('p')
        let x = document.createElement('p')
        x.innerText = 'x'
        x.classList.add('x')
        p.innerHTML = textInput.value
        div1.append(cBox,p)
        div2.append(x)
        cBox.classList.add('check')
        div1.classList.add('task')
        taskDiv.append(div1,div2)
        taskDiv.classList.add('sb')
        taskList.append(taskDiv)
    }
    textInput.value = ''
})

card.addEventListener('click', e =>{
    if(e.target.className == 'x'){
        e.target.parentElement.parentElement.remove()
    }
    else if(e.target.className == 'check'){
        e.target.nextSibling.classList.toggle('checked')
        if(e.target.nextSibling.className == 'checked'){
            e.target.nextSibling.style.color = 'red'
        }else{
            e.target.nextSibling.style.color = 'white'
        }
    }
})



