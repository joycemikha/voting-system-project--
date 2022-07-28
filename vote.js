var q = new Array();
var arr = new Array();
var c1 = new Array();
var c2 = new Array();
var c3 = new Array();
var cm1 = new Array();
var cm2 = new Array();
var cm3 = new Array();

q[0]="what is your favorite programming language ?";
q[1]="what is your favorite drink ?";
q[2]="what is your favorite hobby ?";
	 
c1[0]="c#";
c2[0]="java";
c3[0]="python";
c1[1]="tea";
c2[1]="coffee";
c3[1]="juice";
c1[2]="swimming";
c2[2]="reading";
c3[2]="football";

var counter1=0;
var counter2=0;
var counter3=0;

var countera=0;
var counterb=0;
var counterc=0;

function poll(){	 
	
	for(var m=1;m<=3;m++){
	var l = Math.floor(Math.random()*3);
	document.getElementById("Thequestion").innerHTML=q[l];
	document.getElementById("Choice1").innerHTML="<input type='radio' name='radio' id='firstvalue' value='A'/>"+c1[l]+"<br>"
    document.getElementById("Choice2").innerHTML="<input type='radio' name='radio' id='secondvalue' value='B'/>"+c2[l]+"<br>"
    document.getElementById("Choice3").innerHTML="<input type='radio' name='radio' id='thirdvalue' value='C'/>"+c3[l]+"<br>"
	
}
}

function result()
{
    var a = document.getElementById("firstvalue");
	var b = document.getElementById("secondvalue");
	var c = document.getElementById("thirdvalue");	
    
	 if(a.checked==true)
	 {
        counter1++;
	 }		 
	 else if (b.checked==true)
	 {
        counter2++;
	 }		
     else if (c.checked==true)
	 {
        counter3++;
	 }		 
document.getElementById("counter1").innerHTML="the first choice was voted : "+counter1+" times";
document.getElementById("counter2").innerHTML="the second choice was voted : "+counter2+" times";
document.getElementById("counter3").innerHTML="the third choice was voted : "+counter3+" times";

counter1=0;
counter2=0;
counter3=0;
}

function createquestion(){	 

	 for(var t=1;t<=5;t++){
	var k=Math.floor(Math.random()*5);
	document.getElementById("question").innerHTML=arr[k];
	document.getElementById("Choices1").innerHTML="<input type='radio'  id='radio1' name='yass'value='A'/>"+cm1[k]+"<br>"
    document.getElementById("Choices2").innerHTML="<input type='radio' id='radio2' name='yass' value='B'/>"+cm2[k]+"<br>"
    document.getElementById("Choices3").innerHTML="<input type='radio' id='radio3'  name ='yass'value='C'/>"+cm3[k]+"<br>"
	 }
}

function check()
{
    var x = document.getElementById("radio1");
	var y = document.getElementById("radio2");
	var z = document.getElementById("radio3");	
    
	 if(x.checked==true)
	 {
        countera++;
	 }		 
	 else if (y.checked==true)
	 {
        counterb++;
	 }		
else if (z.checked==true)
	 {
        counterc++;
	 }		 
document.getElementById("countersa").innerHTML="firstchoice = "+countera;
document.getElementById("countersb").innerHTML="second = "+ counterb;
document.getElementById("countersc").innerHTML="third = "+ counterc;

countera=0;
counterb=0;
counterc=0;
}

function input(){
	var s=document.getElementById("qs1").value;
	var d=document.getElementById("ch1").value;
	var ff=document.getElementById("ch2").value;
	var g=document.getElementById("ch3").value;
	arr[0]=s;
	cm1[0]=d;
	cm2[0]=ff;
	cm3[0]=g;
	var h=document.getElementById("qs2").value;
	var j=document.getElementById("ch11").value;
	var hh=document.getElementById("ch22").value;
	var jj=document.getElementById("ch33").value;
	arr[1]=h;
	cm1[1]=j;
	cm2[1]=hh;
	cm3[1]=jj;
	var zzz=document.getElementById("qs3").value;
	var aaa=document.getElementById("ch111").value;
	var bbb=document.getElementById("ch222").value;
	var ccc=document.getElementById("ch333").value;
	arr[2]=zzz;
	cm1[2]=aaa;
	cm2[2]=bbb;
	cm3[2]=ccc;
	var zzzz=document.getElementById("qs4").value;
	var aaaa=document.getElementById("ch1111").value;
	var bbbb=document.getElementById("ch2222").value;
	var cccc=document.getElementById("ch3333").value;
    arr[3]=zzzz;
	cm1[3]=aaaa;
	cm2[3]=bbbb;
	cm3[3]=cccc;
	var zzzzz=document.getElementById("qs5").value;
	var aaaaa=document.getElementById("ch11111").value;
	var bbbbb=document.getElementById("ch22222").value;
	var ccccc=document.getElementById("ch33333").value;
	arr[4]=zzzzz;
	cm1[4]=aaaaa;
	cm2[4]=bbbbb;
	cm3[4]=ccccc;
}

function deletequestion(){
	var pp =parseInt(document.getElementById("del").value);
	q.splice(pp,1); 
	c1.splice(pp,1);
	c2.splice(pp,1);
	c3.splice(pp,1);
}














	