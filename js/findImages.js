const request = require('request');
const cheerio = require('cheerio');
const downloadImages = require('./downloadImages.js')
const log = require('./log.js')

const findWebToonImages = (article_id, path, hmCu, hts, prof, ts, lsid, retryCount) => { // titleId is Webtoon's id, no is Sequence's id
  console.log(`${article_id}화 저장중..`);
  log.addLog(`${article_id}화를 저장중입니다.`)
  let cookieJar = request.jar();  // 19세 이상 인증 웹툰에 대해서는 19세 이상인 다음 아이디로 로그인 된 계정에서 쿠키를 가져와야함.
  cookieJar.setCookie(`HM_CU=${hmCu}; path=/; domain=daum.net`, 'http://webtoon.daum.net');
  cookieJar.setCookie(`HTS=${hts}; path=/; domain=daum.net`, 'http://webtoon.daum.net');
  cookieJar.setCookie(`PROF=${prof}; path=/; domain=daum.net`, 'http://webtoon.daum.net');
  cookieJar.setCookie(`TS=${ts}; path=/; domain=daum.net`, 'http://webtoon.daum.net');
  cookieJar.setCookie(`LSID=${lsid}; path=/; domain=daum.net`, 'http://webtoon.daum.net');

  fetch("https://api2-page.kakao.com/api/v1/inven/get_download_data/web", {
    "headers": {
      "accept": "application/json",
      "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7,da;q=0.6",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "cookie": "_fbp=fb.1.1589728004555.477905501; _ga=GA1.2.1504221130.1567762067; _kadu=3_5orHKb9npAVU98_1589728491254; _kawlp=cyEMg92uFINAQDrNkMPvoJh0dKae-9dYx9ameMBLJ7VrD3pZ5QM0ydT0Oo5NXDtg_tTYd3s_AUiDDR-XW37omY28wyQADI69wFPzsz7shIPjwAAC4b2wheeFNROkdKq7; _kawlpaa=RodYlsQv2Dfffsi2vqPffgIy1S1PyeuEA5VD8ddpFYypOa7ieae9cJIwq8_dbwiMN9WhQDoSsRgIdN6ahPnpu2IMHeuBxYkxlfGLewKDPao47cUTrpdaZMUIqZ11ly5X; _kawlptea=1590137125992; _kptid=dd65491b91b5496da81b4e0c7c94fd2f; _TI_NID=iok9mjEFfnWoNqMjDA5hhc6Z8ZoKw9yGLfP9ONNLPkaWT0laMS07V5h9rnQ+r9yccoQB69LMRFUTY/W7gxHjxg==; kuid=30473510224658433; webid=24cdfa52213d4b4b8539d82ba7ad3cd3; _kawlt=IV5NXhmeak0rmVtgqJuInNYlfQrypRxSrWadacPTKFuRI5xSxJzdc5FZq7g3yaYR1BY32x2-s3v5jshXy522CRr9mOdUcAETIaKwC2ymtYK0Rr6UJ_sb_gwGS3Xymgo9; _kawltea=1590423800; _karmt=EXmzfMKuhAPRZeEHRiuBUuFFVrktrksjvTq5J0YeGqiUMf3hBouNO8J4X8iUaM2I; _karmtea=1592951000; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1; TIARA=DMOwFXiHTa5aS1AM.NEWEeP4Mli.e33DO_orjslwG1.dOdIQV6SQkFzlLzL56_XJGD9IDpBCPunft2q6lEMePrUcq8w9u.j3"
    },
    "referrer": `https://page.kakao.com/viewer?productId=${article_id}`,
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": `productId=${article_id}&device_mgr_uid=Windows - Chrome&device_model=Windows - Chrome&deviceId=3159e548b459a213a1c6a2a1736ee626`,
    "method": "POST",
    "mode": "cors"
  }).then(res => res.json())
    .then(json => {
      console.log(json);
      for(let i = 0; i < json.downloadData.members.files.length; i++) {
        downloadImages.downloadWebToonImage(
          json.downloadData.members.files[i].secureUrl,
          article_id,
          i,
          path,
          3
        );
        ;
      }
    });
  
  // request({
  //   jar:cookieJar,
  //   uri:`http://webtoon.daum.net/data/pc/webtoon/viewer_images/${article_id}`,
  // }, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     let json_body = JSON.parse(body);

  //     let endNumber = json_body.data.length;
  //     let uriArr = json_body.data;

  //     downloadImages.downloadWebToonImages(
  //       uriArr,
  //       article_id,
  //       path,
  //       1,
  //       endNumber
  //     );
  //   } else {
  //     console.log('err ' + article_id + "화. 재시도 합니다. 남은 재시도 횟수 : " + --retryCount);
  //     log.addErrorLog(`${article_id}화에서 이미지 링크를 추출하다가 실패했습니다. 남은 재시도 횟수 : ${retryCount}`);
  //     if(retryCount > 0)
  //       findWebToonImages(webtoon_ids[i], path, hmCu, hts, prof, ts, lsid, retryCount);
  //     console.log(error);
  //   }
  // });
}

module.exports = {
  findWebToonImages: findWebToonImages
}