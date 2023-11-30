document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href^=\"http\"]:not([href*=\"example.com\"])").forEach(anchor => anchor.setAttribute("rel", "noopener noreferrer nofollow"));
  console.log("custom-script...");
});
