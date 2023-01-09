let search = () => {
  let query = document.getElementById("enterQuery").value;
  getData(query);
};

let getData = async (query) => {
  let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyAZ-kSbO2IcLIArmtFDxU_jA9OSlYF1r5o`;
  let res = await fetch(url);
  let data = await res.json();
  append(data.items);
  // console.log(data.items)
};

let append = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;

  data.forEach((elem, index) => {
    let div = document.createElement("div");
    let poster = document.createElement("img");
    let name = document.createElement("h4");

    poster.src = elem.snippet.thumbnails.medium.url;
    name.innerText = elem.snippet.title;
    div.append(poster, name);
    div.addEventListener("click", () => {
      showVideo(elem);
    });
    container.append(div);
  });
};
let showVideo = (data) => {
  localStorage.setItem("videos", JSON.stringify(data));
  window.location.href = "display.html";
};

let defalult_video = async () => {
  let defaluturl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=21.5922529%2C-158.1147114&locationRadius=10mi&maxResults=30&q=surfing&type=video&key=AIzaSyAZ-kSbO2IcLIArmtFDxU_jA9OSlYF1r5o`;
  let res = await fetch(defaluturl);
  let dataDefault = await res.json();
  appendDefault(dataDefault.items);
  // console.log(dataDefault)
};
defalult_video();

let appendDefault = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;

  data.forEach((elem, index) => {
    let div = document.createElement("div");
    let poster = document.createElement("img");
    let name = document.createElement("h4");

    poster.src = elem.snippet.thumbnails.medium.url;
    name.innerText = elem.snippet.title;
    div.append(poster, name);
    div.addEventListener("click", () => {
      showVideo(elem);
    });
    container.append(div);
  });
};

let liveShow = async () => {
  let liveurl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=30&type=video&key=AIzaSyAZ-kSbO2IcLIArmtFDxU_jA9OSlYF1r5o`;
  let live = await fetch(liveurl);
  let liveData = await live.json();
  append(liveData.items);
  // console.log(liveData)
};
let allShow = async () => {
  defalult_video();
  liveShow();

  appendDefault(dataDefault.items);
  append(liveData.items);
};
