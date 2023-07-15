var a=["“Be yourself; everyone else is already taken”"
        ,"“So many books, so little time”"
        ,"“A room without books is like a body without a soul”"
        , "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
       ,"“You only live once, but if you do it right, once is enough.”"
       ,"“Be the change that you wish to see in the world”"
       ,"“In three words I can sum up everything I've learned about life: it goes on”"
       ,"“If you tell the truth, you don't have to remember anything”"
       ,"“A friend is someone who knows all about you and still loves you”"
       ,"الوهم نصف الدواء والاطمئنان نصف الدواء والصبر بداية الشفاء"
];
var auther =["--Oscar Wilde"
            ,"--Frank Zappa"
            ,"--Marcus Tullius Cicero"
            ,"--Dr. Seuss"
            ,"--Mae West"
            ,"--Mahatma Gandhi"
            ,"--Robert Frost"
            ,"--Mark Twain","--Elbert Hubbard"
            ,"--اين سينا"
        ];
function quote(){
    var x=Math.floor(Math.random()*10);
     document.getElementById("demo").innerHTML=a[x];
     document.getElementById("auth").innerHTML=auther[x]
    
}
