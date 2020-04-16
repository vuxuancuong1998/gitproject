/* 
    Tạo mảng book gồm các phần tử:

    {
        ten: PHP, Gia: 100
    }

*/
const books = [
    {
        Ten:"PHP",
        Gia:100,
        Theloai:"Sách lập trình"
    },
    {
        Ten: "Javascript",
        Gia:50,
        Theloai:"Sách lập trình",
    },
    {
        Ten:"Doremon",
        Gia:20,
        Theloai:"Truyện tranh"
    }
]
console.log("----------Map--------------------");
// hien thi thong tin trong mang bằng Map
const hienthiMap = books.map(
    function(book){
        return "Tên:" + book.Ten + "\n" + "Giá:" + book.Gia + "\n" + "Thể loại:" + book.Theloai;
    }
)
console.log(hienthiMap)
console.log("----------FOREACH--------------------");
// Hiển thị thông tin trong mảng bằng foeach
const hienthiforech = books.forEach(
    function(book){
       console.log("Tên:" + book.Ten + "\n" + "Giá:" + book.Gia + "\n" + "Thể loại:" + book.Theloai);

    }
)


console.log("----------FOR--------------------");
// hiển thị thông tin trong mảng bằng for
function Show(){
    for (let book of books){
        console.log("Tên:" + book.Ten + "\n" + "Giá:" + book.Gia + "\n" + "Thể loại:" + book.Theloai);
    }
}
console.log("----------PUSH--------------------");
// Hàm thêm vào Cuối mảng
books.push({Ten:"C#", Gia:200, Theloai:"Sách lập trình"});

Show();
console.log("--------------UNSHIFT----------------");
// Hàm thêm vào Đầu mảng
books.unshift({Ten:"Bố Già", Gia:40,Theloai:"Văn học"});
Show();
console.log("-----------FILTER-------------------");
// Hiển thị thông tin các loại sách có giá trên 40
const giasach = books.filter(
    function(book){
        if(book.Gia > 40){
            console.log(book.Ten);
        }
        
    }
)
console.log("------------SHIP------------------");
// Hàm xoá thông tin sách đầu mảng
const XoaBook = books.shift();
Show();
console.log("-----------POP-------------------");
// Hàm xoá thông tin sách cuối mảng
const XoaBook2= books.pop();
Show();
console.log("-----------Arrow function--------------------");
// List tất cả thông tin sách Map
const Listbook = book =>
{
    return book.map(
        function(booklist){
            return "Tên:" + booklist.Ten + "\n" + "Giá:" + booklist.Gia + "\n" + "Thể loại:" + booklist.Theloai;
     
         }
    )
}
console.log(Listbook(books));

