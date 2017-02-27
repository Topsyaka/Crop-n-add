window.ModuleTrimText = (function(){
    function ellipseText(obj){

        var selectorString = obj.blockSelector;
        var wordLength = obj.wordLength;
        //Cteating additional element
        if (obj.addedTag){
            var elem = document.createElement(obj.addedTag);
            var text = document.createTextNode(obj.tagText || "Read more...")
            elem.appendChild(text)
        }else{
            var elem = document.createElement("span");
            var text = document.createTextNode('...');
            elem.appendChild(text)
        }

        //Get all elements that needed to spilt

        var elemList = document.querySelectorAll(selectorString);

        //Main slpit
        elemList.forEach(function (item) {
            var itemLength = item.innerHTML.length;
            if (itemLength > wordLength){
                item.innerHTML = item.innerHTML.substring(0, wordLength);
                var clone = elem.cloneNode(true);
                item.appendChild(clone);
            }
        });

    }
    return {
        ellipsisText: ellipseText
    }
})();