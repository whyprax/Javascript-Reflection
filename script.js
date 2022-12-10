let i = 0;

const toggleNavbar = () => {
  const headingNavbar = document.getElementById("toggle__heading");
  const iconNavbar = document.getElementById("toggle__icon");
  const toggleNavbar = document.getElementsByClassName("toggle__navbar");
  const toggleContentNavbar = document.getElementsByClassName(
    "toggle__contentClosed"
  );
  const contentNavbar = document.getElementsByClassName("toggle__content");

  iconNavbar.addEventListener("click", () => {
    if (i == 0) {
      headingNavbar.style.opacity = 1;
      toggleNavbar[0].style.width = "22%";
      toggleContentNavbar[0].style.opacity = 0;
      contentNavbar[0].style.opacity = 1;
      i++;
    } else {
      headingNavbar.style.opacity = 0;
      toggleNavbar[0].style.width = "8%";
      toggleContentNavbar[0].style.opacity = 1;
      contentNavbar[0].style.opacity = 0;
      i = 0;
    }
  });
};

toggleNavbar();

async function getData() {
  const response = await fetch("./project.json");
  const data = await response.json();
  console.log(data);

  const taskHeading = document.getElementById("content__heading");
  const taskTitle = data.tasks[0].task_title;
  taskHeading.innerHTML = taskTitle;

  const embed = document.getElementsByTagName("embed");
  const video = data.tasks[0].assets[8].display_asset_video;
  console.log(video);
  embed[0].src = video;
}

getData();
