function createList(iter, text="Text")
{
    var list = "<ul>\n";
    for (var i = 1; i <= iter; i++)
    {
        list += `  <li>${text} ${i}</li>\n`; 
    }
    list += "<ul>\n";
    console.log(list);
}

console.log('\n> Resultado de createList(3): ');
createList(3);

console.log('\n> Resultado de createList(5, "Item"): ');
createList(5, "Item");