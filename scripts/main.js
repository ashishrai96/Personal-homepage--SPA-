const profilePic = "https://scontent.fccu11-1.fna.fbcdn.net/v/t31.18172-8/27797865_1675218642544755_8530304976638983259_o.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_ohc=bWpDy0qhmWwAX_wy_nZ&_nc_ht=scontent.fccu11-1.fna&oh=7ee3c4150a641bf0b197f6d5a392b6f0&oe=616D7C1B";
const resumeLink = "https://drive.google.com/file/d/1PVetb1FdYUHPgw1Kk01Q08izKLo445GU/view?usp=sharing";

const skillPic = {
    html: "data:image/png;base64,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",
    css: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    scss: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    ang: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    rn: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    java: "data:image/png;base64,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",
    cpp: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    ocaBadge: "https://images.credly.com/size/680x680/images/a9848abf-f8bd-474d-a9b4-6086da11a916/Oracle_Associates_Badge__1_.png"
};

const skills = [
    {name: 'HTML', pic: skillPic.html, star:4 },
    {name: 'CSS', pic: skillPic.css, star:3.5 },
    {name: 'SCSS', pic: skillPic.scss, star:2.5 },
    {name: 'ANGULAR', pic: skillPic.ang, star:4 },
    {name: 'REACT-NATIVE', pic: skillPic.rn, star:2.5 },
    {name: 'JAVA', pic: skillPic.java, star:4, badge: skillPic.ocaBadge},
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
    <div class="about">
        <h1>About</h1>
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
                Along with that I had been apearing for Gate exam as well for 4 years (Don't forget the final year of Btech as well). Those hectic work pressure and study, My God!! But I never gave 
                up and didn't settle for Tier 2 college too, and that's what brought me to IIIT-H!! 😀
            </div>

            <div class="para">
                Here in 
                <a href="https://www.iiit.ac.in/" target="_blank">
                    <span class="link-label">IIIT Hyderabad</span>
                </a>
                , I am pursuing my Mtech in CSE.
            </div>
            <div class="para">
                <p>Artists I like - Linkin Park, Bring Me The Horizon, Green day always stay top.</p>
                <p>Hidden talent - I can swim, unfortunately couldn't reach to the state level but yeah!!</p>
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
                    <img class="card-image" src="${s.pic}" alt="${s.name} Logo">
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
            <div class="title">Get in touch</div>
            <div class="list">
                <div class="list-item">
                    <i class="fa fa-user-circle-o"></i>
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
                    <i class="fa fa-phone"></i>
                    <div class="data">
                        <label>Phone</label>
                        <div>+91-727-829-3325</div>
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