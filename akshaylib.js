function isTouching(mr,fr){
    if(mr.x - fr.x < fr.width/2 + mr.width/2
        && fr.x - mr.x < fr.width/2 + mr.width/2
        && mr.y - fr.y < fr.height/2 + mr.height/2
            && fr.y - mr.y < fr.height/2 + mr.height/2){
        return true;
    }
    else 
    {
     return false;
    }
}

function bounceOff(ob1,ob2){
    if(ob1.x - ob2.x < ob2.width/2 + ob1.width/2
        && ob2.x - ob1.x < ob2.width/2 + ob1.width/2){
            ob1.velocityX=-(ob1.velocityX);
            ob2.velocityX=-(ob2.velocityX);
        }
        if(ob1.y - ob2.y < ob2.height/2 + ob1.height/2
            && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
                ob1.velocityY=(-1)*(ob1.velocityY);
                ob2.velocityY=(-1)*(ob2.velocityY);
            }
}