document.querySelectorAll(".accrodind .tilte").forEach(function (title, index) {
  const answer = title.nextElementSibling;
  const icon = title.querySelector(".icon");

  if (index === 0) {
    answer.classList.remove("hidden");
    icon.innerHTML = `
           <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.25 2C20.25 2.84375 19.5469 3.5 18.75 3.5H2.25C1.40625 3.5 0.75 2.84375 0.75 2C0.75 1.20312 1.40625 0.5 2.25 0.5H18.75C19.5469 0.5 20.25 1.20312 20.25 2Z" fill="#1F8743"/>
            </svg>
        `;
    icon.classList.add("open");
  }

  title.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const icon = this.querySelector(".icon");

    document
      .querySelectorAll(".accrodind .tilte")
      .forEach(function (otherTitle) {
        const otherAnswer = otherTitle.nextElementSibling;
        const otherIcon = otherTitle.querySelector(".icon");

        if (otherAnswer !== answer) {
          otherAnswer.classList.add("hidden");
          otherIcon.classList.remove("open");
          otherIcon.innerHTML = `
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.75V8.5H18.75C19.5469 8.5 20.25 9.20312 20.25 10C20.25 10.8438 19.5469 11.5 18.75 11.5H12V18.25C12 19.0938 11.2969 19.75 10.5 19.75C9.65625 19.75 9 19.0938 9 18.25V11.5H2.25C1.40625 11.5 0.75 10.8438 0.75 10C0.75 9.20312 1.40625 8.5 2.25 8.5H9V1.75C9 0.953125 9.65625 0.25 10.5 0.25C11.2969 0.25 12 0.953125 12 1.75Z" fill="#1F8743"/>
            </svg>
          `;
        }
      });

    answer.classList.toggle("hidden");

    if (icon.classList.contains("open")) {
      icon.innerHTML = `
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.75V8.5H18.75C19.5469 8.5 20.25 9.20312 20.25 10C20.25 10.8438 19.5469 11.5 18.75 11.5H12V18.25C12 19.0938 11.2969 19.75 10.5 19.75C9.65625 19.75 9 19.0938 9 18.25V11.5H2.25C1.40625 11.5 0.75 10.8438 0.75 10C0.75 9.20312 1.40625 8.5 2.25 8.5H9V1.75C9 0.953125 9.65625 0.25 10.5 0.25C11.2969 0.25 12 0.953125 12 1.75Z" fill="#1F8743"/>
            </svg>
          `;
      icon.classList.remove("open");
    } else {
      icon.innerHTML = `
            <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.25 2C20.25 2.84375 19.5469 3.5 18.75 3.5H2.25C1.40625 3.5 0.75 2.84375 0.75 2C0.75 1.20312 1.40625 0.5 2.25 0.5H18.75C19.5469 0.5 20.25 1.20312 20.25 2Z" fill="#1F8743"/>
            </svg>
          `;
      icon.classList.add("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item .tilte");

  function closeAllItems() {
    timelineItems.forEach(function (title) {
      const answer = title.nextElementSibling;
      const icon = title.querySelector(".icon");
      const h4 = title.querySelector("h4");

      answer.classList.add("hidden");
      icon.innerHTML = `
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.35156 8.89844L1.10156 2.64844C0.59375 2.17969 0.59375 1.35938 1.10156 0.890625C1.57031 0.382812 2.39062 0.382812 2.85938 0.890625L8.25 6.24219L13.6016 0.890625C14.0703 0.382812 14.8906 0.382812 15.3594 0.890625C15.8672 1.35938 15.8672 2.17969 15.3594 2.64844L9.10938 8.89844C8.64062 9.40625 7.82031 9.40625 7.35156 8.89844Z" fill="#1F8743"/>
              </svg>
          `;
      h4.classList.add("text-black-100");
      h4.classList.remove("text-green");
    });
  }

  function openFirstItem() {
    if (timelineItems.length > 0) {
      closeAllItems();
      const firstItem = timelineItems[0];
      const firstAnswer = firstItem.nextElementSibling;
      const firstIcon = firstItem.querySelector(".icon");
      const h4 = firstItem.querySelector("h4");

      firstAnswer.classList.remove("hidden");
      firstIcon.innerHTML = `
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.35156 0.890625C7.82031 0.382812 8.64062 0.382812 9.10938 0.890625L15.3594 7.14062C15.8672 7.60938 15.8672 8.42969 15.3594 8.89844C14.8906 9.40625 14.0703 9.40625 13.6016 8.89844L8.25 3.54688L2.85938 8.89844C2.39062 9.40625 1.57031 9.40625 1.10156 8.89844C0.59375 8.42969 0.59375 7.60938 1.10156 7.14062L7.35156 0.890625Z" fill="#1F8743"/>
              </svg>
          `;
      firstIcon.classList.add("open");
      h4.classList.add("text-green");
      h4.classList.remove("text-black-100");
    }
  }

  openFirstItem();

  timelineItems.forEach(function (title) {
    title.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".icon");
      const h4 = this.querySelector("h4");

      if (answer.classList.contains("hidden")) {
        closeAllItems();
        answer.classList.remove("hidden");
        icon.innerHTML = `
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.35156 0.890625C7.82031 0.382812 8.64062 0.382812 9.10938 0.890625L15.3594 7.14062C15.8672 7.60938 15.8672 8.42969 15.3594 8.89844C14.8906 9.40625 14.0703 9.40625 13.6016 8.89844L8.25 3.54688L2.85938 8.89844C2.39062 9.40625 1.57031 9.40625 1.10156 8.89844C0.59375 8.42969 0.59375 7.60938 1.10156 7.14062L7.35156 0.890625Z" fill="#1F8743"/>
                  </svg>
              `;
        icon.classList.add("open");
        h4.classList.add("text-green");
        h4.classList.remove("text-black-100");
      } else {
        answer.classList.add("hidden");
        icon.innerHTML = `
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.35156 8.89844L1.10156 2.64844C0.59375 2.17969 0.59375 1.35938 1.10156 0.890625C1.57031 0.382812 2.39062 0.382812 2.85938 0.890625L8.25 6.24219L13.6016 0.890625C14.0703 0.382812 14.8906 0.382812 15.3594 0.890625C15.8672 1.35938 15.8672 2.17969 15.3594 2.64844L9.10938 8.89844C8.64062 9.40625 7.82031 9.40625 7.35156 8.89844Z" fill="#1F8743"/>
                  </svg>
              `;
        icon.classList.remove("open");
        h4.classList.add("text-black-100");
        h4.classList.remove("text-green");
      }
    });
  });
});

document.querySelectorAll(".menu-item").forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    const submenu = this.querySelector(".sub-menu");

    if (submenu.classList.contains("hidden")) {
      submenu.classList.remove("hidden");
      submenu.style.display = "block";
      submenu.style.height = "0";

      submenu.offsetHeight;

      submenu.style.transition = "all 0.3s ease";
      submenu.style.height = submenu.scrollHeight + "px";

      submenu.addEventListener(
        "transitionend",
        function () {
          submenu.style.height = "auto";
          submenu.style.transition = "";
        },
        { once: true }
      );
    } else {
      submenu.style.height = submenu.scrollHeight + "px";
      submenu.offsetHeight;
      submenu.style.transition = "all 0.3s ease";
      submenu.style.height = "0";

      submenu.addEventListener(
        "transitionend",
        function () {
          submenu.classList.add("hidden");
          submenu.style.display = "none";
          submenu.style.height = "";
          submenu.style.transition = "";
        },
        { once: true }
      );
    }
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 130) {
    header.style.position = "fixed";
    header.style.left = "0";
    header.style.right = "0";
    header.style.top = "0";
    header.style.zIndex = "99999";
    header.style.boxShadow =
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgb(16, 39, 29, 0.23) 0px 6px 6px";
  } else {
    header.style.position = "";
    header.style.left = "";
    header.style.right = "";
    header.style.top = "";
    header.style.zIndex = "";
    header.style.boxShadow = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const nav = document.querySelector("nav");

  menuIcon.addEventListener("click", () => {
    nav.classList.remove("left-[-1000px]");
    nav.classList.add("left-0");
    nav.classList.add("border-r-2");
    nav.classList.add("border-white");
    nav.classList.add("border-solid");
  });

  closeIcon.addEventListener("click", () => {
    nav.classList.remove("left-0");
    nav.classList.add("left-[-1000px]");
  });
});

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("hidden");
  }

  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("text-blue-600", "border-green", "border-b-4");
    tablinks[i].classList.add("text-gray-600", "border-gray-200");
    tablinks[i].querySelector("h2").classList.remove("text-green", "font-bold");
    tablinks[i].querySelector("h2").classList.add("text-gray", "font-normal");
  }

  document.getElementById(tabName).classList.remove("hidden");

  evt.currentTarget.classList.add(
    "text-blue-600",
    "border-green",
    "border-b-4"
  );
  evt.currentTarget.classList.remove("text-gray", "border-gray-200");
  evt.currentTarget
    .querySelector("h2")
    .classList.add("text-green", "font-bold");
  evt.currentTarget
    .querySelector("h2")
    .classList.remove("text-gray", "font-normal");
}

document.getElementById("defaultTab").click();
