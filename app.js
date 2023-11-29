let acc = document.getElementsByClassName("accordion");
let savg = document.querySelector(".arrow")
let active = document.querySelectorAll(".clicked")
let appendage = document.querySelector(".sect-details")
let notification = document.querySelector(".notf-btn")
let notificationdropdown = document.querySelector(".notif-drop")
let profile = document.querySelector(".user-profile")
let profiledropdown = document.querySelector(".profile-drop")
let main = document.querySelector("main")

function openMain(){

    if(appendage.style.display === "block"){
        appendage.style.display = "none"
        
this.innerHTML = ` <svg width="41" height="40" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z"
                                fill="#000" />
                        </svg>`
                        document.querySelector(".accordion").focus()
    }else{
        appendage.style.display = "block"
        // mainbody.style.height = "auto"
    
      this.innerHTML = `
    <svg width = "41" height = "40" viewBox = "0 0 21 20" fill = "none" xmlns = "http://www.w3.org/2000/svg" >
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z"
        fill="#000" />
    </svg > `
    }
}

savg.addEventListener("click", openMain)
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    let panel = this.nextElementSibling;
    if(!this.classList.contains("active")){
        this.classList.toggle("active");
      this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none" class="svgrotate" >
    <path
      d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
      stroke="#000"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  ${this.innerText}`

      setTimeout(() => {
        this.innerHTML = `
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="tick" >
    <circle cx="12" cy="12" r="10" fill="#303030"></circle>
    <path
      d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
      fill="#fff"
    ></path>
  </svg>
  ${this.innerText}`
        let numberOfTicks = document.querySelectorAll(".tick").length

        let showNumber = document.querySelector(".countTicks")
        let innerline = document.querySelector("#complete-progress")
        showNumber.innerText = `${numberOfTicks} / 5 completed`
        
        innerline.setAttribute("value", numberOfTicks) 
   
      }, 2000)
    }else{
      this.classList.toggle("active");
      this.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
  </svg>
  ${this.innerText}
      `
      let numberOfTicks = document.querySelectorAll(".tick").length

      let showNumber = document.querySelector(".countTicks")
      let innerline = document.querySelector("#complete-progress")
      showNumber.innerText = `${numberOfTicks} / 5 completed`
    
      innerline.setAttribute("value", numberOfTicks)
    }
    
    
    openPanel(panel)

  });
}


function openPanel(panel){
  if (panel.style.display === "flex") {
    panel.style.display = "none";
  } else {
    panel.style.display = "flex";

  }
}


// profile opener

function openNav(){
  if (!notificationdropdown.classList.contains("hidden")) {
    notificationdropdown.classList.toggle("hidden")
  }
  profiledropdown.classList.toggle("hidden")
  if(!profiledropdown.classList.contains("hidden")){
    profiledropdown.setAttribute("aria-expanded", true)
  let list = document.querySelectorAll("[role='menuitem']")
  list[0].focus()
  }else{
    profile.focus()
    profiledropdown.setAttribute("aria-expanded", false)
  }
}

function openNotification(){
  if (!profiledropdown.classList.contains("hidden")) {
    profiledropdown.classList.toggle("hidden")
  }
  notificationdropdown.classList.toggle("hidden")

  if(!notificationdropdown.classList.contains("hidden")){
    notificationdropdown.setAttribute("aria-expanded", true)
    let buttonfocus = document.querySelector(".notdrop-dets")
    buttonfocus.focus()
  }else{
    notification.focus()
    notificationdropdown.setAttribute("aria-expanded", false)
  }
}


// close all popups when you click outside them
main.addEventListener("click", ()=>{
  if(!profiledropdown.classList.contains("hidden")){
    profiledropdown.classList.toggle("hidden")
  }
  if(!notificationdropdown.classList.contains("hidden")){
    notificationdropdown.classList.toggle("hidden")
  }
})

// add interactivity to butttons
notification.addEventListener("click", openNotification)

profile.addEventListener("click", openNav)

function pressEscape(event) {
  if(event.key === "Escape" && !profiledropdown.classList.contains("hidden")){
    profiledropdown.classList.add("hidden")
    profile.focus()
}
}
profile.addEventListener("keyup", pressEscape)


// close the top banner
const closebannersvg = document.querySelector(".closebanner")

closebannersvg.addEventListener("click", closebanner)
function closebanner(){
  
  const banner = document.querySelector(".blk-bg")

  banner.classList.add("hidden")
}

