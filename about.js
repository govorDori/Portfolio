import {motto} from './utils.js'
import {panelBackgrounds} from './utils.js'

export function about(){ 

        motto.forEach(item=>
            document.querySelector('.panels').innerHTML+=`
            <div class="panel"> ${item} </div>
            `
        )

        const panelsNodeList=document.querySelectorAll('.panel')
        panelsNodeList.forEach((panel,i)=>
            panel.style.backgroundImage=`url(${panelBackgrounds[i]})`
        );

        document.querySelector(".panels").addEventListener('click',toggleOpen)

        function toggleOpen(e){
            if(e.target.classList.contains('open'))
                e.target.classList.remove('open')
            else{
                panelsNodeList.forEach(obj=>obj.classList.remove('open'))
                e.target.classList.add('open')

            }
        }
    }