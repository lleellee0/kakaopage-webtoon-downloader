const fetch = require('node-fetch');

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
  "referrer": "https://page.kakao.com/home?seriesId=51649140",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "seriesid=51649140&page=0&direction=desc&page_size=10000&without_hidden=true",
  "method": "POST",
  "mode": "cors"
}).then(res => res.json())
  .then(json => console.log(json));