// first task
function submit()
{
    clear_validation()
    var name_pattern = /^[a-zA-Zа-яА-ЯІіЇїҐґЄє]+\s[a-zA-Zа-яА-ЯІіЇїҐґЄє][.][a-zA-Zа-яА-ЯІіЇїҐґЄє][.]$/
    var group_pattern = /^[a-zA-Zа-яА-ЯІіЇїҐґЄє]{2}[-][0-9]{2}$/
    var phone_pattern = /^[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{2}[-][0-9]{2}$/
    var adress_pattern = /^[м][.][ ][a-zA-Zа-яА-ЯІіЇїҐґЄє-]+/
    var mail_pattern = /^[a-zA-Zа-яА-ЯІіЇїҐґЄє_.]+[@][a-zA-Zа-яА-ЯІіЇїҐґЄє]+[.][a-zA-Zа-яА-ЯІіЇїҐґЄє]+/
   
    var name = regex_checker("name", name_pattern)
    var group = regex_checker("group", group_pattern)
    var phone = regex_checker("phone", phone_pattern) 
    var adress = regex_checker("adress", adress_pattern)
    var mail = regex_checker("mail", mail_pattern)
    
    if(name != null && group != null && phone != null && adress != null && mail != null)
    {
        var elements = [name, group, phone, adress, mail] 
        elements.forEach(element => {
            var field = document.getElementById(element)
            field.value = null
        });
        validation(name, group, phone, adress, mail)

    }
}
function regex_checker(field, pattern)
{
    var field_ = document.getElementById(field)
    field_.style.borderColor = "black"

    if(pattern.test(field_.value))
    {
        var ret = field_.value
        return ret
    }
    else{
        field_.style.borderColor = "red"
    }
    
}

function validation(name, group, phone, adress, mail)
{
    var parent = document.getElementsByClassName("validation")[0]
    
    var main_text_p = document.createElement("p")
    var main_text_h = document.createElement("h3")
    main_text_h.innerHTML = "Введенні дані"
    main_text_p.appendChild(main_text_h);
    parent.appendChild(main_text_p)

    input_creator("ПІБ: ", name, parent)
    input_creator("Група: ", group, parent)
    input_creator("Телефон", phone, parent)
    input_creator("Адрес: ", adress, parent)
    input_creator("e-mail: ", mail, parent)
    
}
function input_creator(text, node, parent)
{
    var p_el = document.createElement("p")

    var bold_txt = document.createElement("b")
    bold_txt.innerHTML = text
    p_el.appendChild(bold_txt)

    var value_txt = document.createTextNode(node)
    p_el.appendChild(value_txt)

    parent.appendChild(p_el)
}
function clear_validation()
{
    const parent = document.getElementsByClassName("validation")[0];
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

// second taSK
function rand_color_set()
{
    set_background_white()
    var randomColor 
    while(randomColor == null ) 
    { 
        randomColor = Math.floor(Math.random()*16777215).toString(16)
        if(randomColor.length != 6) randomColor = null;
    }
    var field_10 = document.getElementById("cell_10")
    field_10.style.backgroundColor = "#" + randomColor;
    font_color(randomColor, field_10 , 0)
}

function set_chousen_color()
{
    var chousen_color = document.getElementById("color").value
    var field_10 = document.getElementById("cell_10")
    field_10.style.backgroundColor = chousen_color;
    font_color(chousen_color, field_10, 1)
}

function double_set_chousen_color()
{
    var chousen_color = document.getElementById("color").value
    var table = document.getElementById("table");
    var cols_count = table.rows[0].cells.length;
    var variant = 10
    var in_row = Math.trunc((variant / cols_count))

    // -1 fr index
    var variant_ind_in_row = (variant % cols_count) - 1
    for(var i = variant_ind_in_row;  i < cols_count; i = i + 2)
    {
        table.rows[in_row].cells[i].style.backgroundColor = chousen_color;
        font_color(chousen_color, table.rows[in_row].cells[i], 1)
    }
}


function font_color(setted_color, field, charToGet)
{
    var col = setted_color.charAt(charToGet)
    if( col < 5)
    {
        field.style.color = "white"
    }
    else field.style.color = "black"
}
function set_background_white()
{
    var table = document.getElementById("table");
    for(var i = 0;  i < table.rows.length; i++)
    {
        for(var j = 0;  j < table.rows[i].cells.length; j++)
        {
            table.rows[i].cells[j].style.backgroundColor = "white"
            table.rows[i].cells[j].style.color = "black"
        }
    }
    
}


