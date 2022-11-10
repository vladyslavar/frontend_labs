url = "https://randomuser.me/api"

// cal with fetch
async function fetchCall()
{
    exictingNode = document.getElementsByClassName("users")[0]
            while (exictingNode.firstChild) {
                exictingNode.removeChild(exictingNode.lastChild);
            }
            
    for(i = 0; i < 5; i++)
    {
        responce = await fetch(url)
        if(responce.ok)
        {
            returned_respnce = await responce.json()
            json = returned_respnce.results[0]

            
            createUser(json)
            console.log("+")
        }
        else
        {
            console.log(responce.status)
            console.log("-")
        }
    }
    
}
function createUser(data)
{
    parent = document.getElementsByClassName("users")[0]
    container = document.createElement("div")
    container.setAttribute("class", "user")
    parent.appendChild(container)

    container.style.width = "20%"

    img = document.createElement("img")
    img.setAttribute("class", "user-img")
    img.setAttribute("src", data.picture.large)
    container.appendChild(img)
    img.style.width = "100%"
    
    createTextNodes("cell", data.cell, container)
    createTextNodes("country", data.location.country, container)
    createTextNodes("email", data.email, container)
    createTextNodes("latitude", data.location.coordinates.latitude, container)
    createTextNodes("longitude", data.location.coordinates.longitude, container)
/*
    para1 = document.createElement("p")
    para1.setAttribute("class", "user-cell")
    node = document.createTextNode("cell: " + data.cell);
    para1.appendChild(node);
    container.appendChild(para1)*/
    
}
function createTextNodes(name, data, parent)
{
    para = document.createElement("p")
    para.setAttribute("class", "user-" + name)
    node = document.createTextNode(name + ": " + data);
    para.appendChild(node);
    parent.appendChild(para)
}