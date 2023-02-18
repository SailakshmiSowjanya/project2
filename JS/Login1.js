function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","../Asset/logos/monkey2.jpg")
}
function hid()
{
    document.getElementById("b").setAttribute("src","../Asset/logos/monkeyeyesclose.jpg")
    document.getElementById("a").setAttribute("type","password")   
}
function auth()
{
    var password="123"
    var email="Sam@gmail.com"
    var userpass=document.getElementById("a").value
    var useremail=document.getElementById("email").value
    if(useremail==email && userpass==password)
    {
        document.getElementById("good").setAttribute("action","./Index.html")
        document.getElementById("login").setAttribute("type","submit")
        document.getElementById("result").innerHTML=""
    }
    else if(useremail!=email && userpass==password)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the Wrong Email"
        document.getElementById("bg").style.backgroundImage="linear-gradient(90deg,red, yellow)"

    }
    else if(useremail==email && userpass!=password)
    {
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the Wrong Password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(90deg,blue, green)"
        document.getElementById("email").style.borderColor="blue"
    }
    else
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("cont").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered the Wrong Email and Password"
        document.getElementById("bg").style.backgroundImage="linear-gradient(360deg,red, brown)"
        

    }
}