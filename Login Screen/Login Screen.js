function login(){
 const username = document.getElementById("username").value;
 const password = document.getElementById("password").value;
 if(username=="Harshil" && password=="1971"){
  document.write("Valid User");
 }
 else{
  document.write("Unvalid User");
 }
}
function toggle(){
var t=document.getElementById('password')
var tb=document.getElementById('togglebtn')
if(t.type=="text")
{
t.type="password";
tb.value="Show"
}
else
{
t.type="text";
tb.value="Hide";
}
}