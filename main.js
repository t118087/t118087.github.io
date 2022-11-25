const url = "https://raw.githubusercontent.com/t118087/t118087.github.io/main/dummydata.json"

jQuery(document).ready(function () {
  console.log("on load")
  fetch(url, { method: "GET" })
    .then(res => {
      if (res.ok) {
        res.json()
        .then(rj => {
          data = rj.data
          for (let i = 0; i < data.length; i++) {
            let buffer = `<li>${data[i]}</li>`
            $(".data-store").append(buffer)
          }
        })
        
      }
    })
});
