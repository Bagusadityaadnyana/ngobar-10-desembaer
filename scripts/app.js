const sidebar = document.querySelector("#sidebar");
const buttonToggler = document.querySelector(".navigation__toggler");
const buttonCloser = document.querySelector(".navigation__closer");

const elementNavigationMenus = document.querySelector


const elemenProjectCompleted = document.querySelector("#value-project-completed");
const valueProjectCompleted2 = document.querySelector("#value-project-completed2");





// value project completed & year exsperience


const containerValue = {
  projectCompleted: 430,
  yearExsperience: "18+",
};

console.log(containerValue)



//value menu 

// containerValue.projectCompleted;
// navigationMenus[1].projectCompleted;

// console.log(navigationMenus[0]).yearExsperience;


// const navigationMenus = [{
//   tittle: "Work",
//   Link: "/#",
// }, {
//   tittle: "About",
//   Link: "/#",
// }, {
//   tittle: "Service",
//   Link: "/#",
// }, {
//   tittle: "Contact",
//   Link: "/#",
// }];

// navigationMenus.map((navigation) =>{return navigation});







/**
 * Untuk menampilkan sidebar ketika diklik
 * 
 * Cara baca: 
 * Button toggler ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * tambahkan class tambahan yaitu "show" dan buang class "hide"
 *  */
buttonToggler.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  sidebar.classList.remove("hide");
});

/**
 * Untuk menutup sidebar ketika diklik
 * 
 * Cara baca: 
 * Button closer ku berikan event ketika di klik, maka di element dengan id sidebar (Tag Aside nya)
 * hapus class tambahan yaitu "hide" dan tambah class "show"
 *  */
buttonCloser.addEventListener("click", () => {
  sidebar.classList.remove("show");
  sidebar.classList.toggle("hide");
});



// inject value baru dari javasript

elemenProjectCompleted.append(containerValue.projectCompleted);

valueProjectCompleted2.append(containerValue.yearExsperience);