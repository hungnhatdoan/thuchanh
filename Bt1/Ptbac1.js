function giai_pt_bac_nhat(a, b)
{
    if (a == 0 && b == 0){
        console.log('Phương trình vô số nghiệm');
    }
    else if (a != 0 && b == 0){
        console.log('Phương trình có nghiệm x = 0');
    }
    else if (a == 0 && b != 0){
        console.log("Phương trình vô nghiệm");
    }
    else {
        console.log('Phương trình có nghiệm x = ' + (-b/a));
    }
}
giai_pt_bac_nhat(5,8)