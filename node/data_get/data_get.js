/* NodeJs 12 샘플 코드 */

var request = require('request');

var url = 'http://apis.data.go.kr/1360000/RoadWthrInfoService/getCctvStnRoadWthr';
var queryParams = '?' + encodeURIComponent('serviceKey') + '=B%2FNiJnYmkZV1%2FK7ulvZI4MoSXvCTDfNAd0Snw%2Bk6g4%2BbMk1LoGVhd75DJahjv4K35Cr9jh9RX0j%2BM89grKBYsw%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /* */
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /* */
queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('XML'); /* */
queryParams += '&' + encodeURIComponent('eqmtId') + '=' + encodeURIComponent('0500C00001'); /* */
queryParams += '&' + encodeURIComponent('hhCode') + '=' + encodeURIComponent('00'); /* */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    //console.log('Status', response.statusCode);
    console.log('Status', response);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});
