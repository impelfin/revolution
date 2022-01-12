## 리액트 워드 클라우드 웹 앱 프로젝트: Flask Python 모듈

### 사전 구성요소
* 파이썬(Python) 다운로드: 3.7.2 Version
* 깃(Git) 클라이언트 다운로드: 2.20 Version
* Microsoft Visual C++ 14.0 다운로드
* Java 설치 및 환경변수 등록
```
# 리눅스 sudo apt-get update
# 리눅스 sudo apt-get install python3-pip
# 리눅스 sudo apt-get install openjdk-8-jre
# 리눅스 sudo apt-get install openjdk-8-jdk
pip3 install wordcloud
pip3 install konlpy
pip3 install matplotlib
pip3 install flask
pip3 install flask_cors
```
* OS와 Java 및 Python의 비트(Bit)를 맞추기
### API 구축 방법
```
git clone https://github.com/ndb796/ReactWordCloudWebApp-Python.git
cd ReactWordCloudWebApp-Python
# 리눅스 sudo python3 word_cloud.py
# 리눅스의 경우 [Ctrl + z] - [bg] - [disown -h]으로 항상 실행
# 윈도우 python word_cloud.py
# AWS EC2를 사용하는 경우 [보안 그룹] - [인바운드] - [편집] - 포트 열기
```
### API 호출 예제
> [워드 클라우드 생성] URL: http://localhost:5000/process
```json
{
  "textID": "1",
  "text": "안녕하세요? 저는 한국교원대학교 나동빈입니다. 여러분들과 함께 다양한 공부를 진행하면서 스터디에 참여하고 싶어요. 한 번 공부를 할 때 제대로 공부를 하는 것이 목표입니다. 공부는 쉽지 않지만 열심히 하다 보면 재미를 느끼고 참여할 수 있을 것 같아요.",
  "maxCount": 15,
  "minLength": 2,
  "words": {"1":{"weight":"7","word":"스터디"},"2":{"weight":"5","word":"참여"},"3":{"weight":"5","word":"분노"},"4":{"weight":"4","word":"치킨"}}
}
```
> [워드 클라우드 보기] URL: http://localhost:5000/outputs
```
http://localhost:5000/outputs?textID=1
```
