
const col="black";

function changeColor()
{
    let box_col=document.getElementById("box");
    let button_col=document.getElementById("click_button");
    let text=document.getElementById("text");

    if(box_col.style.backgroundColor===col)
    {
        box_col.style.backgroundColor="red";
        box_col.style.color="black";
        text.textContent="I also like MS DHONI (Thala for a reason)";
        button_col.style.color="black";
        button_col.textContent="FINAL";
    }
    else
    {
        box_col.style.backgroundColor="black";
        box_col.style.color="red";
        text.textContent="I am a big fan of VIRAT KOHLI (18)";
        button_col.style.color="red";
        button_col.textContent="INITIAL";
    }
}