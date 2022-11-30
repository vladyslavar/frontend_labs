import React, {Component} from "react";
import "./Content.css";

class ContentEl extends Component {

    constructor(props){
        super(props)
        this.stockholm_click = this.stockholm_click.bind(this);
        this.reverse = this.reverse.bind(this);
        this.stockholm_places_click = this.stockholm_places_click.bind(this);
        //this.reverse = this.reverse.bind(this);
    }
      stockholm_click(el)
      {
        if(!this.reverse())
        {
            el.target.style.color = "white"
            el.target.style.backgroundColor = "#8679d1"
        }
      }
    

      stockholm_places_click(el)
    {
        if(!this.reverse())
        {
            el.target.style.color = "red"
            el.target.style.backgroundColor = "yellow"
        }
    }

    reverse()
    {
          var stockholm_el = document.querySelector("p.stockholm")
          var stockholm_plces_el = document.querySelector("p.places-stockholm")
          if(stockholm_el.style.color === "white" && stockholm_plces_el.style.color === "red")
          {
              stockholm_el.style.color = "red"
              stockholm_el.style.backgroundColor = "yellow"
  
              stockholm_plces_el.style.color = "white"
              stockholm_plces_el.style.backgroundColor = "#8679d1"
                console.log("here!");
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
    render() {
      return (
            <div>
                <p>Хоббі:</p>
                <ul>
                    <li>Теніс</li>
                    <li>Вивчення мов</li>
                    <li>Комп'ютерні ігри</li>
                    <li>Кулінарія</li>
                </ul>

                <p>Улюбенні фільми:</p>
                <ol>
                    <li>"The Shining", 1980</li>
                    <li>"The Intouchables", 2011</li>
                    <li>"The Giver", 2014</li>
                </ol>
        
                <p className="stockholm" onClick={this.stockholm_click}><strong>Стокгольм</strong> – столиця королівства Швеція. 
                    Стокгольм одне із найгарніших міст Скандинавії із унікальною природою: 
                    він збудований на березі озера Меларен і разом із 14 великими 
                    та 24 тисячами маленьких островів утворюють Стокгольмський Архіпелаг. 
                    В місті немає жодних промислових підприємств, тому повітря надзвичайно чисте + 
                    є величезна кількість парків, каналів з мостами, які з’єднують острови між собою.</p>
                <p className="places-stockholm" onClick={this.stockholm_places_click}>Найцікавіші місця Стокгольму:</p>
                <ul>
                    <li>Королівський палац - діюча резиденція монархів відкрита для відвідування туристів. 
                        В будні дні на площі перед палацом проходить церемонія зміни вартових.</li>
                    <li>Центральна(велика) площа із будинками з кольоровими фасадами та кав’ярнями.</li>
                    <li>Провулок Мортена Тротціга – найвужча в Стокгольмі вулиця шириною 90 см</li>
                    <li>Залізний хлопчик - найменший у Стокгольмі пам’ятник маленького хлопчика, який дивиться на місяць.</li>
                    <li>Старовинний Лицарський острів із більш ніж 700-літньою історією знаходиться поруч із старим містом. 
                        Острів ще називають “островом сірих монахів” через монахів-францисканців, які носили довгі ряси сірого кольору.</li>
                </ul>
            </div>
      );
    
    }
}

export default ContentEl;