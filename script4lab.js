//first task
function stockholm_click()
{
    if(!reverse())
    {
        var stockholm_el = document.getElementById("stockholm")
        stockholm_el.style.color = "white"
        stockholm_el.style.backgroundColor = "#8679d1"
    }
}
function stockholm_places_click()
{
    if(!reverse())
    {
        var stockholm_plces_el = document.querySelector("p.places-stockholm")
        stockholm_plces_el.style.color = "red"
        stockholm_plces_el.style.backgroundColor = "yellow"
    }
}
function reverse()
{
    var stockholm_el = document.getElementById("stockholm")
    var stockholm_plces_el = document.querySelector("p.places-stockholm")
    
    if(stockholm_el.style.color === "white" && stockholm_plces_el.style.color === "red")
    {
        stockholm_el.style.color = "red"
        stockholm_el.style.backgroundColor = "yellow"

        stockholm_plces_el.style.color = "white"
        stockholm_plces_el.style.backgroundColor = "#8679d1"

        return true
    }
    if(stockholm_el.style.color === "red" && stockholm_plces_el.style.color === "white")
    {
        stockholm_el.style.color = "black"
        stockholm_el.style.backgroundColor = "white"

        stockholm_plces_el.style.color = "black"
        stockholm_plces_el.style.backgroundColor = "white"

        return true
    }
}

// second task

size = 1200
added = false
function add_image()
{
    if(!added)
    {
        var img = document.createElement("img")
        img.setAttribute("id", "new-img")
        img.setAttribute("src", "STOCKHOLM.jpg")
        var parent = document.getElementById("images")
        parent.appendChild(img)
        window.scrollBy(0, window.innerHeight)
        added = true
    }
}

function decrease_image()
{
    if(size > 300 && added)
    {
        size -= 100
        var img = document.getElementById("new-img")
        img.style.width = size + "px"
    }
}
function increase_image()
{
    if(size < 1500 && added)
    {
        size += 100
        var img = document.getElementById("new-img")
        img.style.width = size + "px"
        window.scrollBy(0, window.innerHeight)
    }
}
function remove_image()
{
    var img = document.getElementById("new-img")
    img.remove()
    added = false
    size = 1200
}