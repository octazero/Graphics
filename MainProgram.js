"use strict";
var canvas,vPosition,vBuffer;
var gl;
var thetaLoc,traLoc;
var numShapes = 0;
var x = 255;
var y = 200;
var allpoints=[];
var points = [];
var texCoordsArray = [];
var colors = [];
var before = 0;
var axis = [0,0,0], axis2 = [0,0,0], axis3 = [0,0,0], axis4 = [0,0,0], axis5 = [0,0,0];
var theta = [0,0,0], tra = [0,0,0] , theta2 = [0,0,0], tra2 = [0,0,0], 
theta3 = [0,0,0], tra3 = [0,0,0], theta4 = [0,0,0], tra4 = [0,0,0], theta5 = [0,0,0], tra5 = [0,0,0];
var w = 0.0, w2 = 0.0, w3 = 0.0, w4 = 0.0, w5 = 0.0;
var wLoc;
var choose;
var spinAnti = false;
var car = false, tank = false, heli = false, cubee = false, rocket = false;
var carVertices = 540;
var tankVertices = 1080;
var heliVertices = 576, helispin = false;
var cubeeVertices = 216;
var saroo5Vertices = 180;
var texture;

var vertexColors = [
        [ 0.0, 0.0, 0.0, 1.0 ],  // black
        [ 0.0, 0.0, y/x, 1.0 ],  // Darkblue
        [ y/x, 0.0, 0.0, 1.0 ],  // red
        [ y/x, y/x, 0.0, 1.0 ],  // yellow
        [ 0.0, y/x, 0.0, 1.0 ],  // Darkgreen
        [ y/x, 0.0, y/x, 1.0 ],  // magenta
        [ 0.0, y/x, y/x, 1.0 ],  // cyan
        [ 1.0, 1.0, 1.0, 1.0 ],   // white
        [ 0.0, 0.0, 0.0, 0.7 ] 
];
var vertices = [
        vec4( -0.5, 0.5, 0.5, 1.0),
        vec4(  0.5, 0.5, 0.5, 1.0 ),
        vec4(  0.5,-0.5, 0.5, 1.0 ),
        vec4( -0.5,-0.5, 0.5, 1.0 ),
        vec4( -0.5, 0.5, -0.5, 1.0),
        vec4(  0.5, 0.5, -0.5, 1.0 ),
        vec4(  0.5,-0.5, -0.5, 1.0 ),
        vec4( -0.5,-0.5, -0.5, 1.0)
];

//Perspective
var near = 1;
var far = -1;
var radius = 5.0;
var theta1  = 0.0;
var phi    = 0.0;
var dr = 5.0 * Math.PI/180.0;

var  fovy = 20.0;  // Field-of-view in Y direction angle (in degrees)
var  aspect;       // Viewport aspect ratio

var mvMatrix, pMatrix;
var modelView, projection;
var eye;
const at = vec3(0.0, 0.0, 0.0);
const up = vec3(0.0, 1.0, 0.0);
var image;

//Light
var lightPosition = vec4(1.0, 1.0, 0.0, 0.0 );
var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0 );
var lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
var lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );

var materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
var materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0);
var materialSpecular = vec4( 1.0, 0.8, 0.0, 1.0 );
var materialShininess = 100.0;

var ambientColor, diffuseColor, specularColor;
var viewerPos;
var program;
var lighton=false;
var normalsArray = [];

function configureTexture( image ) {
    texture = gl.createTexture();
    gl.bindTexture( gl.TEXTURE_2D, texture );
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGB,
         gl.RGB, gl.UNSIGNED_BYTE, image );
    gl.generateMipmap( gl.TEXTURE_2D );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER,
                      gl.NEAREST_MIPMAP_LINEAR );
    gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
    gl.uniform1i(gl.getUniformLocation(program, "texture"), 0);
}

window.onload = function init()
{
    points = [];
    canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );
    aspect =  canvas.width/canvas.height;
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    gl.enable(gl.DEPTH_TEST);
    //
    //  Load shaders and initialize attribute buffers
    //
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
     
    drawCar(vec3(90,180,0),vec3(-3.8,-2.0,0.6)); 
    drawDababa(vec3(0,180,0),vec3(-3.9,2.4,0.6));
    drawHelicopter(vec3(0,180,0),vec3(-0.9,2.4,0.6));
    drawCubeCharacter(vec3(0,180,0),vec3(-1.5,-2.5,0.6));

    var nBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW );

    var vNormal = gl.getAttribLocation( program, "vNormal" );
    gl.vertexAttribPointer( vNormal, 3, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vNormal );
    
    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.DYNAMIC_DRAW );

    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.DYNAMIC_DRAW );
    console.log(points.length);

    vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    var tBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, tBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(texCoordsArray), gl.STATIC_DRAW );

    var vTexCoord = gl.getAttribLocation( program, "vTexCoord" );
    gl.vertexAttribPointer( vTexCoord, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vTexCoord );

    thetaLoc = gl.getUniformLocation(program, "theta");
	traLoc = gl.getUniformLocation(program, "tra");
	wLoc = gl.getUniformLocation( program, "w" );
    viewerPos = vec3(0.0, 0.0, -20.0 );
    modelView = gl.getUniformLocation( program, "modelView" );
    projection = gl.getUniformLocation( program, "projection" );

    
    gl.uniform1f(gl.getUniformLocation(program,
       "shininess"),materialShininess);

    /*document.getElementById("Button1").onclick = function(){near  *= 1.1; far *= 1.1;};
    document.getElementById("Button2").onclick = function(){near *= 0.9; far *= 0.9;};*/
    document.getElementById("Button3").onclick = function(){radius *= 2.0;};
    document.getElementById("Button4").onclick = function(){radius *= 0.5;};
    document.getElementById("Button5").onclick = function(){theta1 += dr;};
    document.getElementById("Button6").onclick = function(){theta1 -= dr;};
    document.getElementById("Button7").onclick = function(){phi += dr;};
    document.getElementById("Button8").onclick = function(){phi -= dr;};
    document.getElementById("Button9").onclick = function(){choose = 1;};
     document.getElementById("Button20").onclick = function(){lighton=!lighton;};
    document.getElementById("Button10").onclick = function(){choose = 2;};
    document.getElementById("Button11").onclick = function(){choose = 3;};
    document.getElementById("Button12").onclick = function(){choose = 4;};
    document.getElementById("Button14").onclick = function(){spinTop(0);};
    document.getElementById("Button15").onclick = function(){spinTop(1);};
    document.getElementById("Button16").onclick = function(){spinHelicopter();};
    document.getElementById("Button18").onclick = function(){theta1+=0.5;};
    document.getElementById("Button19").onclick = function(){movetl2a();};

    numShapes = points.length;

    image = document.getElementById("texImage");
    configureTexture( image );

    for(x in points)
        allpoints.push(x);
    //event listeners for buttons
    render(); 
}

function colorCube(vertices , color ,x1,x2,y1,y2 )
{
    quad( 1, 0, 3, 2,vertices , color ,x1,x2,y1,y2);
    quad( 2, 3, 7, 6,vertices , color,123,x2,312,y2);
    quad( 3, 0, 4, 7,vertices , color,123,x2,312,y2);
    quad( 6, 5, 1, 2,vertices , color,123,x2,312,y2);
    quad( 4, 5, 6, 7,vertices , color,123,x2,312,y2);
    quad( 5, 4, 0, 1,vertices , color,123,x2,312,y2)
}
function quad(a, b, c, d ,vertices , color,x1,x2,y1,y2)
{
    var t1 = subtract(vertices[b], vertices[a]);
    var t2 = subtract(vertices[c], vertices[b]);
    var normal = cross(t1, t2);
    var normal = vec3(normal);
    var indices = [ a, b, c, a, c, d ];

    if( x1==123&&y1==312){
        x1=104;
        y1=512-276;
        x2=x1;
        y2=y1;
   }
   
     var texCoord = [
    vec2(x1/512, y1/512),
    vec2(x1/512, y2/512),
    vec2(x2/512, y2/512),
    vec2(x2/512, y1/512)
    ];
   
    for ( var i = 0; i < indices.length; ++i ) 
    {
        points.push(vec4( vertices[indices[i]] ));
        normalsArray.push(normal);
        colors.push(color);
    }
    texCoordsArray.push(texCoord[3]);
    texCoordsArray.push(texCoord[0]);
    texCoordsArray.push(texCoord[1]);
    texCoordsArray.push(texCoord[3]);
    texCoordsArray.push(texCoord[1]);
    texCoordsArray.push(texCoord[2]);
}

function render()
{


    if(!lighton){
        
 lightAmbient = vec4(0, 0, 0, 0 );
 lightDiffuse = vec4(0, 0, 0, 0 );
  lightSpecular =vec4(0, 0, 0, 0 );
    }
    else
    {
        lightAmbient = vec4(0.2, 0.2, 0.2, 1.0 );
        lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
        lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );
    }

    var ambientProduct = mult(lightAmbient, materialAmbient);
    var diffuseProduct = mult(lightDiffuse, materialDiffuse);
    var specularProduct = mult(lightSpecular, materialSpecular);

    gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
       flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
       flatten(diffuseProduct) );
    gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"),
       flatten(specularProduct) );
    gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"),
       flatten(lightPosition) );


    if(helispin)
    {
        count++;
        if (count >speed)
        {
        spinHelicopter();
        count = 0;
        if(speed !=0)
            speed -=5;
        }
    }
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    if (rotates || rotatem)
    {     
        if(choose == 1)
            for (var i=0;i<3;i++)
            {
                theta[i] += axis[i];
            } 
        else if(choose == 2)
            for (var i=0;i<3;i++)
            {
                theta2[i] += axis2[i];
            } 
        else if(choose == 3)
            for (var i=0;i<3;i++)
            {
                theta3[i] += axis3[i];
            } 
        else if(choose == 4)
            for (var i=0;i<3;i++)
            {
                theta4[i] += axis4[i];
            } 
        else if(choose == 5)
            for (var i=0;i<3;i++)
            {
                theta5[i] += axis5[i];
            } 
        rotates = false;
    }

    eye = vec3(radius*Math.sin(theta1)*Math.cos(phi),
        radius*Math.sin(theta1)*Math.sin(phi), radius*Math.cos(theta1));

    mvMatrix = lookAt(eye, at , up);
    pMatrix = perspective(fovy, aspect, near, far);

    gl.uniformMatrix4fv( modelView, false, flatten(mvMatrix) );
    gl.uniformMatrix4fv( projection, false, flatten(pMatrix) );

    if(car)
    {
        gl.uniform3fv(thetaLoc, theta);

        gl.uniform3fv(traLoc, tra);

        gl.uniform1f( wLoc, w );

        gl.drawArrays( gl.TRIANGLES, 0, carVertices );
    }
    
    if(tank)
    {
        gl.uniform3fv(thetaLoc, theta2);

        gl.uniform3fv(traLoc, tra2);

        gl.uniform1f( wLoc, w2 );

        gl.drawArrays( gl.TRIANGLES, carVertices, tankVertices );
    }

    if(heli)
    {
        gl.uniform3fv(thetaLoc, theta3);

        gl.uniform3fv(traLoc, tra3);

        gl.uniform1f( wLoc, w3 );

        gl.drawArrays( gl.TRIANGLES, carVertices+tankVertices, heliVertices );
    }


    if(cubee)
    {
        gl.uniform3fv(thetaLoc, theta4);

        gl.uniform3fv(traLoc, tra4);

        gl.uniform1f( wLoc, w4 );

        gl.drawArrays( gl.TRIANGLES, carVertices+tankVertices+heliVertices, cubeeVertices+saroo5Vertices );

        walk();
    }

    if(rocket)
    {
        gl.uniform3fv(thetaLoc, theta5);

        gl.uniform3fv(traLoc, tra5);

        gl.uniform1f( wLoc, w5 );

        gl.drawArrays( gl.TRIANGLES, carVertices+tankVertices+heliVertices+cubeeVertices, saroo5Vertices );
    }

    if(!change)
    requestAnimFrame( render );
    else{
       change = !change;
    }
}