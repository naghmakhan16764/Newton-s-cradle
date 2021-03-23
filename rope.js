 class rope{
     constructor(body1,body2,offsetX,offsetY){
         this.offsetX = offsetX;
         this.offsetY = offsetY;
         var op = {
             bodyA : body1,
             bodyB : body2,
             ponitB: {x:this.offsetX , y:this.offsetY}
             }

            this.rope = Matter.Constraint.create(op);
            World.add(world,this.rope);
         

             


            }

            display(){

                var point1 = this.rope.bodyA.position;
                var point2 = this.rope.bodyB.position;

                strokeWeight(2);

                var Anchor1X = point1.X;
                var Anchor1Y = point1,Y;

                var Anchor2X = point2.X;
                var Anchor2y = point2.y;

                line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
                

            }
        }
    


         