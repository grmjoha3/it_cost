$(window).load(function(){
});

$(document).ready(function(){
    // 단체
    var allLen = $("#allTbl tbody tr").length;
    var allSum = 0;
    var allOrigin = 200000;
    var allMod = 0;
    // 단체 합계
    for(var i=0; i<allLen; i++){
        var price = parseInt($("#allTbl tbody tr").eq(i).find(".price").text());
        allSum += price;
    }
    $("#allTbl .sum").text(allSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    // 단체 초기지원금
    $("#allTbl .origin").text(allOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    // 단체 잔액
    allMod = allOrigin - allSum;
    $("#allTbl .mod").text(allMod.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));


    // 개인
    var indiOrigin = 50000;
    var mem = ["KYT", "PAH", "CJH", "KYM"];
    // 개인 초기지원금
    $("#indiTbl .foot .origin").text(indiOrigin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    // 개인 합계, 잔액
    for(var i=0; i<mem.length; i++){
        var sum = 0;
        var mod = 0;
        $("#indiTbl tbody tr:not(.foot) .buy").each(function(){
            if($(this).parent().attr("user") == mem[i]){
                sum += parseInt($(this).text());
            }
        });
        // 합계
        $("#indiTbl tbody tr[user='"+mem[i]+"'].foot.top .sum").text(sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
        // 잔액
        mod = indiOrigin - sum;
        $("#indiTbl tbody tr[user='"+mem[i]+"'].foot.bttm .mod").text(mod.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
});