

class Menu extends HTMLElement {

    constructor() {
        super();
        this._root = this.attachShadow({ "mode": "open" });
    }


    connectedCallback() {
        this._root.innerHTML=`
        <style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<h2>Animated Sidenav Example</h2>
<p>Click on the element below to open the side navigation menu.</p>
<span style="font-size:30px;cursor:pointer" openNav="">&#9776; open</span>



        `;

        this._root.querySelector("[openNav]").addEventListener('click',()=>{
            this._root.querySelector("#mySidenav").style.width = "250px";
            
        });
    }

   openNav(){
       console.log('hola mundo');
   } 
}


window.customElements.define('neo-menu',Menu);