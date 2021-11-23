// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
var upper_name = name.toUpperCase();
console.log(upper_name);


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function sentenceWordFirstCharBigger(){
    let result_sen = [];
    let splited_sen = sentence.split([' ']);
    for (let i = 0; i < splited_sen.length; i++){
        result_sen.push(splited_sen[i].charAt(0).toUpperCase() + splited_sen[i].slice(1));
    }
    return result_sen.join(' ');
}
console.log(sentenceWordFirstCharBigger(sentence));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.replace(/\D/g,''));
