const url = "https://raw.githubusercontent.com/t118087/t118087.github.io/main/dummydata.json"

jQuery(document).ready(function () {
  console.log("on load")
  fetch(url, { method: "GET" })
    .then(res => {
      console.log("fetch returned")
      if (res.ok) {
        res_json = res.json();
        data = res_json.data
        console.log(res_json)
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          let buffer = `<li>${data[i]}</li>`
          console.log(buffer)
          $(".data-store").append(buffer)
        }
      }
    })
});
