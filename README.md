# rabbit-queue-delete-tool
rabbit队列批量删除，基于RabbitMQ management15672实现

> 接手了一个项目，由于代码问题，RabbitMQ中出现大量“永远不会有消费者”的queue，ready总数两天内会达到40万。所以用nodejs写了一个批量删除工具，用于删除之前产生的此类queue。


 # queue查询接口模型示例

```json

{
            "messages_details":{
                "rate":"0.0"
            },
            "messages":158,
            "messages_unacknowledged_details":{
                "rate":"0.0"
            },
            "messages_unacknowledged":0,
            "messages_ready_details":{
                "rate":"0.0"
            },
            "messages_ready":158,
            "reductions_details":{
                "rate":"0.0"
            },
            "reductions":878958,
            "message_stats":{
                "deliver_get_details":{
                    "rate":"0.0"
                },
                "deliver_get":1,
                "ack_details":{
                    "rate":"0.0"
                },
                "ack":1,
                "redeliver_details":{
                    "rate":"0.0"
                },
                "redeliver":0,
                "deliver_no_ack_details":{
                    "rate":"0.0"
                },
                "deliver_no_ack":0,
                "deliver_details":{
                    "rate":"0.0"
                },
                "deliver":1,
                "get_no_ack_details":{
                    "rate":"0.0"
                },
                "get_no_ack":0,
                "get_details":{
                    "rate":"0.0"
                },
                "get":0,
                "publish_details":{
                    "rate":"0.0"
                },
                "publish":159
            },
            "node":"rabbit@localhost",
            "arguments":{
                "x-expires":86400000
            },
            "exclusive":false,
            "auto_delete":false,
            "durable":true,
            "vhost":"/",
            "name":"mqtt-subscription-cb32169ddc0d43bc892cadbcee863c2f1620909065928qos1",
            "message_bytes_paged_out":0,
            "messages_paged_out":0,
            "backing_queue_status":{
                "mode":"default",
                "q1":0,
                "q2":0,
                "delta":[
                    "delta",
                    "undefined",
                    0,
                    0,
                    "undefined"
                ],
                "q3":0,
                "q4":158,
                "len":158,
                "target_ram_count":"infinity",
                "next_seq_id":159,
                "avg_ingress_rate":0.15930331318522922,
                "avg_egress_rate":"0.0",
                "avg_ack_ingress_rate":"0.0",
                "avg_ack_egress_rate":"0.0"
            },
            "head_message_timestamp":null,
            "message_bytes_persistent":70091,
            "message_bytes_ram":71322,
            "message_bytes_unacknowledged":0,
            "message_bytes_ready":71322,
            "message_bytes":71322,
            "messages_persistent":155,
            "messages_unacknowledged_ram":0,
            "messages_ready_ram":158,
            "messages_ram":158,
            "garbage_collection":{
                "minor_gcs":67,
                "fullsweep_after":65535,
                "min_heap_size":233,
                "min_bin_vheap_size":46422
            },
            "state":"running",
            "recoverable_slaves":null,
            "memory":265208,
            "consumer_utilisation":null,
            "consumers":0,
            "exclusive_consumer_tag":null,
            "policy":null
        }
        
```