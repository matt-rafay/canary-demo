var ref;

function checkRefresh() {
    var regex = new RegExp("refresh=1");
    if ( regex.test(document.cookie) ) {
        document.getElementById("check").checked = true;
        ref = setTimeout( function() { location.reload(); }, 1000 );
    }
    else {
        /* Do Nothing */
    }
}

function changeCookie() {
    if ( document.getElementById("check").checked ) {
        document.cookie = "refresh=1";
        ref = setTimeout( function() { location.reload(); }, 1000 );
    }
    else {
        document.cookie = "refresh=0";
        clearTimeout(ref);
    }
}