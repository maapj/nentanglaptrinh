
    function tong(){
        let numberInputOne = document.getElementById("numberOne");
        let numberInputTwo = document.getElementById("numberTwo");

        let numberOne = numberInputOne.value;
        let numberTwo = numberInputTwo.value;
        let tong = (1*numberOne + 1*numberTwo);
        document.write("Tổng của 2 số đã nhập là: " + tong);
    }
    function hieu(){
        let numberInputOne = document.getElementById("numberOne");
        let numberInputTwo = document.getElementById("numberTwo");

        let numberOne = numberInputOne.value;
        let numberTwo = numberInputTwo.value;

        let hieu = (1*numberOne - 1*numberTwo);
        document.write("Hiệu của 2 số đã nhập là: " + hieu);
    }
    function tich(){
        let numberInputOne = document.getElementById("numberOne");
        let numberInputTwo = document.getElementById("numberTwo");

        let numberOne = numberInputOne.value;
        let numberTwo = numberInputTwo.value;

        let tich = (1*numberOne * 1*numberTwo);
        document.write("Tích của 2 số đã nhập là: " + tich);
    }
    function thuong(){
        let numberInputOne = document.getElementById("numberOne");
        let numberInputTwo = document.getElementById("numberTwo");

        let numberOne = numberInputOne.value;
        let numberTwo = numberInputTwo.value;

        if(numberTwo != 0){
            let thuong = ((+numberOne) / (+numberTwo));
            document.write("Thương của 2 số đã nhập là: " + thuong);
        } else {
            alert("vui lòng nhập lại!! ( mẫu khác 0)")
        }
    }
