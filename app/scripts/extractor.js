/**
 * Created by pery on 05/10/2015.
 */
var lists ={
    places:{'auranus':true,'bar burger':true}
}

function extractor(token, varDesc){

}

function fromList(tokens,listName){
    var list = lists[listName];
    var finded = [];
    for (var i = 0, word; word = tokens[i]; i++) {
        if (word in list) {
            finded.push({
                i:i,
                word:word
            })
        }

    }
    return finded;
}