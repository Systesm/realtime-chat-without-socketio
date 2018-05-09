Required packages: Expressjs, Emitter

## Quy trình

> Emit from post message, get id receiver, and message push to 'notifications' event
> On 'notifications' event got id receiver, res.send message to id receiver

## Giải thích

Giả sử 2 bên điều request lên server để lấy notification mới, request sẽ đợi 1p30s để nhận notification, nếu hơn 1p30s ngắt kết nối, vì ko có notification sẽ ko return cho client kết quả, nên client phải chờ mãi.
