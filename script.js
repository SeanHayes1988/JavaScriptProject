/* <![CDATA[ */
var summary = new Array(10);
summary[0]= "Own: ";
summary[1] = "Type: ";
summary[2] = "Years old: ";
summary[3] = "House Alarm: ";
summary[4] = "Smoke Alarm(s): ";
summary[5] = "Location: ";
summary[6] = "Claims Free: ";
summary[7] = "Building Cover: ";
summary[8] = "Content Cover: ";
summary[9] = "Claims Excess: ";

var insuranceValue = new Array(10);

function propertyOwner(owners)
{
insuranceValue[0]= document.forms[0].owner.value=owners;
}

function propTypes(h_Type)
{
insuranceValue[1]= document.forms[0].propertyType.value=h_Type;
}

function Old(h_Old)
{
insuranceValue[2]= document.forms[0].howOld.value=h_Old;
}

function houseAlarm(h_Alarm)
{
insuranceValue[3]= document.forms[0].owner.value=h_Alarm;
}

function smokeAlarm(s_Alarm)
{
insuranceValue[4]= document.forms[0].owner.value=s_Alarm;
}

function propertyLocation(loc)
{
insuranceValue[5]= document.forms[0].locations.value=loc;
}

function pClaimsFree(PCFree)
{
insuranceValue[6]= document.forms[0].claimsFree.value=PCFree;
}

var coverPercent;

 	function IntegersOnly(BuildingC) {
	insuranceValue[7]=document.forms[0].bCover.value=BuildingC;
	coverPercent = insuranceValue[7]/100;
}

function contentC(cover)
{
insuranceValue[8]=document.forms[0].CC.value=cover;
}

function cExcess(claimsExcess)
{
insuranceValue[9]=document.forms[0].excess.value=claimsExcess;
}

function Calc()
{

var i;
var owner="";
var len = document.forms[0].owner.length;
for(  i=0; i<len; i++) {
	if (document.forms[0].owner[i].checked )
	{
		owner= document.forms[0].owner[i].value;
		break;
	}

}

var  j = document.getElementById("typeID");
var propType = j.options[j.selectedIndex].value;
var propType1 = j.options[j.selectedIndex].text;

//http://stackoverflow.com/questions/15368172/javascript-dropdown-validation
var k = document.getElementById("old");
var oldA = k.options[k.selectedIndex].value;
var oldB = k.options[k.selectedIndex].text;

var l; 
var alarm="";
var lenl= document.forms[0].alarm.length;
for(l=0; l<lenl; l++)  {
	
	if (document.forms[0].alarm[l].checked )
	{
		alarm = document.forms[0].alarm[l].value;
		break;
	}
}

var m; 
var smoke="";
var lenm= document.forms[0].smoke.length;
for(m=0; m<lenm; m++)  {
	
	if (document.forms[0].smoke[m].checked )
	{
smoke = document.forms[0].smoke[m].value;
		break;
	}
}

var n = document.getElementById("propLocation");
var location = n.options[n.selectedIndex].value;
var locationA = n.options[n.selectedIndex].text;

var o = document.getElementById("claims");
var claimsFree = o.options[o.selectedIndex].value;
var caimsFreeA = o.options[o.selectedIndex].text;

var p = document.getElementById("cCover");
var contentCover= p.options[p.selectedIndex].value;
var  contentCoverA= p.options[p.selectedIndex].text;

var q; 
var excess="";
var lenq= document.forms[0].excess.length;
for(q=0; q<lenq; q++)  {
	
	if (document.forms[0].excess[q].checked )
	{
excess = document.forms[0].excess[q].value;
		break;
	}
}
var total = insuranceValue[0] + insuranceValue[1] + insuranceValue[2] + insuranceValue[3] + insuranceValue[4] + insuranceValue[5] + insuranceValue[6] + coverPercent + insuranceValue[8] + insuranceValue[9];

	if (owner=="")
	  {
		 window.alert("You didn't declare the owner of the property");
		}		
		
	else if (propType==0 )
	{
		window.alert("You didn't select the type of property");
	}
	
	else if (oldA==0 )
	{
		window.alert("You didn't declare how old is the property");
	}
	
	else if(alarm =="")
			{
		 window.alert("You didn't declare if there is a security alarm"); 
			}
			
			else if(smoke =="")
			{
		 window.alert("You didn't declare if there is any smoke alarms"); 
			}
			
			else if(location==0)
			{
		 window.alert("You didn't select the location of the property"); 
			}
			
			else if(claimsFree==0)
			{
		 window.alert("You didn't enter the years the property is claims free "); 
			}
			
			else if(insuranceValue[7] >= 'a' &&  insuranceValue[7] <= 'z')
			{
		 window.alert("Must be a numeric value  for the Building Cover "); 
			}
			
			else if(insuranceValue[7] >= 'A' &&  insuranceValue[7] <= 'Z')
			{
		 window.alert("Must be a numeric value  for the Building Cover"); 
			}
			
			else if(insuranceValue[7] =="")
			{
		 window.alert("You didn't enter a value  "); 
			}
			
			else if (contentCover==0)
			{
			window.alert("You didn't select a value for contents cover ");
			}
			
			else if(excess =="")
			{
		 window.alert("You didn't declare the claims excess"); 
			}
	  else
			document.getElementById("summary_report").innerHTML= "<p> A summary of your quote is as follows: </p>" + summary[0] + " &nbsp;&nbsp; "+ "€"+insuranceValue[0] 
			+ "<p>" + summary[1]  + " &nbsp;&nbsp; " + "€"+insuranceValue[1] + "</p>" + "<p>" + summary[2]  + " &nbsp;&nbsp; " + "€"+insuranceValue[2] + "</p>"
			+ "<p>" + summary[3]  + " &nbsp;&nbsp; " + "€"+insuranceValue[3] + "</p>" + "<p>" + summary[4]  + " &nbsp;&nbsp; " + "€"+insuranceValue[4] + "</p>"
			+ "<p>" + summary[5]  + " &nbsp;&nbsp; " + "€"+insuranceValue[5] + "</p>"  + "<p>" + summary[6]  + " &nbsp;&nbsp; " + "€"+insuranceValue[6] + "</p>" 
			+ "<p>" + summary[7]  + " &nbsp;&nbsp; " + "€"+coverPercent.toFixed(2) + "</p>"  + "<p>" + summary[8]  + " &nbsp;&nbsp; " + "€"+insuranceValue[8] + "</p>" 
			+ summary[9]  + " &nbsp;&nbsp; " + "€"+insuranceValue[9]+ "</p>" + "<p> Your Total  Cost is " + "€"+total.toFixed(2) +"</p>";		
}

//all validations for the drop down menus are example - http://stackoverflow.com/questions/15368172/javascript-dropdown-validation
//all validations for the radio buttons are examples coming from the notes
/* ]]> */