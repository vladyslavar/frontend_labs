import React from "react";
import "./Image.css";
import imageST from './STOCKHOLM.jpg'


function ImageEl()
{
    
    var size = 1200
    var added = false
    function add_image()    
    {
        if(!added)
        {
        var img = document.createElement("img")
        img.setAttribute("id", "new-img")
        img.setAttribute("src", imageST)
        var parent = document.getElementById("image")
        console.log(img)
        console.log(parent)
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
        console.log(img)
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
    return (
        <div>
            <div id="image">
            <img  src={require('./STOCKHOLM.jpg')} alt=""/>

                
            </div>
            <p> </p>
            <p> </p>
            <div>
                <button type="button" onClick={add_image}>Додати</button>
                <button type="button" onClick={increase_image}>Збільшити</button>
                <button type="button" onClick={decrease_image}>Зменшити</button>
                <button type="button" onClick={remove_image}>Видалити</button>
            </div>
        </div>
    );
}
export default ImageEl;