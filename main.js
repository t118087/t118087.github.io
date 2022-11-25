const url = "https://raw.githubusercontent.com/t118087/t118087.github.io/main/dummydata.json"

jQuery(document).ready(function () {
  console.log("on load")
  fetch(url, { method: "GET" })
    .then(res => {
      if (res.ok) {
        console.log(res.body)
        res.json()
        .then(rj => {
          print(rj)
          data = rj.data
          console.log(data)
          for (let i = 0; i < data.length; i++) {
            let buffer = `<li>${data[i]}</li>`
            console.log(buffer)
            $(".data-store").append(buffer)
          }
        })
        
      }
    })
});
