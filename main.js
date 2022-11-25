const url = "https://github.com/t118087/t118087.github.io/blob/main/dummydata.json"

jQuery(document).ready(function () {
  console.log("on load")
  fetch(url, { method: "GET" })
    .then(res => {
      console.log("fetch returned")
      if (res.ok) {
        res.json();
        for (let i = 0; i < res.data.length; i++) {
          let buffer = `<li>${res.data[i]}</li>`
          console.log(buffer)
          $(".data-store").append(buffer)
        }
      }
    })
});
