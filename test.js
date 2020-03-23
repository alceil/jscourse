for(i=1;i<10;i++)
{
    if(i==3||i==5)
    {
        continue;
    }
    
    console.log(i);
    if(i==7)
    {
        break;
    }
}
document.write('broken out of the looped');