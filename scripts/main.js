const profilePic = "https://scontent.fccu11-1.fna.fbcdn.net/v/t31.18172-8/27797865_1675218642544755_8530304976638983259_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=bWpDy0qhmWwAX_wy_nZ&_nc_ht=scontent.fccu11-1.fna&oh=7ee3c4150a641bf0b197f6d5a392b6f0&oe=616D7C1B";

const getHomeContent = () => {
    return `
        <h1>Home container</h1>
    `;
}

const getAboutContent = () => {
    return `
        <h1>About container</h1>
        <img class="profile-image" src="${profilePic}" 
            alt="Profile Image" height="200px" width="200px" />

        <div class="">Ye upar me bhaari aadmi h, bigaad ke rakh dega</div>
    `;
}

const getEducationContent = () => {
    return `
        <h1>Education container</h1>
        <div class="card-group">
            <div class="card">
                <div class="card-container">
                    <div class="card-heading">
                        <img class="card-image" src="https://www.iiit.ac.in/img/iiit-new.png" alt="IIIT H">
                        IIIT H
                    </div>
                    <div class="card-body">
                        <p>Pursuing Mtech...finally!!</p>
                        <pre>Samajh rahe Ho!!</pre>
                    </div>
                    <div class="card-footer">
                        <a href="https://www.iiit.ac.in/" target="_blank">
                            <div class="link-label">
                                Click for more...!
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-container">
                    <div class="card-heading">
                        <img class="card-image" src="https://aot.edu.in/wp-content/uploads/2017/02/aot-logo.jpg" alt="AOT">
                        Academy of Technology
                    </div>
                    <div class="card-body">
                        <p>Btech in CSE</p>
                        <pre>Samajh rahe Ho!!</pre>
                    </div>
                    <div class="card-footer">
                        <a href="https://aot.edu.in/" target="_blank">
                            <div class="link-label">
                                Click for more...!
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

const getProjectContent = () => {
    return `
        <h1>Projects container</h1>
    `;
}

const menuItems = [
    { name: 'HOME', id: 0, callback: getHomeContent },
    { name: 'ABOUT', id: 1, callback: getAboutContent },
    { name: 'EDUCATION', id: 2, callback: getEducationContent },
    { name: 'PROJECTS', id: 3, callback: getProjectContent }
];

var view = document.getElementById("main");
var nav = document.querySelector(".navbar .nav-item-group");
var dateElem = document.querySelector(".time-container #time");

function onLoad(){
    console.log("page loaded");
    for(let item of menuItems){
        // console.log(item, idx);
        let node = document.createElement("div");
        node.className = "nav-item";
        node.addEventListener("click", ()=>{navigateTo(item.id)});
        node.innerHTML = item.name;
        nav.appendChild(node);
    }

    navigateTo(0);
    getTime();

}

const getTime = () => {
    setInterval(() => {
        let date = new Date().toString().split(" ");
        let str = "";
        for(let i=0; i<date.length; i++)
            if(i!=5)
                str += date[i] + " ";
        dateElem.innerHTML = str;
    }, 950);
}

const navigateTo = (optn) => {
    console.log("Load page = ", optn);
    view.innerHTML = menuItems[optn].callback.call();
}
