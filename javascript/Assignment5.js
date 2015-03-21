function Render(str) //Section1
{
    var getRequest;
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    if (str == "")
    {
        document.getElementById("data").innerHTML = "";
        return;
    }
    
    if (window.XMLHttpRequest)
    {
        getRequest = new XMLHttpRequest; 
    }
    
        getRequest.onreadystatechange = function()
    {
        if (getRequest.readyState == 4 && getRequest.status == 200)
        {
            var output = JSON.parse(getRequest.responseText);
            Generate(output);
            
        }
        
    }
    getRequest.open("GET", url, true);
    getRequest.send();
    
}

function Generate(result) //Section 1 is displayed
{
    var count = 0;
    table = "";
    
    table += ("<center>" + "<table border = '3' style = 'color: green;'>");
    table += ('<th>' + 'Customer ID' +
              '<th>' + 'Company Name' +
              '<th>' + 'City'); 
   
    for (count = 0; count < result.GetAllCustomersResult.length; count ++)
    {
        table += "<tr>";
            table += "<td>" + result.GetAllCustomersResult[count].CustomerID + "</td>";
            table += "<td>" + result.GetAllCustomersResult[count].CompanyName + "</td>";
            table += "<td>" + result.GetAllCustomersResult[count].City + "</td>";
        table += "</tr>";
        
        
    }
    document.getElementById("table1").innerHTML = table;
    

    
}
 
function Section2() //Section2
{
    var objRequest = new XMLHttpRequest;
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url += document.getElementById("exc").value;
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
        
    }
        objRequest.open("GET", url, true);
        objRequest.send();
    
 }
 
 function GenerateOutput (result) //Section 2 is displayed
{
    var count = 0;
    var displaytext = "";
    table = "";
    
    table += ("<center>" + "<table border = '3' style = 'color: green;'>");
    table += ('<th>' + 'Product Name' + '<th>' + 'Total'); 
   
    for (count = 0; count < result.length; count ++)
    {
        table += "<tr>";
            table += "<td>" + result[count].ProductName + "</td>";
            table += "<td>" + result[count].Total + "</td>";
        table += "</tr>";
        
        
    }
    document.getElementById("table").innerHTML = table;
    
    
    
    
 }
 
function Section3() //Section3
{
    var objRequest3 = new XMLHttpRequest;
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += document.getElementById("exc3").value;
    
    objRequest3.onreadystatechange = function()
    {
        if (objRequest3.readyState == 4 && objRequest3.status == 200)
        {
            var output = JSON.parse(objRequest3.responseText);
            GenerateOutput3(output);
        }
        
    }
        objRequest3.open("GET", url, true);
        objRequest3.send();
    
 }
 
 function GenerateOutput3 (result) //Section 3 is displayed
{
    var count = 0;
    var displaytext = "";
    table = "";
    
    table += ("<center>" + "<table border = '3' style = 'color: green;'>");
    table += ('<th>' + 'Order Date' +
              '<th>' + 'Order ID' +
              '<th>' + 'Ship Address' +
              '<th>' + 'Ship City' +
              '<th>' + 'Ship Name' +
              '<th>' + 'Ship Postcode' +
              '<th>' + 'Shipped Date' ); 
   
    for (count = 0; count < result.GetOrdersForCustomerResult.length; count ++)
    {
        table += "<tr>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].OrderDate + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShipCity + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td>";
            table += "<td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td>";
            
        table += "</tr>";
        
        
    }
    document.getElementById("table3").innerHTML = table;
    
    
    
    
    
    
    
 } 
 
 
function Hidden()
{
    
    if (document.getElementById("menu").value == "Section 1")
    {
        document.getElementById("sec1").style.display = "inline";
        document.getElementById("sec2").style.display = "none";
        document.getElementById("sec3").style.display = "none";
        
    }
    else if (document.getElementById("menu").value == "Section 2")
    {
        document.getElementById("sec1").style.display= "none";
        document.getElementById("sec2").style.display = "inline";
        document.getElementById("sec3").style.display = "none";
    }
    else if (document.getElementById("menu").value == "Section 3")
    {
        document.getElementById("sec1").style.display = "none";
        document.getElementById("sec2").style.display = "none";
        document.getElementById("sec3").style.display = "inline";
    }
    else
    {
        document.getElementById("sec1").style.visibility = "hidden";
        document.getElementById("sec2").style.visibility = "hidden";
        document.getElementById("sec3").style.visibility = "hidden";
    }    
    
}
 
 
 
 
 
 
 