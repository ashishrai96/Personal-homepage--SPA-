// const profilePic = "https://scontent.fccu11-1.fna.fbcdn.net/v/t31.18172-8/27797865_1675218642544755_8530304976638983259_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=bWpDy0qhmWwAX_wy_nZ&_nc_ht=scontent.fccu11-1.fna&oh=7ee3c4150a641bf0b197f6d5a392b6f0&oe=616D7C1B";
const profilePic = "https://scontent.fccu11-1.fna.fbcdn.net/v/t1.6435-9/53034547_2199583983441549_3637743205568479232_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ddtaHkBIQE0AX90SG2B&_nc_ht=scontent.fccu11-1.fna&oh=fb281dd7613d90da4495ca461fb5b9e7&oe=6188E514";
const resumeLink = "https://drive.google.com/file/d/1PVetb1FdYUHPgw1Kk01Q08izKLo445GU/view?usp=sharing";

const skillPic = {
    html: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/2048px-HTML5_logo_black.svg.png",
    css: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    scss: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    ang: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    rn: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    java: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    cpp: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    ocaBadge: "https://images.credly.com/size/680x680/images/a9848abf-f8bd-474d-a9b4-6086da11a916/Oracle_Associates_Badge__1_.png"
};

const skills = [
    {name: 'HTML', pic: skillPic.html, star:4 },
    {name: 'CSS', pic: skillPic.css, star:3.5 },
    {name: 'SCSS', pic: skillPic.scss, star:2.5 },
    {name: 'ANGULAR', pic: skillPic.ang, star:4 },
    {name: 'REACT-NATIVE', pic: skillPic.rn, star:2.5 },
    {name: 'JAVA', pic: skillPic.java, star:4, badge: skillPic.ocaBadge, width: "120px !important"},
    {name: 'C++', pic: skillPic.cpp, star:3 },
];

const trainings = [
    { 
        category: 'Trainings', size: 3,
        value: [
            {   issuedBy: 'Globsyn', 
                value: [
                    { subject: 'Core Java', date: '2016' },
                    { subject: 'Java J2EE', date: '2016' }
                ]
            },
            {   issuedBy: 'Webtek Labs', 
                value: [
                    { subject: 'Cloud Deployment', date: '2017' }
                ]
            }
        ] 
    },
    { 
        category: 'Courses', size: 3,
        value: [
            {   issuedBy: 'Udemy', 
                value: [
                    { subject: 'Angular', date: '2020' },
                    { subject: 'React Native', date: '2021' },
                    { subject: 'C++', date: '2021' },
                ]
            }
        ] 
    },
];

const homeContent = [
    "Web-App Developer",
    "Problem Solving Enthusiast",
    "Constant Learner"
];

const getHomeContent = () => {
    return `
    <div class="home-container">
        <div class="home">
            <div class="home-title">Hello, My name is</div>
            <div class="home-head">ASHISH RAI</div>
            <div class="home-title">
                And I am a,
                <div class="home-text--point" style="animation: toggle 3s ease 0s infinite alternate;" >${homeContent[0]}</div>
                <div class="home-text--point" style="animation: toggle 3s ease 2s infinite alternate;" >${homeContent[1]}</div>
                <div class="home-text--point" style="animation: toggle 3s ease 4s infinite alternate;" >${homeContent[2]}</div>
            </div>
        </div>
        <div class="home-right-image">
            <img src="images/website.png" />
        </div>
    </div>
    `;
}

const getAboutContent = () => {
    return `
    <h1 style="position: absolute;">About</h1>
    <div class="about">
        <img class="profile-image" src="${profilePic}" 
            alt="Profile Image" height="200px" width="200px" />

        <div class="details">
            <div class="para">
                When I started my journey in Computer Science, I didn't have any idea of programming languages and different components of computer.
                And that is what the driving force I had, the curiosity!!
                And that led to...what? Let see.
            </div>
            
            <div class="para">
                I did my BTech in CSE from 
                <a href="https://aot.edu.in/" target="_blank">
                    <span class="link-label">Academy of Technology</span>
                </a>
                , affiliated to MAKAUT, where I learned the subject fundamentals. Post which, I gained some work experience in Service-Based IT Firm for 3 years.
                But I didn't settle there, I went on to plan for higher studies.
                Yes, managing those hectic work pressure and study was indeed challenging, eventually that brought me to IIIT-H!! 😀
            </div>

            <div class="para">
                Well, currently here in 
                <a href="https://www.iiit.ac.in/" target="_blank">
                    <span class="link-label">IIIT Hyderabad</span>
                </a>
                , I am pursuing my Mtech in CSE.
            </div>
            <div class="para">
                <p>Artists I like - Linkin Park, Bring Me The Horizon, Green day always stay top.</p>
                <p>Sports after Cricket, I follow is BasketBall, typically a fan of NBA!🏀</p>
            </div>
        </div>
    </div>
    `;
}

const getStarsOfSkills = (num) => {
    let stars = ``;
    for(let i=1;i<=5;i++){
        if(i<=num){
            stars += `<i class="fa fa-star"></i>`;
        }
        else if(i-num == 0.5){
            stars += `<i class="fa fa-star-half-o"></i>`;
        }
        else{
            stars += '<i class="fa fa-star-o"></i>';
        }
    }

    return stars;
}

const getSkillsContent = () => {
    let cnt = ``;
    for(let s of skills){
        cnt += `
        <div class="card">
            <div class="card-container">
                ${s.badge!=undefined? `<div class="badge"><img src="${s.badge}" /></div>`:``}
                <div class="card-heading">
                    <img class="card-image" src="${s.pic}" alt="${s.name} Logo" ${s.width!=undefined?`style=\"width: ${s.width}\"`:``}>
                    ${s.name}
                </div>
                <div class="card-footer">
                    <div class="stars">
                        ${getStarsOfSkills(s.star)}
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    let courses = ``;
    for(let t of trainings){
        let td1 = `<td rowspan="${t.size}">${t.category}</td>`;
        for(let c of t.value){
            let td2 = `<td rowspan="${c.value.length}">${c.issuedBy}</td>`;
            for(let i of c.value){
                let td3 = `<td>${i.subject}</td>`;
                let td4 = `<td>${i.date}</td>`;

                courses += `<tr>` + td1 + td2 + td3 + td4 + `</tr>`;
                td1 = td2 = td3 = td4 = ``;
            }
        }
    }

    return `
        <div class="skills">
            <h1>Programming languages, I am familiar with</h1>
                <div class="card-group">
                    ${cnt}
                </div>
            </h1>

            <div class="courses">
                <h1>Courses & Trainings</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Issued By</th>
                            <th>Field</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${courses}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

const getContactContent = () => {
    return `
    <div class="contact">
    <div class="block">
            <div class="contact-card">
                <div class="list">
                    <div class="list-item">
                        <i class="fa fa-user"></i>
                        <div class="data">
                            <label>Name</label>
                            <div>Ashish Rai</div>
                        </div>
                    </div>
                    <div class="list-item">
                        <i class="fa fa-map-marker"></i>
                        <div class="data">
                            <label>Location</label>
                            <div>Kolkata, West Bengal, India</div>
                        </div>
                    </div>
                    <div class="list-item">
                        <i class="fa fa-envelope"></i>
                        <div class="data">
                            <label>Email</label>
                            <div>ashishrai96@yahoo.com</div>
                        </div>
                    </div>
                    <div class="list-item">
                        <i class="fa fa-phone-square"></i>
                        <div class="data">
                            <label>Phone</label>
                            <div>+91-727-829-3325</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="title">Message me</div>
            <form class="form" name="contactForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter your email" />
                </div>
                <div class="form-group">
                    <label for="msg">Message</label>
                    <textarea type="text" name="msg" id="msg" placeholder="Enter message"></textarea>
                </div>
                <div class="btn-group">
                    <button onclick="submitForm()">Send</button>
                </div>
            </form>
        </div>
    </div>
    `;
}

const menuItems = [
    { name: 'HOME', id: 0, callback: getHomeContent },
    { name: 'ABOUT', id: 1, callback: getAboutContent },
    { name: 'SKILLS', id: 2, callback: getSkillsContent },
    { name: 'CONTACT', id: 3, callback: getContactContent }
];

var view = document.getElementById("main");
var nav = document.querySelector(".navbar .nav-item-group");
var dateElem = document.querySelector(".time-container #time");

function onLoad(){
    for(let item of menuItems){
        let node = document.createElement("div");
        node.className = "nav-item";
        node.id = "menu-"+item.id;
        node.addEventListener("click", function (){
            navigateTo(item.id)
        });
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
    let menuList = document.getElementsByClassName("nav-item");
    for(let m of menuList){
        m.className = "nav-item";
    }
    let elem = document.querySelector(".nav-item#menu-"+optn);
    elem.className += " active";

    view.innerHTML = menuItems[optn].callback.call(); //getHomeContent.call()

    document.title = menuItems[optn].name + " | Ashish Rai";

    let hem = document.getElementById("hamburger");
    if(hem.className!="fa fa-bars"){
        hamburgerHandler();
    }

    let body = document.getElementsByTagName("body")[0];
    if(optn==0){
        body.className += " home-active";
    }
    else{
        body.className = "";
    }
}

const submitForm = () => {
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let msg = document.forms["contactForm"]["msg"].value;

    if(name!="" && email != "" && msg != ""){
        alert('Thanks for reaching out, I will be responding soon!!!');
        document.forms["contactForm"].reset();
    }
    else{
        alert("Please enter all the details before submitting");
    }

    event.preventDefault();
    
}

const hamburgerHandler = () => {
    let hem = document.getElementById("hamburger");
    if(hem.className=="fa fa-bars"){
        hem.className = "fa fa-times";
        let menuList = document.getElementsByClassName("nav-item");
        for(let m of menuList){
            m.style.display = "block";
        }
    }
    else{
        hem.className = "fa fa-bars";
        let menuList = document.getElementsByClassName("nav-item");
        for(let m of menuList){
            m.style.display = "none";
        }
    }
}