$('#check').html('');
$("#login").submit(function (event) {
    var _tailkhoan = $('#taikhoan').val();
    var _matkhau = $('#matkhau').val();
   
    if (_tailkhoan == 'admin' && _matkhau == 'admin') {
        var user = { tailkhoan: _tailkhoan, matkhau: _matkhau };
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = "Quan-tri.html";
    } else {
        $('#check').html('Thông tin tài khoản hoặc mật khẩu không đúng');
    }
    event.preventDefault();
});
