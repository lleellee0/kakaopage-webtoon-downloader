## Daum Webtoon Downloader

본 프로그램이 법적으로 문제가 있으면 알려주세요.
기타 문의사항도 lleellee013@gmail.com으로 메일 바랍니다.

이 프로그램은 Node.js와 Electron을 이용해 다음 웹툰을 다운로드 받는 프로그램입니다.(네이버 웹툰 다운로더를 먼저 만든 후 Fork 하여 만들어짐.) 사용을 위해선 먼저 [다운로드(0.1.1 버전)](https://github.com/lleellee0/daum-webtoon-downloader/releases/download/v0.1.1/v0.1.1.daum-webtoon-downloader-win32-ia32.zip)를 받아주세요.

다운로드가 완료되었으면 압축을 해제해주세요. 압축을 해제하고 폴더로 들어가면 'daum-webtoon-downloader.exe'라는 파일이 있습니다. 이 파일을 실행하시면 됩니다.

이제부터 사용 방법에 대해 알려드리겠습니다. 추후 버전이 업그레이드 됨에 따라 인터페이스 혹은 사용 방법이 변경될 수 있습니다.


### 사용밥법

**1.** 시행하면 다음과 같은 화면이 보일겁니다.
![첫 실행화면](https://github.com/lleellee0/images/blob/master/20190303_193002.png?raw=true)

여기에는 다음과 같은 입력 공간이 있습니다.
- Webtoon URL
- Select Download Path

- HM_CU(optional)
- HTS(optional)
- PROF(optional)
- TS(optional)
- LSID(optional)

각각이 어떤 기능을 하는건지는 사용방법을 따라하시다보면 알게 될 겁니다.

**2.** [다음웹툰](http://webtoon.daum.net/)으로 들어가서 다운받고 싶은 웹툰의 메인 페이지로 들어갑니다.
![슬프게도 이게 내 인생](https://github.com/lleellee0/images/blob/master/20190303_192911.png?raw=true)
저는 테스트로 '슬프게도 이게 내 인생'을 가져왔습니다. 위쪽에 해당 웹툰의 URL이 있는데, 그 URL을 복사하여 Webtoon URL에 붙여넣습니다.

**3.** 어떤 웹툰을 받을지는 입력했습니다. 이제 이 웹툰의 이미지들을 어디에 받을지 지정해야합니다.
[Select Download Path]을 선택하면 '폴더'를 선택할 수 있는 창이 뜹니다. 가급적 폴더를 새로 만들고 그 폴더로 지정하시기 바랍니다.

![폴더선택](https://github.com/lleellee0/images/blob/master/20190303_193808.png?raw=true)![다운로드 준비 완료](https://github.com/lleellee0/images/blob/master/20190303_193834.png?raw=true)

이제 다운로드 준비가 완료되었습니다. [Start Download] 버튼을 눌러 다운로드를 하고 
지정하신 폴더로 가서 다운로드가 제대로 되는지 확인하시기 바랍니다.

![로그](https://github.com/lleellee0/images/blob/master/20190303_193850.png?raw=true)

위와 같이 로그도 확인할 수 있습니다. 하지만 정확한건 실제 파일이 다운로드 되고 있는지 확인하시기 바랍니다.

### 19세 인증 웹툰 다운로드
## ※설명전 주의사항.(매우중요) 아래 방법은 당신의 다음 쿠키를 복사해서 붙여넣습니다. 이 행위는 당신 계정의 권한을 다른사람에게 넘기는 것과 다름 없으나, 이 프로그램은 그러한 악의적인 행동은 하지 않습니다. 다만 이 프로그램을 누군가 수정하여 악의적인 행동을 하도록 수정했을 수도 있습니다. 때문에 이를 시도하기 전에 다음 계정의 보안설정에서 로그인 차단 설정 등 부가적인 보안 설정을 하신 상태에서 시도하시기 바랍니다.
다음은 19세 이상 인증해야 볼 수 있는 웹툰에 대한 다운로드 방법을 보여드리겠습니다.
위에서 사용하지 않았던 입력 공간이 5개 있습니다.
- HM_CU(optional)
- HTS(optional)
- PROF(optional)
- TS(optional)
- LSID(optional)
이 공간에 당신의 쿠키를 복사해서 집어넣어야합니다.

이를 위해 2가지가 필요합니다.
- '구글 크롬'
- '19세 이상의 다음 아이디'
 (필수는 아니지만 여기서는 크롬을 기준으로 설명하기 때문에 크롬을 넣었습니다. 당신이 당신 브라우저에서 쿠키를 볼 줄 알고 있다면 그 브라우저를 사용하셔도 됩니다.)

크롬으로 다음에 들어가 로그인을 하시고 [F12]를 눌러서 '개발자 도구'를 켭니다.

개발자 도구에서 [Application]탭 - [Storage] - [Cookies] - **http://webtoon.daum.net**에서 HM_CU, HTS, PROF, TS, LSID를 찾을 수 있을겁니다.

![쿠키](https://github.com/lleellee0/images/blob/master/20190303_193954.png?raw=true)

HM_CU, HTS, PROF, TS, LSID를 각각 프로그램에 붙여넣어 줍니다.
전과 마찬가지로 다운로드를 눌러주면 다운로드가 진행됩니다.
![19세 다운로드](https://github.com/lleellee0/images/blob/master/20190303_194306.png?raw=true)

마지막으로 위에 언급했던 것처럼 쿠키가 노출되었을 수 있기 때문에 쿠키를 따올때 로그인 했던 다음 아이디는 로그아웃 하시기 바랍니다.



# 그 외에도..
뷰어 기능 있으니 화면 왼쪽 위 Viewer로 들어가서 웹툰이 다운로드된 폴더를 선택하시면 웹툰에서 보는 것처럼 각 화별로 보기가 가능합니다.
