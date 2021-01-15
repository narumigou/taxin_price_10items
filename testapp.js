//test1
var check = function() {
    var x = window.prompt ("税込表示したい日本円を入力してください。");
    if (!isNaN(x)){
        document.write (Math.ceil(x * 1.1));
        document.write ("\n");
    } else {
        alert("数値以外が入力されています。");
    };
};

for (let i = 0; i <= 10; i++){
    check();
}


