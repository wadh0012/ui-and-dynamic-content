var item = document.getElementById('itm');
var btn = document.getElementById('btn');
var liststore = document.getElementById('list');
var errmsg = document.getElementById('err');

function additem()
{
	var listitem = document.createElement("li");
	
	if(item.value!='')
	{
		
		var itemv = item.value;
		listitem.textContent = itemv;
		liststore.append(listitem);
		errmsg.innerText=" ";
		item.value = "";
		item.focus();

		
		
		/*The textContent property returns:
The text content of the element.*/
	}
	else
	{
		
		errmsg.innerText="nothing entered";
	}
}