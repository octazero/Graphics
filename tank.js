var NumVertices  = 5000000;

var change = false ,rotatem =false, rotates =false,press =false;
var stop=0;

var body = [], fo2elbody = [], saroo5 = [], wheel0 = [], wheel1 = [], wheel2 = [], wheel3 = [], wheel4 = [], 
wheel5 = [], wheel6 = [], wheel7 = [], wheel8 = [], wheel9 = [], ta7teldababaymeen1 = [], ta7teldababashemal1 = [],
ta7teldababaymeen2 = [], ta7teldababashemal2 = [], ta7teldababaymeen3 = [], ta7teldababashemal3 = [], wheeltani0 = [], wheeltani1 = [],
wheeltani2 = [], wheeltani3 = [], wheeltani4 = [], wheeltani5 = [], wheeltani6 = [], wheeltani7 = [], wheeltani8 = [], wheeltani9 = [],
fo2fo2elbody = [];

var leftwheel=[] ,rightwheel=[], leftwheel2=[] ,rightwheel2=[], wheel1car=[] , wheel2car=[], wheel3car=[] ,wheel4car=[], 
leftlight=[] , rightlight=[] ,bodycar=[] ,frontglass=[] ,backglass=[], leftseat=[] , rightseat=[];

var bodyHeli = [] , head = [] , tail =[],elAmamya = [] , El5alfya_ymeen = [] ,z3rora=[] ,El5alfya_shmal=[],
elAmamya_3gla = [] , El5alfya_ymeen_3gla = [] ,El5alfya_shmal_3gla=[],ktafa1=[],ktafa2=[],z3rora_5alfya=[],
ktafa1_5alfya=[],ktafa2_5alfya=[],Ezaz_amamy=[];

var bodyCubee = [] , headCubee = [] , rightleg =[],lefthand = [] , righthand = [] ,leftleg=[] ;

var RocketBase=[], RocketBody=[], RocketIntro=[], RocketSubIntro=[], RocketSub2=[];
//Core Functions
function translate(specific_points , x,y,z)
{
    for (var i = 0; i < specific_points.length; i++) 
    {
        specific_points[i][0] += x;
        specific_points[i][1] += y;
        specific_points[i][2] += z;
    }
    return specific_points;
}
function scale(specific_points , x , y ,z)
{   
    for (var i = 0; i < specific_points.length; i++) 
    {
        specific_points[i][0] *= x;
        specific_points[i][1] *= y;
        specific_points[i][2] *= z;
    }
    return specific_points;

}

function rotatec(specific_points ,index , theta, center)
{
    var x = theta *(Math.PI/180);

    if(center == undefined)
    {    
        centerx =  (specific_points[1][(index+1)%3]+specific_points[7][(index+1)%3])/2;
        centery =   (specific_points[1][(index+2)%3]+specific_points[7][(index+2)%3])/2;
    }
    else
    {
        centerx =  (center[1][(index+1)%3]+center[7][(index+1)%3])/2;
        centery =   (center[1][(index+2)%3]+center[7][(index+2)%3])/2;
    }

    if(spinAnti == true && rotates == true)
        x *= -1;000000

    for (var i = 0; i < specific_points.length; i++) 
    {
        var point2x = specific_points[i][(index+1)%3];
        var point2y = specific_points[i][(index+2)%3];
        var newx = (point2x)*Math.cos(x) - (point2y)*Math.sin(x) + (centerx -(centerx)*Math.cos(x) + (centery)*Math.sin(x)) ;
        var newy = (point2x)*Math.sin(x) + (point2y)*Math.cos(x) + (centery -(centery)*Math.cos(x) - (centerx)*Math.sin(x));
        specific_points[i][(index+1)%3]=newx;
        specific_points[i][(index+2)%3]=newy;
    }
    return specific_points;
}
//Drawing objects
function drawCar(vec3_of_theta, vec3_of_tra)
{
    car = true;
    theta = [vec3_of_theta[0],vec3_of_theta[1],vec3_of_theta[2]];
    tra = [vec3_of_tra[0],vec3_of_tra[1],vec3_of_tra[2]];
    for (var i = vertices.length - 1; i >= 0; i--) 
    {
        bodycar.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        leftwheel.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        rightwheel.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
        leftwheel2.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        rightwheel2.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
        wheel1car.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel2car.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
        wheel3car.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel4car.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        leftlight.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        rightlight.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));         
        frontglass.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
        backglass.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
        leftseat.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        rightseat.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
    }
    frontglass = translate(frontglass , -0.35 ,0.0, -5.0);
    frontglass = scale(frontglass, 0.4 , 0.5 , 0.05);
    rotatec(frontglass ,1 , 65);
    colorCube(frontglass ,vertexColors[2],123,0,312,0);  

    bodycar = translate(bodycar , 0.0, 0.0, 0.0);
    bodycar = scale(bodycar, 2, 0.6 , 0.37);
    colorCube(bodycar ,vertexColors[0],123,0,312,0);

    leftwheel = translate(leftwheel , -1.2,-2.8, 0.7);
    leftwheel = scale(leftwheel, 0.3 , 0.1 , 0.25);
    colorCube(leftwheel ,vertexColors[2],123,0,312,0);

    rightwheel = translate(rightwheel , 1.2,-2.8, 0.7);
    rightwheel = scale(rightwheel, 0.3 , 0.1 , 0.25);
    colorCube(rightwheel ,vertexColors[2],123,0,312,0);

    leftwheel2 = translate(leftwheel2 ,-1.2,2.8, 0.7);
    leftwheel2 = scale(leftwheel2, 0.3 , 0.1 , 0.25);
    colorCube(leftwheel2 ,vertexColors[2],123,0,312,0);

    rightwheel2 = translate(rightwheel2 ,1.2,2.8, 0.7);
    rightwheel2 = scale(rightwheel2, 0.3 , 0.1 , 0.25);
    colorCube(rightwheel2 ,vertexColors[2],123,0,312,0);

    wheel1car = translate(wheel1car , -1.2,-2.8, 0.7);
    wheel1car = scale(wheel1car, 0.3 , 0.1 , 0.25);
    wheel1car = rotatec(wheel1car,1,45);
    colorCube(wheel1car ,vertexColors[2],123,0,312,0);

    wheel2car = translate(wheel2car , 1.2,-2.8, 0.7);
    wheel2car = scale(wheel2car, 0.3 , 0.1 , 0.25);
    wheel2car = rotatec(wheel2car,1,45);
    colorCube(wheel2car ,vertexColors[2],123,0,312,0);

    wheel3car = translate(wheel3car ,-1.2,2.8, 0.7);
    wheel3car = scale(wheel3car, 0.3 , 0.1 , 0.25);
    wheel3car = rotatec(wheel3car,1,45);
    colorCube(wheel3car ,vertexColors[2],123,0,312,0);

    wheel4car = translate(wheel4car ,1.2,2.8, 0.7);
    wheel4car = scale(wheel4car, 0.3 , 0.1 , 0.25);
    wheel4car = rotatec(wheel4car,1,45);
    colorCube(wheel4car ,vertexColors[2],123,0,312,0);

   leftlight=translate(leftlight,-4.7,1.8,0.3);
   leftlight=scale(leftlight,0.2,0.1,0.05);
   colorCube(leftlight ,vertexColors[2],123,0,312,0);
   
   rightlight=translate(rightlight,-4.7,-1.7,0.3); 
   rightlight=scale(rightlight,0.2,0.1,0.05);
   colorCube(rightlight,vertexColors[2],123,0,312,0);

   leftseat=translate(leftseat,6.5,-0.9,-0.17);
   leftseat=scale(leftseat,0.05,0.12,0.4);
   colorCube(leftseat ,vertexColors[2],123,0,312,0);
   
   rightseat=translate(rightseat,6.5,0.9,-0.17);
   rightseat=scale(rightseat,0.05,0.12,0.4);
   colorCube(rightseat,vertexColors[2],123,0,312,0);

   backglass=translate(backglass,37.0,0.0,-0.17);
   backglass=scale(backglass,0.02,0.55,0.40);
   colorCube(backglass,vertexColors[2],123,0,312,0);
}
var count = 0;
function drawDababa(vec3_of_theta,vec3_of_tra)
{
    tank = true;
    theta2 = [vec3_of_theta[0],vec3_of_theta[1],vec3_of_theta[2]];
    tra2 = [vec3_of_tra[0],vec3_of_tra[1],vec3_of_tra[2]];
    for (var i = vertices.length - 1; i >= 0; i--) 
    {
        count++;
        body.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        fo2elbody.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        fo2fo2elbody.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        saroo5.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));

        wheel0.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel1.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel2.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel3.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel4.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel5.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel6.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel7.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel8.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheel9.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));

        wheeltani0.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheeltani1.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheeltani2.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheeltani3.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheeltani4.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheeltani5.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheeltani6.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheeltani7.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheeltani8.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        wheeltani9.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));

        ta7teldababaymeen1.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        ta7teldababashemal1.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        ta7teldababaymeen2.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        ta7teldababashemal2.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        ta7teldababaymeen3.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        ta7teldababashemal3.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
    }
    console.log(count);
    body = translate(body , 0.0, -0.025, 0.0);
    body = scale(body, 1.6 , 0.6 , 1.1);
    colorCube(body ,vertexColors[0],123,0,312,0);

    fo2elbody = translate(fo2elbody , 0.0, 1.25, 0.0);
    fo2elbody = scale(fo2elbody, 0.8 , 0.3 , 0.6);
    colorCube(fo2elbody ,vertexColors[0],123,0,312,0);

    fo2fo2elbody = translate(fo2fo2elbody , 0.0, 1.6, 0.0);
    fo2fo2elbody = scale(fo2fo2elbody, 0.4 , 0.37 , 0.4);
    colorCube(fo2fo2elbody ,vertexColors[4],123,0,312,0);

    saroo5 = translate(saroo5 , -0.7, 3.9, 0.0);
    saroo5 = scale(saroo5, 0.8 , 0.1 , 0.1);
    colorCube(saroo5 ,vertexColors[0],123,0,312,0);

    wheel0 = translate(wheel0 ,-3.0, -1.4, -4.5);
    wheel0 = scale(wheel0, 0.2, 0.2, 0.1);
    colorCube(wheel0 ,vertexColors[4],123,0,312,0);

    wheeltani0 = translate(wheeltani0 ,-3.0, -1.4, -4.5);
    wheeltani0 = scale(wheeltani0, 0.2, 0.2, 0.1);
    wheeltani0 = rotatec(wheeltani0, 2, 45);
    colorCube(wheeltani0 ,vertexColors[4],123,0,312,0);

    wheeltani1 = translate(wheeltani1 ,-3.0, -1.4, 4.5);
    wheeltani1 = scale(wheeltani1, 0.2, 0.2, 0.1);
    wheeltani1 = rotatec(wheeltani1, 2, 45);
    colorCube(wheeltani1 ,vertexColors[4],123,0,312,0);

    wheel1 = translate(wheel1 ,-3.0, -1.4, 4.5);
    wheel1 = scale(wheel1, 0.2, 0.2, 0.1);
    colorCube(wheel1 ,vertexColors[4],123,0,312,0);

    wheeltani2 = translate(wheeltani2 ,-1.5, -1.4, -4.5);
    wheeltani2 = scale(wheeltani2, 0.2, 0.2, 0.1);
    wheeltani2 = rotatec(wheeltani2, 2, 45);
    colorCube(wheeltani2 ,vertexColors[4],123,0,312,0);

    wheeltani3 = translate(wheeltani3 ,-1.5, -1.4, 4.5);
    wheeltani3 = scale(wheeltani3, 0.2, 0.2, 0.1);
    wheeltani3 = rotatec(wheeltani3, 2, 45);
    colorCube(wheeltani3 ,vertexColors[4],123,0,312,0);

    wheel2 = translate(wheel2 ,-1.5, -1.4, -4.5);
    wheel2 = scale(wheel2, 0.2, 0.2, 0.1);
    colorCube(wheel2 ,vertexColors[4],123,0,312,0);

    wheeltani4 = translate(wheeltani4 , 0.0, -1.4, -4.5);
    wheeltani4 = scale(wheeltani4, 0.2, 0.2, 0.1);
    wheeltani4 = rotatec(wheeltani4, 2, 45);
    colorCube(wheeltani4 ,vertexColors[4],123,0,312,0);

    wheeltani5 = translate(wheeltani5 , 0.0, -1.4, 4.5);
    wheeltani5 = scale(wheeltani5, 0.2, 0.2, 0.1);
    wheeltani5 = rotatec(wheeltani5, 2, 45);
    colorCube(wheeltani5 ,vertexColors[4],123,0,312,0);

    wheel3 = translate(wheel3 ,-1.5, -1.4, 4.5);
    wheel3 = scale(wheel3, 0.2, 0.2, 0.1);
    colorCube(wheel3 ,vertexColors[4],123,0,312,0);

    wheeltani6 = translate(wheeltani6 , 1.5, -1.4, -4.5);
    wheeltani6 = scale(wheeltani6, 0.2, 0.2, 0.1);
    wheeltani6 = rotatec(wheeltani6, 2, 45);
    colorCube(wheeltani6 ,vertexColors[4],123,0,312,0);

    wheeltani7 = translate(wheeltani7 , 1.5, -1.4, 4.5);
    wheeltani7 = scale(wheeltani7, 0.2, 0.2, 0.1);
    wheeltani7 = rotatec(wheeltani7, 2, 45);
    colorCube(wheeltani7 ,vertexColors[4],123,0,312,0);

    wheel4 = translate(wheel4 , 0.0, -1.4, -4.5);
    wheel4 = scale(wheel4, 0.2, 0.2, 0.1);
    colorCube(wheel4 ,vertexColors[4]);

    wheeltani8 = translate(wheeltani8 , 3.0, -1.4, -4.5);
    wheeltani8 = scale(wheeltani8, 0.2, 0.2, 0.1);
    wheeltani8 = rotatec(wheeltani8, 2, 45);
    colorCube(wheeltani8 ,vertexColors[4],123,0,312,0);

    wheeltani9 = translate(wheeltani9 , 3.0, -1.4, 4.5);
    wheeltani9 = scale(wheeltani9, 0.2, 0.2, 0.1);
    wheeltani9 = rotatec(wheeltani9, 2, 45);
    colorCube(wheeltani9 ,vertexColors[4],123,0,312,0);

    wheel5 = translate(wheel5 , 0.0, -1.4, 4.5);
    wheel5 = scale(wheel5, 0.2, 0.2, 0.1);
    colorCube(wheel5 ,vertexColors[4],123,0,312,0);

    wheel6 = translate(wheel6 , 1.5, -1.4, -4.5);
    wheel6 = scale(wheel6, 0.2, 0.2, 0.1);
    colorCube(wheel6 ,vertexColors[4],123,0,312,0);

    wheel7 = translate(wheel7 , 1.5, -1.4, 4.5);
    wheel7 = scale(wheel7, 0.2, 0.2, 0.1);
    colorCube(wheel7 ,vertexColors[4],123,0,312,0);

    wheel8 = translate(wheel8 , 3.0, -1.4, -4.5);
    wheel8 = scale(wheel8, 0.2, 0.2, 0.1);
    colorCube(wheel8 ,vertexColors[4],123,0,312,0);

    wheel9 = translate(wheel9 , 3.0, -1.4, 4.5);
    wheel9 = scale(wheel9, 0.2, 0.2, 0.1);
    colorCube(wheel9 ,vertexColors[4],123,0,312,0);

    ta7teldababaymeen1 = translate(ta7teldababaymeen1 , 0.0, -13.6, -3.10);
    ta7teldababaymeen1 = scale(ta7teldababaymeen1, 1.485 , 0.03 , 0.15 );
    colorCube(ta7teldababaymeen1 ,vertexColors[0],123,0,312,0);

    ta7teldababashemal1 = translate(ta7teldababashemal1 , 0.0, -13.6, 3.10);
    ta7teldababashemal1 = scale(ta7teldababashemal1, 1.485 , 0.03 , 0.15 );
    colorCube(ta7teldababashemal1 ,vertexColors[0],123,0,312,0);

    ta7teldababaymeen2 = translate(ta7teldababaymeen2 , 7.6, -11.9, -3.10);
    ta7teldababaymeen2 = scale(ta7teldababaymeen2, 0.1 , 0.03 , 0.15 );
    ta7teldababaymeen2 = rotatec(ta7teldababaymeen2,2,60);
    colorCube(ta7teldababaymeen2 ,vertexColors[0],123,0,312,0);

    ta7teldababayshemal2 = translate(ta7teldababashemal2 , -7.6, -11.9, -3.10);
    ta7teldababayshemal2 = scale(ta7teldababayshemal2, 0.1, 0.03 , 0.15 );
    ta7teldababayshemal2 = rotatec(ta7teldababayshemal2,2,-60);
    colorCube(ta7teldababayshemal2 ,vertexColors[0],123,0,312,0);

    ta7teldababaymeen3 = translate(ta7teldababaymeen3 , 7.6, -11.9, 3.10);
    ta7teldababaymeen3 = scale(ta7teldababaymeen3, 0.1 , 0.03 , 0.15 );
    ta7teldababaymeen3 = rotatec(ta7teldababaymeen3,2,60);
    colorCube(ta7teldababaymeen3 ,vertexColors[0],123,0,312,0);

    ta7teldababashemal3 = translate(ta7teldababashemal3 , -7.6, -11.9, 3.10);
    ta7teldababashemal3 = scale(ta7teldababashemal3, 0.1 , 0.03 , 0.15 );
    ta7teldababashemal3 = rotatec(ta7teldababashemal3,2,-60);
    colorCube(ta7teldababashemal3 ,vertexColors[0],123,0,312,0);
}
function drawHelicopter(vec3_of_theta,vec3_of_tra)
{
    heli = true;
    console.log("good");
    theta3 = [vec3_of_theta[0],vec3_of_theta[1],vec3_of_theta[2]];
    tra3 = [vec3_of_tra[0],vec3_of_tra[1],vec3_of_tra[2]];
    for (var i = vertices.length - 1; i >= 0; i--) 
    {
          bodyHeli.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
          head.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
          tail.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
          z3rora.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
          elAmamya.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
          El5alfya_ymeen.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
          El5alfya_shmal.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
          elAmamya_3gla.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
          El5alfya_ymeen_3gla.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
          El5alfya_shmal_3gla.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
          ktafa1.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
          ktafa2.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
          z3rora_5alfya.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
          ktafa1_5alfya.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
          ktafa2_5alfya.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
          Ezaz_amamy.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
    }

    bodyHeli = translate(bodyHeli , -0.5,0.0, 0.0);
    bodyHeli = scale(bodyHeli, 0.8, 0.15 , 0.15);
    colorCube(bodyHeli ,vertexColors[5],123,0,312,0);

    head =translate(head , 0.0,0.0, 0.0);
    head = scale(head, 0.5 , 0.5 ,0.5);
    colorCube(head , vertexColors[1],123,0,312,0);

    tail =translate(tail , -3,0.0, -0.1);
    tail = scale(tail, 0.25, 0.25 ,0.25);
    colorCube(tail ,vertexColors[1],123,0,312,0);

    z3rora =translate(z3rora , 0.0,2, 0);
    z3rora = scale(z3rora, 0.135, 0.135 ,0.135);
    colorCube(z3rora ,vertexColors[5],123,0,312,0);

    elAmamya = scale(elAmamya, 0.05 , 0.2 , 0.05);
    elAmamya =translate(elAmamya , 0.15,-0.25, 0.0);    
    colorCube(elAmamya ,vertexColors[5],123,0,312,0);

    El5alfya_ymeen = scale(El5alfya_ymeen,0.05 , 0.2 , 0.05);
    El5alfya_ymeen =translate(El5alfya_ymeen ,  -0.15,-0.25, 0.15);
    colorCube(El5alfya_ymeen ,vertexColors[5],123,0,312,0);

    El5alfya_shmal = scale(El5alfya_shmal,0.05 , 0.2 , 0.05);
    El5alfya_shmal =translate(El5alfya_shmal ,  -0.15,-0.25, -0.15);
    colorCube(El5alfya_shmal ,vertexColors[5],123,0,312,0);

    elAmamya_3gla = scale(elAmamya_3gla, 0.1 , 0.1 , 0.0);
    elAmamya_3gla =translate(elAmamya_3gla , 0.15,-0.35, 0.0);
    colorCube(elAmamya_3gla ,vertexColors[0],123,0,312,0);

    El5alfya_ymeen_3gla = scale(El5alfya_ymeen_3gla,0.1 , 0.1 , 0.0);
    El5alfya_ymeen_3gla =translate(El5alfya_ymeen_3gla ,  -0.15,-0.35, 0.15);
    colorCube(El5alfya_ymeen_3gla ,vertexColors[0],123,0,312,0);

    El5alfya_shmal_3gla = scale(El5alfya_shmal_3gla,0.1 , 0.1 , 0.0);
    El5alfya_shmal_3gla =translate(El5alfya_shmal_3gla ,  -0.15,-0.35, -0.15);
    colorCube(El5alfya_shmal_3gla ,vertexColors[0],123,0,312,0);

    ktafa1 = scale(ktafa1,1, 0.05 , 0.1);
    ktafa1 =translate(ktafa1 , 0.0,0.3, 0.0);
    colorCube(ktafa1 ,vertexColors[0],123,0,312,0);

    ktafa2 = scale(ktafa2,0.1, 0.05 , 1);
    ktafa2 =translate(ktafa2 ,0.0, 0.3 , 0);
    colorCube(ktafa2 ,vertexColors[0],123,0,312,0);

    z3rora_5alfya  =translate(z3rora_5alfya , -6.2,1.05, -0.1);
    z3rora_5alfya = scale(z3rora_5alfya, 0.125, 0.125 ,0.125);
    colorCube(z3rora_5alfya ,vertexColors[5],123,0,312,0);    
    
    ktafa1_5alfya = scale(ktafa1_5alfya,0.4, 0.05 , 0.05);
    ktafa1_5alfya =translate(ktafa1_5alfya ,-0.77,0.16, -0.01);
    colorCube(ktafa1_5alfya ,vertexColors[0],123,0,312,0);

    ktafa2_5alfya = scale(ktafa2_5alfya,0.05, 0.05 , 0.4);
    ktafa2_5alfya =translate(ktafa2_5alfya ,-0.77,0.16, -0.01);
    colorCube(ktafa2_5alfya ,vertexColors[0],123,0,312,0);

    Ezaz_amamy =translate(Ezaz_amamy , 0.3,0.0, 0.0);
    Ezaz_amamy = scale(Ezaz_amamy, 0.4 , 0.4 ,0.6);
    colorCube(Ezaz_amamy , vertexColors[8],123,0,312,0);
}
function drawCubeCharacter(vec3_of_theta,vec3_of_tra)
{   var move = 1.5;
    cubee = true;
    theta4 = [vec3_of_theta[0],vec3_of_theta[1],vec3_of_theta[2]];
    tra4 = [vec3_of_tra[0],vec3_of_tra[1],vec3_of_tra[2]];
    for (var i = vertices.length - 1; i >= 0; i--) 
    {
        bodyCubee.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        headCubee.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
        rightleg.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        leftleg.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
        lefthand.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
        righthand.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 

        RocketBody.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        RocketBase.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        RocketIntro.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3])); 
        RocketSubIntro.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
        RocketSub2.push(vec4(vertices[i][0],vertices[i][1],vertices[i][2],vertices[i][3]));
    }

    bodyCubee = translate(bodyCubee , 0.0,0.0, 0.0);
    bodyCubee = scale(bodyCubee, 0.3 , 0.6 , 0.3);
    colorCube(bodyCubee ,vertexColors[0],180,280,262,340);

    headCubee =translate(headCubee , 0.0,0.6, 0.0);
    headCubee = scale(headCubee, 0.5 , 0.3 ,0.6);
    colorCube(headCubee , vertexColors[0],283,388,262,353);

    rightleg =translate(rightleg , -1.5,-0.7, 0.45);
    rightleg = scale(rightleg, 0.06 , 0.4 ,0.1);
    colorCube(rightleg ,vertexColors[0],180,280,262,340);

    leftleg =translate(leftleg , 1.5,-0.7, -0.45);
    leftleg = scale(leftleg, 0.06, 0.4 ,0.1);
    colorCube(leftleg ,vertexColors[0],180,280,262,340);

    lefthand =translate(lefthand , -2,-0.6, 0.0);
    lefthand = scale(lefthand, 0.1 , 0.24 , 0.1);
    lefthand = rotatec(lefthand,0,45);
    colorCube(lefthand ,vertexColors[0],180,280,262,340);

    righthand =translate(righthand , 2,-0.6, 0.0);
    righthand = scale(righthand, 0.1 , 0.24 , 0.1);
    righthand = rotatec(righthand,0,-45);
    colorCube(righthand ,vertexColors[0],180,280,262,340);

   RocketBase = translate(RocketBase , -0.9 ,0.0, 2.0);
    RocketBase = scale(RocketBase, 0.3 , 0.3 , 0.1);
    RocketBase = rotatec(RocketBase ,1 , 0);
    colorCube(RocketBase ,vertexColors[6],123,0,312,0); 
    
    RocketBody = translate(RocketBody , -0.25, 0.0, -3.0);
    RocketBody = scale(RocketBody, 1.0 , 0.15 , 0.1);
    RocketBody = rotatec(RocketBody, 1 , 90);
    colorCube(RocketBody ,vertexColors[1],123,0,312,0);

    RocketIntro = translate(RocketIntro , -1.25,0.0, -9.0);
    RocketIntro = scale(RocketIntro, 0.2 , 0.10 , 0.09);
    RocketIntro = rotatec(RocketIntro, 1 , 90);
    colorCube(RocketIntro ,vertexColors[6],123,0,312,0);

    RocketSubIntro = translate(RocketSubIntro,-2.5,0.0,-13.0);
    RocketSubIntro = scale(RocketSubIntro,0.1,0.08,0.07);
    RocketSubIntro = rotatec(RocketSubIntro, 1 , 90);
    colorCube(RocketSubIntro,vertexColors[3],123,0,312,0);

    RocketSub2 = translate(RocketSub2,-1.25,0.0,-30.0);
    RocketSub2 = scale(RocketSub2,0.2,0.05,0.03);
    RocketSub2 = rotatec(RocketSub2, 1 , 90);//71
    colorCube(RocketSub2,vertexColors[1],123,0,312,0);
}
window.onkeydown = function(e)
{

    rotates = true;
    console.log(e.which);
    var key = e.keyCode ? e.keyCode : e.which;
    for(var i = 0 ; i < 3 ; i++)
    {
        if(choose == 1)
            axis[i] =0;
        else if(choose == 2)
            axis2[i] =0;
        else if(choose == 3)
            axis3[i] =0;
        else if(choose == 4)
            axis4[i] =0;
        else if(choose == 5)
            axis5[i] =0;
    }
    //Zorar 1
    if (e.keyCode == '97')
    {
        if(choose == 1)
            axis[0] =3;
        else if(choose == 2)
            axis2[0] =3;
        else if(choose == 3)
            axis3[0] =3;
        else if(choose == 4)
            axis4[0] =3;
        else if(choose == 5)
            axis5[0] =3;
    }
    //Zorar 3
    else if (e.keyCode == '99')
    {
        if(choose == 1)
            axis[0] =-3;
        else if(choose == 2)
            axis2[0] =-3;
        else if(choose == 3)
            axis3[0] =-3;
        else if(choose == 4)
            axis4[0] =-3;
        else if(choose == 5)
            axis5[0] =-3;
    }
    //Zorar 4
    else if (e.keyCode == '100')
    {
        if(choose == 1)
            axis[1] =3;
        else if(choose == 2)
            axis2[1] =3;
        else if(choose == 3)
            axis3[1] =3;
        else if(choose == 4)
            axis4[1] =3;
        else if(choose == 5)
            axis5[1] =3;
    }
    //Zorar 6
    else if (e.keyCode == '102')
    {
        if(choose == 1)
            axis[1] =-3;
        else if(choose == 2)
            axis2[1] =-3;
        else if(choose == 3)
            axis3[1] =-3;
        else if(choose == 4)
            axis4[1] =-3;
        else if(choose == 5)
            axis5[1] =-3;
    }
    //Zorar 7
    else if (e.keyCode == '103')
    {
        if(choose == 1)
            axis[2] =3;
        else if(choose == 2)
            axis2[2] =3;
        else if(choose == 3)
            axis3[2] =3;
        else if(choose == 4)
            axis4[2] =3;
        else if(choose == 5)
            axis5[2] =3;
    }
    //Zorar 9
    else if (e.keyCode == '105')
    {
        if(choose == 1)
            axis[2] =-3;
        else if(choose == 2)
            axis2[2] =-3;
        else if(choose == 3)
            axis3[2] =-3;
        else if(choose == 4)
            axis4[2] =-3;
        else if(choose == 5)
            axis5[2] =-3;
    }
    else if (e.keyCode == '189')
    {
        if(choose == 1)
            w += 0.1;
        else if(choose == 2)
            w2 += 0.1;
        else if(choose == 3)
            w3 += 0.1;
        else if(choose == 4)
            w4 += 0.1;
        else if(choose == 5)
            w5 += 0.1;
    }
    else if (e.keyCode == '187')
    {
        if(choose == 1)
            w -= 0.1;
        else if(choose == 2)
            w2 -= 0.1;
        else if(choose == 3)
            w3 -= 0.1;
        else if(choose == 4)
            w4 -= 0.1;
        else if(choose == 5)
            w5 -= 0.1;
    }
    else if (e.keyCode == '32')
    {
        stop=!stop;
    }
    else if (e.keyCode == '39') //Odam
    {
        if(choose == 1)
        {
            tra[0] += 0.01;
            spinCar();
        }
        else if(choose == 2)
        {
            tra2[0] += 0.01;
            spinTank();
        }
        else if(choose == 3)
        {
             points = [];
    elAmamya_3gla = rotatec(elAmamya_3gla,2 ,70);
    
    colorCube(elAmamya_3gla);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,52* 36*sizeof['vec4'], flatten(points));


    points=[];
    El5alfya_ymeen_3gla = rotatec(El5alfya_ymeen_3gla,2,70);
    
    colorCube(El5alfya_ymeen_3gla);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,53* 36*sizeof['vec4'], flatten(points));

    points=[];
    El5alfya_shmal_3gla= rotatec(El5alfya_shmal_3gla,2,70);
    
    colorCube(El5alfya_shmal_3gla);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,54* 36*sizeof['vec4'], flatten(points));
            tra3[0] += 0.01;
            //spinHelicopter();
        }
        else if(choose == 4)
        {
            tra4[0] += 0.01;
            //spinHelicopter();
        }
        else if(choose == 5)
        {
            tra5[0] += 0.01;
            //spinHelicopter();
        }
        //spin();
    }
    else if (e.keyCode == '37') //Wara
    {
        if(choose == 1)
        {
            tra[0] -= 0.01;
            spinCar();
        }
        else if(choose == 2)
        {
            tra2[0] -= 0.01;
            spinTank();
        }
        else if(choose == 3)
        {
            tra3[0] -= 0.01;
            //spinHelicopter();
            points =[];
            elAmamya_3gla = rotatec(elAmamya_3gla,2 ,-70);
    
    colorCube(elAmamya_3gla);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,52* 36*sizeof['vec4'], flatten(points));


    points=[];
    El5alfya_ymeen_3gla = rotatec(El5alfya_ymeen_3gla,2,-70);
    
    colorCube(El5alfya_ymeen_3gla);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,53* 36*sizeof['vec4'], flatten(points));

    points=[];
    El5alfya_shmal_3gla= rotatec(El5alfya_shmal_3gla,2,-70);
    
    colorCube(El5alfya_shmal_3gla);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,54* 36*sizeof['vec4'], flatten(points));
            
        }
        else if(choose == 4)
        {
            tra4[0] -= 0.01;
            //spinHelicopter();
        }
        else if(choose == 5)
        {
            tra5[0] -= 0.01;
            //spinHelicopter();
        }
    }
    
    else{rotates = false;}
}
window.addEventListener('mousewheel', function(e)
{
    console.log("ok");
    var wDelta = e.wheelDelta < 0 ? 'down' : 'up';
    if(wDelta == "up")
    {
        if(choose == 1)
            tra[2]+=0.1;
        else if(choose == 2)
            tra2[2]+=0.1;    
        else if(choose == 3)
            tra3[2]+=0.1; 
        else if(choose == 4)
            tra4[2]+=0.1;
        else if(choose == 5)
            tra5[2]+=0.1;
    }
    else if (wDelta == "down") 
    {
        if(choose == 1)
            tra[2]-=0.1;
        else if(choose == 2)
            tra2[2]-=0.1;
        else if(choose == 3)
            tra3[2]-=0.1;
        else if(choose == 4)
            tra4[2]-=0.1;
        else if(choose == 5)
            tra5[2]-=0.1;
    }
});
window.onmousemove = function(e)
{
    if(press)
    {
        if(before == 0 )
        {
            before = vec2(2*event.clientX/canvas.width,
            2*(canvas.height-event.clientY)/canvas.height);
        }
        else
        {
            for(var i = 0 ; i<3 ; i++)
            {
                if(choose == 1)
                    axis[i]=0;
                else if(choose == 2)
                    axis2[i]=0;
                else if(choose == 3)
                    axis3[i]=0;
                else if(choose == 4)
                    axis4[i]=0;
                else if(choose == 5)
                    axis5[i]=0;
            }

            var after =  vec2(2*event.clientX/canvas.width,
            2*(canvas.height-event.clientY)/canvas.height);
            if(choose == 1)
            {
                axis[1] =(-before[0]+after[0]) *-300;
                axis[0] =(before[1]-after[1]) *-300;
            }
            else if(choose == 2)
            {
                axis2[1] =(-before[0]+after[0]) *-300;
                axis2[0] =(before[1]-after[1]) *-300;
            }
            else if(choose == 3)
            {
                axis3[1] =(-before[0]+after[0]) *-300;
                axis3[0] =(before[1]-after[1]) *-300;
            }
            else if(choose == 4)
            {
                axis4[1] =(-before[0]+after[0]) *-300;
                axis4[0] =(before[1]-after[1]) *-300;
            }
            else if(choose == 5)
            {
                axis5[1] =(-before[0]+after[0]) *-300;
                axis5[0] =(before[1]-after[1]) *-300;
            }
            before = after;
        }  
    }
}
window.onmousedown = function(e)
{
    if(e.which == '1')
    {
        for(var i = 0 ; i<3 ; i++)
        {
            if(choose == 1)
                axis[i]=0;
            else if(choose == 2)
                axis2[i]=0;
            else if(choose == 3)
                axis3[i]=0;
            else if(choose == 4)
                axis4[i]=0;
            else if(choose == 5)
                axis5[i]=0;
        }
        before = 0;
        rotatem = true;
        press = true;
    }
    else if(e.which == '3')
    {
        if(choose == 1)
        {
            console.log("good");
            tra[0]= 2*event.clientX/canvas.width - 1;
            tra[1]= 2*(canvas.height-event.clientY)/canvas.height - 1;
        }
        else if(choose == 2)
        {
            tra2[0]= 2*event.clientX/canvas.width - 1;
            tra2[1]= 2*(canvas.height-event.clientY)/canvas.height - 1;
        } 
        else if(choose == 3)
        {
            tra3[0]= 2*event.clientX/canvas.width - 1;
            tra3[1]= 2*(canvas.height-event.clientY)/canvas.height - 1;
        }
        else if(choose == 4)
        {
            tra4[0]= 2*event.clientX/canvas.width - 1;
            tra4[1]= 2*(canvas.height-event.clientY)/canvas.height - 1;
        }   
        else if(choose == 5)
        {
            tra5[0]= 2*event.clientX/canvas.width - 1;
            tra5[1]= 2*(canvas.height-event.clientY)/canvas.height - 1;
        }       
    }
}
window.onmouseup = function(e)
{
    for(var i = 0 ; i<3 ; i++)
    {
        if(choose == 1)
            axis[i]=0;
        else if(choose == 2)
            axis2[i]=0;
        else if(choose == 3)
            axis3[i]=0;
        else if(choose == 4)
            axis4[i]=0;
        else if(choose == 5)
            axis5[i]=0;
    }
    before = 0;
    rotatem = false;
    press = false;
}
function movetl2a()
{
    points=[];
    RocketSub2=translate(RocketSub2,0.0,0,-0.1);
    colorCube(RocketSub2,vertexColors[1]);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,69* 36*sizeof['vec4'], flatten(points));
}
function spinCar()
{
    points = [];
    leftwheel = rotatec(leftwheel,1,70);
    
    colorCube(leftwheel);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,2* 36*sizeof['vec4'], flatten(points));

    points = [];
    leftwheel2 = rotatec(leftwheel2,1,70);
    
    colorCube(leftwheel2);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,4* 36*sizeof['vec4'], flatten(points));

    points = [];
    rightwheel = rotatec(rightwheel,1,70);
    
    colorCube(rightwheel);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,3* 36*sizeof['vec4'], flatten(points));

    points = [];
    rightwheel2 = rotatec(rightwheel2,1,70);
    
    colorCube(rightwheel2);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,5* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel1car = rotatec(wheel1car,1,70);
    
    colorCube(wheel1car);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,6* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel2car = rotatec(wheel2car,1,70);
    
    colorCube(wheel2car);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,7* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel3car = rotatec(wheel3car,1,70);
    
    colorCube(wheel3car);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,8* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel4car = rotatec(wheel4car,1,70);
    
    colorCube(wheel4car);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,9* 36*sizeof['vec4'], flatten(points));
}
function spinTop(way)
{
    if(choose == 2)
    {
        if(way== 0)
        {
            spinAnti = true;
            rotates = true;
        }
        points = [];
        saroo5 = rotatec(saroo5,1,2,fo2elbody);
        
        colorCube(saroo5);
        gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER,16* 36*sizeof['vec4'], flatten(points));

        points = [];
        fo2fo2elbody = rotatec(fo2fo2elbody,1,2);
        
        colorCube(fo2fo2elbody);
        gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER,17* 36*sizeof['vec4'], flatten(points));

        points = [];
        fo2elbody = rotatec(fo2elbody,1,2);
        
        colorCube(fo2elbody);
        gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER,18* 36*sizeof['vec4'], flatten(points));
    }   
}
function spinTank()
{
    points = [];
    wheel0 = rotatec(wheel0,2,55);
    
    colorCube(wheel0);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,19* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel1 = rotatec(wheel1,2,55);
    
    colorCube(wheel1);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,20* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel2 = rotatec(wheel2,2,55);
    
    colorCube(wheel2);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,21* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel3 = rotatec(wheel3,2,55);
    
    colorCube(wheel3);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,22* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel4 = rotatec(wheel4,2,55);
    
    colorCube(wheel4);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,23* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel5 = rotatec(wheel5,2,55);
    
    colorCube(wheel5);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,24* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel6 = rotatec(wheel6,2,55);
    
    colorCube(wheel6);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,25* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel7 = rotatec(wheel7,2,55);
    
    colorCube(wheel7);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,26* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel8 = rotatec(wheel8,2,55);
    
    colorCube(wheel8);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,27* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheel9 = rotatec(wheel9,2,55);
    
    colorCube(wheel9);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,28* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani0 = rotatec(wheeltani0,2,55);
    
    colorCube(wheeltani0);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,29* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani1 = rotatec(wheeltani1,2,55);
    
    colorCube(wheeltani1);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,30* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani2 = rotatec(wheeltani2,2,55);
    
    colorCube(wheeltani2);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,31* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani3 = rotatec(wheeltani3,2,55);
    
    colorCube(wheeltani3);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,32* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani4 = rotatec(wheeltani4,2,55);
    
    colorCube(wheeltani4);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,33* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani5 = rotatec(wheeltani5,2,55);
    
    colorCube(wheeltani5);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,34* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani6 = rotatec(wheeltani6,2,55);
    
    colorCube(wheeltani6);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,35* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani7 = rotatec(wheeltani7,2,55);
    
    colorCube(wheeltani7);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,36* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani8 = rotatec(wheeltani8,2,55);
    
    colorCube(wheeltani8);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,37* 36*sizeof['vec4'], flatten(points));

    points = [];
    wheeltani9 = rotatec(wheeltani9,2,55);
    
    colorCube(wheeltani9);
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
    gl.bufferSubData(gl.ARRAY_BUFFER,38* 36*sizeof['vec4'], flatten(points));
}  

var count=0;
var speed = 50;
function spinHelicopter()
{
    if(choose == 3)
    {
        helispin = true;
        points = [];
        ktafa1 = rotatec(ktafa1,1,70);
        
        colorCube(ktafa1);
        gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER,55* 36*sizeof['vec4'], flatten(points));

        points = [];
        ktafa2 = rotatec(ktafa2,1,70);
        
        colorCube(ktafa2);
        gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER,56* 36*sizeof['vec4'], flatten(points));

        points = [];
        ktafa1_5alfya = rotatec(ktafa1_5alfya,1,70);
        
        colorCube(ktafa1_5alfya);
        gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER,58* 36*sizeof['vec4'], flatten(points));

        points = [];
        ktafa2_5alfya = rotatec(ktafa2_5alfya,1,70);
        
        colorCube(ktafa2_5alfya);
        gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER,59* 36*sizeof['vec4'], flatten(points));
    }
}

var oncewalk = true;
var oncehi = false;

count=0 , ind = 2;
var walking1=  [-45 , -45 , 45, 45];
speed = 50;
function walk()
{
    if(choose == 4)
    if (oncewalk)
    {
        count++; 
        if(count == speed)
        {  
            var walking  = walking1[ind%4];

            points = [] ;
            righthand = rotatec(righthand,0,walking);
            colorCube(righthand);
            gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
            gl.bufferSubData(gl.ARRAY_BUFFER,63* 36*sizeof['vec4'], flatten(points));
            
            points = [] ;
            lefthand = rotatec(lefthand,0,-walking);
            colorCube(lefthand);
            gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
            gl.bufferSubData(gl.ARRAY_BUFFER,64* 36*sizeof['vec4'], flatten(points));

            points = [] ;
            rightleg = translate(rightleg,0,0,-walking/1000);
            colorCube(rightleg);
            gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
            gl.bufferSubData(gl.ARRAY_BUFFER,65* 36*sizeof['vec4'], flatten(points));
            count = 0;

            points = [] ;
            leftleg = translate(leftleg,0,0,walking/1000);
            colorCube(leftleg);
            gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer);
            gl.bufferSubData(gl.ARRAY_BUFFER,66* 36*sizeof['vec4'], flatten(points));

            ind++; 
        }
    } 
}