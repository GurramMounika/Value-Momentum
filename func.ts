function bank(cid:number,cname:string,cacno:number){                      //2
    this.cid=cid
    this.cname=cname
    this.cacno=cacno

}
var c1=new bank(1,'a',111)
var c2=new bank(2,'b',222)
console.log(c1.cid,c1.cname,c1.cacno)
console.log(c2.cid,c2.cname,c2.cacno)
