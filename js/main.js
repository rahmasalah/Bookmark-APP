var bookmarkName = document.getElementById("bookmarkName")
var bookmarkLink = document.getElementById("bookmarkLink")
var message=document.getElementById("exampleModal")






var linksList=[]

function addLink(){
    if(ValidationName()&&ValidationUrl()){
        var link={
            name:bookmarkName.value,
            url:bookmarkLink.value
        }
    
        linksList.push(link)
        console.log(linksList)
        clearForm()
        displayForm()
        message.classList.add("d-none")
        

    }

    else{
        message.classList.remove("d-none")
        
    }

}

function clearForm(){
    bookmarkName.value=""
    bookmarkLink.value=""

}

function displayForm(){
    var container=""
    for(var i =0 ; i<linksList.length ;i++){
        container += `
        <tr>
        <td>${i}</td>
        <td>${linksList[i].name}</td>
        <td>
            <a href="${"https://"+linksList[i].url}" target="_blank" class="text-decoration-none">
                <i class="fa fa-eye pe-2"></i>
                Visit</a>
        </td>

        <td>
            <button class="btn"  onclick="deleteItem(${i})"><i class="fa fa-trash pe-2"></i>
                Delete</button>
        </td>
    </tr>`
    }

    document.getElementById("tableBody").innerHTML=container
}



function deleteItem(index){
    linksList.splice(index,1)
    displayForm()
}



function ValidationName(){
    var regexName=/^\w{3,8}$/
    var text = bookmarkName.value
    if(regexName.test(text)){
        bookmarkName.classList.add("is-valid")
        bookmarkName.classList.remove("is-invalid")
        return true
    }
    else{
        bookmarkName.classList.remove("is-valid")
        bookmarkName.classList.add("is-invalid")
        return false
    }
    
}



function ValidationUrl(){
    var regexUrl=/\.com?$/
    var url = bookmarkLink.value
    if(regexUrl.test(url)){
        bookmarkLink.classList.add("is-valid")
        bookmarkLink.classList.remove("is-invalid")
        return true
    }
    else{
        bookmarkLink.classList.remove("is-valid")
        bookmarkLink.classList.add("is-invalid")
        return false
    }
}





