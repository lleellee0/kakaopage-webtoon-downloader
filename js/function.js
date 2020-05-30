const findImages = require('./js/findImages.js');
const log = require('./js/log.js');
const fs = require('fs');
const request = require('request');

// Add Event Lintener
let inputFakePath = document.getElementById("fake-path");
let inputRealPath = document.getElementById("path");

$(inputFakePath).on('click', function() {
  $(inputRealPath).click();
});

$(inputRealPath).on('change', function(event) {
  event.preventDefault();
  $(inputFakePath).val(inputRealPath.files[0].path);
});

const downloadWebtoon = () => {
  log.addLog(`다운로드를 시작합니다. 그림이 실제로 다운로드가 안될 경우 입력하신 값들(특히 HM_CU, HTS, PROF, TS, LSID)을 다시 확인하세요.`);
  let seriesId = document.getElementById("seriesId").value;
  let path = document.getElementById("path").files[0].path;
  let hmCu = document.getElementById("hmCu").value;
  let hts = document.getElementById("hts").value;
  let prof = document.getElementById("prof").value;
  let ts = document.getElementById("ts").value;
  let lsid = document.getElementById("lsid").value;

  let webtoon_ids = [];

  let cookieJar = request.jar();  // 19세 이상 인증 웹툰에 대해서는 19세 이상인 다음 아이디로 로그인 된 계정에서 쿠키를 가져와야함.
  cookieJar.setCookie(`HM_CU=${hmCu}; path=/; domain=daum.net`, 'http://webtoon.daum.net');
  cookieJar.setCookie(`HTS=${hts}; path=/; domain=daum.net`, 'http://webtoon.daum.net');
  cookieJar.setCookie(`PROF=${prof}; path=/; domain=daum.net`, 'http://webtoon.daum.net');
  cookieJar.setCookie(`TS=${ts}; path=/; domain=daum.net`, 'http://webtoon.daum.net');
  cookieJar.setCookie(`LSID=${lsid}; path=/; domain=daum.net`, 'http://webtoon.daum.net');

  fetch("https://api2-page.kakao.com/api/v5/store/singles", {
    "headers": {
      "accept": "application/json",
      "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,da;q=0.6",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "cookie": "_fbp=fb.1.1589728004555.477905501; _ga=GA1.2.1504221130.1567762067; _kadu=3_5orHKb9npAVU98_1589728491254; _kawlp=cyEMg92uFINAQDrNkMPvoJh0dKae-9dYx9ameMBLJ7VrD3pZ5QM0ydT0Oo5NXDtg_tTYd3s_AUiDDR-XW37omY28wyQADI69wFPzsz7shIPjwAAC4b2wheeFNROkdKq7; _kawlpaa=RodYlsQv2Dfffsi2vqPffgIy1S1PyeuEA5VD8ddpFYypOa7ieae9cJIwq8_dbwiMN9WhQDoSsRgIdN6ahPnpu2IMHeuBxYkxlfGLewKDPao47cUTrpdaZMUIqZ11ly5X; _kawlptea=1590137125992; _kptid=dd65491b91b5496da81b4e0c7c94fd2f; _TI_NID=iok9mjEFfnWoNqMjDA5hhc6Z8ZoKw9yGLfP9ONNLPkaWT0laMS07V5h9rnQ+r9yccoQB69LMRFUTY/W7gxHjxg==; kuid=30473510224658433; webid=24cdfa52213d4b4b8539d82ba7ad3cd3; _kawlt=IV5NXhmeak0rmVtgqJuInNYlfQrypRxSrWadacPTKFuRI5xSxJzdc5FZq7g3yaYR1BY32x2-s3v5jshXy522CRr9mOdUcAETIaKwC2ymtYK0Rr6UJ_sb_gwGS3Xymgo9; _kawltea=1590423800; _karmt=EXmzfMKuhAPRZeEHRiuBUuFFVrktrksjvTq5J0YeGqiUMf3hBouNO8J4X8iUaM2I; _karmtea=1592951000; TIARA=DMOwFXiHTa8L.Dh6S-CSQUh8t1qQjfeZoKlh8y5826sSAvw3vv5-MC2gaqKD4Fyz6KGLISc2akLnLLHt5x6XmG_eb9k72vCE"
    },
    "referrer": `https://page.kakao.com/home?seriesId=${seriesId}`,
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `seriesid=${seriesId}&page=0&direction=asc&page_size=10000&without_hidden=true`,
    "method": "POST",
    "mode": "cors"
  }).then(res => res.json())
    .then(json => {
      console.log(json);
      for(let i = 0, j = 0; i < json.singles.length; i++, j++) {
        setTimeout(() => {
          findImages.findWebToonImages(json.singles[i].id, path, hmCu, hts, prof, ts, lsid, 3);
        }, j * 2 * 1000);
      }
    });

  return false;
}

const onViewerPathChange = () => {
  clearViewerList();
  setViewerList();
}

const clearViewerList = () => {
  let viewerList = document.getElementById("list");
  $(viewerList).html('');
}

const setViewerList = () => {
  let path;
  if(document.getElementById("path").files[0] === undefined)  // "목록으로" 버튼으로 들어온 경우
    path = decodeURI(getUrlVars()["path"]);
  else                                                        // 정상적으로 변경해서 들어온 경우
    path = document.getElementById("path").files[0].path;

  if(path === "undefined")                                    // 처음 창을 열었을 때의 상태
    return;

  console.log(path);
  
  fs.readdir(path, (err, files) => {
    if(err) {
      console.error(err);
      return;
    }
    let noSet = new Set();
    for(let i = 0; i < files.length; i++)
      noSet.add(files[i].split('-')[0]);
    console.log(noSet);
    
    let viewerList = document.getElementById("list");
    noSet.forEach((value)=> {
      $(viewerList).append(`<li><a href="detail.html?no=${value}&path=${path}">${value}</a></li>`);
    });
  });
}

const setViewerImages = () => {
  console.log(window.location.search);

  let no = getUrlVars()["no"];
  let path = decodeURI(getUrlVars()["path"]);

  console.log(no);
  console.log(path);
  
  let viewerImages = document.getElementById("viewer_images");
  fs.readdir(path, (err, files) => {
    if(err) {
      console.error(err);
      return;
    }
    let imageArray = new Array;
    for(let i = 0; i < files.length; i++) {
      if(files[i].split('-')[0] === no) {
        imageArray.push(files[i]);
      }
    }

    imageArray.forEach((value, i) => {
      $(viewerImages).append(`<img class="viewer_image" src="${path+'\\'+value}" style="display: inherit; margin: 0 auto;"></img>`);
    });
  });
}

const setTopBottomMenu = () => {
  // let topPrev = document.getElementById("top_prev");
  // let topNext = document.getElementById("top_next");
  let topList = document.getElementById("top_list");
  // let bottomPrev = document.getElementById("bottom_prev");
  // let bottomNext = document.getElementById("bottom_next");
  let bottomList = document.getElementById("bottom_list");

  let no = parseInt(paddingNumber("0000", getUrlVars()["no"]), 10);
  let path = decodeURI(getUrlVars()["path"]);
  console.log(no);
  
  // $(topPrev).append(`<a href="detail.html?no=${paddingNumber("0000", no-1)}&path=${path}">이전화</a>`);
  // $(topNext).append(`<a href="detail.html?no=${paddingNumber("0000", no+1)}&path=${path}">다음화</a>`);
  $(topList).append(`<a href="list.html?path=${path}">목록으로</a>`);
  // $(bottomPrev).append(`<a href="detail.html?no=${paddingNumber("0000", no-1)}&path=${path}">이전화</a>`);
  // $(bottomNext).append(`<a href="detail.html?no=${paddingNumber("0000", no+1)}&path=${path}">다음화</a>`);
  $(bottomList).append(`<a href="list.html?path=${path}">목록으로</a>`);
}

const getUrlVars = () => {
  let vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

const paddingNumber = (padString, number) => {
  let pad = padString;
  let numberString = "" + number;
  return pad.substring(0, pad.length - numberString.length) + numberString;
};