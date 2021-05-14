
var url = require('url');
// npm i request
var request = require('request');

// RabbitMQ Management地址
var server = "http://***.***.***.***:15672";

// 以下Header需要替换authorization 与 Cookie， 可以在登录RabbitMQtt Management后，从F12开发者工具中找到
var qHeader = {
    "content-type": "application/json",
    "authorization": "Basic cWljaGVuZ21xdHQ6cWljaGVuZ21xdHQyMDIw",
    "Connection": "keep-alive",
    "Cookie": "pageSize=10; pageNo=1; m=2258:cWljaGVuZ21xdHQ6cWljaGVuZ21xdHQyMDIw"
}

// 队列查询地址
var url = server + "/api/queues";
// 队列查询参数
var requestData = {
    page: 1,
    page_size: 400,
    name: "",
    use_regex: false,
    sort: "messages_ready",
    sort_reverse: true,
    pagination: true
}
request({
    url: url,
    method: "GET",
    json: true,
    headers: qHeader,
    body: JSON.stringify(requestData)
}, function (error, response, body) {
    if (!error & response.statusCode == 200) {

        // var items = body.items;
        var index = 0;
        var test = "mqtt-subscription-f81320221038454b8c0d7dc82a99ead5qos1";
        console.log(body.length);
        for (; index < body.length; index++) {

            // 遍历所有的queue，判断条件可以根据自己的需求来写

            var queueName = body[index].name;

            if (queueName.length > test.length) {
                // 执行删除操作，建议在删除前先打印测试，不要误删
                deleteQueue(queueName);
            }

        }
    }
});


function deleteQueue(qname) {

    var delUrl = server + "/api/queues/%2F/" + qname;

    var requestData = {
        mode: "delete",
        name: qname,
        vhost: "/"
    }
    request({
        url: delUrl,
        method: "DELETE",
        json: true,
        headers: qHeader,
        body: JSON.stringify(requestData)
    }, function (error, response, body) {
        if (!error & response.statusCode == 200) {
            
        }
    });
}