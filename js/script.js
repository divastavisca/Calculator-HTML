var num1,num2,operation;

function numberKeyPress(pressedKey)
{
    if(operation===undefined)
    {
        construct("first",pressedKey);
        ScreenPrint(num1);
    }
    else 
    {
        construct("second",pressedKey);
        ScreenPrint(num1+operation+num2);
    }
}

function operationKeyPressed(op)
{
    if(op==='=')
        {
            var result;
            if(num1>0&&operation!=undefined)
                result = performOperation();
            num2=operation=undefined;
            if(result!=="Not Allowed")
            {
                num1=undefined;
            }
            else num1 = result;
            ScreenPrint(result);
        }
    else
        {
            if(num2===undefined||num2===0)
                operation = op;
        }
}

function performOperation()
{
    if(operation==='+')
        return num1+num2;
    else if(operation==='-')
        return num1-num2;
    else if(operation==='*')
        return num1*num2;
    else if(operation==='/')
    {
        if(num2===0)
            return "Not Allowed";
        return num1/num2;
    }
}
                        
function construct(number,newNumber)
{
    if(number=="first")
        {
            if(num1===undefined)
                {
                    num1=0;
                }
            num1=num1*10+newNumber;
        }
    else
        {
            if(num1===undefined)
                {
                    num1=0;
                }
            num2=num2*10+newNumber;
        }
}

function ScreenPrint(msg)
{
    document.getElementById('display').innerHTML = msg;
}