from urllib.request import urlopen
from urllib.parse import urlencode, unquote, quote_plus
import urllib
import requests
import pandas as pd
import xmltodict
import json

key='B%2FNiJnYmkZV1%2FK7ulvZI4MoSXvCTDfNAd0Snw%2Bk6g4%2BbMk1LoGVhd75DJahjv4K35Cr9jh9RX0j%2BM89grKBYsw%3D%3D'
url = f'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey={key}&'
queryParams = urlencode({ quote_plus('pageNo') : 1,
                          quote_plus('numOfRows') : 10,
                          quote_plus('startCreateDt') : '20200101',
                          quote_plus('endCreateDt') : '20220111'})
url2 = url + queryParams
response = urlopen(url2)
results = response.read().decode("utf-8")
results_to_json = xmltodict.parse(results)
data = json.loads(json.dumps(results_to_json))
print(type(data))   # dic
print(data)

corona=data['response']['body']['items']['item']
#추가하고 싶은 리스트 생성
state_dt=[]
state_time=[]
decide_cnt=[]
death_cnt=[]
acc_exam_cnt=[]
acc_def_rate=[]
create_dt=[]
update_dt=[]

for i in corona:
    state_dt.append(i['stateDt'])      # stateDt : 20200801 기준일
    state_time.append(i['stateTime'])  # stateTime : 00:00 기준시간
    decide_cnt.append(i['decideCnt'])  # decideCnt : 14336 확진자 수
    death_cnt.append(i['deathCnt'])    # deathCnt : 75 사망자 수
    acc_exam_cnt.append(i['accExamCnt'])   # accExamCnt : 268212 누적 검사 수
    acc_def_rate.append(i['accDefRate'])     # accDefRate : 3.2396602365 누적 확진률
    create_dt.append(i['createDt'])     # createDt : 2020-03-15 10:01:22.000 등록일시분초
    update_dt.append(i['updateDt'])     # updateDt : null 수정일시분초

df=pd.DataFrame([state_dt,state_time,decide_cnt,death_cnt,acc_exam_cnt,acc_def_rate,create_dt,update_dt]).T
df.columns=['기준일','기준시간','확진자 수','사망자 수','누적 검사 수','누적 확진률','등록일시분초','수정일시분초']
df=df.sort_values(by='기준일', ascending=True)

# csv 파일 생성
df.to_csv('sample.csv')
# 메모장
df.to_csv('sample.txt')
