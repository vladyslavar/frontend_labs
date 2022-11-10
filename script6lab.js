url = "https://randomuser.me/api"

async function call()
{
    exictingNode = document.getElementsByClassName("users")[0]
            while (exictingNode.firstChild) {
                exictingNode.removeChild(exictingNode.lastChild);
            }
    for(i = 0; i < 5; i++)
    {
        myPromise = new Promise(async function(resolve, reject){
            responce = await fetch(url)
            if(responce.ok) {
                returned_respnce = await responce.json()
                json = returned_respnce.results[0]

                exictSuccessNode = document.getElementsByClassName("Success-info")[0]
                if(exictSuccessNode == undefined)
                {
                    SuccessTextNodes("Success")
                }

                resolve(createUser(json))
            }
            else{
                reject(responce.status);
            }
        })
    }
}
function createUser(data)
{
    parent = document.getElementsByClassName("users")[0]
    container = document.createElement("div")
    container.setAttribute("class", "user")
    parent.appendChild(container)

    container.style.width = "19.9%"
    container.style.backgroundColor = "#7b94ad"
    container.style.border = "1px solid black"

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
    
}
function createTextNodes(name, data, parent)
{
    para = document.createElement("p")
    para.setAttribute("class", "user-" + name)
    node = document.createTextNode(name + ": " + data);
    para.appendChild(node);
    parent.appendChild(para)

    para.style.fontSize = "18px"
    para.style.marginLeft = "5px"
}

function SuccessTextNodes(text)
{
    parent = document.getElementsByClassName("info")[0]
    para = document.createElement("p")
    para.setAttribute("class", text + "-info")
    node = document.createTextNode(text);
    para.appendChild(node);
    parent.appendChild(para)

    para.style.fontSize = "24px"
    para.style.color = "white"
    para.style.textAlign = "center"
}