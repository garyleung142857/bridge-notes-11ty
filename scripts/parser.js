var suits = ["S", "H", "D", "C", "N"]
var suitsyms = [
    '<span class="spsymbol"> &#9824; </span>',
    '<span class="hesymbol"> &#9829; </span>',
    '<span class="disymbol"> &#9830; </span>',
    '<span class="clsymbol"> &#9827; </span>',
    '<span class="ntsymbol"> N </span>'
]

var escstr = function(s, escchar){
    for (let i = 0; i < suits.length; i++) {
        var re = new RegExp(`${escchar}${suits[i]}`, 'gi')
        s = s.replace(re, suitsyms[i])
    }
    return s
}

var parse_hand = function(str){
    var arr = str.split(".")
    var s = []
    for (let i = 0; i < 4; i++) {
        s.push(`<tr><td>${suitsyms[i]} ${arr[i]}</td></tr>`)
    }
    return '<table class="hand">' + s.join("") + "</table>"
}

var parse_opts = function(str){
    var s = []
    var arr = str.split('\n')
    arr.forEach(row => {
        if (typeof row !== "undefined" && row.length > 0){
            var r = row.split(":", 2)
            if (r.length > 1){
                s.push(
                    '<tr><td>' + escstr(r[0], "!") + '</td><td>' + escstr(r[1], "!") + '</td></tr>'
                )
            } else {
                s.push(
                    '<tr><td colspan=2>' + escstr(r[0], "!") + '</td></tr>'
                )
            }
        }
    });
    return '<table class="opts">' + s.join("") + "</table>"
}

var bid4 = function(str){
    var s = []
    var arr = ["LHO", "CHO", "RHO", "YOU"].concat(str.split(','))
    while (arr.length % 4 > 0) {arr.push('')}
    for (let i = 0; i < arr.length; i += 4) {
        s.push(`<tr><td>${escstr(arr[i], "!")}</td><td>${escstr(arr[i+1], "!")}</td><td>${escstr(arr[i+2], "!")}</td><td>${escstr(arr[i+3], "!")}</td></tr>`)
    }
    return '<table class="bidSeq">' + s.join("") + '</table>'
}

var bid2 = function(str){
    var s = []
    var arr = ["CHO", "YOU"].concat(str.split(','))
    while (arr.length % 2 > 0) {arr.push('')}
    for (let i = 0; i < arr.length; i += 2) {
        s.push(`<tr><td>${escstr(arr[i], "!")}</td><td>${escstr(arr[i+1], "!")}</td></tr>`)
    }
    return '<table class="bidSeq">' + s.join("") + '</table>'
}

module.exports = {escstr, parse_hand, parse_opts, bid4, bid2}