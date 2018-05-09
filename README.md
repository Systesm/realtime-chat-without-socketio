Required packages: Expressjs, Emitter

## Quy trình

* app.post('/message'): sẽ nhận message từ người gửi, lấy id người nhận và tin nhắn gửi emit đến 'notifications' event
* app.get('/message'): sẽ chờ event 'notifications' nếu quá 1p30s sẽ timedout request, nếu nhận được thì gửi xuống client data của người gửi
* 2 phía người gửi và người nhận đều request app.get('/message') để nhận thông báo, nếu request timedout thì request lại ban đầu

## Giải thích

Giả sử 2 bên điều request lên server để lấy notification mới, request sẽ đợi 1p30s để nhận notification, nếu hơn 1p30s ngắt kết nối, vì ko có notification sẽ ko return cho client kết quả.
