javascript:

    if (authcde == "fabgamerzfam"){
        authd();
    }
    if (authcde == "boi"){
        authd();
    }
    function authd() {
    var buttona = document.createElement("button"); 
    var buttonup = document.createElement("button"); 
    var buttons = document.createElement("button"); 
    var buttonl = document.createElement("button"); 
    var buttone = document.createElement("button");
    var buttonr = document.createElement("button"); 
    
    buttona.innerHTML = "Close IFRAME"; 
    buttonup.innerHTML = "Update Page"; 
    buttons.innerHTML = "Search"; 
    buttonl.innerHTML = "Direct Links"; 
    buttonr.innerHTML = "Return to Menu"; 
    buttone.innerHTML = "Unblock";
    
    ifrm = document.createElement('IFRAME'); 
    ifrm.style.width = 100+'%'; 
    ifrm.style.height = 700+'px'; 
    ifrm.src = 'https://sites.google.com/site/fungamesalltimes'; 
    
    function menu() { 
        document.body.removeChild(buttona); 
        document.body.removeChild(buttonup); 
        document.body.removeChild(buttons); 
        document.body.removeChild(buttonl); 
        document.body.removeChild(buttonr);
        document.body.removeChild(buttone);
        document.body.removeChild(ifrm); 
        document.body.appendChild(logo); 
        document.body.appendChild(bing); 
        document.body.appendChild(savemedia); 
        document.body.appendChild(rgames); 
        document.body.appendChild(info); 
        
    } 
    function start() { 
        document.body.appendChild(buttona); 
        document.body.appendChild(buttonup); 
        document.body.appendChild(buttons); 
        document.body.appendChild(buttonl); 
        document.body.appendChild(buttone);
        document.body.appendChild(buttonr); 
        document.body.appendChild(ifrm); 
        document.body.removeChild(logo); 
        document.body.removeChild(bing); 
        document.body.removeChild(savemedia); 
        document.body.removeChild(rgames); 
        document.body.removeChild(info); 
        
    } 
    var logo=document.createElement('img'); 
    logo.src="https://sites.google.com/site/fgatscode1/logo.png"; 
    document.body.appendChild(logo); 
    logo.addEventListener ("click", function() { 
        ifrm.src = 'https://sites.google.com/site/fungamesalltimes'; 
        start(); 
        
    }); 
    
    var bing=document.createElement('img'); 
    bing.src="https://sites.google.com/site/fgatscode1/bing.png"; 
    document.body.appendChild(bing); 
    bing.addEventListener ("click", function() { 
        ifrm.src = 'https://www.bing.com'; 
        start(); 
        
    }); 
    
    var savemedia=document.createElement('img'); 
    savemedia.src="https://sites.google.com/site/fgatscode1/savemedia.png"; 
    document.body.appendChild(savemedia); 
    savemedia.addEventListener ("click", function() { 
        ifrm.src = 'https://savemedia.website'; 
        start(); 
        
    }); 
    
    var rgames=document.createElement('img'); 
    rgames.src="https://sites.google.com/site/fgatscode1/retrogames.jpeg"; 
    document.body.appendChild(rgames); 
    rgames.addEventListener ("click", function() { 
        ifrm.src = 'https://retrogames.cz'; 
        start();
    });
    
    var info=document.createElement('img'); 
    info.src="https://sites.google.com/site/fgatscode1/info.png"; 
    info.style.height=50+'px'; 
    info.style.width=50+'px'; 
    document.body.appendChild(info); 
    info.addEventListener ("click", function(){ 
        ifrm.src = 'https://sites.google.com/site/fgatscode1/info-war'; 
        start(); 
        
    }); 
    
    buttonr.addEventListener ("click", function() { 
        menu(); 
        
    }); 
    
    buttona.addEventListener ("click", function() { 
        document.body.removeChild(ifrm); 
        document.body.removeChild(buttona); 
        document.body.removeChild(buttonup); 
        document.body.removeChild(buttons); 
        document.body.removeChild(buttonl); 
        document.body.removeChild(buttonr); 
        document.body.removeChild(buttone);
        
    }); 
    buttonup.addEventListener ("click", function() { 
        document.body.removeChild(ifrm); 
        var inputup = prompt('Enter Website Address', 'site.extension'); 
        ifrm.src = "https://" + inputup; 
        document.body.appendChild(ifrm); 
        
    }); 
    buttons.addEventListener ("click", function() { 
        document.body.removeChild(ifrm); 
        var inputs = prompt('Search', 'Search Query'); 
        ifrm.src = "https://www.bing.com/search?q=" + inputs; 
        document.body.appendChild(ifrm); 
        
    }); 
    buttonl.addEventListener ("click", function() { 
        document.body.removeChild(ifrm); 
        var inputup = prompt('Enter Direct Links', 'http(s)://site.extension'); 
        ifrm.src = inputup; 
        document.body.appendChild(ifrm); 
    });
    buttone.addEventListener ("click", function() { 
        document.body.removeChild(ifrm); 
        ifrm.src = "https://www.preproxy.com/proxy.pl?url=http%3A%2F%2Fgoogle.com&site=hideipfree.com";
        document.body.appendChild(ifrm); 
    });
    };
        if (authcde == "yeet"){
        authd();
    }