var firstscene=document.getElementById('firstscene')
var secondscene=document.getElementById('secondscene')
let currentScreen=0
var currentLineIndex1=0
var currentLineIndex2=0
var currentLineIndex3=0
var currentLineIndex4=0
var currentLineIndex5=0

var counter = 0

let lines1=["Where am I","I thought I died","Why am I here?","WHY CANT YOU JUST LET ME DIE?!??!?!?!??!?",""]

let lines2=["Horror-chan: hewwow","MC:OMFG WHAT ARE YOU GET AWAY FROM ME",
"Horror-chan: Sowy mister stranger, horror-chan didnt mean 2 scare u",
"MC: God. Why. Why. Why.",
"MC: Please have this be a bad dream.",
"MC: Isn’t this just a bad dream?",
"MC: Oh god, or whatever’s up there, why?",
"MC: Fuck even the freaks have gotten uwufied.",
"Horror-chan: I reawwy am vry sowy mister, horror-chan didn't kno how 2 not scare peopwe, horror-chan knows dat horror-chan is vry spooky, horror-chan didn't mean 2 scare u at aww :c",
"MC: Where am I…",
"Horror-chan: we're in da sewers! horror-chan found u in da river n horror-chan tried 2 save u by dragging u in here!",
"Horror-chan: is not dat bad in here! is pretti noice!","MC: Kill me.","Horror-chan: y wouwd horror-chan try 2 kiww mister sewer senpai?",
"Horror-chan: horror-chan wikes peopwe!","MC: ………………","MC: Fuck this Fuck me Fuck everything","MC: I jumped off the bridge I thought I would die why am I not dying?",
"MC: WHWHWYWHWYWHYWHWYHWYHWYHWYWHYHWYYHWYYWYHWYHYHWYHWYHHYWHYYHWHYWHYWYHYHWYHWYWHYYHWYHWYHYHWHYWHYYHWHYWHYWHYWHYWHYWHYWHYWHYWHYWYHWHYWHYYHWYHWHYWWHYWHYWHYWHYHWYHWYHYW",
"Horror-chan: i'm sowy mister did horror-chan do something wrong ૮(˶ㅠ︿ㅠ)ა",
"MC: Can I get outta here so I can kill myself properly?",
"Horror-chan: I'm sowy mister, right now there's nuu way out","MC: No way at all? Nothing? Nada?",
"Horror-chan: nuthin, mister","Horror-chan: u're stucc wit mi for now :3"
]

let lines3=["MC: Months pass as me and the monster spend time in the sewers. At first, it shocked me continuously, but as time passed, I must say, I’ve grown less and less afraid.",
    "MC: The thing keeps looking longingly at the walls, as if it wants to get out. This monstrosity cannot be let out.",
    "MC: Why I was spared from death, I do not know. The monster seems to grasp death, weirdly enough. It is unknown what it’s made of, or what it’s trying to do.",
    "MC: It seems to appreciate life. Somewhat. It keeps spouting anime quotes to me.",
    "MC: I’ll have to observe it more."
]

let lines4=[
    "MC: Why do you want to leave the sewer?",
    "Horror-chan: horror-chan thinks there's so much gud stuff out there! there's cowor! rainbows! sunshine! wat's not 2 wove σ(^_^ )?",
    "MC: I’ve been outside, it’s not that fun, or happy, or even good out there. Why would you want to go up?",
    "MC: The world isn’t all sunshine, all rainbows, or all happy? What’s the point?",
    "MC: There’s so much darkness and evil and general unhappiness. You have to deal with taxes, betrayal, and so so so much pain.",
    "MC: The people up there, they just care about how much money you make, how well you do, how you don’t make them lose face.",
    "MC: At some point, you just have to ask yourself. Is it worth it? The pain, the tiredness? The effort? All for some measly useless shit? The same monotomous life?",
    "MC: Life is so hard. The detours just bring you into endless rabbit holes of pain.",
    "Horror-chan: ………",
    "MC: I’m right, aren’t I?",
    "Horror-chan: horror-chan doesn’t quite know anything, but horror-chan read somewhere dat 'never give up, for dat is jus da pwace n time dat da tide wiww turn'",
    "MC: ……."

]

let lines5=[
    "MC: I don’t remember when I escaped that sewer.",
    "MC: I don’t remember what happened.",
    "MC: I don’t remember how I escaped.",
    "MC: The things that thing stuck with me tho.",
    "MC: I don’t think I’m going to kill myself.",
    "MC: If something that monstrous, yet innocent can dream of a better life? Why can’t I?"
]

document.addEventListener("keydown",(event)=>{
    if (event.key==="Enter") nextline();

})

function nextline(){
    counter++

     if (currentScreen === 0) {     
        if (currentLineIndex1<lines1.length){
            document.getElementById('firstscene-message').innerText=lines1[currentLineIndex1]
            currentLineIndex1++ 
        }else{
            document.getElementById("firstscene").style.display = "none";
            document.getElementById("secondscene").style.display = "block";
            currentScreen = 1;
        }

    } else if (currentScreen === 1) {
        if (currentLineIndex2<lines2.length){
            document.getElementById('secondscene-message').innerText=lines2[currentLineIndex2]
            currentLineIndex2++ 
        }else{
            document.getElementById("secondscene").style.display = "none";
            document.getElementById("thirdscene").style.display = "block";
            currentScreen = 2;
        }
    }

    else if (currentScreen === 2) {
        if (currentLineIndex3<lines3.length){
            document.getElementById('thirdscene-message').innerText=lines3[currentLineIndex3]
            currentLineIndex3++ 
        }else{
            document.getElementById("thirdscene").style.display = "none";
            document.getElementById("fourthscene").style.display = "block";
            currentScreen = 3;
        }
    }

    else if (currentScreen === 3) {
        if (currentLineIndex4<lines4.length){
            document.getElementById('fourthscene-message').innerText=lines4[currentLineIndex4]
            currentLineIndex4++ 
        }else{
            document.getElementById("fourthscene").style.display = "none";
            document.getElementById("fifthscene").style.display = "block";
            currentScreen = 4;
        }
    }

    else if (currentScreen === 4) {
        if (currentLineIndex5<lines5.length){
            document.getElementById('fifthscene-message').innerText=lines5[currentLineIndex5]
            currentLineIndex5++ 
        }else{
            document.getElementById("fifthscene").style.display = "none";
        }
    }
    change();
}


/** css changes :D */
var horrorchan=document.getElementById('horrorchan')
var sewer=document.getElementById('sewer')
var horrorchanblushing=document.getElementById('horrorchanblushing')

function change(){

    if (counter===6){
        horrorchan.classList.add("fadein")
        horrorchan.style.opacity="0.5"

    }

    if (counter===7){
        horrorchanblushing.classList.add("fadein")
        horrorchanblushing.style.opacity="0.5"

    }

    if(counter===34){
        sewer.classList.add("fadein")
        sewer.style.opacity="0.5"
        horrorchan.style.opacity='0'

    }

}
