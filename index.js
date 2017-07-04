var express = require('express');
var app = express();

app.set("view engine","ejs"); // 1
// ejs를 사용하기 위해서 express의 view engine에 ejs를 set하는 코드입니다.

app.use(express.static(__dirname + '/public'));
// express.static : static 폴더를 지정해주는 express의 함수
// __dirname : node.js에서 프로그램이 실행중인 파일의 위치를 나타내는 글로벌 변수
// / : static폴더 설정 경로
// app.use : HTTP 메소드에 상관없이 무조건 실행되는 부분


// 2
// 2. query를 통해서 이름을 받는 코드입니다. 모든 query들은 req.query에 저장됩니다.
app.get("/hello", function(req,res){
 res.render("hello", {name:req.query.nameQuery});
});

// 3
// 3. route parameter를 통해 이름을 받는 코드입니다. 콜론(:)으로 시작되는 route은 해당 부분에 입력되는 route이 req.params에 저장됩니다.
// 예를 들어 /hello/Kim을 입력하면 "/hello/:nameParam"에 의해 세미콜론이 있는 route의 2번째 부분 즉, Kim이 req.params.nameParam에 저장됩니다.
// ejs파일을 사용하기 위해서는 res.render 함수를 사용해야 하며, 첫번째 parameter로 ejs의 이름을, 두번째 parameter로 ejs에서 사용될 object를 전달합니다.
// res.render함수는 ejs를 /views 폴더에서 찾으므로 views폴더의 이름은 변경되면 안됩니다.

app.get("/hello/:nameParam", function(req,res){
 res.render("hello", {name:req.params.nameParam});
});

app.listen(3000, function(){
 console.log('Server On!');
});
