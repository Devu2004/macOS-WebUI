let backgrounds = [
  {
    url: "https://images.unsplash.com/photo-1698044048234-2e7f6c4e6aca?q=80&w=1332&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1710184713246-91865a6123dc?q=80&w=1332&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1710184756393-eeae4d4e5d48?q=80&w=1332&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1710184713246-91865a6123dc?q=80&w=1332&auto=format&fit=crop",
  },
  {
    url: "https://images.unsplash.com/photo-1710162734220-d543f0dff259?q=80&w=1332&auto=format&fit=crop",
  },
];

let load = () => {
  window.onload = () => {
    const loader = document.querySelector("#loader");
    const dekstop = document.querySelector("#dekstopUi");
  };
  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
      dekstop.style.display = "block";
    }, 1000);
  }, 4000);
};
load();

let background = function () {
  let img = Math.floor(Math.random() * backgrounds.length);
  let randomImg = backgrounds[img].url;
  document.addEventListener("DOMContentLoaded", function () {
    document.body.style.backgroundImage = `url('${randomImg}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  });
};
background();

let appleLogoClicked = function () {
  let logo = document.querySelector("#logo");
  let appleMenu = document.querySelector("#appleMenu");
  let isAppleMenuOpen = false;

  logo.addEventListener("click", function (e) {
    e.stopPropagation();
    appleMenu.style.display = isAppleMenuOpen ? "none" : "block";
    isAppleMenuOpen = !isAppleMenuOpen;
  });

  let restartBtn = document.querySelector("#Restart");
  restartBtn.addEventListener("click", function () {
    const loader = document.querySelector("#loader");
    var dekstop = document.querySelector("#dekstopUi");
    loader.style.display = "flex";
    loader.style.opacity = 1;
    dekstop.style.display = "none";
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = "none";
        dekstop.style.display = "block";
        appleMenu.style.display = "none";
        isAppleMenuOpen = false;
      }, 1000);
    }, 4000);
  });

  let abtModal = document.querySelector("#aboutModal");
  let aboutBtn = document.querySelector("#abtbtn");
  let closeBtn = document.querySelector("#closeAbout");
  let isAboutOpen = false;

  aboutBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    abtModal.style.display = isAboutOpen ? "none" : "block";
    isAboutOpen = !isAboutOpen;
  });

  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    abtModal.style.display = "none";
    isAboutOpen = false;
  });

  let poweronbtn = document.querySelector("#powerOnBtn");
  let shutdowncontainer = document.querySelector("#shutdownScreen");
  let shtdwnbtn = document.querySelector("#shtdownbtn");

  shtdwnbtn.addEventListener("click", function () {
    shutdowncontainer.style.display = "flex";
  });

  poweronbtn.addEventListener("click", function () {
    const loader = document.querySelector("#loader");
    const dekstop = document.querySelector("#dekstopUi");
    loader.style.display = "flex";
    loader.style.opacity = 1;
    dekstop.style.display = "none";
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = "none";
        dekstop.style.display = "block";
        appleMenu.style.display = "none";
        isAppleMenuOpen = false;
      }, 1000);
    }, 4000);
    shutdowncontainer.style.display = "none";
  });

  let lockscreencontainer = document.querySelector("#lockScreen");
  let lockbtn = document.querySelector("#unlockBtn");
  let locked = document.querySelector("#locked");

  locked.addEventListener("click", function () {
    lockscreencontainer.style.display = "flex";
    appleMenu.style.display = "none";
    isAppleMenuOpen = false;
  });

  lockbtn.addEventListener("click", function () {
    lockscreencontainer.style.display = "none";
  });

  let sysSettings = document.querySelector("#systemSettingScreeen");
  let sysbtn = document.querySelector("#sstemSeting");

  sysbtn.addEventListener("click", function (e) {
    e.stopPropagation();
    sysSettings.style.display =
      sysSettings.style.display === "block" ? "none" : "block";
    sysSettings.style.marginTop = "1rem";
    sysSettings.style.marginLeft = ".7em";
  });

  sysSettings.addEventListener("click", function (e) {
    e.stopPropagation();
    appleMenu.style.display = "block";
    isAppleMenuOpen = true;
  });

  window.addEventListener("click", function (e) {
    if (
      abtModal.style.display === "block" &&
      !abtModal.contains(e.target) &&
      !aboutBtn.contains(e.target)
    ) {
      abtModal.style.display = "none";
      isAboutOpen = false;
    }

    if (
      sysSettings.style.display === "block" &&
      !sysSettings.contains(e.target) &&
      !sysbtn.contains(e.target)
    ) {
      sysSettings.style.display = "none";
    }

    if (
      appleMenu.style.display === "block" &&
      !appleMenu.contains(e.target) &&
      !logo.contains(e.target)
    ) {
      appleMenu.style.display = "none";
      isAppleMenuOpen = false;
    }
  });
};
appleLogoClicked();
let updateTime = () => {
  let clock = document.querySelector("#time");

  if (!clock) return;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");
  let day = days[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = (hours % 12 || 12).toString().padStart(2, "0");
  clock.textContent = `${date} ${month} ${day} ${hours}:${minutes}:${seconds} ${ampm} ${year}`;
};
setInterval(updateTime, 1000);
updateTime();
let controls = function () {
  let controlbtn = document.querySelector("#controls");
  let controlContainer = document.querySelector("#systemControls");
  let sysbtns = document.querySelectorAll(".systembtn");
  let isControlopen = false;
  controlbtn.addEventListener("click", function () {
    if (!isControlopen) {
      controlContainer.style.display = "none";
      isControlopen = true;
    } else {
      controlContainer.style.display = "block";
      isControlopen = false;
    }
  });
  window.addEventListener("click", function (e) {
    e.stopPropagation();
    if (
      !controlbtn.contains(e.target) &&
      !controlContainer.contains(e.target)
    ) {
      controlContainer.style.display = "none";
      isControlopen = true;
    }
  });
  sysbtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.style.backgroundColor === "rgb(10, 132, 255)") {
        btn.style.backgroundColor = "";
      } else {
        btn.style.backgroundColor = "rgb(10, 132, 255)";
      }
    });
  });
};
controls();
let userICon = function () {
  let userbtn = document.querySelector("#user");
  let userCard = document.querySelector("#userCard");
  let syssetting = document.querySelector("#systemSettingScreeen");
  let settingbtn = document.querySelector(".settingBtn");
  let isUserCardOpen = false;
  userbtn.addEventListener("click", function (e) {
    e.stopPropagation();
    userCard.style.display = isUserCardOpen ? "none" : "flex";
    isUserCardOpen = !isUserCardOpen;
  });
  window.addEventListener("click", function (e) {
    if (
      userCard.style.display === "flex" &&
      !userCard.contains(e.target) &&
      !userbtn.contains(e.target)
    ) {
      userCard.style.display = "none";
      isUserCardOpen = false;
    }
  });
  settingbtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (userCard.style.display === "flex") {
      syssetting.style.display =
        syssetting.style.display === "block" ? "none" : "block";
      syssetting.style.marginTop = "10rem";
      syssetting.style.marginLeft = "49.5rem";
    }
  });
  window.addEventListener("click", function (e) {
    if (
      syssetting.style.display === "block" &&
      !syssetting.contains(e.target) &&
      !settingbtn.contains(e.target)
    ) {
      syssetting.style.display = "none";
    } else if (
      userCard.style.display === "flex" &&
      !userCard.contains(e.target) &&
      userbtn.contains(e.target)
    ) {
      userCard.style.display = "none";
      isUserCardOpen = false;
    }
  });
  let profilepic = document.querySelector("#prfileImg");
  userbtn.addEventListener("click", function (e) {
    e.stopPropagation();
    let img = Math.floor(Math.random() * backgrounds.length);
    randomImg = backgrounds[img].url;
    profilepic.src = randomImg;
    profilepic.style.img = `url('${randomImg}')`;
  });
  let lgoutbtn = document.querySelector(".lgout");
  let lgoutscreen = document.querySelector("#logScreen");
  let loginagainbtn = document.querySelector("#loginAgainBtn");
  let dock = document.getElementById("dock")
  let dockul = document.querySelector("#dock ul")
  lgoutbtn.addEventListener("click", function () {
    dock.style.display = "none"
    lgoutscreen.style.display = "flex";
    lgoutscreen.style.transition = "all 0.5s ease-in-out";
  });
  loginagainbtn.addEventListener("click", function () {
    const loader = document.querySelector("#loader");
    const dekstop = document.querySelector("#dekstopUi");
    loader.style.display = "flex";
    loader.style.opacity = 1;
    dekstop.style.display = "none";
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = "none";
        dekstop.style.display = "block";
        dock.style.display = "flex"
      }, 1000);
    }, 4000);
    lgoutscreen.style.display = "none";
  });
};
userICon();
let wifi = function () {
  let wificontent = document.querySelector("#wifibtnContainer");
  let wifiBtn = document.querySelector("#wifiStatus");
  let wifi = document.querySelector("#wifi");
  let isWifiOpen = false;
  wifi.addEventListener("click", function (e) {
    e.stopPropagation();
    wificontent.style.display = isWifiOpen ? "none" : "block";
    isWifiOpen = !isWifiOpen;
  });
  window.addEventListener("click", function (e) {
    if (
      wificontent.style.display === "block" &&
      !wificontent.contains(e.target) &&
      !wifiBtn.contains(e.target)
    ) {
      wificontent.style.display = "none";
      isWifiOpen = false;
    }
  });
  wifi.addEventListener("click", function (e) {
    e.stopPropagation();
    wifiBtn.innerHTML = "Connecting..";
    setTimeout(() => {
      wifiBtn.innerHTML = "Connected";
      wifiBtn.style.color = "rgb(85, 232, 85)";
    }, 3000);
    wifiBtn.style.color = "#fff";
  });
};
wifi();
let battery = function () {
  let batterycontainer = document.querySelector("#batteryContainer");
  let btrybtn = document.querySelector("#battery");
  let btrytext = document.querySelector(".batterybtn");
  let btryinsidedock = document.getElementById("batry");
  let showbtry = document.getElementById("InsideDockBattery");
  let insidebtryopen = false;
  let insidebtryhtml = document.querySelector(".insidebtryhtml");
  btryinsidedock.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!insidebtryopen) {
      showbtry.style.display = "block";
      insidebtryopen = true;
    } else {
      showbtry.style.display = "none";
      insidebtryopen = false;
    }
  });
  let isBatteryOpen = false;
  btrybtn.addEventListener("click", function (e) {
    e.stopPropagation();
    batterycontainer.style.display = isBatteryOpen ? "none" : "block";
    isBatteryOpen = !isBatteryOpen;
  });
  window.addEventListener("click", function (e) {
    if (
      batterycontainer.style.display === "block" &&
      !batterycontainer.contains(e.target) &&
      !btrybtn.contains(e.target)
    ) {
      batterycontainer.style.display = "none";
      isBatteryOpen = false;
    }
  });
  let randomBattery = Math.floor(Math.random() * 60) + 40;
  btrytext.innerHTML = `${randomBattery}% Battery`;
  insidebtryhtml.innerHTML = `${randomBattery}% Battery`;
};
battery();
let contextmenu = function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    const menu = document.getElementById("contextItems");
    menu.style.display = "block";
    const menuHeight = menu.offsetHeight;
    const menuWidth = menu.offsetWidth;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    let top = e.clientY;
    let left = e.clientX;
    if (top + menuHeight > viewportHeight) {
      top = viewportHeight - menuHeight - 10;
    }
    if (left + menuWidth > viewportWidth) {
      left = viewportWidth - menuWidth - 10;
    }
    menu.style.top = `${top}px`;
    menu.style.left = `${left}px`;
    menu.style.opacity = "1";
  });
  document.addEventListener("click", function () {
    const menu = document.getElementById("contextItems");
    menu.style.display = "none";
  });
  document.addEventListener("dblclick", (e) => {
    e.preventDefault();
  });
  let refreshBtn = document.querySelector("#refresh");
  refreshBtn.addEventListener("click", function () {
    const loader = document.querySelector("#loader");
    const dekstop = document.querySelector("#dekstopUi");
    loader.style.display = "flex";
    loader.style.opacity = 1;
    dekstop.style.display = "none";
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = "none";
        dekstop.style.display = "block";
      }, 1000);
    }, 4000);
  });
  let changewallpaper = document.querySelector("#changeWallpaper");
  changewallpaper.addEventListener("click", function () {
    let img = Math.floor(Math.random() * backgrounds.length);
    let randomImg = backgrounds[img].url;
    document.body.style.backgroundImage = `url('${randomImg}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  });
  let systbtn = document.querySelector("#viewSettings");
  let syssetting = document.querySelector("#systemSettingScreeen");
  systbtn.addEventListener("click", function (e) {
    e.stopPropagation();
    syssetting.style.display =
      syssetting.style.display === "block" ? "none" : "block";
    syssetting.style.top = `1rem`;
    syssetting.style.left = `.7em`;
  });
};
contextmenu();
let terminal = function () {
  let terminalbtn = document.querySelector("#openTerminal");
  let terminalwindw = document.querySelector("#terminalapp");
  let cbtn = document.querySelector(".close");
  let mterm = document.querySelector(".max");
  let minterm = document.querySelector(".min");
  let termcontent = document.querySelector(".tcontent");
  let dockterm = document.querySelector("#dockTerminal");
  let insideterm = document.querySelector("#dockInsideTerminal");
  let insidemenu = document.getElementById("dockerLauncher");
  let termopt = document.querySelector("#terminalOutput");
  let termipt = document.querySelector("#terminal-input");
  let termbtn = document.getElementById("term");
  let isinsidetermopen = false;
  terminalbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    terminalwindw.style.display = "block";
    const menu = document.getElementById("contextItems");
    menu.style.display = "none";
  });
  cbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    terminalwindw.style.display = "none";
  });
  mterm.addEventListener("click", function () {
    termcontent.style.width = "98vw";
    termcontent.style.height = "84vh";
    termopt.style.fontSize = "1.1rem";
    termipt.style.fontSize = ".9rem";
  });
  minterm.addEventListener("click", function () {
    termcontent.style.width = "35rem";
    termcontent.style.height = "20rem";
    termopt.style.fontSize = ".8rem";
    termipt.style.fontSize = ".6rem";
  });
  dockterm.addEventListener("click", function (e) {
    e.stopPropagation();
    terminalwindw.style.display = "block";
    const menu = document.getElementById("contextItems");
    menu.style.display = "none";
    termcontent.style.width = "40rem";
    termcontent.style.height = "25rem";
  });
  insideterm.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!isinsidetermopen) {
      insidemenu.style.display = "none";
      terminalwindw.style.display = "block";
      isinsidetermopen = true;
    } else {
      insidemenu.style.display = "block";
      terminalwindw.style.display = "none";
      isinsidetermopen = false;
    }
  });
  termbtn.addEventListener("click", function () {
    terminalwindw.style.display = "block";
    termcontent.style.width = "40rem";
    termcontent.style.height = "25rem";
    termopt.style.fontSize = ".9rem";
    termipt.style.fontSize = ".9rem";
  });
};
terminal();
let Dock = () => {
  let launcher = document.getElementById("launcher");
  let insidemenu = document.getElementById("dockerLauncher");
  let isinsideDockopen = false;
  launcher.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!isinsideDockopen) {
      insidemenu.style.display = "block";
      isinsideDockopen = !isinsideDockopen;
    } else {
      insidemenu.style.display = "none";
      isinsideDockopen = !isinsideDockopen;
    }
  });
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (isinsideDockopen) {
      const menu = document.getElementById("contextItems");
      menu.style.display = "none";
    }
  });
};
Dock();
let calender = function () {
  let insidecalenderbtn = document.querySelector("#insideCalender");
  let dockcalender = document.querySelector(".calender");
  let calender = document.querySelector("#calenderBox");
  let insidemenu = document.getElementById("dockerLauncher");
  let calenderinnerhtml = document.querySelector(".calenderInnerHTML");

  // Fix: Use IDs for control buttons
  let cbtn = document.getElementById("calenderClose");
  let mterm = document.getElementById("calenderMax");
  let minterm = document.getElementById("calenderMin");

  dockcalender.addEventListener("click", (e) => {
    e.stopPropagation();
    calender.style.display = "block";
  });

  insidecalenderbtn?.addEventListener("click", (e) => {
    insidemenu.style.display = "none";
    calender.style.display = "block";
    e.stopPropagation();
  });

  cbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    calender.style.display = "none";
  });

  mterm.addEventListener("click", function () {
    calender.style.width = "30vw";
    calender.style.height = "30vh";
    calenderinnerhtml.style.fontSize = "2rem";
  });

  minterm.addEventListener("click", function () {
    calender.style.width = "20rem";
    calender.style.height = "8rem";
    calenderinnerhtml.style.fontSize = "1rem";
  });

  // Set current date
  let now = new Date();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  let date = now.getDate();

  calenderinnerhtml.innerHTML = `${date} ${month} ${year}`;
};
calender();
let Notes = function () {
  let insideNotesappbtn = document.getElementById("insideNotesapp");
  let outsideNotesappbtn = document.getElementById("outsideNotes");
  let notesScreen = document.getElementById("notesApp");
  let closeScreen = document.getElementById("closeNotes");
  let minScreen = document.getElementById("minNotes");
  let maxScreen = document.getElementById("maxNotes");
  let insidemenu = document.querySelector("#dockerLauncher");
  let text = document.querySelector("textarea");
  let insideNotesopen = false;
  let notebtn = document.getElementById("notes");
  outsideNotesappbtn.addEventListener("click", function (e) {
    e.stopPropagation();
    notesScreen.style.display = "block";
    notesScreen.style.width = "40rem";
    notesScreen.style.height = "25rem";
    text.style.width = "40rem";
    text.style.height = "25rem";
    text.style.fontSize = ".9rem";
  });
  insideNotesappbtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (!insideNotesopen) {
      notesScreen.style.display = "block";
      insidemenu.style.display = "none";
      insideNotesopen = true;
      notesScreen.style.width = "40rem";
      notesScreen.style.height = "25rem";
      text.style.width = "40rem";
      text.style.height = "25rem";
      text.style.fontSize = ".9rem";
    } else {
      notesScreen.style.display = "none";
      insidemenu.style.display = "block";
      insideNotesopen = false;
    }
  });
  closeScreen.addEventListener("click", (e) => {
    e.stopPropagation();
    notesScreen.style.display = "none";
  });
  maxScreen.addEventListener("click", function (e) {
    e.stopPropagation();
    notesScreen.style.width = "98vw";
    notesScreen.style.height = "85vh";
    text.style.width = "98vw";
    text.style.height = "85vh";
    text.style.fontSize = "1.2rem";
  });

  minScreen.addEventListener("click", function (e) {
    e.stopPropagation();
    notesScreen.style.width = "38rem";
    notesScreen.style.height = "23rem";
    text.style.width = "38rem";
    text.style.height = "23rem";
    text.style.fontSize = ".8rem";
  });
  notebtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notesScreen.style.display = "block";
    notesScreen.style.width = "40rem";
    notesScreen.style.height = "25rem";
    text.style.width = "40rem";
    text.style.height = "25rem";
    text.style.fontSize = ".9rem";
  });
};
Notes();

let calculator = function () {
  let display = document.getElementById("calcDisplay");
  let insidemenu = document.querySelector("#dockerLauncher");
  let buttons = document.querySelectorAll(".btn");
  let closeBtn = document.getElementById("closeCalc");
  let minBtn = document.getElementById("minCalc");
  let maxBtn = document.getElementById("maxCalc");
  let calcBox = document.getElementById("calculatorApp");
  let calcbtninside = document.getElementById("calcInsidebtn");
  let calcbtnoutside = document.getElementById("outsidecalcbtn");
  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const val = button.textContent;

      if (val === "=") {
        try {
          currentInput = eval(currentInput).toString();
        } catch {
          currentInput = "Error";
        }
      } else if (val === "C") {
        currentInput = "";
      } else {
        currentInput += val;
      }

      display.value = currentInput;
    });
  });
  let iscalcboxopen = false;
  calcbtnoutside.addEventListener("click", (e) => {
    e.stopPropagation();
    calcBox.style.display = "block";
  });
  calcbtninside.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!iscalcboxopen) {
      calcBox.style.display = "block";
      insidemenu.style.display = "none";
      iscalcboxopen = true;
    } else {
      calcBox.style.display = "none";
      insidemenu.style.display = "block";
      iscalcboxopen = false;
    }
  });
  closeBtn.addEventListener("click", () => {
    calcBox.style.display = "none";
  });

  minBtn.addEventListener("click", () => {
    calcBox.style.width = "18rem";
  });

  maxBtn.addEventListener("click", () => {
    calcBox.style.width = "30rem";
  });
};
calculator();
let filemanager = function () {
  let manageroutsidedock = document.getElementById("outsidefileManager");
  let managerinisidedock = document.getElementById("insidefileManager");
  let insidemenu = document.getElementById("dockerLauncher");
  let filemanager = document.getElementById("fileManagerapp");
  let isfilemanageropen = false;
  let clsefinder = document.getElementById("closeFinder");
  let minfinder = document.getElementById("minFinder");
  let maxfinder = document.getElementById("maxFinder");
  let navfinder = document.getElementById("navFinder");
  manageroutsidedock.addEventListener("click", function () {
    filemanager.style.display = "block";
    filemanager.style.width = "40rem";
    filemanager.style.height = "25rem";
  });
  managerinisidedock.addEventListener("click", function () {
    if (!isfilemanageropen) {
      filemanager.style.display = "block";
      insidemenu.style.display = "none";
      isfilemanageropen = true;
      filemanager.style.width = "40rem";
      filemanager.style.height = "25rem";
    } else {
      filemanager.style.display = "none";
      insidemenu.style.display = "block";
      isfilemanageropen = false;
    }
  });
  clsefinder.addEventListener("click", function () {
    filemanager.style.display = "none";
  });
  minfinder.addEventListener("click", () => {
    filemanager.style.width = "35rem";
    filemanager.style.height = "20rem";
  });
  maxfinder.addEventListener("click", () => {
    filemanager.style.width = "70rem";
    filemanager.style.height = "38rem";
  });
  navfinder.addEventListener("click", function () {
    if (!isfilemanageropen) {
      filemanager.style.display = "block";
      isfilemanageropen = true;
    } else {
      filemanager.style.display = "none";
      isfilemanageropen = false;
    }
  });
  let dekssection = document.getElementById("dekstopfinder");
  let docuementsection = document.getElementById("docsfinder");
  let downsection = document.getElementById("Downfinder");
  let picsection = document.getElementById("picfinder");
  let musicsection = document.getElementById("musfinder");

  let dekstopui = document.getElementById("dekstopSection");
  let docsUi = document.getElementById("docuementSection");
  let downlodsui = document.getElementById("downloadSection");
  let pictureui = document.getElementById("pictureSection");
  let musicui = document.getElementById("musicSection");

  let allSections = [dekstopui, docsUi, downlodsui, pictureui, musicui];

  let pathText = document.querySelector(".currentPath");

  function showSection(sectionToShow, sectionName) {
    allSections.forEach((section) => (section.style.display = "none"));
    sectionToShow.style.display = "block";
    pathText.textContent = `Home > ${sectionName}`;
  }

  dekssection.addEventListener("click", () =>
    showSection(dekstopui, "Desktop")
  );
  docuementsection.addEventListener("click", () =>
    showSection(docsUi, "Documents")
  );
  downsection.addEventListener("click", () =>
    showSection(downlodsui, "Downloads")
  );
  picsection.addEventListener("click", () =>
    showSection(pictureui, "Pictures")
  );
  musicsection.addEventListener("click", () => showSection(musicui, "Music"));
  let createFolderBtn = document.getElementById("createFolder");

  // only visible section showing it on screen
  function getActiveSection() {
    const sections = document.querySelectorAll(".fileGrid");
    for (let section of sections) {
      if (section.style.display !== "none") return section;
    }
    return null;
  }

  // Generate unique folder name
  function generateFolderName(container) {
    let base = "New Folder";
    let count = 0;
    let names = Array.from(container.querySelectorAll(".fileItems p")).map(
      (p) => p.textContent
    );

    let name = base;
    while (names.includes(name)) {
      count++;
      name = `${base} (${count})`;
    }
    return name;
  }

  createFolderBtn.addEventListener("click", () => {
    const activeSection = getActiveSection();
    if (!activeSection) return;

    // Create new folder
    const newFolder = document.createElement("div");
    newFolder.className = "fileItems";

    // Folder name
    const folderName = generateFolderName(activeSection);

    // Add folder icon + editable name
    newFolder.innerHTML = `
    <img src="Assets/Launcher/File.png" alt="folder" />
    <p contenteditable="true" class="new-folder-name">${folderName}</p>
  `;

    activeSection.appendChild(newFolder);

    const nameField = newFolder.querySelector("p");
    nameField.focus();

    nameField.addEventListener("blur", () => {
      nameField.contentEditable = false;
      nameField.classList.remove("new-folder-name");
    });
    //code off edit menu
    function getActiveSection() {
      const sections = document.querySelectorAll(".fileGrid");
      return Array.from(sections).find((sec) => sec.style.display !== "none");
    }

    let copiedItem = null;
    let undoStack = [];

    // UNDO
    document.getElementById("undoBtn").addEventListener("click", () => {
      if (undoStack.length > 0) {
        const undoAction = undoStack.pop();
        undoAction();
      }
    });
    // CUT
    document.getElementById("cutBtn").addEventListener("click", () => {
      const selected = document.querySelector(".fileItems.selected");
      if (!selected) return;

      const parent = selected.parentElement;
      copiedItem = selected;
      parent.removeChild(selected);

      undoStack.push(() => {
        parent.appendChild(copiedItem);
      });
    });
    // COPY
    document.getElementById("copyBtn").addEventListener("click", () => {
      const selected = document.querySelector(".fileItems.selected");
      if (!selected) return;
      copiedItem = selected.cloneNode(true);
    });

    // PASTE
    document.getElementById("pasteBtn").addEventListener("click", () => {
      if (!copiedItem) return;

      const activeSection = getActiveSection();
      const pastedClone = copiedItem.cloneNode(true);
      activeSection.appendChild(pastedClone);
      addSelectionBehavior(pastedClone);
      undoStack.push(() => {
        activeSection.removeChild(pastedClone);
      });
    });
    // SEARCH
    document.getElementById("fileSearch").addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const section = getActiveSection();
      const items = section.querySelectorAll(".fileItems");

      items.forEach((item) => {
        const name = item.querySelector("p").textContent.toLowerCase();
        item.style.display = name.includes(searchTerm) ? "flex" : "none";
      });
    });
    //SELECT ALL
    document.getElementById("selectAllBtn").addEventListener("click", () => {
      const section = getActiveSection();
      const items = section.querySelectorAll(".fileItems");

      items.forEach((item) => item.classList.add("selected"));
    });
    // Select Single File on Click
    function addSelectionBehavior(item) {
      item.addEventListener("click", (e) => {
        document
          .querySelectorAll(".fileItems")
          .forEach((i) => i.classList.remove("selected"));
        item.classList.add("selected");
        e.stopPropagation();
      });
    }
    document.querySelectorAll(".fileItems").forEach(addSelectionBehavior);
  });
  let openedituibtn = document.getElementById("openEdit");
  let editui = document.getElementById("editMenu");
  let isedituiopen = false;
  openedituibtn.addEventListener("click", function () {
    if (!isedituiopen) {
      editui.style.display = "block";
      isedituiopen = true;
    } else {
      isedituiopen = false;
      editui.style.display = "none";
    }
  });
  window.addEventListener("click", function (e) {
    if (
      (editui.style.display =
        "block" &&
        !editui.contains(e.target) &&
        !openedituibtn.contains(e.target))
    ) {
      isedituiopen = false;
      editui.style.display = "none";
    }
  });
};
filemanager();
let gallery = function () {
  let dockgallerybtn = document.getElementById("outsidegallery");
  let launchergallerybtn = document.getElementById("insidegallery");
  let gallery = document.getElementById("galleryApp");
  let galleryitem = document.querySelector(".gallery-content");
  let galleryclse = document.getElementById("closeGallery");
  let gallerymin = document.getElementById("minGallery");
  let gallerymax = document.getElementById("maxGallery");
  let insidemenu = document.querySelector("#dockerLauncher");
  let insidegalleryopen = false;
  dockgallerybtn.addEventListener("click", (e) => {
    e.stopPropagation();
    gallery.style.display = "block";
    galleryitem.style.width = "40rem";
    galleryitem.style.height = "25rem";
  });
  launchergallerybtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!insidegalleryopen) {
      insidemenu.style.display = "none";
      gallery.style.display = "block";
      galleryitem.style.width = "40rem";
      galleryitem.style.height = "25rem";
    } else {
      insidemenu.style.display = "block";
      gallery.style.display = "none";
    }
  });
  galleryclse.addEventListener("click", (e) => {
    e.stopPropagation();
    gallery.style.display = "none";
  });
  gallerymin.addEventListener("click", (e) => {
    e.stopPropagation();
    galleryitem.style.width = "38rem";
    galleryitem.style.height = "22rem";
  });
  gallerymax.addEventListener("click", function () {
    galleryitem.style.width = "98vw";
    galleryitem.style.height = "84vh";
  });
};
gallery();
let clock = function () {
  let clockui = document.getElementById("clockApp");
  let insidemenu = document.querySelector("#dockerLauncher");
  let launcherclockbtn = document.getElementById("insideClock");
  let dockclockbtn = document.getElementById("outsideclock");
  let clseclck = document.getElementById("closeClock");
  let minclck = document.getElementById("minClock");
  let maxclck = document.getElementById("maxClock");
  let clckhtml = document.getElementById("digitalClock");
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let isclockopn = false;
  dockclockbtn.addEventListener("click", function () {
    clockui.style.display = "block";
    clockui.style.width = "25rem";
    clockui.style.height = "18rem";
  });
  launcherclockbtn.addEventListener("click", function () {
    if (!isclockopn) {
      insidemenu.style.display = "none";
      clockui.style.display = "block";
      clockui.style.width = "25rem";
      clockui.style.height = "18rem";
    }
    else{
      insidemenu.style.display = "block";
      clockui.style.display = "none";
    }
  });
  clseclck.addEventListener("click",function(){
    clockui.style.display = "none";
  })
  maxclck.addEventListener("click",function(){
        clockui.style.width = "32rem";
    clockui.style.height = "22rem";
    clckhtml.style.fontSize = "4rem"
  })
  minclck.addEventListener("click",function(){
        clockui.style.width = "20rem";
    clockui.style.height = "15rem";
    clckhtml.style.fontSize = "2.5rem"
  })
  clckhtml.innerHTML = `${hours}:${mins}:${secs}`
};
setInterval(clock, 1000);
clock();
let binApp = function () {
  const binui = document.getElementById("binApp");
  const dockBinBtn = document.getElementById("outsideBin");
  const launcherBinBtn = document.getElementById("insideBin");
  const binClose = document.getElementById("closeBin");
  const binMin = document.getElementById("minBin");
  const binMax = document.getElementById("maxBin");
  const insidemenu = document.getElementById("dockerLauncher");
  let isBinOpen = false;

  // Open from Dock
  dockBinBtn.addEventListener("click", function () {
    binui.style.display = "block";
    binui.style.width = "25rem";
    binui.style.height = "18rem";
  });

  // Open from Launcher
  launcherBinBtn.addEventListener("click", function () {
    if (!isBinOpen) {
      insidemenu.style.display = "none";
      binui.style.display = "block";
      binui.style.width = "25rem";
      binui.style.height = "18rem";
      isBinOpen = true;
    } else {
      insidemenu.style.display = "block";
      binui.style.display = "none";
      isBinOpen = false;
    }
  });

  // Close
  binClose.addEventListener("click", function () {
    binui.style.display = "none";
    isBinOpen = false;
  });

  // Minimize
  binMin.addEventListener("click", function () {
    binui.style.width = "20rem";
    binui.style.height = "14rem";
  });

  // Maximize
  binMax.addEventListener("click", function () {
    binui.style.width = "35rem";
    binui.style.height = "24rem";
  });
};
binApp();
let browser = function(){
  let safariApp = document.getElementById("safariApp");
let safariContent = document.querySelector(".safari-content");
let safariView = document.getElementById("safariView");

let closeSafari = document.getElementById("closeSafari");
let minSafari = document.getElementById("minSafari");
let maxSafari = document.getElementById("maxSafari");

let safariInput = document.getElementById("safariAddress");
let safariGo = document.getElementById("safariGo");

let insideSafariBtn = document.getElementById("insideSafari");
let outsideSafariBtn = document.getElementById("outsideSafari");
let dockerLauncher = document.getElementById("dockerLauncher");

let isSafariOpen = false;

outsideSafariBtn?.addEventListener("click", () => {
  safariApp.style.display = "block";
  safariApp.style.width = "40rem";
  safariApp.style.height = "28rem";
});

insideSafariBtn?.addEventListener("click", () => {
  if (!isSafariOpen) {
    dockerLauncher.style.display = "none";
    safariApp.style.display = "block";
    safariApp.style.width = "40rem";
    safariApp.style.height = "28rem";
    isSafariOpen = true;
  } else {
    safariApp.style.display = "none";
    dockerLauncher.style.display = "block";
    isSafariOpen = false;
  }
});

closeSafari.addEventListener("click", () => {
  safariApp.style.display = "none";
});

minSafari.addEventListener("click", () => {
  safariApp.style.width = "30rem";
  safariApp.style.height = "20rem";
});

maxSafari.addEventListener("click", () => {
  safariApp.style.width = "55rem";
  safariApp.style.height = "36rem";
});


safariGo.addEventListener("click", () => {
  const value = safariInput.value.trim().toLowerCase();

  if (!value) {
    safariView.innerHTML = `<p>Please enter a website or keyword!</p>`;
    return;
  }

});

}
browser()