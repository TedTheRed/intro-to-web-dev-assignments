function validate()
{
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var phone = document.forms["contact"]["phone"].value;
    var addInfo = document.forms["contact"]["info"].value;
    var inquiry = getSelectedOption();
    var visited = getRadioValue("visited");
    var contactDays = getCheckedDays();
    alert("Thank you for your response\n\nValidated information:\n\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone
     + "\nAdditional Information:" + addInfo + "\nReason for inquiry: " + inquiry + "\nHave you been to the restaurant? " + visited
     + "\nBest days to contact: " + contactDays);
    return false;
}

function getRadioValue(radioName)
{
    var radio = document.forms["contact"].elements[radioName];
    for(var i = 0; i < radio.length; i++)
    {
        if(radio[i].checked)
        {
            return radio[i].value;
        }
    }

    return '';
}

function getCheckedDays()
{
    var days = document.forms["contact"]["contactDay"];
    var checkedDays = "";
    for(var i = 0; i < days.length; i++)
    {
        if(days[i].checked)
        {
            checkedDays += days[i].value + " ";
        }
    }
    return checkedDays;
}

function getSelectedOption()
{
    var select = document.getElementById("inquiry");
    var option = select.value;
    return option;
}