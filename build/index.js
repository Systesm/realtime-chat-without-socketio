"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
// cors
app.use(cors_1.default());
app.get('/message', function (req, res) {
    app.on('notifications', function (data) {
        console.log(data);
        res.send('hello');
    });
});
app.post('/message', function (req, res) {
    // console.log(req.body)
    app.emit('notifications', req.body);
});
app.listen(3002, function () {
    console.log('CORS-enabled web server listening on port 3002');
});
